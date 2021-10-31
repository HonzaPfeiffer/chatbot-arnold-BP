import React from 'react'
import { Text, Button } from '@botonic/react'
import Close from './closeQuestion'

class LessonsService extends React.Component {
  render() {
    return (
      <>
        <Text>Nabízíme tyto lekce:</Text>
        <Text>
          Můžete zvolit možnost nebo se vrátit do hlavního menu.
          <Button payload='joinLesson'>Přihlásit se na lekci</Button>
          <Button payload='lessonsPrices'>Ukázat ceník</Button>
          <Button payload='help-yes'>Vrátit se do hlavního menu</Button>
        </Text>
      </>
    )
  }
}

class LessonPrices extends React.Component {
    render() {
      return (
        <>
          <Text>Ceník lekcí</Text>
          <Close></Close>
        </>
      )
    }
}

class JoinLesson extends React.Component {
    render() {
      return (
        <>
          <Text>Pro přihlášení zvolte jednu z lekcí</Text>
          <Close></Close>
        </>
      )
    }
}

export {
    LessonsService,
    LessonPrices,
    JoinLesson
}