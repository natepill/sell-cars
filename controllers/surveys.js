const express = require("express");

const router = express.Router();

const Survey = require("../models/survey.js");


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
        res.render("survey/show.hbs", {
         survey
        }).catch(err => {
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
// router.get("/:id/api", (req, res) => {
//     Budget.findById(req.params.id).then(budget => {
//         if(budget){
//             console.log(budget);
//             res.send(budget)
//         }
//     })
// })

module.exports = router;
