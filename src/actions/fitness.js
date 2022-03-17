import React from 'react'
import { Text, Button } from '@botonic/react'

export default class extends React.Component {
  render() {
    return (
      <>
        <Text>Cvičíme v komorním prostředí, kde Vás nebude obtěžovat čilý ruch běžný ve velkých fitness zařízeních. Posilovna je vybavena stroji firmy STANMARK, které Vám umožní procvičit každý sval.. Více na https://www.fitkulatak.cz/nase-sluzby/#posilovna.</Text>
        <Text>
          Můžete zvolit možnost nebo se vrátit do hlavního menu.
          <Button payload='bodySpace'>Body-Space</Button>
          <Button payload='imoove'>Imoove</Button>
          <Button payload='priceList-fitness'>Ukázat ceník</Button>
          <Button payload='ourServices'>Zpět</Button>
          <Button payload='help-yes'>Vrátit se do hlavního menu</Button>
        </Text>
      </>
    )
  }
}
