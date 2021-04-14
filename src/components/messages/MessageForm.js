import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addEmployee, getAllEmployees } from '../../modules/EmployeeManager';
import './EmployeeForm.css';

export const EmployeeForm = () => {
	// State will contain both animal data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [employee, setEmployee] = useState({
		name: "",
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section
	const [employees, setEmployees] = useState([]);
	const history = useHistory();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component
  
  const getEmployees = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllEmployees().then(employeessFromAPI => {
      setEmployees(employeessFromAPI)
    });
  };

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newEmployee = { ...employee }
		let selectedVal = event.target.value

		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Animal is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newEmployee[event.target.id] = selectedVal
		// update state
		setEmployee(newEmployee)
	}

     useEffect(() => {
		//load Employee data and setState
      getEmployees();
	  }, []);


	const handleClickSaveEmployee = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

			//invoke addAnimal passing animal as an argument.
			//once complete, change the url and display the animal list
		addEmployee(employee)
			.then(() => history.push("/employees"))
	}

	return (
		<form className="employeeForm">
			<h2 className="employeeForm__title">New Employee</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Employee's Full Name:</label>
					<input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee name" value={employee.name} />
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveEmployee}>
				Save Employee
      </button>
		</form>
	)
};