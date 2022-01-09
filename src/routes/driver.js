import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  try {
    res.send('request successfull');
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;
