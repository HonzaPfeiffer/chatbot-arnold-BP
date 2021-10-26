import React from 'react'
import { Text } from '@botonic/react'

class MultisportAnswer extends React.Component {
  render() {
    return <Text>Ano, multisport kartu u nás můžete využít na vstup do fitness, skupinové lekce, nebo na saunu. V jeden den ovšem lze využít kartu jen na jednu aktivitu z těchto tří.</Text>
  }
}

class MultisportSaunaAnswer extends React.Component {
  render() {
    return <Text>Na vstup do sauny jsou potřeba dvě multisport karty, tzn. 2 lidé vlastnící tuto kartu. Jestli že kartu má pouze jeden, druhý doplácí danou částku. 
    V obou případech je pak sauna na 1h, v ceně není prádlo (ručníky, prostěradla). To si lze zaplatit na recepci, nebo přinést vlastní. 
    </Text>
  }
}

class MultisportMoreAnswer extends React.Component {
  render() {
    return <Text>Pak si každý musí připlatit 30min.</Text>
  }
}

class MasageAnswer extends React.Component {
  render() {
    return <Text>Je potřeba se domluvit přímo s masérem, do diáře mu nevidíme 😊.</Text>
  }
}

class TrainingAnswer extends React.Component {
  render() {
    return <Text>Opět je potřeba domluvit se přímo s trenérem/trenérkou. Buď osobně ve fitness, nebo napsat email či sms. Telefonáty nedoporučujeme, přes den bývají vytížení, a není zaručeno že vám telefon přijmou. </Text>
  }
}

class BenefitCardAnswer extends React.Component {
  render() {
    return <Text>Ano, tyto karty přijímáme.</Text>
  }
}

class PricesAnswer extends React.Component {
  render() {
    return <Text>Kompletní ceník můžete najít zde https://www.fitkulatak.cz/cenik/</Text>
  }
}

class ContactsAnswer extends React.Component {
  render() {
    return <Text></Text>
  }
}

class OpeningHoursAnswer extends React.Component {
  render() {
    return <Text></Text>
  }
}

export {
  MultisportAnswer,
  MultisportSaunaAnswer,
  MultisportMoreAnswer,
  MasageAnswer,
  TrainingAnswer,
  BenefitCardAnswer,
  PricesAnswer,
  ContactsAnswer,
  OpeningHoursAnswer
}