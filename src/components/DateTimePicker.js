import React from 'react';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';

const DateTimePicker = (props) => {
  return <>
    <KeyboardDatePicker
      disableToolbar
      variant="inline"
      format="yyyy/MM/DD"
      margin="normal"
      label={props.dateLable}
      onChange={(value) => props.changeDate(value)}
      value={props.date}
      style={{ width: '50%' }}
      KeyboardButtonProps={{
        'aria-label': 'change date',
      }}
    />
    <KeyboardTimePicker
      margin="normal"
      label={props.timeLable}
      variant="inline"
      onChange={(value) => props.changeTime(value)}
      value={props.time}
      style={{ width: '50%' }}
      KeyboardButtonProps={{
        'aria-label': 'change time',
      }}
    />
  </>
}

export default DateTimePicker;