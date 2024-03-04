import React from "react";

interface SectionHeaderProps {
  title: string;
  titleDescription?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  titleDescription,
}) => {
  return (
    <div className="mb-20 md:mb-28 lg:mb-36 xl:mb-48 text-center">
      <h2>
        {title} 
      </h2>
      <p className="sectionHeaderDescription">
        {titleDescription}
      </p>
    </div>
  );
};

export default SectionHeader;
