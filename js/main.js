/**
 *  SIMON SAYS
 * 
 * - Un alert espone 5 numeri casuali (univoci).
 * 
 * - Da li parte un timer di 30 secondi.
 * 
 * - Dopo 30 secondi l’utente deve inserire,
 *   un prompt alla volta, i numeri che ha visto precedentemente.
 * 
 * - Dopo che sono stati inseriti i 5 numeri, 
 *   il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

var numComputer = [];
var numUtente = [];
var numCorretti = [];
var punteggio = 0;

// Cinque numeri casuali
while (numComputer.length < 5) {
    var numeri = numRandom(1, 100);

    if (!numComputer.includes(numeri) /* == false o ! */) {
        numComputer.push(numeri);
    }

    // while (numComputer.includes(numeri)) {
    //     numeri = numRandom(1, 100);
    // }

    // numComputer.push(numeri);
}

alert('Numeri Random:\n' + numComputer);

// Timer di 30 secondi
setTimeout(rispostaUtente, 30000);


// FUNZIONI
// Funzione numeri casuali
function numRandom(min, max) {
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}

// Funzione risposta dell'utente dopo il timer di 30 secondi
function rispostaUtente() {
    // console.log('Tempo scaduto!');

    // Risposte inserite dall'utente
    while ( numUtente.length < 5) {
        var risposte = parseInt( prompt('Tempo scaduto!\nInserisci un numero della lista precedente:'));

        while (numUtente.includes(risposte) || isNaN(risposte)) {
            risposte = parseInt( prompt('Inserisci un valore valido.\nInserisci un nuovo numero:'));
        }

        if (numComputer.includes(risposte)) {
            numCorretti.push(risposte);
            punteggio++;
        } 

        numUtente.push(risposte);
    } 

    if (numCorretti.length == 0) {
        numCorretti = 'nessuno';
    }    

    console.log('Lista dei numeri casuali: ' + numComputer);
    console.log('Lista dei numeri inseriti dall\'utente: ' + numUtente);
    console.log('I numeri indovinati sono: ' + punteggio);
    console.log('Lista dei numeri indovinati : ' + numCorretti);
}