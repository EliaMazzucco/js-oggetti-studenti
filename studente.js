let studente = {
    nome : 'Elia',
    cognome : 'Mazzucco',
    eta: 26,
};
for (let chiave in studente){
    console.log(chiave + ": " + studente[chiave]);
}

let studenti = [
    {
    nome : 'Elia',
    cognome : 'Mazzucco',
    eta: 26,
    },
    
    {
    nome : 'Federico',
    cognome : 'Agazzi',
    eta: 26,
    },

    {
    nome : 'Steven',
     cognome : 'Vecchia',
     eta: 24,
    },

    {
    nome : 'Diego',
    cognome : 'Borsari',
    eta: 25,
    },
]

studenti.push(studente);

for(let i = 0; i < studenti.length; i++){
    let totStudenti = studenti[i];
console.log('nome: ' + totStudenti.nome);
console.log('cognome: ' + totStudenti.cognome);

}



let nome = prompt('Inserisci il nome dello studente');
let cognome = prompt ('Inserisci il cognome dello studente');
let eta = prompt ('Inserisci l età dello studente');

studenti.push({
    nome: nome,
    cognome: cognome,
    eta: eta

})

for(let i = 0; i < studenti.length; i++){
    let totStudenti = studenti[i];
console.log('nome: ' + totStudenti.nome);
console.log('cognome: ' + totStudenti.cognome);
console.log('età: ' + totStudenti.eta);
}



