// import React, { useRef, useContext } from 'react';
// import { CartContext } from '../Context/CartContext';
// import { auth } from "../services/firebaseConfig";

// import { collection, documentId, getDocs, query } from 'firebase/firestore'
// import { db } from '../services/firebaseConfig'


export const ContactUs = () => {
  // const form = useRef();
  // const { cart } = useContext(CartContext)



  
  
  // const orderRef = query(collection(db, 'orders'))
  
  //   getOrder(orderRef)
  //   .then(response => {
  //     const orderAdapted = response.docs.map(doc => {
  //       const data = doc.data()
  //       return { id: doc.id, ...data }
  //     })
  //     resolve(orderAdapted)
  //   })
  //   .catch(error => {
  //     reject('error')
  //   })



  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (auth.currentUser !== null) {
  //     auth.currentUser.providerData.forEach((profile) => {
  //       console.log('Su compra es ' + cart);
  //       console.log("  Provider-specific UID: " + profile.uid);
  //       console.log("  Email: " + profile.email);
  //       getOrder()
  //     });
  //   }
  // }







  // getUser(uid)
  // .then((userRecord) => {
  //   console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
  // })
  // .catch((error) => {
  //   console.log('Error fetching user data:', error);
  // });

  // const serviceID = 'default_service';
  // const templateID = 'template_7zofwwn';
  // const userId = 'u_LuGjMPw2-HTVzaB'

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm(serviceID, templateID, form.current, userId)
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // };

  return (
    <form ref='' onSubmit=''>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <input name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactUs