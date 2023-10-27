import './Card.css'
import phone from '../../images/phone.svg'
import letter from '../../images/letter.svg'

function Card({ openPopup, employee }) {
  const handleClick = () => {
    openPopup(employee)
  }

  return (
    <li className='card' onClick={handleClick}>
      <h2 className='card__title'>
        {employee.name}
      </h2>
      <ul className='card_contacts'>
        <li className='card_contact'>
          <img className='card_contact-image' src={phone} alt="phone"/>
          <p className='card_contact-text'>
            {employee.phone}
          </p>
        </li>
        <li className='card_contact'>
          <img className='card_contact-image' src={letter} alt="phone"/>
          <p className='card_contact-text'>
            {employee.email}
          </p>
        </li>
      </ul>
    </li>
  );
}

export default Card;
