import express from 'express';
import { postOrders, details, updateUserInfo } from '../controllers/index.js';
const router = express.Router();
router.get('/', (req, res) => {
    res.send("success");
});
router.get("/details", details);
router.post("/postOrders", postOrders);
router.get("/updateUserInfo", updateUserInfo);
// router.post("/signup", signup);
// router.post("/signupwithgoogle", signupwithgoogle);
// router.post("/dashboard", ensureLoggedin, (req, res) => {
//     return res.status(201).json({ status: "ok", body: null, msg: "User Verified", error: null });
// })
// router.post("/expenses/getexpense", getexpenses);
// router.post("/expenses/createexpense", createexpenses);
// router.post("/expenses/updatebalance", updatebalance);
// router.post("/expenses/getmaxbalance", getmaxbalance);
// router.post("/expenses/deleteexpense", deleteExpense);


export default router;