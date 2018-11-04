const express = require("express");

const router = express.Router();

const Survey = require("../models/survey.js");

const ObjectId = require("mongoose").Types.ObjectId;


// new
router.get("/new", (req, res) => {
        res.status(200).render("survey/new.hbs");
});
// });

 //create

router.post("/", (req, res) => {
    const survey = new Survey(req.body);
    survey.save();
    res.redirect("/survey/" + survey._id);
});



// show
router.get("/:id", (req, res) => {
    Survey.findById(req.params.id).then(survey => {
        console.log(survey);
        res.render("survey/show.hbs", { survey }).catch(err => {
            res.status(400).send(err.message);
            console.log(err.message);
        });
    });
});

//  Edit
router.get("/:id/edit", (req, res) => {
    Survey.findById(req.params.id, (err, survey) => {
        res.render("survey/edit.hbs", { survey });
    });
});

router.put("/:id", (req, res) => {
    Survey.findByIdAndUpdate(req.params.id, req.body, (err, survey) => {
        res.status(200).redirect("/");
    }).catch(err => {
        res.status(400).send(error.message);
        console.log(err.message);
    });
});
//  delete
router.delete("/:id", (req, res) => {
    Survey.findByIdAndRemove(req.params.id, (err, survey) => {
        res.redirect("/survey/" + survey._id);
    }).catch(err => {
        res.status(400).send(error.message);
        console.log(err.message);
    });
});

//char
//
console.log("here");
router.get("/:id/api", (req, res) => {
    Survey.findById(req.params.id).then(survey => {
        if(survey){
            console.log('************');
            console.log(survey);
            console.log('************');
            res.send(survey)
        }
    })
})

console.log('here2');
module.exports = router;
