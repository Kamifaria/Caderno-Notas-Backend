const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController');

// Routes for Annotations
routes.post('/annotations', AnnotationController.create);
routes.get('/annotations', AnnotationController.read);
routes.delete('/annotations/:id', AnnotationController.delete);

// Routes for Priority
routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update); // Fix the typo here

// Routes for Content
routes.post('/contents/:id', ContentController.update);

module.exports = routes;
