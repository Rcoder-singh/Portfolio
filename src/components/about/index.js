import clsx from "clsx";
import React from "react";

const ItemLayout = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "custom-bg p-8 rounded-xl flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};
const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <div className="col-span-8 row-span-2 custom-bg p-8 rounded-xl flex items-center justify-center">
          Info
        </div>
        <div className="col-span-4 custom-bg p-8 rounded-xl flex items-center justify-center">
          Clients
        </div>
        <div className="col-span-4 custom-bg p-8 rounded-xl flex items-center justify-center">
          1+ years of experience
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
