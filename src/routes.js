import MainMenu from './actions/mainMenu'
import Faq from './actions/faq'
import EmailSender from './actions/sendEmail'
import NotFound from './actions/notFound'
import CloseQuestion from './actions/closeQuestion'
import TrainersServices from './actions/trainersServices'
import Trainers from './actions/trainers'

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
        action: CloseQuestion,
        payload: 'help'
    },
    {
        path: '404', 
        action: NotFound
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
        action: TrainersServices,
        payload: 'trainersServices'
    },
    {
        action: Trainers,
        payload: 'trainers'
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
