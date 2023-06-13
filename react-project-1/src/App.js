import React,{useState} from 'react';
import Todolist from './component/Comp1';


function App() {
  const [task,setTask] = useState('');
  const[list,setList]=useState([]);
  const changeHandler =(e) =>{
    setTask(e.target.value);
  }
  const submitHandler =(e) =>{
    e.preventDefault();
    const newList = [...list,task];
    setList(newList);
    setTask(" ");

  }
  const deleteHandler =(indexValue) => {
     const newList = list.filter((eachlist,index)=> index != indexValue);
     setList(newList);
  }
  return (
    <div>
      <center className='class'>
        <div className='container'>
        <h4 className='heading'>Todo Management Application</h4>
        <form onSubmit={submitHandler}>
          <input type='text' name='task' value={task} onChange={changeHandler}/> &nbsp;
          <input type='submit' name='Add' value='Add'/>
        </form>
        <Todolist list={list} deleteHandler={deleteHandler} />
        </div>
      </center>
    </div>
        
  );
}

export default App;
