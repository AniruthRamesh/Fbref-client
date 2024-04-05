import APIUrl from "./baseUrl";

/**
 * Fetches player statistics from the server using the constructed URL from the APIUrl function. 
 * This asynchronous function takes a destructured object as its parameter, which includes the 
 * player name and details necessary for the APIUrl function, constructs the URL for fetching player statistics,
 * and then performs the fetch request to retrieve the data.
 * 
 * The function throws an error if the fetch request does not complete successfully, ensuring that the 
 * caller can handle failed requests appropriately.
 * 
 * @memberof module:API
 * 
 * @async
 * @function fetchPlayerStats
 * 
 * @param {Object} param The destructuring parameter from react-query's queryKey.
 * @param {Array} param.queryKey An array where the first element is ignored and the second element is an object containing playerName, teamType, scope, and competitionFormat.
 * @returns {Promise<Object>} The JSON response containing the player's statistics.
 * 
 * @see {@link module:API.APIUrl} for how the function constructs the URL for fetching data.
 */
const fetchPlayerStats = async ({queryKey}) => {
  const [, { playerName, teamType, scope, competitionFormat }] = queryKey;
  
  const url = APIUrl("PlayerStats", {playerName, teamType, scope,  competitionFormat });
  console.log(url)
    
    const response = await fetch(url);
    if(!response.ok){
    throw new Error("Network response was not Ok");
  }

  return response.json();
};

export default fetchPlayerStats;  