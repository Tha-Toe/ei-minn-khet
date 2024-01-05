// WaveSVG.js

import React from 'react';

const BrownWave = () => {
  return (
    <svg
      id="wave"
      style={{ transform: 'rotate(0deg)', transition: '0.3s', background: "#ffffff" }}
      viewBox="0 0 1440 260"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill='#D0BCA7'
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stopColor="#D0BCA7" offset="0%" />
          <stop stopColor="#D0BCA7" offset="100%" />
        </linearGradient>
      </defs>
      <path
        style={{ transform: 'translate(0, 0px)', opacity: 1 }}
        fill="#D0BCA7"
        d="M0,130L120,130C240,130,480,130,720,147.3C960,165,1200,199,1440,190.7C1680,182,1920,130,2160,99.7C2400,69,2640,61,2880,82.3C3120,104,3360,156,3600,182C3840,208,4080,208,4320,177.7C4560,147,4800,87,5040,82.3C5280,78,5520,130,5760,151.7C6000,173,6240,165,6480,138.7C6720,113,6960,69,7200,47.7C7440,26,7680,26,7920,21.7C8160,17,8400,9,8640,13C8880,17,9120,35,9360,56.3C9600,78,9840,104,10080,134.3C10320,165,10560,199,10800,199.3C11040,199,11280,165,11520,156C11760,147,12000,165,12240,160.3C12480,156,12720,130,12960,121.3C13200,113,13440,121,13680,143C13920,165,14160,199,14400,186.3C14640,173,14880,113,15120,91C15360,69,15600,87,15840,99.7C16080,113,16320,121,16560,121.3C16800,121,17040,113,17160,108.3L17280,104L17280,260L17160,260C17040,260,16800,260,16560,260C16320,260,16080,260,15840,260C15600,260,15360,260,15120,260C14880,260,14640,260,14400,260C14160,260,13920,260,13680,260C13440,260,13200,260,12960,260C12720,260,12480,260,12240,260C12000,260,11760,260,11520,260C11280,260,11040,260,10800,260C10560,260,10320,260,10080,260C9840,260,9600,260,9360,260C9120,260,8880,260,8640,260C8400,260,8160,260,7920,260C7680,260,7440,260,7200,260C6960,260,6720,260,6480,260C6240,260,6000,260,5760,260C5520,260,5280,260,5040,260C4800,260,4560,260,4320,260C4080,260,3840,260,3600,260C3360,260,3120,260,2880,260C2640,260,2400,260,2160,260C1920,260,1680,260,1440,260C1200,260,960,260,720,260C480,260,240,260,120,260L0,260Z"
      ></path>
    </svg>
  );
};

export default BrownWave;
