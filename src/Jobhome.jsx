import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiBriefcaseLine } from "react-icons/ri";
import { RiMapPin2Line } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { database } from "./firebase.config";
import { collection, doc, onSnapshot, orderBy } from "firebase/firestore";
import { query } from "firebase/database";

const Jobhome = () => {
  const [loading, setLoading] = useState(true);
  const [usersData, setUsersData] = useState([]);
  const [data, setData] = useState([]);
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

  return (
    <div>
      <div className="h-44 py-14 ">
        <h1 className="text-3xl font-mono" style={{ paddingLeft: "40%" }}>
          Featured Jobs
        </h1>
        <p
          className="text-sm py-3 text-gray-500"
          style={{ paddingLeft: "37%" }}
        >
          Know your worth and find the job that qualify your life
        </p>
      </div>
      <div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            {data?.length === 0 ? (
              <div>No data found</div>
            ) : (
              <div className="flex gap-2 h-fit w-fit flex-wrap">
                {data?.map((job, index) => {
                  const _job = job.data;
                  return (
                    <>
                      <div className="h-48 shadow-lg mb-3 my-5 mx-8 rounded-md  flex  justify-center items-center">
                        <div className="h-28 w-[100%] flex">
                          <div className="h-14 w-14 mx-6 rounded-md flex items-center">
                            <img
                              className="w-full h-full object-contain"
                              src={_job.companyLogo}
                              alt="logo"
                            />
                          </div>
                          <div>
                            <div>
                              <Link to={`/apply/${job.id}`}>
                                <h1>{_job?.jobTitle}</h1>
                              </Link>
                            </div>
                            <div className="h-14 w-full flex gap-8 mr-5 items-center flex-nowrap">
                              <div className="flex items-center">
                                <div className="h-9 w-6 flex items-center justify-center">
                                  <RiBriefcaseLine />
                                </div>

                                <h1>Catalyst</h1>
                              </div>

                              <div className="flex items-center">
                                <div className="h-9 w-6  flex items-center justify-center">
                                  <RiMapPin2Line />
                                </div>

                                <h1>London, UK</h1>
                              </div>

                              <div className="flex items-center">
                                <div className="h-9 w-6   flex items-center justify-center">
                                  <MdOutlineWatchLater />
                                </div>

                                <h1>11 hours ago</h1>
                              </div>

                              <div className="flex items-center">
                                <div className="h-9 w-6  flex items-center justify-center">
                                  <FaRegMoneyBillAlt />
                                </div>

                                <h1>$35k - $45k</h1>
                              </div>
                            </div>

                            <div className="h-10 w-72 flex gap-3">
                              <div className="h-7 w-full bg-blue-200 rounded-xl">
                                <h1 className="text-center">Full Time</h1>
                              </div>
                              <div className="h-7 w-full bg-green-200 rounded-xl">
                                <h1 className="text-center">Urgent</h1>
                              </div>
                              <div className="h-7 w-full bg-orange-200 rounded-xl">
                                <h1 className="text-center">Private</h1>
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
