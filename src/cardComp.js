import React from "react";
import { Card, CardMedia, CardContent, Typography, Box, Chip } from "@mui/material";

function CustomCard({ image, title, follows }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px", // Space between the card and the title
      }}
    >
      {/* Card Component */}
      <Card
        sx={{
          width: "250px",
          borderRadius: 6,
          backgroundColor: "#1a202c",
          color: "white",
          overflow: "hidden",
          position: "relative",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Card Media */}
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            height: 180,
            width: "100%",
            objectFit: "cover",
          }}
        />

        {/* Content Section */}
        <CardContent sx={{ padding: "8px 12px", textAlign: "center", position: "relative" }}>
          {/* Follows Chip */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "8px",
            }}
          >
            <Chip
              label={`${follows} Follows`}
              sx={{
                backgroundColor: "#121212",
                color: "#ffffff",
                fontSize: "10px",
                marginTop:"5px",
                height: "40px",
                padding: "8px ",
                borderRadius: "16px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            />
          </Box>
        </CardContent>
      </Card>

      {/* Title Below the Card */}
      <Typography
        variant="h6"
        fontWeight="bold"
        sx={{
          fontSize: "14px",
          textAlign: "center",
          color: "black", // Matches the card theme
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default CustomCard;
