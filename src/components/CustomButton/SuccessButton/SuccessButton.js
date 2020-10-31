import PropTypes from 'prop-types'
import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import CustomButton from '../CustomButton'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#54CF60',
      contrastText: '#fff'
    }
  }
})

export default function SuccessButton(props) {
  const { children, isLoading, ...otherProps } = props
  return (
    <ThemeProvider
      theme={(outerTheme) => ({
        ...outerTheme,
        palette: {
          ...outerTheme.palette,
          primary: { ...theme.palette.primary }
        }
      })}
    >
      <CustomButton {...otherProps} isLoading={isLoading} color="primary">
        {children}
      </CustomButton>
    </ThemeProvider>
  )
}

SuccessButton.defaultProps = {
  isLoading: false
}

SuccessButton.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool
}
