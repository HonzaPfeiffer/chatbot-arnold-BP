import React from 'react'
import { TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';


export const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/

export function MyTextField(props) {
  let helperText = ''
  if (props.error)
    helperText =
      props.error && props.value === ''
        ? 'Toto pole je povinné'
        : props.errorMessage || ''
  return (
    <TextField
      variant='filled'
      {...props.params}
      required={props.required}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      error={helperText !== ''}
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
    helperText =
      props.error && props.value === ''
        ? 'Toto pole je povinné'
        : props.errorMessage || ''
  return (
    <TextField
      variant='filled'
      multiline
      {...props.params}
      required={props.required}
      label={props.label}
      value={props.value}
      onChange={props.onChange}
      error={helperText !== ''}
      helperText={helperText}
      disabled={props.disabled}
      color='success'
      style={props.style || { width: '80%', margin: '5px'}}
    />
  )
}
