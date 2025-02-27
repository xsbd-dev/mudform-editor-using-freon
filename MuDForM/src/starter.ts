import { ServerCommunication } from "@freon4dsl/core";
import { FreonLayout, WebappConfigurator } from "@freon4dsl/webapp-lib";
import { configureExternals } from "./external/externals.js";
import { LanguageEnvironment } from "./freon/index.js";
import { configureLoggers } from "./loggers.js";
// import { LionWebRepositoryCommunication } from "@freon4dsl/core"

/**
 * Initialize everything
 */
WebappConfigurator.getInstance().setEditorEnvironment(LanguageEnvironment.getInstance());
WebappConfigurator.getInstance().setServerCommunication(ServerCommunication.getInstance());

ServerCommunication.getInstance().SERVER_IP = 'http://localhost'
ServerCommunication.getInstance().nodePort = '8001'

configureExternals()
configureLoggers()

/**
 * Now start the app ...
 */
const app = new FreonLayout({
    target: document.body,
});
export default app;
