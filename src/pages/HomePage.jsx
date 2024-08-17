import Logo from "../ui/Logo";
import img from "../assets/images/young-freelancer-smiling-man-casual-outfit-sits-working-laptop-scandinavian-interior-room_326694-247099.jpg";
import { IoSunnySharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { BiSolidCube } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import useUser from "../features/auth/useUser";

const HomePage = () => {
  const { isLoading, user } = useUser();
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="flex items-start justify-center flex-wrap gap-y-10">
        <section className="bg-bg_primary min-h-screen flex-[1_1_30rem] pt-24 px-20 space-y-10">
          <h1 className="text-5xl tracking-tight text-text_primary font-bold spacin">
            Remote Freelance Jobs With Top Global Clients
          </h1>
          <p className="text-sm text-text_secondary">
            pDesign your full-time freelance career with Toptal! Enjoy the
            flexibility <br /> of remote work with the stability of a full-time
            role and the freedom to choose innovative and challenging jobs with
            top companies.
          </p>
          {!isLoading && user && user.status === 2 ? (
            <button
              onClick={() => navigate(user.role.toLowerCase())}
              className="btn bg-[#010101] text-white font-normal px-8 rounded-3xl"
            >
              Dashboard
            </button>
          ) : (
            <button className="btn bg-[#010101] text-white font-normal px-8 rounded-3xl">
              Login
            </button>
          )}
          <div className="bg-success bg-opacity-15 p-5 space-y-5 rounded-lg">
            <h2 className="text-text_primary text-lg font-semibold">
              In publishing and graphic design, Lorem ipsum <br />
              is a placeholder text commonly
            </h2>
            <p className="text-sm text-text_secondary">
              Lorem ipsum, placeholder or dummy text used in typesetting and
              graphic design for previewing layouts. It features scrambled Latin
              text, which emphasizes the ...
            </p>
            <div className="flex gap-x-10 items-start justify-start">
              <div className="flex items-center justify-center gap-2 text-text_secondary">
                <FaCode className="text-text_primary w-7 h-7" /> Web
              </div>
              <div className="flex items-center justify-center gap-2 text-text_secondary">
                <BiSolidCube className="text-text_primary w-7 h-7" /> Art
              </div>
              <div className="flex items-center justify-center gap-2 text-text_secondary">
                <SiAntdesign className="text-text_primary w-7 h-7" /> Design
              </div>
            </div>
          </div>
        </section>
        <section className="flex-[1_1_15rem] bg-bg_light min-h-screen relative">
          <div className="z-30 overflow-hidden rounded-[170px] w-[40%] h-[450px] absolute top-10 left-20 img-shadow">
            <img src={img} className="w-full h-full object-cover shadow-2xl" />
          </div>
          <IoSunnySharp className="z-40 text-yellow-400 w-32 h-32 absolute top-5 left-7" />
          <div className="checkerboard absolute top-[430px] left-[250px]"></div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;

const Header = () => {
  return (
    <header className="bg-bg_primary flex items-center justify-between border-b border-border px-20 py-4 ">
      <Logo />
      <div className="space-x-5">
        <button className="btn text-text_secondary  font-normal text-sm px-5 rounded-3xl">
          Login
        </button>
        <button className="btn bg-[#010101] text-white font-normal text-sm px-7 rounded-3xl">
          Signup
        </button>
      </div>
    </header>
  );
};
