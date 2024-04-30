import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { Box, Button, Typography, styled } from "@mui/material";
import Image from "../../assets/images/jpgs/intro-backround.jpg";
import { logout } from "../../store/slice/authSlice";
import { ROUTES } from "../../routes/routes";

const SideBar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logOutHandler = () => dispatch(logout({ navigate }));

  return (
    <StyledContainer>
      <Box>
        <Box className="first-block">
          <img className="user-image" src={Image} alt="user" />

          <Box className="info-container">
            <Typography className="name">Natalia Lobodyanskaya</Typography>

            <Typography className="info" variant="span">
              Студент(-a) Student Space
            </Typography>
          </Box>
        </Box>

        <hr />

        <Box className="navigations">
          <NavLink className="link" to={`${ROUTES.USER.INDEX}${ROUTES.USER.NEWS}`}>
            News
          </NavLink>
          <NavLink className="link" to={`${ROUTES.USER.INDEX}${ROUTES.USER.QUESTIONS}`}>
          Questions
          </NavLink>
          <NavLink className="link" to={`${ROUTES.USER.INDEX}${ROUTES.USER.NETWORKING}`}>
          Networking
          </NavLink>
          <NavLink className="link" to={`${ROUTES.USER.INDEX}${ROUTES.USER.PLANNING}`}>
          Planning
          </NavLink>
          <NavLink className="link" to={`${ROUTES.USER.INDEX}${ROUTES.USER.EVENTS}`}>
          Events
          </NavLink>
          <NavLink className="link" to={`${ROUTES.USER.INDEX}${ROUTES.USER.CHATS}`}>
          Chats
          </NavLink>
          <NavLink className="link" to={`${ROUTES.USER.INDEX}${ROUTES.USER.POSSIBILITIES}`}>
          Possibilities
          </NavLink>
        </Box>

        <StyledButton onClick={logOutHandler}>Log out</StyledButton>
      </Box>
    </StyledContainer>
  );
};

export default SideBar;

const StyledContainer = styled(Box)(() => ({
  width: "21.875rem",
  height: "100%",
  padding: "3.125rem 0 0 2.25rem ",
  color: "white ",
  fontFamily: "Amiko",
  backgroundColor: "black",
  position: "fixed",
  left: "0",

  "& > div": {
    display: "flex",
    flexDirection: "column",
    gap: "0.625rem",

    "& .navigations": {
      "& > .link": {
        color: "white",
        fontSize: "1.125rem",
        fontWeight: "400",
        lineHeight: "1.375rem",
        textDecoration: "none",
        cursor: "pointer",
      },

      "& > .link.active": {
        textDecoration: "underline",
      },
    },

    "& .first-block": {
      display: "flex",
      alignItems: "end",
      fontSize: "1.25rem",
      fontWeight: "400",
      lineHeight: "1.688rem",

      "& > .user-image": {
        width: "5.125rem",
        height: "5.125rem",
        maxWidth: "6.25rem",
        maxHeight: "6.25rem",
        borderRadius: "0.563rem",

        "@media (max-width: 600px)": {
          width: "3.875rem",
          height: "3.875rem",
        },
      },

      "& > .info-container": {
        marginLeft: "0.625rem ",
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",

        "& > .name": {
          fontSize: "1.188rem",
          fontWeight: "400",
          lineHeight: "1.625rem",
        },

        "& > .info": {
          color: "rgb(169, 167, 177)",
          fontSize: "0.875rem",
          fontWeight: "400",
          lineHeight: "1.1889rem",
        },
      },
    },

    "& > .navigations": {
      marginTop: "3.25rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.938rem",

      "& > p": {
        fontSize: "1.25rem",
        fontWeight: "400",
        lineHeight: "1.688rem",
        textAlign: "left",
      },
    },
  },

  "@media (max-width: 900px)": {
    width: "18.75rem",
    padding: "2.5rem 0 0 1.25rem ",

    "& > div": {
      display: "flex",
      flexDirection: "column",
      gap: "0.625rem ",

      "& .first-block": {
        display: "flex",
        alignItems: "end",

        "& > .info-container": {
          marginLeft: "0.625rem ",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          lineHeight: "0.938rem",

          "& > .name": {
            fontSize: "0.938rem",
            fontWeight: "500",
          },

          "& > .info": {
            color: "rgb(169, 167, 177)",
            fontSize: "0.75rem",
            fontWeight: "400",
            lineHeight: "0.938rem",
          },
        },
      },

      "& > .navigations": {
        marginTop: "1.375rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.625rem ",

        "& > p": {
          fontSize: "1.25rem",
          fontWeight: "500",
          lineHeight: "1.688rem",
          textAlign: "left",
        },
      },
    },
  },

  "@media (max-width: 600px)": {
    width: "12.5rem",
    padding: "1.875rem 0 0 1.25rem ",

    "& > div": {
      gap: "0.313rem",

      "& .first-block": {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",

        "& > .info-container": {
          marginLeft: "0.313rem",
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",

          "& > .name": {
            fontSize: "1rem",
            fontWeight: "500",
          },

          "& > .info": {
            color: "rgb(169, 167, 177)",
            fontSize: "0.75rem",
            fontWeight: "400",
            lineHeight: "0.938rem",
          },
        },
      },

      "& > .navigations": {
        marginTop: "1.375rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.625rem ",

        "& > p": {
          fontSize: "1.125rem",
          fontWeight: "500",
          lineHeight: "1.25rem",
          textAlign: "left",
        },
      },
    },
  },
}));

const StyledButton = styled(Button)(() => ({
  "&.MuiButton-root": {
    marginTop: "2.813rem",
    borderRadius: "0.5rem",
    border: "0.063rem solid white",
    width: "7.3rem",
    backgroundColor: "transparent",
    color: "white",
    textTransform: "none",
    fontFamily: "Arimo",
    fontSize: "1.25rem",
    fontWeight: "400",
    lineHeight: "1.375rem",

    "&:hover": {
      backgroundColor: "white",
      color: "black",
    },

    "@media (max-width: 900px)": {
      marginTop: "2.813rem",
      width: "7rem",
      fontSize: "1.2rem",
    },

    "@media (max-width: 600px)": {
      marginTop: "5.313rem",
    },
  },
}));
