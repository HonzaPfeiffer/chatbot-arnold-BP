import React from 'react'
import { Text } from '@botonic/react'
import Close from './closeQuestion'

export default class extends React.Component {
  static async botonicInit(request) {
    const outcome =
      request.input.payload && request.input.payload.split('-')[1]
    return { outcome }
  }
  render() {
    return (
      <>
        {this.props.outcome == 'success' ? (
          <Text>Vaše operace byla úspěšně provedena.</Text>
        ) : (
          <Text>Omlouvám se, ale něco se pokazilo.</Text>
        )}
        <Close></Close>
      </>
    )
  }
}