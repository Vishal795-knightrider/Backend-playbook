import { useEffect,useState } from "react";

const API="http://localhost:3000/api/task"

function App(){
  const [tasks,setTasks]=useState([]);
  const [title,setTitle]=useState('')

  const getTasks= async()=>{
      const res= await fetch(API)
      if(!res.ok) return
      const data=await res.json()
      setTasks(data)
  }

  useEffect(()=>{
    getTasks();
  },[])

  const addTasks = async(e)=>{
  e.preventDefault();

  if(!title.trim()) return;
  try{
    const res = await fetch(API,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({ title })});
    const data = await res.json();

    if (!res.ok){
      alert(data.message||"Failed to add task");
      return;
    }

    setTitle("");
    await getTasks();

  }catch(error){
    console.error(error);
    console.error('Frontend POST error:', error);
  }
};

  const delTasks =async(id)=>{
  const res= await fetch(`${API}/${id}`,{method:'DELETE'});
  getTasks();
};

  return(
    <div>
      <h1>Task Management</h1>
       <form onSubmit={addTasks}>
        <input
          type="text"
          placeholder="Enter task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <h2>My Tasks ({tasks.length})</h2>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span>{task.title}</span>
            <button onClick={()=>delTasks(task._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App;