import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from "./index";
import { MouseHoverHint } from '../mouse-hover-hint';

type props = {
    color?: string;
    height?: string; 
    width?: string; 
}

let Component = ({color}:props)=>{
    return <div>
        <MouseHoverHint text="лоадер">
            <Loader color={color}/>
        </MouseHoverHint>
    </div>
}


const meta = {
    title: 'Shared.Components/Loader',
    component: Component
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        color:"#FFF"
    }
};