//Q4
interface Product  {
    item:string,
    quantity:number,
}
function getProduct ()  {
    return new Promise ((res,rej)=> {
        setTimeout(()=> {
            res({item:'Kia' , quantity:95})
        },2000)
    })
}
async function calculatePrice (getProduct: { item: string; quantity: number }) {
    return await new Promise ((res,rej)=> {
        setTimeout(()=> {
            res(getProduct.quantity* 1000);
        },3000)
    })
}
getProduct()
    .then((pro)=> {
        calculatePrice(pro as Product)
            .then(price => {
                const Pro = pro as Product
                console.log(`The Price of the item : ${Pro.item} is ${price}`)
            })
    })

// async function run () {
//     const Pro = await getProduct() as Product;
//     const price = await calculatePrice(Pro);
//     console.log(`The Price of the item : ${Pro.item} is ${price} `)
// }
// run();