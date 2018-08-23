import { Pipe, PipeTransform, OnInit } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'dateTime' })
export class DateTimePipe implements PipeTransform {

    transform(date): any {

        let x = moment();
        let y = moment(date);
        let duration = moment.duration(x.diff(y))
        let seconds = duration.as('seconds');
        switch (true) {
            case (seconds < 60): return "Now";
            case (seconds < 60 * 2): return "1 minute before";
            case (seconds < 60 * 60): return Math.floor(seconds / 60) + " minutes before";
            case (seconds < 60 * 60 * 2): return " 1 hour before";
            case (seconds < 60 * 60 * 24): return Math.floor(seconds / (60 * 60)) + " hours before";
            default: {
                return "Added " + moment(date).format("LL");
            }
        }
    }

}