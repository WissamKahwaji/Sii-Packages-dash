import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { useGetClientsQuery } from "../../apis/ourClients/queries";
import ClientCard from "../../components/items/cards/ourClients";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const OurClients = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { data: clientsData, isLoading, isError } = useGetClientsQuery();
  if (isLoading) return <div>Loading...</div>;
  if (isError || !clientsData) return <div>Error...</div>;

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        component={"h1"}
        sx={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          textTransform: "capitalize",
          mb: 3,
        }}
      >
        our clients
      </Typography>
      <Grid item xs={6} textAlign="end">
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/our-clients/client-details")}
        >
          <AddIcon /> Add
        </Button>
      </Grid>
      <Grid container gap={4}>
        {clientsData &&
          clientsData.map((client, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Box p={1}>
                <ClientCard client={client} />
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default OurClients;
