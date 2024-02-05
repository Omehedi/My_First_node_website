//  Create Simple Website And Deploy To Real Server

// ei ta korar mul kaj holo amra ek page theke arek page jabo. and ami 4 ta page banayci and amra ei 4 ta page ei navigated korbo / and amra ek page theke arek page jete hole amader ke prothome navigation korte hobe


let fs= require('fs');
let http= require('http');

//http module and create server method ke call
let server=http.createServer(function(req,res) {


    //khali slash mane holo home page url link
    if(req.url=="/"){

        //jokhoni amader url e specifik request asbe thik tokhoni amaderke oi specifik file ta ke read korbo fs module use kore/file ke read korar jonno amra fs.readFileSync use korbo/ and oi method er vitore amader ke file er nam dite hobe/ and oi khane amra keta carecter set kore dite hobe/ amra jodi carecter set na dei tahole kon file ke read korce seta real server a giye bojte parbe nah eijonno amra carecter set dite hobe /kintu local server bjpte parbe/ kintu real server bojte parbe nah/ and file take read kore je data pabe take amra response end e amra sorasori oi data ta diye dibo 

        //fs.readFileSync method ke call/ and fiel path dite hobe and carecter set dite hobe jemon/ and jei page take read kroate cai just sei page take bole dibo

        let data=fs.readFileSync('home.html','utf8')
        res.end(data)
    }

    //contact page url link and jei page read korbo sei page take method er vitore rekhe dibo
    else if(req.url=="/Contact"){

        let data=fs.readFileSync('contact.html','utf8')
        res.end(data)
    }

    //about page url link/and jei page read korbo sei page take method er vitore rekhe dibo
    else if(req.url=="/About"){

        let data=fs.readFileSync('about.html','utf8')
        res.end(data)
    }

    //terms page url link/and jei page read korbo sei page take method er vitore rekhe dibo
    else if(req.url=="/Terms"){

        let data=fs.readFileSync('terms.html','utf8')
        res.end(data)
    }


})
server.listen(5000);
console.log("Server Is Run Succesful 786 ");