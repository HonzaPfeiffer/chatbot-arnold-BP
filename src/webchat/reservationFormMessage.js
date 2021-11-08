import React from 'react'
import 'date-fns'
import '@material-ui/pickers'
import styled from 'styled-components'
import { WebchatContext, customMessage } from '@botonic/react'
import czLocale from 'date-fns/locale/cs'
import DateFnsUtils from '@date-io/date-fns'
import { MyTextField } from '../utils'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardTimePicker
  } from '@material-ui/pickers'

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

class ReservationForm extends React.Component {
    static contextType = WebchatContext
    constructor(props) {
        super(props)
        this.handleName = this.handleName.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleDate = this.handleDate.bind(this)
        this.state = {
            name: '',
            phone: '',
            date: new Date(),
            service: null,
            error: false,
            edit: true
        }
    }

    close() {
        if (this.verifiedForm()) {
            this.setState({ error: false, edit: false })
            const payload = 'alert-success'
            this.sendApplication()
            this.context.sendPayload(payload)
        } else {
            this.setState({ error: true })
        }
    }

    verifiedForm() {
        if (
            this.state.name === '' ||
            this.state.phone === '' ||
            this.state.date === ''
        ) {
            return false
        } else {
            return true
        }
    }

    sendApplication() {
        console.log(this.state.name)
        console.log(this.state.phone)
        console.log(this.state.date)
    }

    handleDate(value) {
        this.setState({ date: value })
    }

    handleName(event) {
        this.setState({ name: event.target.value })
    }

    handlePhone(event) {
        this.setState({ phone: event.target.value })
    }

    render() {
        return (
            <Form>
                <p style={{ fontSize: 10, marginBottom: '5px' }}>
                    <em>
                        Formulář pro rezervaci
                    </em>
                </p>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        required={true}
                        label='Datum'
                        disabled={!this.state.edit}
                        inputVariant='filled'
                        onChange={this.handleDate}
                        value={this.state.date}
                        ampm={false}
                        disablePast
                        format='dd/MM/yyyy'
                        error={this.state.date === null && this.state.error === true}
                        helperText={
                        this.state.date === null && this.state.error === true
                            ? 'Toto pole je povinné'
                            : ' '
                        }
                        style={{
                        width: '80%',
                        }}
                    />
                    <KeyboardTimePicker
                        required={true}
                        label='Čas'
                        disabled={!this.state.edit}
                        inputVariant='filled'
                        onChange={this.handleDate}
                        value={this.state.date}
                        ampm={false}
                        disablePast
                        error={this.state.date === null && this.state.error === true}
                        helperText={
                        this.state.date === null && this.state.error === true
                            ? 'Toto pole je povinné'
                            : ' '
                        }
                        style={{
                        width: '80%',
                        }}
                    />
                </MuiPickersUtilsProvider>
                <MyTextField
                    required={true}
                    label='Jméno a příjmení'
                    error={this.state.error}
                    value={this.state.name}
                    onChange={this.handleName}
                    disabled={!this.state.edit}
                />
                <MyTextField
                    required={true}
                    label='Telefon'
                    error={this.state.error}
                    value={this.state.phone}
                    onChange={this.handlePhone}
                    disabled={!this.state.edit}
                />
                <Button disabled={!this.state.edit} onClick={() => this.close()}>Odeslat přihlášku</Button>
            </Form>
        )
    }
}

export default customMessage({
    name: 'reservation-form',
    component: ReservationForm,
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















