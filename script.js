
const Players = [  
                    "Gianni",
                    "Lily",
                    "Dolan",
                    "Luna",
                    "Alex",
                    "Jessie",
                    "Robert",
                    "Sween",
                    "Cal"
                ];
const Places = [
                    "the mini golf course",
                    "a restaurant",
                    "a bar",
                    "a club",
                    "the golf course",
                    "a pool",
                    "the zoo",
                    "a car",
                    "a car",
                    "the pool",
                    "the pool",
                    "the pool",
                    "the pool",
                    "the billiards room",
                    "the billiards room",
                    "the kitchen",
                    "the kitchen",
                    "the kitchen",
                    "their pajamas",
                    "the desert",
                    "joshua tree",
                    "a store",
                    "the living room",
                    "their bedroom",
                    "a bathroom",
                    "a bathroom that is not a house bathroom",
                    "a pool that is not the house pool",
                    "the grocery store",
                    "an impaired state"
                ];
const Tasks =   [
                    "shotgun a beer",
                    "shotgun a twee",
                    "shotgun with you (smoke transfer thing)",
                    "take a shot",
                    "take two shots",
                    "take three shots",
                    "take four shots",
                    "roll a joint",
                    "tie your shoes",
                    "take off their underwear",
                    "take off their shirt",
                    "take off your pants",
                    "take off your shirt",
                    "swap clothes with you",
                    "read something out loud",
                    "be on your shoulders/you be on theirs",
                    "kiss 3 people",
                    "do a handstand",
                    "do a cartwheel",
                    "put their finger in your mouth",
                    "put your finger in their mouth",
                    "eat a spoonful of soy sauce, mustard or hot sauce",
                    "change their instagram profile picture",
                    "eat a raw egg yolk",
                    "eat alphabet soup",
                    "do 10 push ups",
                    "do 10 jumping jacks",
                    "let you give them a hickey",
                    "get naked",
                    "have them tell you their biggest fear",
                    "have them tell the group a big fat lie",
                    "read a part of the bible",
                    "do a headstand",
                    "shotgun a whiteclaw",
                    "drink a bottle of wine by themselves",
                    "slap someone",
                    "slap you",
                    "give you $20",
                    "smoke weed (not in the house)",
                    "smoke weed alone (not in the house)",
                    "make a silly face",
                    "make you something",
                    "punch someone in the stomach",
                    "punch you in the stomach",
                    "pull one of your hairs out",
                    "put on makeup",
                    "be the only person not eating",
                    "be the only person without a shirt on",
                    "be the only person in their swimsuit",
                    "be the only person who has been drinking",
                    "lose a bet",
                    "win a bet",
                    "bet on something",
                    "roll a pair of dice",
                    "throw a ball",
                    "kick a ball",
                    "wear your hat",
                    "do a push up",
                    "play a video game",
                    "play a song off of their phone",
                    "kickboxing lesson (giving or receiving)",
                    "empty their pockets",
                    "grab a body part of yours",
                    "stop and smell the flowers",
                    "wear a fake mustache",
                    "wear a fedora",
                    "light a candle",
                    "answer a riddle",
                    "tell a joke in front of 4 people",
                    "do a burpee",
                    "drink an imported beer",
                    "drink a latte",
                    "put on a bracelet",
                    "watch family guy",
                    "shed a tear",
                    "pop a balloon",
                    "blow up a balloon",
                    "tell you about the last time they were intimate with someone",
                    "play cards",
                    "tell you their body count",
                    "eat a hot cheeto or a taki",
                    "try to lick their elbow",
                    "get loud!!!",
                    "do the hokey pokey",
                    "sing a song",
                    "sing a sad song",
                    "raise their hands",
                    "spin in a circle",
                    "have their hair cut",
                    "drink three beers",
                    "be completely alone for 10 minutes",
                    "tell you about their first kiss",
                    "tell you they love you",
                    "tell someone that they're not funny",
                    "sit back, relax, and enjoy the show",
                    "pretend to have sex with someone",
                    "name a state capital",
                    "group hug",
                    "lift you up",
                    "put their thang down flip it and reverse it",
                    "paint a picture",
                    "draw a picture",
                    "take a picture",
                    "act like a dog",
                    "meow like a cat",
                    "own up to farting",
                    "existentially think about their own mortality",
                    "call their mom",
                    "text their parents",
                    "call a sibling",
                    "eat dessert",
                    "blow a bubble",
                    "twerk",
                    "whip and nae nae",
                    "dab on em",
                    "hit the griddy",
                    "drink tea",
                    "drink electrolit",
                    "get scary high",
                    "get wizard drunk",
                    "plank",
                    "mannequin challenge",
                    "confess to something",
                    "hold your hand",
                    "hit on someone"
                ];
const Passwords = 
                [
                    "MOBAMBA",
                    "HOTLINEBLING",
                    "RACKCITY",
                    "INTERGALACTIC",
                    "SUPERSTITION",
                    "SUNDAYMORNING",
                    "ROCKWITHYOU",
                    "WILDHORSES",
                    "SEXYBACK"
                ];
const TOY_Passwords = 
                [
                    "1MOBAMsBA",
                    "H2OTLINEfBLING",
                    "RA3CKCIT4Y",
                    "INT4ERGALsACTIC",
                    "SUPE5RST5ITION",
                    "SUNDA6YMORNING",
                    "ROCKWI7THYOU",
                    "WIL3DHOR8SES",
                    "SEXY6BACK"
                ];

pform.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = pword.value;
    setupUI(password);
})

// Sets Math.random to a PRNG initialized using the given explicit seed.
// Math.seedrandom('hello.');
// console.log(Math.random());          // Always 0.9282578795792454
// console.log(Math.random());          // Always 0.3752569768646784


// event listener for the oo hard button

// randomize every time (but same seed so same results)
// Randomize list of names,
// randomize list of passwords 
// zip lists, target is next person in list, loops back to start
function shuffleArray(array, seed) {
    Math.seedrandom(seed)
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const player_seed = "PalmSprings1.";
const password_seed = "sittingbythepool";

////////////////////////////////////////////////////////////////////////////////
// TO INITIALIZE WHO HAS WHAT PASSWORD
// shuffleArray(Players, player_seed);
// shuffleArray(Passwords, password_seed);
// const pairs = [];
// for (i = 0; i < 9; i++){
//     pairs[i] = Players[i] + Passwords[i];
// }
// shuffleArray(pairs, "hellyeah");
// console.log(pairs);
////////////////////////////////////////////////////////////////////////////////


const loggedOutLinks = document.querySelectorAll('.password-div');
const loggedInLinks = document.querySelectorAll('.instructions');
const instructions = document.getElementById('Instructions');

const setupUI = (pword) => {
    // console.log(pword);
    if (Passwords.includes(pword)) {
        // toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'block');
        loggedOutLinks.forEach(item => item.style.display = 'none');
        // shuffle players and shuffle passwords (want to line up for everyone)
        shuffleArray(Players, player_seed);
        shuffleArray(Passwords, password_seed);
        let index = Passwords.indexOf(pword);
        shuffleArray(Tasks, TOY_Passwords[index]);
        shuffleArray(Places, Tasks[index]);
        const playername = Players[index];
        // console.log(playername);
        // console.log(index, Players.length, (index+1) % Players.length);
        const target = Players[(index+1) % Players.length];
        const task = Tasks[0];
        const place = Places[0];

        instructions.innerHTML = `
            <h3>Hello ${playername} or their assassin</h3>
            <button id="Show" value="Click to show" onclick=" 
            document.getElementById('Show').style.display='none'; 
            document.getElementById('Hide').style.display='block'; 
            document.getElementById('Task').style.display='block'">Click to reveal ${playername}'s task</button>
            <button id="Hide" value="Click to hide" style="display:none;" onclick=" 
            document.getElementById('Show').style.display='block'; 
            document.getElementById('Hide').style.display='none'; 
            document.getElementById('Task').style.display='none'">Click to hide</button>
            <br>
            <div id="Task" class="Task" style="display:none">You must get ${target} to ${task} in ${place}</div>
            
            <p>Once you have accomplished your task, have your target tell you their password.</p>
        `;


    } else {
        // toggle UI elements
        loggedInLinks.forEach(item => item.style.display = 'none');
        loggedOutLinks.forEach(item => item.style.display = 'grid');
        pform.reset();
    }
};