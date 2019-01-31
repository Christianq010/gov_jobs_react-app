import React from "react";

const SearchContext = React.createContext({
  placeholder: "Teacher",
  value: "",
  handleChange() {},
  handleSubmit() {}
});

export const Provider = SearchContext.Provider;
export const Consumer = SearchContext.Consumer;
