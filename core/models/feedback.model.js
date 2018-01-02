var sha1 = require('../services/sha1.service');
var mongoose = require('mongoose');

/**
 * 用户模型
 */
var feedbackSchema = new mongoose.Schema({
  // 用户类别
  type: {
    type: Number,
    enum: [1]
  },

  // 名字
  name: {
    type: String,
    trim: true,
    required: true
  },

  // 手机号
  phone: {
    type: Number,
    trim: true,
    match: /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/,
    required: true
  },

  // 需求
  demand: {
    type: String,
    required: true
  },

}, {
  collection: 'feedback',
  id: false
});

/**
 * 发布为模型
 */
module.exports = mongoose.model('feedback', feedbackSchema);