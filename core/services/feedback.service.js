var async = require('async');
var _ = require('lodash');
var logger = require('../../lib/logger.lib');
var feedbackModel = require('../models/feedback.model');

/**
 * 存储用户
 * @param {Object} options
 *        {MongoId} options._id
 *        {Object} options.data
 * @param {Function} callback
 */
exports.save = function (options, callback) {
  if (!options) {
    var err = {
      type: 'system',
      error: '没有传入 data'
    };

    return callback(err);
  }

  new feedbackModel(options).save(function (err, user) {
    if (err) {
      err.type = 'database';
      return callback(err);
    }

    callback(null, user);
  });

};

