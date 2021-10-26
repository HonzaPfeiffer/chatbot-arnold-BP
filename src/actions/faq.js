import React from 'react'
import { Text, Button } from '@botonic/react'
import styled from 'styled-components'

const ButtonsContainer = styled.div`
  width: 100%;
  bottom: 0;
  position: absolute;
  z-index: 2;
  text-align: center;
`

export default class Faq extends React.Component {
    render() {
        return (
            <>
                <Text>
                    Vyberte, co vás zajímá.
                </Text>
                <Button payload="multisport">Lze u vás využít multisport karta? Jestli ano, na co všechno?</Button>
                <Button payload="multisportSauna">Jak funguje multisport karta na saunu?</Button>
                <Button payload="multisportMore">Dva zákazníci s multisport kartou chtějí do sauny na 90min.</Button>
                <Button payload="masage">Jak si u vás můžu domluvit masáž?</Button>
                <Button payload="training">Jak si domluvím trénink s trenérem?</Button>
                <Button payload="benefitCard">Mohu u vás využít kartu benefit/benefit plus?</Button>
                <Button payload="prices">Náš ceník</Button>
                <Button payload="contacts">Kontakt na personál</Button>
                <Button payload="openingHours">Otevírací doba</Button>
            </>
        )
    }
}