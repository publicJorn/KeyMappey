import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

import styles from 'src/styles'

const Label = styled.span`
  position: absolute;
  top: 2px;
  left: 3px;
  max-width: calc(100% - 6px);
  font-size: 12px;
  color: #666;

  .down > & {
    color: ${styles.selection};
  }
`

const BoundAction = styled.span`
  font-size: 10px;
  color: ${styles.selection};
`

const Key = ({ className, label, isDown, boundActionName }) => (
  <div className={classNames(className, { down: isDown })}>
    <Label isDown={isDown}>{label}</Label>
    <BoundAction>{boundActionName}</BoundAction>
  </div>
)

const calcFlex = ({ size }) =>
  (size === 'auto') ? '1 1 auto' : `${size || 1} 1 0`

export default styled(Key)`
  position: relative;
  flex: ${calcFlex};
  padding: 14px 1px 0;
  margin: 0 5px 5px 0;
  text-align: center;
  line-height: 11px;
  border: 1px solid #999;
  border-radius: 3px;
  background-color: #eee;

  &.down {
    background-color: #fff;
  }
`
