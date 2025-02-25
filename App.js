import React from 'react';
import ReactDOM from 'react-dom/client';

const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li> 
                </ul>

            </div>

        </div>
    )
}

// const resObj={
//         "data": {
//           id: "254106",
//           "name1": "McDonald's",
//           cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/c1415925-558e-4ef5-a2bf-2387a11f2bb6_254106.JPG",
//           locality: "Advant IT Park",
//           areaName: "Sector 135",
//           costForTwo: "₹400 for two",
//           cuisines: [
//             "American"
//           ],
//           avgRating: 4.5,
//           parentId: "630",
//           avgRatingString: "4.5",
//           totalRatingsString: "15K+",
//           promoted: true,
//           adTrackingId: "cid=24304113~p=0~adgrpid=24304113#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=254106~eid=196476f7-d20a-4bb2-81cd-dc5bd069579e~srvts=1737624134687~collid=83637",
//           sla: {
//             deliveryTime: 20,
//             lastMileTravel: 3.9,
//             serviceability: "SERVICEABLE",
//             slaString: "15-20 mins",
//             lastMileTravelString: "3.9 km",
//             iconType: "ICON_TYPE_EMPTY"
//            },
//           "availability": {
//             "nextCloseTime": "2025-01-24 00:45:00",
//             "opened": true
//           },
//           "badges": {
//             "imageBadges": [
//               {
//                 "imageId": "Rxawards/_CATEGORY-Burger.png",
//                 "description": "Delivery!"
//               }
//             ]
//           },
//           "isOpen": true,
//           "type": "F",
//           "badgesV2": {
//             "entityBadges": {
//               "textBased": {
                
//               },
//               "imageBased": {
//                 "badgeObject": [
//                   {
//                     "attributes": {
//                       "imageId": "Rxawards/_CATEGORY-Burger.png",
//                       "description": "Delivery!"
//                     }
//                   }
//                 ]
//               },
//               "textExtendedBadges": {
                
//               }
//             }
//           },
//           "aggregatedDiscountInfoV3": {
//             "header": "ITEMS",
//             "subHeader": "AT ₹49",
//             "logoCtx": {
//               "text": "BENEFITS"
//             }
//           },
//           "orderabilityCommunication": {
//             "title": {
              
//             },
//             "subTitle": {
              
//             },
//             "message": {
              
//             },
//             "customIcon": {
              
//             },
//             "commsStyling": {
              
//             }
//           },
//           "differentiatedUi": {
//             "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//             "differentiatedUiMediaDetails": {
//               "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//               "lottie": {
                
//               },
//               "video": {
                
//               }
//             }
//           },
//           "reviewsSummary": {
            
//           },
//           "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//           "restaurantOfferPresentationInfo": {
            
//           },
//           "externalRatings": {
//             "aggregatedRating": {
//               "rating": "--"
//             }
//           },
//           "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//           "campaignId": "24304113"
//         },
//         "analytics": {
          
//         },
//         "cta": {
//           "link": "swiggy://menu?restaurant_id=254106&source=collection&query=Burger",
//           "text": "RESTAURANT_MENU",
//           "type": "DEEPLINK"
//         },
//         "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        
      
// }
const resObj=[
    {
      "info": {
        "id": "70803",
        "name": "Pizza Hut",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/82e129a7-34f6-407f-b405-a3fd4e674c1c_70803.jpg",
        "locality": "Civil Lines",
        "areaName": "Civil Lines",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 4,
        "parentId": "721",
        "avgRatingString": "4.0",
        "totalRatingsString": "3.7K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.2,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-06 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.5",
            "ratingCount": "785"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/pizza-hut-civil-lines-rest70803",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "262097",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/cab874d5-c7ed-4122-9eb9-935992f4bcee_262097.JPG",
        "locality": "Pavilion Mall",
        "areaName": "Civil Lines",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "avgRating": 4.4,
        "parentId": "166",
        "avgRatingString": "4.4",
        "totalRatingsString": "11K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-06 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-Burger.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-Burger.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "60% OFF",
          "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/burger-king-pavilion-mall-civil-lines-rest262097",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "192204",
        "name": "Natural Soups & Shakes",
        "cloudinaryImageId": "ionso3xltrkoe4rs2nyh",
        "locality": "Civil Lines",
        "areaName": "Civil Lines",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "South Indian",
          "Pizzas",
          "Beverages",
          "Street Food",
          "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "144630",
        "avgRatingString": "4.6",
        "totalRatingsString": "46K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.7,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "1.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-06 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "bolt/Bolt%20Listing%20badge@3x.png",
              "description": "bolt!"
            },
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Dosa.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "bolt!",
                    "imageId": "bolt/Bolt%20Listing%20badge@3x.png"
                  }
                },
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Dosa.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.2",
            "ratingCount": "2.7K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/natural-soups-and-shakes-civil-lines-rest192204",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "93734",
        "name": "Subhash Vaishnu Dhaba",
        "cloudinaryImageId": "cc1197d8b24fc233b30c764bfbe98e27",
        "locality": "Ludhiana Junction",
        "areaName": "Ludhiana Junction",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "North Indian",
          "Thalis"
        ],
        "avgRating": 4.4,
        "parentId": "196283",
        "avgRatingString": "4.4",
        "totalRatingsString": "21K+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-07 01:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "62% OFF",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.6",
            "ratingCount": "58"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/subhash-vaishnu-dhaba-ludhiana-junction-rest93734",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "190938",
        "name": "Roshan Vaishno Dhaba",
        "cloudinaryImageId": "shehxzvyarapzhym8buc",
        "locality": "Ludhiana Junction",
        "areaName": "Mali Ganj, Dal Bazar",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Snacks"
        ],
        "avgRating": 4.6,
        "parentId": "171547",
        "avgRatingString": "4.6",
        "totalRatingsString": "12K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-07 00:15:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "586"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/roshan-vaishno-dhaba-junction-mali-ganj-dal-bazar-rest190938",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "66863",
        "name": "B7 by Basant (Feroze Gandhi Market)",
        "cloudinaryImageId": "gguhkbzd4d2ns4bkk2ut",
        "locality": "Gurdev Nagar",
        "areaName": "Feroze Gandhi Market",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Mughlai",
          "Chinese",
          "Tandoor"
        ],
        "avgRating": 4.6,
        "parentId": "38658",
        "avgRatingString": "4.6",
        "totalRatingsString": "15K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-06 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "newg.png",
              "description": "Gourmet"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Gourmet",
                    "imageId": "newg.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "75% OFF",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "8"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/b7-by-basant-feroze-gandhi-market-gurdev-nagar-feroze-gandhi-market-rest66863",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "66862",
        "name": "Basant (Fountain chowk)",
        "cloudinaryImageId": "05607f9a15b756c1bb8f41238f0b18c6",
        "locality": "Civil Lines",
        "areaName": "Cemetery Rd",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Chinese",
          "Pizzas",
          "South Indian",
          "Burgers"
        ],
        "avgRating": 4.6,
        "parentId": "42067",
        "avgRatingString": "4.6",
        "totalRatingsString": "46K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-06 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Noodles.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "5.5K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/basant-fountain-chowk-civil-lines-cemetery-rd-rest66862",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "66892",
        "name": "10 Durs",
        "cloudinaryImageId": "q1vsvlmyao0fkh5syrqk",
        "locality": "Civil Lines",
        "areaName": "Collage Road",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Momos",
          "rolls",
          "Continental",
          "Pizzas"
        ],
        "avgRating": 4.4,
        "parentId": "22710",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "15-20 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-06 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "617"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/10-durs-civil-lines-collage-road-rest66892",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "67313",
        "name": "Baba Chicken (Sarabha Nagar)",
        "cloudinaryImageId": "zi38hslwfjoook2wh5mo",
        "locality": "Shastri nagar",
        "areaName": "Sarabha Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Mughlai",
          "Biryani",
          "Snacks",
          "Tandoor",
          "Afghani"
        ],
        "avgRating": 4.5,
        "parentId": "459870",
        "avgRatingString": "4.5",
        "totalRatingsString": "33K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 4.2,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-07 00:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
              "description": "Delivery!"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "Delivery!",
                    "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "4.3K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/baba-chicken-sarabha-nagar-shastri-nagar-sarabha-nagar-rest67313",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "120052",
        "name": "Gyan Vaishnav Dhaba",
        "cloudinaryImageId": "cwpru1y9gvfobaf95z1y",
        "locality": "Industrial Area",
        "areaName": "Gill Road",
        "costForTwo": "₹249 for two",
        "cuisines": [
          "Thalis"
        ],
        "avgRating": 4.4,
        "parentId": "92369",
        "avgRatingString": "4.4",
        "totalRatingsString": "27K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 6.9,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "6.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-06 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹79"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "714"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/gyan-vaishnav-dhaba-industrial-area-gill-road-rest120052",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "86778",
        "name": "Vipan Vaishno Dhaba",
        "cloudinaryImageId": "d215cb747f85b7ebc7925a9670ded6ac",
        "locality": "Janakpuri",
        "areaName": "Janakpuri",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Thalis",
          "Chinese",
          "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "223907",
        "avgRatingString": "4.3",
        "totalRatingsString": "49K+",
        "sla": {
          "deliveryTime": 29,
          "lastMileTravel": 5.5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "5.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-07 00:15:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹119"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/vipan-vaishno-dhaba-janakpuri-rest86778",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "70544",
        "name": "Aman Chicken (Shastri Nagar)",
        "cloudinaryImageId": "7c7b7da0bddbbe4f48b6963af8614337",
        "locality": "Shastri nagar",
        "areaName": "Shastri Nagar",
        "costForTwo": "₹750 for two",
        "cuisines": [
          "Mughlai",
          "Biryani",
          "Chinese",
          "Tandoor"
        ],
        "avgRating": 4.2,
        "parentId": "30833",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-07 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹199"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.1",
            "ratingCount": "4.4K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/aman-chicken-shastri-nagar-shastri-nagar-rest70544",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "129854",
        "name": "K Chawla Ice Cream & Sweets",
        "cloudinaryImageId": "ui0avqud3o8i4jvhnrhl",
        "locality": "Industrial Area",
        "areaName": "Gill Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Ice Cream",
          "Snacks",
          "Fast Food",
          "Tandoor"
        ],
        "avgRating": 4.5,
        "parentId": "112659",
        "avgRatingString": "4.5",
        "totalRatingsString": "56K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 7.2,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "7.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-06 23:15:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹129"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.6",
            "ratingCount": "443"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/k-chawla-ice-cream-and-sweets-industrial-area-gill-road-rest129854",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "67230",
        "name": "Captain Sam's Pizza",
        "cloudinaryImageId": "e1a0833bdc40ad1f6fe3185f102c9382",
        "locality": "Malhar Road",
        "areaName": "Model Town",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Desserts",
          "Fast Food",
          "Snacks",
          "Pastas",
          "Beverages"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "382786",
        "avgRatingString": "4.2",
        "totalRatingsString": "8.9K+",
        "sla": {
          "deliveryTime": 31,
          "lastMileTravel": 4.8,
          "serviceability": "SERVICEABLE",
          "slaString": "30-35 mins",
          "lastMileTravelString": "4.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-07 04:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "ITEMS",
          "subHeader": "AT ₹29"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/captain-sams-pizza-malhar-road-model-town-rest67230",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "596619",
        "name": "Sardarji Malai Chaap",
        "cloudinaryImageId": "s8lakl2i3maz0iiw38it",
        "locality": "Tagore nagar",
        "areaName": "Civil Lines",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Tandoor",
          "Snacks"
        ],
        "avgRating": 4.2,
        "veg": true,
        "parentId": "305792",
        "avgRatingString": "4.2",
        "totalRatingsString": "2.3K+",
        "sla": {
          "deliveryTime": 14,
          "lastMileTravel": 2.1,
          "serviceability": "SERVICEABLE",
          "slaString": "10-15 mins",
          "lastMileTravelString": "2.1 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-07 00:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/sardarji-malai-chaap-tagore-nagar-civil-lines-rest596619",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "90589",
        "name": "Sharman Jain Sweets",
        "cloudinaryImageId": "lnwcyl9e4mngztyyn1fy",
        "locality": "Civil Lines",
        "areaName": "Rani Jhansi Road",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Sweets",
          "North Indian",
          "Chinese",
          "Snacks",
          "Italian"
        ],
        "avgRating": 4.4,
        "parentId": "21795",
        "avgRatingString": "4.4",
        "totalRatingsString": "2.6K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-06 22:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.4",
            "ratingCount": "3.2K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/sharman-jain-sweets-civil-lines-rani-jhansi-road-rest90589",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "210443",
        "name": "Raja Dhaba",
        "cloudinaryImageId": "stkannlvvor9qh8gyeii",
        "locality": "PAU",
        "areaName": "Hambran Road",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Chinese",
          "Pizzas",
          "South Indian",
          "Burgers",
          "Desserts"
        ],
        "avgRating": 4.4,
        "parentId": "165158",
        "avgRatingString": "4.4",
        "totalRatingsString": "7.2K+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 2.5,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-06 23:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹349",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "3.9",
            "ratingCount": "2.0K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/raja-dhaba-pau-hambran-road-rest210443",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "200320",
        "name": "Mr. Chef Food Court",
        "cloudinaryImageId": "4a193f305132e18b0a48587099f252f2",
        "locality": "Kapoor Hospital Road",
        "areaName": "Ludhiana Junction",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Burgers",
          "Fast Food",
          "Chinese",
          "Snacks"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "140165",
        "avgRatingString": "4.5",
        "totalRatingsString": "14K+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "20-25 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-06 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "--"
          }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/mr-chef-food-court-kapoor-hospital-road-ludhiana-junction-rest200320",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "205387",
        "name": "Kumar Ice Cream & Fast Food",
        "cloudinaryImageId": "aaelfrs4cgpskq8cq2dd",
        "locality": "Jawahar Nagar",
        "areaName": "Field Ganj",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Snacks",
          "South Indian",
          "Fast Food",
          "Pizzas"
        ],
        "avgRating": 4.5,
        "parentId": "121764",
        "avgRatingString": "4.5",
        "totalRatingsString": "5.3K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-06 22:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {
          
        },
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.0",
            "ratingCount": "369"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/kumar-ice-cream-and-fast-food-jawahar-nagar-field-ganj-rest205387",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "66658",
        "name": "Big N Meats",
        "cloudinaryImageId": "jszu32ih9yhjvk7ugzfk",
        "locality": "Gurdev Nagar",
        "areaName": "Pakhowal Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Mughlai",
          "Kebabs",
          "Continental",
          "Chinese",
          "Italian"
        ],
        "avgRating": 4.5,
        "parentId": "45652",
        "avgRatingString": "4.5",
        "totalRatingsString": "12K+",
        "sla": {
          "deliveryTime": 30,
          "lastMileTravel": 4,
          "serviceability": "SERVICEABLE",
          "slaString": "25-30 mins",
          "lastMileTravelString": "4.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2025-02-07 02:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        },
        "externalRatings": {
          "aggregatedRating": {
            "rating": "4.4",
            "ratingCount": "1.5K+"
          },
          "source": "GOOGLE",
          "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
      },
      "analytics": {
        "context": "seo-data-11331cfa-4f7d-4e79-a841-429951e546d2"
      },
      "cta": {
        "link": "https://www.swiggy.com/city/ludhiana/big-n-meats-gurdev-nagar-pakhowal-road-rest66658",
        "type": "WEBLINK"
      }
    }
  ]
 

const styleCard={
    backgroundColor:"#f0f0f0"
}


const RestaurantCard=({ resData })=>{
    // const {resData}=props;
    const name = resData?.info?.name || "Unknown Restaurant";
    const cuisines = resData?.info?.cuisines?.join(", ") || "Various Cuisines";
    const rating = resData?.info?.avgRating || "N/A";
    const deliveryTime = resData?.info?.sla?.deliveryTime || "N/A";
    const cloudinaryImageId = resData?.info?.cloudinaryImageId || "Image not there";
    return(
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + {cloudinaryImageId}}></img>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime}</h4>

        </div>
    )
}
const Body =()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            {resObj.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            {/* <RestaurantCard resData={resObj} /> */}
            {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/> */}
           
            </div>

        </div>
    )
}

const AppLayout=()=>{
    return(
        <div className="app">
            <Header/>
            <Body/>

        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)