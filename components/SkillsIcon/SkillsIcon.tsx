import { useState } from "react";

interface SkillsIconProps {
  isVisible: boolean;
  fillColor: string;
  hoverFillColor: string;
  Icon: any;
  visibleClassname: string;
  skillName: string;
}

const SkillsIcon = ({
  isVisible,
  fillColor,
  hoverFillColor,
  Icon,
  visibleClassname,
  skillName,
}: SkillsIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = Icon;

  return (
    <div
      className={`skillsIcon ${
        isVisible
          ? `${visibleClassname} opacity-100 transition-opacity`
          : "opacity-0 transition-opacity"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <IconComponent fillColor={isHovered ? hoverFillColor : fillColor} />
      <span className="text-xs leading-[8px] md:text-sm md:leading-3  xl:text-md xl:leading-4">
        {skillName}
      </span>
    </div>
  );
};

export default SkillsIcon;
