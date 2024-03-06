import contactImage from "../assets/img/contact.jpg";

const Contact = () => {
  return (
    <div>
      {/* HERO */}
      <section className="hero bg-contactHero bg-no-repeat bg-cover bg-center">
        <div className="hero-text text-center rounded-lg py-[20px] bg-theme/70">
          <div
            className="my-10 p-20 w-fit mx-auto"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="leading-none text-[40px] md:text-[60px] text-center font-bold text-light ">
              Contact Us
            </p>
          </div>
        </div>
      </section>

      {/* ecosystem */}

      {/* CONTACT FORM */}
      <section className="why-us md:flex justify-between bg-light items-center">
        <form class="w-full max-w-lg p-3 md:p-9">
          <div class="flex flex-wrap mb-4" data-aos="zoom-in-left">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-name"
              >
                Fullname
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-name"
                type="text"
                placeholder="John Doe"
              />
              {/* <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p> */}
            </div>
          </div>
          <div class="flex flex-wrap mb-4" data-aos="zoom-in-left">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-mail"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-mail"
                type="text"
                placeholder="you@example.com"
              />
              {/* <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p> */}
            </div>
          </div>
          <div class="flex flex-wrap mb-4" data-aos="zoom-in-right">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-subject"
              >
                subject
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-subject"
                type="date"
                placeholder="Message subject"
              />
              {/* <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p> */}
            </div>
          </div>
          <div class="flex flex-wrap mb-4" data-aos="zoom-in-right">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-subject"
              >
                subject
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="grid-subject"
                id="grid-subject"
                cols="30"
                rows="8"
              ></textarea>
              {/* <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p> */}
            </div>
          </div>
          <input
            type="submit"
            value="Button"
            className="text-white bg-gradient-to-br from-accent to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2 5 text-center me-2 mb-2 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80"
            data-aos="zoom-in-up"
          />
        </form>
        <img
          src={contactImage}
          alt=""
          className="md:block md:w-2/4 object-cover object-center "
          data-aos="fade-right"
        />
      </section>
      {/* CONTACT FORM END */}

      {/* CONTACT DETAILS  */}

      <section
        className="achievements text-center py-[70px] bg-gradient-to-r from-theme to-accent"
        data-aos="flip-down"
      >
        <p className="text-4xl font-bold text-light my-10" data-aos="fade-down">
          LOCATE US AT
          <span
            className="text-sm block font-normal italic text-light w-[60%] m-auto"
            data-aos="zoom-in-up"
          >
            We are right here for you at
          </span>
          <span
            className="text-sm block font-normal italic text-light w-[60%] m-auto"
            data-aos="zoom-in-up"
          >
            5 lumen city estate wuye FCT ABUJA.
          </span>
        </p>
        <div class="relative w-full h-96">
          <iframe
            class="absolute top-0 left-0 w-full h-full border-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.148549959025!2d7.439533844590195!3d9.050211471034185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b2d4376e68f%3A0x10ac69763bd6ed6c!2sLUMEN%20CITY%20ESTATE!5e0!3m2!1sen!2sng!4v1709601850271!5m2!1sen!2sng"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </section>

      <section
        className=" mx-auto bg-light text-center py-[70px] flex flex-col md:flex-row justify-center gap-10"
        data-aos="flip-up"
      >    
        <div
          className="md:w-1/3 text-accent hover:bg-accent hover:text-light p-7 shadow-lg shadow-gray-300 rounded-lg mx-auto"
          data-aos="flip-left"
        >
          <p className="2xl font-bold"> Call Us</p>
          <p className="text-1xl text-dark hover:underline hover:text-theme">
          <a
              href="tel:+2348113953620"
            >
              {" "}
              08113953620
            </a>
            ,{" "}
            <a
              href="tel:+2349062385049"
            >
              09062385049
            </a>
          </p>
        </div>
        <div
          className="md:w-1/3 text-accent hover:bg-accent hover:text-light p-7 shadow-lg shadow-gray-300 rounded-lg mx-auto"
          data-aos="flip-right"
        >
          <p className="2xl font-bold"> Email Us</p>
          <p className="text-1xl text-dark hover:underline hover:text-theme">
          <a
              href="mailto:ecosyste@ecosystem.ng"
            >
              {" "}
              ecosyste@ecosystem.ng
            </a>
          </p>
        </div>
      </section>

      {/* END OF CONTACT DETAILS  */}
    </div>
  );
};

export default Contact;
