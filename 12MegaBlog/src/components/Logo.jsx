// import React from 'react'


// function Logo({ width = '100px' }) {
//   return (
//     <div>
//       <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2F99designs.com%2Finspiration%2Flogos%2Fstory&psig=AOvVaw0pJHkj_0t5FMT6sq5xJUJw&ust=1727447114066000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPjjg6vo4IgDFQAAAAAdAAAAABAE" alt="LOGO" />
//     </div>
//   )
// }

// export default Logo

import React from 'react';
import logo from '../assets/logo.jpeg'; // Adjust the path if necessary

function Logo({ width = '300px' ,hight="500px" }) {
  return (
    <div>
      <img 
        src={logo} 
        alt="Logo" 
        width={width} 
        style={{ objectFit: 'contain' }} 
      />
    </div>
  );
}

export default Logo;

