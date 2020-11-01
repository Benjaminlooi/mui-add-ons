import PropTypes from "prop-types";
import React from "react";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CustomButton from "../CustomButton/CustomButton";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#54CF60",
      contrastText: "#fff",
    },
  },
});

export default function SuccessButton(props) {
  const { children, isLoading, ...otherProps } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <CustomButton {...otherProps} isLoading={isLoading} color="primary">
        {children}
      </CustomButton>
    </MuiThemeProvider>
  );
}

SuccessButton.defaultProps = {
  isLoading: false,
};

SuccessButton.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
};
