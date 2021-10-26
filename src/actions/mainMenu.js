import React from 'react'
import { Text, Button } from '@botonic/react'

export default class extends React.Component {
  render() {
    return (
      <>
        <Text>
          Jak Vám mohu pomoci? Lze zvolit jednu z možností nebo zadat dotaz
          <Button payload="ourServices">Naše služby</Button>
          <Button payload="trainersServices">Služby trenérů</Button>
          <Button payload="faq">Časté dotazy</Button>
          <Button payload="customQuery">Vlastní dotaz</Button>
        </Text>
      </>
    )
  }
}