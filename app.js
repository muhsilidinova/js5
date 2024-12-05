// массивы и объекты                         массивы-[]-array и объекты-{} ключ дары

{ }  []

const array1 = ["Myrza", 20, "programmer", { name: 'Maks' }, 23456, 345678, true, false,]

console.log(array1);

console.log(array1[2]);
console.log(array1[4]);



const obj2 = {
    name: "Myrza",
    age: 20,
    occupation: "programmer",
    a: [
        "Myrza",
    ]
}

console.log(obj);
// alert(obj)

console.log(obj2.occupation, obj2.name);



// const array = ['Maks', 35, 'hobbi', 'football', false]

// console.log(Менин атым ${array[0]} жашым ${array[1]} ${array[2]} ${array[3]} ${array[4]});
// console.log(array[0], array[1], array[2]);


const obj = {
    name: "Myrza",
    age: 20,
    occupation: "programmer",
    hobbies: ["football", "basketball"],
}

console.log(obj.name, obj.age, obj.occupation, obj.hobbies[0], obj.hobbies[1]);

const text = [
    { count: 'числа' },
    "солнечный",
    "сегодня",
    "день",
    { day: 16 },
    "очень",
    "и",
    "теплый"
];

// Сегодня 16 числа день солнечный и очень теплый

console.log(text[2], text[4].day, text[0].count, text[3], text[1], text[6], text[5], text[7])




// HOMEWORK--------------------------------------------------------------------------------------------------------------------------------------

const array = ['Шахида', '16да', 'Бакир', 'Миргул', 'чону менмин', '4-сестренкам бар', 'имам', 'ош базарда' ]

 console.log(`Менин атым ${array[0]} жашым ${array[1]} Атамдын аты ${array[2]}, Апамдын аты ${array[3]} уй буломдо эн ${array[4]}, менден кийин
${array[5]}. Атам мечитте ${array[6]} болуп иштейт, Апам ${array[7]} иштейт`);


// Homework 2

const obj1 = {
    name: "Shahida",
    age: "16",
    parents: "parents Bakir and Mirgul",
    sisters: "4 sisters",
    dad: "Dad isnan imam in a mosque",
    mom:"Mom works at the Osh market",
}

console.log(obj1.name, obj1.age, obj1.parents, obj1.sisters, obj1.dad, obj1.mom );






































