import { FooterSection } from "../atoms/FooterSection";
export const Footer = () => {
    return (
        <>
            <div className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 ">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                    <FooterSection sectionLink="sectionLink1" sectionName="sectionName1"/>
                    <FooterSection sectionLink="sectionLink2" sectionName="sectionName2"/>
                    <FooterSection sectionLink="sectionLink3" sectionName="sectionName3"/>
                </ul>
            </div>
        </>
            );
}