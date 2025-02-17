"use client";

import { useAuth } from "@/app/context/AuthContext";
import { useEffect, useState } from "react";
import Edit from "./edit";
import Add from "./add";


type Service = {
  service_name: string;
  id?: string;
  status: string;
  [key: string]: any;
  description: string;
  amount: string;
};
type ServiceData = {
  data: Service[];
};

const page = () => {
  const { state } = useAuth();
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);
  const [serviceData, setServiceData] = useState<Service[]>([]);
  const [showmodal, setShowmodal] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editedService, setEditedService] = useState<Service | null>(null);
  const [selectedService, setSelectedService] = useState<string>("");
  const [filteredData, setFilteredData] = useState<Service[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTerms, setSearchTerms] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");


  const [isOpenService, setIsOpenService] = useState(false);
// const [searchTerm, setSearchTerm] = useState('');
// const [selectedService, setSelectedService] = useState('');
const [filteredServices, setFilteredServices] = useState(serviceData); // Assuming serviceData is available
const [serviceName, setServiceName] = useState<Service[]>([]);

  const togglemodal = (
    mode: "add" | "edit",
    service: Service | null = null
  ) => {
    setModalMode(mode);
    setEditedService(service);
    setShowmodal((prev) => !prev);
  };

  const fetchServiceData = async () => {
    try {
      const response = await fetch("/api/admin/settings/service_details", {
        method: "POST",
        headers: {
          authorizations: state?.accessToken ?? "",
          api_key: "10f052463f485938d04ac7300de7ec2b",
        },
        body: JSON.stringify({}),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `HTTP error! Status: ${response.status} - ${
            errorData.message || "Unknown error"
          }`
        );
      }

      const data = await response.json();

      if (data.success) {
        setServiceData(data.data || []);
        setFilteredData(data.data || []);
        console.log(data.data,"data");
       console.log(data.data[1].description,"description");
      } else {
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchServiceData();
  }, [state]);







  const fetchServiceName = async () => {
    try {
      const response = await fetch("/api/admin/report/get_service_autocomplete", {
        method: "POST",
        headers: {
          authorizations: state?.accessToken ?? "",
          api_key: "10f052463f485938d04ac7300de7ec2b",
        },
        body: JSON.stringify({}),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `HTTP error! Status: ${response.status} - ${
            errorData.message || "Unknown error"
          }`
        );
      }

      const data = await response.json();

      if (data.success) {
        setServiceName(data.data.service_details|| []);
        //setFilteredData(data.data || []);
        console.log(data.data.service_details,"data");
       //console.log(data.data[1].description,"description");
      } else {
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchServiceName();
  }, [state]);
  const applyFilters = () => {
    let newFilteredData = serviceData;

    // Apply form filters
    if (selectedService) {
      newFilteredData = newFilteredData.filter(
        (item) => item.service_name === selectedService
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

    const searchFilteredData = serviceData.filter(
      (item) =>
        item.service_name.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase()) ||
        item.amount.toLowerCase().includes(value.toLowerCase()) ||
        item.status.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(searchFilteredData);

    setCurrentPage(1);
  };
  const handleFilterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFilteredData = applyFilters();
    setFilteredData(newFilteredData);

    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearchTerm("");
    setSelectedService("");
    setSelectedStatus("");
    setFilteredData(serviceData);

    setCurrentPage(1);
  };
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );
  const totalEntries = filteredData.length;

  // Pagination logic
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const updateAccountStatus = async (id: string, status: string) => {
    try {
      const response = await fetch("/api/admin/settings/inactivate_service", {
        method: "POST",
        headers: {
          authorizations: state?.accessToken ?? "",
          api_key: "10f052463f485938d04ac7300de7ec2b",
        },
        body: JSON.stringify({
          id: id,
          status: status,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `HTTP error! Status: ${response.status} - ${
            errorData.message || "Unknown error"
          }`
        );
      }

      const data = await response.json();
      console.log("API Response:", data);

      if (data.success) {
        fetchServiceData();
      } else {
        console.error("API error:", data.msg || "Unknown error");
      }
    } catch (error) {
      console.error("Update error:", error);
    }
  };


  const handleServiceSelect = (service: Service) => {
    setSelectedService(service.text);
    setIsOpenService(false); // Close the dropdown after selection
  };

  

  return (
    <div className=" w-full  pb-8">
      <div className="flex items-center space-x-4 py-5 lg:py-6">
        <h2 className="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl">
          Service Management
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
          <li>Settings</li>
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
          <li>Service Management</li>
        </ul>
      </div>


<div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6 mb-4">
  <div className="card px-4 pb-4 sm:px-5 pt-4">
    <div className="p-4 rounded-lg bg-slate-100 dark:bg-navy-800">
    <form>
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
    <div className="flex-1 relative w-full">
      <label className="block text-sm font-medium text-slate-700 dark:text-navy-100">
        Service Name
      </label>
     
        <div
          className="form-select peer mt-2.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 cursor-pointer"
          onClick={() => setIsOpenService(!isOpenService)}
        >
          <span>{ selectedService || "Select a Service"}</span>
        </div>

        {isOpenService && (
          <div className="p-1 dark:bg-navy-700 absolute z-10 w-full mt-1 bg-white border border-slate-300 rounded-lg shadow-md">
            <input
              type="text"
              placeholder="Search services..."
              className="w-full py-2 border-b dark:bg-navy-700 rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="max-h-60 overflow-y-auto hide-scrollbar">
              {serviceName.length > 0 ? (
                serviceName.map((service) => (
                  <div
                    key={service.id}
                    className="cursor-pointer px-3 py-2 hover:bg-gray-200 hover:rounded-lg"
                    onClick={() => handleServiceSelect(service)}
                  >
                    {service.text}
                  </div>
                ))
              ) : (
                <div className="px-3 py-2 text-gray-400">No results found</div>
              )}
            </div>
          </div>
        )}
    
    </div>

   
    <div className="flex-1">
      <label
        htmlFor="status"
        className="block text-sm font-medium text-slate-700 dark:text-navy-100"
      >
        Status
      </label>
      <select
        id="status"
        name="status"                                                                                                                                                                                         
        value={selectedStatus}                    
        onChange={(e) => setSelectedStatus(e.target.value)}
        className="mt-2.5 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
      >
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>

    <div className="flex-1 mt-6">
      <button
        type="submit"
        onClick={handleFilterSubmit}
        className="inline-flex justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <i
          className="fa fa-filter"
          style={{ marginTop: "3px", marginRight: "3px" }}
        ></i>
        Filter
      </button>
      <button
        type="button"
        onClick={handleReset}
        className="ml-4 inline-flex justify-center rounded-md border border-gray-300 bg-warning py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-warningfocus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <i
          className="fa fa-refresh"
          style={{ marginTop: "3px", marginRight: "3px" }}
        ></i>
        Reset
      </button>
    </div>
  </div>
</form>




    </div>
  </div>
</div>

      <div className="flex items-center justify-between py-5 lg:py-6">
        <span className="text-lg font-medium text-slate-800 dark:text-navy-50">
          Service Details
        </span>

        <button
          className="px-4 py-2 bg-[#4f46e5] text-white rounded-md"
          onClick={() => togglemodal("add")}
        >
          Add Services
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
        <div className="card px-4 pb-4 sm:px-5">
          <div className="mt-5">
            <div className="gridjs-head">
              <div className="gridjs-search">
                <input
                  type="search"
                  placeholder="Type a keyword..."
                  aria-label="Type a keyword..."
                  className="gridjs-input gridjs-search-input"
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
                      Service Name
                    </th>
                    <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                      Amount
                    </th>
                    <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                      Description
                    </th>
                    <th className="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5">
                      Status
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
                  {currentEntries.map((item, index) => (
                    <tr
                      key={item.id}
                      className="border-y border-transparent border-b-slate-200 dark:border-b-navy-500"
                    >
                      <td className="whitespace-nowrap rounded-l-lg px-4 py-3 sm:px-5">
                        {indexOfFirstEntry + index + 1}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {item.service_name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {item.amount}
                      </td>
                      {/* <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        <div
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </td> */}
<td className="max-w-[350px] px-4 py-3">
<div
  dangerouslySetInnerHTML={{ __html: item.description }}
  className="prose prose-sm dark:prose-invert"
></div>
</td>
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {item.status === "active" && (
                          <div className="badge space-x-2.5 rounded-full bg-success/10 text-success">
                            <div className="size-2 rounded-full bg-current" />
                            <span>active</span>
                          </div>
                        )}
                        {item.status === "inactive" && (
                          <div className="badge space-x-2.5 rounded-full bg-error/10 text-error">
                            <div className="size-2 rounded-full bg-current" />
                            <span>inactive</span>
                          </div>
                        )}
                      </td>

                      {/* <td className="whitespace-nowrap px-4 py-3 sm:px-5">
                        {item.added_date}
                      </td> */}
                      <td className="whitespace-nowrap px-4 py-3 sm:px-5">
  <div className="flex flex-col">
    <span>{item.added_date.split(" ")[0]}</span> {/* Date */}
    <span>{item.added_date.split(" ")[1]}</span> {/* Time */}
  </div>
</td>
                      <td className="whitespace-nowrap rounded-r-lg px-4 py-3 sm:px-5">
                        <span>
                          {/* <div className="flex justify-center space-x-2"> */}

                          <div className="flex flex-col">

                            <button
                              onClick={() => togglemodal("edit", item)}
                              className="btn size-8 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25"
                            >
                              <i className="fa fa-edit" />
                            </button>
                            <button
                              onClick={() =>
                                updateAccountStatus(item.id!, item.status)
                              }
                              className={`btn size-8 p-0 ${
                                item.status === "active"
                                  ? "text-error"
                                  : "text-primary"
                              } hover:bg-${
                                item.status === "active" ? "error" : "primary"
                              }/20 focus:bg-${
                                item.status === "active" ? "error" : "primary"
                              }/20 active:bg-${
                                item.status === "active" ? "error" : "primary"
                              }/25`}
                            >
                              <i
                                className={`fa ${
                                  item.status === "active"
                                    ? "fa-trash-alt"
                                    : "fa-check-circle"
                                }`}
                              />
                            </button>
                          </div>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


            <div className="flex flex-col sm:flex-row justify-between items-center mt-4 space-y-4 sm:space-y-0">
              {/* Entries Info */}
              <div className="text-center sm:text-left">
                Showing {indexOfFirstEntry + 1} to{" "}
                {Math.min(indexOfLastEntry, totalEntries)} of {totalEntries}{" "}
                entries
              </div>

              {/* Pagination Controls */}
              <div className="flex flex-wrap justify-center sm:justify-end gap-1">
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-2 border rounded-md ${
                    currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                  }`}
                >
                  First
                </button>
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className={`px-3 py-2 border rounded-md ${
                    currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
                  }`}
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-2 border rounded-md ${
                      currentPage === i + 1 ? "bg-[#4f46e5] text-white" : ""
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 border rounded-md ${
                    currentPage === totalPages
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                >
                  Next
                </button>
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className={`px-3 py-2 border rounded-md ${
                    currentPage === totalPages
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                >
                  Last
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showmodal &&
        (modalMode === "edit" ? (
          <Edit
            showModal={showmodal}
            toggleModal={() => togglemodal("add")}
            serviceData={editedService}
            onSave={(updatedService) => {
              setServiceData((prevData) =>
                prevData.map((service) =>
                  service.id === updatedService.id ? updatedService : service
                )
              );
              togglemodal("add");
            }}
          />
        ) : (
          <Add showmodal={showmodal} togglemodal={() => togglemodal("add")} />
        ))}
    </div>
  );
};

export default page;