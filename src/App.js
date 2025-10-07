import React,{useState} from 'react';
// App.js

export default function MyApp() {
  const [task, setTask] = useState('');
  const  [tasks, setTasks] = useState([]);
  const [clicked,setClicked] = useState([]);
  const handleAdd = () => {
    if (task.trim()){
      setTasks([...tasks,task]);
      setClicked([...clicked,false]);
      setTask('');
    }};
  const handleCheck = (index)=>{
    const updated = [...clicked];
    setClicked(updated);  
  };
  return (
    <div>
      <h1>To do list</h1>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)}  placeholder='New task' / >
      <button onClick={handleAdd} >Add</button>
      <ul>
        {tasks.map((t,index)=><li key={index}>{t} 
        <button onClick={() => handleCheck(index)}>  {clicked[index] ? '✅' : '🔲'}</button>
        </li>)}
      </ul>
    </div>
  );
}
