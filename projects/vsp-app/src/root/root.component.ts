import { Component } from '@angular/core';
import { VspMenuProps } from '../core/interfaces/vsp-menu-props.interface';
import { VspLayoutModule } from '../layout/vsp-layout.module';

@Component({
  selector: 'root',
  standalone: true,
  imports: [VspLayoutModule],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent {

  private _email: string = 'vinicius.sds04@gmail.com';

  public menuProps: VspMenuProps = {
    email: {
      value: this._email,
      onClick: () => { window.location.href = `mailto:${this._email}` }
    },
    navProps: {
      itens: [
        {
          desc: 'LinkedIn',
          onClick: () => {
            window.open('https://www.linkedin.com/in/vinicius-soares-0806a9191/', '_blank');
          }
        },
        {
          desc: 'GitHub',
          onClick: () => {
            window.open('https://github.com/viniciussoares18/', '_blank');
          }
        },
        {
          desc: 'Instagram',
          onClick: () => {
            window.open('https://www.instagram.com/oviniciusoares/', '_blank');
          }
        }
      ]
    }
  };
}
