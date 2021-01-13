import './App.css';
import React from "react";
import { FaAngleDown } from 'react-icons/fa';

const url = "https://randomuser.me/api/?results=200&nat=us";

class App extends React.Component {
  state = {
    employees: []
  };

  componentDidMount() {
    fetch(url)
    .then(data => data.json())
    .then(data => this.setState({ employees: data.results }));
  };
  
  render() {
    const { employees } = this.state;
    console.log({employees})
      
    function sortNames () {
      employees.sort(function(a,b){
        
      })
    }
    return (
      <>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Name <button onclick= 'sortNames()'><FaAngleDown/></button></th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.login.uuid}>
                <td>{employee.name.first} {employee.name.last}</td>
                <td>{employee.cell}</td>
                <td>{employee.email}</td>
                <td>{employee.dob.date.slice(0,10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
  export default App;
