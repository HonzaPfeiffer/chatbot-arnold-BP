import React from 'react'
import { Text, RequestContext } from '@botonic/react'
import EmailForm from '../webchat/emailFormMessage'


export default class extends React.Component {
  static async botonicInit(request) {
    const email = request.session.user.extra_data.email
    return { email }
  }

  render() {
    return (
      <>
        <Text>
            Pomocí formuláře můžete odeslat email obsluze.
        </Text>
        <EmailForm email={this.props.email}/>
      </>
    )
  }
}