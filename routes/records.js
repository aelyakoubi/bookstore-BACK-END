import express from "express";
import getRecords from "../services/records/getRecords.js";
import createRecord from "../services/records/createRecord.js";
import getRecordById from "../services/records/getRecordById.js";
import updateRecordById from "../services/records/updateRecordById.js";
import deleteRecord from "../services/records/deleteRecord.js";
import authMiddleware from "../middleware/auth.js";
import notFoundErrorHandler from "../middleware/notFoundErrorHandler.js";

const router = express.Router();

router.get(
  "/",
  async (req, res, next) => {
    try {
      const { artist, genre, available } = req.query;
      const records = await getRecords(artist, genre, available);
      res.status(200).json(records);
    } catch (error) {
      next(error);
    }
  },
  notFoundErrorHandler
);

router.get(
  "/:id",
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const record = await getRecordById(id);

      res.status(200).json(record);
    } catch (error) {
      next(error);
    }
  },
  notFoundErrorHandler
);

router.post(
  "/",
  authMiddleware,
  async (req, res, next) => {
    try {
      const { title, artist, year, available, genre } = req.body;
      const newRecord = await createRecord(
        title,
        artist,
        year,
        available,
        genre
      );
      res.status(201).json(newRecord);
    } catch (error) {
      next(error);
    }
  },
  notFoundErrorHandler
);

router.put(
  "/:id",
  authMiddleware,
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { title, artist, year, available, genre } = req.body;
      const updatedRecord = await updateRecordById(
        id,
        title,
        artist,
        year,
        available,
        genre
      );
      res.status(200).json(updatedRecord);
    } catch (error) {
      next(error);
    }
  },
  notFoundErrorHandler
);

router.delete(
  "/:id",
  authMiddleware,
  async (req, res) => {
    try {
      const { id } = req.params;
      const deletedRecordId = await deleteRecord(id);

      res.status(200).json({
        message: `Record with id ${deletedRecordId} was deleted!`,
      });
    } catch (error) {
      next(error);
    }
  },
  notFoundErrorHandler
);

export default router;
