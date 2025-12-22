import { Card, Box, Typography } from "@mui/material";

export default function MiniCardV2({ Icon, nombreicono }) {
  return (
    <Card
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.06)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(9px)',
        boxShadow: 'none',
        borderRadius: 2,
        border: '1px solid rgba(255,255,255,0.12)',
        p: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.5,
        }}
      >
        <Icon size={16} />
        <Typography variant="body2" sx={{ lineHeight: 1 }}>
          {nombreicono}
        </Typography>
      </Box>
    </Card>
  );
}
