// puffer.js

// Made by and only property of :
//  ██▀███   ▄▄▄      ▄▄▄██▀▀▀▄▄▄       ██▀███  ▓█████ 
// ▓██ ▒ ██▒▒████▄      ▒██  ▒████▄    ▓██ ▒ ██▒▓█   ▀ 
// ▓██ ░▄█ ▒▒██  ▀█▄    ░██  ▒██  ▀█▄  ▓██ ░▄█ ▒▒███   
// ▒██▀▀█▄  ░██▄▄▄▄██▓██▄██▓ ░██▄▄▄▄██ ▒██▀▀█▄  ▒▓█  ▄ 
// ░██▓ ▒██▒ ▓█   ▓██▒▓███▒   ▓█   ▓██▒░██▓ ▒██▒░▒████▒
// ░ ▒▓ ░▒▓░ ▒▒   ▓▒█░▒▓▒▒░   ▒▒   ▓▒█░░ ▒▓ ░▒▓░░░ ▒░ ░
//   ░▒ ░ ▒░  ▒   ▒▒ ░▒ ░▒░    ▒   ▒▒ ░  ░▒ ░ ▒░ ░ ░  ░
//   ░░   ░   ░   ▒   ░ ░ ░    ░   ▒     ░░   ░    ░   
//    ░           ░  ░░   ░        ░  ░   ░        ░  ░

const attributePrefixList = [
    'button-',
    'data-',
    'form-',
    'puffer-',
    'sea-',
    'blowfish-',
    'gobe-gobe-',
];

const attributeSuffixList = [
    'puff',
    'blowfish',
    'seaweed',
    'gobe-gobe',
    'pollution',
    'chaos',
    'absurd'
];

// Fonction pour remplir le DOM avec des éléments invisibles et amusants
function puffDOM() {
    // Ajouter des classes absurdes et des paramètres inutiles aux éléments existants
    const allElements = document.querySelectorAll('*');

    const numberOfElementsToPuff = allElements.length;
    const seeds = calculateSeaWeedIterations(numberOfElementsToPuff);
    console.log(`Nombre de grain de sable : ${numberOfElementsToPuff}`);

    // Limiter le nombre d'éléments à ajouter pour éviter de surcharger le DOM
    if(numberOfElementsToPuff < 5000){
        // Ajouter des classes et des attributs absurdes à chaque élément
        allElements.forEach((element, index) => {
            
            element.classList.add(
                `${generateOceanSalt(50)}`,
                `${attributePrefixList[Math.floor(Math.random() * attributePrefixList.length)]+attributeSuffixList[Math.floor(Math.random() * attributeSuffixList.length)]+generateOceanSalt(50)}`,
                `${generateOceanSalt(50)+attributePrefixList[Math.floor(Math.random() * attributePrefixList.length)]+attributeSuffixList[Math.floor(Math.random() * attributeSuffixList.length)]}`);
            element.setAttribute(
                `${attributePrefixList[Math.floor(Math.random() * attributePrefixList.length)]+attributeSuffixList[Math.floor(Math.random() * attributeSuffixList.length)]+generateOceanSalt(50)}`,
                `${generateOceanSalt(50)+attributePrefixList[Math.floor(Math.random() * attributePrefixList.length)]+attributeSuffixList[Math.floor(Math.random() * attributeSuffixList.length)]}`,
                `${generateOceanSalt(50)}`);
            
            growSeaWeed(element, seeds); // Ajouter des algues marines    
        });
    // Poisson-globe ASCII art pour la console
    const pufferFishArt = `
                          .
                          A       ;
                |   ,--,-/ \---,-/|  ,
               _|\,'. /|      /|   '/|-.
           \'.'    /|      ,            ';.
          ,'\   A     A         A   A _ /| '.;
        ,/  _              A       _  / _   /|  ;
       /\  / \   ,  ,           A  /    /     '/|
      /_| | _ \         ,     ,             ,/  \
     // | |/ '.\  ,-      ,       ,   ,/ ,/      \/
     / @| |@  / /'   \  \      ,              >  /|    ,--.
    |\_/   \_/ /      |  |           ,  ,/        \  ./' __:..
    |  __ __  |       |  | .--.  ,         >  >   |-'   /     '
  ,/| /  '  \ |       |  |     \      ,           |    /
 /  |<--.__,->|       |  | .    '.        >  >    /   (
/_,' \\  ^  /  \     /  /   '.    >--            /^\   |
      \\___/    \   /  /      \__'     \   \   \/   \  |
       '.   |/          ,  ,                  /'\    \  )
         \  '  |/    ,       V    \          /        '-\
          '|/  '  V      V           \    \.'            \_
           ''-.       V       V        \./'\
               '|/-.      \ /   \ /,---'\         
                /   '._____V_____V'
                           '     '
     Pufferfish Activated! 🐡
     "Si tu me cherches, tu trouveras un océan de chaos." - Poisson Globe
    `;
    console.log(pufferFishArt);
    }
};

function generateOceanSalt(n) {
    let result = '';
    while (result.length < n) {
        result += Math.random().toString(36).substring(2);
    }
    return result.substring(0, n);
}

// Fonction pour ajouter des algues marines (élèments invisibles) à un élément
function growSeaWeed(element, n){

    for (let i = 0; i < n; i++) {
        const noiseElement = document.createElement('div');
        noiseElement.textContent = `${attributePrefixList[Math.floor(Math.random() * attributePrefixList.length)]+attributeSuffixList[Math.floor(Math.random() * attributeSuffixList.length)]+generateOceanSalt(50)}`;
        noiseElement.style.opacity = '0'; // Invisible
        noiseElement.style.fontSize = `${Math.random() * 20 + 10}px`;
        noiseElement.style.color = '#000000';
        noiseElement.style.position = 'absolute';
        noiseElement.style.top = `-9999px`;
        noiseElement.style.left = `-9999px`;

        // Ajouter des attributs absurdes
        noiseElement.setAttribute('title', `${attributePrefixList[Math.floor(Math.random() * attributePrefixList.length)]+attributeSuffixList[Math.floor(Math.random() * attributeSuffixList.length)]+generateOceanSalt(50)}`);
        noiseElement.setAttribute(`${attributePrefixList[Math.floor(Math.random() * attributePrefixList.length)]+attributeSuffixList[Math.floor(Math.random() * attributeSuffixList.length)]+generateOceanSalt(50)}`, '🐡gonflé🐡');
        noiseElement.className = `${attributePrefixList[Math.floor(Math.random() * attributePrefixList.length)]+attributeSuffixList[Math.floor(Math.random() * attributeSuffixList.length)]+generateOceanSalt(50)}`;

        element.appendChild(noiseElement);
    }
}

// Fonction pour calculer le nombre d'itérations d'algues marines en fonction de l'index
function calculateSeaWeedIterations(index) {
    const maxIterations = 100; // Nombre maximal d'algues au début
    const decayRate = 0.0005; // Taux de décroissance
    return Math.max(1, Math.floor(maxIterations * Math.exp(-decayRate * index)));
  }

document.addEventListener('DOMContentLoaded', puffDOM);