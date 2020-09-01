const express = require('express');
const router = express.Router();



// render is used to render html ( in our case EJS files )
// send is used to send data
// redirect is used to redirect to another page (example in users routes)

router.get('/', function(req, res) {
    res.send('WELCOME');
});

router.get('/render-with-data', function(req, res) {
    res.render('data', {
        name: "alex",
        a: 1,
        b: 3,
        c: 5,
        d: 6
    });
});

router.get('/render-without-data', function(req, res) {
    res.render('nodata');
});
// we can also set a route and render in one line like this:
// router.get('/render-without-data', (req, res) => res.render('welcome'));


// This route send a JSON object. This will often be used in APIs. In our case it just display a JSON on the webpage
router.get('/about.json', function(req, res, next) {
    current_time = Math.floor(new Date())
    var testJson = {
        "client": "1",
        "server": {
            "current_time": current_time,
            "services": [{
                    "name": "Weather",
                    "widgets": [{
                            "name": "city_temperature",
                            "description": "Display of the temperature in the selected City",
                            "params": [
                                { "name": "city", "type": "string" },
                            ],
                        },
                        {
                            "name": "city_weather",
                            "description": "Description of the weather conditions in the selected City",
                            "params": [
                                { "name": "city", "type": "string" },
                            ],
                        }
                    ]
                },
                {
                    "name": "Map",
                    "widgets": [{
                        "name": "google_maps",
                        "description": "Display a usable google map",
                    }, ]
                },
                {
                    "name": "Youtube",
                    "widgets": [{
                            "name": "youtube_channel",
                            "description": "Display your own Youtube Channel Subscriber count",
                        },
                        {
                            "name": "youtube_aim",
                            "description": "Display the number of Subs you need to get to the give account level",
                        },
                    ]
                }
            ]

        },
    };
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(testJson, null, 3));
});

module.exports = router;