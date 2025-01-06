async function start(){
    const data = await getData();
    buildTable(data);
}

async function getData(){
    const response = await fetch('./storage');
    //, {method:"Get", headers: {"Content-Type": "application/json"}}
    const data = await response.json();
    console.log(data[0]);
    return data;
}

function buildTable(data) {
    const table = document.getElementById('table');
    const temp = document.getElementById('temp').content;
    let geckoEntry;
    for (const gecko of data){
        console.log(gecko);
        geckoEntry = temp.cloneNode('true');
        console.log(geckoEntry);
        geckoEntry.children[0].children[1].children[0].children[1].innerHTML = ` ${gecko.name}`;
        geckoEntry.children[0].children[1].children[1].children[1].innerHTML = ` ${gecko.genus} ${gecko.species}`;
        geckoEntry.children[0].children[0].children[0].src = gecko.img;
        geckoEntry.children[0].dataset.id = gecko.name;
        table.appendChild(geckoEntry);
    }
}

function info(event){
    self = event.currentTarget;
    console.log(self);
    if(self.matches('[data-id]')){
    console.log(event.target);
    location.assign(`dex-entry.html?gecko=${self.dataset.id}`);
    }
}




start();

/* 
        console.log(gecko);
        geckoEntry = temp.cloneNode('true');
        geckoEntry.children[0].children[1].innerHTML = gecko.name;
        geckoEntry.children[0].children[2].src = gecko.img;
        geckoEntry.children[0].children[4].innerHTML = gecko.family;
        geckoEntry.children[0].children[6].innerHTML = gecko.temp;
        geckoEntry.children[0].children[8].innerHTML = gecko.humidity;
        geckoEntry.children[0].children[10].innerHTML = gecko.tank;
        geckoEntry.children[0].children[12].innerHTML = gecko.diet;
        table.appendChild(geckoEntry);
*/