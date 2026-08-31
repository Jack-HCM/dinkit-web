export type AdminLoginState = {
  status: "idle" | "error";
  message: string;
};

export const initialAdminLoginState: AdminLoginState = {
  status: "idle",
  message: "",
};
