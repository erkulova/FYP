import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get, getDatabase, ref, remove } from "firebase/database";
import { Box, Button, Typography, styled } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddNewsModal from "./NewsModal";
import Meatballs from "../../UI/Meatballs";
import Modal from "../../UI/Modal";
import { app } from "../../../configs/firebase";
import { showToast } from "../../../utils/helpers/toast";

const News = () => {
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [selectId, setSelectId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [news, setNews] = useState([]);

  const navigate = useNavigate();

  const getNewsData = async () => {
    const db = getDatabase(app);

    const dbRef = ref(db, "studentSpace/news");

    await get(dbRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const myData = snapshot.val();

          const temporaryArray = Object.keys(myData).map((myFireId) => {
            return { ...myData[myFireId], newsId: myFireId };
          });

          setNews(Object.values(temporaryArray));
        }
      })
      .catch((error) => {
        console.error("Error getting news data:", error);
      });
  };

  useEffect(() => {
    getNewsData();
  }, []);

  const handleOpenUpdateModal = () => setOpenUpdateModal((prev) => !prev);

  const handleDeleteNews = async () => {
    const db = getDatabase(app);

    const dbRef = ref(db, "studentSpace/news/" + deleteId);

    await remove(dbRef)
      .then(() => {
        getNewsData();

        setOpenDeleteModal(false);

        showToast({
          title: "Delete",
          message: "Successfully deleted",
          type: "success",
        });
      })
      .catch(() => {
        showToast({
          title: "Delete",
          message: "Something went wrong:(",
          type: "error",
        });
      });
  };

  const handleOpenDeleteModal = (id) => {
    setOpenDeleteModal((prev) => !prev);
    setDeleteId(id);
  };

  const options = [
    {
      title: "Update",
      onClick: (id) => {
        setSelectId(id);

        handleOpenUpdateModal();
      },
    },
    {
      title: "Delete",
      onClick: (id) => handleOpenDeleteModal(id),
    },
  ];

  const handleOpenAddModal = () => setOpenAddModal((prev) => !prev);

  const shortenDescription = (description) => {
    const sentences = description.split(/[.!?]/);

    const words = description.split(/\s+/);

    let abbreviatedDescription = "";

    if (sentences.length > 3) {
      abbreviatedDescription = sentences.slice(0, 3).join(". ") + "...";
    } else if (words.length > 40) {
      abbreviatedDescription = words.slice(0, 40).join(" ") + "...";
    } else {
      abbreviatedDescription = description;
    }

    return abbreviatedDescription;
  };

  const handleInnerPage = (newsId) => navigate(`/admin/add-news/${newsId}`);

  return (
    <StyledContsiner>
      <AddNewsModal
        isOpenModal={openAddModal}
        onClose={handleOpenAddModal}
        getNewsData={getNewsData}
      />

      <AddNewsModal
        isOpenModal={openUpdateModal}
        onClose={handleOpenUpdateModal}
        selectId={selectId}
        getNewsData={getNewsData}
      />

      <Box className="nav"></Box>

      <Box className="container">
        <h1 className="heading">NEWS</h1>

        <Button onClick={handleOpenAddModal} className="add-news-btn">
          <AddIcon /> Add news
        </Button>

        <Box className="news-container">
          {news?.map(({ imageUrl, title, date, description, newsId }) => (
            <Box
              className="news-box"
              key={newsId}
              onClick={() => handleInnerPage(newsId)}
            >
              <img className="news-img" src={imageUrl} alt="img" />

              <Box className="information-box">
                <Typography className="title">{title}</Typography>
                <Typography className="date">{date}</Typography>
                <Typography className="description">
                  {shortenDescription(description)}
                </Typography>
              </Box>

              <Meatballs options={options} id={newsId} />
            </Box>
          ))}
        </Box>
      </Box>

      <StyledModal open={openDeleteModal} onClose={handleOpenDeleteModal}>
        <Typography className="warm-text">
          Are you sure want to delete ?
        </Typography>

        <Box className="button-box">
          <Button className="cansel-btn" onClick={handleOpenDeleteModal}>
            Cansel
          </Button>

          <Button className="delete-btn" onClick={handleDeleteNews}>
            Delete
          </Button>
        </Box>
      </StyledModal>
    </StyledContsiner>
  );
};

export default News;

const StyledContsiner = styled(Box)(() => ({
  display: "flex",

  "& > .container": {
    padding: "3rem 0rem 0rem 3rem",
    paddingLeft: "23.875rem",

    "& > .heading": {
      fontWeight: "bold",
      fontSize: "1.563rem",
      lineHeight: "1.938rem",
    },

    "& > .add-news-btn": {
      marginTop: "2%",
      width: "8rem",
      height: "2.375rem",
      display: "flex",
      color: "rgb(115, 100, 100)",
      fontSize: "1rem",
      textTransform: "none",

      "&:hover": {
        backgroundColor: "white",
      },
    },

    "& > .news-container": {
      marginTop: "3%",
      display: "flex",
      flexDirection: "column-reverse",
      gap: "1rem",

      "& > .news-box": {
        width: "94%",
        display: "flex",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        borderRadius: "0.5rem",
        padding: "0.688rem 0.688rem 0.688rem 0.688rem",
        cursor: "pointer",
        position: "relative",

        "& > .news-img": {
          width: "18.75rem",
          height: "10.5rem",
          borderRadius: "1rem",
        },

        "& > .information-box": {
          padding: "0.5rem",
          width: "80%",

          "& > .title": {
            fontSize: "1.563rem",
            fontWeight: "400",
            lineHeight: "2.375rem",
            color: "rgb(2, 2, 2)",
          },

          "& > .date": {
            fontSize: "0.688rem",
            fontWeight: "400",
            lineHeight: "1.063rem",
            color: "rgb(169, 167, 177)",
          },

          "& > .description": {
            fontSize: "0.813rem",
            fontWeight: "400",
            lineHeight: "1.25rem",
            color: "rgb(62, 61, 68)",
          },
        },
      },
    },

    "@media (max-width: 1200px)": {
      padding: "3rem 0rem 0rem 3rem",
      paddingLeft: "23.875rem",
    },

    "@media (max-width: 910px)": {
      padding: "2rem 0rem 0rem 2rem",
      paddingLeft: "19.875rem",
    },

    "@media (max-width: 725px)": {
      paddingLeft: "19.875rem",

      "& > .news-container": {
        "& > .news-box": {
          display: "flex",
          flexDirection: "column",
          padding: "0.688rem 0rem 0rem 0.688rem",

          "& > .news-img": {
            width: "94%",
          },

          "& > .information-box": {
            padding: "0.5rem",
            width: "94%",
          },
        },
      },
    },

    "@media (max-width: 600px)": {
      paddingLeft: "13.875rem",

      "& > .news-container": {
        "& > .news-box": {
          "& > .information-box": {
            "& > .title": {
              fontSize: "1.363rem",
              fontWeight: "400",
              lineHeight: "2.075rem",
            },

            "& > .description": {
              fontSize: "0.713rem",
              lineHeight: "1rem",
            },
          },
        },
      },
    },

    "@media (max-width: 375px)": {
      paddingLeft: "0rem",

      "& > .news-container": {
        "& > .news-box": {
          "& > .information-box": {
            "& > .title": {
              fontSize: "1.363rem",
              fontWeight: "400",
              lineHeight: "2.075rem",
            },

            "& > .description": {
              fontSize: "0.613rem",
              lineHeight: "1rem",
            },
          },
        },
      },
    },
  },
}));

const StyledModal = styled(Modal)(() => ({
  "& > .content": {
    width: "30rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    padding: "2rem 3rem",

    "& > .close-icon": {
      display: "none",
    },

    "& > .warm-text": {
      fontSize: "1.563rem",
      fontWeight: "500",
      lineHeight: "1.938rem",
      textAlign: "center",
    },

    "& > .button-box": {
      display: "flex",
      gap: "2rem",
      marginTop: "10%",

      "& > .delete-btn": {
        marginTop: "2%",
        width: "6rem",
        height: "2.375rem",
        display: "flex",
        color: "white",
        backgroundColor: "red",
        fontSize: "1rem",
        borderRadius: "0.5rem",
        textTransform: "none",
      },

      "& > .cansel-btn": {
        marginTop: "2%",
        width: "6rem",
        height: "2.375rem",
        display: "flex",
        color: "black",
        border: "1px solid black",
        backgroundColor: "white",
        fontSize: "1rem",
        borderRadius: "0.5rem",
        textTransform: "none",
      },
    },

    "@media (max-width: 725px)": {
      width: "24rem",
      padding: "1rem 0rem 1rem 0rem",

      "& > .warm-text": {
        fontSize: "1.3rem",
        lineHeight: "1.638rem",
      },

      "& > .button-box": {
        display: "flex",
        gap: "1rem",
        marginTop: "10%",

        "& > .delete-btn": {
          marginTop: "2%",
          width: "5rem",
          fontSize: "0.9rem",
        },

        "& > .cansel-btn": {
          marginTop: "2%",
          width: "5rem",
          fontSize: "0.9rem",
        },
      },
    },

    "@media (max-width: 600px)": {
      width: "20rem",
      padding: "1rem 0rem 1rem 0rem",

      "& > .warm-text": {
        fontSize: "1.1rem",
        lineHeight: "1.638rem",
      },

      "& > .button-box": {
        display: "flex",
        gap: "1rem",
        marginTop: "10%",

        "& > .delete-btn": {
          marginTop: "2%",
          width: "4rem",
          fontSize: "0.8rem",
        },

        "& > .cansel-btn": {
          marginTop: "2%",
          width: "4rem",
          fontSize: "0.8rem",
        },
      },
    },

    "@media (max-width: 375px)": {
      width: "16rem",
      padding: "1rem 0rem 1rem 0rem",

      "& > .warm-text": {
        fontSize: "0.9rem",
        lineHeight: "1.638rem",
      },

      "& > .button-box": {
        display: "flex",
        gap: "1rem",
        marginTop: "10%",

        "& > .delete-btn": {
          marginTop: "2%",
          width: "4rem",
          fontSize: "0.8rem",
        },

        "& > .cansel-btn": {
          marginTop: "2%",
          width: "4rem",
          fontSize: "0.8rem",
        },
      },
    },
  },
}));
