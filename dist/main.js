"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
const swagger_1 = require("./utils/swagger");
dotenv.config();
const port = 4000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:4000',
        methods: 'GET,POST,PUT,DELETE,PATCH,OPTIONS',
        allowedHeaders: 'Content-Type, Authorization',
    });
    (0, swagger_1.setupSwagger)(app, port);
    await app.listen(port, '0.0.0.0');
    console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map