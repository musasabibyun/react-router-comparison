import { Box, Typography, Container } from "@mui/material";
import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/concerts/$city")({
  component: City,
});

export default function City() {
  const { city } = useParams({ from: "/concerts/$city" });

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Concerts / City
        </Typography>

        <Typography
          variant="body1"
          color="white"
          sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
        >
          There are concerts in
          <Box component="span" sx={{ color: "#90caf9", mx: 1 }}>
            {city}
          </Box>
        </Typography>
      </Box>
    </Container>
  );
}
