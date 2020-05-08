import { serverURL } from "./config.js";
export let socket = io(serverURL, { query: `at=${Cookies.get("at")}` });
