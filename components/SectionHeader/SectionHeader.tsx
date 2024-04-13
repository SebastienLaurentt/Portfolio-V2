import React from "react";

interface SectionHeaderProps {
  number?: string;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title }) => {
  return (
    <div className="mb-20 flex justify-center text-center md:mb-28 lg:mb-36 xl:mb-44 ">
  
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeader;
