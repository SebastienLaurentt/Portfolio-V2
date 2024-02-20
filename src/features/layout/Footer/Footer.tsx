import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="">
      <div className="flex text-xs md:text-sm items-center px-6 md:px-10 xl:px-16 2xl:max-w-[1280px] 2xl:mx-auto py-8 justify-between items-center ">
        <span className="">@2024 - Sébastien Laurent</span>
        <span className="">
          <Link href="/contact" className="text-tertiary-foreground"> Contact </Link>
        </span>
      </div>
    </footer>
  );
};
