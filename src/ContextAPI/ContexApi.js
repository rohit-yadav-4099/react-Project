import React, { createContext, useState } from "react"
export const Store = createContext();
const ConntextStore = (props) => {
    const [data, setData] = useState([

        {
            id: 1,
            name: "Pizza",
            category: "Food",
            image: "https://img.freepik.com/premium-photo/aesthetic-dripping-tasty-pizza-slice-generative-ai_863013-1954.jpg",
            text: "Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven",
        },
        {
            id: 2,
            name: "Burger",
            category: "Food",
            image: "https://c4.wallpaperflare.com/wallpaper/672/503/735/fast-food-junk-food-food-hamburger-wallpaper-preview.jpg",
            text: "A burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor. Burgers are considered an American food but are popular around the world",
        },
        {
            id: 3,
            name: "SandWich",
            category: "Food",
            image: "https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697846400&semt=ais",
            text: "A sandwich is a food typically consisting of vegetables, sliced cheese or meat, placed on or between slices of bread, or more generally any dish wherein bread serves as a container or wrapper for another food type.",
        },
        {
            id: 4,
            name: "Chiken",
            category: "Food",
            image: "https://images.pexels.com/photos/2994900/pexels-photo-2994900.jpeg?cs=srgb&dl=pexels-engin-akyurt-2994900.jpg&fm=jpg",
            text: "Chickens are gregarious birds and live together in flocks. They have a communal approach to the incubation of eggs and raising of young.",
        },
        {
            id: 5,
            name: "Cake",
            category: "Food",
            image: "https://w0.peakpx.com/wallpaper/843/986/HD-wallpaper-cakes-food-cake-fruit-caramel-dessert-sweet.jpg",
            text: "  It is a derivation of 'kaka', an Old Norse word. Medieval European bakers often made fruitcakes and gingerbread.",
        },
        {
            id: 6,
            name: "Samosa",
            category: "Food",
            image: "https://img.pikbest.com/origin/09/34/66/56wpIkbEsTdFz.jpg!w700wp",
            text: "A samosa is a fried South Asian pastry with a savoury filling, including ingredients such as spiced potatoes, onions, peas, meat or fish. It may take different forms, including triangular, cone, or half-moon shapes, depending on the region.",
        },
        {
            id: 7,
            name: "Laddu",
            category: "Food",
            image: "https://img.freepik.com/premium-photo/tangy-crispy-kacha-aam-ke-ladoo_670382-125211.jpg",
            text: "Laddu or laddoo is a spherical sweet from the Indian subcontinent made of various ingredients and sugar syrup or jaggery. It has been described as perhaps the most universal and ancient of Indian sweets.",
        },
        {
            id: 8,
            name: "Barfi",
            category: "Food",
            image: "https://static.toiimg.com/thumb/msid-66476943,width-1280,resizemode-4/66476943.jpg",
            text: "Barfi or burfi is a milk-based sweet from the Indian subcontinent with a fudge-like consistency. Its name comes from the Persian and Urdu word (barf) for snow. Barfi is consumed throughout India and Pakistan and is especially popular in North India.",
        },
        {
            id: 9,
            name: "Manchurian",
            category: "Food",
            image: "https://t3.ftcdn.net/jpg/04/47/95/48/360_F_447954890_nYoJ3Lm6OElMe0LogDry2KfHF4tXsfMw.jpg",
            text: "Manchurian is a class of Indian Chinese dish made by roughly chopping and deep-frying ingredients such as chicken, cauliflower (gobi), prawns, fish, mutton, and paneer, and then sautéeing them in a sauce flavored with soy sauce."
        },
        {
            id: 10,
            name: "Chowmian",
            category: "Food",
            image: "https://images.unsplash.com/photo-1634864572865-1cf8ff8bd23d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvdyUyMG1laW58ZW58MHx8MHx8fDA%3D",
            text: "Chow mein is a Chinese dish of fried (chow) noodles (mein). The variations are endless depending on the chef or region, stir-fried with pork, chicken, shrimp and vegetables, such as cabbage, beansprouts, bell pepper, carrot and spring onion."
        },
        {
            id: 11,
            name: "Pani Puri",
            category: "Food",
            image: "https://cdn.pixabay.com/photo/2021/01/06/14/01/pani-puri-5894482_640.jpg",
            text: "Gol gappa (also known as pani puri) is a popular bite-size chaat consisting of a hollow, crispy-fried puffed ball that is filled with potato, chickpeas, onions, spices, and flavoured water, usually tamarind or mint, and popped into one's mouth whole."
        },
        {
            id: 12,
            name: "Paneer",
            category: "Food",
            image: "https://www.nutritionfact.in/wp-content/uploads/2022/06/paneer.jpg",
            text: "Paneer is an Indian cheese that's made from curdled milk and some sort of fruit or vegetable acid like lemon juice. There are some distinct traits that make Paneer the cheese that it is: It's an unaged cheese. It's a soft cheese."
        },
        {
            id: 13,
            name: "Mashroom",
            category: "Food",
            image: "https://img.freepik.com/free-photo/fresh-mushrooms-wodden-background_1212-892.jpg",
            text: "A mushroom or toadstool is the fleshy, spore-bearing fruiting body of a fungus, typically produced above ground, on soil, or on its food source."
        },
        {
            id: 14,
            name: "Pasta",
            category: "Food",
            image: "https://www.vincenzosplate.com/wp-content/uploads/2021/07/610x350-Photo-2_717-How-to-Make-4-CHEESE-PASTA-Like-an-Italian-V1-500x350.jpg",
            text: "Pasta is an Italian staple made from wheat flour and water. It comes in various shapes and is often served with a variety of sauces."
        },

        {
            id: 15,
            name: "Genius",
            category: "Bollywood",
            image: "https://i.ytimg.com/vi/uBpWp8OorHY/maxresdefault.jpg",
            text: "Genius is a 2018 Indian Hindi-language romantic psychological action thriller film directed by Anil Sharma. It marks the debut of his son Utkarsh Sharma as a male lead, who also featured as a child actor in Sharma's 2001 film Gadar: Ek Prem Katha. Ishita Chauhan, Nawazuddin Siddiqui, and Mithun Chakraborty, with Ayesha Jhulka,[3] and Malti Chahar play supporting roles in the film.",
        },
        {
            id: 16,
            name: "Dhadkan",
            category: "Bollywood",
            image: "https://jmathur.files.wordpress.com/2017/06/dhadkan-2000-c2a6-hd-hindi-sub-engc2a6-sunil-shetty.jpg",
            text: "Dhadkan (transl. Heartbeat) is a 2000 Indian Hindi-language romantic drama musical film directed by Dharmesh Darshan and produced by Ratan Jain.[2] It stars Akshay Kumar, Shilpa Shetty, Suniel Shetty and Mahima Chaudhry.[3][4] Being inspired by the novel Wuthering Heights, it also features Parmeet Sethi, Kiran Kumar, Sushma Seth and Manjeet Kullar in supporting roles.[5] The story follows, Anjali and Dev are in love with each other and plan to marry, but her family gets her married to Ram. Years later, Dev shows up to reunite with Anjali, however, she has fallen in love with Ram. The music was composed by Nadeem–Shravan."
        },
        {
            id: 17,
            name: "Mummy Kasam",
            category: "Bollywood",
            image: "https://i.pinimg.com/736x/03/fd/99/03fd9957159010cf8f051f22f9e2d9ac.jpg",
            text: "Mummy Kasam is a Hindi language song and is sung by Gurinder Seagal, Payal Dev and Ikka. Mummy Kasam, from the album Nawabzaade, was released in the year 2018."
        },
        {
            id: 18,
            name: "Gabbar",
            category: "Bollywood",
            image: "https://cdn.wallpapersafari.com/5/15/jQpFEH.jpg",
            text: "Gabbar Singh Rajput (Akshay Kumar) creates his own vigilante military network called the Anti-Corruption Force (ACF) that eliminates the most corrupt individuals, from all walks of life, in a systematic manner."
        },
        {
            id: 19,
            name: "krrish 4",
            category: "Bollywood",
            image: "https://i.ytimg.com/vi/lD6tF6uxV4c/hqdefault.jpg",
            text: "Rakesh Roshan recently gave some major updates about the much-awaited ‘Krrish 4’, starring his son Hrithik Roshan. The film’s scripting has been underway ever since rumours abounded in 2020 that they were gearing up for the fourth instalment."
        },
        {
            id: 20,
            name: "Sanam Teri Kasam",
            category: "Bollywood",
            image: "https://v3img.voot.com/jioimage/12/26/8a0e8f3374c811e688d58522ba040c22_1582111969083_l.jpg",
            text: "Sanam Teri Kasam is a 2016 Indian romantic film starring Harshvardhan Rane and Pakistani actress Mawra Hocane. It is directed by the duo Radhika Rao-Vinay Sapru and produced by Deepak Mukut. The film is a modern rendition of the novel Love Story by Eric Segal."
        },
        {
            id: 21,
            name: "Golmaal Again",
            category: "Bollywood",
            image: "https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/old_images/MOVIE/7002/1770017002/1770017002-h",
            text: "Golmaal Again (transl. Chaos Again) is a 2017 Indian Hindi-language supernatural comedy film written and directed by Rohit Shetty; produced by Rohit Shetty Pictures, Mangal Murti Films and Reliance Entertainment.[1] The film is the fourth installment of Golmaal franchise and stars Ajay Devgn, Arshad Warsi, Parineeti Chopra, Tabu, Tusshar Kapoor, Shreyas Talpade, Kunal Khemu, Neil Nitin Mukesh and Johnny Lever."
        },
        {
            id: 22,
            name: "Zindagi Na Milegi Dobara",
            category: "Bollywood",
            image: "https://www.searchhyderabad.com/wp-content/uploads/listing-uploads/logo/2022/11/Zindagi-Na-Milegi-Dobara-Movie-OTT-Platform.jpg",
            text: "Zindagi Na Milegi Dobara is a 2011 Indian coming-of-age film directed by Zoya Akhtar. It showcases the transformative journey of three friends during a bachelor road trip."
        },
        {
            id: 23,
            name: "Action Jackson",
            category: "Bollywood",
            image: "https://wallpapercave.com/wp/wp6072765.jpg",
            text: "Action Jackson is a 2014 Indian Hindi-language action thriller film directed by Prabhu Deva and produced by Gordhan P. Tanwani and Sunil Lulla.[4] The film features Ajay Devgn in a dual role, alongside Sonakshi Sinha, Yami Gautam, Manasvi Mamgai, Kunaal Roy Kapur and Anandaraj."
        },
        {
            id: 24,
            name: "Siddat",
            category: "Bollywood",
            image: "https://i.ytimg.com/vi/84HdThjrxO0/maxresdefault.jpg",
            text: "Shiddat: Journey Beyond Love, or simply Shiddat[2] (transl. Passion), is a 2021 Indian Hindi-language romantic drama film directed by Kunal Deshmukh and produced by Bhushan Kumar, Krishan Kumar and Dinesh Vijan under their banners T-Series and Maddock Films. The film stars Sunny Kaushal, Radhika Madan, Mohit Raina and Diana Penty."
        },
        {
            id: 25,
            name: "Gadar 2",
            category: "Bollywood",
            image: "https://wallpapercave.com/wp/wp12445683.jpg",
            text: "Gadar 2 (transl. Rebellion 2; subtitled onscreen with The Katha Continues) is a 2023 Indian Hindi-language period action drama film directed and produced by Anil Sharma and written by Shaktimaan Talwar. A sequel to Gadar: Ek Prem Katha (2001), it stars Sunny Deol, Ameesha Patel and Utkarsh Sharma, who reprise their roles from the previous film.[5] During the Indo-Pakistani War of 1971, Tara Singh returns to Pakistan in order to rescue his imprisoned son Charanjeet Jeete Singh."
        },
        {
            id: 26,
            name: "Border",
            category: "Bollywood",
            image: "https://i.ytimg.com/vi/nGNmyt9Ywqc/sddefault.jpg",
            text: "Border is a 1997 Indian Hindi-language epic war film written, produced and directed by J. P. Dutta. Set during the Indo-Pakistani War of 1971, it is an adaptation of real life events that happened during the Battle of Longewala in 1971.[2] The film stars an ensemble cast of Sunny Deol, Jackie Shroff, Sunil Shetty, Akshaye Khanna, Sudesh Berry, Puneet Issar and Kulbhushan Kharbanda. Tabu, Raakhee, Pooja Bhatt and Sharbani Mukherjee feature in supporting roles."
        },
        {
            id: 27,
            name: "Dilwale",
            category: "Bollywood",
            image: "https://i.ytimg.com/vi/NWxhw9B7B1I/maxresdefault.jpg",
            text: "Dilwale: Directed by Harry Baweja. With Ajay Devgn, Suniel Shetty, Raveena Tandon, Gulshan Grover. A police officer finds out the truth about a mental."
        },
        {
            id: 28,
            name: "Mujhse Shaadi Karogi",
            category: "Bollywood",
            image: "https://pic-bstarstatic.akamaized.net/ugc/04ee69296c20816cfce2e5a4787ff0ad.jpg",
            text: " hot-tempered young guy named Sameer (Salman Khan) relocates to Goa, where he falls in love with Rani (Priyanka Chopra). However, his new roommate Sunny (Akshay Kumar) starts to behave like a spoke in the wheel with some tricks up his sleeve. Soon Rani starts liking both Sameer and Sunny."
        },
        {
            id: 29,
            name: "Control",
            category: "Hollywood",
            image: "https://i.ytimg.com/vi/5M9VLIzdsKo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDTlTyO2ZSNwZewHKhUxhxbOlDK6A",
            text: "A woman is imprisoned by a mysterious organization intent on testing her latent psychic abilities. This film is not based upon or associated in any way with the CONTROL® video game and franchise developed by Remedy Entertainment Plc.",
        },
        {
            id: 30,
            name: "Transformers",
            category: "Hollywood",
            image: "https://w.forfun.com/fetch/18/18dddb6d9414748a863c764a6487cea6.jpeg",
            text: "Transformers is a series of science fiction action films based on the Transformers franchise of the 1980s. Michael Bay directed the first five live action films: Transformers, Revenge of the Fallen, Dark of the Moon, Age of Extinction, and The Last Knight, and has served as a producer for subsequent films."
        },
        {
            id: 31,
            name: "Avatar",
            category: "Hollywood",
            image: "https://cdn.wallpapersafari.com/86/95/Idsx01.jpg",
            text: "Avatar (marketed as James Cameron's Avatar) is a 2009 epic science fiction film directed, written, co-produced, and co-edited by James Cameron and starring Sam Worthington, Zoe Saldana, Stephen Lang, Michelle Rodriguez,[6] and Sigourney Weaver. It is the first installment in the Avatar film series. It is set in the mid-22nd century, when humans are colonizing Pandora, a lush habitable moon of a gas giant in the Alpha Centauri star system, in order to mine the valuable mineral unobtanium.[a] The expansion of the mining colony threatens the continued existence of a local tribe of Na'vi, a humanoid species indigenous to Pandora. The title of the film refers to a genetically engineered Na'vi body operated from the brain of a remotely located human that is used to interact with the natives of Pandora."
        },
        {
            id: 32,
            name: "The Maze Runner",
            category: "Hollywood",
            image: "https://c4.wallpaperflare.com/wallpaper/726/46/535/movies-hollywood-movies-wallpaper-preview.jpg",
            text: "The Maze Runner is a 2014 American dystopian science fiction film directed by Wes Ball, in his directorial debut, based on James Dashner's 2009 novel of the same name. The film is the first installment in The Maze Runner film series and was produced by Ellen Goldsmith-Vein, Wyck Godfrey, Marty Bowen, and Lee Stollman with a screenplay by Noah Oppenheim, Grant Pierce Myers, and T.S. Nowlin."
        },
        {
            id: 33,
            name: "Avengers",
            category: "Hollywood",
            image: "https://cdn.wallpapersafari.com/95/85/vjDSMT.jpg",
            text: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the direct sequel to Avengers: Infinity War (2018) and the 22nd film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner, Don Cheadle, Paul Rudd, Brie Larson, Karen Gillan, Danai Gurira, Benedict Wong, Jon Favreau, Bradley Cooper, Gwyneth Paltrow, and Josh Brolin. In the film, the surviving members of the Avengers and their allies attempt to reverse Thanos's actions in Infinity War."
        },
        {
            id: 34,
            name: "The Dark Knight",
            category: "Hollywood",
            image: "https://wallpapercave.com/wp/wp2162756.jpg",
            text: "The Dark Knight is a 2008 superhero film directed by Christopher Nolan. It is known for Heath Ledger's iconic portrayal of the Joker."
        },
        {
            id: 35,
            name: "Thor",
            category: "Hollywood",
            image: "https://e0.pxfuel.com/wallpapers/131/142/desktop-wallpaper-thor-the-dark-world-12.jpg",
            text: "Thor: The Dark World is a 2013 American superhero film based on the Marvel Comics character Thor, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures. It is the sequel to Thor (2011) and the eighth film in the Marvel Cinematic Universe (MCU)."
        },
        {
            id: 36,
            name: "Pirates Caribbean",
            category: "Hollywood",
            image: "https://cdn.wallpapersafari.com/45/66/q2rdlZ.jpg",
            text: "Pirates of the Caribbean is an American fantasy supernatural swashbuckler film series produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the eponymous media franchise."
        },
        {
            id: 37,
            name: "E.T. the Extra-Terrestrial",
            category: "Hollywood",
            image: "https://i.ytimg.com/vi/y_2w7LC4qOc/maxresdefault.jpg",
            text: "E.T. the Extra-Terrestrial is a 1982 science fiction film directed by Steven Spielberg. It follows the friendship between a young boy and a stranded alien."
        },
        {
            id: 38,
            name: "Broken Skine",
            category: "Hollywood",
            image: "https://i.pinimg.com/564x/f6/d3/e3/f6d3e3f8351cc091ecd8ed109a2f95ed.jpg",
            text: "Broken Skin: Directed by Anna Campion. With Holly Barker, Miranda Richardson, Nicholas Wilson."
        },
        {
            id: 39,
            name: "Jurassic Park",
            category: "Hollywood",
            image: "https://jurassicoutpost.com/static/d359f22870ea215612f3ea72d3dc2e54/f6810/Mattel-Creations-Jurassic-World-Gates-Crowdfund.jpg",
            text: "Jurassic Park is a 1993 American science fiction adventure film directed by Steven Spielberg. It explores the concept of resurrecting dinosaurs through genetic engineering."
        },
        {
            id: 40,
            name: "HOURS",
            category: "Hollywood",
            image: "https://cdn.wallpapersafari.com/83/90/bHStB3.jpg",
            text: "In one of Paul Walker's best performances to date, Hours follows a man after the loss of his wife during childbirth and he must keep his baby breathing in the incubator with no power during the events of Hurricane Katrina."
        },
        {
            id: 41,
            name: "Titanic",
            category: "Hollywood",
            image: "https://wallpapercave.com/wp/wp2728449.jpg",
            text: "Incorporating both historical and fictionalized aspects, it is based on accounts of the sinking of RMS Titanic in 1912. Kate Winslet and Leonardo DiCaprio star as members of different social classes who fall in love during the ship's maiden voyage."
        },
        {
            id: 42,
            name: "The Wolverine",
            category: "Hollywood",
            image: "https://cdn.wallpapersafari.com/40/89/1BTXhe.jpg",
            text: "Wolverine comes to Japan to meet an old friend whose life he saved years ago, and gets embroiled in a conspiracy involving yakuza and mutants. Wolverine comes to Japan to meet an old friend whose life he saved years ago, and gets embroiled in a conspiracy involving yakuza and mutants."
        },

        {
            id: 43,
            name: "Yoga",
            category: "Fitness",
            image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
            text: "Piece your workout together. You don’t need to get all your exercise at one time. Ten minutes morning, noon, and night can give much of the same benefit as 30 minutes all at once.",
        },
        {
            id: 44,
            name: "Gym",
            category: "Fitness",
            image: "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?cs=srgb&dl=pexels-the-lazy-artist-gallery-2247179.jpg&fm=jpg",
            text: "A gym, short for gymnasium (pl: gymnasiums or gymnasia), is an indoor venue for exercise and sports. The word is derived from the ancient Greek term gymnasion.[1] They are commonly found in athletic and fitness centers, and as activity and learning spaces in educational institutions. Gym is also slang for fitness centre, which is often an area for indoor recreation.",
        },
        {
            id: 45,
            name: "Strength Training",
            category: "Fitness",
            image: "https://img.freepik.com/free-photo/young-healthy-man-athlete-doing-exercise-with-ropes-gym-single-male-model-practicing-hard-training-his-upper-body-concept-healthy-lifestyle-sport-fitness-bodybuilding-wellbeing_155003-27879.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697846400&semt=ais",
            text: "Incorporate strength training exercises into your fitness routine to build muscle, increase metabolism, and enhance overall strength.",
        },
        {
            id: 46,
            name: "Flexibility and Stretching",
            category: "Fitness",
            image: "https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2022/12/21103347/best-stretching-equipment-960.png",
            text: "Don't forget to stretch! Maintaining flexibility through stretching exercises can prevent injuries and improve mobility.",
        },
        {
            id: 47,
            name: "Running",
            category: "Fitness",
            image: "https://c4.wallpaperflare.com/wallpaper/9/77/297/road-running-women-sport-wallpaper-preview.jpg",
            text: "Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot. Running is a type of gait characterized by an aerial phase in which all feet are above the ground (though there are exceptions).",
        },
        {
            id: 48,
            name: "Mindful",
            category: "Fitness",
            image: "https://media.istockphoto.com/id/1413996657/photo/fit-and-active-man-doing-yoga-meditating-and-relaxation-exercise-on-the-beach-calm-peaceful.webp?b=1&s=170667a&w=0&k=20&c=KQ4Hz55FY5opEeGUdHXzeEX0Q14ShL7lmioCOTwfAYE=",
            text: "Practice mindfulness during your workouts to stay present and focused, enhancing the mind-body connection.",
        },
        {
            id: 49,
            name: "Push Ups",
            category: "Fitness",
            image: "https://www.athletico.com/wp-content/uploads/2020/04/stay-home-fitness-challenge-featured.jpg",
            text: "They work the triceps, pectoral muscles, and shoulders. Using proper form, they can also strengthen the lower back and core by engaging (pulling in) the abdominal muscles. Push-ups are a fast and effective exercise for building strength.",
        },
        {
            id: 50,
            name: "Squat",
            category: "Fitness",
            image: "https://global-uploads.webflow.com/5fe33d036237252135e3e74d/625ffc55d7d41a2d3f41a24b_Benefits%20of%20Squats%20by%20cult.fit.jpg",
            text: "Squats burn calories and might help you lose weight. They also lower your chances of injuring your knees and ankles. As you exercise, the movement strengthens your tendons, bones, and ligaments around the leg muscles. It takes some of the weight off your knees and ankles.",
        },
        {
            id: 51,
            name: "Butt Kicks",
            category: "Fitness",
            image: "https://i.ytimg.com/vi/TVE_r1Af9r8/maxresdefault.jpg",
            text: "Instead of keeping your foot beneath your knee, bring your foot under your leg so your heel touches your buttocks. Then move forward as you continue this motion. You can start slowly and then pick up the pace. It should feel like you're running with high knees that touch your butt.",
        },
        {
            id: 52,
            name: "Jumping Jacks",
            category: "Fitness",
            image: "https://i.ytimg.com/vi/kvHitIwKiBo/maxresdefault.jpg",
            text: "Many people use low-impact jumping jacks to warm up their cardiovascular systems. Jumping jacks are a plyometric exercise that strengthens many of your muscles simultaneously. They also help you burn fat and build muscle without using weights. Jumping jacks are an excellent way to ensure good physical health.",
        },
        {
            id: 53,
            name: "Sit Up Exercise",
            category: "Fitness",
            image: "https://www.healthkart.com/connect/wp-content/uploads/2023/05/Sit-Ups-Exercises-Variations-and-More-_900.jpg",
            text: "Sit-ups begin with the practicing individual lying with their back on the floor, typically with the arms across the chest or hands behind the head and the knees and toes bent in an attempt to reduce stress on the back muscles and spine, and then elevating both the upper and lower vertebrae from the floor until ..",
        },
        {
            id: 54,
            name: "Outdoor Exercise",
            category: "Fitness",
            image: "https://maxxsportz.in/wp-content/uploads/2020/06/Outdoor-Fitness-Facility.jpg",
            text: "Fresh outdoor air and natural light invigorate and provide more energy for the mind and body. Sunshine provides the vitamin D that we need, you will get a suntan while training, and the sun will lift your spirits! Sunlight also enhances energy generation in the muscles and oxidation of the tissues.",
        },
        {
            id: 55,
            name: "Plank Exercise",
            category: "Fitness",
            image: "https://bod-blog-assets.prod.cd.beachbodyondemand.com/bod-blog/wp-content/uploads/2017/04/3-Plank-Exercises-for-Tight_-Flat-Abs-how-to-do-a-plank.jpg",
            text: "A plank exercise is the best exercise to strengthen your core and abdomen. These exercises strengthen your hips, lower back and abdomen and improve your body balance. It is used in yoga, by professional boxers and sports like hockey, cricket and football.",
        },
        {
            id: 56,
            name: "Wall Sit Exercise",
            category: "Fitness",
            image: "https://www.shape.com/thmb/ujDPZFY4zjfo-FUa1fJ-J8BT6bg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Wall-Sit-shutterstock_724300495-f9556a7acba2437684962d2ad7d8cc0d.jpg",
            text: "ean against a wall and slide down into a squat with your knees at a 90 degree angle. and your thighs parallel to the floor. keep your back flat against the wall. and your hands and arms away from your legs maintain this position by using the pressure from your back against the wall.",
        },
        {
            id: 57,
            name: "Artificial Intelligence",
            category: "Technology",
            image: "https://media.istockphoto.com/id/1034901762/photo/artificial-intelligence-and-future-concept.jpg?b=1&s=612x612&w=0&k=20&c=FIqKKZ0av1jOCyhMRr902POYe-FZwVib5KFKw17v-kA=",
            text: "Artificial intelligence is the intelligence of machines or software, as opposed to the intelligence of humans or animals. It is also the field of study in computer science that develops and studies intelligent machines. AI may also refer to the machines themselves",
        },
        {
            id: 58,
            name: " Internet of Things",
            category: "Technology",
            image: "https://images.squarespace-cdn.com/content/v1/55181a36e4b05c72e7f6a2a3/1644642964684-IFR844O0H5ODZMLIHES2/2-1-1.png?format=750w",
            text: "IoT connects everyday objects to the internet, enabling smart homes, cities, and industries through data-driven automation.",

        },
        {
            id: 59,
            name: "Robotics",
            category: "Technology",
            image: "https://c4.wallpaperflare.com/wallpaper/796/270/435/cyberpunk-digital-art-futuristic-wallpaper-preview.jpg",
            text: "Robotics is an interdisciplinary field that involves the design, construction, operation, and use of robots.Robotics integrates many fields that deal with specific aspects of robotics. For example, within mechanical engineering, the term robotics refers to the construction of the physical structures of a robots, while in computer science, robotics focuses on the study of robotic software.",
        },
        {
            id: 60,
            name: "Cybersecurity",
            category: "Technology",
            image: "https://m.economictimes.com/thumb/msid-95410508,width-1200,height-800,resizemode-4,imgsize-34558/cisos-pick-for-2023-cybersecurity-stack-whats-in-and-whats-out.jpg",
            text: "Cyber security is the application of technologies, processes, and controls to protect systems, networks, programs, devices and data from cyber attacks. It aims to reduce the risk of cyber attacks and protect against the unauthorised exploitation of systems, networks, and technologies.",
        },
        {
            id: 61,
            name: "5G Technology",
            category: "Technology",
            image: "https://img.freepik.com/free-photo/technology-particle-dots-5g-digital-corporate-background_53876-102624.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697846400&semt=ais",
            text: "5G technology revolutionizes wireless communication, providing faster speeds and low latency for a wide range of applications.",
        },
        {
            id: 62,
            name: "Machine Learning",
            category: "Technology",
            image: "https://thumbs.dreamstime.com/b/machine-learning-concept-as-modern-technology-machine-learning-concept-as-modern-technology-134730803.jpg",
            text: "Machine Learning is the field of study that gives computers the capability to learn without being explicitly programmed. ML is one of the most exciting technologies that one would have ever come across. As it is evident from the name, it gives the computer that makes it more similar to humans: The ability to learn. Machine learning is actively being used today, perhaps in many more places than one would expect",
        },
        {
            id: 63,
            name: "Space Exploration",
            category: "Technology",
            image: "https://media.istockphoto.com/id/182062885/photo/space-station-in-earth-orbit.jpg?s=612x612&w=0&k=20&c=F_P2YJ3QDbSW2n6dWkh6JNYeQGI1-2q-wOBk9-sw_Xo=",
            text: "Space exploration is investigation, by means of crewed and uncrewed spacecraft, of the reaches of the universe beyond Earth's atmosphere and the use of the information so gained to increase knowledge of the cosmos and benefit humanity.",
        },
        {
            id: 64,
            name: "Mobile Phone",
            category: "Technology",
            image: "https://candytech.in/wp-content/uploads/2021/09/gsmarena_001-2.jpg",
            text: "A mobile phone (or cellphone[a]) is a portable telephone that can make and receive calls over a radio frequency link while the user is moving within a telephone service area, as opposed to a fixed-location phone (landline phone). The radio frequency link establishes a connection to the switching systems of a mobile phone operator, which provides access to the public switched telephone network (PSTN).",
        },

        {
            id: 65,
            name: " Artificial Intelligent",
            category: "Technology",
            image: "https://m.economictimes.com/thumb/msid-61317633,width-1200,height-900,resizemode-4,imgsize-81068/artificial-intelligence-system-can-turn-low-resolution-images-into-hd-versions.jpg",
            text: "The history of artificial intelligence (AI) began in antiquity, with myths, stories and rumors of artificial beings endowed with intelligence or consciousness by master craftsmen. The seeds of modern AI were planted by philosophers who attempted to describe the process of human thinking as the mechanical manipulation of symbols.",
        },
        {
            id: 66,
            name: "Social Media",
            category: "Technology",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-amjaxvAgV1KZ3Wqzr020EE_H7ruh_z0skg&usqp=CAU",
            text: "Social media refers to the means of interactions among people in which they create, share, and/or exchange information and ideas in virtual communities and networks. The Office of Communications and Marketing manages the main Facebook, Twitter, Instagram, LinkedIn and YouTube accounts.",
        },

        {
            id: 67,
            name: "Chandrayan 3",
            category: "Technology",
            image: "https://ngs-space1.sgp1.digitaloceanspaces.com/am/uploads/mediaGallery/image/1692564108424.jpg-org",
            text: "Chandrayaan-3 is a follow-on mission to Chandrayaan-2 to demonstrate end-to-end capability in safe landing and roving on the lunar surface. It consists of Lander and Rover configuration. It will be launched by LVM3 from SDSC SHAR, Sriharikota. The propulsion module will carry the lander and rover configuration till 100 km lunar orbit.",
        },
        {
            id: 68,
            name: "Aditya L1",
            category: "Technology",
            image: "https://gumlet.assettype.com/bloombergquint%2F2023-09%2F9faad988-6752-4389-8766-d7902477b263%2FScreenshot_2023_09_02_125447.png?auto=format%2Ccompress&w=732",
            text: "Aditya L1 shall be the first space based Indian mission to study the Sun. The spacecraft shall be placed in a halo orbit around the Lagrange point 1 (L1) of the Sun-Earth system, which is about 1.5 million km from the Earth. A satellite placed in the halo orbit around the L1 point has the major advantage of continuously viewing the Sun without any occultation/eclipses.",
        },
        {
            id: 69,
            name: "Data Structure",
            category: "Technology",
            image: "https://msatechnosoft.in/blog/wp-content/uploads/2018/09/Data-Structure-tutorial-MSA-Technosoft.jpg",
            text: "A data structure is not only used for organizing the data. It is also used for processing, retrieving, and storing data. There are different basic and advanced types of data structures that are used in almost every program or software system that has been developed. So we must have good knowledge about data structures.",
        },
        {
            id: 70,
            name: "Cloud Computing",
            category: "Technology",
            image: "https://global.discourse-cdn.com/business7/uploads/hellohellohello/optimized/2X/c/ce30824d25abf064869f491955f3a942111aae10_2_690x388.jpeg",
            text: "Simply put, cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet (“the cloud”) to offer faster innovation, flexible resources, and economies of scale.",
        },
        {
            id: 71,
            name: "Dhosa",
            category: "Home",
            image: "https://e1.pxfuel.com/desktop-wallpaper/123/90/desktop-wallpaper-appetizer-healthy-masala-dosa.jpg",
            text: "A dosa is a thin savory pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice. Dosas are served hot, often with chutney and sambar. Dosa is a signature dish in South India and Sri Lanka, and is popularly served in their respective restaurants around the world",
        },
        {
            id: 72,
            name: "Poori",
            category: "Home",
            image: "https://t3.ftcdn.net/jpg/05/00/04/18/360_F_500041894_FIwsCmxDUhLayLRXYAIzpaDSAWaZ3IZe.jpg",
            text: "Poori or Puri is a traditional Indian fried bread that is delicious to enjoy with almost any main dish. It’s a simple unleavened bread made from just whole wheat flour, salt, and water. Here I share my poori recipe with step-by-step photos and the best tips for making puri at home – crispy, fluffy, and soft and I bet you’ll love making homemade puri to enjoy with your favorite meals!",
        },
        {
            id: 73,
            name: "Pizza",
            category: "Home",
            image: "https://t3.ftcdn.net/jpg/05/60/70/82/360_F_560708240_pMZPOuSfvblWGRoaiZFLT4wiFTzQPwQe.jpg",
            text: "Pizza is sold fresh or frozen, and whole or in portion-size slices. Methods have been developed to overcome challenges such as preventing the sauce from combining with the dough, and producing a crust that can be frozen and reheated without becoming rigid. There are frozen pizzas with raw ingredients and self-rising crusts. ",
        },

        {
            id: 74,
            name: "Drishyam 2",
            category: "Home",
            image: "https://m.economictimes.com/thumb/msid-97123793,width-1200,height-900,resizemode-4,imgsize-87908/drishyam-2-minted-rs-240-crore-in-eight-weeks-since-its-release-.jpg",
            text: "Drishyam 2: The Resumption, or simply Drishyam 2 is a 2021 Indian Malayalam-language crime thriller film written and directed by Jeethu Joseph and produced by Antony Perumbavoor through the company Aashirvad Cinemas.[2] A sequel to their 2013 film Drishyam and the second installment to the series, the film stars Mohanlal, Meena, Ansiba Hassan, Esther Anil. The story takes place six years after the events of Drishyam.[3]",
        },
        {
            id: 75,
            name: "Bhuj",
            category: "Home",
            image: "https://s3.india.com/wp-content/uploads/2020/06/bhuj-the-pride-of-india-movie-posters-released-main.jpg",
            text: "Bhuj: The Pride of India is a 2021 Indian Hindi-language war film[2] directed by Abhishek Dudhaiya.[3] Set during the Indo-Pakistani War of 1971, it follows Indian Air Force Squadron Leader Vijay Karnik — then in-charge of the Bhuj Air Force Base who, with the help of 300 local women of Madhapar Village, reconstructed the damaged landing strip in 72 hours.[4] The film features Ajay Devgn as Karnik, alongside Sanjay Dutt, Sonakshi Sinha, Nora Fatehi, Sharad Kelkar, Ammy Virk and Ihana Dhillon.",
        },
        {
            id: 76,
            name: "Big Boss 17",
            category: "Home",
            image: "https://www.auditionformdates.in/wp-content/uploads/2023/10/bigg-boss-17-contestants-List-with-photos.jpg",
            text: "Bigg Boss 17, which went on-air on October 15, has many interesting faces this year. One of the most controversial reality show on Hindi small screen is based on the theme of ‘Dil, Dimaag aur Dum’ this time. Apart from many interesting and new things, the house has a European design. The reality show has contestants, who have been a part of several controversies. The house features some very popular couples from the television industry like Ankita Lokhande- Vicky Jain and Aishwarya Sharma-Neil Bhat and also single contestants like Munawar Faruqui, Abhishek Kumar and many more. Let’s take a look at the names, who all are rocking this season. Netizens are already rooting for their favrouites.",
        },
        {
            id: 77,
            name: "Indian Idol",
            category: "Home",
            image: "https://www.koimoi.com/wp-content/new-galleries/2021/05/indian-idol-12-heres-why-neha-kakkar-himesh-reshammiya-vishal-dadlani-should-not-be-replaced-001.jpg",
            text: "Indian Idol is an Indian Hindi-language singing reality show of Sony TV. It is an Indian version of the British show Pop Idol and is part of Indian Idol series. It has aired on Sony Entertainment Television since 2004.[1] Originally produced by Miditech Studios and its iconic producer-brothers, Niret Alva, Nikhil J Alva and Nivedith Alva, the series was an instant success when it launched. The brothers produced the first 5 seasons of the series and were instrumental in laying the foundation for its future success.",
        },
        {
            id: 78,
            name: "Mother India",
            category: "Home",
            image: "https://m.media-amazon.com/images/M/MV5BNmM5NzkzNjUtMjJlZC00ZmY0LWJlMjUtN2QyY2IyZDIyYjUwXkEyXkFqcGdeQXVyODMyODMxNDY@._V1_.jpg",
            text: "Mother India played a key role in shaping the young Republic of India's national identity in its early years following independence from the British Raj, due to how the film was able to successfully convey a sense of Indian nationalism to the urban and rural masses.",
        },

        {
            id: 79,
            category: "Technology",
            name: "Space Exploration and Mars Missions",
            image: "https://cdn.mos.cms.futurecdn.net/tsRQNTJ8MhRUm32taXTdjm.jpg",
            text: "Learn about recent developments in space exploration, including Mars missions, space tourism, and the search for extraterrestrial life.This article explores recent breakthroughs in the field of quantum computing, including advancements in qubits and quantum algorithms, and their potential to revolutionize computing as we know it.Since then, AI has been used to help sequence RNA for vaccines and model human speech, technologies that rely on model- and algorithm-based machine learning and increasingly focus on perception, reasoning and generalization. With innovations like these, AI has re-taken center stage like never before — and it won’t cede the spotlight anytime soon.Manufacturing has been benefiting from AI for years. With AI-enabled robotic arms and other manufacturing bots dating back to the 1960s and 1970s, the industry has adapted well to the powers of AI. These industrial robots typically work alongside humans to perform a limited range of tasks like assembly and stacking, and predictive analysis sensors keep equipment running smoothly.Journalism is harnessing AI too, and will continue to benefit from it. One example can be seen in The Associated Press’ use of Automated Insights, which produces thousands of earning reports stories per year. But as generative AI writing tools, such as ChatGPT, enter the market, questions about their use in journalism abound."
        },
        {
            id: 80,
            category: "Technology",
            name: "Robotics and Automation Trends",
            image: "https://3.imimg.com/data3/IT/MI/MY-17635245/robotics-technology-srt-3-months-500x500.png",
            text: "Explore the latest trends in robotics and automation technologies, from self-driving cars to robotic healthcare assistants and manufacturing automation.This article explores recent breakthroughs in the field of quantum computing, including advancements in qubits and quantum algorithms, and their potential to revolutionize computing as we know it.Since then, AI has been used to help sequence RNA for vaccines and model human speech, technologies that rely on model- and algorithm-based machine learning and increasingly focus on perception, reasoning and generalization. With innovations like these, AI has re-taken center stage like never before — and it won’t cede the spotlight anytime soon.Manufacturing has been benefiting from AI for years. With AI-enabled robotic arms and other manufacturing bots dating back to the 1960s and 1970s, the industry has adapted well to the powers of AI. These industrial robots typically work alongside humans to perform a limited range of tasks like assembly and stacking, and predictive analysis sensors keep equipment running smoothly.Journalism is harnessing AI too, and will continue to benefit from it. One example can be seen in The Associated Press’ use of Automated Insights, which produces thousands of earning reports stories per year. But as generative AI writing tools, such as ChatGPT, enter the market, questions about their use in journalism abound."
        },
        {
            id: 81,
            category: "Technology",
            name: "Blockchain Technology and Cryptocurrency",
            image: "https://www.openaccessgovernment.org/wp-content/uploads/2019/10/dreamstime_xxl_126050352.jpg",
            text: "Explore the fundamentals of blockchain technology and the impact of cryptocurrencies like Bitcoin on the financial and technology sectors.This article explores recent breakthroughs in the field of quantum computing, including advancements in qubits and quantum algorithms, and their potential to revolutionize computing as we know it.Since then, AI has been used to help sequence RNA for vaccines and model human speech, technologies that rely on model- and algorithm-based machine learning and increasingly focus on perception, reasoning and generalization. With innovations like these, AI has re-taken center stage like never before — and it won’t cede the spotlight anytime soon.Manufacturing has been benefiting from AI for years. With AI-enabled robotic arms and other manufacturing bots dating back to the 1960s and 1970s, the industry has adapted well to the powers of AI. These industrial robots typically work alongside humans to perform a limited range of tasks like assembly and stacking, and predictive analysis sensors keep equipment running smoothly.Journalism is harnessing AI too, and will continue to benefit from it. One example can be seen in The Associated Press’ use of Automated Insights, which produces thousands of earning reports stories per year. But as generative AI writing tools, such as ChatGPT, enter the market, questions about their use in journalism abound."
        },
        {
            id: 82,
            category: "Home",
            name: "Healthy Habits for a Balanced Lifestyle",
            image: "https://possible.in/wp-content/uploads/2020/11/balanced-diet-chart-1-1024x683.jpg",
            text: "Explore healthy habits that contribute to a bscover practices that promote overall well-being."
        },
        {
            id: 83,
            category: "Fitness",
            title: "Nutrition Myths Debunked",
            image: "https://www.nocofitness.com/wp-content/uploads/2018/11/Nutrition-Myths-Debunked.jpg",
            content: "Separate fact from fiction as we debunk common nutrition myths. Learn about proper dietary choices and get evidence-based insights into maintaining a healthy diet.Flexibility workouts, such as stretching, don’t directly contribute to heart health. What they do is benefit musculoskeletal health, which enables you to stay flexible and free from joint pain, cramping and other muscular issues. That flexibility is a critical part of being able to maintain aerobic exercise and resistance training, says Stewart."
        },
        {
            id: 84,
            category: "Fitness",
            title: "Mind-Body Connection in Fitness",
            image: "https://www.hhhealth.com/wp-content/uploads/2022/07/AdobeStock_295859885-1024x480.jpeg",
            content: "Understand the mind-body connection in fitness and how mental well-being influences physical performance. Learn techniques for enhancing focus and motivation during workouts.Flexibility workouts, such as stretching, don’t directly contribute to heart health. What they do is benefit musculoskeletal health, which enables you to stay flexible and free from joint pain, cramping and other muscular issues. That flexibility is a critical part of being able to maintain aerobic exercise and resistance training, says Stewart."
        },




    ]);
    return (
        <>
            <Store.Provider value={[data, setData]}>
                {props.children}

            </Store.Provider>
        </>
    )

}
export default ConntextStore
