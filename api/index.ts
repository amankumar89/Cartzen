import serverless from "serverless-http";
import app from "../server/src/index";

export const config = {
  runtime: "nodejs18",
};

export default serverless(app);
