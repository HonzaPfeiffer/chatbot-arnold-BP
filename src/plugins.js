import config from './assets/chatbotConfig.json'

export const plugins = [
    {
        id: 'wit',
        resolve: require('./witai/index.js'),
        options: {
            url: config.aiConfig.serviceUrl,
            token: config.aiConfig.token
        },
    },
]
