

function Transaction(id, group, idenity, amount, paymentType){
     let Now = new Date();
     let Years = Now.getFullYear();
     let Months = Now.getMonth()+1;
     let Days = Now.getDay();
     let Hours = Now.getHours();
     let Minutes = Now.getMinutes();
     let Seconds = Now.getSeconds();
     this.time = `${Days}.${Months}.${Years} ${Hours}:${Minutes}:${Seconds}`;
     this.id = id;
     this.group = group;
     this.idenity = idenity;
     this.amount = amount;
     this.paymentType = paymentType;
}


let odenish1 = new Transaction(3345643, "Bakcell", "055-555-55-55", 2.50, "Online",this.time);
let odenish2 = new Transaction(3345644, "Azercell", "051-551-51-51", 15, "Nağd",this.time);
let odenish3 = new Transaction(3345645, "Nar Mobile", "070-570-70-52", 11, "Nağd",this.time);


let odenishler = [odenish1, odenish2, odenish3];

let filtered1 = odenishler.filter((qiymet)=>
{
     return qiymet.amount > 10;
});

let filtered2 = odenishler.filter((qiymet)=>
{
     return qiymet.group == "Azercell";
});

// console.log(filtered1);
console.log(filtered2);