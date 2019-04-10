'use strict'

var xss = require('xss')
var mongoose =  require('mongoose')
var Product = mongoose.model('Product')
var uuid = require('uuid')
var productHelper = require('../dbhelper/productHelper')


/**
 * 数据库接口测试
 * @param  {[type]}   ctx  [description]
 * @param  {Function} next [description]
 * @return {[type]}        [description]
 */
exports.products = async (ctx, next) => {
  var counts = parseInt(xss(ctx.request.body.counts))
  var indexx = parseInt(xss(ctx.request.body.indexx))
  var name = parseInt(xss(ctx.request.body.name))
  var data = await productHelper.findAllProducts(name,indexx,counts)
  ctx.body = {
    success: true,
    data
  }
}
