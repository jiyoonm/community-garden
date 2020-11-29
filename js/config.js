var config = {
    style: 'mapbox://styles/jiyoonm/ckhxr0oqa11e21ap1km4bnvv6',
    accessToken: 'pk.eyJ1Ijoiaml5b29ubSIsImEiOiJja2h0dWQ1eHgwdTVuMzRvNWF1YmtyZ3ZoIn0._wCfAXbQt1pdKwXNynE6uw',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [{
            id: 'phl',
            title: 'Contested Space',
            image: '',
            description: "Today, the city has about 600 gardens in total, and 39 of these gardens remain in the Lower East Side –the highest concentration in the city, primarily in its Puerto Rican communities. These spaces are continually contested The Department of Housing Preservation and Development to produce parking lots and new housing developments",
            location: {
                center: [-73.9880396, 40.7357563],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [{
                layer: 'phl-city-limits',
                opacity: .45
            }],
            onChapterExit: [{
                layer: 'phl-city-limits',
                opacity: 0
            }]
        },
        {
            id: 'bike-lanes',
            title: 'The History of Loisaida',
            image: '',
            description: "Walking through any block in Loisaida, you will encounter a garden and the history of resistance that accompanies it. In our walk today, we will explore the history of the corner of E 9th St and Avenue C.",
            location: {
                center: [-73.9838537, 40.72587],
                zoom: 15,
                pitch: 55.50,
                bearing: -7.20
            },
            onChapterEnter: [{
                layer: 'east',
                opacity: .45
            }, {
                layer: 'line',
                opacity: 0
            }, {
                layer: 'pointt',
                opacity: 0
            }],
            onChapterExit: [{
                layer: 'east',
                opacity: 0
            }, ]
        },
        {
            id: 'indego',
            title: 'The Politics of Naming',
            image: "",
            description: "In our walk today, we will explore the shifts in names in the Lower East Side. The names 'Loisaida', 'Alphabet City', and the 'East Village' each depict the New York's history of racial dispossesion and community resilience present during its redevelopment.",
            location: {
                center: [-73.97829, 40.72509],
                zoom: 17,
                pitch: 45.00,
                bearing: -40.00
            },
            onChapterEnter: [{
                layer: 'line',
                opacity: 1
            }, {
                layer: 'pointt',
                opacity: 1
            }],
            onChapterExit: []
        },
        {
            id: 'belmont',
            title: 'Commercial Services',
            image: './images/bike.jpg',
            description: 'As seen by the CityBike map, the area is now most commonly known as the East Village. In the 1970s, real estate developers, coined the name "East Village" to link it with the Bohemian spirit rising in the area, while also raising real estate prices to be similar to those in the neighboring "West Village." As rent values climbed upwards, Latino families were forced out of their homes.',
            location: {
                center: [-73.97769, 40.72521],
                zoom: 19,
                pitch: 44.00,
                bearing: -40.00
            },
            onChapterEnter: [{
                layer: 'bike',
                opacity: .8
            }],
            onChapterExit: [{
                layer: 'bike',
                opacity: 0
            }]
        },
        {
            id: 'wiss',
            title: 'Loisaida Avenue',
            image: './images/sign.jpg',
            description: 'Because the avenues beyone 1st ave are designated by letters, the area is often referred to as Alphabet City. Prior to the 1970s, this area was committed to housing low-income groups. It became home to a large population of Latino residents, who termed the area Loisaida, Spanglish for the Lower East Side. In 1987, this history was able to be immortialized in a street sign on Avenue C.',
            location: {
                center: [-73.97799, 40.72532],
                zoom: 19.5,
                pitch: 47.50,
                bearing: 32.80
            },
            onChapterEnter: [{
                layer: 'esperanto',
                opacity: .8
            }],
            onChapterExit: [{
                layer: 'esperanto',
                opacity: 0
            }]
        },
        {
            id: 'pennypack',
            title: ' La Plaza Cultural',
            image: './images/plaza.jpg',
            description: 'As Loisaida became the East Village, La Plaza Cultural became a target for housing development by the city, confronted with the possibly of bulldozing at any time, despite the community activity in the garden.',
            location: {
                center: [-73.97831, 40.72523],
                zoom: 19.5,
                pitch: 43.50,
                bearing: 96.80
            },
            onChapterEnter: [{
                layer: 'plaza',
                opacity: .8
            }],
            onChapterExit: [{
                layer: 'plaza',
                opacity: 0
            }]
        }, {
            id: 'f',
            title: 'La Casita Garden',
            image: './images/garden.jpg',
            description: 'Community gardens became a way for Puerto Rican residents to take back the neighborhoods they lost due to gentirification, which is why many have a Casita. Casitas are small houses surrounded by gardens created to recall feel of the Puerto Rican countryside and signify pride of cultural heritage.',
            location: {
                center: [-73.9788851, 40.725047],
                zoom: 19.5,
                pitch: 60.00,
                bearing: -40.00
            },
            onChapterEnter: [{
                layer: 'garden',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'garden',
                opacity: 0
            }]
        }, {
            id: 'g',
            title: 'De Colores Community Yard',
            image: './images/garden2.jpg',
            description: 'Within 900 feet of walking, there have been four different community gardens, making this area the most conentrated in the city. Over their rich history, they have each developed their own culture and personality. De Colores in particular serves to bring color and light through bright decorations like flamingos and community-sourced paintings.',
            location: {
                center: [-73.9797418, 40.7254587],
                zoom: 19.5,
                pitch: 43.00,
                bearing: -40.00
            },
            onChapterEnter: [{
                layer: 'garden2',
                opacity: 1
            }],
            onChapterExit: [{
                layer: 'garden2',
                opacity: 0
            }]
        }
    ]
};