const email =
["ab@gmail.com", "cd@gmail.com", "ef@gmail.com", "gh@gmail.com"
];

const emailUtente = prompt("inserisci ls tua email");
let trovato = false;
const messageYes = "l'utente può accedere";
const messageNo = "l'utente non può accedere";



for(let i=0; i<email.length; i++){
  if(email[i] == emailUtente){
    trovato = true;
  }
}

if(trovato){
  document.getElementById("email").innerHTML = messageYes;
}
else{
  document.getElementById("email").innerHTML = messageNo;
}

// dadi

const utente = Math.floor(Math.random() * 6)+1;
const computer = Math.floor(Math.random() * 6)+1;
console.log("Utente: ",utente);
console.log("Computer: ",computer);

if(utente > computer){
  console.log("utente ha vinto");
}
else if(utente < computer){
  console.log("computer ha vinto");
}
else{
  console.log("parità");
}

