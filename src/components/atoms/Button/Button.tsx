//enum color, float,
//children components(new) that extend the main button
import React from "react";
export enum fontColorEnum {
    Black = 'black',
    Indigo = 'indigo',
    Inherit = 'inherit',
    Red = 'red',
  }

  export enum buttonSizeEnum {
  Small = '10',
  Medium = '20',
  Large = 'full',
}

export enum fontSizeEnum {
    Small = 'sm',
    Base = 'base',
    Large = 'lg',
}

export enum buttonFloatEnum {
    None = 'none',
    Left = 'left',
    Right = 'right',
}

export enum buttonColorEnum {
    Indigo = 'indigo',
    Black = 'black',
    Red = 'red',
    Inherit = 'inherit'
}

export interface ButtonProps {
    value?: string,
    onClickEvent? : React.MouseEventHandler<HTMLButtonElement>
    buttonColor?: buttonColorEnum;
    buttonSize?: buttonSizeEnum;
    fontColor?: fontColorEnum;
    fontSize?: fontSizeEnum;
    float?: buttonFloatEnum;
    children?: string; 
}


export const Button = (
    {
        value = "",
        onClickEvent,
        buttonColor = buttonColorEnum.Inherit,
        buttonSize = buttonSizeEnum.Medium,
        fontSize = fontSizeEnum.Base,
        fontColor = fontColorEnum.Indigo,
        float = buttonFloatEnum.Right,
        children
    }: ButtonProps) => {
        //w-buttonSize doesn't work with dynamical change(the class of the width style doesn't appear in css )
    return (
              <button type="button" className={`font-medium text-${fontSize} text-${fontColor}-500 w-${buttonSize} bg-${buttonColor}-500 float-${float} border-solid border-2 border-indigo-600 rounded-full`} onClick={onClickEvent}>{value}</button>
    );
}