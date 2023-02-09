import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getProducts = (categoryId) => {
  return new Promise(
    (resolve, reject) => {
      const prodRef = categoryId
        ? query(
            collection(db, "products"),
            where("categoria", "==", categoryId)
          )
        : collection(db, "products");

      getDocs(prodRef)
        .then((response) => {
          const prodAdapted = response.docs.map((doc) => {
            const data = doc.data();
            return { id: doc.id, ...data };
          });
          resolve(prodAdapted);
        })
        .catch((error) => {
          reject("error");
        });
    },
    [categoryId]
  );
};

export const getProductsById = (prodId) => {
  return new Promise(
    (resolve, reject) => {
      const prodRef = doc(db, "products", prodId);

      getDoc(prodRef)
        .then((response) => {
          const data = response.data();
          const prodAdapted = { id: response.id, ...data };
          resolve(prodAdapted);
        })

        .catch((error) => {
          reject("error");
        });
    },
    [prodId]
  );
};

