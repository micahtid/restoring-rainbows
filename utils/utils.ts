import { DocumentData } from "firebase/firestore";


//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

export interface CityData {
    city: string;
    branches: DocumentData[];
}

export interface StateData {
    state: string;
    cities: CityData[];
}

export interface CountryData {
    country: string;
    states?: StateData[];
    cities?: CityData[];                                                 
}

export const organizeBranchesByCountry = (documentData: DocumentData[]) => {
    const result: CountryData[] = [];
  
    documentData.forEach(doc => {
      const { country, state, city } = doc;
  
      // Find if the country exists in the result array
      let countryData = result.find(c => c.country === country);
      if (!countryData) {
        countryData = { country, states: [], cities: [] };
        result.push(countryData);
      }
  
      // If country is the USA, organize by states and cities
      if (country === "USA") {
        let stateData = countryData.states?.find(s => s.state === state);
        if (!stateData) {
          stateData = { state, cities: [] };
          countryData.states?.push(stateData);
        }
  
        let cityData = stateData.cities.find(c => c.city === city);
        if (!cityData) {
          cityData = { city, branches: [] };
          stateData.cities.push(cityData);
        }
  
        cityData.branches.push(doc);
      } else {
        // For other countries, only organize by city
        let cityData = countryData.cities?.find(c => c.city === city);
        if (!cityData) {
          cityData = { city, branches: [] };
          countryData.cities?.push(cityData);
        }
  
        cityData.branches.push(doc);
      }
    });
  
    // Sort the states and cities alphabetically
    result.forEach(countryData => {
      if (countryData.states) {
        countryData.states.sort((a, b) => a.state.localeCompare(b.state));
        countryData.states.forEach(stateData => {
          stateData.cities.sort((a, b) => a.city.localeCompare(b.city));
        });
      } else if (countryData.cities) {
        countryData.cities.sort((a, b) => a.city.localeCompare(b.city));
      }
    });
  
    return result;
  };
  

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////

export interface GroupedData {
    categorization: string;
    people: DocumentData[];
}

export const organizeByPosition = (data: DocumentData[]): GroupedData[] => {
  // Reduce to group by categorization
  const groupedData = data.reduce((result: GroupedData[], current: DocumentData) => {
      const existingPosition = result.find(
          (group) => group.categorization === current.categorization
      );

      if (existingPosition) {
          existingPosition.people.push(current);
      } else {
          result.push({
              categorization: current.categorization,
              people: [current],
          });
      }

      return result;
  }, []);

  // Sort the grouped data alphabetically by categorization
  const sortedGroupedData = groupedData.sort((a, b) => {
      return a.categorization.localeCompare(b.categorization);
  });

  // Sort roles within each group
  sortedGroupedData.forEach(group => {
      group.people.sort((a, b) => {
          return a.role.localeCompare(b.role);
      });
  });

  return sortedGroupedData;
};

