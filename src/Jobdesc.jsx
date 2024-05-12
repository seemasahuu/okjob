import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { RiBriefcaseLine } from "react-icons/ri";
import { RiMapPin2Line } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { LuUser2 } from "react-icons/lu";
import { FaCoins } from "react-icons/fa";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { database } from "./firebase.config";
import { useState } from "react";
import moment from "moment";

function Jobdesc() {
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

  const handleapply = () => {
    navigate(`/apply/${id}`);
  };

  if (!data) return "Loading...";
  return (
    <div className="h-screen w-screen">
      <div className="h-80 w-full bg-gray-100    shadow-sm  lg:flex lg:gap-10 lg:h-60">

        <div className="min-h-48 shadow-md my-2 mx-3 rounded-md  flex justify-center items-center lg:mx-8 lg:w-[96%]">
          <div className="h-28 w-80  flex lg:w-[75%]">
            <div className="h-14 w-14 mx-6  rounded-md   items-center hidden lg:h-14 lg:w-11 lg:block">
              <img
                className="object-contain lg:w-full lg:h-full  lg:rounded-lg flex"
                src={data.companyLogo}
                alt=""
              />
            </div>
            <div>
              <div>
                <Link to={`/apply/${id}`}>
                  <h1>{data.jobTitle}</h1>{" "}
                </Link>
              </div>
              <div className="h-14 flex gap items-center flex-nowrap lg:flex lg:gap-2   lg:h-14 lg:w-full">
                <div className="flex items-center">
                  <div className="h-4 w-4 flex items-center justify-center   lg:h-9 lg:w-6">
                    <RiBriefcaseLine />
                  </div>

                  <h1 className="text-sm lg:text-md">{data.companyName}</h1>
                </div>

                <div className="flex items-center">
                  <div className="h-9 w-6  flex items-center justify-center">
                    <RiMapPin2Line />
                  </div>

                  <h1 className="text-sm lg:text-md">{data.jobLocation}</h1>
                </div>

                <div className="flex items-center">
                  <div className="h-9 w-6   flex items-center justify-center">
                    <MdOutlineWatchLater />
                  </div>

                  <h1 className="text-sm hidden lg:text-md lg:block">
                                  {moment(data?.createdAt).add(3, 'days').calendar() }
                                </h1>
                </div>

                <div className="flex items-center">
                  <div className="h-9 w-6  flex items-center justify-center">
                    <FaRegMoneyBillAlt />
                  </div>

                  <h1 className="text-sm lg:text-md">
                    ₹{data.salaryStart}lac - ₹{data.salaryEnd}lac
                  </h1>
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

        <div className="h-48 mx-24 lg:w-[45%]">
          <button
            className="bg-black text-white h-12 w-48 text-sm rounded-2xl my-9 lg:my-20 mb-0 hover:bg-gray-700"
            onClick={handleapply}
          >
            Apply for job
          </button>
        </div>
      </div>
      <div className="h-full w-full   flex-wrap gap-10 my-10 lg:flex  ">
        <div className="h-full w-full lg:w-[65%]" >
          <h1 className="font-bold text-xl px-10 py-2 lg:px-24">Job Description</h1>
          <h1 className="px-10 pr-5 lg:px-24">{data.jobDescription}</h1>

          <h1 className="font-bold text-xl px-10 py-5 lg:px-24">
            Key Responsibilities
          </h1>

          <h1 className="px-10 pr-5  py-3 lg:px-24">{data.jobResponsibilities}</h1>

          <h1 className="font-bold text-xl px-10 py-5 lg:px-24">Other</h1>

          <h1 className="px-10 pr-5  py-3 lg:px-24">{data.other}</h1>
        </div>
        
        <div
          className="h-full bg-gray-100 rounded-xl flex-wrap  shadow-2xl lg:w-[25%]"
         
        >
          <div className="h-20 w-full">
            <h1 className="font-bold text-lg px-10 py-8 pb-0 lg:px-14">Job Overview</h1>
          </div>
          <div className="h-24 w-full">
            <div className="flex gap-5 mx-14 py-3">
              <div className="my-2">
                <RiBriefcaseLine className="h-[30px] w-[30px]"/>
              </div>
              <div>
                <h1>Date posted:</h1>
                <h1>Posted 1 hours ago</h1>
              </div>
            </div>

            <div className="h-24 w-full py-3 ">
              <div className="flex gap-5 mx-14">
                <div className="my-2">
                  <RiMapPin2Line  className="h-[30px] w-[30px]"/>
                </div>
                <div>
                  <h1>Location:</h1>
                  <h1>{data.jobLocation}</h1>
                </div>
              </div>
            </div>

            <div className="h-24 w-full">
              <div className="flex gap-5 mx-14">
                <div className="my-2">
                  <LuUser2 className="h-[30px] w-[30px]"/>
                </div>
                <div>
                  <h1>Job Title:</h1>
                  <h1>{data.jobTitle}</h1>
                </div>
              </div>
            </div>

            {/* <div className="h-24 w-full">
              <div className="flex gap-5 mx-14">
                <div className="my-2">
                  <MdOutlineWatchLater
                    style={{ height: "30px", width: "30px" }}
                  />
                </div>
                <div>
                  <h1>Hours:</h1>
                  <h1>50h / week</h1>
                </div>
              </div>
            </div> */}

            <div className="h-24 w-full">
              <div className="flex gap-5 mx-14">
                <div className="my-2">
                  <FaRegMoneyBillAlt
                    className="h-[30px] w-[30px]"
                  />
                </div>
                <div>
                  <h1>Salary:</h1>
                  <h1>
                    ₹{data.salaryStart}lac - ₹{data.salaryEnd}lac
                  </h1>
                </div>
              </div>
            </div>
            <div className="h-24 w-full">
              <div className="flex gap-5 mx-14">
                <div className="my-2">
                  <MdOutlineWatchLater
                 className="h-[30px] w-[30px]"
                  />
                </div>
                <div>
                  <h1>Notice Period:</h1>
                  <h1>{data.noticePeriod}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobdesc;
