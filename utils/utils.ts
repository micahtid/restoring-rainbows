import { DocumentData } from "firebase/firestore";


//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

export interface StateData {
    state: string;
    branches: DocumentData[];
}

export interface CountryData {
    country: string;
    states?: StateData[];
    branches?: DocumentData[];
}

export const organizeBranchesByCountry = (documentData: DocumentData[]) => {
    const result: CountryData[] = [];

    documentData.forEach(doc => {
        let countryData = result.find(item => item.country === doc.country);                    // Find if the country exists in the object

        if (!countryData) {
            countryData = { country: doc.country };                                             // If it doesn't exist, create it
            result.push(countryData);
        }

        if (doc.country === "USA") {
            if (!countryData.states) {
                countryData.states = [];
            }

            let stateData = countryData.states.find(item => item.state === doc.state);          // Find if a state exists in the USA country

            if (!stateData) {
                stateData = {
                    state: doc.state as string, 
                    branches: []
                };
                countryData.states.push(stateData);
            }

            stateData.branches.push(doc);
        } else {
            if (!countryData.branches) {
                countryData.branches = [];
            }

            countryData.branches.push(doc);
        }
    });

    return result;
}

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////