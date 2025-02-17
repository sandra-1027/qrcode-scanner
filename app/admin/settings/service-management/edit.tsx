import { useAuth } from '@/app/context/AuthContext';
import { useState, useEffect } from 'react';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import TextEditor from './TextEditor';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


interface Branch {
    id?: string;
    service_name: string;
    amount:string;
    status: string;
    description: string;
    
  }


interface EditProps {
  showModal: boolean;
  toggleModal: () => void;
  serviceData: Branch | null;
  onSave: (updatedDriver: Branch) => void;
}

const Edit = ({ showModal, toggleModal, serviceData, onSave }: EditProps) => {
     const {state}=useAuth();
  const [formData, setFormData] = useState<Branch | null>(null);
const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
   
    const [imagePreview, setImagePreview] = useState<string | null>(null);
  useEffect(() => {
    if (serviceData) {
      setFormData(serviceData);
    }
  }, [serviceData]);


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | string,
    fieldName?: string
  ) => {
    if (typeof e === "string" && fieldName) {
      // Handle text editor or custom string input
      setFormData((prevData) =>
        prevData ? { ...prevData, [fieldName]: e } : null
      );
    } else {
      // Handle input field changes
      const event = e as React.ChangeEvent<HTMLInputElement>;
      const { name, value } = event.target;
      setFormData((prevData) =>
        prevData ? { ...prevData, [name]: value } : null
      );
    }
  };
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
  
    try {
      if (formData) {
        const transformedData = {
          id: formData.id,
        //   name: `${formData.first_name}`,
          type: 'service',
          service_name:formData.service_name,
          amount:formData.amount,
          description: formData.description,
          
        };
  
        console.log('Transformed Data:', transformedData);
  
        const response = await fetch(`/api/admin/settings/update_service`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'authorizations': state?.accessToken ?? '',
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
          toast.success('Service updated successfully');
          //toggleModal();
        } else {
          setError(data.msg || 'Failed to update driver');
          console.log('Error Messages:', data.error_msgs);
        }
      }
    } catch (err : any) {
      console.error('Error during API call:', err);
      setError('An error occurred while updating the driver.');
      toast.error(err.message || 'An Error occured');
    } finally {
      setLoading(false);
    }
  };
  

  if (!showModal || !formData) return null;
  // if (!showModal) return null; 

  return (
    
  
    // <div>
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
     //className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto px-4 py-6 sm:px-5"
      role="dialog"
      onKeyDown={(e) => e.key === "Escape" && toggleModal()}
    >
      <div
        className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300"
        onClick={toggleModal}
      ></div>

      {/* <div className="relative flex w-full max-w-3xl origin-top flex-col overflow-y-auto rounded-lg bg-white transition-all duration-300 dark:bg-navy-700"> */}
      <div className="relative flex w-full max-w-3xl origin-top flex-col overflow-y-auto rounded-lg bg-white transition-all duration-300 dark:bg-navy-700 hide-scrollbar">
        <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
          <h3 className="text-xl font-medium text-slate-700 dark:text-navy-100">
            Edit Service
          </h3>
          <button
            onClick={toggleModal}
            className="btn -mr-1.5 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
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

        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="space-y-5 p-4">
            
              <label className="block">
              <span>Service Name</span>
                <input
                  className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="service Name"
                  name="service_name"
                  type="text"
                  value={formData.service_name}
                // onChange={handleChange}
                onChange={(e) => handleChange(e)}
                />
              </label>
              <label className="block">
              <span>Amount</span>
                <input
                  className="form-input mt-1.5 w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  placeholder="amount"
                  name="amount"
                  type="text"
                  value={formData.amount}
                // onChange={handleChange}
                onChange={(e) => handleChange(e)}
                />
              </label>

              <div className="mt-1.5 w-full">
              <span>Description</span>
                <TextEditor
                  value={formData.description}
                  onChange={(value: string) => handleChange(value, "description")}
                // onChange={handleChange}
                />
              </div>
                <button
                  type="submit"
                  className="bg-primary text-white rounded p-2 w-1/5"
                  disabled={loading}
                >
                   {loading ? "Updating..." : "Update"}
                </button>
            
            </div>
          </form>
        </div>
      </div>
    </div>
  //</div>
  );
};
export default Edit;