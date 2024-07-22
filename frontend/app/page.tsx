import { redirect } from "next/navigation";
import { ROUTES } from "@/shared/config";

const Redirect = () => redirect(ROUTES.DASHBOARD);

export default Redirect;
