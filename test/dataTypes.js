"use strict";

const dataTypes = (arg) => {
    let typeCheck = (arg, type) => {
        return arg.constructor.toString().indexOf(type) > -1;
    };
    if (arg !== undefined & arg !== null) {
        if (typeCheck(arg, 'String')) {
            return arg.length;
        } else if (typeCheck(arg, 'Number')) {
            if (arg < 100) {
                return 'less than 100';
            } else if (arg === 100) {
                return 'equal to 100';
            } else {
                return 'more than 100';
            }
        } else if (typeCheck(arg, 'Boolean')) {
            return arg;
        } else if (typeCheck(arg, 'Array')) {
            if (arg.length >= 3) {
                return arg[2];
            } else {
                return undefined;
            }
        } else if (typeCheck(arg, 'Function')) {
            arg(true);
            return 'called callback';
        }
    } else {
        return 'no value';
    }
};
