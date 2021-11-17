import React from 'react'
import { Text, Button } from '@botonic/react'
import Close from './closeQuestion'
import config from '../assets/chatbotConfig.json'

class ContactMenu extends React.Component {
    render() {
        return (
            <>
                <Text>
                    Můžete zvolit z následujících možností
                    <Button payload="contacts">Kontakty</Button>
                    <Button payload="address">Adresa</Button>
                    <Button payload="openingHours">Otevírací doba</Button>
                    <Button payload="personalQuery">Zeptat se personálu</Button>
                    <Button payload='help-yes'>Vrátit se do hlavního menu</Button>
                </Text>
            </>
        )
    }
}

class Contacts extends React.Component {
    render() {
        return (
            <>
                <Text>Email: {config.contacts.email}</Text>
                <Text>Telefon: {config.contacts.tel}</Text>
                <Close></Close>
            </>
        )
    }
}

class Address extends React.Component {
    render() {
        return (
            <>
                <Text>{config.contacts.address}</Text>
                <Close></Close>
            </>
        )
    }
}

class OpeningHours extends React.Component {
    render() {
        return (
            <>
                <Text>Otevírací doba {config.contacts.openingHours}</Text>
                <Close></Close>
            </>
        )
    }
}

export {
    ContactMenu,
    Contacts,
    Address,
    OpeningHours
}