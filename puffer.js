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


// Fonction pour remplir le DOM avec des éléments invisibles et amusants
function puffDOM() {
    // Ajouter des classes absurdes et des paramètres inutiles aux éléments existants
    const allElements = document.querySelectorAll('*');

    // Nombre d'éléments à ajouter
    const numberOfElementsToPuff = allElements.length;
    console.log(`Nombre de grain de sable : ${numberOfElementsToPuff}`);
    // Limiter le nombre d'éléments à ajouter pour éviter de surcharger le DOM
    if(numberOfElementsToPuff < 3000){
        // Ajouter des classes et des attributs absurdes à chaque élément
        allElements.forEach((element, index) => {
            element.classList.add(`🐡puffer-class-${index}🐡`, `🐡puffer-${Math.random().toString(36).substring(2, 15)}🐡`, `🐡blowfish-${Math.random().toString(36).substring(2, 15)}🐡`);
            element.setAttribute(`data-poisson-${index}`, `gobe-gobe-${Math.random().toFixed(5)}`, `sea-is-polluted-${Math.random().toFixed(5)}`);
            
            growSeaWeed(element, 3); // Ajouter des algues marines    
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

// Fonction pour ajouter des algues marines (élèments invisibles) à un élément
function growSeaWeed(element, n){

    for (let i = 0; i < n; i++) {
        if(element.tagName !== 'OPTION') {
            const noiseElement = document.createElement('div');
            noiseElement.textContent = `🐡SeaWeed everywhere ${i} \uD83D\uDC21 🐡`;
            noiseElement.style.opacity = '0'; // Invisible
            noiseElement.style.fontSize = `${Math.random() * 20 + 10}px`;
            noiseElement.style.color = '#000000';
            noiseElement.style.position = 'absolute';
            noiseElement.style.top = `-9999px`;
            noiseElement.style.left = `-9999px`;

            // Ajouter des attributs absurdes
            noiseElement.setAttribute('title', `🐡Je suis juste un innocent poisson-globe ${i}🐡`);
            noiseElement.setAttribute('data-globe-mode', '🐡gonflé🐡');
            noiseElement.className = `🐡poisson-globe-classe-${i}🐡`;

            element.appendChild(noiseElement);
        }
    }
}
document.addEventListener('DOMContentLoaded', puffDOM);
