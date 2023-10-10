const express = require("express");

const router = express.Router();
const { createJWT } = require("../utils/jwt");
const { authenticatedUser } = require("../middleware/auth");
// Simulated database user
const dataBase = {
    username: "admin",
    password: "admin",
};



router.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (username === dataBase.username && password === dataBase.password) {
        const payload = {
            username,
        };
        const token = createJWT({ payload });
        return res.json({ token });
    }
    return res.status(401).json({ message: "Invalid credentials" });
});



router.get("/animals", authenticatedUser, (req, res) => {
    const animalsImages = [
        "https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        "https://media.istockphoto.com/id/1448882206/es/foto/ciervos-en-la-naturaleza-un-grupo-de-ciervos-en-el-bosque-de-invierno-durante-el-d%C3%ADa-primer.jpg?s=612x612&w=is&k=20&c=d05JCiS9cbpXkbucZTLmgZsefDpD-MoTvd-IalbfsYI=",
        "https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        "https://media.istockphoto.com/id/1448882206/es/foto/ciervos-en-la-naturaleza-un-grupo-de-ciervos-en-el-bosque-de-invierno-durante-el-d%C3%ADa-primer.jpg?s=612x612&w=is&k=20&c=d05JCiS9cbpXkbucZTLmgZsefDpD-MoTvd-IalbfsYI=",
        "https://images.unsplash.com/photo-1598755257130-c2aaca1f061c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2lsZCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        "https://media.istockphoto.com/id/1448882206/es/foto/ciervos-en-la-naturaleza-un-grupo-de-ciervos-en-el-bosque-de-invierno-durante-el-d%C3%ADa-primer.jpg?s=612x612&w=is&k=20&c=d05JCiS9cbpXkbucZTLmgZsefDpD-MoTvd-IalbfsYI=",
    ];

    return res.json({ animalsImages });
});

module.exports = router;