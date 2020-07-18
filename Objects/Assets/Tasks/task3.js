//3rd Task

let apple = new Object();
apple.price = 1700;
apple.model = "iPhone X";
apple.memory = 64;
apple.color = "Space Grey";
apple.releaseDate = 2018;


let samsung = new Object();
samsung.price = 1699;
samsung.model = "Galaxy S9";
samsung.memory = 64;
samsung.color = "White";
samsung.releaseDate = 2018;


let xiaomi = new Object();
xiaomi.price = 699;
xiaomi.model = "Redmi 7";
xiaomi.memory = 128;
xiaomi.color = "White";
xiaomi.releaseDate = 2017;


let honor = new Object();
honor.price = 800;
honor.model = "10 X";
honor.memory = 64;
honor.color = "Blue";
honor.releaseDate = 2019;


let nokia = new Object();
nokia.price = 400;
nokia.model = "Lumia 400";
nokia.memory = 16;
nokia.color = "Yellow";
nokia.releaseDate = 2015;

let mobilePhones = [apple, samsung, xiaomi, honor, nokia];

let filtered = mobilePhones.filter((value, index, arr)=>
{
    return value.color == "White";
})

console.log(filtered);
