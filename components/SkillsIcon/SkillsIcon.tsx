import React from 'react';

interface SkillsIconProps {
  isVisible: boolean;
  fillColor: string;
  Icon: any;
  transitionDuration: string;
}

const SkillsIcon = ({ isVisible, fillColor, Icon, transitionDuration }:SkillsIconProps) => {
  const IconComponent = Icon; 

  return (
    <div
      className={`skillsIcon ${
        isVisible
          ? "opacity-100 transition-opacity duration-" + transitionDuration
          : "opacity-0 transition-opacity"
      }`}
    >
      <IconComponent fillColor={fillColor} />
    </div>
  );
}

export default SkillsIcon;
