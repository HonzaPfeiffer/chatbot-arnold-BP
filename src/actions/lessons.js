import React from 'react'
import { Text, Button, RequestContext } from '@botonic/react'
import fetch from 'isomorphic-fetch'
import LessonsForm from '../webchat/lessonsFormMessage'
import LessonsList from '../webchat/lessonsListMessage'
import config from '../assets/chatbotConfig.json'
import axios from 'axios'

class LessonsService extends React.Component {
  static async botonicInit() {
    const response = await axios({
      url: config.apiConfig.lessonsUrl,
      method: 'GET'
    })
    const lessons = await response.data
    return { lessons }
  }
  render() {
    return (
      <>
        <Text>Nabízíme tyto lekce:</Text>
        <LessonsList data={this.props.lessons} />
        <Text>
          Můžete zvolit možnost nebo se vrátit do hlavního menu.
          <Button payload='joinLesson'>Přihlásit se na lekci</Button>
          <Button payload='priceList' payload='priceList-lessons'>Ukázat ceník</Button>
          <Button payload='ourServices'>Zpět</Button>
          <Button payload='help-yes'>Vrátit se do hlavního menu</Button>
        </Text>
      </>
    )
  }
}

class JoinLesson extends React.Component {
  static contextType = RequestContext
  static async botonicInit() {
    const response = await axios({
      url: config.apiConfig.lessonsUrl,
      method: 'GET'
    })
    const lessons = await response.data
    return { lessons }
  }
  render() {
    return (
      <>
        <Text>Pro přihlášení zvolte jednu z lekcí.</Text>
        <LessonsForm data={this.props.lessons} />
      </>
    )
  }
}

export {
  LessonsService,
  JoinLesson
}