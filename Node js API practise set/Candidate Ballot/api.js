const express = require('express');
const router = express.Router();

const Candidates = [
    {
        id: 1,
        name: "Candidate A",
        votes: 0
    },
    {
        id: 2,
        name: "Candidate B",
        votes: 0
    },
    {
        id: 3,
        name: "Candidate C",
        votes: 0
    }
];

router.get('/candidates', (req, res) => {

    return res.status(200).json({
        message: "All candidates retrieved successfully",
        Candidates
    });
});

router.post('/vote', (req, res) => {

    const candidateId = req.body.candidateId;

    if (candidateId === undefined) {
        return res.status(400).json({
            message: "candidateId is required"
        });
    }

    const candidate = Candidates.find(
        candidate => candidate.id == candidateId
    );

    if (!candidate) {
        return res.status(404).json({
            message: "Candidate not found"
        });
    }

    candidate.votes++;

    return res.status(200).json({
        message: "Vote cast successfully",
        candidate
    });
});

router.get('/result', (req, res) => {

    return res.status(200).json({
        message: "Voting result",
        Candidates
    });
});

module.exports = router;