const Form = () => {
  return (
    <section className="bg-white dark:bg-black py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Heading */}
        <div className="bg-[#7A50EB] py-16 text-center mx-auto rounded-md">
          <h2 className="font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl">
            get update from anywhere
          </h2>
          <p className="mt-4 text-white text-sm max-w-xl mx-auto">
            Bearing Void gathering light light his evening unto don’t afraid.
          </p>

          {/* Form */}
          <div className="w-10/12 md:w-8/12 mx-auto">
            <form className="mt-5 flex flex-col gap-3">
              {/* Name */}
              <input
                type="text"
                placeholder="Full Name"
                className="text-gray-800 bg-white focus:outline-none border border-white rounded-sm w-full py-2 text-sm px-3"
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="text-gray-800 bg-white focus:outline-none border border-white rounded-sm w-full py-2 text-sm px-3"
              />

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                className="text-gray-800 bg-white focus:outline-none border border-white rounded-sm w-full py-2 text-sm px-3"
              />

              {/* Message */}
              <textarea
                placeholder="Your Message"
                rows={4}
                className="text-gray-800 bg-white focus:outline-none border border-white rounded-sm w-full py-2 text-sm px-3 resize-none"
              ></textarea>

              {/* Button */}
              <button className="w-full bg-blue-950 text-white font-bold text-sm py-2 px-5 rounded-sm  hover:bg-gray-100 hover:text-blue-950 transition">
                GET STARTED
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
