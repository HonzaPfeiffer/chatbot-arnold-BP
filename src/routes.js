import MainMenu from './actions/mainMenu'
import Faq from './actions/faq'
import EmailSender from './actions/sendEmail'
import faqAnswers from './assets/faqAnswers.json'

import {
    FaqAnswer,
    PricesAnswer,
    ContactsAnswer,
    OpeningHoursAnswer
} from './actions/faqAnswers'

export const routes = [
    {
        text: /Ahoj|Dobrý den/,
        action: MainMenu,
        payload: /help-.*/
    },
    {
        action: MainMenu,
        payload: /help-.*/
    },
    {
        action: FaqAnswer,
        payload: /faq-.*/
    },
    {
        payload: 'faq',
        action: Faq,
    },
    {
        payload: 'personalQuery',
        action: EmailSender,
    },
    {
        payload: 'prices',
        action: PricesAnswer,
    },
    {
        payload: 'contacts',
        action: ContactsAnswer,
    },
    {
        payload: 'openingHours',
        action: OpeningHoursAnswer,
    }
]
