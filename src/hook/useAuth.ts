import { AuthContext } from "@/ctx/Auth";
import { useContext } from "react";

export default function useAuth() {
  return useContext(AuthContext);
}
