
const employee = { name:"", addressStreet: ""}

// u define an object w/ curly bracket, which obj has a key with
//value (an obj without any key is an empty obj ex: i = {})

//employee.name
// if you want to access a key's value
//every obj is mutable, if you change de value of a key,
//it means that the value mutates.
//to not mutate you need to create a copy.

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee} //does not mutate
    newEmployee[key] = value
    //const newEmployee = {key:'value'}
    return newEmployee
}

 function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
 } 

 function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
 }

 function destructivelyDeleteFromEmployeeByKey(employee, key){
     delete employee[key]
     return employee 
 }