import React,{useState} from 'react';
// import Form from './component/Form';

function Apps() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [mobile,setMobile] = useState("");
  const [projectName,setprojectName] = useState("");
  const [startDate,setStartDate] = useState("");
  const [targetDate,setTargetDate] = useState("");
  const [flage,setflage]= useState(true);
  const [storeEnter,setStoreEnter] = useState("");
  const [id,setId] = useState(0);
  console.log(name);
  console.log(email);
  console.log(mobile);
  const store =(e)=>{
      e.preventDefault();
      if(name.length<3||name.length>20){
        alert("not valid name")
      }
      else{
        // console.log("name is here",name)
        let arr=[...name]
        console.log("array data=>",arr)
        for(let i=0;i<arr.length;i++){
          if(!isNaN(arr[i])){               
           setflage(false)
           break;
          }
        }
        if(true){
          setId(id+1)
        const newdata={id:id,name:name,email:email,mobile:mobile,projectName:projectName,startDate:startDate,targetDate:targetDate}
        setStoreEnter([...storeEnter,newdata])
        }
        else{
          alert("warning  not a name")
        }
      }

  }
  console.log(storeEnter)
  return (
    <div className="App">
   { /* <h6>{JSON.stringify(storeEnter)}</h6> */}
    <h1>To do List</h1>
    <form onSubmit={store} >
    <div className='form-group'>
    <input  placeholder='Enter Name' type = "number" onChange={e=>setName(e.target.value)} className='form-control mb-4'/>
    
    </div>
    <div className='form-group'>
    <input type="email" placeholder='Email' onChange={e=>setEmail(e.target.value)} className='form-control mb-4 '/>
    
    </div>
    <div className='form-group'>
    <input type="number" placeholder='Mobile' onChange={e=>setMobile(e.target.value)} className='form-control mb-4'/>
    </div>
    <div className='form-group'>
    <input type="text" placeholder='Project Name' onChange={e=>setprojectName(e.target.value)} className='form-control mb-4'/>
    </div>
    <div className='form-group'>
    <label className="lablenameForm">Start Date</label>
    <input type="date" placeholder='Start Date' onChange={e=>setStartDate(e.target.value)} className='form-control mb-4'/>
    </div>
    <div className='form-group'>
    <label className="lablenameForm">Target Date</label>
    <input type="date" placeholder='Target Date' onChange={e=>setTargetDate(e.target.value)} className='form-control mb-4'/>
    </div>
    <div className='form-group'>
    <button type="submit" className='btn btn-danger'> submit</button> 
    <button type="submit" className='btn btn-success'> view</button>
    </div>
   
    
      
    </form >
    <h6>Task Satus:</h6> 
    <input type="radio"/>
    <label>Planned</label> 
    <input type="radio"/>
    <label>In-Progess</label> 
    <input type="radio"/>
    <label>Done</label> 
    <div className='col'>
    <table className="table table-dark">
      <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>project</th>
            <th>startDate</th>
            <th>TargetDate</th>
          </tr>      
      </thead>
      <tbody>
      {
        storeEnter?storeEnter.map((ele)=>{
          return <tr>
            <td>{ele.id}</td>
            <td>{ele.name}</td>
            <td>{ele.email}</td>
            <td>{ele.mobile}</td>
            <td>{ele.projectName}</td>
            <td>{ele.startDate}</td>
            <td>{ele.targetDate}</td>
          </tr>
        }):null
      }
      </tbody>
    
    </table>
    </div>

    </div>
  );
}

export default Apps;