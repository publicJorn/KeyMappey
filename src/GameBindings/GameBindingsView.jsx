import React from 'react'
import styled from 'styled-components'
import isEmpty from 'lodash/isEmpty'

import Error from 'src/genericComponents/Error'
import Binding from './Binding/Binding'

const GameBindingsComponent = ({ className, loading, gameData, error }) => {
  const cn = className + (loading ? ' loading' : '')
  const getBinding = (id) => gameData.bindings[id]
  // Fall back to the first listed section if "default" doesn't exist
  const getDefaultSection = () => gameData.sections['default'] || gameData.sections[Object.keys(gameData.sections)[0]]

  return (error || isEmpty(gameData))
    ? <Error>{error}</Error>
    : (
      <div className={cn}>
        <h2>{gameData.game}</h2>
        <table>
          <tbody>
            { // For now we only support the "default" bindingSection
              getDefaultSection().bindings.map((bindingId, i) => {
                const binding = getBinding(bindingId)
                return <Binding key={binding.longName} {...binding} />
              })
            }
          </tbody>
        </table>
      </div>
    )
}

export default styled(GameBindingsComponent)`
  position: relative;
  min-height: 3rem;

  &.loading::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(200, 200, 200, .4);
  }

  &.loading::after {
    position: absolute;
    content: 'Loading...';
    top: calc(50% - 1rem);
    left: calc(50% - 75px);
    width: 150px;
    padding: 5px 0;
    text-align: center;
    background-color: white;
  }
`
