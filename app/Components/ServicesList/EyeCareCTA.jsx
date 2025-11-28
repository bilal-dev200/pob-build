"use client";

import Link from "next/link";

const EyeCareCTA = () => {
  return (
    <section className="text-center md:text-start bg-green-600 flex flex-col md:flex-row justify-between text-white py-10 px-5 md:px-20">
      {/* Heading */}
      <h2 className="text-4xl font-Amaranth md:w-1/3">
        Take the First Step Toward Better Vision
      </h2>

      {/* Text & Button */}
      <div className="flex flex-col md:w-1/3">
        <p className="mt-4 text-lg md:max-w-2xl mx-auto">
          Schedule your appointment today with POB Eye Welfare Clinic. Our
          experts are ready to provide the personalized eye care you
          deserve—safe, professional, and effective.
        </p>

        <Link href="/contact-us/">
          <button className="mt-6 w-fit px-6 py-3 bg-white text-green-600 rounded-md hover:bg-gray-100 transition">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default EyeCareCTA;
