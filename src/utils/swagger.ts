import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication, port: number) {

  // Define the Swagger configuration
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Store API Docs') // Set the title for the Swagger UI
    .setDescription('API documentation for the Store application') // Provide a brief description
    .setVersion('1.0.0') // Define the API version
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'bearerAuth', // Security name
    ) // Add support for bearer authentication
    .build();

  // Generate the Swagger document
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  // Set up the Swagger UI at the `/docs` endpoint
  SwaggerModule.setup('docs', app, swaggerDocument, {
    swaggerOptions: {
      customCssUrl: '/swagger-static/swagger-ui.css',
      customJs: '/swagger-static/swagger-initializer.js',
    },
  });

  // Add a route to serve the raw Swagger JSON file
  app.getHttpAdapter().get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerDocument);
  });

  console.log(`Swagger Docs available at http://localhost:${port}/docs`);
}