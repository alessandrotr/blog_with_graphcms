import { proxy } from "valtio";

export const storeModel = {
  headerVisible: true,
};

export const store = proxy(storeModel);

export default store;
