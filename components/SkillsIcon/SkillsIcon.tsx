interface SkillsIconProps {
  isVisible: boolean;
  fillColor: string;
  Icon: any;
  visibleClassname: string;
}

const SkillsIcon = ({
  isVisible,
  fillColor,
  Icon,
  visibleClassname,
}: SkillsIconProps) => {
  const IconComponent = Icon;


  return (
    <div
      className={`skillsIcon ${
        isVisible
          ? `${visibleClassname} opacity-100 transition-opacity`
          : "opacity-0 transition-opacity"
      }`}
    >
      <IconComponent fillColor={fillColor} />
    </div>
  );
};

export default SkillsIcon;
