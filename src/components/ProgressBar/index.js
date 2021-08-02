import React from 'react'
import { Container, Item, Text, Line } from './styles/ProgressBar'

export default function ProgressBar({ progress }) {
  return (
    <Container>
      <Text>Progress: {progress}/4</Text>
      <Line />
      <ProgressBar progress={progress}>
        <Item />
        <Item />
        <Item />
        <Item />
      </ProgressBar>
    </Container>
  )
}
