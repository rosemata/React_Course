function Employee(props){
    
    return (
    <>
    <h3>Here is an employee {props.name}</h3>
    <p>{props.role ? props.role : "Contractor"}</p>
    
    </>
    );
}

export default Employee;