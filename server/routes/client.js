import express from "express";
//hello
import {
  getCustomers,
  getGeography,
  getProducts,
  getTransactions,
} from "../controllers/client.js";

const router = express.Router();

// Routes
router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);
router.get("/geography", getGeography);

export default router;
