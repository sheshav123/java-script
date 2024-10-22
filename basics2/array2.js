const marvel_heros = ["thor", "iornman","spiderman"]
const dc_heros = ["superman","flash","batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//-------concat is used to add tow arrays 
const all_hero = marvel_heros.concat(dc_heros)
console.log(all_hero);

//------spreat is used to add more than two arrays using ...
const all_new_hero = [ ...marvel_heros,...dc_heros]
console.log(all_new_hero);


// -------flat -----------
//flat is used to make the array flat like in the bellow example of scrumblled array
// and in its functio ( ) we have to decl;are the depth.
const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);


console.log(Array.isArray("sheshav"));
console.log(Array.from("sheshav"));
console.log(Array.from({name : "sheshav"}));  // this is an interesting case


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));







