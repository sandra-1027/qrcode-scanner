
import { useAuth } from "@/app/context/AuthContext";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type CreateProps = {
  showmodal: boolean;
  togglemodal: () => void;
  formData?: {
    f_cost: string;
    m_cost: string;
    service_id: string;
    vehicle_type: string;
    id:string;
  };
  isEditing?: boolean;
};
const Add: React.FC<CreateProps> = ({ showmodal, togglemodal, formData, isEditing }) => {
  const { state } = useAuth();
  const [services, setServices] = useState<{ id: string; service_name: string }[]>([]);
  const [localFormData, setLocalFormData] = useState(formData || {
    f_cost: "",
    m_cost: "",
    service_id: "",
    vehicle_type: "",
    id:"",
  });
  useEffect(() => {
    if (showmodal) {
      const fetchServices = async () => {
        try {
          const response = await fetch('/api/admin/settings/service_details', {
            method: 'POST',
            headers: {
              'authorizations': state?.accessToken ?? '',
              'api_key': '10f052463f485938d04ac7300de7ec2b',
            },
            body: JSON.stringify({  }),
          });
          const data = await response.json();
          if (data.success) {
            setServices(data.data);
          }
        } catch (error) {
          console.error("Error fetching Services:", error);
        }
      };

      fetchServices();
    }
  }, [showmodal]);
 

  useEffect(() => {
    if (formData) {
      setLocalFormData(formData);
    }
  }, [formData]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLocalFormData({ ...localFormData, [name]: value });
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  
  try {
    const response = await fetch('/api/admin/accounts/add_license_class', {
      method: "POST",
      headers: {
        authorizations: state?.accessToken ?? "",
        api_key: "10f052463f485938d04ac7300de7ec2b",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(localFormData),
    });

    console.log(localFormData, "data sent to backend");

    const responseJson = await response.json();
    console.log("Response from backend:", responseJson);

    if (!response.ok) {
      alert(`Failed to add license. Status code: ${response.status}`);
     
      return;
    }

    toast.success('License Class added successfully');
    togglemodal(); 
  } catch (error : any) {
    console.error("Error submitting form:", error);
    alert(`An error occurred while adding the license.`);
    toast.error(error.message || 'An Error occured');
  }
};

  if (!showmodal) return null;
  return (
    <div>
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5" role="dialog">
        <div className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300" onClick={togglemodal}></div>
        <div className="relative flex w-full max-w-3xl origin-top flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
          <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
            <h3 className="text-xl font-medium text-slate-700 dark:text-navy-100">
             Add License Class
            </h3>
            <button onClick={togglemodal} className="btn -mr-1.5 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">

                   <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>   

            </button>
          </div>
          <form onSubmit={handleSubmit} className="p-4" >
            
            {/* Form fields */}

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
            <select name="service_id" value={localFormData.service_id} onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
            >
                <option value="">Select a Service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.service_name}
                  </option>
                ))}
              </select>
              </label>



              <label className="block">
              <select name="vehicle_type" value={localFormData.vehicle_type} onChange={handleChange} 
              className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
              >
                <option value="">Please select vehicle type</option>
               <option value="LMC">LMC</option>
               <option value="MC">MC</option>
               <option value="Both">Both</option>
              </select>
              </label>
              <label className="block">
            <input name="f_cost"
             value={ localFormData.f_cost}
              onChange={handleChange}
               type="text"
                placeholder="Female cost" 
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" />
            </label>
            <label className="block">
            <input name="m_cost"
             value={localFormData.m_cost}
              onChange={handleChange}
               type="text"
                placeholder="Male cost"
                className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" />
           </label>
            </div>
            <button type="submit" className="bg-primary text-white rounded p-2 w-1/5 mt-4">
            Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;