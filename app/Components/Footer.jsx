"use client"
import { useState, useRef, useEffect } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";


import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import Link from "next/link";
import { MdOutlineExpandLess, MdOutlineExpandMore } from "react-icons/md";
// import axiosClient from "../axiosClient";
import axios from "../../Utils/axios";
// import Loader from "./Loader"; // Import your loader component
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { usePathname } from "next/navigation";

const SmallLoader = () => (
  <div className="w-5 h-5 border-2 border-white border-dashed rounded-full animate-spin mx-auto"></div>
);

const Footer = () => {
  const quickLinks = [
    { name: "Home", url: "#" },
    { name: "Donation", url: "#" },
    { name: "About Us", url: "#" },
  ];
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isContactOpen, setisContactOpen] = useState(false);
  const [isQuickLinksOpen, setQuickLinksOpen] = useState(false);

  const [amount, setAmount] = useState();
  const [errors, setErrors] = useState({});
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const addressRef = useRef("");
  const donationTypeRef = useRef();
  const currencyTypeRef = useRef();
  const countryRef = useRef();

  const [loading, setLoading] = useState(false);
  const [loadingSub, setLoadingSub] = useState(false);

  const contentData = {
    "/": {
      heading: "Together, We Can Bring Smiles to Those in Need",
      paragraph:
        "Your support fuels everything we do—spreading light, restoring sight, and changing lives.",
    },
    "/about-us/": {
      heading: "Together, We Can Bring Smiles to Those in Need",
      paragraph:
        "Your support fuels everything we do—spreading light, restoring sight, and changing lives.",
    },
    "/academics/": {
      heading: "Together, We Can Bring Smiles to Those in Need",
      paragraph: "Your generosity fuels our mission: Providing aid, hope,",
    },
    "/contact-us/": {
      heading: "Together, We Can Bring Smiles to Those in Need",
      paragraph:
        "Your kindness powers our purpose. Every action you take—whether it’s a donation, a message of support, or spreading awareness—helps us deliver care, compassion, and sight to those who need it most.",
    },
    "/zakat/": {
      heading: "Together, We’re Restoring Hope",
      paragraph:
        "Because of your compassion, we’re able to bring care and comfort to those in need. Every contribution counts—fueling our mission to heal, support, and uplift entire communities with dignity and love.",
    },
    "/donation/": {
      heading: "Together, We Can Bring Smiles to Those in Need",
      paragraph:
        "Your support fuels everything we do—spreading light, restoring sight, and changing lives.",
    },
    "/sadaqah/": {
      heading: "Together, We Can Bring Smiles to Those in Need",
      paragraph:
        "Your support makes a difference. With every donation, you help deliver care, compassion, and opportunity to those who need it most.",
    },
    "/kaffara/": {
      heading: "Together, We Can Bring Smiles to Those in Need",
      paragraph:
        "Your contribution plays a vital role in delivering love, care, and essential support to the underserved.",
    },
    "/outreach-programs": {
      heading: "Together, We Can Bring Smiles to Those in Need",
      paragraph:
        "Your support fuels everything we do—spreading light, restoring sight, and changing lives.",
    },
  };

  // Check if the path exists, otherwise show Services content (default for undefined pages)
  const { heading, paragraph } = contentData[pathname] || {
    heading: "Together, Let’s Light Up Lives with Sight",
    paragraph:
      "Your Contributions Make It Possible: Delivering Care, Support, and Hope to Communities in Need.",
  };

  // Email Validation Function
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Updated phone validation
  const handlePhoneChange = (e) => {
    const value = e.target.value.trim();

    // Validate that the number starts with '03' and is exactly 11 digits
    if (/^\d+$/.test(value)) {
      // 03 + 9 digits = 11 digits total
      setErrors((prev) => ({ ...prev, phone: undefined })); // Clear the error when valid
    } else {
      setErrors((prev) => ({
        ...prev,
        phone: "",
        // phone: "Phone Number must start with 03 and be exactly 11 digits",
      }));
    }
  };

  // Updated form validation
  const validateForm = () => {
    const newErrors = {};

    if (!firstNameRef.current.value)
      newErrors.firstName = "First Name is required";
    if (!lastNameRef.current.value)
      newErrors.lastName = "Last Name is required";

    // if (!emailRef.current.value) {
    // newErrors.email = "Email is required";
    // } else
    // if (!validateEmail(emailRef.current.value)) {
    // newErrors.email = "Please enter a valid email address";
    // }

    // const phoneValue = phoneRef.current.value.trim();
    // if (!phoneValue) {
    // newErrors.phone = "Phone Number is required";
    // }
    // else if (/^\d+$/.test(phoneValue)) {
    //   newErrors.phone = ''
    //   // "Phone Number must start with 03 and be exactly 10 digits";
    // }
    // if (!addressRef.current.value) newErrors.address = "Address is required";
    if (!donationTypeRef.current.value)
      newErrors.donationType = "Donation Type is required";
    if (!amount) {
      newErrors.amount = "Amount is required";
    } else if (amount < 50) {
      newErrors.amount = "Amount must b 50 or greater";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Amount Change
  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);

    if (!value) {
      setErrors((prev) => ({ ...prev, amount: "Amount is required" }));
    } else if (value < 50) {
      setErrors((prev) => ({
        ...prev,
        amount: "Amount must be 50 or greater",
      }));
    } else {
      setErrors((prev) => {
        const { amount, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleCountryChange = () => {
    const countryValue = countryRef.current.value; // Get selected value

    console.log("Selected Country:", countryValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true); // 🔹 Show loader when request starts

    const customerName =
      `${firstNameRef.current.value} ${lastNameRef.current.value}`.trim();
    const donationType = donationTypeRef.current.value === "zakat" ? 1 : 2;

    const donationData = {
      DonationType: Number(donationType),
      OrderAmount: Number(amount),
      CustomerName: customerName,
      CurrencyType: countryRef.current.value,
      CustomerMobile: phoneRef.current.value,
      CustomerEmail: emailRef.current.value,
      CustomerAddress: addressRef.current.value,
    };

    try {
      const authResponse = await axios.public.post(
        "/admin/donateAuth",
        donationData
      );

      const paymentData = authResponse.data;

      // Extract payment link safely
      const paymentLink =
        paymentData?.data?.Click2Pay || paymentData?.Click2Pay;

      if (paymentLink) {
        const callbackUrl = encodeURIComponent(window.location.href);
        const fullPaymentLink = `${paymentLink}&callback_url=${callbackUrl}`;
        window.location.href = fullPaymentLink;
      } else {
        throw new Error("Payment link not provided.");
      }

      // Reset form fields
      setAmount("");
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      addressRef.current.value = "";
      donationTypeRef.current.value = "";
      currencyTypeRef.current.value = "";
      setErrors({});
    } catch (error) {
      console.error(
        "Error processing request:",
        error.response?.data || error.message
      );

      // const errorMessage = error.response?.data?.message || error.message;
      // toast.error(`Failed to complete the process: ${errorMessage}`);
    } finally {
      setLoading(false); // 🔹 Hide loader after request completes
    }
  };
  // Handle callback response
  const handlePaymentCallback = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get("status");
    const orderId = urlParams.get("ordId");
    const message = urlParams.get("msg");

    if (status && orderId && message) {
      if (status.toLowerCase() === "success") {
        try {
          const paymentResponse = await axios.public.post(
            "/admin/donateSuccess",
            {
              PayProId: orderId,
              msg: message,
              status: status,
            }
          );

          console.log("Payment response:", paymentResponse.data);
          Swal.fire({
            title: "Success!",
            text: "Payment was successful! Thank you for your donation.",
            icon: "success",
            confirmButtonText: "OK",
          });
        } catch (error) {
          console.error("Error sending payment response:", error);
          Swal.fire({
            title: "Oops...",
            text: "Payment succeeded, but we encountered an issue finalizing the process.",
            icon: "warning",
            confirmButtonText: "OK",
          });
        }
      } else {
        Swal.fire({
          title: "Payment Failed",
          text: "Payment not successful. Please try again or contact support.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }

      // Clear URL parameters after showing the modal
      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
    }
  };

  // Mock showModal function
  const showModal = (message) => {
    // Replace with your actual modal implementation
    alert(message);
  };

  // Call this function on the callback page
  useEffect(() => {
    handlePaymentCallback();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email");
      return;
    }

    try {
      setLoadingSub(true);
      setMessage("");
      const response = await axios.public.post("admin/subscribers/add", {
        email,
      });
      setEmail("");
      toast.success("Subscription successful!");
    } catch (error) {
      setEmail("");
      toast.error(error.response?.data?.message);
    } finally {
      setLoadingSub(false);
    }
  };

  return (
    <div id="footer-section" className="   md:bg-white  relative  pt-5 md:pt-10">
      <ToastContainer autoClose={1000} />
      {/* Top Section */}
      <div className="  flex items-center md:mb-64 px-6 lg:px-10 ">
        <div className=" flex md:justify-around gap-8 md:flex-row flex-col w-full  md:top-[4rem] z-30 md:absolute right-10  ">
          {/* Left Content */}
          <div className=" md:w-96 text-center md:text-start">
            <h2 className="text-[43px]  font-Amaranth text-black leading-tight  ">
              {/* {heading} */}
              Together, we can bring smiles to those in need
            </h2>
            <p className="mt-2 font-poppins">
              {/* {paragraph} */}
              Your kindness powers our purpose. Every action you take, whether
              it is a donation, a message of support, or spreading awareness,
              helps us deliver care, compassion, and sight to those who need it
              most.
            </p>
          </div>

          {/* Right Form */}
          <div className="bg-[#FCFAFA]  text-black p-6 rounded-lg ">
            <h3 className="text-2xl  font-Amaranth">Donate Online</h3>
            <p className="text-gray-600 font-inter  text-sm mb-4">
              Sadaqah Heals, Zakat Purifies - Donate Now!
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 font-inter">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    ref={firstNameRef}
                    className="w-full border border-black p-3 rounded-[18px] outline-none"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-[10px]">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    ref={lastNameRef}
                    className="w-full border border-black p-3 rounded-[18px] outline-none"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-[10px]">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <input
                    type="email"
                    placeholder="Email"
                    ref={emailRef}
                    className="w-full border border-black p-3 rounded-[18px] outline-none"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-[10px]">{errors.email}</p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <select
                    ref={countryRef}
                    className="w-full border border-black p-3 rounded-[18px] outline-none"
                    onChange={handleCountryChange}
                  >
                    <option value="">PKR</option>
                    <option value="AED">AED</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="SAR">SAR</option>
                  </select>
                </div>
              </div>

              {/* <input
                type="text"
                placeholder="emai"
                ref={addressRef}
                className="w-full border border-black p-3 rounded-[18px] outline-none"
              />
              {errors.address && (
                <p className="text-red-500 text-[10px]">{errors.address}</p>
              )} */}

              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-1">
                  <select
                    ref={donationTypeRef}
                    className="w-full border border-black p-3 rounded-[18px] outline-none"
                  >
                    <option value="zakat">Zakat</option>
                    <option value="sadqah">Sadqah</option>
                  </select>
                  {errors.donationType && (
                    <p className="text-red-500 text-[10px]">
                      {errors.donationType}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <input
                    type="number"
                    placeholder="(Minimum 50)"
                    value={amount}
                    onChange={handleAmountChange}
                    className="w-full border border-black p-3 rounded-[18px] outline-none"
                  />
                  {errors.amount && (
                    <p className="text-red-500 text-[10px]">{errors.amount}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#F39C12] text-[12px] text-white w-full py-2 font-inter rounded-[66px] flex justify-center items-center"
                disabled={loading}
              >
                {loading ? <SmallLoader /> : "Donate Now"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div
        className="h-[55rem] hidden  md:flex justify-end items-center  flex-col bg-cover bg-no-repeat  relative"
        style={{
          backgroundImage: "url('/footer-bg.png')",
        }}
      >
        {/* Email Subscription */}
        <div className=" py-6  border-b border-white w-[90%]  ">
          <div className="md:max-w-7xl  text-white px-6 lg:px-20 flex flex-col   ">
            <div className=" mb-4 ">
              <h3 className="text-3xl font-inter font-semibold ">
                Enter Your E-mail
              </h3>
              <p className="font-inter capitalize">
                Stay Connected. Stay Informed.
              </p>
              <p className="font-inter text-[12px] w-96">
                Subscribe to receive the latest updates, inspiring stories, and
                ways to make a difference.
              </p>
            </div>

            <div
              className="md:w-1/3 flex flex-row justify-center items-center"
              onSubmit={handleSubscribe}
            >
              <form className="w-full relative ">
                <input
                  type="text"
                  placeholder="Enter Your Email "
                  className="w-full font-inter  text-sm bg-transparent py-3 px-3 outline-none border border-white rounded-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="absolute text-[12px] top-0 font-poppins right-0 h-full px-4 textcenter flex flex-row gap-5 items-center justify-center   text-xs bg-[#F39C12] py-3 outline-none text-white rounded-full"
                  type="submit"
                  disabled={loadingSub}
                >
                  {loadingSub ? "SUBSCRIBING" : "SUBSCRIBE"}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="max-w-7xl md:max-w-[90%] mx-auto px-6 lg:px-20 py-20 text-white">
          <div className="grid md:grid-cols-3 gap-4">
            {/* About Us */}
            <div>
              <h4 className="text-lg font-poppins">About us</h4>
              <p className="text-[#FFFFFF] font-inter mt-2 text-sm">
                Prevention of Blindness Trust is a registered charity working
                for the prevention and treatment of avoidable causes of
                blindness focusing on the deprived and marginalized communities.
              </p>
              <div className="flex flex-col gap-3 mt-4">
                <h4 className="text-lg ">Social Links</h4>
                <div className=" flex gap-4 ">
                  <a
                    href="https://www.facebook.com/pobeyehospitalkarachi?mibextid=wwXIfr&rdid=rOGZqAFm2fgwRRPg&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1YFZdcmqnj%2F%3Fmibextid%3DwwXIfr#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="text-white text-lg cursor-pointer hover:text-gray-400 transition duration-300" />
                  </a>
                  <a
                    href="https://www.instagram.com/pobeyehospitalkarachi?igsh=MXU3YzduenY3NWN0bw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-white text-lg cursor-pointer hover:text-gray-400 transition duration-300" />
                  </a>

                  {/* <FaXTwitter className="text-white text-lg cursor-pointer hover:text-gray-400 transition duration-300" /> */}
                  <a
                    href="https://wa.me/923479997772"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp className="text-white text-lg cursor-pointer hover:text-gray-400 transition duration-300" />
                  </a>

                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-white text-lg cursor-pointer hover:text-gray-400 transition duration-300" />
                  </a>
                </div>
              </div>
            </div>
            {/* Quick Links */}

 {/* <div className="absolute bottom-16 left-20 flex items-end justify-start gap-3 mb-10 ml-14">
  <img
    src="/logoleft.png"
    alt="Logo 1"
    className="h-[6.3rem] md:h-[7.3rem] object-contain"
  />
  <img
    src="/logoright.png"
    alt="Logo 2"
    className="h-[6.3rem] md:h-[7.3rem] object-contain"
  />
</div> */}








            <div>
              <h4 className="text-lg font-poppins">Quick Links</h4>
              <div className="text-[#FFFFFF] flex flex-col justify-start mt-2 font-inter text-sm space-y-1">
                {quickLinks.map((link, index) => (
  <Link href={link?.url} key={index}>
    {link?.name}
  </Link>
))}

              </div>
            </div>
            
            <div>

              
              <h4 className="text-lg text-white font-poppins ">Contact Us</h4>

              {/* Address Section */}
              {/* <div className="text-[#FFFFFF] flex items-center gap-2 mt-2 text-sm">
                <FaMapMarkerAlt className="text-white mt-1" />
                <div>
                  <strong className=" font-inter ">
                    Head Office Lahore:
                  </strong>
                  <p className="text-[12px]  font-inter ">
                    729 Kamran Block, Allama Iqbal Town, Lahore
                  </p>
                </div>
              </div> */}

              <div className="text-[#FFFFFF] flex items-center gap-2 mt-2 text-sm">
                <FaMapMarkerAlt className="text-white mt-1" />
                <div>
                  <strong className=" font-inter ">Karachi:</strong>
                  <p className="text-[12px] font-inter ">
                    C-15 Munawar Chowrangi Rd, Block 12 Gulistan-e-Johar,
                    Karachi, 74500, Pakistan
                  </p>
                </div>
              </div>

              {/* Phone Section */}
              <div className="flex gap-4 mt-2">
                {/* <div className="text-[#FFFFFF] text-sm">
                  <div className="flex  gap-2">
                    <FaPhoneAlt className="text-white" />
                    <strong className="  font-inter ">Lahore:</strong>
                  </div>
                  <p className="ml-6 mt-1  font-inter ">
                     <a href="tel:+924235414720" className="hover:text-[#f39c12]">
                    +92 042 354 14 720
                    </a>
                    </p>
                  <p className="ml-6 font-inter ">
                    <a href="tel:+923479997772" className="hover:text-[#f39c12]">
                    +92 347 999 777 2
                    </a>
                    </p>
                </div> */}

                <div className="text-[#FFFFFF] text-sm">
                  <div className="flex  gap-2">
                    <FaPhoneAlt className="text-white" />
                    <strong className=" font-inter ">Karachi:</strong>
                  </div>
                  <p className="ml-6 mt-1 font-inter ">
                    UAN <span> </span>
                    <a
                      href="tel:+9221111762544"
                      className="hover:text-[#f39c12]"
                    >
                      +92-21-111-762-544
                    </a>
                  </p>
                  <p className="ml-6 font-inter ">
                    <a
                      href="tel:+922134156597"
                      className="hover:text-[#f39c12]"
                    >
                      +92-21-34156597
                    </a>
                  </p>
                </div>
              </div>

              {/* Email Section */}
              <div className="text-[#FFFFFF] font-inter text-sm mt-2">
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-white" />
                  <strong className=" ">Email Address:</strong>
                </div>
                {/* <p className="ml-6 mt-1">careers@pobkarachi.org</p>
                <p className="ml-6">hr@pobtrust.org</p> */}
                <p className="ml-6 mt-1">
                  <a
                    href="mailto:careers@pobkarachi.org"
                    className="hover:text-[#f39c12]"
                  >
                    careers@pobkarachi.org
                  </a>
                </p>
                <p className="ml-6">
                  <a
                    href="mailto:hr@pobtrust.org"
                    className="hover:text-[#f39c12]"
                  >
                    hr@pobtrust.org
                  </a>
                </p>
              </div>

              {/* Working Hours Section */}
              <div className="text-[#FFFFFF] font-inter text-sm mt-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <strong className="">Working Hours:</strong>
                </div>
                <p className="ml-6 mt-1">8:30 AM to 3:30 PM</p>
                <p className="ml-6">Monday to Saturday</p>
                <p className="ml-6">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="  w-full  bg-[#F39C12] flex justify-around font-inter   text-center py-2 text-[#FFFFFF] text-sm">
          <div>Copyright 2024 © POB TRUST </div>
          <div>
            <a href="#" className="text-white">
              Terms & Conditions
            </a>{" "}
            <a href="#" className="text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Footer  */}
      {/* SVG Curved Background */}
      <div
        className={`md:bg-[#222222] ${
          isQuickLinksOpen || isContactOpen ? "h-[80rem]" : "h-[60rem]"
        } block md:hidden`}
      >
        
        <div
          className=" h-[100%] font-inter  flex  px-4 items-center flex-col md:bg-cover bg-no-repeat bg-center sm:bg-top "
          style={{
            backgroundImage: "url('/footer-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        
          {/* Email Subscription */}
          <section className=" pt-20">
            <div className="flex md:flex-row  text-white  flex-col justify-between gap-10 py-10">
              <div className="md:w-1/3  text-center md:text-start">
                <p className="font-newsLetter font-poppins md:text-5xl text-3xl py-2">
                  Join Our Newsletter
                </p>
                <p className="font-poppins">
                  Stay updated with our latest offers, exclusive deals, and
                  exciting news. Subscribe now!
                </p>
              </div>
              <div
                className="md:w-1/3 flex flex-row justify-center items-center"
                onSubmit={handleSubscribe}
              >
                <form className="w-full relative ">
                  <input
                    type="text"
                    placeholder="Enter Your Email "
                    className="w-full font-inter  text-sm bg-transparent py-3 px-3 outline-none border border-white rounded-full"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className="absolute text-[12px] top-0 font-poppins right-0 h-full px-4 textcenter flex flex-row gap-5 items-center justify-center   text-xs bg-[#F39C12] py-3 outline-none text-white rounded-full"
                    type="submit"
                  >
                    {"SUBSCRIBE"}
                  </button>
                </form>
              </div>
            </div>
          </section>

          <div className=" lg:border-r text-white border-white lg:w-1/4 lg:p-10 md:pl-0 py-10 flex flex-col justify-center items-center md:items-start gap-5">
            <img
              className="w-56 object-cover "
              src="/poblogo.png"
              alt="Company Logo"
            />
            <p className="text-[14px] text-center font-inter">
              Prevention of Blindness Trust is a registered charity working for
              the prevention and treatment of avoidable causes of blindness
              focusing on the deprived and marginalized communities.
            </p>

            <ul className="py-2 flex flex-row gap-2 lg:justify-start justify-center">
              <a
                // href="https://www.facebook.com/pobeyehospitalkarachi?mibextid=wwXIfr&rdid=rOGZqAFm2fgwRRPg&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1YFZdcmqnj%2F%3Fmibextid%3DwwXIfr#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className=" text-white" size={20} />
              </a>
              <a
                href="https://www.facebook.com/pobeyehospitalkarachi?mibextid=wwXIfr&rdid=rOGZqAFm2fgwRRPg&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1YFZdcmqnj%2F%3Fmibextid%3DwwXIfr#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className=" text-white" size={20} />
              </a>
              <a
                href="https://www.instagram.com/pobeyehospitalkarachi?igsh=MXU3YzduenY3NWN0bw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white" size={20} />
              </a>
              <a
                            href=""
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLinkedin className="text-white" size={20} />
                          </a>
            </ul>
          </div>

          <div className=" md:w-[70%] w-full h-[200px] md:h-[100%]">
            <div className="md:hidden text-white">
              <div
                className="flex justify-between border-b border-[#555555] items-center py-3 cursor-pointer"
                onClick={() => setQuickLinksOpen(!isQuickLinksOpen)}
              >
                <p className="text-[16px] ">Quick Links</p>
                {isQuickLinksOpen ? (
                  <MdOutlineExpandLess size={24} />
                ) : (
                  <MdOutlineExpandMore size={24} />
                )}
              </div>
              {isQuickLinksOpen && (
                <ul className="flex flex-col gap-1  ">
                  {quickLinks.map((link, index) => (
                    <Link href={link?.url} key={index}>{link?.name}</Link>
                  ))}
                </ul>
              )}
            </div>

            <div className="md:hidden text-white">
              <div
                className="flex justify-between   items-center py-3 cursor-pointer"
                onClick={() => setisContactOpen(!isContactOpen)}
              >
                <p className="text-[16px] ">Contact US</p>
                {isContactOpen ? (
                  <MdOutlineExpandLess size={24} />
                ) : (
                  <MdOutlineExpandMore size={24} />
                )}
              </div>
              {isContactOpen && (
                <div className=" ">
                  {/* <div className="text-[#FFFFFF]  flex items-center gap-2 mt-2 text-sm">
                    <FaMapMarkerAlt className="text-white mt-1" />
                    <div>
                      <strong className=" font-inter ">
                        Head Office Lahore:
                      </strong>
                      <p className="text-[12px]  font-inter ">
                        729 Kamran Block, Allama Iqbal Town, Lahore
                      </p>
                    </div>
                  </div> */}
                  <div className="text-[#FFFFFF] flex items-center gap-2 mt-2 text-sm">
                    <FaMapMarkerAlt className="text-white mt-1" />
                    <div>
                      <strong className=" font-inter ">Karachi:</strong>
                      <p className="text-[12px] font-inter ">
                        C-16, Block 2, Gulistan e Johar, Munawar Chowrangi,
                        Karachi
                      </p>
                    </div>
                  </div>

                  {/* Phone Section */}
                  <div className="flex gap-4 mt-2">
                    {/* <div className="text-[#FFFFFF] text-sm">
                      <div className="flex  gap-2">
                        <FaPhoneAlt className="text-white" />
                        <strong className="  font-inter ">
                          Lahore:
                        </strong>
                      </div>
                      <p className="ml-6 mt-1  font-inter ">
                        +92 042 354 14 720
                      </p>
                      <p className="ml-6 font-inter ">+92 347 999 777 2</p>
                    </div> */}

                    <div className="text-[#FFFFFF] text-sm">
                      <div className="flex  gap-2">
                        <FaPhoneAlt className="text-white" />
                        <strong className=" font-inter ">Karachi:</strong>
                      </div>
                      <p className="ml-6 mt-1 font-inter ">
                        UAN +92-21-111-762-544
                      </p>
                      <p className="ml-6 font-inter ">+92-21-34156597</p>
                    </div>
                  </div>

                  {/* Email Section */}
                  <div className="text-[#FFFFFF] font-inter text-sm mt-2">
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-white" />
                      <strong className=" ">Email Address:</strong>
                    </div>
                    <p className="ml-6 mt-1">careers@pobkarachi.org</p>
                    <p className="ml-6">hr@pobtrust.org</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          </div>
    
        {/* Copyright */}
        <div className="  w-full  bg-[#F39C12] flex flex-col justify-around font-inter   text-center py-2 text-[#FFFFFF] text-sm">
          <div>Copyright 2024 © POB TRUST |</div>
          <div>
            <a href="#" className="text-white">
              Terms & Conditions
            </a>{" "}
            <a href="#" className="text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
