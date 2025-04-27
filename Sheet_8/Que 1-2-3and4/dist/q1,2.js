"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const a = {
    username: "Abdalrahman",
    age: 35,
};
let ok = false;
console.log("Program Starting");
function fetchDatau() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((res, rej) => {
            if (ok) {
                setTimeout(() => {
                    res({ User: { username: a.username, age: a.age } });
                }, 2000);
            }
            else {
                setTimeout(() => {
                    rej("Rejected");
                }, 2000);
            }
        });
    });
}
fetchDatau().then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
}).finally(() => {
    console.log("Program Completed!");
});
