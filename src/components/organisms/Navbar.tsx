import { NavbarSection } from "../atoms/NavbarSection";

export const Navbar = () => {

  return (
    <>
      <div aria-label="Breadcrumb">
        <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <NavbarSection sectionName="sectionName1" sectionLink="sectionLink1" />
          <NavbarSection sectionName="sectionName2" sectionLink="sectionLink2" />
          <NavbarSection sectionName="sectionName3" sectionLink="sectionLink3" />
        </ol>
      </div>
    </>
  );
}