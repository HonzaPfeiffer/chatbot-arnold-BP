import {
  BotonicInputTester,
  BotonicOutputTester,
  NodeApp,
} from '@botonic/react'

import { config } from '../src/'
import { locales } from '../src/locales'
import { plugins } from '../src/plugins'
import { routes } from '../src/routes'

const app = new NodeApp({ routes, locales, plugins, ...config })

const i = new BotonicInputTester(app)
const o = new BotonicOutputTester(app)

test('TEST: (404) NOT FOUND', async () => {
  await expect(i.text('whatever')).resolves.toBe(
    o.text("I don't understand you")
  )
})

test('Main menu', async () => {
  await expect(i.text('Ahoj')).resolves.toBe(
    o.text("Jak vám mohu pomoci? Lze zvolit jednu z možností nebo zadat dotaz.")
  )
})

test('Test FAQ - faqAnwers.js', async () => {
  await expect(i.payload('faq')).resolves.toBe(
    o.text("Vyberte, co vás zajímá.")
    //o.replies(results))
  )
})
