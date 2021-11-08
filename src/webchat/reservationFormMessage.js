import React from 'react'
import styled from 'styled-components'
import { WebchatContext, customMessage } from '@botonic/react'
import MobileDateTimePicker from '@mui/lab/MobileDateTimePicker'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import DateTimePicker from '@mui/lab/DateTimePicker'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
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
                        Formulář pro přihlášení na lekci
                    </em>
                </p>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                        <MobileDateTimePicker
                            clearable
                            value={this.state.date}
                            todayText="teď"
                            inputFormat="yyyy/MM/dd hh:mm a"
                            onChange={(newValue) => this.handleDate(newValue)}
                            renderInput={(params) => (
                                <TextField {...params}
                                    helperText={this.state.error === true
                                        ? 'Toto pole je povinné'
                                        : ''}
                                    error={this.state.date === null && this.state.error === true}
                                    style={{
                                        width: '100%'
                                    }}
                                />
                            )}
                        />
                    </Stack>
                </LocalizationProvider>
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















