import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets/frontend_assets/assets";
import Newsletter from "../components/Newsletter";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight
} from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-white via-gray-50 to-white">

      {/* ================= HERO SECTION ================= */}
      <div
        className="
        px-4 sm:px-8 lg:px-[8%]
        pt-16 pb-20"
      >

        <div className="text-center max-w-3xl mx-auto">

          <div className="flex justify-center">
            <Title text1={"GET IN"} text2={"TOUCH"} />
          </div>

          <h1
            className="
            mt-6
            text-4xl sm:text-5xl lg:text-6xl
            font-black
            text-gray-900
            leading-tight"
          >
            Let’s Build Something
            <span className="text-indigo-600"> Amazing</span>
          </h1>

          <p
            className="
            mt-6
            text-gray-500
            text-sm sm:text-base lg:text-lg
            leading-relaxed"
          >
            Have questions, feedback, or business inquiries?
            Our team is always ready to help you with anything
            related to Zenthrixa products and services.
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTACT SECTION ================= */}
      <div
        className="
        px-4 sm:px-8 lg:px-[8%]
        pb-24"
      >

        <div
          className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-12
          items-center"
        >

          {/* ================= LEFT IMAGE ================= */}
          <div className="relative group">

            {/* Glow Effect */}
            <div
              className="
              absolute inset-0
              bg-indigo-500/20
              blur-3xl
              rounded-[40px]
              scale-95
              group-hover:scale-100
              transition-all duration-500"
            />

            {/* Image */}
            <div
              className="
              relative
              overflow-hidden
              rounded-[32px]
              shadow-2xl"
            >

              <img
                src={assets.contact_img}
                alt=""
                className="
                w-full
                h-[350px] sm:h-[500px] lg:h-[650px]
                object-cover
                group-hover:scale-105
                transition-transform duration-700"
              />

              {/* Overlay */}
              <div
                className="
                absolute inset-0
                bg-gradient-to-t
                from-black/40
                via-black/10
                to-transparent"
              />

              {/* Floating Badge */}
              <div
                className="
                absolute bottom-6 left-6
                bg-white/90 backdrop-blur-md
                px-5 py-4
                rounded-2xl
                shadow-lg"
              >

                <p className="text-sm text-gray-500">
                  Customer Satisfaction
                </p>

                <h2
                  className="
                  text-2xl font-black
                  text-indigo-600"
                >
                  99.9%
                </h2>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="space-y-8">

            {/* Heading */}
            <div>

              <h2
                className="
                text-3xl sm:text-4xl
                font-black
                text-gray-900"
              >
                Contact Information
              </h2>

              <p
                className="
                mt-4
                text-gray-500
                leading-relaxed"
              >
                Reach out to us through any of the channels below.
                We usually respond within 24 hours.
              </p>
            </div>

            {/* ================= INFO CARDS ================= */}
            <div className="space-y-5">

              {/* Address */}
              <div
                className="
                flex gap-5
                p-6
                rounded-3xl
                bg-white
                border border-gray-100
                shadow-sm
                hover:shadow-xl
                transition-all duration-300"
              >

                <div
                  className="
                  w-14 h-14
                  rounded-2xl
                  bg-indigo-100
                  flex items-center justify-center
                  text-indigo-600
                  flex-shrink-0"
                >
                  <MapPin size={26} />
                </div>

                <div>
                  <h3
                    className="
                    text-lg font-bold
                    text-gray-900"
                  >
                    Store Address
                  </h3>

                  <p
                    className="
                    text-gray-500
                    mt-2
                    leading-relaxed"
                  >
                    54795 Ayodhya <br />
                    Zenthrixa Complex <br />
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div
                className="
                flex gap-5
                p-6
                rounded-3xl
                bg-white
                border border-gray-100
                shadow-sm
                hover:shadow-xl
                transition-all duration-300"
              >

                <div
                  className="
                  w-14 h-14
                  rounded-2xl
                  bg-green-100
                  flex items-center justify-center
                  text-green-600
                  flex-shrink-0"
                >
                  <Phone size={24} />
                </div>

                <div>
                  <h3
                    className="
                    text-lg font-bold
                    text-gray-900"
                  >
                    Phone Support
                  </h3>

                  <p className="text-gray-500 mt-2">
                    (+91) 434654643564646
                  </p>
                </div>
              </div>

              {/* Email */}
              <div
                className="
                flex gap-5
                p-6
                rounded-3xl
                bg-white
                border border-gray-100
                shadow-sm
                hover:shadow-xl
                transition-all duration-300"
              >

                <div
                  className="
                  w-14 h-14
                  rounded-2xl
                  bg-pink-100
                  flex items-center justify-center
                  text-pink-600
                  flex-shrink-0"
                >
                  <Mail size={24} />
                </div>

                <div>
                  <h3
                    className="
                    text-lg font-bold
                    text-gray-900"
                  >
                    Email Address
                  </h3>

                  <p className="text-gray-500 mt-2">
                    support@zenthrixa.com
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div
                className="
                flex gap-5
                p-6
                rounded-3xl
                bg-white
                border border-gray-100
                shadow-sm
                hover:shadow-xl
                transition-all duration-300"
              >

                <div
                  className="
                  w-14 h-14
                  rounded-2xl
                  bg-yellow-100
                  flex items-center justify-center
                  text-yellow-600
                  flex-shrink-0"
                >
                  <Clock size={24} />
                </div>

                <div>
                  <h3
                    className="
                    text-lg font-bold
                    text-gray-900"
                  >
                    Working Hours
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Mon - Sat : 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* ================= BUTTONS ================= */}
            <div
              className="
              flex flex-col sm:flex-row
              gap-4 pt-4"
            >

              <button
                className="
                group
                flex items-center justify-center gap-2
                px-8 py-4
                rounded-2xl
                bg-indigo-600
                text-white
                font-semibold
                hover:bg-indigo-700
                shadow-lg hover:shadow-2xl
                transition-all duration-300"
              >
                Contact Support

                <ArrowRight
                  size={18}
                  className="
                  group-hover:translate-x-1
                  transition-transform"
                />
              </button>

              <button
                className="
                px-8 py-4
                rounded-2xl
                border border-gray-300
                bg-white
                font-semibold
                text-gray-700
                hover:border-indigo-600
                hover:text-indigo-600
                hover:shadow-lg
                transition-all duration-300"
              >
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
{/* ================= CAREERS SECTION ================= */}
<div
  className="
  mb-24
  rounded-[32px]
  overflow-hidden
  relative
  bg-gradient-to-r
  from-indigo-600
  via-purple-600
  to-indigo-700
  p-8 sm:p-12 lg:p-16
  shadow-2xl"
>

  {/* Background Glow */}
  <div
    className="
    absolute top-0 right-0
    w-72 h-72
    bg-white/10
    rounded-full
    blur-3xl"
  />

  <div
    className="
    relative z-10
    flex flex-col lg:flex-row
    items-start lg:items-center
    justify-between
    gap-10"
  >

    {/* Left Content */}
    <div className="max-w-2xl">

      <p
        className="
        text-sm font-semibold
        tracking-[0.2em]
        uppercase
        text-indigo-100"
      >
        Careers at Zenthrixa
      </p>

      <h1
        className="
        mt-4
        text-3xl sm:text-4xl lg:text-5xl
        font-black
        text-white
        leading-tight"
      >
        Build The Future
        <br />
        With Our Team
      </h1>

      <p
        className="
        mt-5
        text-indigo-100
        text-sm sm:text-base
        leading-relaxed"
      >
        Join a passionate team focused on innovation,
        creativity, and building premium digital experiences.
        Grow your career while working on exciting modern
        ecommerce technologies.
      </p>
    </div>

    {/* Right Button */}
    <div className="flex-shrink-0">

      <button
        className="
        group
        px-8 py-4
        rounded-2xl
        bg-white
        text-indigo-700
        font-bold
        text-sm sm:text-base
        hover:bg-gray-100
        transition-all duration-300
        shadow-xl
        hover:scale-105"
      >
        Explore Jobs
      </button>
    </div>
  </div>
</div>
      {/* ================= NEWSLETTER ================= */}
      <div
        className="
        px-4 sm:px-8 lg:px-[8%]
        pb-20"
      >
        <div
          className="
          bg-white
          rounded-[32px]
          border border-gray-100
          shadow-xl
          p-6 sm:p-10"
        >
          <Newsletter />
        </div>
      </div>
    </div>
  );
};

export default Contact;