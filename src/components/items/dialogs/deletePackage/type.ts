export type DeletePackageDialogProps = {
  open: boolean;
  onClose: () => void;
  packageItem: PackageProps;
};
export type PackageProps = {
  packageId: string;
  name: string;
};
