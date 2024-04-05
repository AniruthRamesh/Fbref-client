/**
 * @module API
 * @description This module is responsible for handling all API-related operations within the application. 
 * It encapsulates the logic for constructing request URLs and fetching data from the server, providing a 
 * simplified interface for interacting with the backend.
 * 
 * Key Components:
 * - `APIUrl`: Constructs URLs tailored to specific API actions, adapting based on the provided action and payload.
 * - `fetchPlayerStats`: An asynchronous function that fetches player statistics using URLs constructed by the 
 *   `APIUrl` function. It simplifies the data fetching process, including error handling. Currently the implementation
 *    is done using a Library called React-Query, which handles Caching the api, fetching async data and storing them and much more.
 * 
 * Future Enhancements:
 * - The handling of the `APIUrl` will be improved to ensure the base URL and other sensitive information are 
 *   processed securely, possibly through environment variables or a secure configuration management system.
 * 
 * @see {@link module:API.APIUrl} for constructing API request URLs.
 * @see {@link module:API.fetchPlayerStats} for fetching player statistics.
 * @see {@link https://tanstack.com/query/latest/docs/framework/react/overview} for information about the React-Query library.
 */