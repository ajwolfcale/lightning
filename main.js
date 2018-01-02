
// let strArr = [45, "I", true, null, "am", 3.56, "a", undefined, {
//     catchphrase: "Oh hai, Mark"}, "JS", "rockstar"].filter( (item) => {
//                 return typeof(item) === "string";
//             });
// console.log('string array', strArr);
    

// function transtoSpanish (user-input){
//     return: translated text
// }

// -------------------------------------- Jan 2 lightning--------------------------------

// make a for, .forEach, and .filter loop to get the same results 
// make an array called fave_demo that contains only ages 18-49

// let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]

//---------------------------------For loop
// let fave_demo = [];

// for(i = 0; i < ages.length; i++)
//     if (ages[i] > 17 && ages[i] < 50){
//         console.log(ages[i]);
//     };
  

//---------------------------------For Each
// let favoriteDemo = [];

// ages.forEach( (age)) => {
//     if(age < 50 && age > 17) favoriteDemo.push(age);
// }

//---------------------------------Filter

// function middleAges (age) {
//     return age > 17 && age < 50;
// }

// function finalCount() {
//     console.log(ages.filter(middleAges));
// }

// finalCount();

//-------Or use .filter like this

// let fave_demo = ages.filter( (age) => age < 50 && age < 17 );



// NEW---------------------------------------------------------------------------------------------------------------------------------


///////////////////////////// use dot notation to access the value of the key "meaning_of_life" in this object

// hitchhikers_guide = {
//     characters: ["Zaphod", "Arthur", "Ford", "Trillian"],
//     catchphrase: "Don't Panic",
//     random_facts: {
//       copies_sold: 14000000,
//       formats: ["radio", "TV", "film", "graphic novel"],
//       ultimate_answer: {
//         meaning_of_life: 42
//       }
//     }
//   };

// console.log(hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life);


// NEW---------------------------------------------------------------------------------------------------------------------------------

///////////////////////////// Capitalize 'the', insert a comma after 'teacher' and output: 
// Yoda says, "The greatest teacher, failure is"

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"];

yoda_quote.map( (word) => {
    if(word === "the")
        word = word.slice(0,1).toUpperCase() + word.slice(1)
    if (word === "teacher")
         word = word + ","
        return  word
}).join(" ")



































