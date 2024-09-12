import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, query, where, DocumentData,
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
    previousBranch: DocumentData,
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
            where("country", "==", previousBranch.country),
            where("city", "==", previousBranch.city),
            where("state", "==", previousBranch.state || "")
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

export const deleteBranch = async (previousBranch: DocumentData) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);

        const branchesCollection = collection(firestore, 'branches');

        const branchQuery = query(
            branchesCollection,
            where("country", "==", previousBranch.country),
            where("city", "==", previousBranch.city),
            where("state", "==", previousBranch.state || "")
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

export const addExecutiveBoardMember = async (
    picture: File,
    categorization: string,
    role: string,
    firstName: string,
    lastName: string,
    bio: string
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const storage = getStorage(app);

        const pictureRef = ref(storage, `executiveboard/${picture.name}`);
        await uploadBytes(pictureRef, picture);
        const pictureURL = await getDownloadURL(pictureRef);

        const executiveBoardCollection = collection(firestore, 'executiveboard');

        await addDoc(executiveBoardCollection, {
            picture: pictureURL,
            categorization,
            role,
            firstName,
            lastName,
            bio
        });

        console.log('Executive board member added successfully');
    } catch (error) {
        console.error('Error adding executive board member:', error);
    }
};

export const editExecutiveBoardMember = async (
    previousData: DocumentData,
    categorization: string,
    role: string,
    firstName: string,
    lastName: string,
    bio: string
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const executiveBoardCollection = collection(firestore, 'executiveboard');

        const executiveBoardQuery = query(
            executiveBoardCollection,
            where("firstName", "==", previousData.firstName),
            where("lastName", "==", previousData.lastName)
        );

        const querySnapshot = await getDocs(executiveBoardQuery);

        if (querySnapshot.empty) {
            console.error("No matching executive board member found");
            return;
        }

        // Update the first matching document
        const executiveBoardDocRef = querySnapshot.docs[0].ref;

        await updateDoc(executiveBoardDocRef, {
            categorization,
            role,
            firstName,
            lastName,
            bio
        });

        console.log('Executive board member updated successfully');
    } catch (error) {
        console.error("Error updating executive board member:", error);
    }
};

export const deleteExecutiveBoardMember = async (previousData: DocumentData) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const executiveBoardCollection = collection(firestore, 'executiveboard');

        const executiveBoardQuery = query(
            executiveBoardCollection,
            where("firstName", "==", previousData.firstName),
            where("lastName", "==", previousData.lastName)
        );

        const querySnapshot = await getDocs(executiveBoardQuery);

        if (querySnapshot.empty) {
            console.error("No matching executive board member found");
            return;
        }

        const executiveBoardDocRef = querySnapshot.docs[0].ref;

        await deleteDoc(executiveBoardDocRef);

        console.log("Executive board member deleted successfully");
    } catch (error) {
        console.error("Error deleting executive board member:", error);
    }
};

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

export const editStatistic = async (
    index: number,
    label: string,
    number: string
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const statisticsCollection = collection(firestore, 'statistics');

        const statisticQuery = query(
            statisticsCollection,
            where("index", "==", index)
        );

        const querySnapshot = await getDocs(statisticQuery);

        if (querySnapshot.empty) {
            console.error("No matching statistic found");
            return;
        }

        const statisticDocRef = querySnapshot.docs[0].ref;

        await updateDoc(statisticDocRef, {
            label,
            number
        });

        console.log("Statistic updated successfully");
    } catch (error) {
        console.error("Error updating statistic:", error);
    }
};

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

export const addVolunteer = async (
    firstName: string,
    lastName: string
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const volunteersCollection = collection(firestore, 'volunteers');

        await addDoc(volunteersCollection, {
            firstName,
            lastName,
        });

        console.log("Volunteer added successfully");
    } catch (error) {
        console.error("Error adding volunteer:", error);
    }
};

export const deleteVolunteer = async (previousData: DocumentData) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const volunteersCollection = collection(firestore, 'volunteers');

        const volunteerQuery = query(
            volunteersCollection,
            where("firstName", "==", previousData.firstName),
            where("lastName", "==", previousData.lastName)
        );

        const querySnapshot = await getDocs(volunteerQuery);

        if (querySnapshot.empty) {
            console.error("No matching volunteer found");
            return;
        }

        const volunteerDocRef = querySnapshot.docs[0].ref;

        await deleteDoc(volunteerDocRef);

        console.log("Volunteer deleted successfully");
    } catch (error) {
        console.error("Error deleting volunteer:", error);
    }
};
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

export const addPartner = async (
    logo: File,
    name: string,
    description: string,
    website: string,
    instagram: string,
    highlyValued: boolean
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const storage = getStorage(app);

        const logoRef = ref(storage, `partners/${logo.name}`);
        await uploadBytes(logoRef, logo);
        const logoURL = await getDownloadURL(logoRef);

        const partnersCollection = collection(firestore, 'partners');
        await addDoc(partnersCollection, {
            logo: logoURL,
            name,
            description,
            website,
            instagram,
            highlyValued,
        });

        console.log("Partner added successfully");
    } catch (error) {
        console.error("Error adding partner:", error);
    }
};

export const editPartner = async (
    previousData: DocumentData,
    name: string,
    description: string,
    website: string,
    instagram: string,
    highlyValued: boolean
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const partnersCollection = collection(firestore, 'partners');

        const partnerQuery = query(
            partnersCollection,
            where("name", "==", previousData.name)
        );

        const querySnapshot = await getDocs(partnerQuery);

        if (querySnapshot.empty) {
            console.error("No matching partner found");
            return;
        }

        const partnerDocRef = querySnapshot.docs[0].ref;

        await updateDoc(partnerDocRef, {
            name,
            description,
            website,
            instagram,
            highlyValued,
        });

        console.log("Partner updated successfully");
    } catch (error) {
        console.error("Error updating partner:", error);
    }
};

export const deletePartner = async (previousData: DocumentData) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const partnersCollection = collection(firestore, 'partners');

        const partnerQuery = query(
            partnersCollection,
            where("name", "==", previousData.name)
        );

        const querySnapshot = await getDocs(partnerQuery);

        if (querySnapshot.empty) {
            console.error("No matching partner found");
            return;
        }

        const partnerDocRef = querySnapshot.docs[0].ref;

        await deleteDoc(partnerDocRef);

        console.log("Partner deleted successfully");
    } catch (error) {
        console.error("Error deleting partner:", error);
    }
};

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

export const getEvents = (setEvents: (events: DocumentData[]) => void) => {
    const app = initializeFirebase();
    const firestore = getFirestore(app);

    const eventsCollection = collection(firestore, 'events');

    const unsubscribe = onSnapshot(eventsCollection, (querySnapshot) => {
        const events: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            events.push(doc.data());
        });
        setEvents(events);
    });

    return unsubscribe;
};

export const addEvent = async (
    image: File,
    title: string,
    content: string,
    date: string,
    location: string
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const storage = getStorage(app);

        const imageRef = ref(storage, `events/${image.name}`);
        await uploadBytes(imageRef, image);
        const imageURL = await getDownloadURL(imageRef);

        const eventsCollection = collection(firestore, 'events');
        await addDoc(eventsCollection, {
            image: imageURL,
            title,
            content,
            date,
            location,
        });

        console.log('Event added successfully');
    } catch (error) {
        console.error('Error adding event:', error);
    }
};

export const editEvent = async (
    previousData: DocumentData,
    title: string,
    content: string,
    date: string,
    location: string
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const eventsCollection = collection(firestore, 'events');

        const eventQuery = query(
            eventsCollection,
            where('title', '==', previousData.title),
            where('content', '==', previousData.content)
        );

        const querySnapshot = await getDocs(eventQuery);

        if (querySnapshot.empty) {
            console.error('No matching event found');
            return;
        }

        const eventDocRef = querySnapshot.docs[0].ref;
        await updateDoc(eventDocRef, {
            title,
            content,
            date,
            location,
        });

        console.log('Event updated successfully');
    } catch (error) {
        console.error('Error updating event:', error);
    }
};

export const deleteEvent = async (previousData: DocumentData) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const eventsCollection = collection(firestore, 'events');

        const eventQuery = query(
            eventsCollection,
            where('title', '==', previousData.title),
            where('content', '==', previousData.content)
        );

        const querySnapshot = await getDocs(eventQuery);

        if (querySnapshot.empty) {
            console.error('No matching event found');
            return;
        }

        const eventDocRef = querySnapshot.docs[0].ref;
        await deleteDoc(eventDocRef);

        console.log('Event deleted successfully');
    } catch (error) {
        console.error('Error deleting event:', error);
    }
};

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

export const getStories = (setStories: (stories: DocumentData[]) => void) => {
    const app = initializeFirebase();
    const firestore = getFirestore(app);

    const storiesCollection = collection(firestore, 'stories');

    const unsubscribe = onSnapshot(storiesCollection, (querySnapshot) => {
        const stories: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            stories.push(doc.data());
        });
        setStories(stories);
    });

    return unsubscribe;
};

export const addStory = async (
    image: File,
    title: string,
    date: string,
    location: string,
    firstName: string,
    lastName: string,
    content: string
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const storage = getStorage(app);

        const imageRef = ref(storage, `stories/${image.name}`);
        await uploadBytes(imageRef, image);
        const imageURL = await getDownloadURL(imageRef);

        const storiesCollection = collection(firestore, 'stories');
        await addDoc(storiesCollection, {
            image: imageURL,
            title,
            date,
            location,
            firstName,
            lastName,
            content,
        });

        console.log('Story added successfully');
    } catch (error) {
        console.error('Error adding story:', error);
    }
};

export const editStory = async (
    previousData: DocumentData,
    title: string,
    date: string,
    location: string,
    firstName: string,
    lastName: string,
    content: string
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const storiesCollection = collection(firestore, 'stories');

        const storyQuery = query(
            storiesCollection,
            where('title', '==', previousData.title),
            where('content', '==', previousData.content)
        );

        const querySnapshot = await getDocs(storyQuery);

        if (querySnapshot.empty) {
            console.error('No matching story found');
            return;
        }

        const storyDocRef = querySnapshot.docs[0].ref;
        await updateDoc(storyDocRef, {
            title,
            date,
            location,
            firstName,
            lastName,
            content,
        });

        console.log('Story updated successfully');
    } catch (error) {
        console.error('Error updating story:', error);
    }
};

export const deleteStory = async (previousData: DocumentData) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const storiesCollection = collection(firestore, 'stories');

        const storyQuery = query(
            storiesCollection,
            where('title', '==', previousData.title),
            where('content', '==', previousData.content)
        );

        const querySnapshot = await getDocs(storyQuery);

        if (querySnapshot.empty) {
            console.error('No matching story found');
            return;
        }

        const storyDocRef = querySnapshot.docs[0].ref;
        await deleteDoc(storyDocRef);

        console.log('Story deleted successfully');
    } catch (error) {
        console.error('Error deleting story:', error);
    }
};