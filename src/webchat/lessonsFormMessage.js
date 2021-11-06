import React from 'react'
import styled from 'styled-components'
import { WebchatContext, customMessage } from '@botonic/react'
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

class LessonsForm extends React.Component {
    static contextType = WebchatContext
    constructor(props) {
        super(props)
        this.handleEmail = this.handleEmail.bind(this)
        this.handleMessage = this.handleMessage.bind(this)
        this.state = {
            email: '',
            phone: '',
            lessonID: '',
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

    sendApplication(email, phone, lessonID) {

    }

    handleLesson(value) {
        console.log('handle ' + event.target.value)
        this.setState({ lessonID: event.target.value })
        this.setState({ lessonID: value ? value.guests : '' })
    }

    handleEmail(event) {
        console.log('handle ' + event.target.value)
        this.setState({ email: event.target.value })
    }

    handlePhone(event) {
        console.log('handle ' + event.target.value)
        this.setState({ phone: event.target.value })
    }

    render() {
        const lessonOptions = [
            { id: '1', lesson: 'test1' },
            { id: '2', lesson: 'test2' },
            { id: '3', lesson: 'test3' },
            { id: '4', lesson: 'test4' },
            { id: '5', lesson: 'test5' },
        ]
        return (
            <Form>
                <p style={{ fontSize: 10, marginBottom: '5px' }}>
                    <em>
                        Formulář pro přihlášení na lekci
                    </em>
                </p>
                <Autocomplete
                disabled={!this.state.edit}
                options={lessonOptions}
                getOptionLabel={option => option.lesson}
                getOptionSelected={(option, value) => option.id == value.id}
                onChange={(event, newValue) => {
                    this.handleLesson(newValue)
                }}
                style={{
                    width: '100%',
                    margin: '0px -63px 5px 0px',
                }}
                renderInput={params => (
                    <MyTextField
                    required={true}
                    label='Lekce'
                    params={params}
                    value={this.state.lessonID}
                    error={this.state.error}
                    disabled={!this.state.edit}
                    />
                )}
                />
                <MyTextField
                    required={true}
                    label='Email'
                    error={this.state.error}
                    value={this.state.email}
                    onChange={this.handleEmail}
                    disabled={!this.state.edit}
                />
                <MyTextField
                    required={true}
                    label='Telefon'
                    error={this.state.error}
                    value={this.state.message}
                    onChange={this.handleMessage}
                    disabled={!this.state.edit}
                />
                <Button disabled={!this.state.edit} onClick={() => this.close()}>Odeslat přihlášku</Button>
            </Form>
        )
    }
}

export default customMessage({
    name: 'lessons-form',
    component: LessonsForm,
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


