// import * as http from 'http'
const http = require('http');
// import * as fs from 'fs'
// import * as url from 'url'

http.createServer()
let server = http.createServer();
export const Server = ()=>{
    const start =()=> server.on('request', (request,response) => {

        response.writeHead(200,{'content-type': 'text/html; charset=utf-8'} );
        console.log(request);
        console.log(response); // true pour recevoir la requet en objet {}


        // pour lire un fichier du serveur et le renvoyer dans la réponse ------------------------------
        // fs.readFile('index.html','utf8', (err, data) => {  // je passe utf8 en second parametre pour l'encodage du data sinon c un buffer avec plein de chiffre pourri

         
        //     if (err) {     //throw err; 
        //         response.writeHead(404);
        //         response.end('ce fichier exite pas !');

        //     }else{

        //         //console.log(data);
        //         response.writeHead(200, {'content-type': 'text/html; charset=utf-8' }) // je met un header de reussite

        //         console.log('Ma réponse %o',data); 
        //         data = data.replace('{{ leNom }}', name) // je recupere les donnees  et je remplace avec une methode js replce

                

        //         response.write(data);
        //         response.end();
        //         //console.log('Ma réponse %o',response);
        //     }


        // });
        
        //response.end();
        })

    const listen2 = ()=> server.listen(8080);
}
