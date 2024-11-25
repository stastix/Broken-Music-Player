import React from "react";

const Loading = () => {
  return (
    <div className="flex min-h-screen justify-center items-center max-w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
    </div>
  );
};

export default Loading;
