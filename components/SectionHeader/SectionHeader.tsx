import React from "react";

interface SectionHeaderProps {
  number?: number;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ number, title }) => {
  return (
    <div className="mb-20 flex flex-row items-center justify-center text-center md:mb-28 lg:mb-36 xl:mb-44">
      <span>({number})</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeader;
