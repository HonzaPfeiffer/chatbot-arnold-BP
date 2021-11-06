import React from 'react'
import { Text, Button } from '@botonic/react'
import Close from './closeQuestion'

class ImooveService extends React.Component {
    render() {
        return (
            <>
                <Text>Imoove je prvním zařízením, které dokáže pracovat s celým tělem a stimulovat tak více než 95% svalové hmoty najednou. Při využití Imoove je nutné nejprve absolvovat instruktáž s trenérem. Více na https://www.fitkulatak.cz/imoove/</Text>
                <Text>
                    Můžete zvolit z následujících možností nebo se vrátit do hlavního menu.
                    <Button payload='reserve-imoove'>Rezervovat Imoove</Button>
                    <Button payload='priceList-imoove'>Ukázat ceník</Button>
                    <Button payload='help-yes'>Vrátit se do hlavního menu</Button>
                </Text>
            </>
        )
    }
}

class ReserveImoove extends React.Component {
    render() {
        return (
            <>
                <Text>Můžete vybrat termín rezervace Imoove.</Text>
                <Close></Close>
            </>
        )
    }
}

export {
    ImooveService,
    ReserveImoove
}