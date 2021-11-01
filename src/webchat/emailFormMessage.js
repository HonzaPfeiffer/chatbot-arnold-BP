import React from 'react'
import styled from 'styled-components'
import { WebchatContext, customMessage } from '@botonic/react'
import { MyTextField, MyTextArea } from '../utils'

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
      error: false,
      edit: true
    }
  }

  close() {
    console.log(this.verifiedForm())
    if (this.verifiedForm()) {
      console.log('done')
      this.setState({error: false, edit: false})
      const payload = 'help'
      this.context.sendPayload(payload)
    } else {
      this.setState({error: true})
    }
  }

  verifiedForm() {
    console.log('verification')
    if (
      this.state.email === ''
    ) {
      return false
    } else {
      return true
    }
  }

  handleEmail(event) {
    console.log('handle')
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