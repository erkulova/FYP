import { useState } from "react";
import { Box, FormControl, Input, InputAdornment, InputLabel, Typography, styled } from "@mui/material"
import { AccountCircle } from "@mui/icons-material"
import { NETWORKING } from "../../../utils/constants"
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";

const Networking = () => {
    const [searchText, setSearchText] = useState("");

    const navigate = useNavigate();

    const handleSearchChange = (e) => setSearchText(e.target.value)

    const navigateHandler = (id) => navigate(`${ROUTES.USER.INDEX}${ROUTES.USER.NETWORKING}/${id}`)

    return (
      <StyledContainer>
        <Typography>NETWORKING</Typography>
    
        <Box>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Users
            </InputLabel>

            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              placeholder="Search"
              value={searchText}
              onChange={handleSearchChange}
            />

          </FormControl>
        </Box>
    
        <Box className='content'>
          {NETWORKING?.filter(({ fullName }) =>
            fullName.toLowerCase().includes(searchText.toLowerCase())
          ).length > 0 ? (

            NETWORKING?.filter(({ fullName }) =>
              fullName.toLowerCase().includes(searchText.toLowerCase())
            ).map(({ image, fullName, status, id }) => (
              <Box className="card" key={id} onClick={()=>navigateHandler(id)}>
                <img src={image} alt="person" className="image" />

                <Box className="text">
                  <Typography className="full-name">{fullName}</Typography>

                  <Typography className="status">
                    <span className="dot"> </span>
                    {status}
                  </Typography>
                  
                </Box>
              </Box>
            ))
          ) : (
            <Typography>No users found</Typography>
          )}
        </Box>
      </StyledContainer>
    )
}


export default Networking

const StyledContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '1rem 2rem 0 25rem',

  '& > .MuiTypography-root': {
    fontSize: '2rem',
    fontWeight: 'bold',
    padding: '2rem 0',
    fontFamily: 'Prosto One',
  },

  "& > div > .MuiFormControl-root": {
    maxWidth: "20rem",
    width: "100%",
    height: "3rem",

    "& > .MuiFormLabel-root.MuiInputLabel-root": {
      fontSize: "0.9rem",
      lineHeight: "0.9rem",
    },
  },

  '& > .content': {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    maxWidth: '100%',
    margin: '2rem 0',

    '& > .card': {
      width: '22.6%',
      backgroundColor: 'white',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      borderRadius: '1rem',
      padding: '1rem 1rem 1.5rem 1rem',
      transition: "0.2s",

      '& > .image': {
        width: '100%',
        backgroundColor: '#000000',
        borderRadius: '1rem',
      },

      '& > .text': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.5rem',

        '& > .full-name': {
          fontWeight: 'bold',
          fontSize: '1.2rem',
          padding: '1rem 0 0 0'
        },

        '& > .status': {
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'gray',
          fontSize:'0.9rem',

          '& > .dot': {
            color: 'green',
            backgroundColor: 'green',
            borderRadius: '5rem',
            width: '0.5rem',
            height: '0.5rem',
          }
        }
      },

      "&:hover": {
        boxShadow: "0px 10px 20px 5px rgba(52, 58, 57)",
        transform: "translateY(-5px)",
        cursor: 'pointer',
      },
    }
  },

  "@media (max-width: 1200px)": {
    '& > .content': {
      '& > .card': {
        textAlign:'center',  

        '& > .text': {
          '& > .status': {
            fontSize:'0.8rem',
            gap: '0',
            

            '& > .dot':{
              margin: '0 0 0 1rem',
            }
          },
        },
        },
      }  
  },

  "@media (max-width: 900px)": {
    margin: '1rem 2rem 0 20rem',

    '& > .content': {
      '& > .card': {
        width: '28%',
        },
      }  
  },

  "@media (max-width: 725px)": {
    '& > .content': {
      '& > .card': {
        width: '42%',
        },
      }  
  },

  "@media (max-width: 600px)": {
    margin: '1rem 2rem 0 14rem',

    '& > .content': {
      '& > .card': {
        width: '90%',
        },
      }  
  },

  "@media (max-width: 375px)": {
    margin: '1rem 2rem 0 0',

    '& > .content': {
        gap: '1rem',

      '& > .card': {
        width: '45%',
        textAlign:'center',  

        '& > .text': {
          '& > .status': {
            fontSize:'0.6rem',
            gap: '0',
            

            '& > .dot':{
              margin: '0 0 0 0.4rem',
            }
          },
        },
        },
      }  
  },

}))
