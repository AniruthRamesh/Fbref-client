/** 
 * @module Data
 * @description Provides static data for dropdown options in the application. 
 * This module centralizes the options for players, team types, scopes, 
 * and competition formats to ensure consistency across different components 
 * and facilitate future updates to these lists.
 * 
 * As the application scales or the data requirements change, these static arrays 
 * could be replaced or augmented by dynamic data sources, such as API endpoints, 
 * to provide up-to-date and comprehensive options for the dropdown components.
 * 
 * Contains predefined arrays for:
 * - `players`: List of player names to select from.
 * - `teamTypes`: Types of teams, like club or national teams.
 * - `scopes`: Scope of statistics, such as domestic or international.
 * - `competitionFormats`: Types of competition formats, such as league or cup.
 */
export const players = ["Cristiano Ronaldo", "Lionel Messi"];
export const teamTypes = ["Club", "National Team"];
export const scopes = ["Domestic", "International"];
export const competitionFormats = ["League", "Cup"];