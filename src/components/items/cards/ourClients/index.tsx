import React, { useState } from "react";
import { ClientsModel } from "../../../../apis/ourClients/type";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import DeleteClientDialog from "../../dialogs/deleteClient";

const ClientCard = ({ client }: { client: ClientsModel }) => {
  const navigate = useNavigate();
  const [openDeleteClientDialog, setOpenDeleteClientDialog] =
    useState<boolean>(false);
  const handleOpenDeleteClientDialog = () => {
    setOpenDeleteClientDialog(true);
  };
  const handleCloseDeleteClientDialog = () => {
    setOpenDeleteClientDialog(false);
  };
  return (
    <Card>
      <CardHeader
        title={
          <Typography>
            {client.name.length > 20 ? (
              <>
                {client.name.slice(0, 20)}
                <Box component={"span"}>...</Box>
              </>
            ) : (
              client.name
            )}
          </Typography>
        }
        action={
          <IconButton color="error" onClick={handleOpenDeleteClientDialog}>
            <Delete />
          </IconButton>
        }
      />
      <CardActionArea
        onClick={() =>
          navigate(`/our-clients/client-details/${client._id}`, {
            state: { client: client },
          })
        }
      >
        <CardMedia
          component={"img"}
          src={client.logo ?? ""}
          height={200}
          sx={{
            objectFit: "contain",
          }}
        />
      </CardActionArea>
      <DeleteClientDialog
        open={openDeleteClientDialog}
        onClose={handleCloseDeleteClientDialog}
        client={{ clientId: client._id!, name: client.name }}
      />
    </Card>
  );
};

export default ClientCard;
