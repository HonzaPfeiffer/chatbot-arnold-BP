import React from 'react'
import { Text, Button } from '@botonic/react'

export default class extends React.Component {
  render() {
    return (
      <>
        <Text>Naše sauna má kapacitu čtyř míst a lze ji rezervovat. Více na https://www.fitkulatak.cz/nase-sluzby/.</Text>
        <Text>
          Můžete zvolit z následujících možností nebo se vrátit do hlavního menu.
          <Button payload='reserve-sauna'>Rezervovat saunu</Button>
          <Button payload='priceList-sauna'>Ukázat ceník</Button>
          <Button payload='ourServices'>Zpět</Button>
          <Button payload='help-yes'>Vrátit se do hlavního menu</Button>
        </Text>
      </>
    )
  }
}
