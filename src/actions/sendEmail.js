import React from 'react'
import { Text } from '@botonic/react'
import EmailForm from '../webchat/emailFormMessage'

export default class extends React.Component {
  static async botonicInit(request) {

  }
  render() {
    return (
      <>
        <Text>
            Pomocí formuláře můžete odeslat email obsluze.
        </Text>
        <EmailForm/>
      </>
    )
  }
}