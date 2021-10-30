import React from 'react'
import { Text } from '@botonic/react'
import Close from './closeQuestion'

export default class extends React.Component {
  render() {
    return (
      <>
        <Text>Spolupracujeme s těmito odborníky, více informací o nich na https://fitkulatak.cz/treneri/</Text>
        <Close></Close>
      </>
    )
  }
}