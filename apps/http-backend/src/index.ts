import express from "express";
import cors from "cors";
import { userRouter } from "./routes/user.route";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", userRouter);

app.listen(3000);