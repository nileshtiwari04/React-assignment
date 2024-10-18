import './employeelist.modular.css'

const EmployeeList = (props) => {
    console.log(props);
    
    return (
        <>
        <h1>employee list</h1>
        {
            props.employees.map(data => {
                return <div key={data.id}className='ecard'>
                    {data.first_name } {data.last_name}  {data.age}
                    <button onClick={() =>props.dispatch({action :"ADD_TO_TEAM_LIST", payload: data})}>Add</button>
                </div>
            })
        }
        </>
    )
};

export default EmployeeList;