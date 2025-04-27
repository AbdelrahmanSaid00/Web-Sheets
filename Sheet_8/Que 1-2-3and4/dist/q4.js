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
function getProduct() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ item: 'Kia', quantity: 95 });
        }, 2000);
    });
}
function calculatePrice(getProduct) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new Promise((res, rej) => {
            setTimeout(() => {
                res(getProduct.quantity * 1000);
            }, 3000);
        });
    });
}
getProduct()
    .then((pro) => {
    calculatePrice(pro)
        .then(price => {
        const Pro = pro;
        console.log(`The Price of the item : ${Pro.item} is ${price}`);
    });
});
// async function run () {
//     const Pro = await getProduct() as Product;
//     const price = await calculatePrice(Pro);
//     console.log(`The Price of the item : ${Pro.item} is ${price} `)
// }
// run();
