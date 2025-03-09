import Hero from "../components/herosection";
import Samsung from "../assets/samsung_logo.svg";
import Volks from "../assets/volkswagen_logo.svg";
import Cisco from "../assets/cisco_logo.svg";
import Citi from "../assets/citi_logo.svg";
import Hewlett from "../assets/hewlett_logo.svg";
import Ericsson from "../assets/ericsson_logo.svg";
import Procter from "../assets/procter_logo.svg";
import Vimeo from "../assets/vimeo_logo.svg";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <div className="bg-[#f6f7f9]">
          
          <section className=" flex flex-col  items-center py-16 px-5    ">
            <div className=" flex flex-col gap-7 ">
              <p className="text-lg text-[#5d6275] font-semibold text-center">
                Trusted by over 1000 companies and millions of learners around
                world
              </p>
              <ul className="grid grid-flow-col gap-14  ">
                <li>
                  <img src={Volks} alt="" />
                </li>
                <li>
                  <img src={Samsung} alt="" />
                </li>
                <li>
                  <img src={Cisco} alt="" />
                </li>
                <li>
                  <img src={Citi} alt="" />
                </li>
                <li>
                  <img src={Hewlett} alt="" />
                </li>
                <li>
                  <img src={Ericsson} alt="" />
                </li>
                <li>
                  <img src={Procter} alt="" />
                </li>
                <li>
                  <img src={Vimeo} alt="" />
                </li>
              </ul>
            </div>
          </section>
        
        <section>
            <div className="flex flex-col justify-start px-16 items-start gap-5 py-8">
                <div>
                    <h2 className="text-3xl font-medium">Learners are viewing</h2>
                </div>
                <div >
                        slkfsjlsdjf
                </div>
            </div>
        </section>

        </div>
      </div>
   
    </>
  );
};

export default Home;