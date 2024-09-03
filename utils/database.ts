import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, query, where, DocumentData,
    onSnapshot
 } from "firebase/firestore";
 import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

//  import toast from "react-hot-toast";

// Note: EVERYONE Can Read and Write Documents

export const initializeFirebase = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBsIBSpYyH_SLHM9_husL_K7z4Ax_sOpOA",
        authDomain: "restoring-rainbows.firebaseapp.com",
        projectId: "restoring-rainbows",
        storageBucket: "restoring-rainbows.appspot.com",
        messagingSenderId: "443221587019",
        appId: "1:443221587019:web:4b589cd0bb45fcbdf749ce",
        measurementId: "G-6783KFBCTJ"
      };
      
    const app = initializeApp(firebaseConfig);
    return app;
}

export const getFireStore = () => {
    const app = initializeFirebase();
    const firestore = getFirestore();
    return firestore;
}

export const getBranches = (setBranches: (branches: DocumentData[]) => void) => {
    const app = initializeFirebase();
    const firestore = getFirestore(app);

    const branchesCollection = collection(firestore, 'branches');

    const unsubscribe = onSnapshot(branchesCollection, (querySnapshot) => {
        const branches: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            branches.push(doc.data());
        });
        setBranches(branches);
    });

    return unsubscribe;
};

export const addBranch = async (
    country: string,
    city: string,
    lat: number,
    lng: number,
    firstName: string,
    lastName: string,
    bio: string,
    instagram: string,
    photo: File,
    state?: string 
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const storage = getStorage(app);

        const photoRef = ref(storage, `branches/${photo.name}`);
        await uploadBytes(photoRef, photo);
        const photoURL = await getDownloadURL(photoRef);

        const branchesCollection = collection(firestore, 'branches');
        
        const branchDocRef = await addDoc(branchesCollection, {
            country,
            state: state || "", 
            city,
            lat,
            lng,
            firstName,
            lastName,
            bio, 
            instagram,
            photo: photoURL,
        });

    } catch (error) {
        console.error("Error adding branch:", error);
    }
};

export const editBranch = async (
    uneditedBranch: DocumentData,
    country: string,
    city: string,
    lat: number,
    lng: number,
    firstName: string,
    lastName: string,
    bio: string,
    instagram: string,
    state?: string
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const branchesCollection = collection(firestore, 'branches');

        const branchQuery = query(
            branchesCollection,
            where("country", "==", uneditedBranch.country),
            where("city", "==", uneditedBranch.city),
            where("state", "==", uneditedBranch.state || "")
        );

        const querySnapshot = await getDocs(branchQuery);

        if (querySnapshot.empty) {
            console.error("No matching branch found");
            return;
        }

        // Update First Match Only
        const branchDocRef = querySnapshot.docs[0].ref;

        await updateDoc(branchDocRef, {
            country,
            city,
            state: state || "",
            lat,
            lng,
            firstName,
            lastName,
            bio,
            instagram
        });

    } catch (error) {
        console.error("Error updating branch:", error);
    }
};

export const deleteBranch = async (uneditedBranch: DocumentData) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);

        const branchesCollection = collection(firestore, 'branches');

        const branchQuery = query(
            branchesCollection,
            where("country", "==", uneditedBranch.country),
            where("city", "==", uneditedBranch.city),
            where("state", "==", uneditedBranch.state || "")
        );

        const querySnapshot = await getDocs(branchQuery);

        if (querySnapshot.empty) {
            console.error("No matching branch found");
            return;
        }

        const branchDocRef = querySnapshot.docs[0].ref;
        await deleteDoc(branchDocRef);


    } catch (error) {
        console.error("Error deleting branch:", error);
    }
};