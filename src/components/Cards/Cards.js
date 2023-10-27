import './Cards.css'
import Card from "../Card/Card";

function Cards({ openPopup, employees }) {
  return (
    <ul className='cards'>
      {
        employees.map((employee, index) => (
          <Card openPopup={openPopup} employee={employee} key={index}/>
        ))
      }
    </ul>
  );
}

export default Cards;
