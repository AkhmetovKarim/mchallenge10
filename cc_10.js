//Task 1 - Creating a Product Class
class Product { //create a class
    constructor(name,id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }
    getDetails() { //method
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
    updateStock(quantity) { //method
        this.stock -= quantity;
    }
}
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails());
prod1.updateStock(3);
console.log(prod1.getDetails());

//Task 2 - Creating an Order Class
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        if (this.product.stock >= this.quantity) {
            this.product.updateStock(this.quantity);
        } else {
            console.log("error");
        }
    }
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.quantity * this.product.price}`;
    }
}
let order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails());
console.log(prod1.getDetails());

//Task 3 - Creating an Inventory Class
class Inventory {
    constructor() {
        this.products =[];
    }
    addProduct(product) {
        this.products.push(product);
    }
    listProducts() {
        this.products.forEach(product => console.log(product.getDetails()));
    }
}
let inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();




