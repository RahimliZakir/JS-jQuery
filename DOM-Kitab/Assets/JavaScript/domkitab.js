let name = document.querySelector('#name');
let price = document.querySelector('#price');
let author = document.querySelector('#author');
let redbutton = document.querySelector('#red-btn');
let greenbutton = document.querySelector('#green-btn');
let bluebutton = document.querySelector('#blue-btn');
let gelecek = document.querySelector('#gelecek-ul');

greenbutton.onclick = () => {

    if (name.value == "" || price.value == "" || author.value == "") {

        name.value = ""; price.value = ""; author.value = "";
        alert('Zəhmət olmasa formu tam doldurun!')
        return;
    }

    else {
        let op = document.createElement('li');

        op.innerHTML = `${name.value} / ${price.value} ₼ / ${author.value}`;

        gelecek.appendChild(op);

        name.value = ""; price.value = ""; author.value = "";

    }



}


bluebutton.onclick = () => {

    gelecek.removeChild(gelecek.firstChild);

}


redbutton.onclick = () => {
    gelecek.innerHTML = '';
}


