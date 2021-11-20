import logo from '../assets/logoFK.png'
import LessonsList from './lessonsListMessage'
import LessonsForm from './lessonsFormMessage'
import ReservationForm from './reservationFormMessage'
import EmailForm from './emailFormMessage'
import FaqList from './faqMessage'
import config from '../assets/chatbotConfig.json'

export const webchat = {
    theme: {
        style: {
            position: 'fixed',
            right: 20,
            bottom: 20,
            width: 400,
            height: 600,
            margin: 'auto'
        },
        brand: {
            image: logo
        },
        header: {
            title: config.title,
            style: {
                background: 'black',
            }
        },
        triggerButton: {
            image: logo,
            style: {
                background: 'black',
                width: '100px',
                height: '100px',
                position: 'fixed',
                right: 40,
                bottom: 40,
            },
        },
        message: {
            bot: {
                image: null,
            },
            user: {
                style: {
                    background: '#87d78d',
                }            
            },
            customTypes: [EmailForm, ReservationForm, LessonsForm, LessonsList, FaqList],
        },
        button: {
            style: {
              borderRadius: 10,
              borderColor: 'black'
            }
        },
        userInput: {
            box: {
              placeholder: 'Můžete se mě na cokoliv zeptat.',
            },
        }
    },
    onInit: app => {
        localStorage.removeItem('botonicState')
        app.open()
    },
    onOpen: app => {
        app.addUserPayload('intro')
    }
}