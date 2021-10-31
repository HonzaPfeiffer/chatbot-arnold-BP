import React from 'react'
import { Text, Button } from '@botonic/react'
import Close from './closeQuestion'

class SaunaService extends React.Component {
  render() {
    return (
      <>
        <Text>Naše sauna má kapacitu čtyř míst a lze ji rezervovat. Více na https://www.fitkulatak.cz/nase-sluzby/</Text>
        <Text>
          Můžete zvolit z následujících možností nebo se vrátit do hlavního menu.
          <Button payload='reserveSauna'>Rezervovat saunu</Button>
          <Button payload='saunaPrices'>Ukázat ceník</Button>
          <Button payload='help-yes'>Vrátit se do hlavního menu</Button>
        </Text>
      </>
    )
  }
}

class SaunaPrices extends React.Component {
  render() {
    return (
      <>
        <Text>Ceník sauny</Text>
        <Close></Close>
      </>
    )
  }
}

class ReserveSauna extends React.Component {
  render() {
    return (
      <>
        <Text>Můžete vybrat termín rezervace sauny.</Text>
        <Close></Close>
      </>
    )
  }
}

export {
  SaunaService,
  SaunaPrices,
  ReserveSauna
}