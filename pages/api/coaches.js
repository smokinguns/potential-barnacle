export default (_req, res) => {
    res.statusCode = 200;
    res.json([
        {
            id:  "1",
            name: "Kristie Sproul",
            certs: ["CFL-2", "USAW-1"],
            bio: ["Kristie and her husband Phillip started going to CrossFit 66 in 2010. Her investment of time and energy in the 66 family has given her a great perspective on what it is like for others to take that first step in the doors.",
                "Kristie was nervous every time they walked in the door that first couple of months. Slowly, she gained confidence and strength through a community of people looking to get stronger and healthier. As she became more involved her nervousness turned to excitement and a desire to help others through the same stages she had been through.",
                "As she discovered, being pushed out of comfort zones can be extremely beneficial to our lives. Becoming a coach in 2015 has given her the opportunity to help others increase their confidence which transfers to other areas of their lives. Kristie now has certifications through CrossFit and USA Weightlifting.",
                "Kristie looks forward to continuing her journey in health and fitness while encouraging and serving others to do the same."
            ]
        },
        {
            id:  "2",
            name: "Wes Gellepsie",
            certs: ["CFL-1"],
            bio: ["Wes came to CrossFit 66 in 2017 and has never looked back. Physical fitness and performance is a lifestyle he only knows. Challenging the mind, body, and setting the example for others to follow. Currently serving as an Officer in the Army Reserves among other government duties. He is a CrossFit Level 1 Trainer and in the process of completing the U.S. Army Master Fitness Course. What to expect when you see Coach Wes: Get ready for a challenge."]
        },
    ]);
}









