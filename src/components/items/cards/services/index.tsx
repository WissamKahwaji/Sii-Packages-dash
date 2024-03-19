import { Delete } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Category } from "../../../../apis/packages/type";
import DeleteCategoryDialog from "../../dialogs/deleteCategory";

const ServiceCard = ({ category }: { category: Category }) => {
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
        title={<Typography>{category.name_en}</Typography>}
        action={
          <IconButton color="error" onClick={handleOpenDeleteServiceDialog}>
            <Delete />
          </IconButton>
        }
      />
      <CardActionArea onClick={() => navigate(`pricing/${category._id}`)}>
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
              fontSize: "12px",
              WebkitLineClamp: 3,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {category.description_en}
          </Typography>
        </CardContent>
      </CardActionArea>{" "}
      <DeleteCategoryDialog
        open={openDeleteServiceDialog}
        onClose={handleCloseDeleteServiceDialog}
        category={{ categoryId: category._id!, name: category.name_en }}
      />{" "}
    </Card>
  );
};

export default ServiceCard;
