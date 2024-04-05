import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import fetchPlayerStats from "../api/getPlayerStats";
import { useQuery } from "@tanstack/react-query";
import { players, teamTypes, scopes, competitionFormats } from "../data/dropdownData";
import RenderStatsRow from "../components/RenderPlayerStats";
import { useMemo } from "react";

/**
 * 
 * The Home page component serves as the central hub for displaying player statistics within the application.
 * It utilizes several key components and modules to allow users to select and view statistics for different
 * players, team types, scopes, and competition formats. The component leverages React's useState to manage
 * state for user selections and useMemo to efficiently sort data based on these selections. It employs the
 * `@tanstack/react-query` {@link https://tanstack.com/query/latest/docs/framework/react/overview} for fetching data asynchronously, ensuring a responsive and up-to-date user experience.
 * 
 * The component structure includes dropdowns for filtering criteria, a toggle for sorting order, and a table
 * for displaying the statistics. The dropdowns utilize static data provided by the {@link module:Data} module,
 * ensuring consistency and easy updates. The fetched player stats are displayed using the {@link module:Components.RenderStatsRow}
 * component, which formats the data into a user-friendly table. Error handling and loading states are also
 * implemented, providing feedback to the user during data fetching operations.
 * 
 * @memberof module:Pages
 * @function Home
 * @returns {React.Component} The Home page component rendering a UI for selecting criteria, viewing player stats, and toggling sort order.
 */
const Home = () => {
  // State hooks for managing selected criteria
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);
  const [selectedTeamType, setSelectedTeamType] = useState(teamTypes[0]);
  const [selectedScope, setSelectedScope] = useState(scopes[0]);
  const [selectedCompetitionFormat, setSelectedCompetitionFormat] = useState(competitionFormats[0]);
  const [sortOrder, setSortOrder] = useState("asc"); 

  // Fetch player stats using react-query
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['PlayerStats', { playerName: selectedPlayer, teamType: selectedTeamType, scope: selectedScope, competitionFormat: selectedCompetitionFormat }],
    queryFn: fetchPlayerStats,
    staleTime: 15 * 60 * 1000,
  });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // useMemo hook for sorting data based on the sortOrder state
  const sortedData = useMemo(() => {
    if (!data?.Stats) return [];
    return [...data.Stats].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.Seasons > b.Seasons ? 1 : -1;
      } else {
        return a.Seasons < b.Seasons ? 1 : -1;
      }
    });
  }, [data, sortOrder]);

  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 pb-8 p-4 mt-4 font-serif "> {/* Add padding at the bottom */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4"> {/* Increased gap and added horizontal padding */}
          <Dropdown
           options={players}
           selectedValue={selectedPlayer}
           onChange={setSelectedPlayer}
         />
         <Dropdown
           options={teamTypes}
           selectedValue={selectedTeamType}
           onChange={setSelectedTeamType}
         />
         <Dropdown
           options={scopes}
           selectedValue={selectedScope}
           onChange={setSelectedScope}
         />
         <Dropdown
           options={competitionFormats}
           selectedValue={selectedCompetitionFormat}
           onChange={setSelectedCompetitionFormat}
         />
      </div>

      {error && <p className="text-red-500 text-center mb-4">Error: {error.message}</p>}
      {isLoading && <p className="text-center mb-4">Loading...</p>}

      {data?.Stats?.length > 0 ? (
          <div className="flex justify-center items-center mb-4 p-4 mt-4"> {/* Center the toggle switch and add margin below */}
            <label className="flex items-center space-x-4 cursor-pointer">
              <span className="text-md font-serif">Season Order - {sortOrder === "asc" ? "Ascending" : "Descending"}</span>
              <div className="relative">
                {/* Simplified toggle without absolute positioning on input */}
                <input type="checkbox" className="sr-only peer" checked={sortOrder === "desc"} onChange={toggleSortOrder} />
                <span className="w-16 h-10 flex items-center flex-shrink-0 p-1 bg-gray-300 rounded-full duration-300 ease-in-out peer-checked:bg-green-400 after:w-8 after:h-8 after:bg-white after:rounded-full after:shadow-md after:duration-300 peer-checked:after:translate-x-6"></span>
              </div>
            </label>
          </div>
        ) : <></>}


      {!isError && !isLoading && (data?.Stats?.length > 0 ? (
        <div className="overflow-x-auto p-4 mt-4"> {/* Added margin top for spacing */}
          <table className="min-w-full table-auto border-collapse border border-gray-200 mb-4"> {/* Added margin bottom for spacing after table */}
          <thead className="bg-gray-100">
              <tr>
                {["Season", "Age", "Team", "Country", "Competition", "Games", "Minutes", "Goals", "Assists", "Goals/90"].map((heading) => (
                  <th key={heading} className="p-2 text-center font-semibold text-sm relative group">
                  {heading}
                  {heading === "Country" && (
                    <div className={`absolute z-10 w-32 p-2 rounded-lg transform -translate-y-full hidden group-hover:block bg-black text-white text-xs`}>
                      Nationality of the Team
                    </div>
                  )}
                </th>
                
                ))}
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <RenderStatsRow sortedData={sortedData} data={data} />
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center mb-4 p-4 font-serif">No detailed stats available, Change the criteria and try again.</div>
      ))}
    </div>
  );
};

export default Home;
