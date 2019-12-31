const express = require('express')
const mapResult = require('./Classes/MapSavingResult')
const fs = require('fs');
const os = require('os');
// const cors = require('cors');
const multer = require('multer');
var uploadHandler = multer()

var app = express();
app.set('port', process.env.PORT || 3001);
// app.use(cors())


module.exports = {
    initializeRESTapi(){
        console.log('Creating REST api server');
        app.use(function (req, res, next) {
            // console.log(req.hostname)
            res.header("Access-Control-Allow-Origin", 'http://5.253.27.99:8080');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header('Access-Control-Allow-Credentials', 'true')
            next();
            // console.log('HeadersIntact? ' + res.headersSent);
            // console.log(res.getHeaders())
        });

        // app.options('/uploadMap', uploadHandler.any(), (req, res) => {
        //     console.log(req.hostname)
        // })

        //Handling map uploading request
        app.post('/uploadMap', uploadHandler.single('MapFile'), (req, res) => {
            console.log('Map incoming...');
            console.log(req.file);
            let Map = req.body;
            var path = os.homedir() + '/Maps/';
    
            var MapJSON = req.file.buffer;
            console.log(MapJSON);
            var r = mapResult.NewMapSaveReport();
            fs.writeFile(path + '/DefaultMap.json', MapJSON, (err) => {
                if(err){
                    r.Result = 'FAIL';
                    console.log(err.message);
                    return r.code = err.code;
                }
            })
            if(r.Result !== 'FAIL'){
                r.Result = 'SUCCESS';
            }
            res.setHeader('Content-Type', 'multipart/form-data')
            console.log(r)
            // res.header({
            
        // })
            return res.send(r); 
    
        })
        app.listen(app.get('port'))
    }    
}