import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: "Authorization token missing" });
    }

    const token = authorization.split(" ")[1];

    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{});
};

export default authMiddleware;