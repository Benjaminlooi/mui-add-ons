import PropTypes from 'prop-types'
import { Button, CircularProgress, makeStyles } from '@material-ui/core'
import React from 'react'
import clsx from 'clsx'

const useStyles = makeStyles(() => ({
  wrapper: {
    position: 'relative'
  },
  fullWidth: {
    width: '100%'
  },
  fullHeight: {
    height: '100%'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12
  }
}))

export default function CustomButton(props) {
  const { isLoading, noSpinner, children, fullWidth, fullHeight, ...otherProps } = props
  const classes = useStyles()

  return (
    <div
      className={clsx(classes.wrapper, {
        [classes.fullWidth]: fullWidth,
        [classes.fullHeight]: fullHeight
      })}
    >
      <Button
        {...otherProps}
        fullWidth={fullWidth}
        disabled={isLoading}
        className={clsx({
          [classes.fullHeight]: fullHeight
        })}
      >
        {children}
      </Button>
      {isLoading && !noSpinner && <CircularProgress size={24} className={classes.buttonProgress} />}
    </div>
  )
}

CustomButton.defaultProps = {
  isLoading: false,
  noSpinner: false,
  fullWidth: false,
  fullHeight: false
}

CustomButton.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.node.isRequired,
  noSpinner: PropTypes.bool,
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool
}
