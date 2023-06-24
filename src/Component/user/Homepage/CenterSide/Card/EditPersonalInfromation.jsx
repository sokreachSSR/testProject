import React, { useEffect, useState } from "react";
import { UserProfile } from "../../../../../Redux/service/UserProfile";

export default function EditPersonalInfromation({change, value, setUser, user, phone, setPhone}){

  // validate phone number

  const handleOnchange = (e) => {
    const inputValue = e.target.value;
    // console.log("lkjhgf",{...user},{[e.target.name]: inputValue})
    setUser({
      ...user,
      [e.target.name]: inputValue ,
    });
    console.log(e.target.value);
    // console.log("=>", user);
  };
  const handleChange =(e)=>{
    const inputValue = e.target.value;
    setUser({
      ...user,
      [e.target.name]: inputValue ,
    });
    setPhone(inputValue === '' || inputValue.match(/^[0-9]{3} [0-9]{3} [0-9]{3}$/));
    console.log("Phone", user);
  }
    
  console.log("Userrrrrrrrrrrrrrrrrrrrr", user.jobType);

  useEffect(() => {

    UserProfile().then((response) => {
      if (response.data.payload.jobType === null){}
        // setUser({ ...response.data.payload, jobType: "Accounting" });
      // else setUser(response.data.payload);
    });
  }, []);

  return (
    <div className="w-full">
      <div className="">
        <div className="py-1">
          <h1
            for="jobType"
            className="font-SecondaryFont font-semibold text-green_custom py-1"
          >
            Job type
          </h1>
          <select
            onChange={handleOnchange}
            name="jobType"
            id="jobType"
            className="w-full capitalize focus:ring-green_custom focus:border-green_custom rounded-3xl text-black"
            value={user.jobType?user.jobType.replace(" ","_"):"Accounting"}
            // defaultValue={user.jobType.replace(" ","_") }
          >
            {/* <option value="" >Select Job type</option> */}
            <option value="Accounting">Accounting</option>
            <option value="Administration">Administration</option>
            <option value="Advertising">Advertising</option>
            <option value="Architecture">Architecture</option>
            <option value="Audit">Audit</option>
            <option value="Banking">Banking</option>
            <option value="Cashier">Cashier</option>
            <option value="Design">Design</option>
            <option value="Education">Education</option>
            <option value="Engineering">Engineering</option>
            <option value="Finance">Finance</option>
            <option value="Health">Health</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Human_Resource">Human Resource</option>
            <option value="Information_Technology">
              Information Technology
            </option>
            <option value="Insurance">Insurance</option>
            <option value="Legal_Service">Legal Service</option>
            <option value="Management">Management</option>
            <option value="Media">Media</option>
            <option value="Project_Management">Project Management</option>
            <option value="Receptionist">Receptionist</option>
            <option value="Sales">Sales</option>
            <option value="Taxation">Taxation</option>
            <option value="Technician">Technician</option>
            <option value="Training">Training</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="py-1">
          <h1 className="font-SecondaryFont font-semibold text-green_custom py-1">
            Phone
          </h1>
          <input
            type="tel"
            onChange={handleChange}
            className={`w-full focus:ring-green_custom focus:border-green_custom rounded-3xl h-[40px] text-black ${
              !phone ? "border-red-500" : ""
            }`}
            name="phoneNumber"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
            placeholder="012 345 678"
            defaultValue={user.phoneNumber}
          />
          {!phone && (
            <p className="text-red-500 text-sm mt-1">
              Invalid phone number! Please enter like this example 012 345 678.
            </p>
          )}
        </div>
        <div className="py-1">
          <h1 className="font-SecondaryFont font-semibold text-green_custom py-1">
            Description
          </h1>
          <input
            type="text"
            className="w-full focus:ring-green_custom focus:border-green_custom rounded-3xl h-[40px] text-black"
            name="description"
            onChange={handleOnchange}
            id=""
            placeholder="Bio..."
            value={user.description}
          />
        </div>
        <div className="py-1">
          <h1 className="font-SecondaryFont font-semibold text-green_custom py-1">
            Address
          </h1>
          <input
            type="text"
            className="w-full focus:ring-green_custom focus:border-green_custom rounded-3xl h-[40px] text-black"
            name="address"
            onChange={handleOnchange}
            id=""
            value={user.address}
            placeholder="No. 12, st.323, Boeung Kak 2, Toul Kork, Phnom..."
          />
        </div>
      </div>
    </div>
  );
}
