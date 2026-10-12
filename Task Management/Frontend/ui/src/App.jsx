import { useEffect,useState } from "react";

const API="http://localhost:3000/api/task"

function App(){
  const [tasks,setTasks]=useState([]);
  const [title,SetTitle]=useState('')

  const getTasks= async()=>{
      const res= await fetch(API)
      const data=await res.json()
      setTasks(data)
  }

  useEffect(()=>{
    getTasks();
  },[])

  const addTasks=async(e)=>{
    e.preventDefault()
    if(!title.trim()) return;

    const res =await fetch(API,{method:"POST",header:{"Content-type":"application/json"},
    body:JSON.stringify()})

  setTitle('');
  getTasks();
  }


  const delTasks =async(id)=>{
  const res= await fetch(`${API}/${id}`,{method:'DELETE'});
  getTasks();
};

}