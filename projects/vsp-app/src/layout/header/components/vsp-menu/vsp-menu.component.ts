import { Component, Input } from '@angular/core';
import { VspMenuProps } from '../../../../core/interfaces/vsp-menu-props.interface';

@Component({
    selector: 'vsp-menu',
    templateUrl: 'vsp-menu.component.html',
    styleUrls: ['vsp-menu.component.scss']
})
export class VspMenuComponent {
    @Input()
    public props: VspMenuProps = {
        email: {
            value: '',
            onClick: () => { }
        },
        navProps: {
            itens: []
        }
    };
};