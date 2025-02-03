import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./db/mongoose.js";
import Product from "../product_store/backend/models/Product.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cookieParser());
const users = [
  {
    id: "1",
    username: "John",
    password: "John0908",
    isAdmin: true,
  },
  {
    id: "2",
    username: "Jane",
    password: "Jane0908",
    isAdmin: false,
  },
];

const refreshTokens = [];

const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user.id, isAdmin: user.isAdmin },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15m",
    }
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user.id, isAdmin: user.isAdmin },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );
};
app.post("/api/refresh", (req, res) => {
  //take token from user
  const refreshToken = req.body.token;
  //send error if token is not valid or its invalid
  if (!refreshToken) {
    return res.status(401).json("You are not successful");
  }
  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json("Refresh Token is not valid!");
  }
  //if valid create new access token, refresh token and send to user
  jwt.verify(refreshToken, "myRefreshKey", (err, user) => {
    err && console.log(err);
    refreshTokens = filter((token) => token !== refreshToken);

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    refreshTokens.push(newRefreshToken);

    res.status(200).json({
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    });
  });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => {
    return u.username === username && u.password === password;
  });

  if (user) {
    //generate access token
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);

    refreshTokens.push(refreshToken);
    res.cookie("accessToken", accessToken, {
      httpOnly: true,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });
    res.status(200).json({
      username: user.username,
      admin: user.isAdmin,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
  } else {
    res.status(400).json({ error: "username/password is not correct" });
  }
});

app.post("/api/logout", verify, (req, res) => {
  const refreshToken = req.body.token;
  refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
  res.status(200).json("logged out successfully");
});

function verify(req, res, next) {
  const authHeader = req.headers.auth;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(401).json("Token is not valid");
      } else {
        req.user = user;
        next();
      }
    });
  } else {
    jwt.verify(
      req.cookies.accessToken,
      process.env.ACCESS_TOKEN_SECRET,
      (err, user) => {
        if (err) {
          return res.status(401);
        } else {
          res.status(200).json("This is working!");
        }
      }
    );
    res.status(401).json("You are not authorised!");
  }
}

app.delete("/api/users/:id", verify, (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    res.status(200).json("User has been deleted");
  } else {
    res.status(403).json("You are not allowed to delete this user");
  }
});
app.listen(5000, () => {
  connectDB();
  console.log("Listening on port 5000");
});
