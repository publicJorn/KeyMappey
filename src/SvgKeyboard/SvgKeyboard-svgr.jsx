import React from 'react'

const SvgComponent = props => (
  <svg
    viewBox="0 0 180 125"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={1.414}
    {...props}
  >
    <path fill="#d4d4d4" d="M0 0h180v125H0z" />
    <g id="prefix__Keys" fill="#da0000" fillRule="nonzero">
      <path
        id="prefix__Key_D"
        d="M169.339 114.051c0 .277-.223.5-.5.5H121.325a.5.5 0 0 1-.5-.5v-.09-47.334-.09a.5.5 0 0 1 .5-.5h47.514c.277 0 .5.223.5.5v47.514z"
      />
      <path
        id="prefix__Key_C"
        d="M113.927 114.051c0 .277-.223.5-.5.5H65.913a.5.5 0 0 1-.5-.5v-.09-47.334-.09a.5.5 0 0 1 .5-.5h47.514c.277 0 .5.223.5.5v47.514z"
      />
      <path
        id="prefix__Key_B"
        d="M58.514 114.051c0 .277-.223.5-.5.5H10.5a.5.5 0 0 1-.5-.5v-.09-47.334-.09a.5.5 0 0 1 .5-.5h47.514c.277 0 .5.223.5.5v47.514z"
      />
      <path
        id="prefix__Key_A"
        d="M113.927 59.014c0 .277-.223.5-.5.5H65.913a.5.5 0 0 1-.5-.5v-.09V11.59v-.09a.5.5 0 0 1 .5-.5h47.514c.277 0 .5.223.5.5v47.514z"
      />
    </g>
    <g
      id="prefix__Labels"
      fontFamily="'ArialMT','Arial',sans-serif"
      fontSize={12}
      fill="#fff"
    >
      <text id="prefix__Label_D" x={124.874} y={79.627}>
        {'D'}
      </text>
      <text id="prefix__Label_C" x={70.261} y={79.773}>
        {'C'}
      </text>
      <text id="prefix__Label_B" x={14.121} y={79.627}>
        {'B'}
      </text>
      <text id="prefix__Label_A" x={70.431} y={23.59}>
        {'A'}
      </text>
    </g>
  </svg>
)

export default SvgComponent
