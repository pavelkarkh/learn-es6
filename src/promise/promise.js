/* CALLBACK HELL
function applyForVisa(documets, resolve, reject) {
    console.log('Pending documents...');
    
    setTimeout(function() {
        Math.random() > .5 ? resolve({approved: true}) : reject({reason: 'Just for fun'}) ;
    }, 2000);
}

function bookHotel(documets, resolve, reject) {
    console.log('Book room in hotel');
    
}

function buyTicket(documets, resolve, reject) {
    console.log('Buy ticket on fly');
    
}

applyForVisa(
    {documents: 'my document'}, 

    function(doc) {
        console.log(`visa is ${doc.approved}`);
        bookHotel(
            doc,
            
            function(reservation) {
                buyTicket(
                    reservation,

                    function() {

                    },

                    function() {

                    }
                );
            },

            function() {

            }
        );
    },

    function(doc) {
        console.log(`reason for reject: "${doc.reason}"`);
    }
);

*/

function applyForVisa(documets) {
    console.log('Pending documents...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            Math.random() > .5 ? resolve({approved: true}) : reject({reason: 'Just for fun'});
        }, 2000);
    });
    return promise;
}

function getVisa(visa) {
    console.log(`visa is ${visa.approved}`);
    return visa; //Promise.resolve(visa); можно и так!
}

function bookHotel(visa) {
    console.log(visa);
    console.log('Book room in hotel');
    return new Promise(function(res, rej) {
        Math.random() > .5 ? res({name: 'Miami resort'}) : rej({reason: 'no free rooms'});
    });  
}

function buyTicket(reservation) {
    console.log(reservation);
    console.log('Buy ticket on fly');
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTicket)
    .catch(error => console.log(`reason for reject: "${error.reason}"`));