import { FaShoppingCart } from "react-icons/fa";

const NavSearch = ({ isScrolled }: { isScrolled: boolean }) => {
  if (isScrolled) return null;
  return (
    <div className="flex items-center space-x-12">
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered input-sm w-40 lg:w-96 h-9 text-lg text-black"
        />
        <button className="btn btn-outline text-lg h-9 ml-1">SEARCH</button>
      </div>
      <button className="btn btn-sm btn-outline h-9 w-9">
        <FaShoppingCart />
      </button>
    </div>
  );
};

export default NavSearch;
