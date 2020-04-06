import React, { PureComponent } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

import styles from 'src/theme'

const Name = styled.td`
  padding: 0;
  min-width: 150px;
`

const KeyLabel = styled.td`
  width: 50px;
  padding: 0;
  text-align: center;
  font-size: .7rem;
  border: 1px solid #ccc;
  color: ${styles.selection};

  .selected > & {
    border-color: ${styles.selection};
  }
`

class Binding extends PureComponent {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    const { boundKey, selected, longName } = this.props

    if (selected && boundKey !== nextProps.boundKey) {
      this.props.selectBinding(longName)
    }
  }

  render() {
    const { className, longName, boundKey, selected } = this.props
    const cn = classNames(className, { selected })

    return (
      <tr className={cn} onClick={this.handleClick}>
        <Name>{longName}</Name>
        <KeyLabel>{boundKey}</KeyLabel>
      </tr>
    )
  }

  handleClick(evt) {
    evt.preventDefault()
    this.props.selectBinding(this.props.longName)
  }
}

export default styled(Binding)`
  padding-bottom: 2px;
  cursor: pointer;

  &.selected {
    color: ${styles.selection};
  }
`
