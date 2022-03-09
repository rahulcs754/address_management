const Input = ({ name, type, placeholder, isChange }) => {
  return (
    <div className="input-box mb-s ">
      <input
        type="text"
        className="field-item"
        name="name"
        placeholder="Name"
        onChange={isChange}
      />
    </div>
  );
};
export default Input;
