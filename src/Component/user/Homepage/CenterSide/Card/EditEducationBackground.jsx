import React, { useRef } from "react";
import plus from "../../../../../assets/plusIcon.svg";
import done from "../../../../../assets/done.svg";
import { useEffect } from "react";
import { useState } from "react";
import { UserProfile } from "../../../../../Redux/service/UserProfile";
import { DropShadow } from "../../../../../utils/Style";

export default function EditEducationBackground({ setUser, user }) {
  const [userEducation, setUserEducation] = useState({});
  const [userSkill, setUserSkill] = useState({});
  const [userExperience, setUserExperience] = useState({
    position: "",
    year: "",
    description: "",
  });
  const [isElementVisible, setElementVisible] = useState(false);
  const [isVisibleSkill, setVisibleSkill] = useState(false);
  const [isVisibleExperience, setVisibleExperience] = useState(false);
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const [edu, setEdu] = useState(new Date().getUTCMilliseconds());
  const [exp, setExp] = useState(new Date().getUTCMilliseconds());
  const [skill, setSkill] = useState(new Date().getUTCMilliseconds());
  const [des, setDes] = useState([]);
  const [Alldes, setAllDes] = useState([]);
  const [deletName, setDeleteName] = useState();
  useEffect(() => {
    if (isElementVisible && inputRef.current) {
      inputRef.current.focus();
    }
    if (isVisibleSkill && inputRef1.current) {
      inputRef1.current.focus();
    }
    if (isVisibleExperience && inputRef2.current) {
      inputRef2.current.focus();
    }
  }, []);
  const inputEdu = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      education: { ...user.education, ...userEducation, [name]: value },
    });
    setEdu(new Date().getUTCMilliseconds());
    setElementVisible(false);
  };
  const inputEduInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserEducation({
      ...userEducation,
      [name]: value,
    });
  };
  const inputSkill = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, skill: { ...user.skill, ...userSkill, [name]: value } });
    setSkill(new Date().getUTCMilliseconds());
    setVisibleSkill(false);
  };
  const inputSkillInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserSkill({
      ...userSkill,
      [name]: value,
    });
  };

  const [stateExperience, setStateExperience] = useState(true);
  const [temUser, setTemUser] = useState([]);
  const [checkadd, setCheckadd] = useState(true);
  useEffect(() => {
    if(checkadd)setTemUser(Object.entries(user.experience?user.experience:{}));
  }, [user]);

  const inputExperience = (e) => {
    setCheckadd(false);
    const name = e.target.name;
    const value = e.target.value;
 
    const test = temUser.map((item, index) => {
     
      if (index === name * 1) {
        return [value, item[1]];
      } else {
        return item;
      }
    });
    setTemUser(test);
    setUser({ ...user, experience: Object.fromEntries(test) });
    // setVisibleExperience(false);
    // if (des) {
    //     ...user,
    //     experience: {
    //       ...user.experience,
    //       [userExperience.position + userExperience.year]: Alldes, [name]: value
    //     },
    //   })
    //   setExp(new Date().getUTCMilliseconds());

    // }
  };
  const inputExperienceInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
      setUserExperience({
        ...userExperience,
        [name]: value,
      });
  };

  const inputDes = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const data = e.target.attributes.getNamedItem("data-set").value;
    const test = temUser.map((item, index) => {
      if (index === name * 1) {
        return [
          item[0],
          item[1].map((item1, index1) =>
            index1 === data * 1 ? { description: value } : item1
          ),
        ];
      } else {
        return item;
      }
    });
    // console.log("testtttttttttttt",test);
    setTemUser(test);
    setUser({ ...user, experience: Object.fromEntries(test) });
    setExp(new Date().getUTCMilliseconds());
    setVisibleExperience(false);
  };

  const inputDesInput = (e) => {
    console.log("vvvvvvvvvvvvvvv ",e);
    const name = e.target.name;
    const value = e.target.value;
    if (e.target && e.target.value !== null) {
      setDes({
        ...des,
        [name]: value,
      });
    }
    // setDes({
    //   ...des,
    //   [name]: value,
    // });
  };

  const btnDoneEducation = (e) => {
    setUser({ ...user, education: { ...user.education, ...userEducation } });
    console.log("userrrrrrrrrrrr", user);
    setEdu(new Date().getUTCMilliseconds());
    setElementVisible(false);
  };
  const btnDoneSkill = (e) => {
    setUser({ ...user, skill: { ...user.skill, ...userSkill } });
    setSkill(new Date().getUTCMilliseconds());
    setVisibleSkill(false);
  };
  const btnDoneExperience = (e) => {
    setCheckadd(true);
    console.log({
      ...user,
      experience: {
        ...user.experience,
        [userExperience.position +" "+ userExperience.year]: Alldes,
      },
    });
    setUser({
      ...user,
      experience: {
        ...user.experience,
        [userExperience.position +`${" "}`+ userExperience.year]: Alldes,
      },
    });
    console.log({
        ...user.experience
      },"sokreach")
      console.log({[userExperience.position +`${" "}`+ userExperience.year]: Alldes},"sokreach")
    setExp(new Date().getUTCMilliseconds());
    setVisibleExperience(false);
    setDes("");
    setAllDes([]);
  };

  const btnDes = (e) => {
    const descriptionValue = inputRef2.current.value;
    inputRef2.current.value = "";
    // setAllDes([...Alldes, des]);
    setAllDes((prevAlldes) => [...prevAlldes, { description: descriptionValue }]);
    setDes("");
  };

  const handleEditEduInfo = (e) => {
    var inputLength = document.getElementsByClassName("edu-info").length;
    for (var i = 0; i < inputLength; i++) {
      document
        .getElementsByClassName("edu-info")
        [i].removeAttribute("disabled");
      document.getElementsByClassName("edu-info")[i].focus();
    }
  };

  const handleEditSkillInfo = (e) => {
    var inputLength = document.getElementsByClassName("skill-info").length;
    for (var i = 0; i < inputLength; i++) {
      document
        .getElementsByClassName("skill-info")
        [i].removeAttribute("disabled");
      document.getElementsByClassName("skill-info")[i].focus();
    }
  };

  const handleEditExpInfo = (e) => {
    setStateExperience(false);
    var inputLength = document.getElementsByClassName("exp-info").length;
    var inputLengthDes = document.getElementsByClassName("des-info").length;
    for (var i = 0; i < inputLength; i++) {
      document
        .getElementsByClassName("exp-info")
        [i].removeAttribute("disabled");
      document.getElementsByClassName("exp-info")[i].focus();
    }
    for (var i = 0; i < inputLengthDes; i++) {
      document
        .getElementsByClassName("des-info")
        [i].removeAttribute("disabled");
      document.getElementsByClassName("des-info")[i].focus();
    }
  };
  const handleFocus = (event) => {
    event.target.style.outline = "none";
    event.target.style.border = "none";
  };

  return (
    <div>
      <div className={``}>
        <div className="pt-2">
          <div className="py-1">
            <div
              className={`${DropShadow} border fonFt-SecondaryFont rounded-[10px]`}
            >
              <div className="flex justify-between border-b-2">
                <h1 className="font-SecondaryFont font-semibold px-3 text-green_custom py-2">
                  Education
                </h1>
                <button onClick={handleEditEduInfo}>
                  <svg
                    className="text-green_custom"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <path
                      d="M26.8617 14.4867L28.5492 12.7992C29.2814 12.0669 30.4686 12.0669 31.2008 12.7992C31.9331 13.5314 31.9331 14.7186 31.2008 15.4508L20.5822 26.0695C20.0535 26.5981 19.4014 26.9868 18.6849 27.2002L16 28L16.7998 25.3151C17.0132 24.5986 17.4018 23.9465 17.9305 23.4178L26.8617 14.4867ZM26.8617 14.4867L29.5 17.125M28 24V28.75C28 29.9926 26.9926 31 25.75 31H15.25C14.0074 31 13 29.9926 13 28.75V18.25C13 17.0074 14.0074 16 15.25 16H20"
                      stroke="#0F172A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <ul className="list-disc px-7 text-[13px] py-2">
                {user.education &&
                  Object.entries(user.education).map(([key, value]) => (
                    <li key={key} id="dropdown" className="">
                      <div className="w-full">
                        <input
                          type="text"
                          className="edu-info px-0 w-full focus:outline-0 focus:border-none focus:ring-0 border-none text-[14px] py-0"
                          disabled
                          name={`${key}`}
                          onChange={inputEdu}
                          defaultValue={value}
                          onFocus={handleFocus}
                        />
                      </div>
                    </li>
                  ))}
              </ul>

              {isElementVisible && (
                <div className="flex justify-evenly mb-2">
                  <input
                    onChange={inputEduInput}
                    ref={inputRef}
                    type="text"
                    name={`Education${edu}`}
                    id=""
                    placeholder="Enter education here..."
                    className="w-5/6 py-1 h-7 text-[14px] font-SecondaryFont font-medium border-none focus:underline focus:underline-offset-8 focus:ring-0 focus:ring-border-b"
                  />
                  <div className="">
                    <button
                      onClick={btnDoneEducation}
                      className="px-5 py-1 rounded-[20px] text-white font-semibold text-xs bg-green_custom"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}

              <div className="flex items-center content-center justify-center border-t">
                <button onClick={() => setElementVisible(true)}>
                  <img src={plus} className="w-7" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="py-1">
            <div className={`${DropShadow} border rounded-[10px]`}>
              <div className="flex justify-between border-b-2 ">
                <h1 className="font-MainFont font-semibold text-green_custom py-2 px-3">
                  Skills
                </h1>
                <button onClick={handleEditSkillInfo}>
                  <svg
                    className="text-green_custom"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <path
                      d="M26.8617 14.4867L28.5492 12.7992C29.2814 12.0669 30.4686 12.0669 31.2008 12.7992C31.9331 13.5314 31.9331 14.7186 31.2008 15.4508L20.5822 26.0695C20.0535 26.5981 19.4014 26.9868 18.6849 27.2002L16 28L16.7998 25.3151C17.0132 24.5986 17.4018 23.9465 17.9305 23.4178L26.8617 14.4867ZM26.8617 14.4867L29.5 17.125M28 24V28.75C28 29.9926 26.9926 31 25.75 31H15.25C14.0074 31 13 29.9926 13 28.75V18.25C13 17.0074 14.0074 16 15.25 16H20"
                      stroke="#0F172A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <ul className="list-disc px-7 text-[13px] py-2">
                {user.skill &&
                  Object.entries(user.skill).map(([key, value]) => (
                    <li key={key} className=" ">
                      <input
                        className="skill-info px-0 w-full focus:outline-0 focus:border-none focus:ring-0 border-none text-[14px] py-0"
                        type="text"
                        disabled
                        name={`${key}`}
                        onChange={inputSkill}
                        onFocus={handleFocus}
                        id=""
                        defaultValue={value}
                      />
                    </li>
                  ))}
              </ul>
              {isVisibleSkill && (
                <div className="flex justify-evenly mb-2">
                  <input
                    onChange={inputSkillInput}
                    ref={inputRef1}
                    type="text"
                    name={`Skill${skill}`}
                    id=""
                    placeholder="Enter skill here..."
                    className="w-5/6 py-1 h-7 text-[13px] font-SecondaryFont font-medium border-none focus:underline focus:underline-offset-8 focus:ring-0 focus:ring-border-b"
                  />
                  <div className="">
                    <button
                      onClick={btnDoneSkill}
                      className="px-5 py-1 rounded-[20px] text-white font-semibold text-xs bg-green_custom"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
              <div className="flex items-center content-center justify-center border-t">
                <button onClick={() => setVisibleSkill(true)}>
                  <img src={plus} className=" w-7" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="py-1">
            <div className={`${DropShadow} border rounded-[10px]`}>
              <div className="flex justify-between border-b-2 ">
                <h1 className="font-MainFont font-semibold text-green_custom py-2 px-3">
                  Experience
                </h1>
                <button onClick={handleEditExpInfo}>
                  <svg
                    className="text-green_custom"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 44 44"
                    fill="none"
                  >
                    <path
                      d="M26.8617 14.4867L28.5492 12.7992C29.2814 12.0669 30.4686 12.0669 31.2008 12.7992C31.9331 13.5314 31.9331 14.7186 31.2008 15.4508L20.5822 26.0695C20.0535 26.5981 19.4014 26.9868 18.6849 27.2002L16 28L16.7998 25.3151C17.0132 24.5986 17.4018 23.9465 17.9305 23.4178L26.8617 14.4867ZM26.8617 14.4867L29.5 17.125M28 24V28.75C28 29.9926 26.9926 31 25.75 31H15.25C14.0074 31 13 29.9926 13 28.75V18.25C13 17.0074 14.0074 16 15.25 16H20"
                      stroke="#0F172A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <ul className="list-none font-semibold text-[13px] py-1">
                {user.experience &&
                  temUser.map((value, key) => (
                    <li key={key} className=" ">
                      <input
                        className="exp-info w-full focus:outline-0 focus:border-none focus:ring-0 border-none text-[14px] py-0"
                        disabled={stateExperience}
                        onChange={inputExperience}
                        onFocus={handleFocus}
                        defaultValue={value[0]}
                        type="text"
                        name={`${key}`}
                        id=""
                      />
                      <ul className="list-disc px-7 text-[13px] py-1">
                        {value[1] &&
                          Array.isArray(value[1]) &&
                          value[1].length>0 && value[1].map((val, key1) => (

                            <li className="font-normal">
                              <input
                                //  style={{ wordBreak: 'break-all' }}
                                className="des-info px-0 w-full focus:outline-0 focus:border-none focus:ring-0 border-none text-[13px] py-0"
                                disabled
                                name={`${key}`}
                                data-set={key1}
                                onChange={inputDes}
                                onFocus={handleFocus}
                                defaultValue={val.description}
                                type="text"
                                id=""
                              />
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
              </ul>
              {isVisibleExperience && (
                <div className="mb-2 px-7">
                  <div className="">
                    <label htmlFor="" className="text-sm font-medium">
                      Position :{" "}
                    </label>
                    <input
                      onChange={inputExperienceInput}
                      ref={inputRef2}
                      type="text"
                      name="position"
                      id=""
                      placeholder="Enter position here..."
                      className="w-4/6 py-1 h-7 text-[13px] border-none focus:underline focus:underline-offset-8 focus:ring-0 focus:ring-border-b"
                    />
                    <br></br>
                    <label htmlFor="" className="text-sm font-medium">
                      Year :{" "}
                    </label>
                    <input
                      onChange={inputExperienceInput}
                      ref={inputRef2}
                      type="text"
                      name={`year`}
                      id=""
                      placeholder="Enter duration here..."
                      className=" py-1 h-7 text-[13px] border-none focus:underline focus:underline-offset-8 focus:ring-0 focus:ring-border-b"
                    />
                    <div className="flex justify-between w-full">
                      <div className="">
                        <label htmlFor="" className="text-xs font-medium">
                          Description :
                        </label>
                        <ul className=" list-disc font-normal">
                          {Alldes.map((res) => (
                            <div className="ml-24">
                              {" "}
                              <li className="">
                                <input
                                  // onChange={inputDes}
                                  disabled
                                  className="w-full focus:outline-0 focus:border-none focus:ring-0 border-none text-[13px] py-0"
                                  type="text"
                                  defaultValue={res.description}
                                />
                              </li>
                            </div>
                          ))}
                        </ul>
                        <input
                          onChange={inputDesInput}
                          ref={inputRef2}
                          type="text"
                          name={`description`}
                          id=""
                          placeholder="Enter description here..."
                          className="ml-20 py-1 h-7 text-[13px] border-none focus:underline focus:underline-offset-8 focus:ring-0 focus:ring-border-b"
                        />
                      </div>
                      <button onClick={btnDes} className="grid content-end ">
                        <img
                          src={done}
                          className="w-8 rounded-[20px] border hover:bg-hover_green_custo"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>

                  <div className="grid content-end justify-center border-t-2">
                    <button
                      onClick={btnDoneExperience}
                      className="px-5 w-24 h-6 mt-2 py-1 rounded-[20px] text-white font-semibold text-xs bg-green_custom"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}
              <div className="flex items-center content-center justify-center border-t">
                <button onClick={() => setVisibleExperience(true)}>
                  <img src={plus} className=" w-7" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
