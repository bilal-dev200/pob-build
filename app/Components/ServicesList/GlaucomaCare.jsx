"use client";

import Image from "next/image";
import Link from "next/link";

const GlaucomaCare = ({ title, subtitle, description, onViewDetails, slug }) => {
  return (
    <div className="flex flex-col md:flex-row min-w-full pt-12 gap-4 items-center justify-center">
      {/* Image Section */}
      <div className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden">
        <Image
          src="/servicelist4.jpg"
          alt="Medical Retina"
          fill
          className="object-cover rounded-full"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-5/12 w-[90%] font-inter flex flex-col gap-2 items-center md:items-start">
        <p className="uppercase text-[#F39C12] font-Amaranth text-center md:text-start text-lg">
          Medical Retina
        </p>
        <h2 className="text-4xl max-w-xl font-Amaranth text-center md:text-start">
          Comprehensive Care For Retinal Diseases
        </h2>
        <p className="text-[#777777] text-center md:text-start md:max-w-xl">
          The retina is vital for sharp, central vision. At POB Eye Hospital,
          our medical retina services address conditions such as macular
          degeneration and retinal vein occlusion. With advanced therapies,
          patients preserve vision and quality of life. Care is customized to
          meet individual needs and ensure success. See how retinal treatments
          protect long-term sight. Click below for detailed information about
          this service.
        </p>

        <Link href={`/services/${slug}`}>
          <button
            onClick={onViewDetails}
            className="mt-4 px-4 py-2 w-32 rounded-full text-[12px] font-inter text-white bg-[#28A745] hover:bg-white hover:text-[#28A745] transition-all duration-300"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

// Default Props
GlaucomaCare.defaultProps = {
  subtitle: "Oculoplasty Laser Treatment",
  title: "Precision Meets Comfort in Eye Aesthetics",
  description:
    "Our Oculoplasty Laser Treatment offers a safe, effective way to correct eyelid abnormalities, remove growths, and improve cosmetic appearance. Using advanced laser technology, we ensure minimal discomfort, reduced scarring, and faster healing. Perfect for patients seeking both functional and aesthetic results, with care led by experienced oculoplastic surgeons in a trusted clinical setting.",
  onViewDetails: () => alert("View Details Clicked!"),
};

export default GlaucomaCare;
