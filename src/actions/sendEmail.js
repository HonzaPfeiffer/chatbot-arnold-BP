import React from 'react'
import { Text, RequestContext } from '@botonic/react'
import EmailForm from '../webchat/emailFormMessage'


export default class extends React.Component {
  render() {
    return (
      <>
        <Text>
            Pomocí formuláře můžete odeslat email obsluze.
        </Text>
        <EmailForm />
      </>
    )
  }
}