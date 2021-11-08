import React from 'react'
import { Text } from '@botonic/react'
import ReservationForm from '../webchat/reservationFormMessage'

export default class extends React.Component {
    static async botonicInit(request) {
        const payload = request.input.payload && request.input.payload.split('-')[1]
        let what = ''
        if (!payload) {
            if (Object.values(request.input.entities)[0]) {
                what = Object.values(request.input.entities)[0]
                what = what[0].name
                console.log(what)
            } else {
              what = 'all'  
            }
        } else {
            what = payload
        }
        let answer = ''
        if (what === 'sauna') {
            answer = 'Rezervace sauny'
        } else if (what === 'imoove') {
            answer = 'Rezervace imoove'
        } else {
            answer = 'Rezervace Body-Space'
        }
        return { answer }
    }
    render() {
        return (
            <>
                <Text>{this.props.answer}</Text>
                <ReservationForm />
            </>
        )
    }
}