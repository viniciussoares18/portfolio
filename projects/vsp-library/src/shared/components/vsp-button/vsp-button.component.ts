import { Component, EventEmitter, Input, Output } from '@angular/core';
import { VspButtonProps } from '../../interfaces/vsp-button/vsp-button-props.interface';

@Component({
    selector: 'vsp-button',
    templateUrl: 'vsp-button.component.html',
    styleUrls: ['vsp-button.component.scss']
})
export class VspButtonComponent {
    @Input()
    public props: VspButtonProps = { desc: '-' };

    @Output()
    public onClickEmitter: EventEmitter<any> = new EventEmitter();

    public onClick(): void {
        this.onClickEmitter.emit();
    };
};