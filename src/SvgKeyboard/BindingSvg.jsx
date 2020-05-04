import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { TextWidth, buildLines } from './utils'

const bindingFont = {
  fontSize: '8px',
  fontFamily: 'arial, sans-serif',
}

TextWidth.setFont(bindingFont)

const BindingSvg = ({ text, ...props }) => {
  const [lines, setLines] = useState([])

  useEffect(() => {
    setLines(buildLines(text, props.width))
  }, [text])

  return (
    <svg {...props}>
      {/* <rect x="0" y="0" width={props.width} height={props.height} fill="lime" /> */}
      {lines.length &&
        lines.map((line, i) => (
          <text key={i} x="3" y={10 + i * 10} fill="#000" {...bindingFont}>
            {line}
          </text>
        ))}
    </svg>
  )
}

BindingSvg.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  text: PropTypes.string,
}

BindingSvg.defaultProps = {
  text: '',
}

export default BindingSvg
