import React, { FC } from "react";

import ReactSelect, { components } from "react-select";

import CustomClearIndicator, { CustomSearchIcon } from "./addSearch";

export interface SearchSelectProps {
  options: any;
  onChange?: (selectedOptions: any) => void;
  placeholder?: string;
  onInputChange?: any;
  menuIsOpen?: any;
  styles: any;
  value?: any;
}

const GroupHeading = (props: any) => <components.GroupHeading {...props} />;

const Control = ({ children, ...props }: any) => (
  <components.Control {...props}>
    <CustomSearchIcon data-testid="search-icon" />
    {children}
  </components.Control>
);

const SearchSelect: FC<SearchSelectProps> = ({
  options,
  onChange,
  placeholder,
  onInputChange,
  menuIsOpen,
  styles,
  value,
}) => {
  const customFilterOption = (option: any, rawInput: any) => {
    return option.label.toLowerCase().includes(rawInput.toLowerCase());
  };

  return (
    <ReactSelect
      components={{
        DropdownIndicator: null,
        IndicatorSeparator: null,
        Control,
        ClearIndicator: CustomClearIndicator,
        GroupHeading,
      }}
      filterOption={customFilterOption}
      isClearable
      isMulti
      isSearchable
      menuIsOpen={menuIsOpen}
      onChange={onChange}
      onInputChange={onInputChange}
      options={options}
      placeholder={placeholder}
      styles={styles}
      value={value}
    />
  );
};
export { SearchSelect };
