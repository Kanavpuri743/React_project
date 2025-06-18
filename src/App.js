import './App.css';
import Header from "./header.js";
import Footer from "./footer.js";
import Todos from "./Todos.js";
import Addtodo from "./Addtodo.js";
import React, { useState , useEffect } from 'react';
//import { cleanup } from '@testing-library/react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")=== null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  // const [myTodoList, setmyTodoList] = useState([
  //   // {
  //   //   sno: 1,
  //   //   title: "Go to the market",
  //   //   desc: "You need to go to the market to get this job done"
  //   // },
  //   // {
  //   //   sno: 2,
  //   //   title: "Go to the gym",
  //   //   desc: "Workout session at 6 PM"
  //   // },
  //   // {
  //   //   sno: 3,
  //   //   title: "Read a book",
  //   //   desc: "Finish reading the current novel"
  //   // }
  // ]);

 
const [myTodoList, setmyTodoList] = useState(initTodo);

  const OnDelete = (items) => {
    console.log("Deleted items:", items);
    setmyTodoList(myTodoList.filter((e) => {
      return e !== items;
    }));

     console.log("deleted", myTodoList)
    //localStorage.setItem("todos", JSON.stringify(myTodoList));
  }

  const addTodo = (Title, Desc)=>{
    console.log("I am adding this todo", Title,Desc);
    let Sno;
    if(myTodoList.length == 0){
      Sno = 0;
    }
    else{
      Sno = myTodoList[myTodoList.length - 1].sno +1;
    }
    
    const mytodo = {
      sno:Sno,
      title:Title,
      desc:Desc,
    }
    setmyTodoList([...myTodoList,mytodo]);
    console.log(mytodo);

    
  }


  useEffect(() => {
       localStorage.setItem("todos",JSON.stringify(myTodoList));
      
    }, [myTodoList])


  return (
    <>
    <Router>
      <Header title="Todos List" searchbar={false} />
      <Addtodo addTodofunc={addTodo}/>
      <Todos todoitems={myTodoList} ondeletething={OnDelete} />  {/* 👈 renamed prop */}
      <Footer />
    </Router>
    </>
  );
}

export default App;
