const { mutipleMongooseToObject } = require('../../until/mongoose');
const { mongooseToObject } = require('../../until/mongoose');
const Student = require('../models/Student');

class StudentController{

    show(req, res, next) {
        Promise.all([Student.find({}), Student.countDocumentsDeleted()])
        .then(([students, deletedCount]) => 
            res.render('students/show', {
                deletedCount,
                students: mutipleMongooseToObject(students)
            })
        )
        .catch(next);
    }

    detail(req, res, next) {
        Student.findById(req.params.id)
            .then(student => res.render('students/detail', {
                student: mongooseToObject(student)
            }))
            .catch(next);
    }

    create(req, res) {
        res.render('students/create')
    }

    async store(req, res, next) {
        const std = await Student.findOne({mssv: req.body.mssv});
        if(std)
            res.render('error');
        else {
            const student = new Student(req.body);
            student.save()
                .then(() => res.redirect('/Students'))
                .catch(err => {}); 
        }
    }

    trash(req, res, next) {
        Student.findDeleted({})
            .then(students => res.render('students/trash', {
                students: mutipleMongooseToObject(students)
            }))
            .catch(next);
    }

    delete(req, res, next) {
        Student.delete({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    destroy(req, res, next) {
        Student.deleteOne({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    restore(req, res, next) {
        Student.restore({_id: req.params.id})
            .then(() => res.redirect('back'))
            .catch(next);
    }

    edit(req, res, next) {
        Student.findById(req.params.id)
            .then(student => res.render('students/edit', {
                student: mongooseToObject(student)
            }))
            .catch(next)
    }

    async update(req, res, next) {
        const std = await Student.findOne({mssv: req.body.mssv});
            Student.updateOne({_id: req.params.id}, req.body)
                .then(() => res.redirect('/Students'))
                .catch(next);
    }

}


module.exports = new StudentController;
