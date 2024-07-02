import { Box, Button, Modal, Typography } from "@material-ui/core";

import { useState } from "react";

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

export default function PatelotModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex justify-center items-center m-20">
      <Button onClick={handleOpen} className="bg-green-200 p-4 rounded-lg">
        Meine Baustelle ...
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            className="my-4 font-bold text-[olive]"
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            INFO !
          </Typography>

          <Typography id="modal-modal-description">
            Vielen Dank für Deine Interesse an meine Website. Ich arbeite
            derzeit intensiv daran, sie fertigzustellen. Ich freue mich darauf,
            Dir bald die vollständige Webseite präsentieren zu können!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
