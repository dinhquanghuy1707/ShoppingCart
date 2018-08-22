import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-popup',
    templateUrl: 'popup.component.html',
    styleUrls: ['./popup.component.css']
})

export class PopupComponent {
    @Input() modalTitle;
    @Input() isOpen: boolean;
    @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('myModal') modal: ElementRef;

    showModal() {
        $(this.modal.nativeElement).modal('show');
    }
    dismissModal() {
        $(this.modal.nativeElement).modal('hide');
    }

}
