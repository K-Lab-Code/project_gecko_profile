const express = require('express');
const fs = require('fs');
const router = express.Router();



router.get('/test', (req, res)=>{
    res.send('test');
});

router.get('/storage', (req, res)=>{
    fs.readFile('storage.json', 'utf8', (err, data)=>{
        res.json(JSON.parse(data));
        //res.json(JSON.stringify(data));
    });
});

router.get('/grab', (req, res)=>{
    fs.readFile('storage.json', 'utf8', (err, data)=>{
        const obj = JSON.parse(data);
        for(gecko of data){
            if (gecko.name === req.query.gecko) {
                res.json(gecko);
            }
        }
        res.json(JSON.parse(data));
        //res.json(JSON.stringify(data));
    });
});

router.post('/storage', (req, res)=>{
    res.send('test');
});

router.patch('/storage', (req, res)=>{
    res.send('test');
});

router.delete('/storage', (req, res)=>{
    res.send('test');
});

exports.router = router;