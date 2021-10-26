import MainMenu from './actions/mainMenu'
import Faq from './actions/faq'
import {
    MultisportAnswer,
    MultisportSaunaAnswer,
    MultisportMoreAnswer,
    MasageAnswer,
    TrainingAnswer,
    BenefitCardAnswer,
    PricesAnswer,
    ContactsAnswer,
    OpeningHoursAnswer
} from './actions/faqAnswers'

export const routes = [
    {
        text: /Ahoj|Dobrý den/,
        action: MainMenu,
    },
    {
        payload: 'faq',
        action: Faq,
    },
    {
        payload: 'multisport',
        action: MultisportAnswer,
    },
    {
        payload: 'multisportSauna',
        action: MultisportSaunaAnswer,
    },
    {
        payload: 'multisportMore',
        action: MultisportMoreAnswer,
    },
    {
        payload: 'masage',
        action: MasageAnswer,
    },
    {
        payload: 'training',
        action: TrainingAnswer,
    },
    {
        payload: 'benefitCard',
        action: BenefitCardAnswer,
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
