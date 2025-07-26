import { initializeApp } from "firebase/app";
import {
    getFirestore, collection, getDocs, addDoc, updateDoc, deleteDoc, query, where, DocumentData,
    onSnapshot, Timestamp, orderBy
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import toast from "react-hot-toast";

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
    community: string,
    lat: number,
    lng: number,

    firstNameOne: string,
    lastNameOne: string,
    bioOne: string,
    photoOne: File,

    instagram: string,
    email: string,

    firstNameTwo?: string,
    lastNameTwo?: string,
    bioTwo?: string,
    photoTwo?: File,

    state?: string
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const storage = getStorage(app);

        const photoRefOne = ref(storage, `branches/${photoOne.name}`);
        await uploadBytes(photoRefOne, photoOne);
        const photoURLOne = await getDownloadURL(photoRefOne);

        let photoURLTwo = "";

        if (photoTwo) {
            const photoRefTwo = ref(storage, `branches/${photoTwo.name}`);
            await uploadBytes(photoRefTwo, photoTwo);
            photoURLTwo = await getDownloadURL(photoRefTwo);
        }

        const branchesCollection = collection(firestore, 'branches');

        const branchData: any = {
            country,
            city,
            community,
            state: state || "",
            lat,
            lng,

            firstNameOne,
            lastNameOne,
            bioOne,
            photoOne: photoURLOne,

            instagram,
            email,
        };

        if (firstNameTwo && lastNameTwo && bioTwo) {
            branchData.firstNameTwo = firstNameTwo;
            branchData.lastNameTwo = lastNameTwo;
            branchData.bioTwo = bioTwo;
            branchData.photoTwo = photoURLTwo;
        }

        await addDoc(branchesCollection, branchData);
        toast.success('Added Branch');
    } catch (error) {
        toast.error('Failed to Add Branch');
    }
};


export const editBranch = async (
    previousBranch: DocumentData,
    country: string,
    city: string,
    community: string,
    lat: number,
    lng: number,

    firstNameOne: string,
    lastNameOne: string,
    bioOne: string,

    instagram: string,
    email: string,

    firstNameTwo?: string,
    lastNameTwo?: string,
    bioTwo?: string,
    photoOne?: File,
    photoTwo?: File,
    state?: string
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const storage = getStorage(app);
        const branchesCollection = collection(firestore, 'branches');

        const branchQuery = query(
            branchesCollection,
            where("country", "==", previousBranch.country),
            where("city", "==", previousBranch.city),
            where("state", "==", previousBranch.state || ""),
            where("community", "==", previousBranch.community)
        );

        const querySnapshot = await getDocs(branchQuery);

        if (querySnapshot.empty) {
            console.error("No matching branch found");
            return;
        }

        const branchDocRef = querySnapshot.docs[0].ref;

        let photoURLOne = previousBranch.photoOne;
        let photoURLTwo = previousBranch.photoTwo;

        if (photoOne) {
            const photoRefOne = ref(storage, `branches/${photoOne.name}`);
            await uploadBytes(photoRefOne, photoOne);
            photoURLOne = await getDownloadURL(photoRefOne);
        }

        if (photoTwo) {
            const photoRefTwo = ref(storage, `branches/${photoTwo.name}`);
            await uploadBytes(photoRefTwo, photoTwo);
            photoURLTwo = await getDownloadURL(photoRefTwo);
        }

        const branchData: any = {
            country,
            city,
            community,
            state: state || "",
            lat,
            lng,

            firstNameOne,
            lastNameOne,
            bioOne,
            photoOne: photoURLOne,

            instagram,
            email,
        };

        if (firstNameTwo && lastNameTwo && bioTwo) {
            branchData.firstNameTwo = firstNameTwo;
            branchData.lastNameTwo = lastNameTwo;
            branchData.bioTwo = bioTwo;
            branchData.photoTwo = photoURLTwo;
        } else {
            branchData.firstNameTwo = "";
            branchData.lastNameTwo = "";
            branchData.bioTwo = "";
            branchData.photoTwo = "";
        }

        await updateDoc(branchDocRef, branchData);
        toast.success('Edited Branch');
    } catch (error) {
        toast.error('Failed to Edit Branch');
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
            where("state", "==", previousBranch.state || ""),
            where("community", "==", previousBranch.community)
        );

        const querySnapshot = await getDocs(branchQuery);

        if (querySnapshot.empty) {
            console.error("No matching branch found");
            return;
        }

        const branchDocRef = querySnapshot.docs[0].ref;
        await deleteDoc(branchDocRef);

        toast.success('Deleted Branch');
    } catch (error) {
        toast.error('Failed to Delete Branch');
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

        toast.success('Added Member');
    } catch (error) {
        toast.error('Failed to Add Member');
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

        toast.success('Edited Member');
    } catch (error) {
        toast.error('Failed to Edit Member');
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

        toast.success('Deleted Member');
    } catch (error) {
        toast.error('Failed to Delete Member');
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

        toast.success('Edited Statistic');
    } catch (error) {
        toast.error('Failed to Edit Statistic');
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

        toast.success('Added Volunteer');
    } catch (error) {
        toast.error('Failed to Add Volunteer');
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

        toast.success('Deleted Volunteer');
    } catch (error) {
        toast.error('Failed to Delete Volunteer');
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

        toast.success('Added Partner');
    } catch (error) {
        toast.error('Failed to Add Partner');
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

        toast.success('Edited Partner');
    } catch (error) {
        toast.error('Failed to Edit Partner');
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

        toast.success('Deleted Partner');
    } catch (error) {
        toast.error('Failed to Delete Partner');
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
    title: string,
    content: string,
    branch: string,
    location: string,
    imageOne: File,
    imageTwo?: File,
    imageThree?: File,
    imageFour?: File,
    imageFive?: File
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const storage = getStorage(app);

        const images = [imageOne, imageTwo, imageThree, imageFour, imageFive].filter(
            (image): image is File => !!image 
        );

        const imageUrls = [];
        for (let i = 0; i < images.length; i++) {
            const imageRef = ref(storage, `events/${images[i].name}`);
            await uploadBytes(imageRef, images[i]);
            const url = await getDownloadURL(imageRef);
            imageUrls.push(url);
        }

        const eventsCollection = collection(firestore, 'events');
        await addDoc(eventsCollection, {
            title,
            content,
            branch,
            location,
            images: imageUrls
        });
        toast.success('Added Event');
    } catch (error) {
        toast.error('Failed to Add Event');
    }
};

export const editEvent = async (
    previousData: DocumentData,
    title: string,
    content: string,
    branch: string,
    location: string,
    imageOne?: File,
    imageTwo?: File,
    imageThree?: File,
    imageFour?: File,
    imageFive?: File
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const storage = getStorage(app);

        const eventsCollection = collection(firestore, 'events');
        const eventQuery = query(
            eventsCollection,
            where('title', '==', previousData.title),
            where('branch', '==', previousData.branch)
        );
        const querySnapshot = await getDocs(eventQuery);
        if (querySnapshot.empty) {
            console.error('No matching event found');
            return;
        }
        const eventDocRef = querySnapshot.docs[0].ref;

        let imageUrls = previousData.images || [];
        const newImages = [imageOne, imageTwo, imageThree, imageFour, imageFive].filter(
            (image): image is File => !!image 
        );
        if (newImages.length > 0) {
            imageUrls = [];
            for (let i = 0; i < newImages.length; i++) {
                const imageRef = ref(storage, `events/${newImages[i].name}`);
                await uploadBytes(imageRef, newImages[i]);
                const url = await getDownloadURL(imageRef);
                imageUrls.push(url);
            }
        }

        await updateDoc(eventDocRef, {
            title,
            content,
            branch,
            location,
            images: imageUrls
        });
        toast.success('Edited Event');
    } catch (error) {
        toast.error('Failed to Edit Event');
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
            where('branch', '==', previousData.branch)
        );

        const querySnapshot = await getDocs(eventQuery);

        if (querySnapshot.empty) {
            console.error('No matching event found');
            return;
        }

        const eventDocRef = querySnapshot.docs[0].ref;
        await deleteDoc(eventDocRef);

        toast.success('Deleted Event');
    } catch (error) {
        toast.error('Failed to Delete Event');
    }
};

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

export const getStories = (setStories: (stories: DocumentData[]) => void) => {
    const app = initializeFirebase();
    const firestore = getFirestore(app);

    const storiesCollection = collection(firestore, 'stories');

    // Fetch stories in descending order based on `createdAt` timestamp
    const storiesQuery = query(storiesCollection, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(storiesQuery, (querySnapshot) => {
        const stories: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            stories.push(doc.data());
        });
        setStories(stories);
    });

    return unsubscribe;
};

export const addStory = async (
    title: string,
    link: string
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);

        const storiesCollection = collection(firestore, 'stories');
        await addDoc(storiesCollection, {
            title,
            link,
            createdAt: Timestamp.now() 
        });

        toast.success('Added Story');
    } catch (error) {
        toast.error('Failed to Add Story');
    }
};

export const editStory = async (
    previousData: DocumentData,
    title: string,
    link: string
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const storiesCollection = collection(firestore, 'stories');

        const storyQuery = query(
            storiesCollection,
            where('title', '==', previousData.title),
            where('link', '==', previousData.link)
        );

        const querySnapshot = await getDocs(storyQuery);

        if (querySnapshot.empty) {
            console.error('No matching story found');
            return;
        }

        const storyDocRef = querySnapshot.docs[0].ref;
        await updateDoc(storyDocRef, {
            title,
            link
        });

        toast.success('Edited Story');
    } catch (error) {
        toast.error('Failed to Edit Story');
        console.log(error);
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
            where('link', '==', previousData.link)
        );

        const querySnapshot = await getDocs(storyQuery);

        if (querySnapshot.empty) {
            console.error('No matching story found');
            return;
        }

        const storyDocRef = querySnapshot.docs[0].ref;
        await deleteDoc(storyDocRef);

        toast.success('Deleted Story');
    } catch (error) {
        toast.error('Failed to Delete Story');
    }
};

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

export const getOpportunities = (setOpportunities: (opportunities: DocumentData[]) => void) => {
    const app = initializeFirebase();
    const firestore = getFirestore(app);

    const opportunitiesCollection = collection(firestore, 'opportunities');

    const unsubscribe = onSnapshot(opportunitiesCollection, (querySnapshot) => {
        const opportunities: DocumentData[] = [];
        querySnapshot.forEach((doc) => {
            opportunities.push({
                ...doc.data(),
                id: doc.id
            });
        });
        setOpportunities(opportunities);
    });

    return unsubscribe;
}

export const addOpportunity = async (
    title: string,
    deadline: string,
    locationType: string,
    description: string,
    summary: string,
    benefits: string,
    applicationLink: string,
    guidelinesLink: string,
    redirectLink?: string
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);

        const opportunitiesCollection = collection(firestore, 'opportunities');
        await addDoc(opportunitiesCollection, {
            title,
            deadline,
            locationType,
            description,
            summary,
            benefits,
            applicationLink,
            guidelinesLink,
            ...(redirectLink ? { redirectLink } : {}),
            createdAt: Timestamp.now()
        });

        toast.success('Added Opportunity');
    } catch (error) {
        toast.error('Failed to Add Opportunity');
    }
}

export const editOpportunity = async (
    previousData: DocumentData,
    title: string,
    deadline: string,
    locationType: string,
    description: string,
    summary: string,
    benefits: string,
    applicationLink: string,
    guidelinesLink: string,
    redirectLink?: string
) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);

        const opportunitiesCollection = collection(firestore, 'opportunities');

        const opportunityQuery = query(
            opportunitiesCollection,
            where('title', '==', previousData.title),
            where('deadline', '==', previousData.deadline)
        );

        const querySnapshot = await getDocs(opportunityQuery);

        if (querySnapshot.empty) {
            console.error('No matching opportunity found');
            return;
        }

        const opportunityDocRef = querySnapshot.docs[0].ref;
        await updateDoc(opportunityDocRef, {
            title,
            deadline,
            locationType,
            description,
            summary,
            benefits,
            applicationLink,
            guidelinesLink,
            ...(redirectLink ? { redirectLink } : {}),
            updatedAt: Timestamp.now()
        });

        toast.success('Edited Opportunity');
    } catch (error) {
        toast.error('Failed to Edit Opportunity');
    }
}

export const deleteOpportunity = async (previousData: DocumentData) => {
    try {
        const app = initializeFirebase();
        const firestore = getFirestore(app);
        const opportunitiesCollection = collection(firestore, 'opportunities');

        const opportunityQuery = query(
            opportunitiesCollection,
            where('title', '==', previousData.title),
            where('deadline', '==', previousData.deadline)
        );

        const querySnapshot = await getDocs(opportunityQuery);

        if (querySnapshot.empty) {
            console.error('No matching opportunity found');
            return;
        }

        const opportunityDocRef = querySnapshot.docs[0].ref;
        await deleteDoc(opportunityDocRef);

        toast.success('Deleted Opportunity');
    } catch (error) {
        toast.error('Failed to Delete Opportunity');
    }
}