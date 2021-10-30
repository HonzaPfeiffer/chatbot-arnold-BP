import React from 'react'
import { Text, Button } from '@botonic/react'
import faqAnswers from '../assets/faqAnswers.json'

export default class Faq extends React.Component {
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
                <Button payload="openingHours">Otevírací doba</Button>
            </>
        )
    }
}