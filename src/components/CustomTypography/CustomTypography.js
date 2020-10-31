import PropTypes from 'prop-types'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  semiBold: {
    fontWeight: 500
  },
  bold: {
    fontWeight: 700
  },
  light: {
    fontWeight: 300
  },
  flex: {
    display: 'flex'
  },
  regular: {
    fontWeight: 400
  }
}))

export default function CustomTypography(props) {
  const { className, children, bold, semiBold, light, regular, flex, ...otherProps } = props
  const classes = useStyles()
  return (
    <Typography
      className={clsx(className, {
        [classes.semiBold]: semiBold,
        [classes.bold]: bold,
        [classes.light]: light,
        [classes.flex]: flex,
        [classes.regular]: regular
      })}
      {...otherProps}
    >
      {children}
    </Typography>
  )
}

CustomTypography.defaultProps = {
  bold: false,
  flex: false,
  light: false,
  semiBold: false,
  regular: false
}

CustomTypography.defaultProps = {
  className: null
}

CustomTypography.propTypes = {
  className: PropTypes.string,
  bold: PropTypes.bool,
  children: PropTypes.node.isRequired,
  flex: PropTypes.bool,
  light: PropTypes.bool,
  semiBold: PropTypes.bool,
  regular: PropTypes.bool
}
