import Koa from "koa";
import helmet from "koa-helmet";
import koaBody from "koa-body";
import logger from "koa-logger";
import routes from "./routes/index";
import orm from "./models";

const app = new Koa();

// expose ORM through context's prototype
app.context.orm = orm;

/**
 * Middlewares
 */

// basic security middleware
app.use(helmet());

// HTTP request body parser
app.use(koaBody());

// HTTP request logger
app.use(logger());

// routing
app.use(routes.routes());

export default app;
