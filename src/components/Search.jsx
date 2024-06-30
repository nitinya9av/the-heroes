import "../styles/Search.scss";

function Search() {

  const handleSubmit = (event) => {
    event.preventDefault();

    getCharacterData();
  };

  const handleChange = (event) => {
    setCharacterName(event.target.value);
  };

  const handleReset = () => {
    setCharacterName("");
    setCharacterData(null);
    setComicData(null);
  };
  
  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter character name"
          onChange={handleChange}
        />
        <div className="buttons">
          <button type="submit">Get Character Data</button>
          <button type="reset" className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
}

export default Search;