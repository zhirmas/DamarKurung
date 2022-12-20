import React from 'react';
import { HashRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from "./Component/Home";
import Background from './Component/Background';
import Menu from "./Component/Menu";
import Materi from "./Component/Materi";
import Video  from './Component/Video';
import Animasi from './Component/Animasi';
import Quiz from './Component/Quiz';
import song from "./Asset/song.mp3";
import Links from "./Component/Link";
import Tujuan from './Component/Tujuan';

function App() {

  function mute() {
    var audio = document.getElementById('song');
    if(audio.muted){
    audio.muted = false ;
  } else {
    audio.muted = true;
  }
  } 

  return (
    <HashRouter>
      <audio src={song} autoPlay loop id='song'/>
      <Background /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu mute={mute} />} />
        <Route path="/Materi" element={<Materi  mute={mute} />} />
        <Route path="/Video" element={<Video  mute={mute} />} />
        <Route path="/Animasi" element={<Animasi  mute={mute} />} />
        <Route path="/Link" element={<Links  mute={mute} />} />
        <Route path="/Quiz" element={<Quiz  mute={mute} />} />
        <Route path="/Tujuan" element={<Tujuan  mute={mute} />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
