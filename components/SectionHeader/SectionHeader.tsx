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
    <div className="mb-12 md:mb-24 text-center">
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
