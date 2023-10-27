import './SearchForm.css'
import {useState} from "react";

function SearchForm({ handleSearch }) {
  const [keyWord, setKeyWord] = useState('')

  const handleKeyWordChange = (evt) => {
    setKeyWord(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    handleSearch(keyWord)
  }

  return (
    <form action='#' name='search' noValidate className='search-form' onSubmit={handleSubmit}>
      <div className='search-form__input-container'>
        <input
          type='text'
          className='search-form__text-input'
          name='employee'
          placeholder=''
          required
          value={keyWord}
          onChange={handleKeyWordChange}
        />
        <button className='search-form__submit' type='submit'/>
      </div>
    </form>
  );
}

export default SearchForm;
