import { StylesConfig } from "react-select";

export const MainSearchStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    border: "1px solid #E7EAF6",
    borderRadius: "4px",
    boxShadow: "none",
    padding: "8px 4px 8px 18px",
    minHeight: "66px",
    color: "#27262B",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "125%",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#FFF7EE" : "white",
    color: state.isSelected ? "white" : "black",
    padding: "17px 64px 17px 58px",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "120%",
    ":hover": {
      backgroundColor: "#F1F3FB",
      color: "#27262B",
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: "blue",
    clearIndicatorLabel: "Clear All",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#FFF7EE",
    border: "1px solid #F2D8BA",
    borderRadius: "2px",
    display: "flex",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#27262B",
    padding: "6px 12px",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "120%",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#71717A",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "125%",
  }),
  groupHeading: (provided) => ({
    ...provided,
    padding: "16px 64px 16px 58px",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "135%",
    letterSpacing: "0.91px",
  }),
};

export const CandidateSearchStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    border: "1px solid #E7EAF6",
    borderRadius: "4px",
    boxShadow: "none",
    padding: "8px 4px 8px 18px",
    minHeight: "48px",
    color: "#27262B",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "125%",
  }),
  option: (provided, state) => ({
    ...provided,

    backgroundColor: state.isSelected ? "#FFF7EE" : "white",
    color: state.isSelected ? "white" : "black",
    padding: "17px 64px 17px 58px",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "120%",
    ":hover": {
      backgroundColor: "#F1F3FB",
      color: "#27262B",
    },
  }),
  menu: (provided) => ({
    ...provided,
    width: "488px",
    left: "18%",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: "blue",
    clearIndicatorLabel: "Clear All",
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#FFF7EE",
    border: "1px solid #F2D8BA",
    borderRadius: "2px",
    display: "flex",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#27262B",
    padding: "6px 12px",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "120%",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#71717A",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "125%",
  }),
  groupHeading: (provided) => ({
    ...provided,
    padding: "16px 64px 16px 58px",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "135%",
    letterSpacing: "0.91px",
  }),
};
