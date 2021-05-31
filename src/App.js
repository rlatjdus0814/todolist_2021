import React from 'react';
import './App.css';
import { TextField, Typography, Button, List, ListItem, ListItemText } from '@material-ui/core';
import { KeyboardDatePicker, KeyboardTimePicker } from '@material-ui/pickers';
import SaveIcon from '@material-ui/icons/Save';
class App extends React.Component {
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
    }
  }

  checkValidate() {
    const {
      title, content, startDate, startTime, endDate, endTime
    } = this.state;
    //if (!title || !content || !startDate || !startTime || !endDate || !endTime) {
    //  return false
    //}
    console.log(title.length);
    if (!title || !content || !startDate || !startTime || !endDate || !endTime) {
      //alert()
      return false
    }
    if (title.length >= 20) {
      alert("제목은 20글자 이하로 작성해주세요.");
      return false
    }
    if (content.length >= 50) {
      alert("상세내용은 50글자 이하로 작성해주세요.");
      return false
    }

    return true
  }

  saveTodoList() {
    if (this.checkValidate()) {
      const { todoList, title, content, startDate, startTime, endDate, endTime } = this.state;
      todoList.push({ title: title.trim(), content: content.trim(), startDate, startTime, endDate, endTime });
      this.setState({
        todoList,
        /*
        title: "",
        content: "",
        startDate: null,
        startTime: null,
        endDate: null,
        endTime: null,
        */
      });
    } else {
      alert("error");
    }
  }

  render() {
    const { title, content, startDate, startTime, todoList, endDate, endTime } = this.state;
    return (
      <div className="App">
        <div className="header">TODO LIST</div>
        <div className="input_area">
          <TextField
            label="제목" size="normal" margin="normal" fullWidth required
            onChange={(e) => this.setState({ title: e.target.value })} //return this.setState({ startTime: value })과 같음
            value={title}
            rowsMax={20}
          />
          <TextField
            label="상세내용" size="normal" margin="normal" fullWidth multiline
            onChange={(e) => this.setState({ content: e.target.value })} //return this.setState({ startTime: value })과 같음
            value={content}
          />
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="yyyy/MM/DD"
            margin="normal"
            label="시작 예정일"
            onChange={(value) => {
              this.setState({ startDate: value }) //return이 없는 함수
            }}
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
            onChange={(value) => this.setState({ startTime: value })} //return this.setState({ startTime: value })과 같음
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
            onChange={(value) => {
              this.setState({ endDate: value }) //return이 없는 함수
            }}
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
            onChange={(value) => this.setState({ endTime: value })} //return this.setState({ startTime: value })과 같음
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
            onClick={() => this.saveTodoList()}
          >
            Save
        </Button>
        </div>
        <div className="list_area">
          <List>
            {todoList.map((todoItem, idx) => {
              const { title, content, startDate, startTime, endDate, endTime } = todoItem;
              return (
                <ListItem key={idx} role={undefined} dense button>
                  <ListItemText
                    primary={title}
                    secondary={startDate?.format('yyyy-MM-DD') + ' ' + startTime?.format('HH:MM') + ' ~ ' + endDate?.format('yyyy-MM-DD') + ' ' + endTime?.format('HH:MM')}
                  />
                </ListItem>
              )
            })}
          </List>
        </div>
        <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © 김서연 ' + new Date().getFullYear() + '.'}
        </Typography>
      </div>
    );
  }

}

export default App;