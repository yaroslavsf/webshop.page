import { CardProps } from "../moleculas/Card";

export interface ImageProps {
   width: string;
   height: string;
   imagePathURL: CardProps['imagePathURL'];
    // imagePathURL: string;
}
export const Image = (props: ImageProps) => {
    return (
        <div className={`h-${props.height} w-${props.width} overflow-hidden rounded-md border border-gray-200 basis-30`}>
                    <img src={props.imagePathURL} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-fit w-full object-cover object-center" />
                </div>
    );
}