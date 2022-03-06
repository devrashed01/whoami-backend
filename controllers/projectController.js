const Project = require('../models/projectModel');
const { successSend, errorSend } = require('../utils/responseSender');
const { updateProjectValidator } = require('../validations/projectValidator');

module.exports.getProjectsController = async (req, res) => {
  const { search } = req.query;

  const filter = {};
  if (search) {
    filter.name = new RegExp(search, 'i');
  }

  const project = await Project.find(filter);

  if (!project) {
    errorSend(res, 401, 'Projects not found');
  }

  return successSend(res, 200, project, 'Projects retrieved successfully');
};

module.exports.addProjectController = async (req, res) => {
  const { error } = updateProjectValidator(req.body);
  if (error) {
    return errorSend(res, 400, error.details[0].message);
  }

  const project = new Project({
    name: req.body.name,
    description: req.body.description,
    release_date: req.body.release_date,
    tags: req.body.tags,
    demo_url: req.body.demo_url,
    preview_image_src: req.body.preview_image_src,
  });

  await project.save();

  return successSend(res, 200, project, 'Project updated successfully');
};

module.exports.updateProjectController = async (req, res) => {
  const { error } = updateProjectValidator(req.body);
  if (error) {
    return errorSend(res, 400, error.details[0].message);
  }

  const project = await Project.findById(req.params.id);

  if (!project) {
    return errorSend(res, 400, 'invalid id');
  }

  project.name = req.body.name;
  project.description = req.body.description;
  project.release_date = req.body.release_date;
  project.tags = req.body.tags;
  project.demo_url = req.body.demo_url;
  project.preview_image_src = req.body.demo_urlpreview_image_src;
  await project.save();

  return successSend(res, 200, project, 'Project updated successfully');
};
