// arrays

let x = []

console.log(typeof x);

let student = ['Tyler','Sasan', 'Brandon','Lawrence', 'Rajni', 'Sherri', 'David'];

console.log(student[4]);

let cohort = ['Lawrence', 35, true, ['Brandon', 4, 'Sherri'], 6, false];

console.log('Hello', cohort[3][2], 'you look nice today');

// populating and referring

let food = ['Hamburger', 'Chicken', 'Steak','Burrito','BBQ'];

food.push('Pizza');
food.splice(2,1, 'Hambeurg Helper :(');
food.splice(3,0, 'Pecan Pie');
food.pop(); 
for (f in food) {
    //console.log(f);
    console.log(food[f]);
}

let movies = ['Equalizer', 'Wanted', 'Star Wars', 'The Hobbit'];

movies.push('The Book of Eli');
movies.splice(2,0, 'I am Legend');

for (m in movies) {
    console.log(movies[m]);
}

