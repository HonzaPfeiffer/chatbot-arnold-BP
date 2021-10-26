import logo from '../assets/logoFK.png';

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
            title: 'Chatbot Arnold',
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
    onOpen: app => {
        app.addBotText('Dobrý den, jsem Arnold a můžu odpovědět na Vaše dotazy týkající se fitness centra, představit jeho služby a dovedu také rezervovat lekce v sále, saunu, Body-Space nebo Imoove')
    }
}