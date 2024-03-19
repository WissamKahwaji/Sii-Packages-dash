import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Slide,
} from "@mui/material";
import { DeleteClientDialogProps } from "./type";
import { useDeleteClientMutation } from "../../../../apis/ourClients/queries";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DeleteClientDialog = ({
  open,
  onClose,
  client,
}: DeleteClientDialogProps) => {
  const { mutate: deleteClient } = useDeleteClientMutation();
  const handleDeleteClient = () => {
    deleteClient(client);
  };
  return (
    <Dialog open={open} onClose={onClose} TransitionComponent={Transition}>
      <DialogContent>
        <DialogContentText>{`are you sure you want to delete ${client.name}`}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>cancel</Button>
        <Button variant="contained" onClick={handleDeleteClient}>
          delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteClientDialog;
