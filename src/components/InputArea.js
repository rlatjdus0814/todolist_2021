import React, { useState } from 'react';
import { TextField, Button, Snackbar } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { Alert } from '@material-ui/lab';
import DateTimePicker from './DateTimePicker';

const InputArea = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const { todoList, setTodoList } = props; //부모로부터 props로 가져옴

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
      <DateTimePicker
        dateLable="시작 예정일"
        date={startDate}
        timeLable="시작 시간"
        time={startTime}
        changeDate={setStartDate}
        changeTime={setStartTime} />
      <DateTimePicker
        dateLable="종료 예정일"
        date={endDate}
        timeLable="종료 시간"
        time={endTime}
        changeDate={setEndDate}
        changeTime={setEndTime} />
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
  </>
}

export default InputArea;