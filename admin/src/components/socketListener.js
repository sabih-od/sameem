import { createContext, useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { user } from 'src/store/slices/authSlice';
// import SimplePeer from 'simple-peer';
// const peer = new SimplePeer({ initiator: false, trickle: false, config: { iceServers } });

const socket = io('http://localhost:3011');
const iceServers = [
    { urls: 'stun:stun.services.mozilla.com' },
    { urls: 'stun:stun.l.google.com:19302' }
];

const SocketListener = () => {
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

        peer.on('call', function(call) {
            console.log("cal rec", call)
            const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

            getUserMedia({ video: true, audio: true }, function(mediaStream) {
                
                console.log("cal answser", mediaStream)
                call.answer();

            }, function(error) {
                console.log('error', error)
            });
        });

        peerInstance.current = peer;

        return () => {
            peer.off('open');
            peer.off('call');
        };
    }, [peer]);
    
    return (
        <div className='container'>
            <h4>My Peer Id: <input type='text' value={peerId} disabled/> </h4>

            <div>
                <video ref={currentUserVideoRef} autoPlay={true} muted={true}/>
            </div>

            <div>
                <video ref={remoteVideoRef} autoPlay={true} muted={true}/>
            </div>
        </div>
    );
};

export default SocketListener;
