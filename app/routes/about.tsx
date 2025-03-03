import { Box, Typography, Container } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          About
        </Typography>
      </Box>
    </Container>
  );
}
