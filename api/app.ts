import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
// import xss from "xss-clean";
import hpp from "hpp";

import userRouter from "./routes/userRoutes";

const app = express();

//Express middlewares etc
// set security http headers
app.use(helmet());

// Dev logging
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

// Limit requests from same IP
const limiter = rateLimit({
	max: 100,
	windowMs: 60 * 60 * 1000,
	message: "Too many requests from this IP, please try again in one hour.",
});
app.use("/api", limiter);

// body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization againt XSS
// FIXME: not working with ts types
// app.use(xss());

// Prevent parameter pollution
app.use(
	hpp({
		whitelist: [],
	})
);

// serving static files
app.use(express.static(__dirname + process.env.DIR_STATIC_FILES));

// Basic structure of middleware function in express
app.use((req, res, next) => {
	next(); //always call next in the end
});

// Routes
app.use("/api/users", userRouter);

app.all("*", (req, res, next) => {
	res.status(404).json({
		status: "fail",
		message: `Can't find ${req.originalUrl} on this server!`,
	});
});

export default app;
