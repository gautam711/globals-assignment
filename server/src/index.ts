import loggerService from "./service/logger.service";
import { app } from "./server";

app.listen(3001, () => {
  loggerService.info("Server started on port 3001");
});
