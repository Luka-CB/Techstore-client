import axios from "axios";

export const api = axios.create({
  baseURL: "https://techstore-server-production.up.railway.app",
  headers: { "Content-Type": "application/json" },
});

// "https://techstore-api-3jmr.onrender.com"
// http://localhost:5000
// https://techstore-server-production.up.railway.app
