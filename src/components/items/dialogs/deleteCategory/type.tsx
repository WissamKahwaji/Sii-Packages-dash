export type DeleteCategoryDialogProps = {
  open: boolean;
  onClose: () => void;
  category: CategoryProps;
};
export type CategoryProps = {
  categoryId: string;
  name: string;
};
