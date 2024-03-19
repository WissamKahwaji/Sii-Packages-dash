import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Package } from "../../../../apis/packages/type";
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import DeletePackageDialog from "../../dialogs/deletePackage";

const PackageCard = ({ packageInfo }: { packageInfo: Package }) => {
  const navigate = useNavigate();
  const [openDeleteServiceDialog, setOpenDeleteServiceDialog] =
    useState<boolean>(false);
  const handleOpenDeleteServiceDialog = () => {
    setOpenDeleteServiceDialog(true);
  };
  const handleCloseDeleteServiceDialog = () => {
    setOpenDeleteServiceDialog(false);
  };
  return (
    <Card style={{ height: "150px", overflow: "hidden" }}>
      <CardHeader
        title={<Typography>{packageInfo.title_en}</Typography>}
        action={
          <IconButton color="error" onClick={handleOpenDeleteServiceDialog}>
            <Delete />
          </IconButton>
        }
      />
      <CardActionArea
        onClick={() =>
          navigate(
            `/services/pricing/${packageInfo.categoryId}/package/${packageInfo._id}`,
            { state: { packageInfo: packageInfo } }
          )
        }
      >
        <CardContent
          style={{
            maxHeight: "150px",
            overflow: "hidden",
            paddingTop: "2",
            paddingBottom: "3",
          }}
        >
          <Typography
            style={{
              WebkitLineClamp: 3,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {`Price : ${packageInfo.price}`}
          </Typography>
        </CardContent>
      </CardActionArea>{" "}
      <DeletePackageDialog
        open={openDeleteServiceDialog}
        onClose={handleCloseDeleteServiceDialog}
        packageItem={{
          packageId: packageInfo._id!,
          name: packageInfo.title_en,
        }}
      />{" "}
    </Card>
  );
};

export default PackageCard;
