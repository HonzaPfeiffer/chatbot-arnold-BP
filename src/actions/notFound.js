import React from 'react'
import { Text, Button } from '@botonic/react'

export default class extends React.Component {
  render() {
    return (
      <>
        <Text>
          Moc se omlouvám, ale nerozumím vám. Můžete to zkusit znovu.
          <Button payload="personalQuery">Zeptat se personálu</Button>
        </Text>
      </>
    )
  }
}