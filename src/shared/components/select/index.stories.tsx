import type { Meta, StoryObj } from '@storybook/react';
import { Select } from "./index";
import { useState } from 'react';


type TProps = {
    value: string;
    options: string[]
    onChange?: (newValue: string) => void;
}

let Component = (props:TProps)=>{
    let [text, setText] = useState(props.value);

    return <div style={{maxWidth:"200px"}}>
        <Select {...props} value={text} onChange={setText}/>
    </div>
}


const meta = {
    title: 'Shared.Components/Select',
    component : Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args :{
        value:"var2",
        options: [
            "var1",
            "var2",
            "var3",
            "var4",
            "var5",
        ],
        onChange(val) {
            console.log(val);
        },
    }
};