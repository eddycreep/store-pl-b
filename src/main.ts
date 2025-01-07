import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import helmet from 'helmet';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

	app.use(helmet());

	app.use(compression());

	app.enableCors({
		origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
		credentials: true,
	});

	const config = new DocumentBuilder()
		.setTitle('loro API Playground')
		.setDescription('loro API Documentation with detailed endpoints and schemas')
		.setVersion('1.0')
		.addTag('assets', 'Manage and track digital assets and resources')
		.addTag('att', 'Employee attendance tracking and management')
		.addTag('auth', 'Authentication, authorization, and account security')
		.addTag('branch', 'Branch office location and information management')
		.addTag('check-ins', 'Location-based employee check-in system')
		.addTag('claims', 'Insurance claims and reimbursement processing')
		.addTag('clients', 'Client relationship and account management')
		.addTag('communication', 'Event-driven internal and external messaging system')
		.addTag('docs', 'Document management and file sharing system')
		.addTag('journal', 'Financial transaction and journal entry management')
		.addTag('leads', 'Sales lead and prospect management')
		.addTag('news', 'Company news and announcement management')
		.addTag('notifications', 'System notifications and user alerts')
		.addTag('org', 'Organization settings and configuration')
		.addTag('products', 'Product catalog and inventory management')
		.addTag('reports', 'Business analytics and reporting tools')
		.addTag('resellers', 'Reseller partner and distribution management')
		.addTag('rewards', 'Employee rewards and recognition system')
		.addTag('shop', 'E-commerce and order management')
		.addTag('tasks', 'Task and project management system')
		.addTag('gps', 'GPS tracking and location services')
		.addTag('user', 'User account management')
		.build();

	const document = SwaggerModule.createDocument(app, config, {
		deepScanRoutes: true,
		operationIdFactory: (
			controllerKey: string,
			methodKey: string
		) => methodKey,
	});

	SwaggerModule.setup('api', app, document, {
		swaggerOptions: {
			persistAuthorization: true,
			tagsSorter: 'alpha',
			operationsSorter: 'alpha',
			docExpansion: 'none',
			filter: true,
			showRequestDuration: true,
			showCommonExtensions: true,
		},
	});

	await app.listen(process.env.PORT ?? 4400);
}

bootstrap();