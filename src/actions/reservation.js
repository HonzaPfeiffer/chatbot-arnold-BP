import React from 'react'
import { Text, RequestContext } from '@botonic/react'
import ReservationForm from '../webchat/reservationFormMessage'

export default class extends React.Component {
    static contextType = RequestContext

    static async botonicInit({ input, session, params, lastRoutePath }) {
        const payload = input.payload && input.payload.split('-')[1]
        let what = ''
        if (!payload) {
            if (Object.values(input.entities)[0]) {
                what = Object.values(input.entities)[0]
                what = what[0].name
            } else {
                what = 'all'
            }
        } else {
            what = payload
        }
        
        let answer = ''
        const response = await fetch('https://testapi.io/api/arnold/services')
        const data = await response.json()
        const services = data.services
        session.service = services.filter(service => service.name === what)

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
                <Text>{`Tuto službu lze rezervovat na dobu od pondělí do pátku mezi ${this.context.session.service[0].open} a ${this.context.session.service[0].close}`}</Text>
                <ReservationForm service={this.context.session.service[0]} />
            </>
        )
    }
}