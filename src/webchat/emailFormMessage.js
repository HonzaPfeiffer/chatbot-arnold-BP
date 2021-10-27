import React from 'react'
import styled from 'styled-components'
import { WebchatContext, customMessage } from '@botonic/react'
import TextField from '@material-ui/core/TextField'
import { MyTextField } from '../utils'

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
    this.state = {
      email: '',
      message: ''
    }
  }

  close() {
    const payload = 'bye'
    this.context.sendPayload(payload)
  }

  verifiedForm() {
    if (
      this.state.email === '' ||
      this.state.message === ''
    )
      return false
    return true
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
        />
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