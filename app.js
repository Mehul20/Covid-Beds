
//INitial 
var firebaseConfig = {
    apiKey: "AIzaSyDtxFCCnGEU-eH0R7kF_lO6NHBtAqLdjOA",
    authDomain: "covidbeds-afd97.firebaseapp.com",
    projectId: "covidbeds-afd97",
    storageBucket: "covidbeds-afd97.appspot.com",
    messagingSenderId: "726762076271",
    appId: "1:726762076271:web:5ade737ef4b3edd204b59a",
    measurementId: "G-SHH7270ZE3"
  };
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// data 
const submitBtn = document.querySelector('#submit');
let address = document.querySelector('#exampleInputEmail1');
let contact = document.querySelector('#exampleInputPassword1');

const db = firestore.collection("bedsdata")
submitBtn.addEventListener('click', function() {
    let emailInput = address.value;
    let passwordInput=contact.value;
    db.doc().set({
        address: emailInput,
        contact: passwordInput
    }).then(function(){
        console.log("Data Saved");
        window.location.href = "/success.html";

    })
    .catch(function(error){
        console.log(error)
    });
});

const dbs=firebase.firestore();

let postCollection = document.querySelector('#posts-collection')

function createPost(ad,con) {
    let div = document.createElement('div');
    div.setAttribute('class','col-md-4');
    let h2=document.createElement('h2');
    let p=document.createElement('p');
    h2.textContent = ad;
    p.textContent = con;

    div.append(h2);
    div.append(p);

    postCollection.append(div);
}

function getPosts() {
    dbs.collection("bedsdata")
    .get()
    .then(snapshot => {
        snapshot.docs.forEach(docs => {
            createPost(
                docs.data().address,
                docs.data().contact


            );
        });
    }).catch(err=> {
        console.log(err);
    })
}

getPosts();

