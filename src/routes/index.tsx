import { Box, Typography, Container } from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Welcome
        </Typography>
        <Typography
          variant="body1"
          color="white"
          sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
        >
          This is a simple homepage with
          <Box component="span" sx={{ color: "#90caf9", mx: 1 }}>
            React Router
          </Box>
        </Typography>
      </Box>
    </Container>
  );
}
