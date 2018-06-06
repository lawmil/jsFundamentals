// return

function capitalizeName(name) {
    let capName = '';
    for (let l in name) {
        if (l == 0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    //console.log(capName);
    return capName;

}

const newName = capitalizeName('branDON');

console.log(newName + ', how are you today?');


function tipAmount(orderTotal, tipPerc) {
    return orderTotal * tipPerc;
}

let tip = tipAmount(19.97, .20);
console.log(tip);