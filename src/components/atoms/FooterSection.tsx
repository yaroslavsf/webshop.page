
export interface FooterSectionProps {
    sectionName: string;
    sectionLink: string;
  }

  
export const FooterSection = (props : FooterSectionProps) => {
    return (
        <li>
            <a href={props.sectionLink} className="mr-4 hover:underline md:mr-6 ">{props.sectionName}</a>
        </li>
    );
}