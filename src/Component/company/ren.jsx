import React from "react";
import Add from "../../assets/Add.png";
import detelte from "../../assets/delete.png";
import { useState } from "react";

export default function AddAnouncement() {
    const Input = (id) => {
        return 0
      
      };
    const detelt=(id)=>{
      console.log(id)
      const newPeople = inputList.filter((state,index) => index!=id-1);
      console.log(newPeople)
      setInputList(newPeople);
    }
    const deteltes=(id)=>{
      console.log(id)
      const newPeople = input.filter((state,index) => index!=id-1);
      console.log(newPeople)
      setInput(newPeople);
    }
        const [inputList, setInputList] = useState([]);
        const [input, setInput] = useState([]);
      const onAddBtnClick = event => {
        setInputList(inputList.concat(1));
        console.log(inputList)
      };
      const onAddBtnLeft = event => {
        setInput(input.concat(1));
        console.log(input)
      };
  return (
    <div className="h-[100vh]  Roboto">
      {/* The button to open modal */}
      <label htmlFor="my-modal-3"  className="btn ">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-2xl  h-[530px] ">
          <label htmlFor="my-modal-3" className=" absolute right-5 top-6">
            ✕
          </label>

          <h3 className=" text-lg font-bold  text-center">
            Create Announcement
          </h3>
          <hr className="w-full size-2 bg-gray-600 mt-2  " />

          <div className="grid grid-cols-3  mt-2" style={{ gridTemplateColumns: "49.9% 0.1% 4998%"}}>
            {/* part left */}
            <div>
              <div>
                <label htmlFor="" className="text-sm ml-3 font-bold mt-3">
                  Title
                </label>
                <br />
                <input
                  type="text"
                  className="annountmentInput border-gray-400 mb-2"
                  placeholder="Title"
                  name=""
                  id=""
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm ml-3 font-bold mt-3 ">
                  Type
                </label>
                <br />
                <select className="annountmentInput text-xs border-gray-400   ">
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
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-sm ml-3 font-bold mt-4">
                  Location
                </label>
                <br />
                <select className="annountmentInput text-xs border-gray-400 mt-1 ">
                  <option
                    disabled
                    selected
                    className="flex justify-center items-center text-xs"
                  >
                    Technology
                  </option>
                  <option>Phnom Penh</option>
                  <option>Kandal</option>
                  <option>Kompot</option>
                </select>
                <br></br>
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-sm ml-3 font-bold mt-4">
                  Qualifications
                </label>
                <br />
                <textarea
                  rows="2"
                  cols="50"
                  className="w-72 rounded-lg text-xs"
                  name="comment"
                  form="usrform"
                >
                  Enter text here...
                </textarea>
                
              </div>
              <div>
                {input.map((e,i)=>(
                   <div >
                   <textarea 
                 rows="2"
                 cols="50"
                 className="flex w-72 rounded-lg text-xs mt-6"
                 name="comment"
                 form="usrform"
               >
                Enter Please
               </textarea>
              
               <img src={detelte} onClick={()=>deteltes(e)} className="w-4 absolute left-72 mt-1 " alt="" />
               </div>
                ))}
                </div>
              <div className="grid grid-cols-3 gap-10 mt-3  ">
               <div></div>
               
                <img src={Add}  onClick={onAddBtnLeft}  className=" w-6 mt-2 " />
                
                
                {/* <img src={detelte} className="w-6 ml-8 " alt="" /> */}
                
              </div>
              
            </div>


            {/* center */}
            <div className="h-full bg-black">

            </div>

            {/* part right */}
            <div className="ml-4">
              <div>
                <label htmlFor="" className="text-sm ml-3 font-bold mt-3 w-36">
                  Salary Rang($){" "}
                </label>
                <br />
                <input
                  type="text"
                  className="annountmentInput border-gray-400 mb-2"
                  placeholder="Title"
                  name=""
                  id=""
                />
              </div>
              <div>
                <label htmlFor="" className="text-sm ml-3 font-bold ">
                  Experience (Year1)
                </label>
                <br />
                <select className="annountmentInput text-xs border-gray-400 mt-1 ">
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
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-sm ml-3 font-bold ">
                  Work Term
                </label>
                <br />
                <select className="annountmentInput text-xs border-gray-400 mt-1 ">
                  <option className="flex justify-center items-center text-xs">
                    Full Time
                  </option>
                  <option>Part Time</option>
                </select>
                <br></br>
              </div>
              <div className="Roboto mt-1">
                <label htmlFor="" className="text-sm ml-3 mt-2 font-bold ">
                Requirements and Skills{" "}
                </label>
                <br />
                <textarea
                  rows="2"
                  cols="50"
                  className="w-72 rounded-lg text-xs"
                  name="comment"
                  form="usrform"
                >
                  Bachelor's degree in computer sciences, technology or related
                  fields
                </textarea>
              </div>
              <div>
                <textarea
                  rows="2"
                  cols="50"
                  className="w-72 rounded-lg text-xs mt-2"
                  name="comment"
                  form="usrform"
                >
                  Prior work experience as an IT manager or in a related
                  position.
                </textarea>
                <div>
                {inputList.map((e,i)=>(
                   <div >
                   <textarea 
                 rows="2"
                 cols="50"
                 className="flex w-72 rounded-lg text-xs mt-4"
                 name="comment"
                 form="usrform"
               >
                Enter Please
               </textarea>
              
               <img src={detelte} onClick={()=>detelt(e)} className="w-4 absolute right-0 -mt-4" alt="" />
               </div>
                ))}
                </div>
              </div>
                <div className="">
                <img src={Add} className="w-6 flex mt-2 ml-32 " onClick={onAddBtnClick}  alt="" />
                
                </div>
             
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}