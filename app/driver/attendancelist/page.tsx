


// "use client"
// import { useEffect, useState } from 'react';
// import { Html5QrcodeScanner } from 'html5-qrcode';

// const Scanner = () => {
//     const [scannedData, setScannedData] = useState<string[]>([]);
//     const [isScanning, setIsScanning] = useState(false);

//     useEffect(() => {
//         if (!isScanning) return;

//         const html5QrCode = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 }, false);

//         const onScanSuccess = (decodedText: string) => {
//             setScannedData((prevData) => [...prevData, decodedText]);
//             setIsScanning(false); // Hide the scanner after a successful scan
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
//             <h1>QR Code Scanner</h1>
//             {!isScanning && (
//                 <button onClick={() => setIsScanning(true)}>Scan</button>
//             )}
//             {isScanning && (
//                 <div id="qr-reader" style={{ width: '300px', height: '300px', border: '1px solid black' }}></div>
//             )}
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
import React, { useState } from "react";
import Scanner from "./Scanner";

const QRScannerPage: React.FC = () => {
  const [scannedData, setScannedData] = useState<null | {
    name: string;
    mobileNo: string;
    joiningDate: string;
    completedClasses: number;
  }>(null);
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  return (
    <div className="flex flex-col items-center p-4">
      <button
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setIsScannerOpen(true)}
      >
        Open Scanner
      </button>

      {isScannerOpen && (
        // <Scanner
        //   onScan={(data) => {
        //     setScannedData(data);
        //     setIsScannerOpen(false);
        //   }}
        //   onClose={() => setIsScannerOpen(false)}
        // />
        <Scanner
  onScan={(data) => {
    try {
      const parsedData = JSON.parse(data); // Parse the JSON string
      setScannedData(parsedData); // Now it's a valid object
      setIsScannerOpen(false);
    } catch (error) {
      console.error("Error parsing QR code data:", error);
      alert("Invalid QR Code. Please scan a valid QR code.");
    }
  }}
  onClose={() => setIsScannerOpen(false)}
/>

      )}

      {scannedData && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-bold">Student Details</h2>
          <p><strong>Name:</strong> {scannedData.name}</p>
          <p><strong>Mobile:</strong> {scannedData.mobileNo}</p>
          <p><strong>Joining Date:</strong> {scannedData.joiningDate}</p>
          <p><strong>Completed Classes:</strong> {scannedData.completedClasses}</p>
        </div>
      )}
    </div>
  );
};

export default QRScannerPage;
