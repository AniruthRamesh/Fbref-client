/**
 * Renders table rows displaying player statistics based on sorted and summarized data. This component is a 
 * key part of the application's data presentation layer, transforming structured statistical data into a 
 * user-friendly tabular format. Each row represents an individual player's season statistics, with a 
 * summary row optionally appended to provide aggregate data.
 * 
 * @memberof module:Components
 * @function RenderStatsRow
 * 
 * @param {Object} params The parameters passed to the RenderStatsRow component.
 * @param {Array<Object>} params.sortedData An array of objects, each representing a player's statistics for a 
 * single season. This data is pre-sorted based on a selected criterion (e.g., ascending or descending by seasons) 
 * in the parent component before being passed to RenderStatsRow.
 * @param {Object} params.data An object containing additional data related to the player statistics, 
 * including a `StatsSummary` object that provides aggregate statistics across all listed seasons.
 * 
 * @returns {Array<React.Component>} An array of React component instances, each rendering a table row 
 * (`<tr>`) filled with player statistics. Includes conditional formatting (e.g., coloring) based on 
 * certain data conditions, such as highlighting zeroes in red.
 */
const RenderStatsRow = ({sortedData, data}) => {
  const stats = sortedData;
  const summary = data.StatsSummary;
  const statRows = stats.map((stat, index) => (
    <tr key={index} className="text-center border-b border-gray-200 hover:bg-yellow-100">
      <td className="p-2 ">{stat.Seasons}</td>
      <td className="p-2">{stat.Age}</td>
      <td className="p-2 ">{stat.Teams}</td>
      <td className="p-2 ">{stat.Country}</td>
      <td className="p-2">{stat.Competitions}</td>
      <td className="p-2">{stat.Games}</td>
      <td className="p-2">{stat.Minutes.toLocaleString()}</td> {/* Assuming the numbers can be large, you can use toLocaleString to format them with commas */}
      <td className={`p-2 ${stat.Goals === 0 ? 'text-red-500' : ''}`}>{stat.Goals}</td>
      <td className={`p-2 ${stat.Assists === 0 ? 'text-red-500' : ''}`}>{stat.Assists}</td>
      <td className="p-2">{stat["Goals/90"].toFixed(2)}</td> {/* Format to 2 decimal places */}
    </tr>
  ));

    if (summary) {
      statRows.push(
        <tr key="summary" className="text-center bg-gray-100 font-semibold">
          <td className="p-2">{summary.Seasons}</td>
          <td className="p-2">-</td>
          <td className="p-2">{summary.Teams}</td>
          <td className="p-2">-</td>
          <td className="p-2">{summary.Competitions}</td>
          <td className="p-2">{summary.Games}</td>
          <td className="p-2">{summary.Minutes}</td>
          <td className="p-2">{summary.Goals}</td>
          <td className="p-2">{summary.Assists}</td>
          <td className="p-2">{summary["Goals/90"]}</td>
        </tr>
      );
    }

    return statRows;
};

export default RenderStatsRow;
