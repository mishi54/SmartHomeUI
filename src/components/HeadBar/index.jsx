import { FaUserCircle } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useLogout } from '../../utils/logout';
import { useSelector } from 'react-redux';
const HeaderBar = ({ title }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const user = useSelector((state) => state.user.data);

  const userName = user?.name || "Loading...";
  const userImage = user?.image
    ? `${import.meta.env.VITE_ASSET_URL}${user.image}`
    : null;

  const logout = useLogout();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleSelect = (option) => {
    if (option === "Settings") {
      navigate("/setting");
    } else if (option === "Logout") {
      logout();
    }
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center px-4 py-2 bg-secondary border-t-4 border-primary fixed z-50 left-0 right-0 md:relative">
      <h1 className="text-lg font-extrabold pl-[2rem] md:pl-0">{title}</h1>

      <div ref={dropdownRef} className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-2 border px-3 py-1 rounded-md bg-[#0000001A] cursor-pointer"
        >
          {userImage ? (
            <img
              src={userImage}
              alt="User"
              className="w-6 h-6 rounded-full object-cover border border-gray-300"
            />
          ) : (
            <FaUserCircle className="text-2xl text-gray-600" />
          )}
          <div className="text-left">
            <span className="text-xs text-gray-500 block">{userName}</span>
          </div>
          <IoIosArrowDown className="text-sm text-gray-500" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-md border z-50">
            <ul className="text-sm text-gray-700">
              {["Settings", "Logout"].map((item) => (
                <li
                  key={item}
                  className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                  onClick={() => handleSelect(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderBar;
