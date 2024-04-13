interface SectionProps {
  classname?: string;
  marginBottom?: boolean;
  marginTop?: boolean;
  children: React.ReactNode;
}

const Section = ({
  classname,
  marginBottom,
  marginTop,
  children,
}: SectionProps) => {
  const isMarginBottom = marginBottom ? "mb-40 md:mb-56 lg:mb-72 xl:mb-96" : "";
  const isMarginTop = marginTop ? "mt-20 md:mt-24 xl:mt-28" : "";

  return (
    <section
      className={`${classname} ${isMarginBottom} ${isMarginTop} px-6 md:px-10 xl:mx-auto xl:max-w-[1400px] xl:px-16 `}
    >
      {children}
    </section>
  );
};

export default Section;
