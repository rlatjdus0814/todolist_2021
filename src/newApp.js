import React, { useState } from 'react';
import './App.css';
import { TextField, Typography, Button, List, ListItem, ListItemText, Snackbar } from '@material-ui/core';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import SaveIcon from '@material-ui/icons/Save';
import { Alert } from '@material-ui/lab';

/*
 constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      title: "",
      content: "",
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null,
      snackBarOpen: false,
    }
  }
*/

function NewApp(props) {
  const [todoList, setTodoList] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackBarOpen(false)
  };

  const checkValidate = () => {
    console.log(title.length);
    if (!title || !content || !startDate || !startTime || !endDate || !endTime) {
      if (title.length >= 20 || title.length === 0) {
        alert("제목은 20글자 이하로 작성해주세요.");
      } else if (content.length >= 50 || content.length === 0) {
        alert("상세내용은 50글자 이하로 작성해주세요.");
      } else if (startDate === null) {
        alert("시작 예정일을 선택해주세요.");
      } else if (startTime === null) {
        alert("시작시간을 선택해주세요.");
      } else if (endDate === null) {
        alert("종료 예정일을 선택해주세요.");
      } else if (endTime === null) {
        alert("종료시간을 선택해주세요.");
      }
      return false
    }
    return true
  };

  const saveTodoList = () => {
    if (checkValidate()) {
      setTodoList([...todoList, { title: title.trim(), content: content.trim(), startDate, startTime, endDate, endTime }]);
    } else {
      setSnackBarOpen(true)
    }
  }

  return <>
    <div className="App">
      <div className="header">TODO LIST</div>
      <div className="input_area">
        <TextField
          label="제목" size="normal" margin="normal" fullWidth required
          onChange={(e) => setTitle(e.target.value)} //return this.setState({ startTime: value })과 같음
          value={title}
          error={title === "" ? true : false}
        />
        <TextField
          label="상세내용" size="normal" margin="normal" fullWidth multiline
          onChange={(e) => setContent(e.target.value)}
          value={content}
          error={content === "" ? true : false}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/DD"
          margin="normal"
          label="시작 예정일"
          onChange={(value) => setStartDate(value)}
          value={startDate}
          style={{ width: '50%' }}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          label="시작시간"
          variant="inline"
          onChange={(value) => setStartTime(value)}
          value={startTime}
          style={{ width: '50%' }}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="yyyy/MM/DD"
          margin="normal"
          label="종료 예정일"
          onChange={(value) => setEndDate(value)}
          value={endDate}
          style={{ width: '50%' }}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          label="종료시간"
          variant="inline"
          onChange={(value) => setEndTime(value)}
          value={endTime}
          style={{ width: '50%' }}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
        <Button
          variant="outlined"
          startIcon={<SaveIcon />}
          style={{ float: 'right' }}
          onClick={() => saveTodoList()}
        >
          Save
        </Button>
        <Snackbar open={snackBarOpen} autoHideDuration={6000} onClose={() => handleClose}>
          <Alert onClose={() => handleClose} severity="error">
            빈 칸을 입력해주세요.
            </Alert>
        </Snackbar>
      </div>
      <div className="list_area">
        <List>
          {todoList.map((todoItem, idx) => {
            const { title, startDate, startTime, endDate, endTime } = todoItem;
            return (
              <ListItem key={idx} role={undefined} dense button>
                <ListItemText
                  primary={title}
                  secondary={startDate?.format('yyyy-MM-DD') + ' ' + startTime?.format('HH:MM') + ' ~ ' + endDate?.format('yyyy-MM-DD') + ' ' + endTime?.format('HH:MM')}
                />
              </ListItem>
            );
          })}
        </List>
      </div>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © 김서연 ' + new Date().getFullYear() + '.'}
      </Typography>
    </div>
  </>
}

export default NewApp;