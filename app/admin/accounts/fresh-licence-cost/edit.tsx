import { useAuth } from "@/app/context/AuthContext";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface Cost {
  study_cost: string;
  licence_cost: string;
  cost:string;
    service_id: string;
    vehicle_type: string;
    id?: string;
    status: string;
    service_name: string;
    branch_name:string;
    added_date:string;
    gender:string;
    lmc_mc_both_study:string;
    lmc_mc_both_licence:string;
    lmc_study_mc_licence:string;
    lmc_licence_mc_study:string;
  }


interface EditProps {
  showModal: boolean;
  togglemodal: () => void;
  costData: Cost | null;
  onSave: (updatedCost: Cost) => void;
}



const Edit = ({ showModal, togglemodal, costData, onSave }: EditProps) => {
  const { state } = useAuth();
  const [services, setServices] = useState<{ id: string; service_name: string }[]>([]);
  const [formData, setFormData] = useState<Cost | null>(null);
  const [loading, setLoading] = useState(false);
  
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (costData) {
      setFormData({
        ...costData,
      });
    }
  }, [costData]);

// useEffect(() => {
//     if (showModal) {
//       const fetchServices = async () => {
//         try {
//           const response = await fetch('/api/admin/settings/service_details', {
//             method: 'POST',
//             headers: {
//               'authorizations': state?.accessToken ?? '',
//               'api_key': '10f052463f485938d04ac7300de7ec2b', 
//             },
//             body: JSON.stringify({ }),
//           });
//           const data = await response.json();
//           if (data.success) {
//             setServices(data.data);
//           }
//         } catch (error) {
//           console.error("Error fetching Services:", error);
//         }
//       };

//       fetchServices();
//     }
//   }, [showModal]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => prevData ? { ...prevData, [name]: value } : null);
  };



 
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      if (formData) {
        const transformedData = {
          id: formData.id,
          // type: 'cost',
          study_cost: formData.study_cost,
          licence_cost: formData.licence_cost,
          cost: formData.cost,
          gender:formData.gender,
          vehicle_type: formData.vehicle_type,
          lmc_mc_both_study:formData.lmc_mc_both_study,
      lmc_mc_both_licence:formData.lmc_mc_both_licence,
      lmc_study_mc_licence:formData.lmc_study_mc_licence,
       lmc_licence_mc_study:formData.lmc_licence_mc_study
        };
  
        console.log('Transformed Data:', transformedData);
  
        const response = await fetch(`/api/admin/accounts/update_fresh_licence_cost`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            authorizations: state?.accessToken ?? '',
            api_key: '10f052463f485938d04ac7300de7ec2b',
          },
          body: JSON.stringify(transformedData),
        });
  
        console.log('Response Status:', response.status);
        const data = await response.json();
  
        console.log('Response Data:', data);
      
        if (data.success) {
          setSuccess(true);
          onSave(formData);
          toast.success('License Class updated successfully');
          //togglemodal();
        } else {
          setError(data.msg || 'Failed to update driver');
          console.log('Error Messages:', data.error_msgs);
        }
      }
    } catch (err:any) {
      console.error('Error during API call:', err);
      toast.error(err.msg || 'An error occurred while updating the License class.');

    } finally {
      setLoading(false);
    }
  };
  
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
    
  //   try {
  //     if (!formData) return;
  
  //     const transformedData = {
  //       id: formData.id,
  //       type: 'cost',
  //       study_cost: formData.study_cost,
  //       licence_cost: formData.licence_cost,
  //       cost: formData.cost,
  //       vehicle_type: formData.vehicle_type,
  //     };
  
  //     console.log('Transformed Data:', transformedData);
  
  //     const response = await fetch(`/api/admin/accounts/update_fresh_licence_cost`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         authorizations: state?.accessToken ?? '',
  //         api_key: '10f052463f485938d04ac7300de7ec2b',
  //       },
  //       body: JSON.stringify(transformedData),
  //     });
  
  //     console.log('Response Status:', response.status);
  
  //     // ✅ Read response as text first
  //     const responseText = await response.text();
  //     console.log('Raw Response:', responseText || '(empty)');
  
  //     let data: any = {};
  //     if (responseText.trim()) {
  //       try {
  //         data = JSON.parse(responseText);
  //       } catch (jsonError) {
  //         console.error('JSON Parse Error:', jsonError);
  //         throw new Error('Invalid JSON response from server');
  //       }
  //     }
  
  //     console.log('Response Data:', data);
  
  //     // ✅ Handle truly empty responses (assume success on status 200)
  //     if (response.status === 200 && Object.keys(data).length === 0) {
  //       toast.success('License Class updated successfully');
  //       setSuccess(true);
  //       onSave(formData);
  //       togglemodal();
  //       return;
  //     }
  
  //     if (data.success) {
  //       setSuccess(true);
  //       onSave(formData);
  //       toast.success('License Class updated successfully');
  //       togglemodal();
  //     } else {
  //       setError(data.msg || 'Failed to update driver');
  //       console.log('Error Messages:', data.error_msgs || 'No error messages provided');
  //     }
  //   } catch (err: any) {
  //     console.error('Error during API call:', err);
  //     toast.error(err.message || 'An error occurred while updating the License class.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  
  
  
  if (!showModal || !formData) return null;



  return (
    <div>
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5" role="dialog">
        <div className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300" onClick={togglemodal}></div>
        <div className="relative flex w-full max-w-3xl origin-top flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
          <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
            <h3 className="text-xl font-medium text-slate-700 dark:text-navy-100">
              Edit License Cost
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
                <span>Vehicle Type</span>
<input name="vehicle_type"
             value={formData.vehicle_type}
              onChange={handleChange}
               type="text"
                placeholder="vehicle_type"
                readOnly
                // className="mt-1 text-sm pl-2 form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" 
               className="mt-1 text-sm pl-2 form-input peer w-full rounded-lg border border-slate-300 
               bg-slate-200 dark:bg-navy-600 px-3 py-2 placeholder:text-slate-400/70 
               hover:border-slate-400 focus:border-primary dark:border-navy-450 
               dark:hover:border-navy-400 dark:focus:border-accent"
                />
              </label>



               <label className="block">
                <span>Gender</span>
              <input name="gender"
             value={formData.gender}
              onChange={handleChange}
               type="text"
                placeholder="gender"
                readOnly
                className="mt-1 text-sm pl-2 form-input peer w-full rounded-lg border border-slate-300 
                bg-slate-200 dark:bg-navy-600 px-3 py-2 placeholder:text-slate-400/70 
                hover:border-slate-400 focus:border-primary dark:border-navy-450 
                dark:hover:border-navy-400 dark:focus:border-accent"
                />
              </label>
              {( formData.vehicle_type === 'lmc_mc' ||
                formData.vehicle_type === 'both'||
                formData.vehicle_type === 'Both'
              ) ? (
                <>
                  <label className="block">
                  <span>LMV MC both study</span>
              <input 
              name="lmc_mc_both_study"
               value={formData.lmc_mc_both_study}
                onChange={handleChange}
                 type="text"
                  placeholder="LMV MC both study" 
                  className="text-sm pl-2 mt-1 form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" />
              </label>

<label className="block">
<span>LMV MC both licence</span>
<input 
name="lmc_mc_both_licence"
value={formData.lmc_mc_both_licence}
onChange={handleChange}
type="text"
placeholder="LMV MC both licence" 
className="text-sm pl-2 mt-1 form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" />
</label>


<label className="block">
<span>LMV study MC licence</span>
<input 
name="lmc_study_mc_licence"
value={formData.lmc_study_mc_licence}
onChange={handleChange}
type="text"
placeholder="LMV study MC licence" 
className="text-sm pl-2 mt-1 form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" />
</label>

<label className="block">
<span>LMV Licence MC Study</span>
<input 
name="lmc_licence_mc_study"
value={formData.lmc_licence_mc_study}
onChange={handleChange}
type="text"
placeholder="LMV Licence MC Study" 
className="text-sm pl-2 mt-1 form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" />
</label>
</>):(
  <>
      <label className="block">
      <span>Study Cost</span>
  <input 
  name="study_cost"
   value={formData.study_cost}
    onChange={handleChange}
    onKeyPress={(e) => {
      // Allow only numbers, backspace, and dot
      if (!/[0-9.]/.test(e.key) && e.key !== 'Backspace') {
        e.preventDefault();
      }
    }}
     type="text"
      placeholder="study cost" 
      className="text-sm pl-2 mt-1 form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" />
  </label>
  <label className="block">
  <span>Licence Cost</span>
<input name="licence_cost"
 value={formData.licence_cost}
  onChange={handleChange}
  onKeyPress={(e) => {
    // Allow only numbers, backspace, and dot
    if (!/[0-9.]/.test(e.key) && e.key !== 'Backspace') {
      e.preventDefault();
    }
  }}
   type="text"
    placeholder="licence cost"
    className="text-sm pl-2 mt-1 form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" />
</label>
</>
              )}
              
           <label className="block">
              <span>Both Licence Study</span>
            <input name="cost"
             value={formData.cost}
              onChange={handleChange}
              onKeyPress={(e) => {
                // Allow only numbers, backspace, and dot
                if (!/[0-9.]/.test(e.key) && e.key !== 'Backspace') {
                  e.preventDefault();
                }
              }}
               type="text"
                placeholder="Cost"
                className="text-sm pl-2 mt-1 form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent" />
           </label>
            </div>
            <button type="submit" className="bg-primary text-white rounded p-2 w-1/5 mt-4">
            {loading ? 'Updating...' : 'Update'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;