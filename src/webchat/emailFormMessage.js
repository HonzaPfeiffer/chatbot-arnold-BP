import React from 'react'
import styled from 'styled-components'
import { WebchatContext, customMessage } from '@botonic/react'
import { MyTextField, MyTextArea } from '../utils'
import emailConfig from '../assets/emailConfig.json'

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
    console.log(this.verifiedForm())
    if (this.verifiedForm()) {
      this.setState({ error: false, edit: false })
      const payload = 'alert-success'
      //this.sendEmail(this.state.email, this.state.message)
      this.context.sendPayload(payload)
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

  sendEmail(email, message) {
    console.log(email)
    console.log(message)
    console.log(emailConfig.email)
    console.log(emailConfig.email)
    fetch(emailConfig.url, {
      method: "POST",
      mode: "no-cors",
      credentials: 'same-origin',
      headers: {
        "content-type": "application/json",
        "x-rapidapi-key": emailConfig.token,
        "x-rapidapi-host": emailConfig.host
      },
      body: {
        "personalizations": [
          {
            "to": [
              {
                "email": emailConfig.email
              }
            ],
            "subject": emailConfig.subject
          }
        ],
        "from": {
          "email": email
        },
        "content": [
          {
            "type": "text/plain",
            "value": message
          }
        ]
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
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
    imageStyle: { display: 'none' },
    blob: false,
    enableTimestamps: false,
  },
})
