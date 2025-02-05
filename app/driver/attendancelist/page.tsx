// "use client";
// import { useState } from "react";
// import Scanner from "./Scanner";
// // import "./driver.css";

// import { MdQrCodeScanner } from "react-icons/md";
// import withAuth from "@/hoc/withAuth";

// const DriverView = () => {
//   const [students, setStudents] = useState([
//     {
//       id: 1,
//       phone: "1122309488",
//       name: "John Doe",
//       status: "Joined",
//       driver: "John",
//       totalclass: "30 Days",
//       completedClasses: 20,
//       classType: "Days",
//     },
//     {
//       id: 2,
//       phone: "122348887",
//       name: "Jane Smith",
//       status: "Not Joined",
//       driver: "Adam",
//       totalclass: "45 Hours",
//       completedClasses: 10,
//       classType: "Hours",
//     },
//     {
//       id: 3,
//       phone: "122348887",
//       name: "Sujatha",
//       status: "Not Joined",
//       driver: "Adam",
//       totalclass: "50 Days",
//       completedClasses: 10,
//       classType: "Days",
//     },
//     {
//       id: 4,
//       phone: "122348887",
//       name: "Jane Smith",
//       status: "Not Joined",
//       driver: "John",
//       totalclass: "50 Hours",
//       completedClasses: 10,
//       classType: "Hours",
//     },
//   ]);

//   const [isScannerOpen, setIsScannerOpen] = useState(false);
//   const [filterDriver, setFilterDriver] = useState("all");

//   const handleScan = (data: string | null) => {
//     if (data) {
//       setStudents((prev) => [
//         ...prev,
//         {
//           id: prev.length + 1,
//           phone: "Unknown",
//           name: data,
//           status: "Joined",
//           driver: "New Driver",
//           totalclass: "0 Days",
//           completedClasses: 0,
//           classType: "Days",
//         },
//       ]);
//       setIsScannerOpen(false);
//     }
//   };

//   const handleStatusChange = (id: number, newStatus: string) => {
//     setStudents((prev) =>
//       prev.map((student) =>
//         student.id === id ? { ...student, status: newStatus } : student
//       )
//     );
//   };

//   // Filter the table data based on the selected driver
//   const filteredStudents =
//     filterDriver === "all"
//       ? students
//       : students.filter((student) => student.driver === filterDriver);

//   return (
   
//     <div className=" w-full  pb-8">
 
        
//     <div className="flex items-center space-x-4 py-5 lg:py-6">
//     <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
//     Attendance
//     </h2>
//     <div className="hidden h-full py-1 sm:flex">
//       <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
//     </div>
//     <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
//       <li className="flex items-center space-x-2">
//         <a className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent" href="#">Driver
//         </a>
//         <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </li>
//       <li>Attendance</li>
//     </ul>
//   </div>
//      {/* Driver Filter */}
//       <div className="flex justify-end mb-4 ">
//         <select
//           value={filterDriver}
//           onChange={(e) => setFilterDriver(e.target.value)}
//           className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 "
//         >
//           <option value="all">All Drivers</option>
//           {/* Dynamically populate driver options */}
//           {[...new Set(students.map((student) => student.driver))].map(
//             (driver) => (
//               <option key={driver} value={driver}>
//                 {driver}
//               </option>
//             )
//           )}
//         </select>
//       </div>
//  {/* Scanner Button */}
//     <div className="flex justify-between items-center p-4 space-x-4">
//          <button
//           onClick={() => setIsScannerOpen(true)}
//           style={{
//             display: "flex",
//             textAlign: "center",
//             justifyContent: "center",
//           }}
//         >
//           <MdQrCodeScanner style={{ fontSize: "30px", color: "#4f46e5" }} />{" "}
//           Scan here
//         </button>
//       </div>
//       {isScannerOpen && (
//         <Scanner onScan={handleScan} onClose={() => setIsScannerOpen(false)} />
//       )}
//   <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6" >
//   <div className="card px-4 pb-4 sm:px-5">
//   <div className="mt-5">
//         {/* <div className="is-scrollbar-hidden min-w-full overflow-x-auto"> */}
//         <div className="overflow-x-auto w-full">
//   <table className="is-hoverable w-full text-left">
//             <thead>
//               <tr>
//                 <th className="whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 SL No
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Phone
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Driver Name
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Student Name
//                 </th>
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Total Classes (Days/Hours)
//                 </th>            
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Completed Classes
//                 </th> 
//                 <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Pending Classes
//                 </th> 
//                 <th className="whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
//                 Status
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//             {filteredStudents.map((item, index) => {
//                const totalClasses = parseInt(item.totalclass);
//                            const pendingClasses = totalClasses - item.completedClasses;
//                            return (
//               <tr key={item.id} className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500">
             
//                 <td className="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5">
//                 {index + 1}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.phone}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.driver}
//                 </td>
//                 <td className="whitespace-nowrap px-4 py-3 sm:px-5">
//                 {item.name}
//                 </td>
//                 <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
//                 {`${totalClasses} ${item.classType}`}
//                 </td>
//                 <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
//                 {`${item.completedClasses} ${item.classType}`}
//                 </td>
//                 <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
//                 {`${pendingClasses} ${item.classType}`} 
//                 </td>
               
//                 <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
               
//                                    {item.status === "Not Joined" ? (
//                         <button
//                           className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
//                           onClick={() => handleStatusChange(item.id, "Joined")}
//                         >
//                           Drive
//                         </button>
//                       ) : (
//                         <button
//                           className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded"
//                           onClick={() =>
//                             handleStatusChange(item.id, "Not Joined")
//                           }
//                         >
//                           Stop
//                         </button>
//                       )}
//     </td>
//               </tr>
//    );
//   })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//   </div>
//   </div>
//   </div>
//   );
// };

// export default DriverView;
// // export default withAuth(DriverView, ['admin']);

// done without button

// "use client"
// import { useEffect, useState } from 'react';
// import { Html5QrcodeScanner } from 'html5-qrcode';

// const Scanner = () => {

//     const [scannedData, setScannedData] = useState<string[]>([]);


//     useEffect(() => {
//         const html5QrCode = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 }, false);

//         const onScanSuccess = (decodedText: string) => {
//             setScannedData((prevData) => [...prevData, decodedText]);
//         };

//         const onScanFailure = (errorMessage: string) => {
//             console.warn("QR Code scan failed: ", errorMessage);
//         };

//         html5QrCode.render(onScanSuccess, onScanFailure);

//         return () => {
//             html5QrCode.clear();
//         };
//     }, []);

//     return (
//         <div>
//             <h1>QR Code Scanner</h1>
//             <div id="qr-reader" style={{ width: '300px', height: '300px', border: '1px solid black' }}></div>
//             {scannedData.length > 0 && (
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Scanned Data</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {scannedData.map((data, index) => (
//                             <tr key={index}>
//                                 <td>{data}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default Scanner;


"use client"
import { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const Scanner = () => {
    const [scannedData, setScannedData] = useState<string[]>([]);
    const [isScanning, setIsScanning] = useState(false);

    useEffect(() => {
        if (!isScanning) return;

        const html5QrCode = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 }, false);

        const onScanSuccess = (decodedText: string) => {
            setScannedData((prevData) => [...prevData, decodedText]);
            setIsScanning(false); // Hide the scanner after a successful scan
        };

        const onScanFailure = (errorMessage: string) => {
            console.warn("QR Code scan failed: ", errorMessage);
        };

        html5QrCode.render(onScanSuccess, onScanFailure);

        return () => {
            html5QrCode.clear();
        };
    }, [isScanning]);

    return (
        <div>
            <h1>QR Code Scanner</h1>
            {!isScanning && (
                <button onClick={() => setIsScanning(true)}>Scan</button>
            )}
            {isScanning && (
                <div id="qr-reader" style={{ width: '300px', height: '300px', border: '1px solid black' }}></div>
            )}
            {scannedData.length > 0 && (
                <table>
                    <thead>
                        <tr>
                            <th>Scanned Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scannedData.map((data, index) => (
                            <tr key={index}>
                                <td>{data}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Scanner;