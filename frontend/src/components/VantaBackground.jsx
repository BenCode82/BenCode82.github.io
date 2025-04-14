import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min";

const VantaBackground = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (!vantaEffect.current && vantaRef.current) {

      vantaEffect.current = WAVES({
        el: vantaRef.current,
        THREE: THREE,

        color: 0x00ffff,
        shininess: 5,
        waveHeight: 100,
        waveSpeed: 0.2,
        zoom: 10,

        backgroundColor: 0x111111,
        mouseControls: true,
        touchControls: true,
      });

      // setTimeout(() => {
      //   window.dispatchEvent(new Event("resize"));
      // }, 100);
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
    </div>
  );
};

export default VantaBackground;
