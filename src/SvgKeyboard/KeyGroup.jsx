import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { selectById } from './utils'
import Key from './Key'
import Text from './Text'
import BindingSvg from './BindingSvg'

const getBindingDimensions = (ref) => {
  const bBox = ref.current.getBBox()
  const transform = ref.current.getAttribute('transform')

  let translate
  try {
    translate = transform.match(/translate\(.+?\)/)[0]
  } catch (e) {
    translate = '0 0'
  }

  let [x, y] = translate.match(/[-\d\.]+/g).map((n) => Number(n))
  x = bBox.x + x
  y = bBox.y + y + bBox.height / 2

  return { x, y, width: bBox.width, height: bBox.height / 2 }
}

const KeyGroup = ({ attributes, children, isDown, binding }) => {
  const ref = React.createRef()
  const [bindingEl, setBindingEl] = useState(null)

  const key = selectById(children, 'key')
  const label = selectById(children, 'label')

  useEffect(() => {
    if (!binding) {
      setBindingEl(null)
      return
    }

    setBindingEl(<BindingSvg {...getBindingDimensions(ref)} text={binding} />)
  }, [binding])

  return (
    <g id={attributes.id}>
      <Key ref={ref} {...key} className="key" isDown={isDown} />
      <Text {...label} className="label" isDown={isDown} />
      {binding && bindingEl}
    </g>
  )
}

KeyGroup.propTypes = {
  attributes: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  children: PropTypes.array.isRequired,
  isDown: PropTypes.bool,
  binding: PropTypes.string,
}

KeyGroup.defaultProps = {
  isDown: false,
  binding: '',
}

export default KeyGroup
