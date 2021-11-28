import React from "react";
// import eyeGif from "../assets/gifs/Eye-Animation_Final_WhiteBG copy.gif";
import "./projects.style.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

// @ts-ignore
function TitlebarBelowImageList({ open, setOpen, selected, setSelected }) {
  // @ts-ignore
  const handleOpen = (index) => {
    console.log({ index });
    setOpen(true);
    setSelected(index);
    return;
  };
  const handleClose = () => setOpen(false);
  return (
    <ImageList
      sx={{
        width: 1200,
        height: 1200,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      {itemData.map((item, index) => (
        <>
          <ImageListItem
            key={item.img}
            sx={{
              bgcolor: "background.paper",
              boxShadow: 3,
              borderRadius: 1,
              p: 2,
              m: 2,
              minWidth: 200,
              // maxWidth: 200,
            }}
          >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              position="below"
              sx={{
                m: 1,
              }}
            />
            <Button onClick={() => handleOpen(index)}>View Content</Button>
          </ImageListItem>
        </>
      ))}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        // hideBackdrop={true}
        BackdropProps={{
          invisible: true,
        }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {itemData[selected].title}
          </Typography>
          <img
            src={`${itemData[selected].img}?w=248&fit=crop&auto=format`}
            srcSet={`${itemData[selected].img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={itemData[selected].title}
            loading="lazy"
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {itemData[selected].author}
          </Typography>
        </Box>
      </Modal>
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// function BasicModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//           </Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }

function ProjectsPage() {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(0);
  return (
    <div className="homeContainer">
      {/* <h2>Looking to ask a question or work together?</h2>
      <h3>Email me at kinghuthman@gmail.com</h3> */}
      <TitlebarBelowImageList
        open={open}
        setOpen={setOpen}
        selected={selected}
        setSelected={setSelected}
      />
      {/* <img className="eye" src={eyeGif} alt="eye gif" /> */}
    </div>
  );
}

export default ProjectsPage;
