import cors from "cors";
import express from "express";
import routes from "./routes";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: true }));

app.get("/api", (_req, res) => {
    res.send("API Running");
});

app.use("/", routes);

const port = app.get("port") || 3090;
const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;