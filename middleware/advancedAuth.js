import { auth } from "express-oauth2-jwt-bearer";

const authMiddleware = auth({
  audience: "https://book-store-api",
  issuerBaseURL: `https://dev-1s8fgraw4evcfthb.eu.auth0.com/`,
});

export default authMiddleware;
