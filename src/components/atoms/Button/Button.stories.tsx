import {Button, ButtonProps, buttonSizeEnum, fontColorEnum, fontSizeEnum} from './Button';
import '../../App.css';
import { Meta, Story } from "@storybook/react";


export default {
    component: Button, 
    title: 'Button',
    argTypes: {
        disabled: {type: 'boolean'},
        buttonColor : {
            options: ['inherit', 'red', 'indigo', 'black'],
            control: {
                type: 'select'
            }
        }, 
        buttonSize: {
            options: ['10', '20', '52'],
            control: {
                type: 'inline-radio'
            }
        }, 
        fontColor: {
            options: [ 'inherit', 'red', 'indigo', 'black'],
            control: {
                type: 'select'
            }
        }, 
        fontSize : {
            options: ['sm', 'base', 'lg'],
            control: {
                type: 'inline-radio'
            }
        }, 
        float: {
            options: ['right', 'left', 'none'],
            control: {
                type: 'inline-radio'
            }
        },  
        children: {type: 'string'},
        // href: {type: 'string'},
        // variant: {
        //     options: ['contained', 'outlined', 'text'],
        //     control: {
        //         type: 'inline-radio'
        //     }
        // },
      
    }
} as Meta;

const Template: Story<ButtonProps> = (args) => {
    return (
            <Button {...args}>Click me!</Button>
    );
};

export const Primary = Template.bind({});
Primary.args = {
    fontColor: fontColorEnum.Indigo
};

export const Secondary = Template.bind({});
Secondary.args = {
    fontColor: fontColorEnum.Black
};

export const Danger = Template.bind({});
Danger.args = {
    fontColor: fontColorEnum.Red
};

export const Small = Template.bind({});
Small.args = {
    buttonSize : buttonSizeEnum.Small,
    fontSize: fontSizeEnum.Small,
};

export const Medium = Template.bind({});
Medium.args = {
    buttonSize : buttonSizeEnum.Medium,
    fontSize: fontSizeEnum.Base,
};

export const Big = Template.bind({});
Big.args = {
    buttonSize : buttonSizeEnum.Large,
    fontSize: fontSizeEnum.Large,
};