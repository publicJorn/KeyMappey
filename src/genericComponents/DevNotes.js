import React from 'react'
import styled from 'styled-components'
import styles from 'src/styles'

const DevNotes = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: ${styles.inactive};
`

const Center = styled.div`
  padding: 5px;
  background-color: white;
`

const Link = styled.a`
  color: ${styles.selection};
`

export default () => <DevNotes>
  <Center>
    This app is in early development,<br />
    is incomplete and will probably have <Link href='https://github.com/publicJorn/KeyMappey/issues'>bugs</Link>.<br />
  </Center>
</DevNotes>
