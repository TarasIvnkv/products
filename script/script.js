const vegetables = [
    {
        name: `tomato`,
        icon: `🍅`,
        price: 2.3
    },
    {
        name: `carrot`,
        icon: `🥕`,
        price: 1.5
    },
    {
        name: `corn`,
        icon: `🌽`,
        price: 2.78,
        season: true
    }
];

const fruits = [
    {
        name: `watermelon`,
        icon: `🍉`,
        price: 7.7,
        season: true
    },
    {
        name: `cherries`,
        icon: `🍒`,
        price: 8.5,
        season: true
    },
    {
        name: `pineapple`,
        icon: `🍍`,
        price: 9.8
    }
];

const Product = {
    getPrice(){
        if(this.season){
            return this.price * this.seasonKoef;
        }else{
            return this.price;
        }
    },
    getInfo(){
        const type = this.type === "Vegetable" ? "Vegetable" : "Fruit";
        const price = this.getPrice().toFixed(2);
        return `Product: ${this.icon}${this.name}. Type: ${type}. Price: ${price}$`
    }
};

const Vegetable = {
    type: `Vegetable`,
    seasonKoef: 1.3,
    __proto__: Product
};

const Fruit = {
    type: `Fruit`,
    seasonKoef: 2,
    __proto__: Product
};

function makePrototype(arr, objectProto){
    return arr.map(item => Object.assign(Object.create(objectProto),item));
}

const vegetableProducts = makePrototype(vegetables, Vegetable);
const fruitProducts = makePrototype(fruits, Fruit);

function renderList(arr) {
    document.write('<ul>');
    arr.forEach(item => {
        const productInfo = item.getInfo();
        document.write(`<li>${productInfo}</li>`);
    });
    document.write('</ul>');
}

renderList(vegetableProducts);
renderList(fruitProducts);
