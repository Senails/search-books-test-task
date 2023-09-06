
import { CreateTrotling, Trotling } from '../../utils/CreateTrotling';
import styles from './index.module.css';

type HintPosition = {
    top: string,
    bottom: string,
    left: string,
    right: string,
}

export class Hint extends HTMLElement {
    private static _distanceAboutMouse: number = 5;
    private static _cssClass: string = styles.hint;

    private static _elem: HTMLElement|null = null;
    private static _hoverElem: Hint|null = null;

    private static _posIsTop: boolean = false;
    private static _posIsLeft: boolean = false;

    private static _trotlingShow: Trotling = CreateTrotling(Math.ceil(1000 / 60));
    private static _trotlingHide: Trotling = CreateTrotling(Math.ceil(1000 / 60));

    private static _isVisible = false;
    
    private _text: string|null = null;

    
    //lifecicle
    public connectedCallback() {
        this._text = this.getAttribute('text');

        this.addEventListener("mousemove",(event: MouseEvent)=>{
            if (this._text?.length === 0) return;
            Hint._trotlingShow(()=>Hint.Show(this._text!, event.clientX, event.clientY));
            Hint._hoverElem = this;
        });
        this.addEventListener("mouseleave",()=>{
            Hint._trotlingHide(() => Hint.Hide());
        });
    }
    public disconnectedCallback() {
        if (Hint._hoverElem === this) Hint._trotlingHide(() => Hint.Hide());
    }
    static get observedAttributes() {
        return ["text"];
    }
    attributeChangedCallback(name: string, _: string, newValue: string) {
        if (!Hint._isVisible) return;
        if (name === "text"){
            this._text = newValue;
            if (Hint._elem) Hint.Show(newValue);
        }
    }


    //hint contollers
    public static Show(text: string, x: number|null = null, y: number|null = null):void{
        Hint._isVisible = true;
        const elem = this.GetHintElement();
        if (!elem) return;

        elem.innerHTML = text;
        elem.style.opacity = "1";
        elem.style.transition = "none";
    
        if(!x || !y) return;
        const pos = this.CalculateHintPosition(x, y);
    
        elem.style.top = pos.top;
        elem.style.bottom = pos.bottom;
        elem.style.left = pos.left;
        elem.style.right = pos.right;
    }
    public static Hide(){
        Hint._isVisible = false;
        if (!this._elem) return;

        const elem = this.GetHintElement();
        if (!elem) return;
        elem.style.transition = "opacity 0.5s";
        elem.style.opacity = "0";
    }  


    //utils
    private static RemoveElem(){
        this._elem?.remove();
        this._elem = null;
    }
    private static CalculateHintPosition(x:number,y:number):HintPosition{
        const docW = document.documentElement.clientWidth;
        const docH = document.documentElement.clientHeight;
        const isTop = (y * (this._posIsTop ? 1.2 : 1) > (docH - y) * (this._posIsTop ? 1 : 1.2));
        const isLeft = (x * (this._posIsLeft ? 1.2 : 1) > (docW - x) * (this._posIsLeft ? 1 : 1.2));
    
        this._posIsTop = isTop;
        this._posIsLeft = isLeft;
    
        return {
            top: isTop ? `auto` : `${y + 5 + this._distanceAboutMouse}px`,
            bottom: isTop ? `${docH - y + this._distanceAboutMouse}px` : `auto`,
            left: isLeft ? `auto` : `${x + 5 + this._distanceAboutMouse}px`,
            right: isLeft ? `${docW - x + this._distanceAboutMouse}px` : `auto`,
        }
    }
    private static GetHintElement():HTMLElement|null{
        if (this._elem) return this._elem;
        this._elem = document.querySelector("." + this._cssClass);

        if (this._elem) return this._elem;
        this._elem = this.CreateHintElement();

        return this._elem;
    }
    private static CreateHintElement():HTMLElement|null{
        const elem = document.createElement("span");
        elem.classList.add(this._cssClass);
        elem.classList.add("noselect");
    
        elem.addEventListener("mouseenter",()=>{
            this.RemoveElem();
        });
    
        document.body.appendChild(elem);
        return elem;
    }
}

if (!customElements.get("hover-hint")) customElements.define("hover-hint", Hint);