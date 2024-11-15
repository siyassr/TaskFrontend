import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function WithHover(WrappedComponent) {
  return (props) => { 
    const [isHover, setHover] = useState(null);
    const location = useLocation();

   

    const getIconColor = (iconRoute) => {
      if (location.pathname === iconRoute) {
        return 'teal';
      }
      return isHover === iconRoute ? 'teal' : 'gray'; 
    };


    return (
      <WrappedComponent
        {...props} 
        // setHover={setHover}
        getIconColor={getIconColor}
       
     
    
      />
    );
  };
}

export default WithHover;
