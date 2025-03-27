const Layout = ({ children }) => {
  return(
    <div className="h-full w-full p-8 grid grid-cols-4 gap-3">
      <div className="col-1">
        {/* Tools */}
      </div>
      <main className="col-span-3">
        {children}
      </main>
    </div>
  );
};

export default Layout;
