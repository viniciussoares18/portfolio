import { Component, Input, OnInit } from "@angular/core";
import { VspTextProps } from "../../interfaces/vsp-text/vsp-text-props.interface";

@Component({
    selector: 'vsp-text',
    templateUrl: 'vsp-text.component.html',
    styleUrls: ['vsp-text.component.scss']
})
export class VspTextComponent implements OnInit {

    public mouseEnter: boolean = false;

    public style: { [key: string]: string } = {};

    @Input()
    public props: VspTextProps = {};

    constructor() { };

    ngOnInit(): void {
        this.addColorInStyle();
        this.addFontWeightInStyle();
    }

    public get handledClass(): string {
        return this.props.styleType ?? 'text'
    };

    public handleMouse(): void {
        this.mouseEnter = !this.mouseEnter;
        if (this.mouseEnter) {
            this.handleMouseEnter();
        }
        else {
            this.handleMouseLeave();
        }
    };

    public onClick(): void {
        this.props.onClick?.();
    };

    private addColorInStyle(): void {
        this.style = { ...this.style, color: this.props.color ?? '' };
    };

    private addFontWeightInStyle(): void {
        this.style = { ...this.style, fontWeight: this.props.fontWeight ?? '' };
    };

    private handleMouseEnter(): void {
        if (this.props.onHover) {
            this.style = {
                ...this.style,
                cursor: this.props.onHover.cursorPointer ? 'pointer' : '',
                color: this.props.onHover.color ?? '',
                transition: '0.2s'
            };
        };
    };

    private handleMouseLeave(): void {
        delete this.style['cursor'];
        this.addColorInStyle();
    };
};