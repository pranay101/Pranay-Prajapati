import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const scrollToElement = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlescroll = (id: any) => {
    scrollToElement(id); // Scroll to the element with the ID 'targetElement'
  };

  return (
    <nav
      className="flex w-full justify-between uppercase items-center px-10 pt-14 absolute top-0
    z-50"
    >
      <span className="group overflow-hidden relative cursor-pointer text-2xl">
        <h1 className="inline-block font-poppins tracking-[2px] font-extralight group-hover:-translate-y-[120%] duration-500 ease-out">
          <Link href={"#"}>Home</Link>
        </h1>
        <h1 className="inline-block font-poppins tracking-[2px] font-extralight translate-y-[120%] group-hover:translate-y-0 absolute left-0 duration-500 ease-out">
          <Link href={"#"}>Home</Link>
        </h1>
      </span>
      <ul className="font-poppins font-extralight tracking-[2px] flex gap-10 text-[.8rem] ">
        <li className="active px-3 py-1">
          <Link onClick={() => handlescroll("about")} href={""}>
            About
          </Link>
        </li>
        <li className=" px-3 py-1">
          <Link onClick={() => handlescroll("experience")} href={""}>
            Experience
          </Link>
        </li>
        <li className=" px-3 py-1">
          <Link onClick={() => handlescroll("projects")} href={""}>
            Projects
          </Link>
        </li>
        <li className=" px-3 py-1">
          <a href="https://medium.com/@pranayprajapati101" target="blank">
            Blogs
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
