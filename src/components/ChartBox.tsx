import React from "react";
import LineChart from "./LineChart";

import FullscreenIcon from "@mui/icons-material/Fullscreen";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import { Box, Modal } from "@mui/material";
import { Dayjs } from "dayjs";

export default function ChartBox({
  data,
  title,
  fromDateTime,
  toDateTime,
}: {
  data: any;
  title: string;
  fromDateTime: Dayjs;
  toDateTime: Dayjs;
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="relative flex w-full h-full border rounded-lg border-stone-500 p-2 min-h-[478px] shadow-lg">
      <button
        className="absolute top-2 right-2"
        onClick={handleOpen}
        aria-label="Fullscreen"
      >
        <FullscreenIcon style={{ scale: "1.1" }} />
      </button>

      <p className="absolute bottom-2 right-2 text-sm font-semibold hidden sm:block">
        {fromDateTime.format("DD/MM/YYYY")} - {toDateTime.format("DD/MM/YYYY")}
      </p>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90vw",
            height: "90vh",
            bgcolor: "white",
            border: "1px solid #000",
            borderRadius: "10px",
            boxShadow: 24,
            p: 4,
          }}
        >
          <button
            className="absolute top-2 right-2"
            onClick={handleClose}
            aria-label="Close"
          >
            <FullscreenExitIcon style={{ scale: "1.1" }} />
          </button>

          <p className="absolute bottom-2 right-2 text-md font-semibold hidden sm:block">
            {fromDateTime.format("DD/MM/YYYY")} -{" "}
            {toDateTime.format("DD/MM/YYYY")}
          </p>

          <LineChart dataset={data} title={title} />
        </Box>
      </Modal>
      <LineChart dataset={data} title={title} />
    </div>
  );
}
