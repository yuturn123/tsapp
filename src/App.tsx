import React, { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';
import  { db } from "./firebase";
//import { TestComponent } from './TestComponent';

const App: React.FC = () => {
  const [tasks, setTasks] = useState([{id:"", title:""}]);
  useEffect(() => {
    const unSub = db.collection("tasks").onSnapshot((snapshot)=>{
      setTasks(
        snapshot.docs.map((doc)=> ({id: doc.id, title: doc.data().title}))
      );
    });
    return ()=> unSub();

  }, []);

  return(
    <div className="App">
      {tasks.map((task)=><h3>{task.title}</h3>
      )}
    </div>
  );
};

// const App:React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <TestComponent text="hello from App"/>
//       </header>
//     </div>
//   )
// }

export default App;
