interface SkillsIconProps {
  isVisible: boolean;
  fillColor: string;
  Icon: any;
  visibleClassname: string;
  skillName: string;
}

const SkillsIcon = ({
  isVisible,
  fillColor,
  Icon,
  visibleClassname,
  skillName,
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
      <span className="text-xs md:text-sm xl:text-md leading-[8px] md:leading-3 xl:leading-4">{skillName}</span>
    </div>
  );
};

export default SkillsIcon;
