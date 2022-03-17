import axios from 'axios';

const EMPLOYEE_API_BASE_URL = " http://localhost:8080/api/v1/employees";

class EmployeeService{
   
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee1(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }


    createEmployee(employeeDTO, file){
        return axios.post(EMPLOYEE_API_BASE_URL, employeeDTO,file);
    }


    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployeeById(employeeId, employee){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' +employeeId,employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}


export default new EmployeeService();