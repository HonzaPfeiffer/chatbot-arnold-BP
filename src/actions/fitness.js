import React from 'react'
import { Text, Button } from '@botonic/react'
import Close from './closeQuestion'

class FitnessServices extends React.Component {
  render() {
    return (
      <>
        <Text>Cvičíme v komorním prostředí, kde Vás nebude obtěžovat čilý ruch běžný ve velkých fitness zařízeních. Posilovna je vybavena stroji firmy STANMARK, které Vám umožní procvičit každý sval.. Více na https://www.fitkulatak.cz/nase-sluzby/#posilovna.</Text>
        <Text>
          Můžete zvolit možnost nebo se vrátit do hlavního menu.
          <Button payload='bodySpace'>Co je Body-Space</Button>
          <Button payload='imoove'>Co je Imoove</Button>
          <Button payload='openingHours'>Jak máme otevřeno?</Button>
          <Button payload='FitnessPrices'>Ukázat ceník</Button>
          <Button payload='help-no'>Ukončit konverzaci</Button>
          <Button payload='help-yes'>Vrátit se do hlavního menu</Button>
        </Text>
      </>
    )
  }
}

class FitnessPrices extends React.Component {
    render() {
      return (
        <>
          <Text>Ceník posilovny</Text>
          <Close></Close>
        </>
      )
    }
}

export {
    FitnessServices,
    FitnessPrices
}