import './App.css';
import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Cards from '../Cards/Cards';
import Popup from '../Popup/Popup';
import employeesApi from '../../utils/api/EmployeesApi';
import { EMPLOYEES_PARAMS_KEY } from '../../utils/constants/constants';


function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [popupData, setPopupData] = useState({});

  useEffect(() => {
    employeesApi.getEmployees()
      .then((res) => {
        setEmployees(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const closePopup = () => {
    setIsPopupOpen(false)
  }

  const openPopup = (employee) => {
    setIsPopupOpen(true)
    setPopupData(employee)
  }

  const handleSearch = (keyWord) => {
    const params = keyWord ? `?${EMPLOYEES_PARAMS_KEY}=${keyWord}` : ''
    employeesApi.getEmployees(params)
      .then((res) => {
        setEmployees(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='app'>
      <main className='content'>
        <SearchForm handleSearch={handleSearch}/>
        <Cards openPopup={openPopup} employees={employees}/>
        <Popup isOpen={isPopupOpen} onClose={closePopup} popupData={popupData}/>
      </main>
    </div>
  )
}

export default App;
