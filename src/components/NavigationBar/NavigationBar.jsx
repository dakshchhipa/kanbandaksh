// import React, { useState, useEffect, useRef } from 'react';
// import './NavBar.css';

// const NavBar = ({ setFilterType, setSortType, filterType, sortType}) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [dropdownOpenStatus, setDropdownOpenStatus] = useState(false);
//   const [dropdownOpenPriority, setDropdownOpenPriority] = useState(false);
//   const [selectedGroup, setSelectedGroup] = useState(filterType);
//   const [selectedOrder, setSelectedOrder] = useState(sortType);
//   const dropdownRef = useRef(null);
//   const toggleDropdown = () => {
//     if(setDropdownOpen){
//       setDropdownOpen(false)
//     }
//     setDropdownOpen(true);
//   };

//   const toggleSubDropdownStatus = () => {
//     setDropdownOpenPriority(false);
//     setDropdownOpenStatus(!dropdownOpenStatus);
//   };

//   const toggleSubDropdownPriority = () => {
//     setDropdownOpenStatus(false);
//     setDropdownOpenPriority(!dropdownOpenPriority);
//   };

//   const handleGroupChange = (option) => {
//     setDropdownOpenPriority(false);
//     setSelectedGroup(option);
//     setFilterType(option.toLowerCase());
//     setDropdownOpenStatus(false);
//     setDropdownOpen(false);
//   };

//   const handleOrderChange = (option) => {
//     setDropdownOpenStatus(false);
//     setSelectedOrder(option);
//     setSortType(option.toLowerCase());
//     setDropdownOpenPriority(false);
//     setDropdownOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(!setDropdownOpen);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef]);

//   return (

//       <nav className="navbar">
//         <button className="nav-button" onClick={toggleDropdown}>
//           <img src={`${process.env.PUBLIC_URL}/assets/icons_FEtask/Display.svg`} alt="Display Icon" className="filter-icon" />
//           Display
//           <span className="arrow-down">&#9662;</span>
//         </button>

//         {dropdownOpen && (
//           <div className="dropdown" ref={dropdownRef} style={{ position: 'absolute', left:'20px',top:"80px"}}>
//             <div className="dropdown-group">
//               <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//                 <h4 style={{color:'#949496'}}>Grouping</h4>
//                 <button className="nav-button" onClick={toggleSubDropdownStatus}>
//                   {selectedGroup}
//                   <span className="arrow-down">&#9662;</span>
//                 </button>
//                 {dropdownOpenStatus && (
//                   <div className="sub-dropdown" style={{position: "absolute",
//                     top:"25px",
//                     left: "313px"}}>
//                     <button onClick={() => handleGroupChange('Status')} className="dropdown-button">Status</button>
//                     <button onClick={() => handleGroupChange('User')} className="dropdown-button">User</button>
//                     <button onClick={() => handleGroupChange('Priority')} className="dropdown-button">Priority</button>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="dropdown-sort">
//               <div style={{ display: "flex", alignItems: "center" , justifyContent: "space-between"}}>
//                 <h4 style={{color:'#949496'}}>Ordering</h4>
//                 <button className="nav-button" onClick={toggleSubDropdownPriority}>
//                   {selectedOrder}
//                   <span className="arrow-down">&#9662;</span>
//                 </button>
//                 {dropdownOpenPriority && (
//                   <div className="sub-dropdown" style={{position: "absolute",
//                     top:"87px",
//                     left: "313px"}}>
//                     <button onClick={() => handleOrderChange('Priority')} className="dropdown-button">Priority</button>
//                     <button onClick={() => handleOrderChange('Title')} className="dropdown-button">Title</button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>

//   );
// };

// export default NavBar;

import React, { useState, useEffect, useRef } from "react";
import "./NavBar.css";

const NavBar = ({ setFilterType, setSortType, filterType, sortType }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [isPriorityDropdownOpen, setIsPriorityDropdownOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState(filterType);
  const [activeOrder, setActiveOrder] = useState(sortType);
  const dropdownWrapperRef = useRef(null);

  const toggleMainDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
    setIsStatusDropdownOpen(false);
    setIsPriorityDropdownOpen(false);
  };

  const handleStatusDropdownToggle = () => {
    setIsPriorityDropdownOpen(false);
    setIsStatusDropdownOpen((prevState) => !prevState);
  };

  const handlePriorityDropdownToggle = () => {
    setIsStatusDropdownOpen(false);
    setIsPriorityDropdownOpen((prevState) => !prevState);
  };

  const updateGroup = (option) => {
    setActiveGroup(option);
    setFilterType(option.toLowerCase());
    setIsDropdownOpen(false);
    setIsStatusDropdownOpen(false);
  };

  const updateOrder = (option) => {
    setActiveOrder(option);
    setSortType(option.toLowerCase());
    setIsDropdownOpen(false);
    setIsPriorityDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutsideDropdown = (event) => {
      if (
        dropdownWrapperRef.current &&
        !dropdownWrapperRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
        setIsStatusDropdownOpen(false);
        setIsPriorityDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutsideDropdown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
    };
  }, []);

  return (
    <nav className="navbar">
      <button className="nav-button" onClick={toggleMainDropdown}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons_FEtask/Display.svg`}
          alt="Display Icon"
          className="filter-icon"
        />
        Display
        <span className="arrow-down">&#9662;</span>
      </button>

      {isDropdownOpen && (
        <div
          className="dropdown"
          ref={dropdownWrapperRef}
          style={{ position: "absolute", left: "20px", top: "80px" }}
        >
          <div className="dropdown-group">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4 style={{ color: "#949496" }}>Grouping</h4>
              <button
                className="nav-button"
                onClick={handleStatusDropdownToggle}
              >
                {activeGroup}
                <span className="arrow-down">&#9662;</span>
              </button>
              {isStatusDropdownOpen && (
                <div
                  className="sub-dropdown"
                  style={{ position: "absolute", top: "25px", left: "313px" }}
                >
                  <button
                    onClick={() => updateGroup("Status")}
                    className="dropdown-button"
                  >
                    Status
                  </button>
                  <button
                    onClick={() => updateGroup("User")}
                    className="dropdown-button"
                  >
                    User
                  </button>
                  <button
                    onClick={() => updateGroup("Priority")}
                    className="dropdown-button"
                  >
                    Priority
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="dropdown-sort">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h4 style={{ color: "#949496" }}>Ordering</h4>
              <button
                className="nav-button"
                onClick={handlePriorityDropdownToggle}
              >
                {activeOrder}
                <span className="arrow-down">&#9662;</span>
              </button>
              {isPriorityDropdownOpen && (
                <div
                  className="sub-dropdown"
                  style={{ position: "absolute", top: "87px", left: "313px" }}
                >
                  <button
                    onClick={() => updateOrder("Priority")}
                    className="dropdown-button"
                  >
                    Priority
                  </button>
                  <button
                    onClick={() => updateOrder("Title")}
                    className="dropdown-button"
                  >
                    Title
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
