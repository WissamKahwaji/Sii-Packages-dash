export type DeleteClientDialogProps = {
  open: boolean;
  onClose: () => void;
  client: ClientProps;
};
export type ClientProps = {
  clientId: string;
  name: string;
};
