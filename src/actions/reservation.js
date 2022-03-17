import React from 'react'
import { Text, RequestContext } from '@botonic/react'
import ReservationForm from '../webchat/reservationFormMessage'
import config from '../assets/chatbotConfig.json'
import axios from 'axios'

export default class extends React.Component {
    static contextType = RequestContext

    static async botonicInit({ input, session, params, lastRoutePath }) {
        const payload = input.payload && input.payload.split(/-(.+)/)[1]
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
        const response = await axios({
            url: config.apiConfig.servicesUrl,
            method: 'GET'
        })
        const data = await response.data
        const services = data.services
        const service = services.filter(service => service.name === what)

        if (what === 'sauna') {
            answer = 'Rezervace sauny'
        } else if (what === 'imoove') {
            answer = 'Rezervace imoove'
        } else {
            answer = 'Rezervace Body-Space'
        }
        return { answer, service }
    }
    render() {
        return (
            <>
                <Text>{this.props.answer}</Text>
                <Text>{`Tuto službu lze rezervovat na dobu od pondělí do pátku mezi ${this.props.service[0].open} a ${this.props.service[0].close}.`}</Text>
                <ReservationForm service={this.props.service[0]} />
            </>
        )
    }
}