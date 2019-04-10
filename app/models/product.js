'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var ProductSchema = new Schema(
{
  name: String,
  price:Number,
  from:String,
  urlLink:String,
  image:String
})

// Defines a pre hook for the document.
ProductSchema.pre('save', function(next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }
  next()
})



var Product = mongoose.model('Product', ProductSchema)

module.exports = Product

/**
 * nodejs中文社区这篇帖子对mongoose的用法总结的不错：https://cnodejs.org/topic/548e54d157fd3ae46b233502
 */