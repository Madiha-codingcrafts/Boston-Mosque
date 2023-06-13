import React from 'react'
import { Button, styled} from '@mui/material'
import khanakaaba from '../../../images/khanakaaba.png'
import light_bg from '../../../images/light_background_2.svg'
import light_rotated_bg from '../../../images/background_1.svg'

const StyledBox = styled('div') (({theme}) => ({
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    gap: '293px',
    justifyContent: 'space-between',
    padding: '0px 115px',
    [theme.breakpoints.down("xl")]: {
        gap: '153px',
        padding: '0px 100px',
    },
    [theme.breakpoints.down("lg")]: {
        gap: '112px',
        padding: '0px 80px',
    }, 
    [theme.breakpoints.down("md")]: {
        flexFlow: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0px',
        padding: '0px 70px',
    },
    [theme.breakpoints.down("sm")]: {
        flexFlow: 'column-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px 50px',
    },
}))

const Wrapper = styled('div')(({theme})=>({
    display: 'flex',
    justifyItems: 'center',
    flexDirection: 'column',
    padding: '102px 0px 159px',
    gap: '33px',
    [theme.breakpoints.down("xl")]: {
        padding: '100px 0px auto',
        gap: '36px',
    },
    [theme.breakpoints.down("lg")]: {
        padding: '102px 0px 159px',
        gap: '33px',
    }, 
    [theme.breakpoints.down("md")]: {
        padding: '70px 0px 70px',
        gap: '33px',
    },
    [theme.breakpoints.down("sm")]: {
        padding: '60px 0px 60px',
        gap: '27px',
    },
}))

const StyledHeading = styled('h2') (({theme}) =>({
    fontFamily: 'Cinzel',
    fontWeight: 700,
    color: '#525252',
    fontSize: "50px",
    lineHeight: '75.11px',
    letterSpacing: '0.075em',
    maxWidth: '731px',
    width: '100%',
    padding: 0,
    margin: 0,
    [theme.breakpoints.down("xl")]: {
        fontSize: '40px',
        lineHeight: '60px',
        maxWidth: '731px',
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "30px",
      lineHeight: '50px',
      maxWidth: '523px',
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "28px",
      lineHeight: '50px',
      maxWidth: '540px',

    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
        lineHeight: '31px',
        maxWidth: '350px',
    },
  }))
  
  const StyledText = styled('p') (({theme})=>({
    fontFamily: 'Lato',
    color: '#525252',
    fontWeight: 400,
    fontSize: "32px",
    lineHeight: '42px',
    letterSpacing: '0.07em',
    maxWidth: '700px',
    width: '100%',
    padding: 0,
    margin: 0,
    [theme.breakpoints.down("xl")]: {
        fontSize: "25px",
        lineHeight: '32px',
        maxWidth: '560px',
    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "18px",
        lineHeight: '28px',
        maxWidth: '480px',
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "20px",
        lineHeight: '35px',
        maxWidth: '600px',
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "18px",
        lineHeight: '23px',
        maxWidth: '350px',
    },
    [theme.breakpoints.down(330)]: {
        fontSize: "16px",
        lineHeight: '20px',
        maxWidth: '370px',
    },
  }))

const StyledImage = styled('img')(({theme}) => ({
    width: 'calc(100% - 230px)',
    margin: '120px 0px 177px auto',
    maxWidth: '474px',
    height: '100%',
    // zIndex: '20px',
    [theme.breakpoints.down("xl")]: {
        maxWidth: '400px',
        margin: '130px 0px auto auto',
    },
    [theme.breakpoints.down("lg")]: {
        maxWidth: '320px',
    },
    [theme.breakpoints.down("md")]: {
        margin: '120px 0px 0px',
        maxWidth: '340px',
    },
    [theme.breakpoints.down("sm")]: {
        maxWidth: '217px',
        margin: '50px 0px 0px',
        width: 'calc(100% - 100px)',
    },
    [theme.breakpoints.down(330)]: {
        maxWidth: '300px',
        margin: '30px 0px 0px',
        width: 'calc(100% - 60px)'
    },
    
}))

const StyledButton = styled(Button) (({theme})=>({
    background: 'linear-gradient(95.32deg, #3F8B4B 45.74%, #ECF4F4 179.28%)',
    boxShadow: '2px 2px 4px rgba(63, 139, 75, 0.3)',
    borderRadius: 5,
    width: "197px",
    height: "56px",
    fontFamily: 'Lato',
    textTransform: 'none',
    fontWeight: 700,
    fontSize: '18px',
    [theme.breakpoints.down("xl")]: {
        fontSize: "16px",

    },
    [theme.breakpoints.down("lg")]: {
        fontSize: "16px",
    },
    [theme.breakpoints.down("md")]: {
        fontSize: "14px",
    },
    [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        width: '140px',
        height: '40px'
    },
    [theme.breakpoints.down(430)]: {
        fontSize: "12px",
        width: '140px',
        height: '40px'
    },
}))

const StyledBackground1 = styled('img')(({theme})=>({
    position: 'absolute',
    width: '100%',
    maxWidth: 210,
    right: '0px',
    top: '-83px',
    // zIndex: '10px',
    [theme.breakpoints.down("sm")]: {
      maxWidth: 300
    },
  }))

  const StyledBackground2 = styled('img')(({theme})=>({
    position: 'absolute',
    maxWidth: 410,
    width: '100%',
    left: 0,
    bottom: 0,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 300
    },
  }))  

export const Welcome = () => {
  return (
    <>
    <StyledBox> 
        {/* <StyledBackground1 src={light_rotated_bg}/>          */}
        <Wrapper>
            <StyledHeading>
                Welcome to Our Islamic Centre
            </StyledHeading>
            <StyledText>
                Lorem Ipsum is simply dummy text of the printing and typesetting 
                industry. Lorem Ipsum has been the industry's standard dummy text 
                ever since the 1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book. It has survived 
                not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged.
            </StyledText>
            <StyledButton>
                Read More    
            </StyledButton>           
        </Wrapper>
        <StyledImage src={khanakaaba} alt='khanakaaba'/>
    </StyledBox>
    </>
  )
}





