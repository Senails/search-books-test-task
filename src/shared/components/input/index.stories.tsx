import type { Meta, StoryObj } from '@storybook/react';
import { Input } from "./index";
import { useState } from 'react';


type propsType = {
    value: string;
    placeholder: string;
    charLimit?: number;
    type?: 'text'|'password';
    name?: string;
    onChange?: (value:string) => void;
    OnChangeCursorPosition?: (cursorPosition : number|null) => void
}

let Component = (props:propsType)=>{
    let [text, setText] = useState(props.value);

    return <div style={{maxWidth:"200px"}}>
        <Input {...props} value={text} onChange={setText}/>
    </div>
}


const meta = {
    title: 'Shared.Components/Input',
    component : Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        value:"123",
        placeholder:"placeholder",
        type:"text",
    }
};