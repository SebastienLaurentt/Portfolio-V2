import React from "react";

interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="mb-20 md:mb-28 lg:mb-36 xl:mb-44 text-center">
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeader;
