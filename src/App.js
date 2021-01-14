import './App.css';
import React from "react";
import { FaAngleDown } from 'react-icons/fa';

const url = "https://randomuser.me/api/?results=200&nat=us";

class App extends React.Component {
  state = {
    employees: [],
    searchEmp: [],
    sorted: false,
    search: ""
  };

  componentDidMount() {
    fetch(url)
      .then(data => data.json())
      .then(data => this.setState({ employees: data.results, searchEmp: data.results }));
    };
    
    handleInputChange = (event) => {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value.toLowerCase();
      let val = value;
      // Updating the input's state
      this.setState({
        search: val
      },
      this.searchResults
      );
    };
    
    searchResults = () => { 
      
      const { employees } = this.state;
      var myArray = []
      if(myArray === []) {
      myArray = employees
    }

    for (let i = 0; i < employees.length; i++) 
    if (employees[i].name.last.toLowerCase().startsWith(this.state.search)) {
      console.log(this.state.search);
      myArray.push(employees[i]);
    }
    this.setState({searchEmp: myArray})
    console.log(myArray);
  };

  sortNames = () => {
    const { employees, sorted } = this.state;
    let employeeSort;
    if (!sorted) {
      employeeSort = employees.sort(function (a, b) {

        return (a.name.last > b.name.last ? 1 : -1)
      })
    } else {
      employeeSort = employees.reverse();

    }
    this.setState({ searchEmp: employeeSort, sorted: !sorted })
  };


  render() {
    const { searchEmp } = this.state;

    return (
      <>

        
        Search <input name= "search" type="text" onChange={this.handleInputChange}/>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name <button onClick={this.sortNames}><FaAngleDown /></button></th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>
            {searchEmp.map((employee) => (
              <tr key={employee.login.uuid}>
                <td><img src={employee.picture.large} alt="" /></td>
                <td>{employee.name.first} {employee.name.last}</td>
                <td>{employee.cell}</td>
                <td>{employee.email}</td>
                <td>{employee.dob.date.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
export default App;
