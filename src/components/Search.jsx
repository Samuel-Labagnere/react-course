const Search = ({ setSearchedValue }) => {
  return(
    <div>
      <label for="search">Search for a GitHub user:</label>
      <input
        placeholder="David Heinemeier..."
        type="text"
        name="search"
        className="border border-black rounded px-3"
        onChange={(event) => {
          setSearchedValue(event.target.value);
        }}
      />
    </div>
  );
}

export default Search;
