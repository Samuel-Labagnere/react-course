import Search from "./Search";

const Layout = ({ setSearchedValue, selectedUser, results, children }) => {
  const resultsText = `${results} result${results > 1 ? 's' : ''}`
  const displayResults = results ? <p className="mt-3">{resultsText}</p> : null;

  return(
    <div className="h-full w-full p-8 grid grid-cols-4 gap-3">
      <div className="col-1">
        <Search {...{setSearchedValue, selectedUser}} />
        {displayResults}
      </div>
      <main className="col-span-3">
        {children}
      </main>
    </div>
  );
};

export default Layout;
