import React from 'react'
import { Text, RequestContext } from '@botonic/react'

export default class extends React.Component {
  static contextType = RequestContext

  static async botonicInit({ input, session, params, lastRoutePath }) {
    let reminder = params.data
    return { reminder }
  }

  render() {
    return (
      <>
        <Text>
          {this.props.reminder}
        </Text>
      </>
    )
  }
}