
import './App.css';
import Employee from './components/employee';

function App() {
  const showEmployee = true;

  return (
    <div className="App">
      
      {showEmployee ? (
        <>
        <Employee name = "Ann" role="Intern"/>
        <Employee name = "Anne"/>
        
        </>

      ) : (
      <p>You can't see the employees</p>  
    )}
      
    </div>
  );
}

export default App;
