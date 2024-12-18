"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupSwagger = setupSwagger;
const swagger_1 = require("@nestjs/swagger");
function setupSwagger(app, port) {
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Store API Docs')
        .setDescription('API documentation for the Store application')
        .setVersion('1.0.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
    }, 'bearerAuth')
        .build();
    const swaggerDocument = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('docs', app, swaggerDocument, {
        swaggerOptions: {
            customCssUrl: '/swagger-static/swagger-ui.css',
            customJs: '/swagger-static/swagger-initializer.js',
        },
    });
    app.getHttpAdapter().get('/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(swaggerDocument);
    });
    console.log(`Swagger Docs available at http://localhost:${port}/docs`);
}
//# sourceMappingURL=swagger.js.map