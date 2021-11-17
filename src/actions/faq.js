import React from 'react'
import { Text, Button } from '@botonic/react'
import faqAnswers from '../assets/faqAnswers.json'
import Close from './closeQuestion'

class Faq extends React.Component {
    render() {
        return (
            <>
                <Text>
                    Vyberte, co Vás zajímá.
                </Text>
                {
                    Object.keys(faqAnswers).map((key, i) => (
                        <Button key={i} payload={'faq-' + key}>{faqAnswers[key].question}</Button>
                    ))
                }
                <Button payload="priceList-all">Náš ceník</Button>
                <Button payload="contacts">Kontakt na personál</Button>
                <Button payload="openingHours">Jak máme otevřeno?</Button>
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

export {
    Faq,
    FaqAnswer
}