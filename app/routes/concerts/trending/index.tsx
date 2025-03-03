import { Box, Typography, Container } from "@mui/material";

export default function Trending() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Trending
        </Typography>
      </Box>
    </Container>
  );
}
