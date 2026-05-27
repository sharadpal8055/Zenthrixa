import React from "react";
import Title from "../components/Title";
import Newsletter from "../components/Newsletter";

const About = () => {
  return (
    <div
      className="
      px-4 sm:px-8 lg:px-[8%]
      py-12
      bg-white
      text-gray-700"
    >

      {/* ================= HERO SECTION ================= */}
      <div className="text-center mb-16">

        <div className="flex justify-center">
          <Title text1={"ABOUT"} text2={"US"} />
        </div>

        <p
          className="
          max-w-3xl mx-auto
          mt-6
          text-sm sm:text-base lg:text-lg
          leading-relaxed
          text-gray-500"
        >
          Zenthrixa was built with a vision to redefine modern
          e-commerce through innovation, premium products,
          and exceptional customer experiences. We focus on
          blending technology, design, and reliability to
          create a shopping platform customers genuinely love.
        </p>
      </div>

      {/* ================= STORY + IMAGE ================= */}
      <div
        className="
        grid
        grid-cols-1 lg:grid-cols-2
        gap-12
        items-center
        mb-24"
      >

        {/* Left Content */}
        <div className="space-y-6">

          <h2
            className="
            text-3xl sm:text-4xl
            font-bold
            text-gray-900"
          >
            Our Story
          </h2>

          <p
            className="
            text-sm sm:text-base
            leading-relaxed
            text-gray-600"
          >
            Zenthrixa began with a simple mission — to make
            premium lifestyle and technology products more
            accessible, stylish, and trustworthy. From carefully
            curated collections to seamless user experiences,
            every detail is designed to provide unmatched value.
          </p>

          <p
            className="
            text-sm sm:text-base
            leading-relaxed
            text-gray-600"
          >
            Our platform emphasizes quality, authenticity,
            and customer-first experiences while continuously
            evolving with modern shopping trends and technology.
          </p>
        </div>

        {/* Right Visual */}
        <div
          className="
          relative
          rounded-3xl
          overflow-hidden
          shadow-2xl"
        >

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt=""
            className="
            w-full h-[400px]
            object-cover"
          />

          <div
            className="
            absolute inset-0
            bg-gradient-to-t
            from-black/40
            to-transparent"
          />
        </div>
      </div>

      {/* ================= MISSION SECTION ================= */}
      <div
        className="
        bg-gradient-to-r
        from-indigo-50
        to-purple-50
        rounded-3xl
        p-8 sm:p-12
        mb-24"
      >

        <div className="max-w-4xl">

          <h2
            className="
            text-3xl sm:text-4xl
            font-bold
            text-gray-900
            mb-5"
          >
            Our Mission
          </h2>

          <p
            className="
            text-sm sm:text-base lg:text-lg
            text-gray-600
            leading-relaxed"
          >
            We aim to deliver premium products with exceptional
            customer experiences while building a modern digital
            ecosystem that values trust, innovation, convenience,
            and long-term customer satisfaction.
          </p>
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <div className="mb-24">

        {/* Heading */}
        <div className="text-center mb-14">

          <div className="flex justify-center">
            <Title text1={"WHY"} text2={"CHOOSE US"} />
          </div>

          <p
            className="
            text-gray-500
            mt-4
            max-w-2xl mx-auto"
          >
            Discover what makes Zenthrixa different from
            ordinary online shopping platforms.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8"
        >

          {/* Card 1 */}
          <div
            className="
            bg-white
            border border-gray-100
            rounded-2xl
            p-8
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-2
            transition-all duration-300"
          >

            <div
              className="
              w-14 h-14
              rounded-xl
              bg-indigo-100
              flex items-center justify-center
              text-2xl
              mb-5"
            >
              ✅
            </div>

            <h1
              className="
              text-xl font-bold
              text-gray-900 mb-3"
            >
              Quality Assurance
            </h1>

            <p
              className="
              text-gray-600
              leading-relaxed"
            >
              Every product is carefully inspected to ensure
              premium quality, durability, and customer
              satisfaction.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="
            bg-white
            border border-gray-100
            rounded-2xl
            p-8
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-2
            transition-all duration-300"
          >

            <div
              className="
              w-14 h-14
              rounded-xl
              bg-purple-100
              flex items-center justify-center
              text-2xl
              mb-5"
            >
              ⚡
            </div>

            <h1
              className="
              text-xl font-bold
              text-gray-900 mb-3"
            >
              Convenience
            </h1>

            <p
              className="
              text-gray-600
              leading-relaxed"
            >
              Experience seamless shopping with responsive
              interfaces, fast checkout, and secure payment
              systems.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="
            bg-white
            border border-gray-100
            rounded-2xl
            p-8
            shadow-sm
            hover:shadow-xl
            hover:-translate-y-2
            transition-all duration-300"
          >

            <div
              className="
              w-14 h-14
              rounded-xl
              bg-pink-100
              flex items-center justify-center
              text-2xl
              mb-5"
            >
              💬
            </div>

            <h1
              className="
              text-xl font-bold
              text-gray-900 mb-3"
            >
              Exceptional Support
            </h1>

            <p
              className="
              text-gray-600
              leading-relaxed"
            >
              Our support team is always ready to assist
              customers with reliable and fast solutions.
            </p>
          </div>
        </div>
      </div>

      {/* ================= NEWSLETTER ================= */}
      <div
        className="
        bg-gray-50
        rounded-3xl
        p-6 sm:p-10"
      >
        <Newsletter />
      </div>
    </div>
  );
};

export default About;