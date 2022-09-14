import express from "express";

const app = express();

app.get("/", (req: any, resp: any) => {
  console.log("ACESSANDO");
  return resp.json([
    { id: 1, name: "Anúncio1" },
    { id: 1, name: "Anúncio1" },
    { id: 1, name: "Anúncio1" },
  ]);
});

app.listen(3333);
