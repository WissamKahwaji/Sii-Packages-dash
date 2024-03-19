import API_ROUTES from "../../constants/apiRoutes";
import { AddSampleInputProps } from "../../pages/samples/type";
import { createFormData } from "../../utils";
import privetInstance from "../privetInstance";
import publicInstance from "../publicInstance";
import { Category, Package } from "./type";

const getCategories = async () => {
  const res = await publicInstance.get<Category[]>(
    API_ROUTES.PACKAGES.GET_CATEGORIES
  );
  return res.data;
};
const getCategoryPackages = async (id: string | undefined) => {
  const res = await publicInstance.get<Category>(
    API_ROUTES.PACKAGES.GET_CATEGORY_PACKAGES(id)
  );
  return res.data;
};

const getPackageById = async (id: string) => {
  const res = await publicInstance.get<Package>(
    API_ROUTES.PACKAGES.GET_BY_ID(id)
  );
  return res.data;
};
const createPackageInfo = async (payload: Package) => {
  const data = createFormData(payload!);
  const res = await privetInstance.post<Package>(
    API_ROUTES.PACKAGES.ADD(payload.categoryId),
    data
  );
  return res.data;
};
const addPackageToSubCategory = async (payload: Package, subId: string) => {
  const data = createFormData(payload!);
  const res = await privetInstance.post<Package>(
    API_ROUTES.PACKAGES.ADD_TO_SUB(payload.categoryId, subId),
    data
  );
  return res.data;
};

const editPackageInfo = async (payload: Package) => {
  const data = createFormData(payload!);
  const res = await privetInstance.put<Package>(
    API_ROUTES.PACKAGES.EDIT(payload._id),
    data
  );
  return res.data;
};

const deletePackageInfo = async (id: string) => {
  const res = await privetInstance.delete<Package>(
    API_ROUTES.PACKAGES.DELETE(id)
  );
  return res.data;
};

const editCategoryInfo = async (payload: Category) => {
  const data = createFormData(payload!);
  const res = await privetInstance.put<Category>(
    API_ROUTES.PACKAGES.EDIT_CATEGORY(payload._id),
    data
  );
  return res.data;
};

const deleteCategoryInfo = async (id: string) => {
  const res = await privetInstance.delete<Category>(
    API_ROUTES.PACKAGES.DELETE_CATEGORY(id)
  );
  return res.data;
};

const addSampleToCategory = async (
  payload: AddSampleInputProps,
  categoryId: string
) => {
  const data = createFormData(payload!);
  const res = await privetInstance.post(
    API_ROUTES.PACKAGES.ADD_SAMPLE(categoryId),
    data
  );
  return res.data;
};

export {
  getPackageById,
  getCategories,
  getCategoryPackages,
  deleteCategoryInfo,
  editCategoryInfo,
  editPackageInfo,
  deletePackageInfo,
  createPackageInfo,
  addPackageToSubCategory,
  addSampleToCategory,
};
