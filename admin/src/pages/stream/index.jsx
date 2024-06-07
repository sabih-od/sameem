import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { user } from 'src/store/slices/authSlice';
// import SimplePeer from 'simple-peer';
import { urlWithParams, getToken, apiUrl } from '../../services/global';

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
    const [mediaStream, setMediaStream] = useState(null);

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
    const [broadcastId, setBroadcastId] = useState('');

    

    const start = async () => {
        try {
            const startBroadcastResponse = await fetch(`${apiUrl()}/auth/start-broadcast`, {
                method: 'POST',
            });
            const startBroadcastData = await startBroadcastResponse.json();
            setBroadcastId(startBroadcastData.broadcastId);
            const streamUrl = startBroadcastData.data.ingestionAddress + '/' + startBroadcastData.data.streamName;
            const mediaRecorder = new MediaRecorder(mediaStream, {
                mimeType: 'video/webm',
                videoBitsPerSecond: 3 * 1024 * 1024,
            });
            mediaRecorder.ondataavailable = async (event) => {
                if (event.data.size > 0) {
                    const formData = new FormData();
                    formData.append('video', event.data);
                    formData.append('streamUrl', streamUrl);
                    console.log(streamUrl);
                    try {
                        await fetch(`${apiUrl()}/stream/upload-video?broadcastId=${startBroadcastData.broadcastId}`, {
                            method: 'POST',
                            body: formData,
                        });
                    } catch (error) {
                        console.error('Error uploading video chunk:', error);
                    }
                }
            };
            mediaRecorder.start(1000); // Record a chunk every 1 second
        } catch (error) {
            console.error('Error starting broadcast:', error);
        }

  
    }

    const end = () => {
   

        if (localStream) localStream.getTracks().forEach(track => track.stop());
        if (currentUserVideoRef.current) currentUserVideoRef.current.srcObject = null;
        setLocalStream(null)
        socket.emit('stream-status', 'Disconnect')
    }


    const clientCome = (clientPeerId = null, localStream = null) => {
        console.log('localStream', localStream)

        if (localStream) {
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

       
    };

    useEffect(() => {
        const getMediaStream = async () => {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
            setMediaStream(stream);
          } catch (error) {
            console.error('Error accessing media devices:', error);
          }
        };
    
        getMediaStream();
    
        return () => {
          if (mediaStream) {
            mediaStream.getTracks().forEach(track => track.stop());
          }
        };
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

   


  const handleGoogleAuth = async () => {
    try {
      // Redirect user to backend for Google OAuth2 authentication
      window.location.href = 'http://localhost:4000/auth/google';
    } catch (error) {
      console.error('Error with Google authentication:', error);
    }
  };
    useEffect(() => {
        if (window.location.href.includes('http://localhost:4000/auth/google/callback')) {
            // Perform any necessary actions after authentication (e.g., fetch user data)
            // For example, you can fetch user data from the backend here
            console.log('Authenticated successfully!');
        }
    }, [])

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={styles.streamTitle}>
                <input type='text' value={peerId} disabled />
            </h1>
            <div style={styles.streamerVideo}>
            <video
            width="560"
            height="315"
            autoPlay
            controls
            ref={videoRef => {
              if (videoRef && mediaStream) {
                videoRef.srcObject = mediaStream;
              }
            }}
          ></video>
            </div>
            <button style={styles.startStreamingBtn} onClick={handleGoogleAuth}>Authenticate</button>

            <div style={styles.streamingBtnGroup}>
                <button style={styles.startStreamingBtn} onClick={start}>Start Streaming</button>
                <button style={styles.endStreamingBtn} onClick={end}>End Streaming</button>
            </div>
            {/* <input type='text' value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)}/>
            <button onClick={startStreaming}>Call</button> */}



            <div>
                <video ref={remoteVideoRef} autoPlay={true} muted={true} />
            </div>
        </div>
    );
};

export default Stream;
