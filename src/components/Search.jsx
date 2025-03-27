const Search = ({ setSearchedValue, selectedUser }) => {
  return(
    <div>
      <label htmlFor="search">Search for a GitHub user:</label>
      <input
        placeholder="David Heinemeier..."
        type="text"
        name="search"
        className="border border-black rounded px-3"
        disabled={selectedUser !== null}
        onChange={(event) => {
          setSearchedValue(event.target.value);
        }}
      />
    </div>
  );
}

export default Search;
