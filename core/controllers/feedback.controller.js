var logger = require('../../lib/logger.lib');
var sha1 = require('../services/sha1.service');
var feedbackService = require('../services/feedback.service');

/**
 * 更新账号
 * @param {Object} req
 *        {String} req.body.name
 *        {String} req.body.phone
 *        {String} req.body.demand
 * @param {Function} res
 */
exports.save = function (req, res) {
  req.checkBody({
    'name': {
      notEmpty: {
        options: [true],
        errorMessage: '名字不能为空'
      }
    },
    'phone': {
      notEmpty: {
        options: [true],
        errorMessage: '手机号不能为空'
      }
    },
    'demand': {
      notEmpty: {
        options: [true],
        errorMessage: '需求不能为空'
      }
    }
  });

  if (req.validationErrors()) {
    logger.system().error(__filename, req.validationErrors());
    return res.status(400).end();
  }

  var data = {
    name: req.body.name,
    phone: req.body.phone,
    demand: req.body.demand
  };

  feedbackService.save(data, function (err) {
    if (err) {
      logger[err.type]().error(__filename, err);
      return res.status(400).end();
    }

    res.status(204).end();
  });
};
