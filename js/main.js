 /* Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
 */
 
 const gridDom = document.getElementById ('grid');

 const button = document.getElementById ('playButton')

 button.addEventListener ('click', 
    function ()  {

        let i = 0;

        gridDom.innerHTML = '';
        

        while ( i < 100) {
       
        let currentSquare = createNewSquare (i + 1);
   
         gridDom.append(currentSquare);
   
        i++;
        

        }

    }
 
 );




 function createNewSquare (number) {
    const currentElement = document.createElement('div');
    currentElement.classList.add('square');
    currentElement.innerHTML = number;
    return currentElement;
}