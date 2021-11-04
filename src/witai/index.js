import axios from 'axios'

export default class BotonicPluginWit {
    constructor(options) {
        this.options = options
    }

    async pre({ input, session, lastRoutePath }) {
        let intent = null
        let confidence = 0
        let entities = []
        let intents = []

        try {
            let response = await axios({
                url: 'https://api.wit.ai/message',
                params: {
                    q: input.data,
                    verbose: true,
                },
                headers: {
                    Authorization: `Bearer ${this.options.token}`
                }
            })
            console.log(response)
            if (response) {
                intent = response.data.intents[0].name
                confidence = response.data.intents[0].confidence
                entities = response.data.entities
                console.log(intent)
            }
        } catch (e) { }

        Object.assign(input, { intent, confidence, intents, entities })

        return { input, session, lastRoutePath }
    }

    async post({ input, session, lastRoutePath, response }) { }
}