function CustomSelect(props) {
  return (
    <select
      className={props.className ? props.className : null}
      defaultValue={"DEFAULT"}
    >
      <option value="DEFAULT" disabled>
        {props.default ? props.default : "select field"}
      </option>
      {props.data.map((item, index) => {
        return (
          <option value={item.key} key={index}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
}
const SelectWithLabel = (props) => {
  return (
    <div className="mb-6">
      <label className="block text-left px-1 text-blue-900">
       {props.label}
      </label>
      <select className="max-w-lg px-2 py-1 block my-1 outline-none border-primary border rounded-md">
        {props.data.map((item) => (
          <option value={item.name}>{item.name}</option>
        ))}
      </select>
    </div>
  );
};

export { CustomSelect,SelectWithLabel };
