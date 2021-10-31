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
import {
    SaunaService,
    SaunaPrices,
    ReserveSauna
} from './actions/sauna'
import {
    BodySpaceService,
    BodySpacePrices,
    ReserveBodySpace
} from './actions/bodySpace'
import {
    ImooveService,
    ImoovePrices,
    ReserveImoove
} from './actions/imoove'

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
        action: BodySpaceService,
        payload: 'bodySpace'
    },
    {
        action: BodySpacePrices,
        payload: 'bodySpacePrices'
    },
    {
        action: ReserveBodySpace,
        payload: 'reserveBodySpace'
    },
    {
        action: ImooveService,
        payload: 'imoove'
    },
    {
        action: ImoovePrices,
        payload: 'imoovePrices'
    },
    {
        action: ReserveImoove,
        payload: 'reserveImoove'
    },
    {
        action: SaunaService,
        payload: 'sauna'
    },
    {
        action: SaunaPrices,
        payload: 'saunaPrices'
    },
    {
        action: ReserveSauna,
        payload: 'reserveSauna'
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
