async function start(){
    const data = await getData();
    buildTable(data);
}

async function getData(){
    const url = location.href
    const ary = url.split('?gecko=');
    const response = await fetch(`./grab?gecko=${ary[1]}`);
    //, {method:"Get", headers: {"Content-Type": "application/json"}}
    const data = await response.json();
    return data;
}

function buildTable(gecko) {
    const table = document.getElementById('table');
    const temp = document.getElementById('temp').content;
    let geckoEntry = temp.cloneNode('true');
        console.log(gecko);
        geckoEntry.children[0].children[1].innerHTML = gecko.name;
        geckoEntry.children[0].children[2].src = gecko.img;
        geckoEntry.children[0].children[4].innerHTML = gecko.family;
        geckoEntry.children[0].children[6].innerHTML = gecko.temp;
        geckoEntry.children[0].children[8].innerHTML = gecko.humidity;
        geckoEntry.children[0].children[10].innerHTML = gecko.tank;
        geckoEntry.children[0].children[12].innerHTML = gecko.diet;
        table.appendChild(geckoEntry);
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