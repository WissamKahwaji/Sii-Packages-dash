import { Add } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export type SampleCardProps = {
  name: string;
  categoryId: string | undefined;
  subId?: string | undefined;
};

const SampleCard = (props: SampleCardProps) => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader
        title={<Typography>{props.name}</Typography>}
        action={
          <IconButton
            color="error"
            onClick={() =>
              navigate(`/services/pricing/${props.categoryId}/samples`, {
                state: {
                  sampleName: props.name,
                  subId: props.subId,
                },
              })
            }
          >
            <Add />
          </IconButton>
        }
      />{" "}
      <CardContent
        style={{
          maxHeight: "150px",
          overflow: "hidden",
          paddingTop: "2",
          paddingBottom: "3",
        }}
      >
        <Typography
          sx={{
            fontSize: "0.8rem",
          }}
        >
          Click on Add icon to add new sample
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SampleCard;
