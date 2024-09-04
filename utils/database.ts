import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, query, where, DocumentData,
    onSnapshot
 } from "firebase/firestore";
 import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Note: EVERYONE Can Read and Write Documents

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

export const getExecutiveBoard = (setExecutiveBoard: (executiveBoard: DocumentData[]) => void) => {
    const app = initializeFirebase();
    const firestore = getFirestore(app);

    const executiveBoardCollection = collection(firestore, 'executiveboard');

    const unsubscribe = onSnapshot(executiveBoardCollection, (querySnapshot) => {
        const executiveBoard: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            executiveBoard.push(doc.data());
        });
        setExecutiveBoard(executiveBoard);
    });

    return unsubscribe;
};

export const addExecutiveBoardMember = async () => {};
export const editExecutiveBoardMember = async () => {};
export const deleteExecutiveBoardMember = async () => {};

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

export const getStatistics = (setStatistics: (statistics: DocumentData[]) => void) => {
    const app = initializeFirebase();
    const firestore = getFirestore(app);

    const statisticsCollection = collection(firestore, 'statistics');

    const unsubscribe = onSnapshot(statisticsCollection, (querySnapshot) => {
        const statistics: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            statistics.push(doc.data());
        });
        setStatistics(statistics);
    });

    return unsubscribe;
};

export const editStatistic = async () => {};

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

export const getVolunteers = (setVolunteers: (volunteers: DocumentData[]) => void) => {
    const app = initializeFirebase();
    const firestore = getFirestore(app);

    const volunteersCollection = collection(firestore, 'volunteers');

    const unsubscribe = onSnapshot(volunteersCollection, (querySnapshot) => {
        const volunteers: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            volunteers.push(doc.data());
        });
        setVolunteers(volunteers);
    });

    return unsubscribe;
};

export const addVolunteer = async () => {};
export const deleteVolunteer = async () => {};

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

export const getPartners = (setPartners: (partners: DocumentData[]) => void) => {
    const app = initializeFirebase();
    const firestore = getFirestore(app);

    const partnersCollection = collection(firestore, 'partners');

    const unsubscribe = onSnapshot(partnersCollection, (querySnapshot) => {
        const partners: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            partners.push(doc.data());
        });
        setPartners(partners);
    });

    return unsubscribe;
};

export const addPartner = async () => {};
export const editPartner = async () => {};
export const deletePartner = async () => {};