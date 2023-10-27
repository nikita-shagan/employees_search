import Api from './Api';
import { EMPLOYEES_API } from '../constants/constants';

class EmployeesApi extends Api {
  getEmployees(searchParams = '') {
    return this.processQuery(`/${searchParams}`, 'GET')
  }
}

const employeesApi = new EmployeesApi(EMPLOYEES_API);
export default employeesApi;
