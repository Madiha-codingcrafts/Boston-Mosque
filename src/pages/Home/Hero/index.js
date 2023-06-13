import React from 'react'
import { styled } from '@mui/material'
import hero from '../../../images/hero_img.png'

const StyledTypography = styled('h1') (({theme}) => ({
    fontFamily: 'Cinzel',
    fontWeight: 700, 
    color: '#ECF4F4',
    position: 'absolute',
    lineHeight: '4.5em',
    letterSpacing: '0.05em',
    top: '9em',
    left: '3em',
    fontSize: '2.2em',
    [theme.breakpoints.down("xl")]: {
      top: '15em',
      left: "3.5em",
      fontSize: "1.25em",
      lineHeight: '1.26em',
      letterSpacing: '0.17em',
  }, 
    [theme.breakpoints.down("lg")]: {
        lineHeight: '35px',
        letterSpacing: '0.15em',
        top: '11em',
        left: '3em',
        fontSize: '1.5em',
        width: '22em'
    },
    [theme.breakpoints.down("md")]: {
        lineHeight: '25px',
        letterSpacing: '0.12em',
        top: '10em',
        left: '2em',
        fontSize: '1.2em',
        width: '18em'
    },
    [theme.breakpoints.down("sm")]: {
        lineHeight: '20px',
        letterSpacing: '0.005em',
        fontSize: '14px',
        top: '11em',
        left: "2em",
        maxWidth: "12em",
        width: '100'
    },
    [theme.breakpoints.down(500)]: {
      top: '16em',
      left: "2em",
      maxWidth: "22em",
      width: '100%',
      height: "4.5em",
      fontSize: "0.5em",
      lineHeight: '1.25em',
      letterSpacing: '0.07em',
  },
  }))

const StyledText = styled('p') (({theme}) => ({
    fontFamily: 'Lato',
    fontWeight: 300, 
    color: '#ECF4F4',
    position: 'absolute',
    top: '17em',
    left: "4em",
    width: "30em",
    height: "4.65em",
    fontSize: "1.75em",
    lineHeight: '1.25em',
    letterSpacing: '0.05em',
    [theme.breakpoints.down("xl")]: {
      top: '17em',
      left: "3em",
      width: "25em",
      height: "4.65em",
      fontSize: "1.3em",
      lineHeight: '1.25em',
      letterSpacing: '0.07em',
  },
    [theme.breakpoints.down("lg")]: {
        top: '17em',
        left: "3em",
        width: "25em",
        height: "4.65em",
        fontSize: "1.3em",
        lineHeight: '1.25em',
        letterSpacing: '0.07em',
    },
    [theme.breakpoints.down("md")]: {
        top: '15em',
        left: "2em",
        width: "22em",
        height: "4em",
        fontSize: "1.05em",
        lineHeight: '1.05em',
        letterSpacing: '0.03em',
    },
    [theme.breakpoints.down("sm")]: {
        top: '17em',
        left: "2em",
        maxWidth: "21em",
        width: '100%',
        height: "4.5em",
        fontSize: "0.75em",
        lineHeight: '1.25em',
        letterSpacing: '0.07em',
    },
    [theme.breakpoints.down(500)]: {
      top: '19em',
      left: "2em",
      maxWidth: "21em",
      width: '100%',
      height: "4.5em",
      fontSize: "0.5em",
      lineHeight: '1.05em',
      letterSpacing: '0.07em',
  },
}))

const HeroImage = styled('img')(({theme})=>({
  width: '100%',
}));


export const Hero = () => {
  return (
    <>
      {/* <StyledContainer> */}
          <HeroImage src={hero} alt="hero_img"/>
        <StyledTypography>
          “Call upon Me, I will respond to you”
        </StyledTypography>
        <StyledText>
          The mosque is the place where we feel the presence of Allah, and where we find peace.
        </StyledText>
      {/* </StyledContainer> */}
    </>
  )
}
