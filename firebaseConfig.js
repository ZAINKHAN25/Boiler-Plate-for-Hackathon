import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";

// auth cdn link
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

// firestore cdn link
import { getFirestore,doc, setDoc,serverTimestamp, collection, getDocs, getFirestore ,getDoc,query, orderBy, limit, deleteDoc ,addDoc , updateDoc  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBX5rhb9-fVMOIAcPXZ6R689iMU-khNYio",
    authDomain: "smit-hackathon-6edee.firebaseapp.com",
    projectId: "smit-hackathon-6edee",
    storageBucket: "smit-hackathon-6edee.appspot.com",
    messagingSenderId: "807406100433",
    appId: "1:807406100433:web:e4f1b0262e6b1a5467caf0"
  };
  
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
  
export {
app,
auth,
db,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
doc,
setDoc,
serverTimestamp,
collection,
getDocs,
getDoc,
query,
orderBy,
limit,
deleteDoc,
addDoc
};


// add data with firebase uniqueid
// try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
  


// Add data to Firestore code with custom uniqeid
// await setDoc(doc(db, "cities", "LA"), {
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
//   });


// time stamp code
// timestamp: serverTimestamp()


// code for get all data without unique id
// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });


// code for get data from firestore in uinqueid
// const docRef = doc(db, "cities", "SF");
// const docSnap = await getDoc(docRef);
// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   console.log("No such document!");
// }


// code to bring data in descending order and also in limit
// const q = query(citiesRef, orderBy("name", "desc"), limit(3));


// code to bring data in asscending order and also in limt
// const q = query(citiesRef, orderBy("name"), limit(3));


// code to delete data in firestore with uniqueid
// await deleteDoc(doc(db, "cities", "DC"));


// code to update document in firestore
// const washingtonRef = doc(db, "cities", "DC");
// await updateDoc(washingtonRef, {
//   capital: true
// });
