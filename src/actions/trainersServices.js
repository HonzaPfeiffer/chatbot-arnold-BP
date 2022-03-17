import React from 'react'
import { Text, Button } from '@botonic/react'
import Close from './closeQuestion'

class TrainersServices extends React.Component {
  render() {
    return (
      <>
        <Text>Nabízíme masáže a asistenci při tréninku podle vašich představ. Pro více informací je potřeba individuální komunikace s daným masérem nebo trenérem.</Text>
        <Text>
          Můžete zvolit tyto možnosti.
          <Button payload='help-yes'>Vrátit se do hlavního menu</Button>
          <Button payload='trainers'>Trenéři a maséři</Button>
        </Text>
      </>
    )
  }
}

class Trainers extends React.Component {
  render() {
    return (
      <>
        <Text>Spolupracujeme s těmito odborníky, více informací o nich na https://fitkulatak.cz/treneri/.</Text>
        <Close></Close>
      </>
    )
  }
}

export { TrainersServices, Trainers }