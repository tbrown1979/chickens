
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express',
                        chickens: JSON.stringify(req.app.locals.images) });
};