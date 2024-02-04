const jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "Why did the melon jump into the lake? It wanted to be a water-melon.",
    "What did the duck say when it bought lipstick? “Put it on my bill.”",
    "What do you call a pig that does karate? A pork chop.",
    "What has a bed that you can’t sleep in? A river.",
    "Why were the teacher’s eyes crossed? She couldn’t control her pupils.",
    "What starts with E, ends with E, and has only 1 letter in it? An Envelope.",
    "How does the ocean say hello? It waves.",
    "What lights up a soccer stadium? A soccer match.",
    "What creature is smarter than a talking parrot? A spelling bee.",
    "Which U.S. state has the smallest soft drinks? Minnesota (as in, “mini-soda”)",
    "Why couldn’t the leopard play hide and seek? Because he was always spotted.",
    "Apparently, you can’t use “beef stew” as a password. It’s not stroganoff.",
    "Why did the drum take a nap? It was beat.",
    "Where do hamburgers go dancing? They go to the meat-ball.",
    "Why did the tomato turn red? It saw the salad dressing.",
    "Why shouldn’t you write with a broken pencil? Because it’s pointless.",
    "What do you call two monkeys that share an Amazon account? Prime mates.",
    "Why are teddy bears never hungry? Because they’re always stuffed!",
    "Why did the tree go to the dentist? It needed a root canal.",
    "If athletes get athlete’s foot, what do elves get? Mistle-toes.",
    "Why couldn’t the pony sing? Because she was a little hoarse.",
    "Where do cows go for entertainment? The mooooo-vies!",
    "How does NASA organize a party? They planet.",
    "Why did Adele cross the road? To sing, “Hello from the other side!",
    "What runs around a yard without actually moving? A fence.",
    "What’s an astronaut’s favorite candy? A Mars bar.",
    "Where do sheep go to get their hair cut? The baa-baa shop.",
    "Why are there gates around cemeteries? Because people are dying to get in.",
    "What do you get when you cross a snake with a pie? A pie-thon!",
    "Why is Peter Pan always flying? He Neverlands.",
    "What’s the most musical part of the chicken? The drumstick.",
    "Why do seagulls fly over the sea? Because if they flew over a bay, they would be bagels.",
    "How do you know when the moon has had enough to eat? When it’s full.",
    "What kind of music do planets like? Neptunes.",
    "Why can’t you trust an atom? Because they make up everything.",
    "What do you call a group of disorganized cats? A cat-tastrophe.",
    "Why do bees have sticky hair? Because they use honeycombs.",
    "Where do you learn to make banana splits? At sundae school.",
    "How do you tell if a vampire is sick? By how much he is coffin.",
    "Why are ghosts good cheerleaders? Because they have a lot of spirit!",
    "What happens to a frog’s car when it breaks down? It gets toad away.",
    "Why did the witches’ team lose the baseball game? Their bats flew away.",
    "Why did the school kids eat their homework? Because their teacher told them it was a piece of cake.",
    "Why are hairdressers never late for work? Because they know all the short cuts!",
    "What is the difference between a teacher and a train? One says, “Spit out your gum,” and the other says, “Choo choo choo!”",
    "Why does Humpty Dumpty love autumn? Because Humpty Dumpty had a great fall.",
    "How do you make a tissue dance? Put a little boogie in it.",
    "What is the tallest building in the entire world? The library, because it has so many stories.",
    "How do trees access the internet? They log in.",
    "What do you get when you cross a fish and an elephant? Swimming trunks.",
    "Why did the painting go to jail? It was framed.",
    "Why did Cinderella get kicked off the soccer team? Because she ran away from the ball.",
    "Why do we tell actors to break a leg? Because every play has a cast.",
    "Helvetica and Times New Roman walk into a bar. The bartender says, “We don’t serve your type.”",
    "Why wouldn’t the shrimp share his treasure? Because he was a little shellfish.",
    "Why should you knock on the refrigerator before opening the door? In case there is a salad dressing.",
    "When is a door not a door? When it is ajar.",
    "What did the fish say when he swam into a wall? Dam.",
    "Did you hear about the Italian chef who died? He pasta-way.",
    "I sold my vacuum the other day. All it was doing was collecting dust.",
    "What is Forrest Gump’s email password? 1forrest1.",
    "Did you hear about the fire in the shoe factory? 10,000 soles were lost. The police said some heels started it.",
    "What’s the difference between a rabbit and a plum? They’re both purple except for the rabbit.",
    "I like elephants. Everything else is irrelephant.",
    "What’s red and bad for your teeth? A brick.",
    "Two guys walk into a bar. The third guy ducks.",
    "Do you want to hear a construction joke? Sorry, I’m still working on it."
];


const jokeParagraph = document.getElementById("joke-paragraph");
const newJokeButton = document.getElementById("new-joke-button");

newJokeButton.addEventListener("click", getRandomJoke);

function getRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeParagraph.textContent = jokes[randomIndex];
}

getRandomJoke();


const emojiButton = document.getElementById('emoji-button');
const emojiContainer = document.querySelector('.emoji-container');
const emojis = ['😄', '😍', '🤣', '😎', '😂', '❤️', '😁', '🔥', '🍕', '🔥', '🚀', '🎸', '😂', '😀', '🫡', '😉', '🔥'];

function generateAndAnimateEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    const selectedEmoji = emojis[randomIndex];

    const emojiFly = document.createElement('div');
    emojiFly.textContent = selectedEmoji;
    emojiFly.classList.add('emoji-fly');

    emojiContainer.appendChild(emojiFly);

    emojiFly.style.transform = 'translate(0, 0)';
    emojiFly.style.opacity = '1';

    setTimeout(() => {
        emojiFly.style.transform = 'translate(0, -225px)';
        emojiFly.style.transition = 'transform 4s ease-out, opacity 4s ease-out';
        setTimeout(() => {
            emojiFly.style.opacity = '0';

            emojiFly.addEventListener('transitionend', () => {
                emojiFly.remove();
            });
        }, 2000);
    }, 100);
    setTimeout(generateAndAnimateEmoji, 900);
}
generateAndAnimateEmoji();


let button = document.querySelector("img");
let text = document.querySelector("p");

button.addEventListener("click", () => {
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(text.textContent);
        speechSynthesis.speak(utterance);
    } else {
        alert("Speech synthesis is not supported in this browser.");
    }
});