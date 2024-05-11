import { useState, useEffect } from "react";

import { useNavigate,useParams } from "react-router-dom";
import {
  getDatabase,
  ref,
  push,
  child,
  update,
  remove,
} from "firebase/database";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { database } from "./firebase.config";

const Form = () => {
  const [inputData, setinputData] = useState("");
  const [getimgurl, setgetimgurl] = useState("");
  const navigate = useNavigate();
  const {id} = useParams()

  const inputdatachange = (e) => {
    // Destructure the event target
    const { name, value } = e.target;
    // Update the state with the new value
    setinputData({
      ...inputData,
      [name]: value,
    });
  };

  const [data, setData] = useState()

  useEffect(() => {
    const getJobDetails = async () => {
      const snap = await getDoc(doc(database, "jobs", id));

      if (snap.exists()) {
        console.log(snap.data());
        setData(snap.data())
      } else {
        console.log("No such document");
      }
    };

    getJobDetails()
  }, []);

  // Function to create a user
  const createUser = async () => {
    const myDocumentData = {
      name: inputData.name,
      email: inputData.email,
      number: inputData.number,
      jobtitle: inputData.jobTitle,
      jobId:id,
      createdAt:(new Date()).toISOString()
    };


    if (!inputData) {
      alert("Please fill the form!");
      return;
    }
    // Define the collection and document data
    const myCollection = collection(database, "candidates");

    // Add the document to the collection
    const newDocRef = await addDoc(myCollection, myDocumentData);

    // Log the document ID
    console.log("New document added with ID:", newDocRef.id);

  // Update the existing document
  const jobDocRef = doc(database, "jobs", id); // Ensure this is the correct path to your document
  updateDoc(jobDocRef, { totalApplied:(data?.totalApplied||0) +1 })
    .then(() => {
      console.log("Document successfully updated");
    })
    .catch(error => {
      console.error("Error updating document: ", error);
    });

    alert("We will redirect you in sooon....");
  };

  const handlesubmit = () => {
    createUser();
    navigate(`/job/apply/${id}/success`);
  };
  return (
    <>
      <div className="bg-sky-100 min-h-screen flex justify-center items-center ">
        <div
          className="bg-black rounded-md"
          style={{ height: "90vh", width: "55vh" }}
        >
          <div
            className="bg-white my-16 shadow-xl"
            style={{
              borderTopLeftRadius: "140px",
              borderBottomRightRadius: "140px",
              height: "71vh",
            }}
          >
            <form
              class="bg-white rounded px-8  pt-6   mb-4 "
              style={{
                borderTopLeftRadius: "140px",
                borderBottomRightRadius: "140px",
              }}
            >
              <div class="mb-4 my-16">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="name"
                >
                  Name
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="name"
                  type="text"
                  placeholder="Name"
                  onChange={inputdatachange}
                />
              </div>

              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="number"
                >
                  Number
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   name="number"
                  type="number"
                  placeholder="Number"
                  onChange={inputdatachange}
                />
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 text-sm font-bold mb-2"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                   name="email"
                  type="email"
                  placeholder="Email"
                  onChange={inputdatachange}
                />
              </div>
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
                  placeholder="job Title"
                  onChange={inputdatachange}
                />
              </div>

              <div class="flex items-center justify-between">
                <button
                  class="h-10 w-36 bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 mx-20 my-3 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handlesubmit}
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
