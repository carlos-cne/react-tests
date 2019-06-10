import React from "react";

export function useCarlos(initialValue: any) {
  const [value, setValue] = React.useState(initialValue);

  function onChange(e: any) {
    setValue(e.target.value);
  }

  return { value, onChange };
}
