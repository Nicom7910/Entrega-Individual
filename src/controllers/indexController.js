const db = require('../database/models/index')

module.exports = {

    home: (req, res) => {
        db.Nota.findAll()
        .then((notas)=>{
            res.render("index", {
                notas: notas
            });
        })
    },

    create: (req, res)=>{
        db.Nota.create({
            titulo: req.body.title,
            texto: req.body.texto
        })
        .then(()=>{
            res.redirect("/")
        })
    },

    edit: (req, res)=>{
        db.Nota.findByPk(req.params.id)
          .then((nota)=>{
              res.render('detail', {
                  nota
                })
        })
    },

    save: (req, res)=>{
        db.Nota.update({
                titulo: req.body.title,
                texto: req.body.message
            },{
            where:{
                    id: req.params.id  
                }
            }    
        ).then((nota)=>{
            res.redirect("/");
        })
        .catch(error=>{
            res.send(error);
        });
    },

    delete: (req, res)=>{
        db.Nota.destroy( {
            where: { 
                id: req.params.id
            }
        })
        .then(()=>{
            res.redirect('/');
        })
    }

}
