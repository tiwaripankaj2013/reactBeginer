const InputWithoutLabel = (props) => {
  return (
    <label htmlFor={props.htmlFor} className="block w-1/2 mb-4 mr-2">
      <input
        type={props.inputType}
        placeholder={props.placeholder}
        name={props.name}
        maxLength={props.maxLength ? props.maxLength :'50'}
        value={props.value}
        onChange={props.onChange}
        className="appearance-none border-b-2 w-full p-2 text-grey-darker leading-base focus:outline-none text-sm"
      />
    </label>
  );
};
const InputWithLabel = (props) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {props.label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id={props.id}
        type={props.inputType}
        value={props.value}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      {/* {err ? ( */}
        <p className="text-red-500 text-xs italic">
         {props.errorMessage}
        </p>
      {/* ) : (
        " "
      )} */}
    </div>
  );
};

const InputWrapper = ({customClass,...rest}) => {
  return(
    <div className={`w-full flex px-12 py-2 ${customClass ? customClass:''}`}>
      {rest.children}
    </div>
  )
}
export { InputWithoutLabel, InputWithLabel,InputWrapper };
