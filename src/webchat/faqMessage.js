import faqAnswers from '../assets/faqAnswers.json'
import styled from 'styled-components'

import React from 'react'
import { customMessage, Button } from '@botonic/react'

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const FaqList = () => (
    <ListBox>
      {Object.keys(faqAnswers).map((key, i) => (
        <Button key={i} payload={'faq-' + key}>{faqAnswers[key].question}</Button>
      ))}
        <Button payload="priceList-all">Náš ceník</Button>
        <Button payload="contacts">Kontakt na personál</Button>
        <Button payload="openingHours">Jak máme otevřeno?</Button>
        <Button payload="covid">Opatření COVID-19</Button>
    </ListBox>
)

export default customMessage({
    name: 'faq-list',
    component: FaqList,
    defaultProps: {
        style: {
            width: '100%',
            backgroundColor: '#ffffff',
            border: 'none',
            boxShadow: 'none',
            paddingLeft: '5px',
        },
        imagestyle: { display: 'none' },
        blob: false,
        enabletimestamps: false,
    },
})
