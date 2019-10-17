import React from 'react';
import WaveSurfer from 'wavesurfer.js';
import Spectrogram from 'wavesurfer.js/dist/plugin/wavesurfer.spectrogram';

export const WSComp = () => {

  const containerRef = React.useRef();
  const containerSpecRef = React.useRef();
  const wsRef = React.useRef();

  React.useEffect(() => {
    wsRef.current = WaveSurfer.create({
      container: containerRef.current,
      waveColor: 'violet',
      progressColor: 'purple',
      plugins: [
        Spectrogram.create({
          wavesurfer: wsRef.current,
          container: containerSpecRef.current,
          labels: true
        })
      ]
    });

    wsRef.current.on('ready', function () {
      wsRef.current.play();
    });

    wsRef.current.load('/data/Anchicaya_LaLocaTrocha_2019.06.22_07.50.35_1.mp3');
  }, []);

  const handleColorChange = () => {
    wsRef.current.setWaveColor('green');
  }

  return (<div>
    <div ref={containerRef} />
    <div ref={containerSpecRef} />

    <button onClick={handleColorChange}>pasar a verde</button>
  </div>);
}