import React from 'react'
import styled from 'styled-components'
import { WebchatContext, customMessage } from '@botonic/react'
import { MyTextField, MyTextArea } from '../utils'
import config from '../assets/chatbotConfig.json'

const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const Button = styled.button`
  height: 40px;
  background: #2f2f2f;
  border-radius: 8px;
  margin-top: 5px;
  text-align: center;
  color: white;
`

class EmailForm extends React.Component {
  static contextType = WebchatContext
  constructor(props) {
    super(props)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleMessage = this.handleMessage.bind(this)
    this.state = {
      email: '',
      message: '',
      error: false,
      edit: true
    }
  }

  close() {
    if (this.verifiedForm()) {
      this.setState({ error: false, edit: false })
      this.sendEmail()
    } else {
      this.setState({ error: true })
    }
  }

  verifiedForm() {
    if (
      this.state.email === '' ||
      this.state.message === ''
    ) {
      return false
    } else {
      return true
    }
  }

  sendEmail() {
    fetch(config.emailConfig.serviceUrl, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: this.state.email,
        message: this.state.message
      })
    })
      .then(response => {
        console.log(response)
        if (response.status === 200 || response.status === 201) {
          this.context.sendPayload('alert-success')
        } else {
          this.context.sendPayload('alert-failure')
        }
      })
      .catch(err => {
        console.error(err)
        this.context.sendPayload('alert-failure')
      })
  }

  handleEmail(event) {
    console.log('handle')
    this.setState({ email: event.target.value })
  }

  handleMessage(event) {
    console.log('handle')
    this.setState({ message: event.target.value })
  }

  render() {
    return (
      <Form>
        <p style={{ fontSize: 10, marginBottom: '5px' }}>
          <em>
            Formulář odeslání emailu
          </em>
        </p>
        <MyTextField
          required={true}
          label='Email'
          error={this.state.error}
          value={this.state.email}
          onChange={this.handleEmail}
          disabled={!this.state.edit}
        />
        <MyTextArea
          required={true}
          label='Zpráva'
          error={this.state.error}
          value={this.state.message}
          onChange={this.handleMessage}
          disabled={!this.state.edit}
        />
        <Button disabled={!this.state.edit} onClick={() => this.close()}>Odeslat email</Button>
      </Form>
    )
  }
}

export default customMessage({
  name: 'email-form',
  component: EmailForm,
  defaultProps: {
    style: {
      width: '100%',
      backgroundColor: '#ffffff',
      border: 'none',
      boxShadow: 'none',
      paddingLeft: '5px',
    },
    imagestyle: { display: 'none' },
    blob: false,
    enabletimestamps: false,
  },
})
