// 1
function spookyGhost(){
    console.log(`Boo!!!`);
}
spookyGhost();

console.log(`==========`);

// 2
function candy(goal = arguments){
    for(let i = 1; i <= goal; i++){
        console.log(`Get Candy`);
    }
}
candy(4);

console.log(`==========`);

// 3
function werewolf(a, b){
    if (a === `Full` && b === `Moon`){
        console.log(`ARH-WOOO!`);
    }
}
werewolf(`Full`, `Moon`);

console.log(`==========`);

// 4
function halloween(){
    console.log(`October 31st`);
    return `October 31st`;
}
halloween();

console.log(`==========`);

// 5
function isEnoughCandy(pieces = arguments){
    let seasons = pieces
    if (seasons >= 31){
        pieces = true;
        console.log(pieces);
        return pieces;
    } else {
        pieces = false;
        console.log(pieces);
        return false;
    }
}
isEnoughCandy(31);
isEnoughCandy(10);

console.log(`==========`);

// 6
function candyCounter(nums = arguments){
    let sum = 0;
    for (var i in nums){
        sum += nums[i];
    }
    console.log(sum);
    return sum;
}
candyCounter([1, 2, 3]);
candyCounter([25, 30, 45]);

console.log(`==========`);

// 7
const hauntedMansion = function (){
    console.log(`Welcome, foolish mortals, to the Haunted Mansion!`);
}
hauntedMansion();

console.log(`==========`);

// 8
ghostbusters = () => `Who You Gonna Call?`;

// 9
// No

// 10
// Yes

// 11a
const costumes = [`Ghost`, `Princess`, `Pirate`];

// 11b
let costumeFunction = function (){
    const upperCostumes = costumes.map(name => name.toUpperCase());
    console.log(upperCostumes);
}
costumeFunction();

console.log(`==========`);

// 12a
const stephenKingMovies = [`The Shining`, `Christine`, `It`, `The Mist`, `Creepshow`, `Pet Sematary`];

// 12b
let cMovies = () => {
    const twoMovies = stephenKingMovies.filter(function(word){
        return word[0] === "C";
    })
    console.log(twoMovies);
}
cMovies();

// 13a
const halloweenSongs1 = [`Monster Mash`, `Thriller`];

// 13b
const halloweenSongs2 = [`I Put A Spell On You`, `This Is Halloween`, `Ghostbusters`];

// 13c
halloweenJukeBox = (songs = arguments) => {
    songs
}