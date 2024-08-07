import { useNavigate } from "react-router-dom";

const colors = {
  red: "bg-[#e8523e]",
  green: "bg-[#f8b949]",
  yellow: "bg-[#1f998d]",
};
const Stat = ({ num, icon, color, label }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/freelancer/proposals")}
      className={`p-5 cursor-pointer flex-1 flex min-h-44 items-start justify-start gap-5
         rounded-3xl ${colors[color]} transition-all shadow-lg hover:shadow-xl hover:scale-[105%]`}
    >
      <div className="bg-white rounded-full bg-opacity-40 p-2">{icon}</div>
      <div>
        <h2 className="text-xl font-bold text-[#e3e3e3]">{label}</h2>
        <div className="text-lg text-white font-bold">{num}</div>
      </div>
    </div>
  );
};

export default Stat;
