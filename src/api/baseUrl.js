/**
 * Constructs and returns a URL for API requests. This function adapts the URL based on the action
 * and payload. Currently, it supports building a detailed URL for fetching player statistics. The base URL
 * is hardcoded for simplicity, with plans to secure and externalize it in production environments for future
 * enhancements.
 * 
 * @memberof module:API
 * 
 * @function APIUrl
 * @param {string} action Identifies the API request type, tailoring the URL to specific needs.
 * @param {Object} payload Contains parameters for constructing the request URL, applicable for certain actions.
 * @returns {string} A specifically constructed URL for the action, defaulting to a base URL for unhandled actions.
 * 
 * @example
 * //Example usage for a "PlayerStats" action
 * APIUrl("PlayerStats", { playerParam: "ronaldo", teamType: "club", scope: "domestic", competitionFormat: "league" });
 */
const APIUrl = (action, payload) => {
  switch(action){
    case "PlayerStats":
      return `http://localhost:4000/stats/v1?player=${payload.playerName}&team=${payload.teamType}&scope=${payload.scope}&competition=${payload.competitionFormat}`;
    default:
      return `http://localhost:4000/stats/v1`;
  }

};

export default APIUrl;