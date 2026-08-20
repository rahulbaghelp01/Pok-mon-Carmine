import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const { Authorization } = req.headers;

    if (!Authorization) {
        return res.status(401).json({
            error: "Authorization token missing"
        });
    }

    const token = Authorization.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();

    } catch (err) {
        return res.status(401).json({
            error: "Invalid token"
        });
    }
};

export default authMiddleware;