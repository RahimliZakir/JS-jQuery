

const UmumiBilgi = function () {

    return `${this.name} ${this.model} ${this.memory} ${this.color}`
}


let Phone = new Object();

Phone.name = "Samsung";
Phone.model = "A30s";
Phone.memory = 64;
Phone.color = "White";
Phone.hamisi = UmumiBilgi;

console.log(Phone.hamisi());

