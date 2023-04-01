import React from "react";
// import { Box } from "@chakra-ui/core";
import {
  PinInput,
  PinInputField
  // usePinInput,
  // usePinInputField
} from "@chakra-ui/pin-input";

// https://github.com/chakra-ui/chakra-ui/commit/3cf3eed7db7cdb3735f0af209f6a4417d0afaea0

export default function PinVerifyInput({
  placeholder,
  onChange,
  onComplete,
  fieldStyle,
  ...props
}) {
  const [value, setValue] = React.useState("");

  const handleChange = (value) => {
    setValue(value);
    onChange(value);
  };

  // const handleComplete = (value) => {
  //   console.log(value);
  //   onComplete(value);
  // };

  return (
    <PinInput
      placeholder={placeholder}
      value={value.lenght > 3 ? "" : value}
      onChange={handleChange}
      // onComplete={handleComplete}
      {...props}
    >
      <PinInputField style={fieldStyle} autoFocus />
      <PinInputField style={fieldStyle} />
      <PinInputField style={fieldStyle} />
      <PinInputField style={fieldStyle} />
    </PinInput>
  );
}
