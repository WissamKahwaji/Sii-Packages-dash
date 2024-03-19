import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addPackageToSubCategory,
  addSampleToCategory,
  createPackageInfo,
  deleteCategoryInfo,
  deletePackageInfo,
  editCategoryInfo,
  editPackageInfo,
  getCategories,
  getCategoryPackages,
  getPackageById,
} from ".";
import { useNavigate } from "react-router-dom";
import { Category, Package } from "./type";
import { toast } from "react-toastify";
import { CategoryProps } from "../../components/items/dialogs/deleteCategory/type";
import { PackageProps } from "../../components/items/dialogs/deletePackage/type";
import { AddSampleInputProps } from "../../pages/samples/type";

const useGetCategoriesQuery = () =>
  useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

const useGetCategoryPackagesQuery = (id: string | undefined) =>
  useQuery({
    queryKey: ["category-packages"],
    queryFn: () => getCategoryPackages(id),
    enabled: !!id,
  });

const useGetPackageByIdQuery = (id: string) =>
  useQuery({
    queryKey: ["categories"],
    queryFn: () => getPackageById(id),
  });

const useAddPackageInfoMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-package-info"],
    mutationFn: (payload: Package) => createPackageInfo(payload),
    onSuccess(data, variable) {
      toast.success(`add ${variable.title_en} successfully.`);
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      navigate("/services", { replace: true });
    },
    onError(data, variable) {
      toast.error(`failed to edit ${variable.title_en}`);
    },
  });
};
const useAddPackageInfoToSubMutation = (subId: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-package-info-to-sub"],
    mutationFn: (payload: Package) => addPackageToSubCategory(payload, subId),
    onSuccess(data, variable) {
      toast.success(`add ${variable.title_en} successfully.`);
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      navigate("/services", { replace: true });
    },
    onError(data, variable) {
      toast.error(`failed to edit ${variable.title_en}`);
    },
  });
};

const useEditPackageInfoMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["edit-package-info"],
    mutationFn: (payload: Package) => editPackageInfo(payload),
    onSuccess(data, variable) {
      toast.success(`edit ${variable.title_en} successfully.`);
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      navigate("/services", { replace: true });
    },
    onError(data, variable) {
      toast.error(`failed to edit ${variable.title_en}`);
    },
  });
};

const useDeletePackageMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-package"],
    mutationFn: ({ packageId }: PackageProps) => {
      return deletePackageInfo(packageId);
    },
    onSuccess(data, variable) {
      toast.success(`delete ${variable.name} successfully.`);
      queryClient.invalidateQueries({ queryKey: ["category-packages"] });
    },
    onError(data, variable) {
      toast.error(`failed to delete ${variable.name}`);
    },
  });
};

const useEditCategoryInfoMutation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["edit-category-info"],
    mutationFn: (payload: Category) => editCategoryInfo(payload),
    onSuccess(data, variable) {
      toast.success(`edit ${variable.name_en} successfully.`);
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      navigate("/services", { replace: true });
    },
    onError(data, variable) {
      toast.error(`failed to edit ${variable.name_en}`);
    },
  });
};
const useDeleteCategoryMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-category"],
    mutationFn: ({ categoryId }: CategoryProps) => {
      return deleteCategoryInfo(categoryId);
    },
    onSuccess(data, variable) {
      toast.success(`delete ${variable.name} successfully.`);
      queryClient.invalidateQueries({ queryKey: ["categories"] });
    },
    onError(data, variable) {
      toast.error(`failed to delete ${variable.name}`);
    },
  });
};
const useAddSampleToCategoryMutation = (categoryId: string) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-sample-to-category"],
    mutationFn: (payload: AddSampleInputProps) =>
      addSampleToCategory(payload, categoryId),
    onSuccess(data, variable) {
      toast.success(`added sample successfully.`);
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      navigate("/services", { replace: true });
    },
    onError(data, variable) {
      toast.error(`failed to add sample`);
    },
  });
};

export {
  useGetCategoriesQuery,
  useGetCategoryPackagesQuery,
  useEditCategoryInfoMutation,
  useDeleteCategoryMutation,
  useGetPackageByIdQuery,
  useEditPackageInfoMutation,
  useDeletePackageMutation,
  useAddPackageInfoMutation,
  useAddPackageInfoToSubMutation,
  useAddSampleToCategoryMutation,
};
