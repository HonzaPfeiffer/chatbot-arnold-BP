import React from 'react'
import { Text, Button } from '@botonic/react'
import faqAnswers from '../assets/faqAnswers.json'
import Close from './closeQuestion'
import FaqList from '../webchat/faqMessage'

class Faq extends React.Component {
    render() {
        return (
            <>
                <Text>
                    Vyberte, co Vás zajímá.
                </Text>
                <FaqList/>
            </>
        )
    }
}

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

class CovidAnswer extends React.Component {
    render() {
        return (
            <>
                <Text>Informace o opatřeních ke COVID-19 najdete na hlavní stránce https://fitkulatak.cz/ v novinkách.</Text>
                <Close></Close>
            </>
        )
    }
}

export {
    Faq,
    FaqAnswer,
    CovidAnswer
}