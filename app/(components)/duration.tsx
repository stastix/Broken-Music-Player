import React from "react";

const Duration = ({ duration }: { duration: number }) => {
  return (
    <span className="text-sm opacity-70 mr-4">{`${Math.floor(
      duration / 60
    )}:${String(Math.floor(duration % 60)).padEnd(2, "0")}`}</span>
  );
};

export default Duration;
