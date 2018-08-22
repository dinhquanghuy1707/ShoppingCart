import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WishItemComponent } from './wish-item.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ WishItemComponent ],
    exports: [ WishItemComponent ]
})


export class WishItemModule {}