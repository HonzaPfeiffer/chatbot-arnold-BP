import MainMenu from './actions/mainMenu'
import EmailSender from './actions/sendEmail'
import NotFound from './actions/notFound'
import CloseQuestion from './actions/closeQuestion'
import ServiceMenu from './actions/ourServices'
import { TrainersServices, Trainers } from './actions/trainersServices'
import { LymfoService, LymfoPrices } from './actions/lymfo'
import { FitnessServices, FitnessPrices } from './actions/fitness' 
import {
    Faq,
    FaqAnswer,
    PricesAnswer,
    ContactsAnswer,
    OpeningHoursAnswer
} from './actions/faq'
import {
    LessonsService,
    LessonPrices,
    JoinLesson
} from './actions/lessons'

export const routes = [
    {
        text: /Ahoj|Dobrý den/,
        action: MainMenu,
        payload: /help-.*/
    },
    {
        action: ServiceMenu,
        payload: 'ourServices'
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
        action: LessonsService,
        payload: 'lessons'
    },
    {
        action: LessonPrices,
        payload: 'lessonsPrices'
    },
    {
        action: JoinLesson,
        payload: 'joinLesson'
    },
    {
        action: LymfoService,
        payload: 'lymfo'
    },
    {
        action: LymfoPrices,
        payload: 'lymfoPrices'
    },
    {
        action: FitnessServices,
        payload: 'fitness'
    },
    {
        action: FitnessPrices,
        payload: 'fitnessPrices'
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
