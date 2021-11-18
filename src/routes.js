import MainMenu from './actions/mainMenu'
import EmailSender from './actions/sendEmail'
import NotFound from './actions/notFound'
import CloseQuestion from './actions/closeQuestion'
import ServiceMenu from './actions/ourServices'
import Alert from './actions/alert'
import PriceList from './actions/priceList'
import Reservation from './actions/reservation'
import { TrainersServices, Trainers } from './actions/trainersServices'
import LymfoService from './actions/lymfo'
import FitnessServices from './actions/fitness'
import SaunaService from './actions/sauna'
import BodySpaceService from './actions/bodySpace'
import ImooveService from './actions/imoove'
import Greeting from './actions/greeting'
import Intro from './actions/intro'
import {
    Faq,
    FaqAnswer,
    CovidAnswer
} from './actions/faq'
import {
    ContactMenu,
    Contacts,
    Address,
    OpeningHours
} from './actions/contacts'
import {
    LessonsService,
    JoinLesson
} from './actions/lessons'

export const routes = [
    {
        action: Intro,
        payload: 'intro'
    },
    {
        intent: 'Greeting',
        action: Greeting,
        payload: 'start'
    },
    {
        intent: 'Help',
        action: MainMenu,
        payload: /help-.*/
    },
    {
        intent: 'OurServices',
        payload: 'ourServices',
        action: ServiceMenu
    },
    {
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
        intent: 'Covid',
        payload: 'covid',
        action: CovidAnswer,
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
        payload: 'contactMenu',
        action: ContactMenu,
    },    
    {
        intent: 'Contacts',
        payload: 'contacts',
        action: Contacts,
    },
    {
        intent: 'Hours',
        payload: 'openingHours',
        action: OpeningHours,
    },
    {
        intent: 'Address',
        payload: 'address',
        action: Address,
    }
]
