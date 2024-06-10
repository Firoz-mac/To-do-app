import './App.css';

import {useState} from 'react'

function App() {

  const [toDos,setTodos]=useState([])
  const [toDo,setTodo] = useState('')
  return (
    <div className="App">
      <div class="container-fluid bg bg-dark">
            <div class="row">
                <div class="box-main">
                    <div class="box">

                        <div class="box-title">
                            <p>To-Do List</p>
                            <i class="fa-solid fa-bars icon-list"></i>
                        </div>
                        <div class="box-content ">
                            <div class="content-center">
                                <input value={toDo} onChange={(e)=>setTodo(e.target.value)} class="input-one" type="text" id="input-box" placeholder="add your text"></input>
                                <button  onClick={()=>setTodos([...toDos,{id:Date.now(), text: toDo,status:false}])}  class="bt-add">Add</button>
                            </div>

                            { toDos.map((obj)=>{
                              return(

                                <div class="content-center2">

                                       <ul class="list-container">
                                           <input onChange={(e)=>{
                                             console.log(e.target.checked)
                                             console.log(obj)
                                             setTodos(toDos.filter(obj2=>{
                                              if(obj2.id===obj.id){
                                                obj2.status=e.target.checked
                                              }
                                              return obj2
                                             }))
                                           }} value={obj.status} class="checkbox" type='checkbox'></input>
                                           <li >{obj.text}</li>
                                       </ul>
                                       <div>
                                           <button class="btn-close btn-c pe-5"></button>
                                       </div>
      
                                   </div>

                              )
                                
                            })
                          }
          

                            
                            
                       </div>

                       



                    </div>

                </div>
                
            </div>

        </div>
    </div>
  );
}

export default App;
