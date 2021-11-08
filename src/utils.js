import React from 'react'
import { TextField } from '@mui/material'

export function MyTextField(props) {
  let helperText = ''
  if (props.error)
    helperText = 'Toto pole je povinné'
  return (
    <TextField
      variant='filled'
      {...props.params}
      required={props.required}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      error={props.error}
      helperText={helperText}
      disabled={props.disabled}
      color='success'
      style={props.style || { width: '80%', margin: '5px' }}
    />
  )
}

export function MyTextArea(props) {
  let helperText = ''
  if (props.error)
    helperText = 'Toto pole je povinné'
  return (
    <TextField
      variant='filled'
      multiline
      {...props.params}
      required={props.required}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      error={props.error}
      helperText={helperText}
      disabled={props.disabled}
      color='success'
      style={props.style || { width: '80%', margin: '5px'}}
    />
  )
}
