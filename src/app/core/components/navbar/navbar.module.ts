import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  declarations: [NavbarComponent],
  imports: [AvatarModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
