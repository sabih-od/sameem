// components/SocketListener.js

import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import SimplePeer from 'simple-peer';


const socket = io('http://localhost:3011'); // Initialize Socket.IO client

const SocketListener = () => {
  const [me, setMe] = useState('')
  const [stream, setStream] = useState()
  const [receivingCall, setReceivingCall] = useState(false)
  const [caller, setCaller] = useState()
  const [callerSignal, setCallerSignal] = useState()
  const [callAccepted, setCallAccepted] = useState(false)
  const [idToCall, setIdToCall] = useState()
  const [callEnded, setCallEnded] = useState(false)
  const [name, setName] = useState()

  const myVideo = useRef()
  const userVideo = useRef()
  const connectionRef = useRef()

  useEffect(() => {
    console.log('navigator.mediaDevices', navigator.mediaDevices)
    navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then((stream) => {
      setStream(stream)
      myVideo.current.srcObject = stream
    })

    // set me user id
    socket.on('me', (id) => {
      setMe(id)
    });

    socket.on('callUser', (data) => {
      setReceivingCall(true)
      setCaller(data.from)
      setName(data.name)
      setCallerSignal(data.signal)
    });

    // Listening to the 'test' event emitted from the server
    socket.on('test', (data) => {
      console.log('Received test event:', data);
      // Handle the emitted data here
    });

    return () => {
      socket.disconnect(); // Clean up the socket connection
    };
  }, []);

  const callUser = (id) => {
    const peer = new SimplePeer({
      initiator: true,
      trickle: false,
      stream: stream
    })

    peer.on('signal', (data) => {
      socket.emit('callUser', {
        userToCall: id,
        signalData: data,
        from: me,
        name: name
      })
    })

    peer.on('stream', (stream) => {
      userVideo.current.srcObject = stream
    })

    socket.on('callAccepted', (signal) => {
      setCallAccepted(true)
      peer.signal(signal)
    })

    connectionRef.current = peer
  }

  const answerCall = () => {
    setCallAccepted(true)

    const peer = new SimplePeer({
      initiator: false,
      trickle: false,
      stream: stream
    })

    peer.on('signal', (data) => {
      socket.emit('answerCall', {signal: data, to: caller})
    })
  }

  const leaveCall = () => {
    setCallEnded(true)
    connectionRef.current.destroy()
  }

  return (
    <div className='container'>
      <div className='video-container'>
        <div className='video'>
          {stream && <video playsInline muted ref={myVideo} autoPlay style={{ width: '300px' }}/>}
        </div>
        <div className='video'>
          {(callAccepted || !callEnded) ? 
            <video playsInline muted ref={userVideo} autoPlay style={{ width: '300px' }}/>:
            null
          }
        </div>
      </div>

      <div className='myId'>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
        <input type='text' value={me} disabled placeholder='Me'/>
        <input type='text' value={idToCall} onChange={(e) => setIdToCall(e.target.value)} placeholder='IdToCall'/>
      </div>

      <div className='call-button'>
        {
          callAccepted && !callEnded ?
            <button type='button' onClick={() => leaveCall()}>Leave Call</button>
          :
            <button type='button' onClick={() => callUser(idToCall)}>Call</button>
        }
        {idToCall}
      </div>
    </div>
  );
};

export default SocketListener;
