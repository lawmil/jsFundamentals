// scope

var x = 12;

function scope() {
    var x = 33;
    console.log(x);
}

console.log(x);
scope();

function varTest() {
    var scope = 1;
    if (true) {
        var scope = 2;
        console.log(scope);
    }
    console.log(scope);
}
varTest();