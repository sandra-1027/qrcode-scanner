
// "use client"
// import { useEffect, useState } from 'react';
// import { Html5QrcodeScanner } from 'html5-qrcode';
// import { IoQrCodeSharp } from 'react-icons/io5';

// const Scanner = () => {
//     const [scannedData, setScannedData] = useState<{ name: string; mobile: string; joiningDate: string; completedClasses: number; }[]>([]);
//     const [isScanning, setIsScanning] = useState(false);

//     useEffect(() => {
//         if (!isScanning) return;

//         const html5QrCode = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 }, false);

//         const onScanSuccess = (decodedText: string) => {
//             try {
//                 const parsedData = JSON.parse(decodedText);
//                 setScannedData((prevData) => [...prevData, parsedData]);
//                 setIsScanning(false); // Hide scanner after scan
//             } catch (error) {
//                 console.error("Invalid QR Code format:", error);
//             }
//         };

//         const onScanFailure = (errorMessage: string) => {
//             console.warn("QR Code scan failed: ", errorMessage);
//         };

//         html5QrCode.render(onScanSuccess, onScanFailure);

//         return () => {
//             html5QrCode.clear();
//         };
//     }, [isScanning]);

//     return (
//         <div>
//           <div className='flex'>
           
//             {!isScanning && (
//                 <button onClick={() => setIsScanning(true)}><IoQrCodeSharp className='w-10 h-10'/></button>
//             )}
//             {isScanning && (
//                 <div id="qr-reader" style={{ width: '300px', height: '300px', border: '1px solid black' }}>
                  
//                 </div>
//             )}
//              <h1 className='mt-2 ml-4'>Scanner Here</h1>
//             </div>
//             {/* {scannedData.length > 0 && (
//                 <table border={1} style={{ marginTop: "20px", borderCollapse: "collapse" }}>
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Mobile</th>
//                             <th>Joining Date</th>
//                             <th>Completed Classes</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {scannedData.map((data, index) => (
//                             <tr key={index}>
//                                 <td>{data.name}</td>
//                                 <td>{data.mobile}</td>
//                                 <td>{data.joiningDate}</td>
//                                 <td>{data.completedClasses}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )} */}
//             <div className="overflow-x-auto w-full mt-4">
//              <table className="is-hoverable w-full text-left">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 SL No
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Name
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Mobile
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Join Date
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 completed class
//                 </th>            
              
//               </tr>
//             </thead>
//             <tbody>
           
//             {scannedData.map((item, index) => (
//               <tr key={index} className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
//                 <td className="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5">
//                 {index+1}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.name}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.mobile}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.joiningDate}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.completedClasses}
//                 </td>
              
//               </tr>
//             ))}
              
//             </tbody>
//           </table>
//           </div>
//         </div>
//     );
// };

// export default Scanner;


"use client";
import { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { IoQrCodeSharp } from "react-icons/io5";

const Scanner = () => {
  const [scannedData, setScannedData] = useState<
    { name: string; mobile: string; joiningDate: string; completedClasses: number }[]
  >([]);
  const [isScanning, setIsScanning] = useState(false);
  const [scannerInstance, setScannerInstance] = useState<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    if (!isScanning) return;

    const html5QrCode = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 }, false);
    setScannerInstance(html5QrCode);

    const onScanSuccess = (decodedText: string) => {
      try {
        const parsedData = JSON.parse(decodedText);
        setScannedData((prevData) => [...prevData, parsedData]);
        setIsScanning(false); // Hide scanner after scan
      } catch (error) {
        console.error("Invalid QR Code format:", error);
      }
    };

    const onScanFailure = (errorMessage: string) => {
      console.warn("QR Code scan failed: ", errorMessage);
    };

    html5QrCode.render(onScanSuccess, onScanFailure);

    return () => {
      html5QrCode.clear();
    };
  }, [isScanning]);

  const stopScanning = () => {
    if (scannerInstance) {
      scannerInstance.clear();
    }
    setIsScanning(false); // Hide the scanner when the button is clicked
  };

  return (
    // <div className="max-w-lg mx-auto mt-10 p-5 ">
     
<div>
      <div className="flex">
        {!isScanning && (
          <button
            onClick={() => setIsScanning(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            <IoQrCodeSharp className="w-6 h-6" />
            Start Scanner
          </button>
        )}

        {isScanning && (
          <div className="flex flex-col items-center border border-gray-300 rounded-lg shadow-md p-5">
             <h1 className="text-xl font-semibold text-center mb-4">Scan QR Code</h1>
            <div id="qr-reader" className="w-64 h-64 border border-black my-3"></div>
            <button
              onClick={stopScanning}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        )}
      </div>

      {/* <div className="overflow-x-auto w-full mt-4">
        <table className="is-hoverable w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-3 py-2">SL No</th>
              <th className="border border-gray-300 px-3 py-2">Name</th>
              <th className="border border-gray-300 px-3 py-2">Mobile</th>
              <th className="border border-gray-300 px-3 py-2">Join Date</th>
              <th className="border border-gray-300 px-3 py-2">Completed Classes</th>
            </tr>
          </thead>
          <tbody>
            {scannedData.map((item, index) => (
              <tr key={index} className="border border-gray-300">
                <td className="px-3 py-2 border border-gray-300">{index + 1}</td>
                <td className="px-3 py-2 border border-gray-300">{item.name}</td>
                <td className="px-3 py-2 border border-gray-300">{item.mobile}</td>
                <td className="px-3 py-2 border border-gray-300">{item.joiningDate}</td>
                <td className="px-3 py-2 border border-gray-300">{item.completedClasses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    <div className="mt-5">
          <div className="overflow-x-auto w-full">
    <table className="is-hoverable w-full text-left">
              <thead>
                <tr>
                  <th className="whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  SL No
                  </th>
                  <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Date
                  </th>
                  <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Driver
                  </th>
                  <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Check-In Time
                  </th>
                  <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Check-Out Time
                  </th>
                  <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Completed Classes
                  </th>
                 
                  <th className="whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                  Pending Classes
                  </th> 
            
                </tr>
              </thead>
              <tbody>
              {scannedData.map((item, index) => (
                <tr key={index} className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
                  <td className="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5">
                  {index + 1}
                  </td>
                  
                  <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  {item.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  {item.mobile}
                  </td>
                  <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                  {item.joiningDate}
                  </td>
                  <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                  {item.completedClasses}
                  </td>
                 
                </tr>
    
                 ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
};

export default Scanner;



// "use client"
// import { useEffect, useState } from 'react';
// import { Html5QrcodeScanner } from 'html5-qrcode';
// import { IoQrCodeSharp } from 'react-icons/io5';

// const Scanner = () => {
//     const [scannedData, setScannedData] = useState<{ name: string; mobile: string; joiningDate: string; completedClasses: number; }[]>([]);
//     const [isScanning, setIsScanning] = useState(false);

//     useEffect(() => {
//         if (!isScanning) return;

//         const html5QrCode = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 }, false);

//         const onScanSuccess = (decodedText: string) => {
//             try {
//                 const parsedData = JSON.parse(decodedText);
//                 setScannedData((prevData) => [...prevData, parsedData]);
//                 setIsScanning(false); // Hide scanner after scan
//             } catch (error) {
//                 console.error("Invalid QR Code format:", error);
//             }
//         };

//         const onScanFailure = (errorMessage: string) => {
//             console.warn("QR Code scan failed: ", errorMessage);
//         };

//         html5QrCode.render(onScanSuccess, onScanFailure);

//         return () => {
//             html5QrCode.clear();
//         };
//     }, [isScanning]);

//     return (
//         <div>
//           <div className='flex'>
           
//             {!isScanning && (
//                 <button onClick={() => setIsScanning(true)}><IoQrCodeSharp className='w-10 h-10'/></button>
//             )}
//             {isScanning && (
//                 <div id="qr-reader" style={{ width: '300px', height: '300px', border: '1px solid black' }}>
                  
//                 </div>
//             )}
//              <h1 className='mt-2 ml-4'>Scanner Here</h1>
//             </div>
          
//             <div className="overflow-x-auto w-full mt-4">
//              <table className="is-hoverable w-full text-left">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 SL No
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Name
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Mobile
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Join Date
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 completed class
//                 </th>            
              
//               </tr>
//             </thead>
//             <tbody>
           
//             {scannedData.map((item, index) => (
//               <tr key={index} className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
//                 <td className="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5">
//                 {index+1}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.name}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.mobile}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.joiningDate}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.completedClasses}
//                 </td>
              
//               </tr>
//             ))}
              
//             </tbody>
//           </table>
//           </div>
//         </div>
//     );
// };

// export default Scanner;