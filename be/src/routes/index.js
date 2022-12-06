
const studentRouter = require('./student');
const homeRouter = require('./home');

function route(app) {

    app.use('/Students', studentRouter);
    app.use('/Student', studentRouter);   
    app.use('/', homeRouter);   

}
    

module.exports = route;