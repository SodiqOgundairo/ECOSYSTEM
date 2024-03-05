const Unicorn = () => {
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
              Unicorn Agent
            </p>
          </div>
        </div>
      </section>
      {/* END OF HERO */}
    </div>
  );
};

export default Unicorn;
