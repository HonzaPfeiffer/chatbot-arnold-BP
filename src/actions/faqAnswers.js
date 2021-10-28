import React from 'react'
import { Text } from '@botonic/react'
import faqAnswers from '../assets/faqAnswers.json'
import Close from './closeQuestion'

class FaqAnswer extends React.Component {
  static async botonicInit(request) {
    const payload = request.input.payload && request.input.payload.split('-')[1]
    const answer = faqAnswers[payload].answer
    return { answer }
  }
  render() {
    return (
      <>
        <Text>{this.props.answer}</Text>
        <Close></Close>
      </>
    )

  }
}

class PricesAnswer extends React.Component {
  render() {
    return (
      <>
        <Text>Kompletní ceník můžete najít zde https://www.fitkulatak.cz/cenik/</Text>
        <Close></Close>
      </>
    )
  }
}

class ContactsAnswer extends React.Component {
  render() {
    return (
      <>
        <Text></Text>
        <Close></Close>
      </>
    )
  }
}

class OpeningHoursAnswer extends React.Component {
  render() {
    return (
      <>
        <Text></Text>
        <Close></Close>
      </>
    )
  }
}

export {
  FaqAnswer,
  PricesAnswer,
  ContactsAnswer,
  OpeningHoursAnswer
}