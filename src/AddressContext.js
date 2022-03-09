import { createContext, useContext, useEffect, useState } from "react";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState({
    name: { value: "", error: "" },
    mobile: { value: "", error: "" },
    city: { value: "", error: "" },
    state: { value: "", error: "" },
    landmark: { value: "", error: "" },
    pincode: { value: "", error: "" },
    AddressError: { value: "", error: "" },
    isValid: false
  });

  // Set error if any error will come
  const AddressErrorHandler = (dataText) => {
    setAddress((address) => ({ ...address, AddressError: dataText }));
  };

  // Set true if all validation is clear
  const isAddressValid = () => {
    setAddress((address) => ({ ...address, isValid: !address.isValid }));
  };

  // Set value of field
  const setAddressData = (elem) => {
    const { name, value } = elem.target;
    setAddress((address) => ({
      ...address,
      [name]: value
    }));
  };

  const checkInputValidation = (elem) => {
    // const { name, value } = elem.target;
    const {
      name,
      mobile,
      city,
      state,
      landmark,
      pincode,
      AddressErro,
      isValid
    } = address;

    if (name.match(/^[a-zA-Z]+$/)) {
    }
  };

  useEffect(() => {
    (async function () {
      checkInputValidation();
    })();
  }, [address]);

  const checkInputTime = (elem) => {
    const { name, value } = elem.target;

    switch (name) {
      case "name": {
        return checkValueIsString(value)
          ? setAddress((prev) => ({ ...prev, [name]: value }))
          : address;
      }
      case "mobile":
        return typeof value === "number"
          ? setAddress((prev) => ({ ...prev, [name]: value }))
          : address;
      case "city":
        return checkValueIsString(value)
          ? setAddress((prev) => ({ ...prev, [name]: value }))
          : address;
      case "state":
        return typeof value === "string" && value instanceof String
          ? setAddress((prev) => ({ ...prev, [name]: value }))
          : address;
      case "pincode":
        return typeof value === "number"
          ? setAddress((prev) => ({ ...prev, [name]: value }))
          : address;
      default:
        return address;
    }
  };

  // this is form validation function
  const HandlerAddressForm = (e) => {
    e.preventDefault();
  };

  return (
    <AddressContext.Provider
      value={{
        address,
        setAddressData,
        HandlerAddressForm,
        checkInputValidation,
        checkInputTime
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { useAddress, AddressProvider };
