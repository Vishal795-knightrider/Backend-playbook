
const requestMap = new Map();

const WINDOW_MS = 60 * 1000; // 1 minute
const LIMIT = 5;

const rateLimiter = (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();

    // Get existing record for this IP
    const record = requestMap.get(ip);

    if (!record || now - record.startTime >= WINDOW_MS) {
        // First request or time window expired
        requestMap.set(ip, {
            count: 1,
            startTime: now
        });
    } else {
        // Increment request count
        record.count++;
    }

    const currentRecord = requestMap.get(ip);

    console.log("IP:", ip);
    console.log("Count:", currentRecord.count);

    if (currentRecord.count > LIMIT) {
        return res.status(429).json({
            message: "Too many requests. Try again later."
        });
    }

    next();
};

module.exports = rateLimiter;
