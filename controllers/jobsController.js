import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors/index.js";

const createJob = async (req, res) => {
  const { position, company } = req.body;

  if (!position || !company) {
    throw new BadRequestError("Please Provide All Values");
  }

  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

const deleteJob = async (req, res) => {
  return res.send("delete job");
};

const getAllJobs = async (req, res) => {
  return res.send("get all job");
};

const updateJob = async (req, res) => {
  return res.send("update job");
};

const showStats = async (req, res) => {
  return res.send("show stats");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
