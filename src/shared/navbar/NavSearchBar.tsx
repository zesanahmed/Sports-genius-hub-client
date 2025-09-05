const NavSearchBar = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered input-sm w-40 lg:w-96 h-9 text-lg text-black"
      />
      <button className="btn btn-outline text-lg h-9 ml-1">SEARCH</button>
    </div>
  );
};

export default NavSearchBar;
