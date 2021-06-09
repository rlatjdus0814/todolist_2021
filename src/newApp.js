import React, { useState } from 'react';
import './App.css';
import { Typography } from '@material-ui/core';
import InputArea from './components/InputArea';
import ListArea from './components/ListArea';

function NewApp(props) {
  const [todoList, setTodoList] = useState([]);
  return <>
    <div className="App">
      <div className="header">TODO LIST</div>
      <InputArea todoList={todoList} setTodoList={setTodoList} />
      <ListArea todoList={todoList} />
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © 김서연 ' + new Date().getFullYear() + '.'}
      </Typography>
    </div>
  </>
}

export default NewApp;