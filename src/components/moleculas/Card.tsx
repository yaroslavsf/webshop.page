import { Button, buttonColorEnum, buttonFloatEnum, buttonSizeEnum, fontColorEnum, fontSizeEnum } from "../atoms/Button/Button";
import { Image } from "../atoms/Image";
import { useNavigate } from "react-router-dom";

export interface CardProps {
    cardId: number,
    cardName: string;
    cardCategory: string;
    cardPrice: number;
    cardDescription: string;
    imagePathURL: string;
}
export const Card = (props: CardProps) => {
    const navigate = useNavigate();

    async function onClickHandle() {
        console.log("on submit navigate")
        navigate(`/products/${props.cardId}`);
    }

    return (
        <>
            <li className={`flex py-6 p-2 w-1/3 shadow-lg shadow-indigo-150/50 rounded-lg`}>
                <Image width="10" height="20" imagePathURL={props.imagePathURL}/>
             
                <div className="ml-4 mr-2 flex basis-80 flex-col">
                    <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                                <p >{props.cardName}</p>
                                {/* <ChangingHeader></ChangingHeader> */}
                            </h3>
                            <p className="ml-4">{props.cardPrice} $</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">{props.cardCategory}</p>
                    </div>
                    <div className="flex-row">
                        <p className="text-gray-500">{props.cardDescription}</p>

                    
                    <Button buttonColor={buttonColorEnum.Indigo} fontColor={fontColorEnum.Indigo} fontSize={fontSizeEnum.Base} buttonSize={buttonSizeEnum.Small} float={buttonFloatEnum.Right} onClickEvent={onClickHandle} value ="Buy"></Button>
                    
                        
                    </div>
                </div>
            </li>
        </>)
}