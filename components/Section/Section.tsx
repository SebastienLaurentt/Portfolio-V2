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
  const isMarginBottom = marginBottom ? "mb-40 md:mb-60 lg:mb-80 xl:mb-96" : "";
  const isMarginTop = marginTop ? "mt-20 md:mt-24 xl:mt-28" : "";

  return (
    <section className={`${classname} ${isMarginBottom} ${isMarginTop} px-6 md:px-10 xl:px-16 xl:max-w-[1400px] xl:mx-auto`}>
      {children}
    </section>
  );
};

export default Section;
