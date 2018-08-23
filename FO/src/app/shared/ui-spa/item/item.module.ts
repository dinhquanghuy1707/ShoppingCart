import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DateTimeModule } from '../../business/date-time/date-time.module'
import { ItemComponent } from './item.component';

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        DateTimeModule
    ],
    declarations: [ItemComponent],
    exports: [ItemComponent]
})


export class ItemModule { }