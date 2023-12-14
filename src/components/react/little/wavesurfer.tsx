import { useEffect } from "react";
import WaveSurfer from "wavesurfer.js";

import Spectrogram from "wavesurfer.js/dist/plugins/spectrogram.esm.js";

export default () => {
  console.log("useEffect");

  useEffect(() => {
    const wavesurfer = WaveSurfer.create({
      container: "#waveform",
      waveColor: "#4F4A85",
      progressColor: "#383351",
      url: "/notes_astro3/assets/sorry.mp3",
    });

    wavesurfer.registerPlugin(
      Spectrogram.create({
        labels: true,
        height: 200,
        splitChannels: true,
      })
    );

    wavesurfer.on("interaction", () => {
      wavesurfer.play();
    });
  });
  return (
    <>
      <div id="waveform"></div>
    </>
  );
};
