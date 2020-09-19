import React, { useState, useEffect } from 'react'
import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import axios from 'axios'
import './App.css';

function App() {

  const [employeeState, setEmployeeState] = useState({
    employees: [],
    columns: [
      {
        Header: 'First Name',
        accessor: 'firstName'
      },
      {
        Header: 'Last Name',
        accessor: 'lastName'
      },
      {
        Header: "Email",
        accessor: 'email'
      },
      {
        Header: 'Phone Number',
        accessor: 'phoneNumber'
      }
    ]
  })

  // using random user api to get random employee info
  useEffect(() => {
    axios.get('https://randomuser.me/api?results=20')
      .then(({ data }) => {
        let employees = data.results.map(employee => ({
          firstName: employee.name.first,
          lastName: employee.name.last,
          email: employee.email,
          phoneNumber: employee.phone
        }))

        // setting the data to employee state
        setEmployeeState({ ...employeeState, employees })
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <ReactTable
        data={employeeState.employees}
        columns={employeeState.columns}
      />
    </>
  );
}

export default App;
