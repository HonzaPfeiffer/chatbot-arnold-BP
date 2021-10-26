import Welcome from './actions/welcome'
import MainMenu from './actions/mainMenu'
import Faq from './actions/faq'
import BasicMessage from './actions/faqAnswers'

export const routes = [
    {
        path: 'start',
        action: Welcome,
    },
    {
        text: /Ahoj|Dobrý den/,
        action: MainMenu,
    },
    {
        payload: 'faq',
        action: Faq,
    },
    {
        type: 'text',
        params: { data:'Ano, multisport kartu u nás můžete využít na vstup do fitness, skupinové lekce, nebo na saunu. V jeden den ovšem lze využít kartu jen na jednu aktivitu z těchto tří.'},
        payload: 'multisport',
        action: BasicMessage,
    },

]
