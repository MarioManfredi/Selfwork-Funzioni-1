
let num_tiri;

do{
    
    num_tiri = Number(prompt('Quanti tiri sono da effettuare?'))
    
}while(num_tiri <= 0);

console.log(`I numeri di tiri da effettuare sono ${num_tiri}`);

function gioco_dadi(num_tiri){
    
    let utente_1 = 0;
    let utente_2 = 0;
    
    for(let i = 1; i <= num_tiri; i++){
        
        let random_u1 = Math.floor(Math.random() * (6 - 1) + 1);
        let random_u2 = Math.floor(Math.random() * (6 - 1) + 1);
        
        utente_1 = utente_1 + random_u1;
        utente_2 = utente_2 + random_u2;
        
        console.log(`Al tiro di dado numero ${i} del PRIMO UTENTE il punteggio è ${utente_1} dopo che è uscito ${random_u1}`);
        console.log(`Al tiro di dado numero ${i} del SECONDO UTENTE il punteggio è ${utente_2} dopo che è uscito ${random_u2}`);
    }
    console.log(`Il punteggio finale dell'UTENTE UNO è ${utente_1} mentre il punteggio finale dell'UTENTE DUE è ${utente_2}`);
    
    if (utente_1 > utente_2){
        return `Il vincitore è UTENTE UNO!`;
        
    }else if(utente_2 > utente_1){
        return `Il vincitore è UTENTE DUE!`;
        
    }else{
        return `PAREGGIO`;
    }   
}

let risultato = gioco_dadi(num_tiri);
console.log(risultato);
