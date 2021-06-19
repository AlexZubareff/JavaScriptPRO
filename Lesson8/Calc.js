'use strict'

const sum = (a, b) =>{
    if (a == null || b == null) {
        return null;
      }

      if (a == "" || b == "") {
        return "Error Code 1";
      }

      if (a == undefined || b == undefined) {
        return null;
      }
    
    let result = a + b;
        return result;
}

const sub = (a, b) =>{
    if (a == null || b == null) {
        return null;
      }

    if (a == "" || b == "") {
        return "Error Code 1";
      }

    if (a == undefined || b == undefined) {
        return null;
      }
    
    let result = a - b;
        return result;
}

const div = (a, b) =>{
    if (a == null || b == null) {
        return null;
      }
    if (a == 0 || b == 0) {
        return 0;
      }
    if (a == "" || b == "") {
        return 0;
      }

    if (a == undefined || b == undefined) {
        return null;
      }
    
    let result = a / b;
        return result;
}


const mult = (a, b) =>{
    if (a == null || b == null) {
        return null;
      }
    if (a == 0 || b == 0) {
        return 0;
      }
    if (a == "" || b == "") {
        return 0;
      }

    if (a == undefined || b == undefined) {
        return null;
      }
    
    let result = a * b;
        return result;
}


module.exports = {
    sum: sum,
    sub: sub,
    div: div,
    mult: mult
  }