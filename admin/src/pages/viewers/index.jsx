import { createContext, useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import { user } from 'src/store/slices/authSlice';

// import SimplePeer from 'simple-peer';
// const peer = new SimplePeer({ initiator: false, trickle: false, config: { iceServers } });

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL);

const Viewers = () => {
    const [peer, setPeer] = useState(null);
    const [peerId, setPeerId] = useState(null);
    const [streamBtn, setStreamBtn] = useState(false);
    const [remotePeerIdValue, setRemotePeerIdValue] = useState('');
    const peerInstance = useRef();
    const currentUserVideoRef = useRef();
    const remoteVideoRef = useRef();

    const conditionalStyle = {
        display: streamBtn ? 'block' : 'none',
    };

    const streamStatusFunc = (message) => {
        console.log(message)
        if(message === 'Disconnect') remoteVideoRef.current.srcObject = null;
    }

    const streamClientRequestFunc = ({clientPeerId, message}) => {
        if(clientPeerId === peerId) if(message === 'Accept') setStreamBtn(true)
    }
    
    useEffect(() => {
        const initializePeer = async () => {
            const Peer = (await import('peerjs')).default;
            // await setPeer(new Peer(undefined, {
            //     config: {
            //         'iceServers': [
            //             {
            //                 'urls': [
            //                     'stun:stun.l.google.com:19302',
            //                     'stun:stun1.l.google.com:19302',
            //                     'stun:stun2.l.google.com:19302'
            //                 ]
            //             }
            //         ]
            //     }
            // }));
            await setPeer(new Peer(undefined, {
                host: process.env.NEXT_PUBLIC_HOST,
                port: 3014,
                path: "/peerjs",
            }));
        };
        initializePeer();
    }, []);


    useEffect(() => {
        if (!peer) return;

        peer.on('open', function(id) {
            setPeerId(id);
        });

        peer.on('call', function(call) {
            call.answer()
            call.on('stream', function(remoteStream) {
                if(streamBtn) remoteVideoRef.current.srcObject = remoteStream;
            });
        });
        
        return () => {
            peer.off('open');
            peer.off('call');
        };
    }, [peer, streamBtn]);

    useEffect(() => {
        socket.on('stream-client-request', streamClientRequestFunc)
        socket.on('stream-status', streamStatusFunc)
        socket.emit('stream', peerId)
        return () => {
            socket.off('stream-client-request', streamClientRequestFunc);
            socket.off('stream-status', streamStatusFunc);
        }
    }, [peerId])

    // const call = () => {
    //     const getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
        
    //     getUserMedia({ video: false, audio: true }, function(mediaStream) {
    //         // console.log("remotePeerIdValue", remotePeerIdValue)
    //         const call = peer.call(remotePeerIdValue, mediaStream);

    //         call.on('stream', function(remoteStream) {
    //           console.log('remoteStream', remoteStream)
    //           remoteVideoRef.current.srcObject = remoteStream;
    //           remoteVideoRef.current.play();
    //         });
    //     }, function(error) {
    //       console.log('error', error)
    //     });
    // };

    return (
        <div className='container'>
            {/* <h4>My Peer Id: <input style={{width:'100%'}} type='text' value={peerId} disabled/> </h4> */}
            {/* <input type='text' value={remotePeerIdValue} onChange={e => setRemotePeerIdValue(e.target.value)}/> */}
            {/* <button onClick={call}>Call</button> */}

            <button onClick={() => socket.emit('stream', peerId)} className='buttonclass' style={conditionalStyle}>Join Stream</button>

            <div id="videoContainer"></div>

            <div>
              <video ref={currentUserVideoRef} autoPlay={true} muted={true}/>
            </div>
            <div>
              <video ref={remoteVideoRef} autoPlay={true}/>
            </div>
        </div>
    );
};

export default Viewers;
