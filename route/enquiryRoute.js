import express from 'express';
import { AddEnquiry, DeleteEnquiry, GetAllEnquiry, GetEnquiryById, UpdateEnquiry } from '../controller/EnquiryController';


export const enquiryRoute = express.Router();
enquiryRoute.post('/addenquiry', AddEnquiry);
enquiryRoute.get('/getenquiry', GetAllEnquiry);
enquiryRoute.get('/getenquiry/:id', GetEnquiryById);
enquiryRoute.put('/updateenquiry/:id', UpdateEnquiry);
enquiryRoute.delete('/deleteenquiry/:id', DeleteEnquiry);