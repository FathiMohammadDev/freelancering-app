import React from "react";

const ProjectsListSkeleton = () => {
  return (
    <div className="flex flex-col gap-5 animate-pulse">
      <div className="bg-bg_primary rounded-2xl shadow-sm p-5 border border-border flex items-start justify-between flex-col md:h-64 ">
        <div className="flex items-start justify-between w-full gap-8">
          <div className="bg-slate-400 h-4 w-56 rounded-lg"></div>
          <div className="bg-slate-300 h-4 w-24 rounded-lg"></div>
        </div>
        <div className="space-y-2 mt-5">
          <div className="bg-slate-300 h-4 w-60 rounded-lg"></div>
          <div className="bg-slate-300 h-4 w-60 rounded-lg"></div>
        </div>
        <div className="flex items-start justify-start gap-5 flex-wrap mt-5">
          <span className="bg-bg_active py-1 px-3 border border-border rounded-2xl w-4 h-3"></span>
          <span className="bg-bg_active py-1 px-3 border border-border rounded-2xl w-4 h-3"></span>
          <span className="bg-bg_active py-1 px-3 border border-border rounded-2xl w-4 h-3"></span>
        </div>
        <div className="bg-slate-500 h-6 rounded-lg mt-5 self-end w-44"></div>
      </div>
      <div className="bg-bg_primary rounded-2xl shadow-sm p-5 border border-border flex items-start justify-between flex-col md:h-64 ">
        <div className="flex items-start justify-between w-full gap-8">
          <div className="bg-slate-400 h-4 w-56 rounded-lg"></div>
          <div className="bg-slate-300 h-4 w-24 rounded-lg"></div>
        </div>
        <div className="space-y-2 mt-5">
          <div className="bg-slate-300 h-4 w-60 rounded-lg"></div>
          <div className="bg-slate-300 h-4 w-60 rounded-lg"></div>
        </div>
        <div className="flex items-start justify-start gap-5 flex-wrap mt-5">
          <span className="bg-bg_active py-1 px-3 border border-border rounded-2xl w-4 h-3"></span>
          <span className="bg-bg_active py-1 px-3 border border-border rounded-2xl w-4 h-3"></span>
          <span className="bg-bg_active py-1 px-3 border border-border rounded-2xl w-4 h-3"></span>
        </div>
        <div className="bg-slate-500 h-6 rounded-lg mt-5 self-end w-44"></div>
      </div>
    </div>
  );
};

export default ProjectsListSkeleton;
