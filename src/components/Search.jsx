function Search() {
  return (
    <>
      <form className="search">
        <input
          type="text"
          placeholder="enter character name"
        />
        <div className="buttons">
          <button type="submit">Get Character Data</button>
          <button type="reset" className="reset">
            Reset
          </button>
        </div>
      </form>
    </>
  );
}

export default Search;