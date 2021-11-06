import MainMenu from './actions/mainMenu'
import EmailSender from './actions/sendEmail'
import NotFound from './actions/notFound'
import CloseQuestion from './actions/closeQuestion'
import ServiceMenu from './actions/ourServices'
import Alert from './actions/alert'
import PriceList from './actions/priceList'
import Reservation from './actions/reservation'
import { TrainersServices, Trainers } from './actions/trainersServices'
import { LymfoService } from './actions/lymfo'
import { FitnessServices } from './actions/fitness'
import { SaunaService } from './actions/sauna'
import { BodySpaceService } from './actions/bodySpace'
import { ImooveService } from './actions/imoove'
import {
    Faq,
    FaqAnswer,
    ContactsAnswer,
    OpeningHoursAnswer
} from './actions/faq'
import {
    LessonsService,
    JoinLesson
} from './actions/lessons'

export const routes = [
    {
        intent: 'Greeting',
        action: MainMenu,
        payload: /help-.*/
    },
    {
        payload: 'ourServices',
        action: ServiceMenu
    },
    {
        intent: 'Help',
        action: CloseQuestion,
        payload: 'help'
    },
    {
        action: Alert,
        payload: /alert-.*/
    },
    {
        path: '404',
        action: NotFound
    },
    {
        intent: 'PriceList',
        payload: /priceList-.*/,
        action: PriceList
    },
    {
        intent: 'Reservation',
        payload: /reserve-.*/,
        action: Reservation
    },
    {
        intent: 'AskStaff',
        payload: 'personalQuery',
        action: EmailSender,
    },
    {
        payload: /faq-.*/,
        action: FaqAnswer
    },
    {
        payload: 'faq',
        action: Faq,
    },
    {
        payload: 'bodySpace',
        intent: 'BodySpace',
        action: BodySpaceService
    },
    {
        intent: 'Imoove',
        action: ImooveService,
        payload: 'imoove'
    },
    {
        intent: 'Sauna',
        action: SaunaService,
        payload: 'sauna'
    },
    {
        payload: 'lessons',
        intent: 'Lessons',
        action: LessonsService
    },
    {
        payload: 'joinLesson',
        intent: 'JoinLessons',
        action: JoinLesson,
    },
    {
        intent: 'Lymfo',
        action: LymfoService,
        payload: 'lymfo'
    },
    {
        intent: 'Fitness',
        action: FitnessServices,
        payload: 'fitness'
    },
    {
        intent: 'TrainersServices',
        action: TrainersServices,
        payload: 'trainersServices'
    },
    {
        intent: 'Trainers',
        action: Trainers,
        payload: 'trainers'
    },
    {
        intent: 'Contacts',
        payload: 'contacts',
        action: ContactsAnswer,
    },
    {
        intent: 'Hours',
        payload: 'openingHours',
        action: OpeningHoursAnswer,
    }
]
