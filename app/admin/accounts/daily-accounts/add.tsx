

// import { useAuth } from '@/app/context/AuthContext';
// import React, { useState, useEffect } from 'react';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// type CreateProps = {
//   showmodal: boolean;
//   togglemodal: () => void;
//   formData?: {
//     daily_status: string;
//     amount: string;
//     type: string;
//     expense_name: string;
 
//     id?: string; 
//   };
//   isEditing?: boolean;
// };

// const Add: React.FC<CreateProps> = ({ showmodal, togglemodal, formData, isEditing = false }) => {
//   const { state } = useAuth();
//   const [accountType, setAccountType] = useState(formData?.daily_status || 'expense');
//   const [expenseType, setExpenseType] = useState(formData?.type || '');
//   const [amount, setAmount] = useState(formData?.amount || '');

  

//   if (!showmodal) return null;

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
  
   
  
//     const data: any = {
//       daily_status: accountType,
//       amount: parseFloat(amount), 
//       type: expenseType || 'general',
//       expense_name: expenseType === 'others' ? 'others' : 'petrol', 
    
//     };
  
 
//     console.log('Sending data to server:', data);
  
//     try {
//       const response = await fetch('/api/admin/accounts/add_accounts', {
//         method: "POST",
//         headers: {
//           authorizations: state?.accessToken ?? '',
//           api_key: '10f052463f485938d04ac7300de7ec2b',
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         console.error(`Error ${'adding'} account:`, errorData.message || 'Unknown error');
//         alert(`Failed to ${'add'} account`);
//       } else {
//         const responseData = await response.json();
//         console.log(`Account ${'added'} successfully:`, responseData);
//         // alert(`Account ${'added'} successfully!`);
//         toast.success('Account added successfully');
//       }
//     } catch (error : any) {
//       console.error(`Network error:`, error);
//       toast.error(error.msg || 'An error occurred while adding the Account.');
//     } finally {
//       togglemodal(); // Close the modal
//     }
//   };

//   return (
//     <div>
//       <div
//         className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
//         role="dialog"
//         onKeyDown={(e) => e.key === 'Escape' && togglemodal()}
//       >
//         <div
//           className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300"
//           onClick={togglemodal}
//         ></div>

//         <div className="relative flex w-full max-w-3xl origin-top flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
//           <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
//             <h3 className="text-xl font-medium text-slate-700 dark:text-navy-100">
//               Add Account
//             </h3>
//             <button
//               onClick={togglemodal}
//               className="btn -mr-1.5 size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="size-4.5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth="2"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>

//           <form onSubmit={handleSubmit} className="p-4">
//             {/* Radio buttons for account type */}
//             <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <div className="flex items-center mb-4 ml-6">
//               <label className="mr-4">
//                 <input
//                   className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
//                   name="basic"
//                   type="radio"
//                   value="expense"
//                   checked={accountType === 'expense'}
//                   onChange={() => setAccountType('expense')}
//                 />
//                 <span className="ml-2">Expense</span>
//               </label>
//               <label>
//                 <input
//                   className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
//                   name="basic"
//                   type="radio"
//                   value="income"
//                   checked={accountType === 'income'}
//                   onChange={() => setAccountType('income')}
//                 />
//                 <span className="ml-2">Income</span>
//               </label>
//             </div>

            
// </div>
          

// {accountType === 'expense' && (
//   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//     {/* Expense Type Dropdown */}
//     <label className="block">
//       <select
//         value={expenseType}
//         onChange={(e) => setExpenseType(e.target.value)}
//         className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
//       >
//         <option value="">Please select Expense type</option>
//         <option value="petrol">Petrol</option>
//         <option value="Salary">Salary</option>
//         <option value="workshop">Workshop</option>
//         <option value="others">Others</option>
//       </select>
//     </label>

  
//     {expenseType === 'others' ? (

//   <label className="block">
//     <input
//       type="text"
//       placeholder="Name"
//       value={amount}
//       onChange={(e) => setAmount(e.target.value)}
//       className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//     />
//   </label>
// ) : (

//   <label className="block">
//     <input
//       type="text"
//       placeholder="Amount"
//       value={amount}
//       onChange={(e) => setAmount(e.target.value)}
//       className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//     />
//   </label>
// )}

 
//     {expenseType === 'others' && (
//       <label className="block">
//         <input
//           type="text"
//           placeholder="Amount"
//           className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//         />
//       </label>
//     )}
//   </div>
// )}
// {accountType === 'income' && (
//   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//     {/* Name Field */}
//     <label className="block">
//       <input
//         type="text"
//         placeholder="Name"
//         value={expenseType}
//         className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//       />
//     </label>

//     {/* Amount Field */}
//     <label className="block">
//       <input
//         type="text"
//         placeholder="Amount"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
//       />
//     </label>
//   </div>
// )}
//             {/* Submit Button */}
//             <button
//               type="submit"
//               className="bg-primary text-white rounded p-2 w-1/5 mt-4"
//             >
//               Add
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Add;




import { useAuth } from '@/app/context/AuthContext';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Account = {
  id?: string;
  status: string;
  daily_status: string; 
  type: string;
  expense_name: string;
  email: string;
  branch_id: string;
  branch_name:string;
  added_date:string;
  staff_name:string;
  amount:string;
  total_income:string;
  total_expense:string;
  added_by:string;
};
type CreateProps = {
  showmodal: boolean;
  togglemodal: () => void;
  formData?: {
    daily_status: string;
    amount: string;
    type: string;
    expense_name: string;
    branch_id:string;
    id?: string; 
  };
  isEditing?: boolean;
};

const Add: React.FC<CreateProps> = ({ showmodal, togglemodal, formData, isEditing = false }) => {
  const { state } = useAuth();
  const [accountType, setAccountType] = useState(formData?.daily_status || 'expense');
  const [expenseType, setExpenseType] = useState(formData?.type || '');
  const [expenseName, setExpenseName] = useState(formData?.expense_name || '');

  const [amount, setAmount] = useState(formData?.amount || '');
  const [ BranchData,  setBranchData] = useState<Account []>([]);
  const [branch_id, setbranch_id] = useState(formData?.branch_id || '');
  const fetchBranchData = async () => {
    try {

      const response = await fetch('/api/admin/settings/branch_details', {
        method: 'POST',
        headers: {
           'authorizations': state?.accessToken ?? '', 
        
          'api_key': '10f052463f485938d04ac7300de7ec2b',  
        },
        body: JSON.stringify({ user_id:null}),
      });
      if (!response.ok) {
        const errorData = await response.json();
       
        throw new Error(`HTTP error! Status: ${response.status} - ${errorData.message || 'Unknown error'}`);
      }
      
      const data = await response.json();
//console.log(data,"data")
      if (data.success) {
        setBranchData(data.data || []);
      } else {
      
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  
  useEffect(() => {
    fetchBranchData();
  }, [state]);

  if (!showmodal) return null;

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  

  
  //   const data: any = {
  //     daily_status: accountType,
  //     amount: parseFloat(amount), 
  //     type: expenseType || 'general',
  //     // expense_name: expenseName === 'others' ? 'others' : 'petrol', 
  //     expense_name: expenseName, 
  //     branch_id:branch_id,
    
  //   };
  
 
  //   console.log('Sending data to server:', data);
  
  //   try {
  //     const response = await fetch('/api/admin/accounts/add_accounts', {
  //       method: "POST",
  //       headers: {
  //         authorizations: state?.accessToken ?? '',
  //         api_key: '10f052463f485938d04ac7300de7ec2b',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });
  
  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       console.error(`Error ${'adding'} account:`, errorData.message || 'Unknown error');
  //       alert(`Failed to ${'add'} account`);
  //     } 
  //     if(response.ok){
  //       const responseData = await response.json();
  //       console.log(`Account ${'added'} successfully:`, responseData);
  //       toast.success('Account added successfully');
  //     }
  //     // else {
  //     //   const responseData = await response.json();
  //     //   console.log(`Account ${'added'} successfully:`, responseData);
  //     //   // alert(`Account ${'added'} successfully!`);
  //     //   toast.success('Account added successfully');
  //     // }
  //   } catch (error : any) {
  //     console.error(`Network error:`, error);
  //     toast.error(error.msg || 'An error occurred while adding the Account.');
  //   } finally {
  //     togglemodal(); // Close the modal
  //   }
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!branch_id) {
      toast.error("Please select a branch.");
      return;
    }
  
    if (!amount || isNaN(Number(amount))) {
      toast.error("Please enter a valid amount.");
      return;
    }
  
    const data: any = {
      daily_status: accountType,
      amount: parseFloat(amount), 
      type: expenseType || 'general',
      expense_name: expenseType === 'others' ? expenseName : expenseType, // Ensuring correct name
      branch_id: branch_id,
    };
  
    console.log('Sending data:', data);
  
    try {
      const response = await fetch('/api/admin/accounts/add_accounts', {
        method: "POST",
        headers: {
          Authorizations: state?.accessToken ?? '',
          api_key: '10f052463f485938d04ac7300de7ec2b',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const responseData = await response.json();
      if (!response.ok) {
        console.error(`Error adding account:`, responseData.message || 'Unknown error');
        toast.error(responseData.message || 'Failed to add account');
        return;
      }
  
      console.log('Account added successfully:', responseData);
      toast.success('Account added successfully');
  
    } catch (error: any) {
      console.error("Network error:", error);
      toast.error(error.message || 'An error occurred while adding the account.');
    } finally {
      togglemodal(); // Close modal
    }
  };
  

  return (
    <div>
      <div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
        role="dialog"
        onKeyDown={(e) => e.key === 'Escape' && togglemodal()}
      >
        <div
          className="absolute inset-0 bg-slate-900/60 transition-opacity duration-300"
          onClick={togglemodal}
        ></div>

        <div className="relative flex w-full max-w-3xl origin-top flex-col overflow-hidden rounded-lg bg-white transition-all duration-300 dark:bg-navy-700">
          <div className="flex justify-between rounded-t-lg bg-slate-200 px-4 py-3 dark:bg-navy-800 sm:px-5">
            <h3 className="text-xl font-medium text-slate-700 dark:text-navy-100">
              Add Account
            </h3>
            <button
              onClick={togglemodal}
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

          <form onSubmit={handleSubmit} className="p-4">
            {/* Radio buttons for account type */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* Radio buttons for account type */}
            <div className="flex items-center mb-4 ml-6">
              <label className="mr-4">
                <input
                  className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                  name="basic"
                  type="radio"
                  value="expense"
                  checked={accountType === 'expense'}
                  onChange={() => setAccountType('expense')}
                />
                <span className="ml-2">Expense</span>
              </label>
              <label>
                <input
                  className="form-radio is-basic size-4 rounded-full border-slate-400/70 checked:border-primary checked:bg-primary hover:border-primary focus:border-primary dark:border-navy-400 dark:checked:border-accent dark:checked:bg-accent dark:hover:border-accent dark:focus:border-accent"
                  name="basic"
                  type="radio"
                  value="income"
                  checked={accountType === 'income'}
                  onChange={() => setAccountType('income')}
                />
                <span className="ml-2">Income</span>
              </label>
            </div>

<div>
{( accountType === 'expense') && (
 
  // {/* type */}
<label className="block">
  <label>Expense Type</label>
      <select
        value={expenseType}
        onChange={(e) => setExpenseType(e.target.value)}
        className="mt-1 block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
      >
        <option value="">Please select Expense type</option>
        <option value="petrol">Petrol</option>
        <option value="Salary">Salary</option>
        <option value="workshop">Workshop</option>
        <option value="others">Others</option>
      </select>
    </label>

                 )}

{( accountType === 'income') && (
<label className="block">
  <span>Name</span>
      <input
        type="text"
        placeholder="Name"
        value={expenseName}
        onChange={(e) => setExpenseName(e.target.value)}
        className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
      />
    </label>
    )}
</div>


                 
</div>
          

<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-4">
{( accountType === 'expense') && (
  <>
{( expenseType === 'others') && (
              <label className="block">
                <span>Name</span>
                   <input
                    type="text"
                    placeholder="Name"
                    value={expenseName}
                    onChange={(e) => setExpenseName(e.target.value)}
                    className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
                  />
                </label>
            )}      
<label className="block">
  <span>Amount</span>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
      />
    </label>
    <label className="block ">
    <span>Branch Name</span>
  
           <select
            id="branch_id"
            name="branch_id"
           value={branch_id}
           onChange={(e) => setbranch_id(e.target.value)}
            // onChange={(e) => setSelectedBranches(e.target.value)}
            className=" block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
          >
            <option value="">Select a Branch</option>
            {BranchData.map((branch) => (
    <option key={branch.id} value={branch.branch_id}>
      {branch.branch_name}
    </option>
  ))}
          </select>
 </label>
 </>
)}
{( accountType === 'income') && (
  <>
  <label className="block">
  <span>Amount</span>
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
      />
    </label>
    <label className="block ">
    <span>Branch Name</span>
  
           <select
            id="branch_id"
            name="branch_id"
           value={branch_id}
           onChange={(e) => setbranch_id(e.target.value)}
            // onChange={(e) => setSelectedBranches(e.target.value)}
            className=" block w-full rounded-md border border-slate-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm dark:border-navy-600 dark:bg-navy-700 dark:text-navy-100"
          >
            <option value="">Select a Branch</option>
            {BranchData.map((branch) => (
    <option key={branch.id} value={branch.branch_id}>
      {branch.branch_name}
    </option>
    
  ))}
          </select>
 </label>
 </>
)}
    </div>






{/* {accountType === 'income' && (
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
 
    <label className="block">
      <input
        type="text"
        placeholder="Name"
        value={expenseType}
        className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
      />
    </label>

  
    <label className="block">
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
      />
    </label>
  </div>
)} */}
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary text-white rounded p-2 w-1/5 mt-4"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;



