import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PopupComponent } from './popup.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ PopupComponent ],
    exports: [ PopupComponent ]
})

export class PopupModule {}
