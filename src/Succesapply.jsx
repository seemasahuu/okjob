import { doc, getDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { database } from "./firebase.config";

const Succesapply = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    const getJobDetails = async () => {
      const snap = await getDoc(doc(database, "jobs", id));

      if (snap.exists()) {
        console.log(snap.data());
        setData(snap.data());
      } else {
        console.log("No such document");
      }
    };

    getJobDetails();
  }, []);

  const handlecontinue = () => {
    navigate("/");
  };
  return (
    <>
      <div className="min-h-screen  flex flex-col  items-center justify-center">
        <div className="lg:h-[80vh] lg:w-[90%] flex flex-col  items-center justify-center shadow-lg rounded-md  ">
          <img
            className="h-28 w-52 lg:h-64 lg:w-80 rounded-lg my-6"
            src="https://cdnl.iconscout.com/lottie/premium/thumb/business-support-for-success-5571747-4655207.gif"
            alt=""
          />
          <h1 className=" font-bold text-sm lg:text-3xl text-center py-6  font-serif">
            Your Application Has Been Successfully Received!
          </h1>
          <div>
            <h1 className=" font-bold text-sm px-5 lg:text-2xl lg:px-32 ">
              Thank you for applying for a position with{" "}
              <span className="text-blue-500">{data?.companyName} </span> We
              have successfully received your application.
            </h1>
            <h1 className="px-5 lg:px-10 text-xs lg:text-sm ">
              For a faster response, you are also welcome to send your CV
              directly to
              <span className="text-blue-600 font-bold">
                {data?.companyName}
              </span>
              at{" "}
              <span className="text-blue-600 font-bold cursor-pointer">
                {" "}
                {data?.companyEmail}
              </span>{" "}
              . They are quick to reply and will assist you promptly with your
              queries.
            </h1>
            <h1 className="px-5 lg:px-96 text-xs lg:text-sm ">
              We appreciate your interest and wish you the best of luck in your
              application process!
            </h1>
          </div>

          <div class="flex items-center justify-between">
            <span
              class="h-10 w-36   hover:text-gray-700   font-bold py-2 px-4 mx-20 lg:my-1 lg:mb-5 underline"
              onClick={handlecontinue}
            >
              Back To Home
            </span>
          </div>
        </div>

        {/* <img className='h-64 w-80 rounded-lg my-6 ' src="https://i.gifer.com/XD4x.gif" alt="" />
        <h1 className=' font-bold text-3xl text-center py-10  font-serif' >Your Application Has Been Successfully Received!</h1>
        <div>
             
            <h1 className=' font-bold text-2xl px-44 ' >Thank you for applying for a position with <span className='text-blue-500'>{data?.companyName} </span>   We have successfully received your application.</h1>
            <h1 className='px-16 '>For a faster response, you are also welcome to send your CV directly to<span className='text-blue-600 font-bold'>{data?.companyName}</span>at <span className='text-blue-600 font-bold cursor-pointer'> {data?.companyEmail}</span> . They are quick to reply and will assist you promptly with your queries.</h1>
            <h1 className='px-96 '>We appreciate your interest and wish you the best of luck in your application process!</h1>
        </div>

        <div class="flex items-center justify-between">
                <button
                  class="h-10 w-36 bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 mx-20 my-20 rounded-xl focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handlecontinue}
                >
                Back To Home
                </button>
              </div> */}
      </div>
    </>
  );
};

export default Succesapply;
