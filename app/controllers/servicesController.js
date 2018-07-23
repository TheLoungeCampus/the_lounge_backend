'use strict';

let servicesService = require('../services/servicesService.js');

let servicesController = {
    createService: createService,
    deleteService: deleteService,
    fetchAllServices: fetchAllServices,
    fetchServicesByUser: fetchServicesByUser,
    updateService: updateService
};

module.exports = servicesController;

function createService(req, res, next){
    let serviceDocument = req.body;

    return servicesService.createService(serviceDocument)
        //return the service to the frontend
        .then((createdService) => res.status(200).send(createdService))
        //send error to middleware for consistent error logging
        .catch((err) => next(err));
}

function deleteService(req, res, next){
    let serviceDocumentId = req.params.id;

    return servicesService.deleteService(serviceDocumentId)
        //return success code to frontend
        .then(() => res.status(200).send())
        //send error to middleware for consistent error logging
        .catch((err) => next(err))
}

function fetchAllServices(req, res, next){

    return servicesService.fetchAllServices()
        //return all services to frontend
        .then((allServices) => res.status(200).send(allServices))
        //send error to middleware for consistent error logging
        .catch((err) => next(err));
}

function fetchServicesByUser(req, res, next){
    let userId = req.params.id;

    return servicesService.fetchServicesByUser(userId)
        //return all user services to frontend
        .then((userServices) => res.status(200).send(userServices))
        //send error to middleware for consistent error logging
        .catch((err) => next(err))
}

function updateService(req, res, next){
    let serviceDocumentId = req.params.id,
        serviceDocument = req.body;

    return servicesService.updateService(serviceDocumentId, serviceDocument)
        //return updated service frontend
        .then((updatedService) => res.status(200).send(updatedService))
        //send error to middleware for consistent error logging
        .catch((err) => next(err));
}