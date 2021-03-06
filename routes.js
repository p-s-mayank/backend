const express = require("express");

const router = express.Router();

const userController = require("./controllers/userController");
const thoughtController = require("./controllers/thoughtController");
const Auth = require("./middleware/Authentication").Authenticate;

router.get("/users", userController.show_users);
router.get("/user/:id", userController.get_user);
router.post("/signup", userController.add_user);
router.post("/signin", userController.login);

router.get("/thoughts", thoughtController.show_all_thoughts);
router.get("/thoughtsbyuser/:username", thoughtController.thoughts_by_user);
router.post("/createthought", Auth, thoughtController.create_thought);
router.post("/replythought/:id", Auth, thoughtController.reply_thought);
router.delete("/deletethought/:id", Auth, thoughtController.delete_thought);
router.delete("/deletereply/:id/:reply_id", Auth, thoughtController.delete_reply);

module.exports = router;
