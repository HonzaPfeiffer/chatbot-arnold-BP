import React from 'react'
import { Text } from '@botonic/react'
import MainMenu from './mainMenu'

export default class extends React.Component {
    render() {
        return (
            <>
                <Text>
                    Dobrý den
                </Text>
                <MainMenu />
                <Text>
                    Rozumím také příkazům. Vyzkoušejte např. "rezervace sauny" nebo "Jaká je otevírací doba?"
                </Text>
            </>
        )
    }
}