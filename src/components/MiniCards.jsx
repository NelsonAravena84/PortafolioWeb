import { Card, Box, Popover, Typography } from "@mui/material";
import React, { useState } from "react";

export default function MiniCard({ Icon, label, size, enlace }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const iconElement = (
    <Icon size={size} style={{ color: "gray" }} />
  );

  return (
    <>
      <Card
        sx={{
          backgroundColor: 'black',
          border: '1px solid gray',
          boxShadow: 'none',
          borderRadius: 2,
          color: 'gray',
          padding: 1,
        }}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          {enlace ? (
            <a
              href={enlace}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              {iconElement}
            </a>
          ) : (
            iconElement
          )}
        </Box>
      </Card>

      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: "none" }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        // 🔧 Añadir estas dos props clave:
        disableScrollLock={true}
        container={anchorEl ? anchorEl.ownerDocument.body : undefined}
      >
        <Box sx={{ p: 1 }}>
          <Typography variant="caption">{label}</Typography>
        </Box>
      </Popover>
    </>
  );
}
