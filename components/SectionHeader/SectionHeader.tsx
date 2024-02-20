import React from "react";

interface SectionHeaderProps {
  title: string;
  titleHighlight?: string;
  titleDescription?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  titleHighlight,
  titleDescription,
}) => {
  return (
    <div className="mb-12 md:mb-24 text-center">
      <h2>
        {title} <span className="text-tertiary-foreground">{titleHighlight}</span>
      </h2>
      <p className="sectionHeaderDescription">
        {titleDescription}
      </p>
    </div>
  );
};

export default SectionHeader;
