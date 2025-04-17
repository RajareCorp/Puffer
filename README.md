# Puffer.js

## Description
**Puffer.js** est un script JavaScript amusant et absurde qui remplit le DOM de la page où il est activé avec des éléments invisibles et inutiles, ainsi qu'avec des modifications imprévues des éléments existants. L'objectif est de créer un chaos intentionnel pour confondre quiconque tente de manipuler ou de comprendre le DOM. En bonus, un dessin ASCII d'un poisson-globe est affiché dans la console pour ajouter une touche humoristique.

## Caractéristiques principales
- **Ajout de classes et d'attributs absurdes** : Chaque élément du DOM existant reçoit des classes aux noms improbables et des attributs inutiles.
- **Création d'algues marines** : Des divs invisibles sont ajoutés en tant qu'algues marines à des éléments existants.
- **Contrôle des performances** : Le script limite le nombre d'éléments ajoutés pour éviter de surcharger le DOM.
- **ASCII Art** : Un poisson-globe s'affiche dans la console pour un effet comique.
- **Événement DOMContentLoaded** : Le script ne s'exécute qu'une fois le DOM complètement chargé.

## Installation
1. Téléchargez le fichier `puffer.js`.
2. Ajoutez le script à votre projet, soit en l'incluant directement dans une page HTML :
   ```html
   <script src="puffer.js"></script>
   ```
   ou en l'intégrant dans un bundle JavaScript.

## Utilisation
Aucune configuration n'est requise. Lorsque le script est chargé et que le DOM est prêt, il s'exécute automatiquement.

1. Les éléments existants dans le DOM sont modifiés avec des classes et des attributs aléatoires.
2. De nouveaux éléments invisibles sont ajoutés pour inonder le DOM.
3. Le dessin ASCII d'un poisson-globe est affiché dans la console.

## Exemple de sortie dans la console
```
                          .
                          A       ;
                |   ,--,-/ \---,-/|  ,
               _|\,'. /|      /|   '/|-.
           \'.'    /|      ,            ';.
          ,\   A     A         A   A _ /| '.;
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
```

## Attention
- L'exécution du script peut ralentir la page en raison de la surcharge du DOM.

## Auteur
**Puffer.js** est une création amusante de :
```
 ██▀███   ▄▄▄      ▄▄▄██▀▀▀▄▄▄       ██▀███  ▓█████
▓██ ▒ ██▒▒████▄      ▒██  ▒████▄    ▓██ ▒ ██▒▓█   ▀
▓██ ░▄█ ▒▒██  ▀█▄    ░██  ▒██  ▀█▄  ▓██ ░▄█ ▒▒███   
▒██▀▀█▄  ░██▄▄▄▄██▓██▄██▓ ░██▄▄▄▄██ ▒██▀▀█▄  ▒▓█  ▄
░██▓ ▒██▒ ▓█   ▓██▒▓███▒   ▓█   ▓██▒░██▓ ▒██▒░▒████▒
░ ▒▓ ░▒▓░ ▒▒   ▓▒█░▒▓▒▒░   ▒▒   ▓▒█░░ ▒▓ ░▒▓░░░ ▒░ ░
  ░▒ ░ ▒░  ▒   ▒▒ ░▒ ░▒░    ▒   ▒▒ ░  ░▒ ░ ▒░ ░ ░  ░
  ░░   ░   ░   ▒   ░ ░ ░    ░   ▒     ░░   ░    ░   
   ░           ░  ░░   ░        ░  ░   ░        ░  ░
```

## Licence
Libre d'utilisation à vos propres risques. Préférez-vous nager avec les poissons ? 😉

