'use strict'

var mongoose =  require('mongoose')
var Product = mongoose.model('Product')

/**
 * 查找所有
 * @return {[type]} [description]
 */
exports.findAllProducts = async (name,indexx,counts) => {
    var query = Product.find({}).skip(indexx).limit(counts)
    var queryNum = Product.find({}).count()
    var res = {
        data:{},
        allNums:0
    };
    
    await query.exec(function(err, products) {
        if(err) {
            res.data = []
        }else {
            res.data = products;
        }
    })

    await queryNum.exec(function(err, allNums) {
        if(err) {
            res.allNums = 0
        }else {
            res.allNums = allNums;
        }
    })
    console.log(res);

    return res
}
