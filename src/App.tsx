import { useState } from "react";
import "./App.css";

import AgoraUIKit from "agora-react-uikit";


const APP_ID = 'c601d4e4b3244aff96a2d5fe7a3729af';
const TOKEN =
  '007eJxTYCgLz0oVUMh37ou18TNVlVlSUXn4L0/5ytxung+3U+tnPVJgSDYzMEwxSTVJMjYyMUlMS7M0SzRKMU1LNU80NjeyTEx7EZeZ2hDIyLDvtSQrIwMEgvh8DMkZiXl5qTnxJanFJfGGDAwAGXYilA==';
const CHANNEL = 'channel_test_1';

function App() {
  const [videoCall, setVideoCall] = useState(false);

  const rtcProps = {
    appId: APP_ID,
    channel: CHANNEL,
    token: TOKEN,
  };

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Join</h3>
  );
}

export default App;
