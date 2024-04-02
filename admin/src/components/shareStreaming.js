import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { user } from 'src/store/slices/authSlice';
// import SimplePeer from 'simple-peer';

const socket = io(process.env.NEXT_PUBLIC_API_URL);

const ShareStreaming = () => {
    const [localStream, setLocalStream] = useState(null);
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

    const startStreaming = (clientPeerId = null) => {
        const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        
        getUserMedia({ video: true, audio: true }, function(mediaStream) {
            const call = peerInstance.current.call(clientPeerId ?? remotePeerIdValue, mediaStream);

            call.on('stream', function(remoteStream) {
              remoteVideoRef.current.srcObject = remoteStream;
              remoteVideoRef.current.play();
            });
        }, function(error) {
          console.log('error', error)
        });
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

        socket.on('stream', ClientPeerId => {
            startStreaming(ClientPeerId)
            console.log('ClientPeerId', ClientPeerId)
        })
    }, []);

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
        <div className='container'>
            <h4>My Peer Id: <input type='text' value={peerId} disabled/> </h4>
            {/* <input type='text' value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)}/>
            <button onClick={startStreaming}>Call</button> */}

            <div>
              <video ref={currentUserVideoRef} autoPlay={true} muted={true}/>
            </div>
            <div>
              <video ref={remoteVideoRef} autoPlay={true} muted={true}/>
            </div>
        </div>
    );
};

export default ShareStreaming;
