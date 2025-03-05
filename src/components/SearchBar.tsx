import { useState } from 'react'

function SearchBar({ setSearchValue }: { setSearchValue: (value: string) => void }) {
  const [inputValue, setInputValue] = useState('')
  return (
    <div
    className='search_bar_container'
    style={{
      position: "relative",
      marginTop: "2rem",
      // width: "50%"
    }}
    >
      <input
      data-testid="search-input"
        placeholder="Search for a city"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        style={{
          height: "2.5rem",
          width: "100%",
          borderRadius: "0.8rem",
          boxSizing: "border-box",
          padding: "0.1rem 0.8rem",
          fontSize: "1rem",
        }}
      />
      <div
        data-testid="search-button"
        onClick={() => inputValue && setSearchValue(inputValue)}
        style={{
          position: "absolute",
          top: "0.3rem",
          bottom: "0.3rem",
          right: "0.3rem",
          display: "flex",
          padding: "0 0.5rem",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "0.5rem",
          backgroundColor: "rgb(91, 72, 218)",
          color: "white",
        }}
      >
        Search
      </div>
    </div>
  )
}

export default SearchBar
