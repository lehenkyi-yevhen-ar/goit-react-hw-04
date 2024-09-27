import { useState } from "react"
import toast, { Toaster } from "react-hot-toast"
import s from "./SearchBar.module.css"

const notify = () =>
  toast("Type something to find")

const SearchBar = ({ setQuery }) => {
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e) =>
    setInputValue(e.target.value)

  const handleSubmit = (e) => {e.preventDefault()
  if (!inputValue.trim()) {
    notify()
  } else {
    setQuery(inputValue);
    setInputValue('');
  }
}

  return (
    <>
      <header className={s.header}>
        <form onSubmit={handleSubmit} className={s.form}>
          <input
            className={s.input}
            value={inputValue}
            type="text"
            onChange={handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.btn}type="submit">Search</button>
        </form>
      </header>
      <Toaster />
    </>
  )
}

export default SearchBar
