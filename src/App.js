
import './index.css';
import Employee from './components/employee';
import {useState} from 'react';

function App() {
  const showEmployee = true;
  // let role = "dev"
  const[role,setRole] = useState('dev')

  const[employees, setEmployees] = useState([
    { 
      id:1, 
      name:'Anne', 
      role:'Recruiter', 
      img:"https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg",},

    {
      id:2, 
      name:'Kim', 
      role:'IT', 
      img:"https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg",
    },

    {
      id:3, 
      name:'John', 
      role:'HR', 
      img:"https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg",
    },

    {
      id:4, 
      name:'Flora', 
      role:'Developer', 
      img:"https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg",
    },

    {
      id:5, 
      name:'Keith', 
      role:'Associate', 
      img:"https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg",
    },

    {
      id:6, 
      name:'Rose', 
      role:'Manager', 
      img:"https://thumbs.dreamstime.com/b/beautiful-office-girl-busy-working-26681075.jpg",
    },
  ]);

  /*
  update id, name, role
  */
  function updateEmployee(id, newName, newRole) {
    // console.log('update employee')
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        return {...employee, name: newName, role: newRole}
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  return (
    <div className="App">
      {showEmployee ? (<>
        <input type="text" onChange={(e) => {
          console.log(e.target.value);
          setRole(e.target.value)
        }} />
        <div className= "flex flex-wrap justify center">
        {employees.map((employee) => {
          console.log(employee);
          return (
            <Employee 
              key={employee.id}
              id={employee.id}
              name={employee.name} 
              role={employee.role} 
              img={employee.img} 
              updateEmployee={updateEmployee}
            />);
          })}
        </div>
        </>
      ) : (
      <p>You can't see the employees</p>  
    )}
    </div>
  );
}

export default App;
