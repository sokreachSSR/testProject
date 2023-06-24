import React, { useEffect, useState } from "react";
import company from "../../assets/edit_company.png";
import camera from "../../assets/camera.png";
import profile from "../../assets/Profile.png";
import {
  EditCompanyDetailProfile,
  uploadCompanyCover,
  uploadCompanyProfile,
} from "../../Redux/service/CompanyProfile";
import { useDispatch, useSelector } from "react-redux";
import pencil from "../../assets/pencil.svg";
import { useRef } from "react";
import { BASE_URL1 } from "../../utils/Utils";
import LoadingComponentBtn from "../othersComponent/LoadingComponentBtn";
import { setLoading } from "../../Redux/slices/LoadingSlice";
import { setUserDetail } from "../../Redux/slices/userDetailSlide";
import { UserProfile } from "../../Redux/service/UserProfile";
import { useNavigate } from "react-router-dom";

export default function EditProfile_Company({ comName }) {
  const companyDetail1 = useSelector(
    (state) => state.companyDetail.company_detail
  );
  const imgReff = useRef();
  const imgReff1 = useRef();
  const [previewUrl, setPreviewUrl] = useState("");
  const [postImage, setpostImage] = useState();
  const [cover, setCover] = useState();
  const addpost = () => { };
  const [selectedCompanyType, setSelectedCompanyType] = useState("");
  const [companyDetail, setCompanyDetail] = useState({});
  // console.log("hello", { phoneNumber: companyDetail1.phoneNumber });
  const [previewCover, setPreviewCover] = useState("");
  // console.log("profil", companyDetail);
  const Loading = useSelector((state) => state.loading.value);
  const dispatch = useDispatch();
  const [isValidPhone, setIsValidPhone] = useState(true);
  const navigate = useNavigate();
  const handleSubmit = () => {
    EditCompanyDetailProfile(companyDetail).then((res1) => {
      if (previewUrl != "") {
        uploadCompanyProfile(postImage).then((res2) => {
          
        }).catch((error) => {
          console.log(error);
        });
      }
      if (previewCover != "") {
        // console.log("c : ", previewCover);
        uploadCompanyCover(cover).then((res3) => {
         
        }).catch((error) => {
          console.log(error);
        });
      }
      navigate("/")

    }).catch((error) => {
      console.log(error);
    });




  };

  const handleImageUpload = (event) => {
    const fileName = event.target.files[0];
    setpostImage(fileName);
    setCompanyDetail({ ...companyDetail, profileImage: fileName });
    console.log("profile", fileName);

    if (fileName) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(fileName);
    }
  };

  const handleImageCover = (event) => {
    const fileName = event.target.files[0];
    setCover(fileName);
    setCompanyDetail({ ...companyDetail, coverImage: fileName });
    console.log("cover", fileName);
    if (fileName) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewCover(reader.result);
      };
      reader.readAsDataURL(fileName);
    }
  };
  const handleClick = () => {
    imgReff1.current.click();
  };
  const handleClick1 = () => {
    imgReff.current.click();
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setCompanyDetail({ ...companyDetail, [inputName]: inputValue });

  };
  const handleChangePh = (e) => {
    const inputValue = e.target.value;
    const inputName = e.target.name;
    setCompanyDetail({ ...companyDetail, [inputName]: inputValue });
    setIsValidPhone(
      inputValue === "" || inputValue.match(/^[0-9]{3} [0-9]{3} [0-9]{3}$/)
    );
  };
  const handleCompanyType = (event) => {
    const { name, value } = event.target;
    setCompanyDetail({ ...companyDetail, [name]: companyDetail1.companyType });
  };
  useEffect(() => {
    setCompanyDetail({
      phoneNumber: companyDetail1.phoneNumber,
      email: companyDetail1.email,
      address: companyDetail1.address,
      founded: companyDetail1.founded,
      description: companyDetail1.description,
      companyType: companyDetail1.companyType,
      maps: companyDetail1.maps,
    });
  }, [companyDetail1]);
  return (
    <div className="">
      {/* The button to open modal */}
      <label htmlFor="my_modal_4" className="flex justify-between cursor-pointer">
        <img src={pencil} className="w-4" alt="" />
        <p className="w-10 text-gray-600 font-medium">Edit</p>
      </label>

      {/* Put this part before </body> tag */}

      <input type="checkbox" id="my_modal_4" className="modal-toggle" />

      <div className="modal">
        <div
          className="modal-box bg-white"
        // style={{ backgroundColor: "white", maxWidth: "50rem" }}
        >
          <label
            for="my_modal_4"
            class="btn btn-sm btn-circle absolute right-3 top-2 z-30 text-white bg-green_custom border-none hover:bg-hover_green_custom"
          >
            ✕
          </label>
          <div>
            <div className="flex sticky z bg-white items-center rounded-t-[20px] justify-center my-1 pb-2 border-b-2">
              <p className="font-MainFont text-green_custom text-[20px] font-black overscroll-none">
                Edit profile
              </p>
            </div>
            <div className="bg-white  overflow-y-auto">
              {/* <!-- Modal content --> */}
              <div class="items-center">
                {/* flex justify-between  */}
                {/* <!-- Modal header --> */}
                {/* gird1 */}
                <div className="">
                  <div>
                    <div className="relative p-1 mr-1">
                      <div className="relative h-0">
                        <button onClick={addpost}>
                          <img
                            onClick={handleClick1}
                            src={camera}
                            className="absolute top-[150px] right-4 border bg-gray-100 rounded-full p-1 w-6"
                            alt=""
                          />

                          <input
                            ref={imgReff}
                            onChange={handleImageCover}
                            className="hidden"
                            type="file"
                          />
                        </button>
                      </div>
                      <div className="border rounded-t-[20px]">
                        <img
                          src={
                            previewCover
                              ? previewCover
                              : `${BASE_URL1}/api/v1/images/PROFILE?fileName=${companyDetail1.coverImage}`
                          }
                          className="w-full m-auto h-[180px] object-cover rounded-t-[20px]"
                          alt=""
                        />
                      </div>
                      <div className="flex items-start absolute top-32 left-5">
                        <img
                          src={
                            previewUrl
                              ? previewUrl
                              : `${BASE_URL1}/api/v1/images/PROFILE?fileName=${companyDetail1.companyProfile}`
                          }
                          className="w-[100px] object-cover h-[100px] border-gray-300 rounded-full border-[3px] bg-white"
                          alt=""
                        />
                        <button onClick={addpost}>
                          <img
                            onClick={handleClick}
                            src={camera}
                            alt=""
                            className="absolute top-[60px] left-[80px] z-10 border bg-gray-100 rounded-full p-1 w-6"
                          />
                          <input
                            ref={imgReff1}
                            onChange={handleImageUpload}
                            className="hidden"
                            type="file"
                          />
                        </button>
                      </div>
                      <div className="ml-[140px] mt-3">
                        <div>
                          <h1 className="font-SecondaryFont text-left z-10 text-[18px] font-semibold text-black">
                            {comName.companyName}
                          </h1>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      {/* <p className="font-bold  text-base ml-3">Bitgert</p> */}
                      {/* <div className="flex text-xs">
                      <p className="mr-4"> 560 Followers</p>
                      <p>500 Following</p>
                    </div> */}
                    </div>
                  </div>
                  {/* --------form------------ */}
                  <form>
                    <div className="  ">
                      <div className="flex flex-col items-start">
                        <label
                          htmlFor=""
                          className="font-SecondaryFont font-semibold text-green_custom py-1"
                        >
                          Company Type
                        </label>
                        <select
                          name="companyType"
                          className="w-full capitalize font-SecondaryFont focus:ring-green_custom focus:border-green_custom rounded-[20px] text-black"
                          id=""
                          onChange={handleChange}
                          defaultValue={comName.companyType}
                        >
                          <option
                            disabled
                            // selected

                            className="flex justify-center font-SecondaryFont items-center w-full capitalize focus:ring-green_custom focus:border-green_custom rounded-[20px] text-black"
                          >
                            Choose company type
                          </option>
                          <option
                            value="SOFTWARE_DEVELOPEMENT"
                            className="py-1"
                          >
                            Software Development
                          </option>
                          <option value=" FINANCE_AND_BANKING">
                            Finance and Banking
                          </option>
                          <option value="CIVIL_SERVICES">Civil Services</option>
                          <option value="ENGINEERRING">Engineering</option>
                          <option value="ENTERTAINMENT">Entertainment</option>
                          <option value="MANUFACTURING">Manufaturing</option>
                          <option value="TELECOMMUNICATION">
                            Telecommunication
                          </option>
                          <option value="OTHER">Other</option>
                        </select>
                      </div>

                      <div className="flex flex-col items-start mt-2">
                        <label
                          htmlFor=""
                          className="font-SecondaryFont font-semibold text-green_custom py-1 "
                        >
                          phone Number
                        </label>
                        <input
                          type="text"
                          name="phoneNumber"
                          className={`w-full font-SecondaryFont focus:ring-green_custom focus:border-green_custom rounded-3xl h-[40px] text-black ${!isValidPhone ? "border-red-500" : ""
                            }`}
                          placeholder="010 300 323"
                          id="phoneNumber"
                          pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
                          onChange={handleChangePh}
                          defaultValue={comName.phoneNumber}
                        />
                        {!isValidPhone && (
                          <p className="text-red-500 font-SecondaryFont text-xs mt-1">
                            Invalid phone number! Please enter like this example
                            012 345 678.
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col items-start mt-2">
                        <label
                          htmlFor=""
                          className="font-SecondaryFont font-semibold text-green_custom py-1 "
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          className="w-full focus:ring-green_custom font-SecondaryFont focus:border-green_custom rounded-3xl h-[40px] text-black"
                          placeholder="email@gmail.com"
                          id=""
                          onChange={handleChange}
                          defaultValue={comName.email}
                        />
                      </div>
                    </div>
                  </form>
                </div>
                {/* gird2 */}
                <div className="p-1">
                  <div>
                    <p className="font-SecondaryFont text-left font-semibold text-green_custom py-1 ">
                      Address
                    </p>
                    <textarea
                      className="border border-gray-500 h-16 w-full text-xs mb-0.5 rounded-[20px]"
                      onChange={handleChange}
                      name="address"
                      defaultValue={comName.address}
                    ></textarea>
                  </div>
                  <div>
                    <p className="font-SecondaryFont text-left font-semibold text-green_custom py-1 ">
                      Founded
                    </p>
                    <textarea
                      className="border border-gray-500 h-16 w-full text-xs mb-0.5 rounded-[20px]"
                      onChange={handleChange}
                      name="founded"
                      defaultValue={comName.founded}
                    ></textarea>
                  </div>
                  <div>
                    <p className="font-SecondaryFont text-left font-semibold text-green_custom py-1 ">
                      Description
                    </p>
                    <textarea
                      className="text-xs  content-center leading-5 h-44 mb-0.5 border border-gray-500  w-full rounded-[20px] p-3 "
                      onChange={handleChange}
                      name="description"
                      defaultValue={comName.description}
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>

            {/* btn */}
            <div className="flex justify-end mt-2 ml-36 gap-2">
              <button className="border w-24 py-1 rounded-xl bg-gray-100 font-SecondaryFont">
                {/* <div className="modal-action"> */}
                <label htmlFor="my_modal_4">Cancel</label>
                {/* </div> */}
              </button>
              <button
                className="border w-24 py-1 rounded-xl bg-green_custom text-white font-SecondaryFont"
                onClick={handleSubmit}
              >
                {Loading ? <LoadingComponentBtn /> : "Save"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
