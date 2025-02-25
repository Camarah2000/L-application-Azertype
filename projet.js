const listeMots =["Cachalot", "Pétunia","Serviette"]  //déclaration d'un tableau
score =0; //initialisation d'une variable
let mot_tilisateur = prompt("entrez un mot contenu dans la première case du tableau:"); //demande à l'utilisateur de taper un mot
if (mot_utilisateur===listeMots[0]){
    score=score+1 //le scrore est augementer de 1 
}
mot_utilisateur = prompt("entrez un mot contenu dans la deuxieme case du tableau:"); //demande à l'utilisateur de taper un mot
if (motUtilisateur==listeMots[1]){
    score=score+1
}
mot_utilisateur = prompt("entrez un mot contenu dans la troisième case du tableau:"); //demande à l'utilisateur de taper un mot
if (motUtilisateur==listeMots[2]){
    score=score+1
}
console.log(score);
// avec le boucle for
const listeMots =["Cachalot", "Pétunia","Serviette"]  //déclaration d'un tableau
score =0; //initialisation d'une variable
for (let i = 0;i<=listeMots.length;i++)
    let mot_tilisateur = prompt("entrez un mot contenu dans la première case du tableau:"); //demande à l'utilisateur de taper un mot
    if (mot_utilisateur===listeMots[i]){
    score=score+1 //le scrore est augementer de 1 
}

console.log(score);
