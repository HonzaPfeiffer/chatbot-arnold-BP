import React from 'react'
import { Text } from '@botonic/react'
import Close from './closeQuestion'

export default class extends React.Component {
    render() {
        return (
            <>
                <Text>Kompletní ceník můžete najít zde https://www.fitkulatak.cz/cenik/.</Text>
                <Close></Close>
            </>
        )
    }
}
