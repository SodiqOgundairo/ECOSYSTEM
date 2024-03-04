
const NinReg = () => {
  return (
    <div>
      {/* HERO */}
      <section className="hero bg-ninHero bg-no-repeat bg-cover bg-bottom">
        <div className="hero-text text-center rounded-lg py-[20px] bg-theme/70">
          <div
            className="my-10 p-20 w-fit mx-auto"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="leading-none text-[40px] md:text-[60px] text-center font-bold text-light ">
              NIN Registration
            </p>
          </div>
        </div>
      </section>

      {/* ecosystem */}

      <section className="why-us py-[70px] bg-light">
        <div className="mx-auto text-center m-3">
          <p
            className="text-2xl md:text-4xl font-bold text-accent px-8 text-center"
            data-aos="fade-left"
          >
            Register to apply for your NIN at your own convinience and be
            assured of a speedy processing of your application
            <span className="text-sm block font-normal italic">
              We have up-to-date equipments that have been certified by NIMC.
            </span>
          </p>
        </div>

        <div className="md:flex py-[70px] px-5 md:px-0 justify-center gap-6 items-center" data-aos="zoom-in-up">
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6" data-aos="zoom-in-down">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane"
                />
                {/* <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p> */}
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6" data-aos="zoom-in-left">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-tel"
                >
                  Telephone
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-tel"
                  type="text"
                  placeholder="Phone Number/WhatsApp"
                />
                {/* <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p> */}
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6" data-aos="zoom-in-right">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-date"
                >
                  Preffered Appointment Date
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-date"
                  type="date"
                  placeholder="dd/mm/yyy"
                />
                {/* <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p> */}
              </div>
            </div>
            <input type="submit" value="Button" className="text-white bg-gradient-to-br from-accent to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2 5 text-center me-2 mb-2 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80" data-aos="zoom-in-up" />
          </form>
        </div>
      </section>

      {/* OUR ACHIEVEMENTS  */}

      {/* <section
        className="achievements text-center py-[70px] bg-gradient-to-br from-accent to-theme backdrop-blur-sm px-8"
        data-aos="zoom-in-down"
      >
        <p className="text-4xl font-bold text-light" data-aos="zoom-in-up">
        NIN Registration Center Gallery
          <span
            className="text-sm block font-normal italic w-[60%] m-auto"
            data-aos="zoom-in-up"
          >
            OUR ACHIEVEMENTS
          </span>
        </p>

        <div className="md:flex justify-center gap-auto m-4 block">
          <div
            className="shadow-lg flex flex-col justify-center bg-light p-10 m-4 rounded-lg hover:bg-accent hover:text-light"
            data-aos="flip-right"
          >
            <p className="text-base text-center text-gray-500">
              Annual Cash-In Value
            </p>
            <p className="">18,500,000,000</p>
          </div>
          <div
            className="shadow-lg flex flex-col justify-center bg-light p-10 m-4 rounded-lg hover:bg-accent hover:text-light"
            data-aos="zoom-out-right"
          >
            <p className="text-base text-center text-gray-500">
              Annual Cash-Out Value
            </p>
            <p className="">24,000,000,000</p>
          </div>
          <div
            className="shadow-lg flex flex-col justify-center bg-light p-10 m-4 rounded-lg hover:bg-accent hover:text-light"
            data-aos="zoom-out-left"
          >
            <p className="text-base text-center text-gray-500">Agents Set-Up</p>
            <p className="">over 5,000</p>
          </div>
          <div
            className="shadow-lg flex flex-col justify-center bg-light p-10 m-4 rounded-lg hover:bg-accent hover:text-light"
            data-aos="zoom-in-right"
          >
            <p className="text-base text-center text-gray-500">
              {" "}
              Financial Access Points
            </p>
            <p className="">over 10,000</p>
          </div>
        </div>
      </section> */}

      {/* END OF OUR ACHIEVEMENTS  */}
    </div>
  );
};

export default NinReg;
