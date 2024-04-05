// src/components/UI/Input.js
const Input = ({ type, placeholder, value, onChange }) => (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
    />
  );
  
  export default Input;
  