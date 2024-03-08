import { createContext, useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { user } from 'src/store/slices/authSlice';

// import SimplePeer from 'simple-peer';
// const peer = new SimplePeer({ initiator: false, trickle: false, config: { iceServers } });

const socket = io('http://localhost:3011');

const Streaming = () => {
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

        peerInstance.current = peer;

        return () => {
            peer.off('open');
        };
    }, [peer]);
    

    const call = () => {
        const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        
        getUserMedia({ video: false, audio: true }, function(mediaStream) {
            // console.log("remotePeerIdValue", remotePeerIdValue)
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

    return (
        <div className='container'>
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
