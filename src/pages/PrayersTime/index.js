import React from 'react'
import men_in_sujood from '../../images/men_in_sujood_illustration.png'
import fajar_icon from '../../images/sunrise_fajar.svg'
import zuhur_icon from '../../images/sun_duhur.svg'
import asar_icon from '../../images/Group 1.svg'
import maghrib_icon from '../../images/Group 2.svg'
import isha_icon from '../../images/Night_Isha.svg'
import bg1 from '../../images/background_3.svg'
import bg2 from '../../images/background_4.svg'
import { Box, Card, Grid, Typography, styled } from '@mui/material'


const StyledBox = styled('div') (({theme})=>({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  background: 'linear-gradient(107.91deg, #238652 -29.97%, rgba(122, 151, 59, 0.7) 149.41%)',
  padding: '102px 83px 312px',
  [theme.breakpoints.down('lg')]: {
    padding: '90px 65px 280px',
  },
  [theme.breakpoints.down('md')]: {
    padding: '80px 60px 230px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '56px 47px 160px',
  },
  [theme.breakpoints.down(430)]: {
    padding: '50px 40px 179px',
  }
}))

const StyledHeading = styled('h3') (({theme}) =>({
  fontFamily: 'Cinzel',
  fontWeight: 700,
  color: '#ECF4F4',
  fontSize: "58px",
  lineHeight: '129.5%',
  letterSpacing: '1.2px',
  margin: 0,
  // [theme.breakpoints.down('lg')]: {
  //   fontSize: "24px",
  //   lineHeight: '31.08px',
  //   letterSpacing: '7.5%',
  // },
  // [theme.breakpoints.down('md')]: {
  //   fontSize: "24px",
  //   lineHeight: '31.08px',
  //   letterSpacing: '7.5%',
  // },
  [theme.breakpoints.down('sm')]: {
    fontSize: "24px",
    lineHeight: '31.08px',
    letterSpacing: '7.5%',
  },
  // [theme.breakpoints.down(430)]: {
  //   fontSize: "24px",
  //   lineHeight: '31.08px',
  //   letterSpacing: '7.5%',
  // },

 
}))

const StyledText = styled('p') (({theme})=>({
  fontFamily: 'Lato',
  color: '#ECF4F4',
  fontWeight: 350,
  fontSize: "32px",
  lineHeight: '41.6px',
  letterSpacing: '0.07em',
  margin: 0,
  padding: '50px 0px 150px',
  [theme.breakpoints.down('sm')]: {
    padding: '27px 0px 60px',
    fontSize: "18px",
    lineHeight: '23.4px',
    letterSpacing: '4.5%',
  }
}))

const MyImg = styled('img')(({theme})=> ({
  width: 'calc(100% - 200px)',
  margin: '0px auto 150px',
  maxWidth: '731px',
  [theme.breakpoints.down('md')]: {
    margin: '0px auto 80px',
    width: 'calc(100% - 80px)',
  },
  [theme.breakpoints.down('sm')]: {
    margin: '0px auto 80px',
    width: '100%',
  }
}))

const StyledTitle = styled('p')(({theme}) =>({

  fontFamily: 'Cinzel',
  fontWeight: 500,
  color: '#000000',
  fontSize: "36px",
  margin: 0,
  [theme.breakpoints.down('sm')]: {
    fontSize: "24px",
  },

}))

const StyledTime = styled(Typography)(({theme})=>({
  fontFamily: 'Cinzel',
  fontWeight: 500,
  color: '#000000',
  fontSize: "36px",
  lineHeight: '47px',
  margin: 'auto 0 0',
  [theme.breakpoints.down('sm')]: {
    fontSize: "24px",
    lineHeight: '31.2px',
    fontWeight: 400
  },
}))

const StyledBackground1 = styled('img')(({theme})=>({
  position: 'absolute',
  width: '100%',
  maxWidth: 410,
  right: 0,
  top: 0,
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

const NamazcardContainer = styled('div')(({theme}) =>({
  gap: '35px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    gap: '25px'
  },
}))

const NamazCard = styled(Card)(({theme})=>({
  width: '100%',
  maxWidth: '283px',
  padding: '96px 0px',
  background: 'linear-gradient(152.92deg, #ECF4F4 16.92%, rgba(236, 244, 244, 0.6) 150.87%)',
  borderRadius: 0,
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '18px',
  [theme.breakpoints.down("sm")]: {
    padding: '46px 0px',
    gap: '20px',
    maxWidth: '241px'
  }
}))

const Wrapper = styled('div')(({theme})=>({
  padding: '0px 32px',
  [theme.breakpoints.down('sm')]: {
    padding: '0px'
  }
}))

const cardContent = [
  { src: fajar_icon, alt: 'fajar-icon', title: 'Fajar', time: '4:43 AM' },
  { src: zuhur_icon, alt: 'zuhur-icon', title: 'Zuhur', time: '12:10 PM' },
  { src: asar_icon, alt: 'asar-icon', title: 'Asar', time: '4:31 PM' },
  { src: maghrib_icon, alt: 'maghrib-icon', title: 'Maghrib', time: '6:15 PM' },
  { src: isha_icon, alt: 'isha-icon', title: 'Isha', time: '7:36 PM' },
];

export const PrayersTime = () => {
  return (
    <>
    <StyledBox>
      {/* <StyledBackground1 src={bg1}/> */}
      {/* <StyledBackground2 src={bg2}/> */}
      <Wrapper>
        <StyledHeading>
          prayers time
        </StyledHeading>
        <StyledText>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not  
          only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </StyledText>
      </Wrapper>
      <MyImg src={men_in_sujood}/>
      <NamazcardContainer>
        {cardContent.map((content)=>(
          <NamazCard>
            <img src={content.src} alt={content.alt}/>
            <StyledTitle>
              {content.title}
            </StyledTitle>
            <StyledTime>
              {content.time}
            </StyledTime>
          </NamazCard>
        ))}
      </NamazcardContainer>
    </StyledBox>
    </>
  )
}
