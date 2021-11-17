import React from 'react'
import { Text, Button } from '@botonic/react'

export default class extends React.Component {
    render() {
        return (
            <>
                <Text>
                    Nabízíme tyto služby. Můžete zvolit jednu z možností nebo se vrátit do menu.
                    <Button payload="lessons">Sálové lekce</Button>
                    <Button payload="sauna">Sauna</Button>
                    <Button payload="fitness">Posilovna</Button>
                    <Button payload="lymfo">Lymfodrenáž</Button>
                    <Button payload="priceList-all">Ceník</Button>
                    <Button payload="help-yes">Vrátit se do hlavního menu</Button>
                </Text>
            </>
        )
    }
}