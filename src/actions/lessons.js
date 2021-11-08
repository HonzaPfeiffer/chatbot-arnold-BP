import React from 'react'
import { Text, Button } from '@botonic/react'
import LessonsForm from '../webchat/lessonsFormMessage'

class LessonsService extends React.Component {
  render() {
    return (
      <>
        <Text>Nabízíme tyto lekce:</Text>
        <Text>
          Můžete zvolit možnost nebo se vrátit do hlavního menu.
          <Button payload='joinLesson'>Přihlásit se na lekci</Button>
          <Button payload='priceList' payload='priceList-lessons'>Ukázat ceník</Button>
          <Button payload='help-yes'>Vrátit se do hlavního menu</Button>
        </Text>
      </>
    )
  }
}

class JoinLesson extends React.Component {
  render() {
    return (
      <>
        <Text>Pro přihlášení zvolte jednu z lekcí</Text>
        <LessonsForm />
      </>
    )
  }
}

export {
  LessonsService,
  JoinLesson
}