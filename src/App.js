import "./styles.css";

import { useAddress } from "./AddressContext";

export default function App() {
  const {
    address,
    HandlerAddressForm,
    checkInputValidation,
    checkInputTime,
    setAddressData
  } = useAddress();

  const {
    name,
    mobile,
    city,
    state,
    landmark,
    pincode,
    AddressError,
    isValid
  } = address;

  const handlerInput = (e) => {
    setAddressData(e);
    //checkInputTime(e);
    checkInputValidation(e);
  };

  return (
    <div className="App">
      <form onSubmit={(e) => HandlerAddressForm(e)}>
        <fieldset className="border p-xs">
          <legend className="text-uppercase font-thiner mb-xs">
            add a new address
          </legend>
          <div className="input-box mb-s ">
            <input
              type="text"
              className="field-item"
              name="name"
              value={name}
              placeholder="Name"
              onChange={handlerInput}
            />
          </div>
          <div className="input-box mb-s width-50">
            <input
              type="text"
              className="field-item"
              name="mobile"
              value={mobile}
              placeholder="10-digit mobile number"
              onChange={handlerInput}
            />
          </div>
          <div className="input-box mb-s width-50">
            <input
              type="text"
              className="field-item"
              name="city"
              value={city}
              placeholder="City/Distict/Town"
              onChange={handlerInput}
            />
          </div>
          <div className="input-box mb-s width-50">
            <input
              type="text"
              className="field-item"
              name="state"
              value={state}
              placeholder="State"
              onChange={handlerInput}
            />
          </div>
          <div className="input-box mb-s">
            <input
              type="text"
              className="field-item"
              name="landmark"
              value={landmark}
              placeholder="Landmark"
              onChange={handlerInput}
            />
          </div>
          <div className="input-box mb-s">
            <input
              type="text"
              className="field-item"
              name="pincode"
              value={pincode}
              placeholder="Pincode"
              onChange={handlerInput}
            />
          </div>

          <button className="btn btn-primary width-30" type="submit">
            Save
          </button>
          <button className="btn width-30 reset-button" type="button">
            Reset
          </button>
        </fieldset>
      </form>
    </div>
  );
}
