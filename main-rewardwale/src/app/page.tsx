"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
  const groupImageUrl = "/Group 2496.png";
  const [otpEntered, setOtpEntered] = useState(false);

  const handleOtpChange = (e) => {
    if (e.target.value.length === 6) {
      setOtpEntered(true);
    } else {
      setOtpEntered(false);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen overflow-hidden bg-[#F0F3FC] 2xl:w-full ">
      {/* Left Section */}
      <div className="md:w-[50%] h-[770px] flex flex-col justify-between bg-white">
        <div className="flex justify-center items-center mt-6">
          <img
            src="/Frame.svg"
            alt="Logo"
            className="w-52 mx-auto my-10 md:mx-[230px] md:mt-[20px] "
          />
          <Image
            src={groupImageUrl}
            alt="Vector"
            width={48}
            height={4}
            className="ml-auto"
          />
        </div>

        {/* Carousel */}
        <Slider {...settings} className="w-full">   
          <div>
            <Image
              src="/main.svg"
              alt="Main"
              width={280}
              height={324}
              className="mb-[4px] max-w-[280px] md:max-w-[540px] mx-auto xl:mx-[200px]"
            />
            <div className="text-center font-serif text-2xl mt-[10px]">
              <p className="mb-[12px]">
                Share your thoughts on products, services, and experiences
              </p>
            </div>
          </div>

          <div>
            <Image
              src="/main2.svg"
              alt="Main 2"
              width={280}
              height={324}
              className="mb-[4px] max-w-[280px] md:max-w-[540px] mx-auto xl:mx-[200px]"
            />
            <div className="text-center font-serif text-2xl mt-[10px]">
              <p className="mb-[12px]">
                Keep Track of your wallet balance in real time
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/main3.svg"
              alt="Main 2"
              width={280}
              height={324}
              className="mb-[4px] max-w-[280px] md:max-w-[540px] mx-auto xl:mx-[200px]"
            />
            <div className="text-center font-serif text-2xl mt-[10px]">
              <p className="mb-[12px]">
              Engage & earn exciting rewards
              </p>
            </div>
          </div>
        </Slider>

        <div className="flex items-center">
          <Image
            src="/Vector 13.svg"
            alt="Image"
            layout="responsive"
            width={800}
            height={10}
            className="cursor-pointer"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-[50%] mt-[50px] flex justify-center items-center  ">
        <div className="w-full md:w-auto">
          <div className="flex flex-col justify-center items-center md:items-start md:ml-[100px] mb-16">
            <h1 className="text-2xl font-custom ml-[60px] font-bold text-center md:text-center">
              Login to Account
            </h1>
            <h1 className="text-1xl font-bold text-center md:text-center">
              Enter your credentials to access your account
            </h1>
            <br />
            <div className="mb-8">
              <h3 className="text-center md:text-left">Enter Mobile No.</h3>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                pattern="[0-9]{10}"
                maxLength={13}
                placeholder="+91"
                required
                className="h-12 rounded-lg border border-gray-300 px-4"
              />
            </div>
            <div className="mb-8">
              <h3 className="text-center md:text-left">Enter OTP</h3>
              <input
                type="tel"
                id="otp"
                name="otp"
                pattern="[0-9]{6}"
                maxLength={6}
                placeholder="Enter OTP"
                required
                className="h-12 rounded-lg border border-gray-300 px-4"
                onChange={handleOtpChange}
              />
            </div>
            <div className="flex justify-center">
              <button
                className={`h-12 w-full md:w-60 rounded-lg text-white font-semibold ${
                  otpEntered ? "bg-purple-400" : "bg-purple-300"
                }`}
              >
                {otpEntered ? "Verify OTP" : "Get OTP"}
              </button>
            </div>
            <div className="flex justify-center mt-8 ml-12">
              <h1 className="text-black-600 cursor-pointer underline">
                Continue to User
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
