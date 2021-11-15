import React from 'react'
import { Text, Button } from '@botonic/react'

export default class extends React.Component {
  render() {
    return (
      <>
        <Text>Přístrojová lymfodrenáž zlepšuje prokrvení unavených končetin, odbourává toxické látky a má pozitivní účinek na celulitidu. Více na https://fitkulatak.cz/lymfodrenaz/ .</Text>
        <Text>Jedna procedura trvá 50 minut. Po tréninku v Body-Space postačuje i 30 minut</Text>
        <Text>
          Přejete si ukázat ceník nebo se vrátit do hlavního menu?
          <Button payload='help-yes'>Vrátit se do hlavního menu</Button>
          <Button payload='priceList-lymfo'>Ukázat ceník</Button>
          <Button payload='help-no'>Ukončit konverzaci</Button>
        </Text>
      </>
    )
  }
}
