import React from 'react'
import { Text, Button } from '@botonic/react'

export default class extends React.Component {
  render() {
    return (
      <>
        <Text>Nabízíme masáže a asistenci při tréninku podle vašich představ. Pro více informací je potřeba individuální komunikace s daným masérem nebo trenérem.</Text>
        <Text>
          Můžete zvolit tyto možnosti.
          <Button payload='help-yes'>Hlavní menu</Button>
          <Button payload='trainers'>Trenéři a maséři</Button>
          <Button payload='help-no'>Ukončit konverzaci</Button>
        </Text>
      </>
    )
  }
}