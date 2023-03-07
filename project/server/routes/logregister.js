const express=require("express")
const router=express.Router();

const{getAllproducts,signup}=require("../controller/prodregister")
router.route("/signup").post(signup)
router.route("/product").get(getAllproducts);
// router.route("/testing").get(getAllproductsTesting);

module.exports=router;