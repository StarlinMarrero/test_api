import { config } from "./config";
import app from './app'


app.listen(config.app.port, () => {
    console.log("🚀 Server running on port: ", config.app.port);
});
