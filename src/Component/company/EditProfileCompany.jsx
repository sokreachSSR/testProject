import React, { useState } from "react";
import company from "../../assets/edit_company.png";
import camera from "../../assets/camera.png";
import profile from "../../assets/Profile.png";
export default function EditProfileCompany() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(true);

  const handleInput = (event) => {
    const inputValue = event.target.value;
    setIsValidPhone(
      inputValue === "" || inputValue.match(/^[0-9]{3} [0-9]{3} [0-9]{3}$/)
    );
  };
  const openModal = () => {
    setIsModalOpen(true);
    console.log("open modal");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    console.log("close modal");
  };

  return (
    <div>
      {/* <!-- Modal toggle --> */}
      <button
        onClick={openModal}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        Edit
      </button>

      {/* <!-- Main modal --> */}

      <div class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative w-full max-w-2xl max-h-full bg-white overflow-x-hidden overflow-y-auto">
          {/* <!-- Modal content --> */}
          <div class="gird grid-cols-2 ">
            {/* <!-- Modal header --> */}
            {/* gird1 */}
            <div className="p-1 relative mr-5">
              <div>
                <img src={company} alt="" className="w-[350px]" />
                <div className="flex absolute top-32 left-5">
                  <img src={profile} alt="" className="w-20" />
                  <img
                    src={camera}
                    alt=""
                    className="absolute top-14 left-14 w-4"
                  />
                  <div className="mt-6">
                    <p className="font-bold text-base ml-3">Bitgert</p>
                    <div className="flex text-xs">
                      <p className="mr-4"> 560 Followers</p>
                      <p>500 Following</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="" className="text-xs ml-3 font-bold">
                  Company Type
                </label>
                <select name="" className="text-xs border-gray-400 mt-1" id="">
                  <option
                    disabled
                    selected
                    className="flex justify-center items-center text-xs"
                  >
                    Technology
                  </option>
                  <option>Teacher</option>
                  <option>Accounting</option>
                  <option>English</option>
                </select>
                <br></br>
                <label htmlFor="" className="text-xs ml-3 font-bold ">
                  Phone
                </label>
                <input
                  onChange={handleInput}
                  name="phoneNumber"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                  type="text"
                  className={`w-full focus:ring-green_custom focus:border-green_custom rounded-3xl h-[40px] text-black ${
                    !isValidPhone ? "border-red-500" : ""
                  }`}
                  placeholder="010-300-3232"
                  id=""
                />
                {!isValidPhone && (
                  <p className="text-red-500 text-sm mt-1">
                    Invalid phone number! Please enter like this example 012 345
                    678.
                  </p>
                )}
                <br></br>
                <label htmlFor="" className="text-xs ml-3 font-bold ">
                  Email
                </label>
                <input
                  type="text"
                  name=""
                  className="border-gray-400"
                  placeholder="Email@gmail.com"
                  id=""
                />
              </div>
            </div>
            {/* gird2 */}
            <div className="p-1">
              <div>
                <p className="text-xs font-b mb-1">Address</p>
                <div className="border border-gray-500 h-14 w-80 rounded-[20px] p-3">
                  <p className="text-xs content-center mb-0.5 ">
                    {" "}
                    No. 12, st.323, Boeung Kak 2, Toul Kork, Phnom Penh,{" "}
                  </p>
                  <p> Cambodia </p>
                </div>
              </div>
              <div>
                <p className="texr-xs font-bold m-1">Founded</p>
                <div className="border border-gray-500 h-14 w-80">
                  <p className="text-xs content-center mb-0.5 ">
                    {" "}
                    Bitgert was founded in 2005, and has since established
                    itself as a prominent player in the technology sector.
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold m-1">Description </p>
                <div className=" border border-gray-500  w-80 rounded-[20px] p-3 ">
                  <p className="text-xs  content-center leading-5 h-44 mb-0.5">
                    The Bitgert ecosystem is currently based on the Binance
                    Smart Chain (BSC); however, they have developed their own
                    blockchain, which claims to handle over 100,000 transactions
                    per second with zero cost per transaction. Bitgert claims
                    that its blockchain has processed over 4 million
                    transactions, and its ecosystem has had a cumulative 350,000
                    users since inception.
                  </p>
                </div>
              </div>
              <div className="flex mt-2 ml-36">
                <button className="w-20 h-6 bg-[#B6B6B6] mr-4 rounded-[20px] hover:bg-green-200 text-xs">
                  Cancel
                </button>
                <button className="w-20 h-6 bg-[#04AA9C] rounded-[20px] hover:bg-yellow-400 text-xs">
                  {" "}
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
