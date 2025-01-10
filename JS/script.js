const shops = [
{rice : 500},
{oil : 100},
{bread : 50},
];
 const budget = [1000, 5000, 10000];
 
 const map = new Map([ 
   // [{paper: 400}, 7000]
 ]);

 //shops.forEach((shop, i) => {
   //map.set(shop, budget[i])
 //});
console.log(map);



const goods = [];
 for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[0])
};
console.log(goods);



for (let [shop, price] of map.entries) {
    console.log(price, shop)
}