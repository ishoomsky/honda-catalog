import firebase from '../../firebase/firebase';

import { productsLoadingAC, productsErrorAC, productsSetAC } from '../actions/productsActions';

function productsThunkActions(dispatch) {

  const firestoreCollection = 'products'; //имя коллекции в firestore
  const firestoreDoc = 'cars';//имя документа в firestore

  return function() {
    dispatch( productsLoadingAC() ); //загрузка началась
    
    new Promise((resolve)=>{
      
      setTimeout(() => {
        resolve( firebase.firestore() ); //коннект к пожарному магазину с задержкой, чтобы заценили прелоадер
      }, 1500);
    })
    .then(firestore => {
      let dbRef = firestore.collection( firestoreCollection ).doc(firestoreDoc);
      return dbRef.get(); 
    })
    .then(doc=>{
      return new Promise ((resolve)=>{
        // if(doc.size===0) {
        if(!doc.exists){
          throw new Error('Нет данных')
        }
        resolve(doc);
      })
      .then(doc=> {
        let products = doc.data(); //объект с массивом машин
        dispatch( productsSetAC(products.array) );
      })
      .catch(error=>{
        console.log(error);
        dispatch( productsErrorAC() );
      })
    })
    .catch(error=>{
      console.log(error);
    })

  }
}

export { productsThunkActions };