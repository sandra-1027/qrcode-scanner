

import { useAuth } from "@/app/context/AuthContext";
import React, { useEffect, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Staff {
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
 
}
type CreateProps = {
  showmodal: boolean;
  togglemodal: () => void;
  formData?: {
    name: string;
    mobile: string;
    place: string;
    email: string;
    branch_id: string;
    user_id:string;
  };
  isEditing?: boolean;
};
const Add: React.FC<CreateProps> = ({ showmodal, togglemodal, formData, isEditing }) => {
  const { state } = useAuth();
  const [branches, setBranches] = useState<{ id: string; branch_name: string }[]>([]);
  const [localFormData, setLocalFormData] = useState(formData || {
    name: "",
    mobile: "",
    place: "",
    email: "",
    branch_id: "",
  });
  const [staffData, setStaffData] = useState<Staff[]>([]);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");


  useEffect(() => {
    if (showmodal) {
      const fetchBranches = async () => {
        try {
         const response = await fetch('/api/admin/settings/branch_details', {
            method: 'POST',
            headers: {
            
               'authorizations': state?.accessToken ?? '',
              'api_key': '10f052463f485938d04ac7300de7ec2b',  
            },
            body: JSON.stringify({  }),
          });
          const data = await response.json();
        
          if (data.success) {
            setBranches(data.data);
          }
        } catch (error) {
          console.error("Error fetching branches:", error);
        }
      };

      fetchBranches();
    }
  }, [showmodal]);
  
  useEffect(() => {
    if (formData) {
      setLocalFormData(formData);
    }
  }, [formData]);

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  if (name === "password") {
    setPassword(value); 
  } else {
    setLocalFormData({ ...localFormData, [name]: value });
  }
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  
  
  try {
    const response = await fetch("/api/admin/settings/add_staff", {
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
if (response.ok){
  toast.success('Staff Added successfully');
}
    if (!response.ok) {
      toast.error(`${response.status} An Error occured`);
      return;
    }

 
   
   
    togglemodal(); 
   
  } catch (error:any) {
    console.error("Error submitting form:", error);
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
            Add Staff
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
            {/* <div className="flex mb-4" key="id"> */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
            <span>Staff Name</span>
    <span className="relative mt-1.5 flex">
            <input name="name" 
            value={ localFormData.name}
             onChange={handleChange} type="text"
              placeholder="Staff Name" 
              className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" />
            </span>
            </label>

            <label className="block">
            <span>Mobile</span>
    <span className="relative mt-1.5 flex">
            <input name="mobile"
             value={localFormData.mobile}
              onChange={handleChange} 
              type="text" 
              placeholder="Mobile"
              className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"/>
            </span>
            </label>

            <label className="block">
            <span>Place</span>
    <span className="relative mt-1.5 flex">
            <input name="place"
             value={localFormData.place}
              onChange={handleChange} 
              type="text"
               placeholder="Place"
               className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"/>
            </span>
            </label>

            <label className="block">
            <span>Email</span>
    <span className="relative mt-1.5 flex">
            <input name="email" 
            value={localFormData.email}
             onChange={handleChange} 
             type="text" 
             placeholder="Email" 
             className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" />
            </span>
            </label>
  
      
            <label className="block">
            <span>Branch Name</span>
            <span className="relative mt-1.5 flex ">
              <select name="branch_id" value={localFormData.branch_id} onChange={handleChange}
             className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
             >
                <option value="">Select a Branch</option>
                {branches.map((branch) => (
                  <option key={branch.id} value={branch.id}>
                    {branch.branch_name}
                  </option>
                ))}
              </select>
              </span>
              </label>
              

              <label className="block">
    <span>Password</span>

            <span className="relative mt-1.5 flex">
      <input
        name="password"
        value={password}
        onChange={handleChange}
        type={showPassword ? "text" : "password"} 
        placeholder="Password"
        className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
      />
      <span
        onClick={() => setShowPassword(!showPassword)} 
        className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-slate-400 hover:text-primary dark:text-navy-400 dark:hover:text-accent"
      >
        {showPassword ? <HiEyeOff size={20} /> : <HiEye size={20} />}
      </span>
    </span>
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