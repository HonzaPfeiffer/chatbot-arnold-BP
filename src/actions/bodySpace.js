import React from 'react'
import { Text, Button } from '@botonic/react'
import Close from './closeQuestion'

class BodySpaceService extends React.Component {
    render() {
        return (
            <>
                <Text>U nás naleznete dva stroje Body-Space VacuTherm Professional „2 v 1“.
Jedná se o nové revoluční podtlakové zařízení s běžícím pásem rozšířené o infračervené světlo (Infrared IR). Tato jedinečná kombinace vakua s IR několikrát zvyšuje účinek cvičení v krátkém čase. Díky rychlému prohřívání tkání a svalů se zvyšuje cirkulace krevního oběhu, zrychluje metabolismus a dochází ke spalování tuku a redukci celulitidy. Vytvarujete si tak sexy postavu! Více na https://www.fitkulatak.cz/body-space/</Text>
                <Text>
                    Můžete zvolit z následujících možností nebo se vrátit do hlavního menu.
                    <Button payload='reserveBodySpace'>Rezervovat Body-Space</Button>
                    <Button payload='bodySpacePrices'>Ukázat ceník</Button>
                    <Button payload='help-yes'>Vrátit se do hlavního menu</Button>
                </Text>
            </>
        )
    }
}

class BodySpacePrices extends React.Component {
    render() {
        return (
            <>
                <Text>Ceník Body-Space</Text>
                <Close></Close>
            </>
        )
    }
}

class ReserveBodySpace extends React.Component {
    render() {
        return (
            <>
                <Text>Můžete vybrat termín rezervace Body-Space.</Text>
                <Close></Close>
            </>
        )
    }
}

export {
    BodySpaceService,
    BodySpacePrices,
    ReserveBodySpace
}