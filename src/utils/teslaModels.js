const teslaModels = [
    {
        id: 1,
        name: "Model Y",
        range: 260,
        topSpeed: 135,
        milS: 6.6,
        price: 32890,
        videoUrl: "https://digitalassets.tesla.com/tesla-contents/video/upload/Homepage-Model-Y-Desktop-NA.mp4",
        interiorColour: "All Black",
        outerColour: "Midnight Silver Metallic",
        wheel: { name: "19’’ Gemini Jantlar", price: 0 },
        estimatedDelivery: "Tahmini Teslimat: Oca 2024 – Şub 2024",
        seatingLayout: {
            seat: 5,
            price: 0,
            features: [
                { id: 1, description: "Ayarlanabilir koltuk sırtına sahip ikinci sıra" },
                { id: 2, description: "Maksimum depolama alanı için katlanır düz ikinci sıra" },
                { id: 3, description: "Bagajda elektronik katlanır düz açma kolları" }
            ]
        },
        towHitch: false,
        enhancedAutoPilot: false,
        fullSelfDrivingCapability: false,
        mainImages: [
            "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY19,$PMNG,$WY19B,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&",
            "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY19,$PPSW,$WY19B,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&",
            "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY19,$PPSB,$WY19B,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&",
            "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY19,$PBSB,$WY19B,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&",
            "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY19,$PPMR,$WY19B,$INPB0&view=FRONT34&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&"
        ],
        outerDesignImages: [
            "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY19,$PMNG,$WY19B,$INPB0&view=SIDE&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&",
            "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY19,$PPSW,$WY19B,$INPB0&view=SIDE&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&",
            "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY19,$PPSB,$WY19B,$INPB0&view=SIDE&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&",
            "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY19,$PBSB,$WY19B,$INPB0&view=SIDE&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&",
            "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY19,$PPMR,$WY19B,$INPB0&view=SIDE&model=my&size=1920&bkba_opt=1&crop=1300,450,300,300&"
        ],
        interiorDesignImages: [
            "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$INPB0,$PPMR,$DV2W&view=STUD_SEAT&model=my&size=1441&bkba_opt=1&crop=0,0,0,0&",
            "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$INPW0,$PPMR,$DV2W&view=STUD_SEAT&model=my&size=1441&bkba_opt=1&crop=0,0,0,0&"
        ],
        wheelDesignImages: [
            "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY19,$PPSW,$WY19B,$INPW0&view=RIMCLOSEUP&model=my&size=1920&bkba_opt=1&crop=0,0,80,0&",
            "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTY19,$PPSW,$WY20P,$INPW0&view=RIMCLOSEUP&model=my&size=1920&bkba_opt=1&crop=0,0,80,0&"
        ],
        outerColours: [
            {
                price: 0,
                colorName: "Midnight Silver Metallic",
                imageUrl: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELY/UI/Paint_Silver_R1.png?"
            },
            {
                price: 1000,
                colorName: "Pearl White Multi-Coat",
                imageUrl: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_White.png?"
            },
            {
                price: 1000,
                colorName: "Deep Blue Metallic",
                imageUrl: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Blue.png?"
            },
            {
                price: 2000,
                colorName: "Solid Black",
                imageUrl: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/Paint_Black.png?"
            },
            {
                price: 2000,
                colorName: "Red Multi-Coat",
                imageUrl: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELY/UI/Paint_Red_R1.png?"
            },
        ],
        interiorColours: [
            {
                price: 0,
                colorName: "All Black",
                imageUrl: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/ui_swat_int_in3pb.png?"
            },
            {
                price: 1000,
                colorName: "Black and White",
                imageUrl: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODEL3/UI/ui_swat_int_white.png?"
            }
        ],
        wheels: [
            {
                price: 0,
                wheelName: "19’’ Gemini Jantlar",
                imageUrl: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELY/UI/gemini_wheels.png?"
            },
            {
                price: 2000,
                wheelName: "20’’ Induction Jantlar",
                imageUrl: "https://digitalassets.tesla.com/image/upload/f_auto,q_auto/prod/coin/static_assets/MODELY/UI/induction_wheels.png?"
            }
        ]
    }, {
        id: 2,
        name: "Model 3",
        range: 272,
        topSpeed: 140,
        milS: 5.8,
        price: 28490,
        thumbnail: "https://digitalassets-secure.tesla.com/image/upload/f_auto,q_auto/xufyfcvqhmq36szytod7.jpg",
        mainImages: [
            "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MT322,$PMNG,$W40B,$IBB1&view=STUD_FRONT34&model=m3&size=1920&bkba_opt=1&crop=1300,500,300,300&"
        ]
    }, {
        id: 3,
        name: "Model S",
        range: 405,
        topSpeed: 149,
        milS: 3.1,
        price: 71090,
        thumbnail: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto:best/Model-S-homepage-desktop",
        mainImages: [
            "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS13,$PPSW,$WS91,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=1&crop=1300,500,300,300&"
        ]
    }, {
        id: 4,
        name: "Model X",
        range: 348,
        topSpeed: 149,
        milS: 3.8,
        price: 68590,
        thumbnail: "https://digitalassets.tesla.com/tesla-contents/image/upload/h_1800,w_2880,c_fit,f_auto,q_auto:best/Homepage-Model-X-Desktop-LHD",
        mainImages: [
            "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTX15,$PPSW,$WX00,$IBE00&view=FRONT34&model=mx&size=1920&bkba_opt=1&crop=1300,600,300,230&"
        ]
    }
];

export default teslaModels;