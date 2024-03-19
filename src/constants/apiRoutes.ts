const PACKAGES = {
  GET_BY_ID: (id: string | undefined) => `/package/byId/${id}`,
  EDIT: (id: string | undefined) => `/package/edit/${id}`,
  ADD: (categoryId: string | undefined) => `/package/add/${categoryId}`,
  ADD_TO_SUB: (categoryId: string | undefined, subId: string) =>
    `/package/add-to-subcategory/${categoryId}/${subId}`,
  DELETE: (id: string | undefined) => `/package/delete/${id}`,
  GET_CATEGORIES: "/package/categories",
  GET_CATEGORY_PACKAGES: (id: string | undefined) => `/package/category/${id}`,
  EDIT_CATEGORY: (id: string | undefined) => `/package/category/${id}`,
  DELETE_CATEGORY: (id: string | undefined) => `/package/category/${id}`,
  ADD_SAMPLE: (categoryId: string | undefined) =>
    `/package/${categoryId}/add-sample`,
};

const ABOUT = {
  GET: "/about",
  EDIT: `/about/edit`,
};

const CLIENTS = {
  GET: "/our-clients",
  ADD: "/our-clients",
  EDIT: (id: string | undefined) => `/our-clients/${id}`,
  DELETE: (id: string | undefined) => `/our-clients/${id}`,
};
const AUTH = {
  SIGNIN: "/auth/signin",
};
const API_ROUTES = {
  PACKAGES,
  ABOUT,
  CLIENTS,
  AUTH,
};

export default API_ROUTES;
