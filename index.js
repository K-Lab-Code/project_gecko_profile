const fs = require('fs');
//const obj = [];
const obj = [{name:"Leopard Gecko",genus:"Eublepharis",species:"macularius",img:"https://upload.wikimedia.org/wikipedia/commons/5/5b/Eublepharis_macularius1.jpg",family:"Eublepharidae",temp:"Warm side: 80-90F, Cool side: 75-80F, Basking area:90-95F Night: 65-70F",humidity:"30-40%",tank:"36X18X18",diet:"Live Insects"}];
fs.writeFile('storage.json', JSON.stringify(obj), (err)=>{
    console.log(err);
    fs.readFile('storage.json', 'utf8', (err2, data)=>{
        console.log(err2);
        console.log(data);
        const x = JSON.stringify(data);
        console.log(x);
        console.log(JSON.parse(x));
    });
})