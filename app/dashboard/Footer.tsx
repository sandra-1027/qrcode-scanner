
// import React from 'react';
// import { BiSolidHeart } from "react-icons/bi";

// const Footer = () => {
//   return (
 
//       <footer className="footer mt-auto py-4 text-center hidden-prints bg-white dark:bg-navy-800">
//         <div className="container">
//           <span className="text-muted"> Powered By Neo MLM Software</span> 
//           <a href="javascript:void(0);" className="text-dark fw-semibold">2025 ©</a>.
//           Designed with  
//           <BiSolidHeart className="inline-block text-red-600 mx-1" /> |  
//           <a href="https://signaturesoftwarelab.com/">
//             <span className="fw-semibold text-primary text-decoration-underline">
//               Signature Software Lab
//             </span>
//           </a> 
//         </div>
//       </footer>
    
//   );
// }

// export default Footer;



import React from "react";
import { FaHeart } from "react-icons/fa"; // Importing FontAwesome heart icon

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-white text-center dark:bg-navy-750 print:hidden">
      <div className="container">
        <span className="text-muted">Powered By Neo MLM Software</span> 
        <span className="text-dark fw-semibold"> 2025 ©</span>.
        Designed with <FaHeart className="inline-block mx-1 text-red-600" /> |  
          <a
          href="https://signaturesoftwarelab.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="fw-semibold text-primary text-decoration-underline ml-2"
        >
         Signature Software Lab
        </a>
      </div>
    </footer>
  );
};

export default Footer;