
import './teamlist.modular.css'
const Teamlist = (props) => {
    return(
        <>
          <h1>Team List</h1>
          <div>
          {
            props.employees.map(data => {
                return <div key={data.id}className='tcard'>
                    {data.first_name } {data.last_name}  {data.age}
                    <button onClick={() =>props.dispatch("REMOVE_FROM_TEAM_LIST")}>Remove</button>
                </div>
            })
        }
            Average Age : 0 <br />
            <button onClick={() =>props.dispatch("CALCULATE_AVG_AGE")}>Calculate Avg age</button>
            <button onClick={() =>props.dispatch("SORT_BY_AGE")}>Sort by age</button>
          </div>
        </>
    )
};


export default Teamlist;