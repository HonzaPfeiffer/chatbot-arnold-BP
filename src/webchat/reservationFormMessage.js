import React from 'react'
import 'date-fns'
import '@material-ui/pickers'
import styled from 'styled-components'
import { WebchatContext, customMessage } from '@botonic/react'
import DateFnsUtils from '@date-io/date-fns'
import { MyTextField } from '../utils'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardTimePicker
} from '@material-ui/pickers'
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

class ReservationForm extends React.Component {
    static contextType = WebchatContext
    constructor(props) {
        super(props)
        this.handleName = this.handleName.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleDate = this.handleDate.bind(this)
        this.state = {
            serviceID: props.service.id,
            name: '',
            phone: '',
            date: new Date(),
            service: props.service,
            error: false,
            dateError: '',
            edit: true
        }
        console.log(props.service)
    }

    close() {
        if (this.verifiedForm()) {
            this.setState({ error: false, edit: false })
            this.sendReservation()
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
            this.setState({ dateError: 'Toto pole je povinné' })
            return false
        } else {
            const day = this.state.date.getDay()
            const selectedTime = this.state.date.toLocaleTimeString()
            const openTime = this.state.service.open
            const closeTime = this.state.service.close
            if (
                selectedTime > openTime && 
                selectedTime < closeTime &&
                day !== 0 &&
                day !== 6
            ) {
                return true
            } else {
                this.setState({ dateError: `Datum není v době Po-Pá ${openTime}-${closeTime}` })
                return false   
            }
        }
    }

    sendReservation() {
        fetch(config.apiConfig.reservationUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: this.state.name,
                phone: this.state.phone,
                date: this.state.date,
                serviceID: this.state.serviceID
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
                        error={this.state.error}
                        helperText={this.state.dateError}
                        style={{
                            width: '80%',
                            margin: '0px 0px 10px 0px',
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
                        error={this.state.error}
                        helperText={this.state.dateError}
                        style={{
                            width: '80%',
                            margin: '0px 0px 5px 0px',
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
                <Button disabled={!this.state.edit} onClick={() => this.close()}>Odeslat rezervaci</Button>
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
        imagestyle: { display: 'none' },
        blob: false,
        enabletimestamps: false,
    },
})















