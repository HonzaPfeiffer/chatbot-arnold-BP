import React from 'react'
import styled from 'styled-components'
import { WebchatContext, customMessage } from '@botonic/react'
import Autocomplete from '@mui/material/Autocomplete';
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
        this.handleName = this.handleName.bind(this)
        this.handlePhone = this.handlePhone.bind(this)
        this.handleLesson = this.handleLesson.bind(this)
        this.state = {
            lessons: props.data.lessons,
            name: '',
            phone: '',
            lessonID: 0,
            error: false,
            edit: true
        }
    }

    close() {
        if (this.verifiedForm()) {
            this.setState({ error: false, edit: false })
            this.sendApplication()
        } else {
            this.setState({ error: true })
        }
    }

    verifiedForm() {
        if (
            this.state.name === '' ||
            this.state.phone === '' ||
            this.state.lessonID === 0
        ) {
            return false
        } else {
            return true
        }
    }

    sendApplication() {
        fetch('https://testapi.io/api/arnold/resource/joinlesson', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: this.state.name,
              phone: this.state.phone,
              lessonID: this.state.lessonID,
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

    handleLesson(value) {
        this.setState({ lessonID: value ? value.id : 0 })
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
                <Autocomplete
                    disabled={!this.state.edit}
                    options={this.state.lessons}
                    getOptionLabel={option => `${option.lesson} - ${option.day} ${option.when}`}
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
        imagestyle: { display: 'none' },
        blob: false,
        enabletimestamps: false,
    },
})



