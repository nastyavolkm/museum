import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule, SharedModule
  ],
  exports: [HeaderComponent, MainPageComponent],
})
export class MainModule { }
