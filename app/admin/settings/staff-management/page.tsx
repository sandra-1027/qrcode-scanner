
"use client";
import withAuth from "@/hoc/withAuth";
import React, { useEffect, useState } from "react";
import Add from "./add";
import { useAuth } from "@/app/context/AuthContext";
import { FaRegCheckCircle } from "react-icons/fa";
import Edit from "./edit";
type Staff = {
  id?: string;
  user_id:string;
  status: string;
  staff_name: string;
  first_name:string;
  mobile: string;
  address: string;
  email: string;
  branch_id: string;
  branch_name:string;
  date_of_joining:string;
  name:string;
 place:string;
 password:string;
};
const page = () => {

  const { state } = useAuth();



  const [showmodal, setShowmodal] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  const [staffData, setStaffData] = useState<Staff[]>([]);
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null); 
  const [staffselected, setStaffselected] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Staff[]>([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [branches, setBranches] = useState<{ id: string; branch_name: string }[]>([]);
  const [selectedBranch, setSelectedBranch] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');

  const togglemodal = (mode: 'add' | 'edit', staff: Staff | null = null) => {
    setModalMode(mode); 
    setSelectedStaff(staff);  
    setShowmodal((prev) => !prev);  
  };
 

  const fetchStaffData = async () => {
    try {

      const response = await fetch('/api/admin/settings/staff_details', {
        method: 'POST',
        headers: {
           'authorizations': state?.accessToken ?? '', 
          'api_key': '10f052463f485938d04ac7300de7ec2b', 
        },
        body: JSON.stringify({  }),
      });
      if (!response.ok) {
        const errorData = await response.json();
     
        throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || 'Unknown error'}`);
      }
      
      const data = await response.json();
     
      if (data.success) {
        setStaffData(data.data || []);
        setFilteredData(data.data || []);
      } else {
        // console.error("API error:", data.msg || "Unknown error");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  
  useEffect(() => {
    fetchStaffData();
  }, [state]);
  

  const fetchBranchData = async () => {
  

    try {

      const response = await fetch('/api/admin/settings/branch_details', {
        method: 'POST',
        headers: {
          'authorizations': state?.accessToken ?? '',
          'api_key': '10f052463f485938d04ac7300de7ec2b',  
        },
        body: JSON.stringify({  }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error('API error:', errorData);
        throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || 'Unknown error'}`);
      }
      
      const data = await response.json();
     
      if (data.success) {
        setBranches(data.data || []);
       
      } else {
        // console.error("API error:", data.msg || "Unknown error");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  
  useEffect(() => {
    fetchBranchData();
  }, [state]);
  
  const handleEdit = (staff: Staff) => {
    setSelectedStaff(staff); 
    setShowmodal(true); 
  };

  const applyFilters = () => {
    let newFilteredData = staffData;
  
    // Apply form filters
    if (staffselected) {
      newFilteredData = newFilteredData.filter(
        (item) => item.first_name === staffselected
      );
    }
    if (selectedBranch) {
      newFilteredData = newFilteredData.filter(
        (item) => item.branch_name === selectedBranch
      );
    }
    if (selectedStatus) {
      newFilteredData = newFilteredData.filter(
        (item) => item.status === selectedStatus
      );
    }
  
    return newFilteredData; 
  };
  


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  
    const searchFilteredData = staffData.filter(
      (item) =>
        item.status.toLowerCase().includes(value.toLowerCase()) ||
        item.first_name.toLowerCase().includes(value.toLowerCase()) ||
        item.address.toLowerCase().includes(value.toLowerCase())
    );
  
    setFilteredData(searchFilteredData); 
  };
  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    const newFilteredData = applyFilters();
    setFilteredData(newFilteredData); 
  };
  
  const handleReset = () => {
    setSearchTerm("");
    setStaffselected("");
    setSelectedBranch("");
    setSelectedStatus("");
    setFilteredData(staffData); 
  };

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );
  const totalEntries = filteredData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);


  const updateAccountStatus = async (user_id: string, status: string) => {
    try {
      const response = await fetch('/api/admin/settings/inactivate_staff', {
        method: 'POST',
        headers: {
          'authorizations': state?.accessToken ?? '', 
          'api_key': '10f052463f485938d04ac7300de7ec2b',
        },
        body: JSON.stringify({
          id: user_id,
          status: status,
          table: "daily_accounts"
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || 'Unknown error'}`);
      }
  
      const data = await response.json();
      console.log("API Response:", data); 
  
      if (data.success) {
       
        fetchStaffData();
      } else {
        console.error("API error:", data.msg || "Unknown error");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };
  return (
    <div className=" w-full  pb-8">
      <div className="flex items-center space-x-4 py-5 lg:py-6">
        <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
          Staff Management
        </h2>
        <div className="hidden h-full py-1 sm:flex">
          <div className="h-full w-px bg-slate-300 dark:bg-navy-600" />
        </div>
        <ul className="hidden flex-wrap items-center space-x-2 sm:flex">
          <li className="flex items-center space-x-2">
            <a
              className="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
              href="#"
            >
              Home
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </li>
          <li>Master</li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <li>Staff</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6 mb-4">
        <div className="card px-4 pb-4 sm:px-5 pt-4">
          <div className="p-4 rounded-lg bg-slate-100 dark:bg-navy-800">


<form>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label
            htmlFor="staffName"
            className="block text-sm font-medium text-slate-700 dark:text-navy-100"
          >
            Staff Name
          </label>
          <select
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
            value={staffselected}
            onChange={(e) => setStaffselected(e.target.value)} >
              
            <option>Select a Staff</option>
            {staffData.map((item) => (
              <option key={item.id} value={item.first_name}>
                {item.first_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="branchName"
            className="block text-sm font-medium text-slate-700 dark:text-navy-100"
          >
            Branch Name
          </label>
          <select
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
          >
            <option value="">Select a Branch</option>
            {branches.map((branch) => (
              <option key={branch.id} value={branch.branch_name}>
                {branch.branch_name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-slate-700 dark:text-navy-100"
          >
            Status
          </label>
          <select
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>
      <div className="mt-4 flex space-x-4">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={handleFilterSubmit}
        >
          <i
            className="fa fa-filter"
            style={{ marginTop: "3px", marginRight: "3px" }}
          ></i>
          Filter
        </button>
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-gray-300 bg-warning py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-warningfocus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={handleReset}
        >
          <i
            className="fa fa-refresh"
            style={{ marginTop: "3px", marginRight: "3px" }}
          ></i>
          Reset
        </button>
      </div>
    </form>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-5 lg:py-6">
        <span className="text-lg font-medium text-slate-800 dark:text-navy-50">
          Staff Details
        </span>
        <button
          className="px-4 py-2 bg-[#4f46e5] text-white rounded-md"
          onClick={() => togglemodal('add')}
        >
          Add Staff
        </button>
       
      </div>
      <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
        <div className="card px-4 pb-4 sm:px-5">
          <div className="mt-5">
          <div className="gridjs-head">
           
           <div className="gridjs-search">
<input type="search" 
placeholder="Type a keyword..." 
aria-label="Type a keyword..." 
className="gridjs-input gridjs-search-input" 
defaultValue="" 
value={searchTerm}
onChange={handleSearchChange}
/>
</div>
        </div>
            <div className="overflow-x-auto w-full">
              <table className="is-hoverable w-full text-left">
                <thead>
                  <tr>
                    <th className="whitespace-nowrap rounded-l-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                      SL No
                    </th>
                    <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                      Staff Name
                    </th>
                    <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                      Branch Name
                    </th>
                    <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                      Mobile
                    </th>
                    <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                      Place
                    </th>
                    <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                      Email
                    </th>
                    <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                      Date
                    </th>
                    <th className="whitespace-nowrap rounded-r-lg bg-slate-200 px-3 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {filteredData.map((item, index) => ( */}
                  {currentEntries.map((item, index) => {
    const formattedDate = new Date(item.date_of_joining).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

    return (
                    <tr
                      key={item.id}
                      className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                    >
                      <td className="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5">
                      {index +indexOfFirstEntry+1}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {item.first_name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {item.branch_name}
                      </td>
                      <td className="whitespace-nowrap  px-4 py-3 sm:px-5">
                        {item.mobile}
                      </td>
                      <td className="whitespace-nowrap  px-4 py-3 sm:px-5">
                        {item.address}
                      </td>
                      <td className="whitespace-nowrap  px-4 py-3 sm:px-5">
                        {item.email}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {/* {item.date_of_joining} */}
                        {formattedDate}
                      </td>
                      <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                        <span>
                          <div className="flex justify-center space-x-2">
                            <button 
                            onClick={() => togglemodal('edit', item)}
                            className="btn size-8 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25">
                              <i className="fa fa-edit"/>
                            </button>
    
                         
                            
                            <button
                        className={`btn size-8 p-0 ${item.status === 'active' ? 'text-error' : 'text-primary'} hover:bg-${item.status === 'active' ? 'error' : 'primary'}/20 focus:bg-${item.status === 'active' ? 'error' : 'primary'}/20 active:bg-${item.status === 'active' ? 'error' : 'primary'}/25`}
                        onClick={() => updateAccountStatus(item.user_id!, item.status)} // Pass the current status
                      >
                        <i className={`fa ${item.status === 'active' ? 'fa-trash-alt' : 'fa-check-circle'}`} />
                      </button>

                          </div>
                        </span>
                      </td>
                    </tr>
                  // ))}
                );
              })}
                </tbody>
              </table>
            </div>

                  <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-4 sm:space-y-0">
  {/* Entries Info */}
  <div className="text-center sm:text-left">
    Showing {indexOfFirstEntry + 1} to {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries} entries
  </div>

  {/* Pagination Controls */}
  <div className="flex flex-wrap justify-center sm:justify-end gap-1">
    <button
      onClick={() => setCurrentPage(1)}
      disabled={currentPage === 1}
      className={`px-3 py-2 border rounded-md ${
        currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
      }`}
    >
      First
    </button>
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
      className={`px-3 py-2 border rounded-md ${
        currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''
      }`}
    >
      Previous
    </button>
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i + 1}
        onClick={() => setCurrentPage(i + 1)}
        className={`px-3 py-2 border rounded-md ${
          currentPage === i + 1 ? 'bg-[#4f46e5] text-white' : ''
        }`}
      >
        {i + 1}
      </button>
    ))}
    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
      className={`px-4 py-2 border rounded-md ${
        currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
      }`}
    >
      Next
    </button>
    <button
      onClick={() => setCurrentPage(totalPages)}
      disabled={currentPage === totalPages}
      className={`px-3 py-2 border rounded-md ${
        currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''
      }`}
    >
      Last
    </button>
  </div>
</div>
          </div>
        </div>
      </div>
      {showmodal && (
  modalMode === 'edit' ? (
    <Edit
      showmodal={showmodal}
      togglemodal={() => togglemodal('add')}  
      staffData={selectedStaff}
      onSave={(updatedStaff) => {
      
      
        setStaffData((prevData) =>
          prevData.map((staff) =>
            staff.id === updatedStaff.id ? updatedStaff : staff
          )
        );
        togglemodal("add");
      }}
      
      
    />
  ) : (
    <Add showmodal={showmodal} togglemodal={() => togglemodal('add')} />
  )
)}
    </div>
  );
};
 export default page;
// export default withAuth(page,["admin"],);




