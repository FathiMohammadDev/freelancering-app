import { AiFillFileImage } from "react-icons/ai";

const StatsSkeleton = () => {
  return (
    <div className="animate-pulse flex items-center justify-start flex-wrap gap-10">
      <div
        className={`p-5  flex-1 flex min-h-44 items-start justify-start gap-5
     rounded-3xl transition-all shadow-md bg-slate-200 `}
      >
        <div>
          <AiFillFileImage className="w-20 h-20 text-white" />
        </div>
        <div className="space-y-10">
          <h2 className="bg-slate-400 h-4 w-32 rounded-lg"></h2>
          <div className="bg-slate-300 h-4 w-16 rounded-lg"></div>
        </div>
      </div>
      <div
        className={`p-5  flex-1 flex min-h-44 items-start justify-start gap-5
     rounded-3xl transition-all shadow-md bg-slate-200 `}
      >
        <div>
          <AiFillFileImage className="w-20 h-20 text-white" />
        </div>
        <div className="space-y-10">
          <h2 className="bg-slate-400 h-4 w-32 rounded-lg"></h2>
          <div className="bg-slate-300 h-4 w-16 rounded-lg"></div>
        </div>
      </div>
      <div
        className={`p-5  flex-1 flex min-h-44 items-start justify-start gap-5
     rounded-3xl transition-all shadow-md bg-slate-200 `}
      >
        <div>
          <AiFillFileImage className="w-20 h-20 text-white" />
        </div>
        <div className="space-y-10">
          <h2 className="bg-slate-400 h-4 w-32 rounded-lg"></h2>
          <div className="bg-slate-300 h-4 w-16 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default StatsSkeleton;
