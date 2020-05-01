import React from 'react'
import PropTypes from 'prop-types'

const allowedTags = ['path', 'text', 'g', ''] // empty for text nodes
const allowedTypes = ['element', 'text']

const RenderSVGSON = ({ type, name, value, attributes, children }) => {
  if (!allowedTypes.includes(type) || !allowedTags.includes(name)) return null

  // Only allow absence of name if it's a text node
  if (!name) return type === 'text' ? value : null

  const Tag = name

  return children ? (
    <Tag {...attributes}>
      {children.map((child, i) => (
        <RenderSVGSON key={i} {...child} />
      ))}
    </Tag>
  ) : (
    <Tag {...attributes} />
  )
}

RenderSVGSON.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  attributes: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
}

export default RenderSVGSON
