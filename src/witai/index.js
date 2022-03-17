import axios from 'axios'

export default class BotonicPluginWit {
    constructor(options) {
        this.options = options
    }

    async pre({ input, session, lastRoutePath }) {
        console.log(input.payload)
        let intent = null
        let confidence = 0
        let entities = []
        let intents = []

        if (!input.payload) {
            try {
                let response = await axios({
                    url: this.options.url,
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
                    console.log(confidence)
                }
            } catch (e) { console.log('There is error in ai-plugin' + e) }           
        }

        Object.assign(input, { intent, confidence, intents, entities })

        return { input, session, lastRoutePath }
    }

    async post({ input, session, lastRoutePath, response }) { }
}