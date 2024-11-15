// SlidBar.js
import React, { useState } from 'react';
import { FaTh, FaFileAlt, FaCheck, FaStopwatch } from 'react-icons/fa';
import { Link ,useLocation} from 'react-router-dom';
import withHover from '../../HOC/WithHover';

function Navbar() {

  const [hover,setHovered] =useState(null)

  const location = useLocation();

   

  const getIconColor = (iconRoute) => {
    if (location.pathname === iconRoute) {
      return 'teal';
    }
    return hover === iconRoute ? 'teal' : 'gray'; 
  };
  return (
    <div className="p-2 flex flex-col items-center">
      <ul>
        <Link to="/task">
          <FaTh
            size={24}
            color={getIconColor('/task')}
            style={{ margin: '20px 0', cursor: 'pointer' }}
            onMouseEnter={() => setHovered('/task')}
            onMouseLeave={() => setHovered(null)}
          />
        </Link>
        
        <Link to="/task/pending">
          <FaFileAlt
            size={24}
            color={getIconColor('/task/pending')}
            style={{ margin: '20px 0', cursor: 'pointer' }}
            onMouseEnter={() => setHovered('/task/pending')}
            onMouseLeave={() => setHovered(null)}
          />
        </Link>
        
        <Link to="/task/completed">
          <FaCheck
            size={24}
            color={getIconColor('/task/completed')}
            style={{ margin: '20px 0', cursor: 'pointer' }}
            onMouseEnter={() => setHovered('/task/completed')}
            onMouseLeave={() => setHovered(null)}
          />
        </Link>
        
        <Link to="/task/progress">
          <FaStopwatch
            size={24}
            color={getIconColor('/task/progress')}
            style={{ margin: '20px 0', cursor: 'pointer' }}
            onMouseEnter={() => setHovered('/task/progress')}
            onMouseLeave={() => setHovered(null)}
          />
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
