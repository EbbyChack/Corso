


{//CREAZIONE TABELLA 
const table = document.createElement("table");
const tbody = document.createElement("tbody");


let cellCounter = 1;

for (let i = 0; i < 4; i++) {
    
    const row = document.createElement("tr");

    for (let j = 0; j < 19; j++) {
        const cell = document.createElement("td");
        cell.textContent = ` ${cellCounter}`;
        row.appendChild(cell);
        cellCounter++;

    }
    tbody.appendChild(row);
  
    if (cellCounter > 76) {
        break;
    }
}

table.appendChild(tbody);
document.getElementById("tabellone").appendChild(table);
}

// RANDOM NUMBER
document.getElementById("random").addEventListener("click", function() {
    // ho creato il random number

    const randomNumber = Math.floor(Math.random() * 77);
    
    
    // ho selezionato il td
    let td = document.querySelectorAll("td");
    tdArray = Array.from(td)
    

    // per evidenziare il numero
    tdArray.forEach(function (element) {
        
        if (parseInt(element.innerText) === randomNumber) {
            element.classList.add("numeroEvidenziato")
        }
    })
    
    console.log(randomNumber)
})