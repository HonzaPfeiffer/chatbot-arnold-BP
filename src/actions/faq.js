import React from 'react'
import { Text, Button } from '@botonic/react'
import faqAnswers from '../assets/faqAnswers.json'
import Close from './closeQuestion'

class Faq extends React.Component {
    render() {
        return (
            <>
                <Text>
                    Vyberte, co vás zajímá.
                </Text>
                {
                    Object.keys(faqAnswers).map((key, i) => (
                        <Button key={i} payload={'faq-' + key}>{faqAnswers[key].question}</Button>
                    ))
                }
                <Button payload="prices">Náš ceník</Button>
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
                <Text>Kontakty</Text>
                <Close></Close>
            </>
        )
    }
}

class OpeningHoursAnswer extends React.Component {
    render() {
        return (
            <>
                <Text>Otevírací doba</Text>
                <Close></Close>
            </>
        )
    }
}

export {
    Faq,
    FaqAnswer,
    PricesAnswer,
    ContactsAnswer,
    OpeningHoursAnswer
}