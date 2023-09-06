import { Loader } from "../../shared/components/loader";
import { MouseHoverHint } from '../../shared/components/mouse-hover-hint/index';

export function MainPage(){
    return <div>
        <div style={{border:"1px solid red", height:"100px", width:"100px"}}>
            <MouseHoverHint text="loader">
                <Loader/>
            </MouseHoverHint>
        </div>
    </div>
}