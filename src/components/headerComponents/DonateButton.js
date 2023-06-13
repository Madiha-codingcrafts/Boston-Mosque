import React from 'react'
import { Button, styled } from '@mui/material'

const StyledButton = styled(Button) (({theme}) => ({
  ...theme.typography.donate,
  borderRadius: 5,
  fontSize: '16px',
  minWidth: '165px',
  // width: '100%',
  [theme.breakpoints.down("xl")]: {
    fontSize: '16px',
    minWidth: '155px',
    height: '56px',
    margin: 'auto'
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: '14px',
    minWidth: '135px',
    height: '46px'
  },
  [theme.breakpoints.down("md")]: {
    fontSize: '14px',
    minWidth: '115px',
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '16px',
    minWidth: '125px',
  },
}))

export const DonateButton = () => {
  return (
    <StyledButton >
        Donate Us
    </StyledButton>
  )
}
