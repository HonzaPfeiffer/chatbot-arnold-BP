import React from 'react'
import { Text, Button } from '@botonic/react'

export default class extends React.Component {
  render() {
    return (
      <>
        <Text>
          Mohu Vám ještě s něčím pomoci?
          <Button payload='help-yes'>Ano</Button>
          <Button payload='help-no'>Ne</Button>
        </Text>
      </>
    )
  }
}