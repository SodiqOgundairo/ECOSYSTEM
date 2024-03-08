import { useState } from "react";

const Unicorn = () => {
  const [selectedGender, setSelectedGender] = useState("");

  const handleChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const [file, setFile] = useState(null);

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files[0]);
  };

  const handleChangeInput = (event) => {
    setFile(event.target.files[0]);
  };
  return (
    <div>
      {/* HERO */}
      <section className="hero bg-unicornHero bg-no-repeat bg-cover bg-top">
        <div className="hero-text text-center rounded-lg py-[20px] bg-theme/70">
          <div
            className="my-10 p-20 w-fit mx-auto"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="leading-none text-[40px] md:text-[60px] text-center font-bold text-light ">
              ECOSYSTEM Agent
            </p>
          </div>
        </div>
      </section>
      {/* END OF HERO */}

      <section className="why-us py-[70px] bg-light" data-aos="fade-up-right">
        <div className="mx-auto text-center m-3 " data-aos="zoom-in-up">
          <p
            className="text-2xl md:text-4xl font-bold text-accent px-8 text-center"
            data-aos="fade-left"
          >
            Ecosystem offer programs and services that educate, orientate and
            expose agents to standard practices for better service delivery
          </p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="why-us mx-auto flex justify-center bg-gradient-to-tr to-accent from-theme items-center">
        <form class=" max-w-lg p-3 md:p-9">
        <div class="flex flex-wrap -mx-3 mb-6" data-aos="zoom-in-down">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-light text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-dark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                  class="block uppercase tracking-wide text-light text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-dark border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                />
              </div>
            </div>
          <div class="flex flex-wrap mb-4 -mx-3" data-aos="zoom-in-left">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-light text-xs font-bold mb-2"
                for="grid-tel"
              >
                Phone Number/ Whatsapp Only
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-dark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-tel"
                type="text"
                placeholder="+234812334567890"
              />
              {/* <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p> */}
            </div>
          </div>
          <div class="flex flex-wrap mb-4 -mx-3" data-aos="zoom-in-left">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-light text-xs font-bold mb-2"
                for="grid-mail"
              >
                Email
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-dark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-mail"
                type="text"
                placeholder="you@example.com"
              />
              {/* <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p> */}
            </div>
            </div>
          <div class="flex flex-wrap mb-4 -mx-3" data-aos="zoom-in-left">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-light text-xs font-bold mb-2"
                for="grid-address"
              >
                Address
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-dark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-address"
                type="text"
                placeholder="Address"
              />
              {/* <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p> */}
            </div>
          </div>
          <div class="flex flex-wrap mb-4 -mx-3" data-aos="zoom-in-left">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-light text-xs font-bold mb-2"
                for="grid-biz-name"
              >
                Business Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-dark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-biz-name"
                type="text"
                placeholder="Business Name"
              />
              {/* <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p> */}
            </div>
          </div>
          <div class="flex flex-wrap mb-4 -mx-3" data-aos="zoom-in-left">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-light text-xs font-bold mb-2"
                for="grid-biz-add"
              >
                Business Address
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-dark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-biz-add"
                type="text"
                placeholder="Business Address"
              />
              {/* <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p> */}
            </div>
          </div>
          <div className="flex flex-wrap mb-4 -mx-3" data-aos="zoom-in-left">
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-light text-xs font-bold mb-2"
          htmlFor="gender-group"
        >
          Gender
        </label>

        <div className="flex items-center mb-2">
          <button
            type="button"
            className={`appearance-none rounded-md px-4 py-2 mr-2 text-light border border-light cursor-pointer focus:outline-none focus:border-blue-500 hover:bg-gray-100 ${
              selectedGender === "male" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleChange({ target: { value: "male" } })}
          >
            Male
          </button>

          <button
            type="button"
            className={`appearance-none rounded-md px-4 py-2 mr-2 text-light border border-light cursor-pointer focus:outline-none focus:border-blue-500 hover:bg-gray-100 ${
              selectedGender === "female" ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => handleChange({ target: { value: "female" } })}
          >
            Female
          </button>
        </div>

      </div>
    </div>
    <div class="flex flex-wrap mb-4 -mx-3" data-aos="zoom-in-left">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-light text-xs font-bold mb-2"
                for="grid-nin"
              >
                NiN
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-dark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-nin"
                type="text"
                placeholder="NiN"
              />
              {/* <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p> */}
            </div>
            </div>
    <div class="flex flex-wrap mb-4 -mx-3" data-aos="zoom-in-left">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-light text-xs font-bold mb-2"
                for="grid-location"
              >
                Number of locations owned
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-dark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-location"
                type="number"
                placeholder="Number locations owned"
              />
              {/* <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p> */}
            </div>
            </div>
    <div class="flex flex-wrap mb-4 -mx-3" data-aos="zoom-in-left">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-light text-xs font-bold mb-2"
                for="grid-location"
              >
               How many other Agents do youo manage
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-dark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-location"
                type="number"
                placeholder="Number of agents you currently manage"
              />
              {/* <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p> */}
            </div>
            </div>
          <div class="flex flex-wrap mb-4 -mx-3" data-aos="zoom-in-right">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-light text-xs font-bold mb-2"
                for="grid-years"
              >
                Years as an agent
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-dark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-years"
                type="text"
                placeholder="Years as an agent"
              />
              {/* <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p> */}
            </div>
          </div>
          <div class="flex flex-wrap mb-4 -mx-3" data-aos="zoom-in-right">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-light text-xs font-bold mb-2"
                for="grid-lga"
              >
                LGA
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-dark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-lga"
                type="text"
                placeholder="LGA"
              />
              {/* <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p> */}
            </div>
          </div>
          <div class="flex flex-wrap mb-4 -mx-3" data-aos="zoom-in-right">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-light text-xs font-bold mb-2"
                for="grid-state"
              >
                State
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-dark border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                type="text"
                placeholder="State"
              />
              {/* <p class="text-gray-600 text-xs italic">
                  Make it as long and as crazy as you'd like
                </p> */}
            </div>
          </div>
          <div
      className="flex flex-wrap mb-4 -mx-3"
      data-aos="zoom-in-left"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-light text-xs font-bold mb-2"
          htmlFor="file-upload"
        >
          Upload Valid Means Of Identification
        </label>
        <div className="relative rounded-md w-full h-20 border border-gray-200 bg-light hover:bg-gray-100 cursor-pointer">
          <input
            type="file"
            id="file-upload"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleChangeInput}
          />
          {file ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-700 text-sm">{file.name}</p>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 text-sm">Drag and drop a file here or browse</p>
            </div>
          )}
        </div>
        {/* Handle file upload logic, display file information, or error messages here */}
      </div>
    </div>
          <input
            type="submit"
            value="Submit"
            className="w-full text-theme bg-light hover:bg-none hover:border hover:border-light focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2 5 text-center me-2 mb-2 shadow-lg shadow-light/50 dark:shadow-lg dark:shadow-blue-800/80"
            data-aos="zoom-in-up"
          />
        </form>
  
      </section>
      {/* CONTACT FORM END */}
    </div>
  );
};

export default Unicorn;
