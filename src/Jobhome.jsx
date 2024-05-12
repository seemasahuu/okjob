import { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { RiBriefcaseLine } from "react-icons/ri";
import { RiMapPin2Line } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { database } from "./firebase.config";
import { collection, doc, onSnapshot, orderBy } from "firebase/firestore";
import { query } from "firebase/database";
import moment from "moment";

const Jobhome = () => {
  const [loading, setLoading] = useState(true);
  const [usersData, setUsersData] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  /* function to get all tasks from firestore in realtime */
  useEffect(() => {
    const q = query(collection(database, "jobs"));
    onSnapshot(q, (querySnapshot) => {
      setData(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );

      setLoading(false);
    });
  }, []);

  const handleapply = () => {
    navigate("/job/create/new");
  };

  return (
    <div>
      <div className="h-44 py-14 lg:relative">
        <h1 className="text-3xl font-mono text-center ">
           OK<span className="text-blue-700">Jobs</span>
        </h1>
        <p
          className="text-sm py-3 text-gray-500 text-center"
           
        >
          Know your worth and find the job that qualify your life
        </p>
        <Link to={"/job/create/new"}>
          <button
            className="bg-black text-white h-10 w-28 text-sm rounded-2xl mx-36 my-2 mb-0 hover:bg-gray-700 lg:absolute top-5 right-6 "
            onClick={handleapply}
          >
             Post job
          </button>
           </Link>
      </div>
      <div>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : (
          <>
            {data?.length === 0 ? (
              <div>No data found</div>
            ) : (
              <div className="flex flex-col gap-2  mt-3 p-5 flex-nowrap w-full items-center justify-center   lg:flex-wrap lg:flex-row">
                {data?.map((job, index) => {
                  const _job = job.data;
                  return (
                    <>
                   
                      <div className="min-h-48   shadow-lg mb-3   rounded-md    flex  justify-center items-center w-full lg:w-[48%]  " >
                        <div className="h-28  flex">
                          <div className="h-7 w-7 mx-6 rounded-lg  items-center hidden lg:h-14 lg:w-11 lg:block">
                            <img
                              className="  object-contain lg:w-full lg:h-full flex"
                              src={_job.companyLogo}
                              alt="logo"
                            />
                          </div>
                          <div>
                            <div>
                              <Link to={`/job/${job.id}`}>
                                <h1>{_job?.jobTitle}</h1>
                              </Link>
                            </div>
                            <div className="h-14 w-full flex gap-2 items-center flex-nowrap lg:flex lg:gap-8 lg:mr-5 lg:h-14 lg:w-full">
                              <div className="flex items-center">
                                <div className="h-4 w-4 flex items-center justify-center lg:h-9 lg:w-6">
                                  <RiBriefcaseLine />
                                </div>

                                <h1 className="text-xs lg:text-md">{_job?.companyName}</h1>
                              </div>

                              <div className="flex items-center">
                                <div className="h-9 w-6  flex items-center justify-center">
                                  <RiMapPin2Line />
                                </div>

                                <h1 className="text-xs lg:text-md">{_job?.jobLocation}</h1>
                              </div>

                              <div className="flex items-center">
                                <div className="h-9 w-6   flex items-center justify-center">
                                  <MdOutlineWatchLater />
                                </div>

                                <h1 className="text-xs hidden lg:text-md lg:block">
                                  {moment(_job.createdAt).add(3, 'days').calendar() }
                                </h1>
                              </div>

                              <div className="flex items-center">
                                <div className="h-9 w-6  flex items-center justify-center">
                                  <FaRegMoneyBillAlt />
                                </div>

                                <h1 className="text-sm lg:text-md">₹{_job?.salaryStart}lac - ₹{_job?.salaryEnd}lac</h1>
                              </div>
                            </div>

                            <div className="h-10 w-72 flex gap-3">
                              <div className="h-7 w-full bg-blue-200 rounded-xl">
                                <h1 className="text-sm text-center py-1 lg:text-md">Full Time</h1>
                              </div>
                              <div className="h-7 w-full bg-green-200 rounded-xl">
                                <h1 className="text-sm text-center py-1 lg:text-md">Urgent</h1>
                              </div>
                              <div className="h-7 w-full bg-orange-200 rounded-xl">
                                <h1 className="text-sm text-center py-1 lg:text-md">Private</h1>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                 
                    </>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Jobhome;
