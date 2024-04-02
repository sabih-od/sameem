import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { user } from 'src/store/slices/authSlice';
// import SimplePeer from 'simple-peer';

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL);

const styles = {
    streamTitle: {
        fontSize: '36px',
        marginBottom: '20px',
        display: 'none'
    },
    streamerVideo: {
        width: '100%',
        minHeight: '70vh',
        border: '1px solid #ccc',
        marginBottom: '20px',
    },
    streamingBtnGroup: {
        textAlign: 'center',
    },
    startStreamingBtn: {
        padding: '10px 20px',
        fontSize: '18px',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
    },
    endStreamingBtn: {
        padding: '10px 20px',
        fontSize: '18px',
        cursor: 'pointer',
        backgroundColor: '#dc3545',
        color: '#fff',
        border: 'none',
    }
};

const Stream = () => {
    const [localStream, setLocalStream] = useState(null);
    const [localStreamArr, setLocalStreamArr] = useState([]);

    // for streaming through canvas
    const localCanvasRef = useRef();
    const localCanvasContextRef = useRef();
    const localVideoRef = useRef();

    const [peer, setPeer] = useState(null)
    const [peerId, setPeerId] = useState(null);
    const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
    const peerInstance = useRef();
    const currentUserVideoRef = useRef();
    const remoteVideoRef = useRef();
    
    // const collectStreams = (mediaStream) => {
    //     setLocalStreamArr(prevState => [...prevState, mediaStream]);
    // };

    const start = () => {
        if (!localStream) {
            const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        
            getUserMedia({ video: true, audio: true }, function(mediaStream) {
                currentUserVideoRef.current.srcObject = mediaStream
                // collectStreams(mediaStream)
                setLocalStream(mediaStream)
                socket.emit('stream-status', 'Connect')
            }, function(error) {
                console.log('error', error)
            });
        }
    }

    const end = () => {
        // localStreamArr.forEach((data) => {
        //     data.getTracks().forEach(track => track.stop());
        //     if (data) data.getTracks().forEach(track => track.stop());
        // })

        if (localStream) localStream.getTracks().forEach(track => track.stop());
        if (currentUserVideoRef.current) currentUserVideoRef.current.srcObject = null;
        setLocalStream(null)
        socket.emit('stream-status', 'Disconnect')
    }
    

    const clientCome = (clientPeerId = null, localStream = null) => {
        console.log('localStream', localStream)

        if(localStream) {
            socket.emit('stream-client-request', {
                clientPeerId: clientPeerId,
                message: 'Accept'
            })
            peerInstance.current.call(clientPeerId ?? remotePeerIdValue, localStream);
        }
        else socket.emit('stream-client-request', {
                clientPeerId: clientPeerId,
                message: 'Reject'
            })

        // if(window.location.pathname === '/stream/') {
        //     const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        
        //     getUserMedia({ video: true, audio: true }, function(mediaStream) {
        //         socket.emit('stream-status', 'accept')

        //         collectStreams(mediaStream)
        //         peerInstance.current.call(clientPeerId ?? remotePeerIdValue, mediaStream);

        //         // const call = peerInstance.current.call(clientPeerId ?? remotePeerIdValue, mediaStream);
        //         // call.on('stream', function(remoteStream) {
        //         //   remoteVideoRef.current.srcObject = remoteStream;
        //         //   remoteVideoRef.current.play();
        //         // });
        //     }, function(error) {
        //       console.log('error', error)
        //     });
        // } else {
        //     socket.emit('stream-status', 'reject')
        // }
    };
    
    useEffect(() => {
        const initializePeer = async () => {
            const Peer = (await import('peerjs')).default;
            await setPeer(new Peer(undefined, {
                config: {
                    'iceServers': [
                        {
                            'urls': [
                                'stun:stun.l.google.com:19302',
                                'stun:stun1.l.google.com:19302',
                                'stun:stun2.l.google.com:19302'
                            ]
                        }
                    ]
                }
            }));
        };
        initializePeer();
    }, []);

    useEffect(() => {
        const handleStreamEvent = (ClientPeerId) => {
            clientCome(ClientPeerId, localStream);
        };
    
        socket.on('stream', handleStreamEvent);
    
        return () => {
            socket.off('stream', handleStreamEvent);
        };
    }, [localStream])

    useEffect(() => {
        if (!peer) return;

        peer.on('open', function(id) {
            setPeerId(id);
        });

        // peer.on('call', function(call) {
        //     const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        //     getUserMedia({ video: true, audio: true }, function(mediaStream) {
        //         call.answer();

        //     }, function(error) {
        //         console.log('error', error)
        //     });
        // });

        peerInstance.current = peer;

        return () => {
            peer.off('open');
            // peer.off('call');
        };
    }, [peer]);
    
    return (        
        <div style={{ textAlign: 'center' }}>
            <h1 style={styles.streamTitle}>
                <input type='text' value={peerId} disabled/>
            </h1>
            <div style={styles.streamerVideo}>
                <video ref={currentUserVideoRef} autoPlay={true} muted={true}/>
            </div>
            <div style={styles.streamingBtnGroup}>
                <button style={styles.startStreamingBtn} onClick={start}>Start Streaming</button>
                <button style={styles.endStreamingBtn} onClick={end}>End Streaming</button>
            </div>

            {/* <input type='text' value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)}/>
            <button onClick={startStreaming}>Call</button> */}



            <div>
              <video ref={remoteVideoRef} autoPlay={true} muted={true}/>
            </div>
        </div>
    );
};

export default Stream;
