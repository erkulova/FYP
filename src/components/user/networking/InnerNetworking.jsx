import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { Box, Button, Typography, styled } from '@mui/material';
import { Image } from '../../../assets/images';
import { PROFILE_DATA } from '../../../utils/constants';

const InnerNetworking = () => {
  const [subscribed, setSubscribed] = useState(false);

    const { id } = useParams()
    
    const user = PROFILE_DATA.find(user => user.id === parseInt(id));

    const handleSubscribe = () => setSubscribed((prev)=>!prev)

    return (
        <StyledContainer>
            <Box className='content'>
                <img src={Image} alt="imag" className='image'/>

                <img src={user.image} alt="profily" className='user-photo' />

                <Box className='followers-container'>
                    <Box className='followers'>
                        <Typography> <span>{user.followers}</span> Followers</Typography>
                        <Typography><span>{user.following} </span> Following</Typography>
                    </Box>

                    <Button 
                        variant='contained'
                        onClick={handleSubscribe}
                        className={subscribed ? 'subscribed' : ''}
                    >
                        {subscribed ? 'You are subscribed' : '+ Subscribe'}
                    </Button>
                </Box>

                <Box className='about'>
                  <Typography variant="h5" className='title'>About</Typography>

                  <Box className='description'>
                    <Typography>First name: <span>{user.firstName}</span></Typography>
                    <Typography>Last name: <span>{user.lastName}</span></Typography>
                    <Typography>Data of Birth: <span>{user.dateOfBirth}</span></Typography>
                    <Typography>University: <span>{user.university}</span></Typography>
                    <Typography>Email: <span>{user.email}</span></Typography>
                    <Typography>Description: <span>{user.description}</span></Typography>
                  </Box>
                </Box>
            </Box>
        </StyledContainer>
    )
}

export default InnerNetworking

const StyledContainer = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '6.5rem 0 0 28rem',
  
    "& > .content": {
      width: '60rem',
      height: '35rem',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      borderRadius: '1rem',
  
      '& > .image': {
        width: '100%',
        height: '12rem',
        borderRadius: '1rem 1rem 0 0',
      },
  
      '& > .user-photo': {
        width: '20%',
        height: '12rem',
        backgroundColor: 'white',
        margin: '-7rem 0 0 2%',
        padding: '0.5rem',
        borderRadius: '1rem',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 10px',
      },
  
      '& > .followers-container': {
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        gap: '0.3rem',
  
        '& > .followers': {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          margin: '-5.5rem 1.8rem 0 0',
          gap: '0.3rem',
  
          '& > .MuiTypography-root': {
            width: '5.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: 'grey',
            fontSize: '0.9rem',
  
            '& > span': {
              fontWeight: 'bold',
              fontSize: '1.2rem',
              color: 'black',
            }
          },
        },
  
        '& > .MuiButton-root': {
          display: 'flex',
          width: '10rem',
          height: '2rem',
          margin: '0 0 0 79.4%',
          borderColor: 'black',
          textTransform: 'none',
          background: 'black',
          color: 'white',
  
          '&:active': {
            background: 'white',
            color: 'black',
          },
  
          '&.subscribed': {
            background: '#aeaeae',
            color: 'white',
          },
        },
      },
  
      '& > .about':{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        margin: '0 2rem',
  
        '& > .title':{
          fontWeight: 'bold',
          margin:'1rem 0 0 0.5rem'
        },
  
        '& > .description':{
          display:'flex',
          flexDirection: 'column',
          gap:'0.3rem',
          padding:'1rem',
          backgroundColor:'#f2f2f2',
          borderRadius:'1rem',
  
          '& > .MuiTypography-root': {
            fontWeight: 'bold',
            
            '& > span': {
              color: 'grey',
              fontWeight:'normal'
            }
          },
        }
      }
    },

    "@media (max-width: 1200px)": {
        margin: '5.5rem 0 0 24rem',
  
        "& > .content": {
          margin: '0 3rem 0 0',
          width: '48rem',
          height: '33rem',

          '& > .image': {
            height: '11rem',
          },

          '& > .user-photo': {
            height: '10rem',
            margin: '-5rem 0 0 2%',
          },

        '& > div > .MuiButton-root': {
            margin: '0 0 0 74.3% !important',
        },

        '& > .about':{
            gap: '0.5rem !important',
            margin: '0 2rem',
      
            '& > .title':{
              fontWeight: 'bold',
              margin:'1rem 0 0 0.5rem'
            },
      
            '& > .description':{
              display:'flex',
              flexDirection: 'column',
              gap:'0.1rem',
              padding:'1rem',
              backgroundColor:'#f2f2f2',
              borderRadius:'1rem',
      
              '& > .MuiTypography-root': {
                fontWeight: 'bold',
                
                '& > span': {
                  color: 'grey',
                  fontWeight:'normal'
                }
              },
            }
        }

        }
    },

    "@media (max-width: 900px)": {
      margin: '5rem 0 0 20rem',
  
        "& > .content": {
          width: '35rem',
          height: '31rem',

          '& > .image': {
            height: '10rem',
          },

          '& > .user-photo': {
            width: '28%',
          },

         '& > div > .MuiButton-root': {
            margin: '0 0 0 65% !important',
          },

        '& > .about':{
            gap: '0.1rem !important',
            margin: '0 2rem',

            '& > .title':{
              margin:'0.5rem 0 0 0.5rem'
            },
        }

        }
    },

    "@media (max-width: 600px)": {
      margin: '5rem 0 0 14rem',
  
      "& > .content": {
        width: '22rem',
        height: '28rem',

        '& > .image': {
          height: '8rem',
        },

        '& > .user-photo': {
          width:'40%',
          height: '9rem',
          margin: '-4rem 0 0 2%',
        },

        '& > .followers-container': {    
          '& > .followers': {
            margin: '-5.5rem 0.5rem 0 0',
    
            '& > .MuiTypography-root': {
              width: '4.5rem',
              fontSize: '0.7rem',
    
              '& > span': {
                fontSize: '1rem',
              }
            },
          },
        },

       '& > div > .MuiButton-root': {
          margin: '0 0 0 62% !important',
          width: '7rem !important',
          height: '1.5rem !important',
          fontSize: '12px',

          '&.subscribed': {
            fontSize:'8.8px !important',
          },
        },          

        '& > .about':{
          gap: '0.1rem !important',
          margin: '0 0.5rem',
    
          '& > .description':{
            gap:'0.1rem',
            padding:'1rem',
    
            '& > .MuiTypography-root': {
              fontSize:'14px'
              }
          }
        }
      },
    },

    "@media (max-width: 375px)": {
      margin: '4rem 0 0 -2rem',
  
      "& > .content": {
        width: '20rem',
        height: '27rem',

        '& > .user-photo': {
          height: '8rem',
        },
      },
    },
  }))
  