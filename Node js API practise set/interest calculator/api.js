const express = require('express');
const router = express.Router();

router.post('/simple-interest',(req, res) =>{
    const principal = Number(req.body.principal);
    const rate = Number(req.body.rate);
    const time = Number(req.body.time);

    if (!Number.isFinite(principal) || !Number.isFinite(rate) || !Number.isFinite(time) ||
        principal <= 0 ||
        rate <= 0 ||
        time <= 0
    ){
      return res.status(400).json({
        message: "Please provide valid input."
      });
    }
    const interest = (principal * rate * time) / 100;

    return res.status(200).json({
        interest
    });
});

module.exports = router;