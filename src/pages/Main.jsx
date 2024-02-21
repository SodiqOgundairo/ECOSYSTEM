import headershape from "../assets/img/hero-shape.svg";
const Main = () => {
  return (
    <div>
      <section className="hero bg-heroImg bg-no-repeat bg-cover bg-center">
        <div className="hero-text text-center py-[100px]">

        <p className="text-4xl font-bold text-accent ">
          Easy Agent Network Management Services!
        </p>

        <ul className="">
          <li>Nigeria's number #1 agent network management company</li>
          <li>Gateway to the banked and unbanked communities in Nigeria.</li>
          <li>
            Patners with 80% of Nigerian licensed superagents, ptsps, MMOs and
            banks
          </li>
        </ul>
        </div>

        <div class="relative bottom-0 z-[999] w-full h-auto -mb-1 header-shape">
          <img src={headershape} alt="shape" />
        </div>
      </section>
    </div>
  );
};

export default Main;
