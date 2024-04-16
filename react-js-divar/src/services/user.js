import api from "configs/api";
import { getCookie } from "src/utils/cookie";

const getProfile = () => api.get("user/whoami").then((res) => res || false);

export { getProfile };
