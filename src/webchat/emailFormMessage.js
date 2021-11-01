import React from 'react'
import styled from 'styled-components'
import { WebchatContext, customMessage } from '@botonic/react'
import { MyTextField, MyTextArea } from '../utils'
import { TextField } from '@mui/material'

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
    this.state = {
      email: '',
      message: '',
      error: false
    }
  }

  close() {
    if (this.verifiedForm()) {
      this.setState({error: false})
      const payload = 'bye'
      this.context.sendPayload(payload)
    } else {
      this.setState({error: true})
    }
  }

  verifiedForm() {
    if (
      this.state.email === '' ||
      this.state.message === ''
    )
      return false
    return true
  }

  handleEmail(event) {
    this.setState({ email: event.target.value })
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
        />
        <MyTextArea></MyTextArea>
        <Button onClick={() => this.close()}>Odeslat email</Button>
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