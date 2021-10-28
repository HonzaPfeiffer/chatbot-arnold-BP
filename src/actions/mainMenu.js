import React from 'react'
import { Text, Button } from '@botonic/react'

export default class extends React.Component {
  static async botonicInit(request) {
    const moreHelp =
      request.input.payload && request.input.payload.split('-')[1]
    return { moreHelp }
  }
  render() {
    return (
      <>
        {this.props.moreHelp == 'no' ? (
          <Text>Děkuji za konverzaci. Hezký den.</Text>
        ) : (
        <Text>
          Jak vám mohu pomoci? Lze zvolit jednu z možností nebo zadat dotaz.
          <Button payload="ourServices">Naše služby</Button>
          <Button payload="trainersServices">Služby trenérů</Button>
          <Button payload="faq">Časté dotazy</Button>
          <Button payload="personalQuery">Zeptat se personálu</Button>
        </Text>
        )}
      </>
    )
  }
}