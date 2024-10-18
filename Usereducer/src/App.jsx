import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import EmployeeList from "./components/Employeelist/employeelist";
import Teamlist from "./components/Teamlist/teamlist";
import employeesJson from "./static/employee.json";
import { data } from "autoprefixer";

function App() {
  // const masterData = {
  //   employeeList: employeesJson,
  //   teamList: [],
  //   avarageAge: 0,
  // };
  const reducerFn = (state,action ) => {
    console.log("action Dispatched", masterData ,action);
    
      if(action.action === "ADD_TO_TEAM_LIST"){
        return{
          ...state,
          teamList:  state2001.teamList.push(action.payload)
        }
       

      }  else if (action.action === "REMOVE_FROM_TEAM_LIST"){
        
      } else if (action.action === "CALCULATE_AVG_AGE") {

      } else if (action.action === "SORT_BY_AGE"){

      } else {

      }
     
  };



  const [masterData, dispatch] = useReducer (reducerFn , {
    employeeList: employeesJson,
    teamList: [],
    avarageAge: 0,
  })
  // const onAddclick = () => {};

  // const onRemoveclick = () => {};
  // const calculateAvgage = () => {};
  // const onSortByage = () => {};

 
  return (
    <>
      <h1>Employee App</h1>
      <div className="container">
        <div className="employeelist">
          <EmployeeList
            employees={masterData.employeeList}
            // onAddclick={onAddclick}
            dispatch={dispatch}
          />
        </div>
        <div className="teamlist">
          <Teamlist
            dispatch={dispatch}
            // calculateAvgage={calculateAvgage}
            // onSortByage={onSortByage}
            // onRemoveclick={onRemoveclick}
            employees={masterData.teamList}
          />
        </div>
      </div>
    </>
  );
}

export default App;
