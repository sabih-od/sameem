import { createContext, useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { user } from 'src/store/slices/authSlice';
// import SimplePeer from 'simple-peer';
// const peer = new SimplePeer({ initiator: false, trickle: false, config: { iceServers } });

const socket = io('https://service.demowebsitelinks.com:3011');

const Streaming = () => {
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
    
    useEffect(() => {
        const initializePeer = async () => {
            const Peer = (await import('peerjs')).default;
            const _peer = new Peer(undefined, {
              config: {
                iceServers: [
                  { urls: 'stun:stun.services.mozilla.com' },
                  { urls: 'stun:stun.l.google.com:19302' }
                ]
              }
          });
          setPeer(_peer);
        };
        initializePeer();
    }, []);

    useEffect(() => {
        if (!peer) return;

        peer.on('open', function(id) {
            setPeerId(id);
        });

        peerInstance.current = peer;

        return () => {
            peer.off('open');
        };
    }, [peer]);
    

    const call = () => {
        const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        
        getUserMedia({ video: true, audio: true }, function(mediaStream) {
            // currentUserVideoRef.current.srcObject = mediaStream;
            // currentUserVideoRef.current.play();

            console.log("remotePeerIdValue", remotePeerIdValue)
            const call = peerInstance.current.call(remotePeerIdValue, mediaStream);

            call.on('stream', function(remoteStream) {
              console.log('remoteStream', remoteStream)
              remoteVideoRef.current.srcObject = remoteStream;
              remoteVideoRef.current.play();
            });
        }, function(error) {
          console.log('error', error)
        });
    };

    // useEffect(() => {
    //     const video = () => {
    //         if (localCanvasRef.current && localVideoRef.current) {
    //             localCanvasRef.current.width = 800;
    //             localCanvasRef.current.height = 600;
    //             localCanvasContextRef.current = localCanvasRef.current.getContext('2d');

    //             localCanvasContextRef.current.drawImage(localVideoRef.current, 0, 0, localCanvasRef.current.width, localCanvasRef.current.height);
    //             socket.emit('stream', localCanvasRef.current.toDataURL('image/webp'));
    //         }
    //         requestAnimationFrame(video);
    //     };

    //     const interval = setInterval(video, 100); // Adjust the interval as needed

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className='container'>
            {/* <div className='canvas-video'>
                <video 
                    style={{ width: '680px', height: '320px' }}
                    autoPlay={true}
                    muted 
                    ref={localVideoRef}
                ></video>

                <canvas ref={localCanvasRef} style={{display: 'none'}}></canvas>
            </div> */}


            <h4>My Peer Id: <input type='text' value={peerId} disabled/> </h4>
            <input type='text' value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)}/>
            <button onClick={call}>Call</button>

            <div>
                <video ref={currentUserVideoRef} autoPlay={true} muted={true}/>
            </div>

            <div>
                <video ref={remoteVideoRef} autoPlay={true} muted={true}/>
            </div>
        </div>
    );
};

export default Streaming;
