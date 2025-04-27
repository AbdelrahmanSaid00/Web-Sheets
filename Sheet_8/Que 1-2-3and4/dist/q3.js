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
const x = {
    username: "Ahmed",
};
function login() {
    if (x.username === "Ahmed") {
        return true;
    }
    else {
        return false;
    }
}
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        let done = login();
        return yield new Promise((res, rej) => {
            if (done) {
                res("Successfully logged in !");
            }
            else {
                rej("Failedto log in, please try again");
            }
        });
    });
}
fetchData()
    .then((ans) => {
    console.log(ans);
})
    .catch(err => {
    console.log(err);
})
    .finally(() => {
    console.log("Thanks for your time");
});
