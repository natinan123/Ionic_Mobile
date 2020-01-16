import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScreenPageRoutingModule } from './screen-routing.module';

import { ScreenPage } from './screen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScreenPageRoutingModule
  ],
  declarations: [ScreenPage]
})
export class ScreenPageModule {}
