/**
 * A Dropdown component that renders a selectable dropdown list. It is utilized throughout the application
 * to offer users a consistent means of selecting from a predefined list of options, such as player names,
 * team types, scopes of statistics, and competition formats.
 * 
 * @memberof module:Components
 * @function Dropdown
 * 
 * @param {Object} props The properties passed to the Dropdown component.
 * @param {Array<string>} props.options An array of options to be displayed in the dropdown. Each option is
 * a string that represents a selectable item in the dropdown list.
 * @param {string} props.selectedValue The currently selected value in the dropdown. This should correspond
 * to one of the strings in the `options` array.
 * @param {Function} props.onChange A callback function that is called when the selected option in the dropdown
 * changes. It receives the new selected value as its only argument.
 * 
 * @returns {React.Component} A React component that renders a styled dropdown list.
 * 
 * @example
 * // In a parent component, such as Home, Dropdown is used like this:
 * <Dropdown
 *   options={players} // players = ["Cristiano Ronaldo", "Lionel Messi"]
 *   selectedValue={selectedPlayer} // selectedPlayer is state managed by the parent component
 *   onChange={setSelectedPlayer} // setSelectedPlayer updates the parent component's state
 * />
 */
const Dropdown = ({ options, selectedValue, onChange }) => {
  return (
    <div className="inline-block relative w-64">
      <select
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 hover:border-gray-500"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
  );
}

export default Dropdown;
