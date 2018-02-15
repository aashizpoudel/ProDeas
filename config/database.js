if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb://<username>:<password>@ds231588.mlab.com:31588/prodeas-prod'}
}else{
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}
