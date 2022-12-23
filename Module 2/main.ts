let   prenom = "Fred";
let age = 38;
let sexe = true;
const sports = ["roller", "yoga"];
const adresse = {
    ligne : "rue Eiffel",
    ville : "Strasbourg",
    cp:67000
}


let afficherPersonne = (
    in_prenom:string, 
    in_age:number,
    in_sexe:boolean,  
    in_sports:string[], 
    in_adresse:{
        ligne : string;
        ville : string;
        cp : number;
    }
    ) : void => {
    console.log(`Prenom : ${in_prenom}`);
    console.log("Age : " + in_age);
    console.log("Sexe : " + (in_sexe ? "Homme" : "Femme"));
    for (let sport of in_sports){
        console.log("Sport : " + sport)
    }
    console.log("Adresse : ");
    console.log( in_adresse.ligne);
    console.log( in_adresse.cp + "" + in_adresse.ville);
}
afficherPersonne(prenom, age, sexe, sports, adresse);

let anniversaire = (in_age:number) : number => {
    return in_age + 1;
}
let newAge:number;
newAge = anniversaire(age);
console.log("Age : " + newAge);

function displayResult(resultat:number) : void{
    console.log("Le résultat " + resultat)
}
function displayAge(age:number) : void{
    console.log("The age is : " + age)
}

function ajout(nb1:number, nb2:number, callback : (n: number) => void){
    let res = nb1 + nb2;
    callback(res)
}

ajout(10, 15, displayAge)