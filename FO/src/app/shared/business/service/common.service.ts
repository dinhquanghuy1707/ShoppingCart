import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {

    isNullOrEmpty(obj: any): boolean {
        return obj === null || obj === '' || obj === undefined;
    }

    isNullOrEmptyList(objs: Object[]): boolean {
        return objs === null || typeof objs === 'undefined' || objs.length === 0;
    }

    validateEmail(email: string, isRequired: boolean): boolean {
        if (isRequired == true && email.length == 0)
            return false;
        if (email.length > 50)
            return false;

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    validatePhone(phone: string, isRequired: boolean): boolean {
        if (isRequired == true && phone.length == 0)
            return false;

        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return re.test(phone);
    }

    isJsonString(jsonString: string) {
        try {
            var o = JSON.parse(jsonString);
            if (o && typeof o === 'object') {
                return true;
            }
        } catch (e) { }
        return false;
    };

}
