function f1(nome) {
    console.log(`Func ${nome}...`);
}

let f2 = function(nome) {
    console.log(`func ${nome} - part 1`);
};

f2("F2");

f2 = function(nome) {
    console.log(`func ${nome} - part 2`);
};

const f3 = (nome) => {
    console.log(`func ${nome}...`);
};
const f4 = nome => {
    console.log(`func ${nome}...`);
};
const f5 = nome => console.log(`func ${nome}...`);



f1("F1");
f2("F2");
f3("F3");
f4("F4");
f5("F5");