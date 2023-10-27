import React from 'react';
import './Popup.css'

function Popup({ isOpen, onClose, popupData }) {
  const handleOverlayClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={`popup ${isOpen && 'popup_opened'}`}
      onMouseDown={handleOverlayClick}
    >
      <div className='popup__container'>
        <button className='popup__close' type='button' onClick={onClose}/>
        <h2 className='popup__title'>
          {popupData.name}
        </h2>
        <ul className='popup__info'>
          <li className='popup__info-title-item'>
            <p className='popup__info-title'>
              Телефон:
            </p>
            <p className='popup__info-text'>
              {popupData.phone}
            </p>
          </li>
          <li className='popup__info-title-item'>
            <p className='popup__info-title'>
              Почта:
            </p>
            <p className='popup__info-text'>
              {popupData.email}
            </p>
          </li>
          <li className='popup__info-title-item'>
            <p className='popup__info-title'>
              Дата приема:
            </p>
            <p className='popup__info-text'>
              {popupData.hire_date}
            </p>
          </li>
          <li className='popup__info-title-item'>
            <p className='popup__info-title'>
              Должность:
            </p>
            <p className='popup__info-text'>
              {popupData.position_name}
            </p>
          </li>
          <li className='popup__info-title-item'>
            <p className='popup__info-title'>
              Подразделение:
            </p>
            <p className='popup__info-text'>
              {popupData.department}
            </p>
          </li>
        </ul>
        <div className='popup__additional-info'>
          <h3 className='popup__additional-info-title'>
            Дополнительная информация:
          </h3>
          <p className='popup__info-text'>
            Разработчики используют текст в качестве заполнителя макта страницы.
            Разработчики используют текст в качестве заполнителя макта страницы.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
