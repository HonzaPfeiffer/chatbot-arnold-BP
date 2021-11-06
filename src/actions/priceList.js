import React from 'react'
import { Text } from '@botonic/react'
import Close from './closeQuestion'

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
        switch (what) {
            case 'all':
                answer = 'Kompletní ceník můžete najít zde https://www.fitkulatak.cz/cenik/'
                break
            case 'lessons':
                answer = 'Ceník lekcí'
                break
            case 'lymfo':
                answer = 'Ceník služby Lymfodrenáž'
                break
            case 'fitness':
                answer = 'Ceník posilovny'
                break
            case 'sauna':
                answer = 'Ceník sauny'
                break
            case 'bodySpace':
                answer = 'Ceník Body-Space'
                break
            case 'imoove':
                answer = 'Ceník Imoove'
                break
        }
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
