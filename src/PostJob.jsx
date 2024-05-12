import { addDoc, collection } from "firebase/firestore";
import  {useState} from "react";
import { database } from "./firebase.config";

export default function PostJob() {
  const [inputData, setinputData] = useState("");

  //  const inputdatachange =(e)=>{
  //   const { name, value } = e.target;
  //   // Update the state with the new value
  //   setinputData({
  //     ...inputData,
  //     [name]: value,
  // });
  //  }

  const inputdatachange = (e) => {
    const { name, value } = e.target;
    // Update the state with the new value for the specific field
    setinputData({
      ...inputData,
      [name]: value,
    });
  };
  // Function to create a userx
  const createNewJob = async () => {

    const myDocumentData = {
      jobTitle:inputData?.jobTitle||"",
      companyName:inputData?.companyName||"",
      companyLogo:inputData?.companyLogo||"",
      jobLocation:inputData?.jobLocation||"",
     
      jobSkills:inputData?.jobSkills||"",
      jobResponsibilities:inputData?.jobResponsibilities||"",
      jobDescription:inputData?.jobDescription||"",
      jobChose:inputData?.jobChose||"",  
      isCurrentolyHiring:inputData?.isCurrentolyHiring||"",
      companyEmail:inputData?.companyEmail||"",
      numberOfPosition:inputData?.numberOfPosition||"",  
      workMode:inputData?.workMode||"",  
      noticePeriod:inputData?.noticePeriod||"",  
      other:inputData?.other||"",  
      jobExperienceStart:inputData?.jobExperienceStart||"",  
      jobExperienceEnd:inputData?.jobExperienceEnd||"",  
      salaryStart:inputData?.salaryStart||"",  
      salaryEnd:inputData?.salaryEnd||"",    
      createdAt:(new Date()).toISOString()
    };
    if(!inputData){
      alert("Please fill the form!")
      return
    }

   
  
    // Define the collection and document data
    const myCollection = collection(database, "jobs");

    // Add the document to the collection
    const newDocRef = await addDoc(myCollection, myDocumentData);

    // Log the document ID
    console.log("New document added with ID:", newDocRef.id);

    alert("We will redirect you in sooon....");
  };

  return (
    <div className="min-h-screen flex justify-center items-center ">
      <div
        className="bg-white rounded-md  w-[45vh] shadow-md my-5 lg:w-[80vh] "
      
      >
        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              name="jobTitle"
            >
              Job Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              onChange={inputdatachange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              name="companyName"
            >
              Company Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="companyName"
              placeholder="Company Name"
              onChange={inputdatachange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              name="companyLogo"
            >
              Company Logo
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="companyLogo"
              placeholder="Company Logo"
              onChange={inputdatachange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              name="jobLocation"
            >
              Job Location
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="jobLocation"
              placeholder="Job Location"
              onChange={inputdatachange}
            />
          </div>
          
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              name="jobSkills"
            >
              Job Skills
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="jobSkills"
              placeholder="Job Skills"
              onChange={inputdatachange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              name="jobResponsibilities"
            >
              Job Responsibilities
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="jobResponsibilities"
              placeholder="Job Responsibilities"
              onChange={inputdatachange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              name="jobDescription"
            >
              Job Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="textarea"
              name="jobDescription"
              placeholder="Job Description"
              onChange={inputdatachange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              name="companyEmail"
            >
               Company Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="companyEmail"
              placeholder="Company Email"
              onChange={inputdatachange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              name="numberOfPosition"
            >
               Number Of Position
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="numberOfPosition"
              placeholder="Number Of Position"
              onChange={inputdatachange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              name="workMode"
            >
             Work Mode
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="workMode"
              placeholder="Work Mode"
              onChange={inputdatachange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              name="noticePeriod"
            >
             Notice Period
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="noticePeriod"
              placeholder="Notice Period"
              onChange={inputdatachange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              name="other"
            >
              Other
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="other"
              placeholder="Other"
              onChange={inputdatachange}
            />
          </div>

          <div className="flex gap-6 lg:gap-32 items-center">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              name="jobExperienceStart"
            >
               Job Experience Start
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="jobExperienceStart"
              placeholder="Job Experience Start"
              onChange={inputdatachange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              name="jobExperienceEnd"
            >
              JobExperienceEnd
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="jobExperienceEnd"
              placeholder="Job Experience End"
              onChange={inputdatachange}
            />
          </div>
          </div>

          <div className="flex gap-6 lg:gap-32 items-center">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              name="salaryStart"
            >
               Salary Start
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="salaryStart"
              placeholder="Salary Start"
              onChange={inputdatachange}
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              name="salaryEnd"
            >
               Salary End
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="salaryEnd"
              placeholder="Salary End"
              onChange={inputdatachange}
            />
          </div>
          </div>

          <div className="flex gap-7 lg:gap-16 items-center">
            <select className="shadow appearance-none   bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name="jobChose"   onChange={inputdatachange}>
              <option className="text-gray-100">Job Type </option>
              <option>Full time</option>
              <option>Private</option>
              <option>Urgant</option>
            </select>
            <div className="md:w-1/3"></div>
            <label className="md:w-2/3 block text-gray-700 font-bold">
              <input className="mr-2 leading-tight" type="checkbox" name="isCurrentolyHiring"  onChange={inputdatachange}/>
              <span className="text-sm">Is Currentoly Hiring</span>
            </label>
          </div>

          <div className="flex items-center justify-center">
            <button
            onClick={createNewJob}
              className="h-10 w-36 bg-black  hover:bg-gray-700 text-white font-bold py-2 px-4 my-6 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
