"use client";
import Image from "next/image";
import React, { useState } from "react";
import PhoneInput, { CountryData } from "react-phone-input-2";
import Swal from "sweetalert2";

export default function Home() {
  const groupImageUrl = "/Group 2496.png";
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setcountryCode] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [phoneNumberEntered, setPhoneNumberEntered] = useState(false); 
  const [otpEntered, setOtpEntered] = useState(false); 
  const [otp, setOtp] = useState(""); 
  const isCountryData = (obj: any): obj is CountryData => {
    return "dialCode" in obj;
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(e.target.value);
    setOtpEntered(e.target.value.length > 0); 
  };

  const handleGetOtpClick = () => {
   
    console.log("OTP:", otp);
  };

  const handlePhoneNumberChange = (
    inputValue: string,
    country: {} | CountryData
  ) => {
    if (!isCountryData(country)) {
      return Swal.fire({
        title: "Country Code Error",
        text: "Country code is not right.",
      });
    }
    setPhoneNumber(inputValue);
    setcountryCode(country.dialCode);

    setIsValid(phoneNumber.length >= 11);
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div className="hidden md:flex mr-auto w-[50%] flex-col justify-between bg-white">
        <div className="flex justify-center items-center mt-6">
          <img
            src="/logomain.svg"
            alt="Logo"
            className="w-52 ml-[275px] mt-[90px]"
          />

          <img
            src={groupImageUrl}
            alt="Vector"
            className="w-12 h-4px max-w-xs mt-[87px] ml-auto"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={groupImageUrl}
            alt="Vector"
            className="w-12 h-4px max-w-xs mt-[140px] mr-auto"
          />
          <img
            src="/main.png"
            alt="Main"
            className="w-[420px] mt-[36px] item-center mr-[180px]"
          />
        </div>
        <div className="flex items-center">
          <img
            src="/Vector 13.svg"
            alt="Image"
            className="w-full max-w-screen-lg h-200 cursor-pointer"
          />
        </div>
      </div>

      <div className="hidden md:flex justify-center items-center w-[50%]">
      <div className="w-full">
        <div className="flex justify-center items-center mb-300px">
          <h1 className="text-2xl  font-custom font-bold">
            Login to Account
          </h1>
        </div>
        <div className="flex justify-center items-center mb-350px">
          <h1 className="text-1xl font-bold">
            Enter your credentials to access your account
          </h1>
        </div>
        <div className="flex justify-center items-center mb-4">
          <h3>{phoneNumberEntered ? "Enter" : ""} Phone No.</h3>
          <>
            <PhoneInput
              country={"in"}
              enableSearch={true}
              value={phoneNumber}
              onChange={(value, country) =>
                handlePhoneNumberChange(value, country)
              }
              inputStyle={{ width: "100%", height: "70%" }}
            />
          </>
        </div>
        {phoneNumberEntered && (
          <div className="flex justify-center items-center mb-4">
            <h3>Enter OTP</h3>
            <input
              type="text"
              value={otp}
              onChange={handleOtpChange}
              className="border border-gray-300 rounded-md px-3 py-1 ml-2"
            />
            <button
              className={`ml-2 px-4 py-2 rounded-md ${
                otpEntered ? "bg-purple-600 text-white" : "bg-purple-300"
              }`}
              onClick={handleGetOtpClick}
            >
              {otpEntered ? "Get OTP" : "Enter OTP"}
            </button>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}
