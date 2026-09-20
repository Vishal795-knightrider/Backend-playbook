const express = require('express');

const router = express.Router();

router.post('/area', (req, res) => {
    const shape = req.body.shape;

    if (shape === "circle") {
        const radius = Number(req.body.radius);
        if(!Number.isFinite(radius) || radius <=0) {
            return res.status(400).json({
                message: "Please provide valid input"
            });
        }

        const area = Math.PI * radius * radius;
        return res.status(200).json({
            shape,
            area
        });
    }


    if (shape === "rectangle") {
        const length = Number(req.body.length);
        const width = Number(req.body.width);

        if (
            !Number.isFinite(length) ||
            !Number.isFinite(width) ||
            length <= 0 ||
            width <= 0
        ) {
            return res.status(400).json({
                message: "Please provide valid input"
            });
        }

        const area = length * width;
        return res.status(200).json({
            shape,
            area
        });
    }


    if (shape === "square") {
        const side = Number(req.body.side);
        if (
            !Number.isFinite(side) ||
            side <= 0
        ) {
            return res.status(400).json({
                message: "Please provide valid input"
            });
        }

        const area = side * side;
        return res.status(200).json({
            shape,
            area
        });
    }


    return res.status(400).json({
        message: "Please provide valid input"
    });
});

module.exports = router;