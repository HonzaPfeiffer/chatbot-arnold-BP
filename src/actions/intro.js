import React from 'react'
import { Text, Button } from '@botonic/react'

export default class extends React.Component {
    render() {
        return (
            <Text>
                Jsem Arnold a můžu odpovědět na Vaše dotazy týkající se fitness centra, představit jeho služby a dovedu je také rezervovat.
                <Button payload="start">Začít konverzaci</Button>
            </Text>
        )
    }
}