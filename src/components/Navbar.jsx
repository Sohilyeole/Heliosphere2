// import React from 'react';

// function Navbar() {
//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between">
//           <div className="flex space-x-4">
//             <div>
//               <a href="#" className="flex items-center py-5 px-2 text-gray-700">
//                 <span className="font-bold text-xl text-blue-500">Heatwave Predictor</span>
//               </a>
//             </div>
//             <div className="hidden md:flex items-center space-x-1">
//               <a href="#" className="py-5 px-3 text-gray-700 hover:text-blue-500">Home</a>
//               <a href="#" className="py-5 px-3 text-gray-700 hover:text-blue-500">About</a>
//               <a href="#" className="py-5 px-3 text-gray-700 hover:text-blue-500">Contact</a>
//             </div>
//           </div>
//           <div className="hidden md:flex items-center space-x-1">
//             <a href="#" className="py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-400">Login</a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState } from 'react';
// import { MenuIcon, XIcon } from '@heroicons/react/outline';



// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-black shadow-lg">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between items-center py-5">
//           <div className="flex space-x-4">
//             <div>
//               <a href="#" className="flex items-center text-white">
//                 <span className="font-bold text-xl">Heatwave Predictor</span>
//               </a>
//             </div>
//             <div className="hidden md:flex items-center space-x-1">
//               <a href="#" className="text-gray-300 hover:text-white px-3">Home</a>
//               <a href="#" className="text-gray-300 hover:text-white px-3" onClick={navigate("/about")}>About</a>
//               <a href="#" className="text-gray-300 hover:text-white px-3">Contact</a>
//             </div>
//           </div>
//           <div className="hidden md:flex items-center space-x-1">
//             <a href="#" className="py-2 px-4 bg-white text-black rounded hover:bg-gray-200">Login</a>
//           </div>
//           <div className="md:hidden flex items-center">
//             <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
//               {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
//         <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-800">Home</a>
//         {/* <a href="/about" className="block py-2 px-4 text-gray-300 hover:bg-gray-800">About</a> */}
//         <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-800">Contact</a>
//         <a href="#" className="block py-2 px-4 text-gray-300 hover:bg-gray-800">Login</a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import { MenuIcon, XIcon } from '@heroicons/react/outline';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-black shadow-lg">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between items-center py-5">
//           <div className="flex space-x-4">
//             <div>
//               <Link to="/" className="flex items-center text-white"> {/* Use Link instead of <a> */}
//                 <span className="font-bold text-xl">Heatwave Predictor</span>
//               </Link>
//             </div>
//             <div className="hidden md:flex items-center space-x-1">
//               <Link to="/" className="text-gray-300 hover:text-white px-3">Home</Link> {/* Use Link */}
//               <Link to="/about" className="text-gray-300 hover:text-white px-3">About Us</Link> {/* Use Link */}
//               <Link to="/contact" className="text-gray-300 hover:text-white px-3">Contact</Link> {/* Use Link */}
//             </div>
//           </div>
//           <div className="hidden md:flex items-center space-x-1">
//             <Link to="/login" className="py-2 px-4 bg-white text-black rounded hover:bg-gray-200">Login</Link> {/* Use Link */}
//           </div>
//           <div className="md:hidden flex items-center">
//             <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
//               {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
//         <Link to="/" className="block py-2 px-4 text-gray-300 hover:bg-gray-800">Home</Link> {/* Use Link */}
//         <Link to="/about" className="block py-2 px-4 text-gray-300 hover:bg-gray-800">About Us</Link> {/* Use Link */}
//         <Link to="/contact" className="block py-2 px-4 text-gray-300 hover:bg-gray-800">Contact</Link> {/* Use Link */}
//         <Link to="/login" className="block py-2 px-4 text-gray-300 hover:bg-gray-800">Login</Link> {/* Use Link */}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { MenuIcon, XIcon, SearchIcon } from '@heroicons/react/outline';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleSearch = () => {
//     setIsSearchOpen(!isSearchOpen);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     // Handle the search logic here, e.g., redirect to a search results page
//     console.log('Search Query:', searchQuery);
//   };

//   return (
//     <nav className="bg-black shadow-lg">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex justify-between items-center py-5">
//           <div className="flex space-x-4 items-center">
//             <div>
//               <Link to="/" className="flex items-center text-white">
//                 <span className="font-bold text-xl">Heatwave Predictor</span>
//               </Link>
//             </div>
//             <div className="hidden md:flex items-center space-x-1">
//               <Link to="/" className="text-gray-300 hover:text-white px-3">Home</Link>
//               <Link to="/about" className="text-gray-300 hover:text-white px-3">About Us</Link>
//               <Link to="/contact" className="text-gray-300 hover:text-white px-3">Contact</Link>
//             </div>
//           </div>
//           <div className="hidden md:flex items-center space-x-4">
//             <form onSubmit={handleSearchSubmit} className={`flex items-center space-x-2 transition-all duration-300 ease-in-out ${isSearchOpen ? 'w-full' : 'w-0 overflow-hidden'}`}>
//               <input
//                 type="text"
//                 className="py-1 px-3 bg-gray-800 text-white rounded focus:outline-none"
//                 placeholder="Search..."
//                 value={searchQuery}
//                 onChange={handleSearchChange}
//               />
//               <button type="submit" className="text-white">
//                 <SearchIcon className="w-6 h-6" />
//               </button>
//             </form>
//             <button onClick={toggleSearch} className="text-gray-300 hover:text-white">
//               <SearchIcon className="w-6 h-6" />
//             </button>
//             <Link to="/login" className="py-2 px-4 bg-white text-black rounded hover:bg-gray-200">Login</Link>
//           </div>
//           <div className="md:hidden flex items-center">
//             <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
//               {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
//         <Link to="/" className="block py-2 px-4 text-gray-300 hover:bg-gray-800">Home</Link>
//         <Link to="/about" className="block py-2 px-4 text-gray-300 hover:bg-gray-800">About Us</Link>
//         <Link to="/contact" className="block py-2 px-4 text-gray-300 hover:bg-gray-800">Contact</Link>
//         <Link to="/login" className="block py-2 px-4 text-gray-300 hover:bg-gray-800">Login</Link>
//         <form onSubmit={handleSearchSubmit} className="block py-2 px-4">
//           <div className="flex items-center space-x-2">
//             <input
//               type="text"
//               className="py-1 px-3 bg-gray-800 text-white rounded focus:outline-none w-full"
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//             />
//             <button type="submit" className="text-gray-300 hover:text-white">
//               <SearchIcon className="w-6 h-6" />
//             </button>
//           </div>
//         </form>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

function Navbar({ onSearch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery); // Pass the search query to the parent component
  };

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          <div className="flex space-x-4 items-center">
            <div>
              <Link to="/" className="flex items-center text-white">
                {/* <span className="font-bold text-xl">Heatwave Predictor</span> */}
                <img src="src\assets\Screenshot 2024-08-23 083219.png" width={40} alt="" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" className="text-gray-300 hover:text-white font-bold px-3 ">Home</Link>
              <Link to="/dashboard" className="text-gray-300 hover:text-white   font-bold px-3">Dashboard</Link>
              <Link to="/about" className="text-gray-300 hover:text-white font-bold  px-3">About Us</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white font-bold  px-3">Contact</Link>
             
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit} className="flex items-center space-x-2">
              <input
                type="text"
                className="py-1 px-3 bg-gray-800 text-white rounded focus:outline-none"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="submit" className="text-white bg-gray-700 py-1 px-3 rounded hover:bg-gray-600">
                Search
              </button>
            </form>
            <Link to="/login" className="py-2 px-4 bg-white text-black rounded hover:bg-gray-200">Login</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white">
              {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link to="/" className="block py-2 px-4 text-gray-300 hover:bg-gray-800">Home</Link>
        <Link to="/about" className="block py-2 px-4 text-gray-300 hover:bg-gray-800">About Us</Link>
        <Link to="/contact" className="block py-2 px-4 text-gray-300 hover:bg-gray-800">Contact</Link>
        <Link to="/login" className="block py-2 px-4 text-gray-300 hover:bg-gray-800">Login</Link>
        <form onSubmit={handleSearchSubmit} className="block py-2 px-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              className="py-1 px-3 bg-gray-800 text-white rounded focus:outline-none w-full"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit" className="text-gray-300 hover:text-white">
              Search
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
