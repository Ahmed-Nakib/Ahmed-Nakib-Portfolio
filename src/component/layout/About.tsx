const About = () => {
  return (
    <section className="bg-white dark:bg-black">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 md:grid md:grid-cols-2 md:items-center md:gap-8 lg:py-32">
        
        {/* Image */}
        <div>
          <img src="/img/about-us.png" alt="About Us" className="w-full h-auto" />
        </div>

        {/* Content */}
        <div className="text-left mt-8 md:mt-0">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Let’s <br /> Introduce <br /> About Myself
          </h2>
          <p className="mt-4 text-base text-gray-700 dark:text-gray-300 sm:text-lg leading-relaxed">
            Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst their...
          </p>
          <div className="mt-6">
            <a className="rounded border-2 border-[#854FEE] bg-[#854FEE] px-6 py-3 text-white font-semibold hover:bg-white hover:text-[#854FEE] transition" 
            href="/img/cv.pdf" 
            download="my-cv.pdf" 
            >
            Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
