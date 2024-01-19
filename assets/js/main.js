/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede
*/

const team = [
    {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    photo: "assets/img/wayne-barnett-founder-ceo.jpg"
},
    {
    name: "Angela Caroll",
    role: "Chief Editor",
    photo: "assets/img/angela-caroll-chief-editor.jpg"
},
    {
    name: "Walter Gordon",
    role: "Office Manager",
    photo: "assets/img/walter-gordon-office-manager.jpg"
},
    {
    name: "Angela Lopez",
    role: "Social Media Manager",
    photo: "assets/img/angela-lopez-social-media-manager.jpg"
},
    {
    name: "Scott Estrada",
    role: "Developer",
    photo: "assets/img/scott-estrada-developer.jpg"
},
    {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    photo: "assets/img/barbara-ramos-graphic-designer.jpg"
}
];

console.log( team );

for(let i = 0; i < team.length; i++) {
    let member = team[i];
    document.querySelector("#container").innerHTML += `
        <div class="box-1 calc-card-3 rounded-5">
            <div class="box-2 rounded-5">
                <div class="box rounded-5 p-3 py-4">
                    <figure class="w-75 mx-auto">
                        <img class="img-fluid rounded-5 " src='${member.photo}' alt="${member.name}" />
                    </figure>
         
                    <div class="">
                        <h4 class="text-center neon-text">${member.name}</h4>
                        <p class="text-center ">${member.role}</p>
                    </div>
                </div>
            </div>
        </div>
         
    `
}