const { Line } = require('messaging-api-line');

module.exports = {
    greeting = Line.createFlex('altText', [{
            "type": "bubble",
            "size": "mega",
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [{
                        "type": "image",
                        "size": "full",
                        "aspectMode": "cover",
                        "aspectRatio": "1:1",
                        "gravity": "center",
                        "url": "https://fsexchanger.files.wordpress.com/2020/04/tomswallpapers.com-110033.jpg"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                        "type": "text",
                                        "text": "ดูอัตราแลกเปลี่ยน",
                                        "size": "xl",
                                        "color": "#ffffff"
                                    }]
                                },
                                {
                                    "type": "box",
                                    "layout": "baseline",
                                    "contents": [{
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                                        },
                                        {
                                            "type": "text",
                                            "text": "4.0",
                                            "color": "#a9a9a9"
                                        }
                                    ],
                                    "spacing": "xs"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [{
                                            "type": "text",
                                            "text": "โปรดตรวจเช็คราคาก่อนซื้อ-ขายทุกครั้ง",
                                            "color": "#e6e6e6",
                                            "size": "md",
                                            "flex": 0,
                                            "align": "end"
                                        }],
                                        "flex": 0,
                                        "spacing": "lg"
                                    }]
                                }
                            ],
                            "spacing": "xs"
                        }],
                        "position": "absolute",
                        "offsetBottom": "0px",
                        "offsetStart": "0px",
                        "offsetEnd": "0px",
                        "paddingAll": "20px",
                        "backgroundColor": "#03303Acc"
                    }
                ],
                "paddingAll": "0px",
                "action": {
                    "type": "postback",
                    "label": "currency",
                    "data": "currency",
                    "displayText": "currency"
                }
            }
        },
        {
            "type": "bubble",
            "size": "mega",
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [{
                        "type": "image",
                        "url": "https://fsexchanger.files.wordpress.com/2020/04/tomswallpapers.com-88183.jpg",
                        "size": "full",
                        "aspectMode": "cover",
                        "aspectRatio": "1:1",
                        "gravity": "center"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                        "type": "text",
                                        "text": "ดูวิธีซื้อ-ขาย ดูกฏระเบียบ",
                                        "size": "xl",
                                        "color": "#ffffff"
                                    }]
                                },
                                {
                                    "type": "box",
                                    "layout": "baseline",
                                    "contents": [{
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                                        },
                                        {
                                            "type": "text",
                                            "text": "4.0",
                                            "color": "#a9a9a9"
                                        }
                                    ],
                                    "spacing": "xs"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [{
                                            "type": "text",
                                            "text": "ดูขั้นตอนซื้อขาย ข้อตกลงการใช้บริการ",
                                            "color": "#ffffff",
                                            "size": "md",
                                            "flex": 0,
                                            "align": "end",
                                            "action": {
                                                "type": "uri",
                                                "label": "guide",
                                                "uri": "line://app/1654168555-z90KwaXX",
                                                "altUri": {
                                                    "desktop": "https://liff.line.me/1654168555-z90KwaXX"
                                                }
                                            }
                                        }],
                                        "flex": 0,
                                        "spacing": "lg"
                                    }]
                                }
                            ],
                            "spacing": "xs"
                        }],
                        "position": "absolute",
                        "offsetBottom": "0px",
                        "offsetStart": "0px",
                        "offsetEnd": "0px",
                        "paddingAll": "20px",
                        "backgroundColor": "#006699cc"
                    }
                ],
                "paddingAll": "0px"
            }
        },
        {
            "type": "bubble",
            "size": "mega",
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [{
                        "type": "image",
                        "size": "full",
                        "aspectMode": "cover",
                        "aspectRatio": "1:1",
                        "gravity": "center",
                        "url": "https://fsexchanger.files.wordpress.com/2020/04/tomswallpapers.com-109478.jpg"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                        "type": "text",
                                        "text": "แจ้งโอนขาย แจ้งโอนซื้อ",
                                        "size": "xl",
                                        "color": "#ffffff"
                                    }]
                                },
                                {
                                    "type": "box",
                                    "layout": "baseline",
                                    "contents": [{
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                                        },
                                        {
                                            "type": "text",
                                            "text": "4.0",
                                            "color": "#a9a9a9"
                                        }
                                    ],
                                    "spacing": "xs"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [{
                                            "type": "text",
                                            "text": "ขายเหรียญ ซื้อเหรียญ",
                                            "color": "#e6e6e6",
                                            "size": "md",
                                            "flex": 0,
                                            "align": "end"
                                        }],
                                        "flex": 0,
                                        "spacing": "lg"
                                    }]
                                }
                            ],
                            "spacing": "xs"
                        }],
                        "position": "absolute",
                        "offsetBottom": "0px",
                        "offsetStart": "0px",
                        "offsetEnd": "0px",
                        "paddingAll": "20px",
                        "backgroundColor": "#996633cc"
                    }
                ],
                "paddingAll": "0px",
                "action": {
                    "type": "uri",
                    "label": "buy or sell",
                    "uri": "line://app/1654168555-vKg3wqZZ"
                }
            }
        },
        {
            "type": "bubble",
            "size": "mega",
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [{
                        "type": "image",
                        "url": "https://fsexchanger.files.wordpress.com/2020/04/tomswallpapers.com-101066.jpg",
                        "size": "full",
                        "aspectMode": "cover",
                        "aspectRatio": "1:1",
                        "gravity": "center"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                        "type": "text",
                                        "text": "ศูนย์สมาชิก ติดตามซื้อ-ขาย",
                                        "size": "xl",
                                        "color": "#ffffff"
                                    }]
                                },
                                {
                                    "type": "box",
                                    "layout": "baseline",
                                    "contents": [{
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                                        },
                                        {
                                            "type": "text",
                                            "text": "4.0",
                                            "color": "#a9a9a9"
                                        }
                                    ],
                                    "spacing": "xs"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [{
                                            "type": "text",
                                            "text": "ติดตามสถานะการซื้อขาย ข้อมูลธนาคาร",
                                            "color": "#e6e6e6",
                                            "size": "md",
                                            "flex": 0,
                                            "align": "end"
                                        }],
                                        "flex": 0,
                                        "spacing": "lg"
                                    }]
                                }
                            ],
                            "spacing": "xs"
                        }],
                        "position": "absolute",
                        "offsetBottom": "0px",
                        "offsetStart": "0px",
                        "offsetEnd": "0px",
                        "paddingAll": "20px",
                        "backgroundColor": "#005580cc"
                    }
                ],
                "paddingAll": "0px",
                "action": {
                    "type": "uri",
                    "label": "member",
                    "uri": "line://app/1654168555-w3326mkk",
                    "altUri": {
                        "desktop": "https://liff.line.me/1654168555-w3326mkk"
                    }
                }
            }
        },
        {
            "type": "bubble",
            "size": "mega",
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [{
                        "type": "image",
                        "url": "https://fsexchanger.files.wordpress.com/2020/04/tomswallpapers.com-18595.jpg",
                        "size": "full",
                        "aspectMode": "cover",
                        "aspectRatio": "1:1",
                        "gravity": "center"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                        "type": "text",
                                        "text": "สมัครสมาชิก ยินยันตัวตน",
                                        "size": "xl",
                                        "color": "#ffffff"
                                    }]
                                },
                                {
                                    "type": "box",
                                    "layout": "baseline",
                                    "contents": [{
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                                        },
                                        {
                                            "type": "text",
                                            "text": "4.0",
                                            "color": "#a9a9a9"
                                        }
                                    ],
                                    "spacing": "xs"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [{
                                            "type": "text",
                                            "text": "สมัครสมาชิก ส่งหลักฐานยืนยันตัาตน",
                                            "color": "#e6e6e6",
                                            "size": "md",
                                            "flex": 0,
                                            "align": "end"
                                        }],
                                        "flex": 0,
                                        "spacing": "lg"
                                    }]
                                }
                            ],
                            "spacing": "xs"
                        }],
                        "position": "absolute",
                        "offsetBottom": "0px",
                        "offsetStart": "0px",
                        "offsetEnd": "0px",
                        "paddingAll": "20px",
                        "backgroundColor": "#001a1acc"
                    }
                ],
                "paddingAll": "0px",
                "action": {
                    "type": "uri",
                    "label": "register or verify",
                    "uri": "line://app/1654168555-M0qDQvgg"
                }
            }
        },
        {
            "type": "bubble",
            "size": "mega",
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [{
                        "type": "image",
                        "url": "https://fsexchanger.files.wordpress.com/2020/04/r003.jpg",
                        "size": "full",
                        "aspectMode": "cover",
                        "aspectRatio": "1:1",
                        "gravity": "center"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                        "type": "text",
                                        "text": "ติดต่อ สอบถาม",
                                        "size": "xl",
                                        "color": "#ffffff",
                                        "align": "center"
                                    }]
                                },
                                {
                                    "type": "box",
                                    "layout": "baseline",
                                    "contents": [{
                                        "type": "text",
                                        "text": "ไลน์ ไอดี: @136mjagl (มี @ ด้วย)",
                                        "color": "#ffff00",
                                        "align": "center"
                                    }],
                                    "spacing": "xs"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [{
                                            "type": "text",
                                            "text": "เปิดตลอด 24 ชั่วโมง  โทร.0865001236",
                                            "color": "#e6e6e6",
                                            "size": "md",
                                            "flex": 0,
                                            "align": "end"
                                        }],
                                        "flex": 0,
                                        "spacing": "lg"
                                    }]
                                }
                            ],
                            "spacing": "xs"
                        }],
                        "position": "absolute",
                        "offsetBottom": "0px",
                        "offsetStart": "0px",
                        "offsetEnd": "0px",
                        "paddingAll": "20px",
                        "backgroundColor": "#006680cc"
                    }
                ],
                "paddingAll": "0px",
                "action": {
                    "type": "uri",
                    "label": "contact us",
                    "uri": "https://lin.ee/g5vsfzJ"
                }
            }
        },
        {
            "type": "bubble",
            "size": "mega",
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [{
                        "type": "image",
                        "size": "full",
                        "aspectMode": "cover",
                        "aspectRatio": "1:1",
                        "gravity": "center",
                        "url": "https://fsexchanger.files.wordpress.com/2020/04/l2-2500x16862-1.jpg"
                    },
                    {
                        "type": "image",
                        "url": "https://fsexchanger.files.wordpress.com/2020/05/bg0000-11.png",
                        "position": "absolute",
                        "aspectRatio": "1:1",
                        "size": "full",
                        "aspectMode": "cover"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                        "type": "text",
                                        "text": "เครื่องคำณวน เครื่องคิดเลข",
                                        "size": "xl",
                                        "color": "#ffffff"
                                    }]
                                },
                                {
                                    "type": "box",
                                    "layout": "baseline",
                                    "contents": [{
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gold_star_28.png"
                                        },
                                        {
                                            "type": "icon",
                                            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/review_gray_star_28.png"
                                        },
                                        {
                                            "type": "text",
                                            "text": "4.0",
                                            "color": "#a9a9a9"
                                        }
                                    ],
                                    "spacing": "xs"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                        "type": "box",
                                        "layout": "baseline",
                                        "contents": [{
                                            "type": "text",
                                            "text": "คำณวนอัตราแลกเปลี่ยนและค่าทำเนียม",
                                            "color": "#e6e6e6",
                                            "size": "md",
                                            "flex": 0,
                                            "align": "end"
                                        }],
                                        "flex": 0,
                                        "spacing": "lg"
                                    }]
                                }
                            ],
                            "spacing": "xs"
                        }],
                        "position": "absolute",
                        "offsetBottom": "0px",
                        "offsetStart": "0px",
                        "offsetEnd": "0px",
                        "paddingAll": "20px",
                        "backgroundColor": "#03303Acc"
                    }
                ],
                "paddingAll": "0px",
                "action": {
                    "type": "uri",
                    "label": "coculaters",
                    "url": "line://app/1654168555-joA0w577",
                    "altUri": {
                        "desktop": "https://liff.line.me/1654168555-joA0w577"
                    }
                }
            }
        },
        {
            "type": "bubble",
            "size": "mega",
            "body": {
                "type": "box",
                "layout": "vertical",
                "contents": [{
                        "type": "image",
                        "size": "full",
                        "aspectMode": "cover",
                        "aspectRatio": "1:1",
                        "gravity": "top",
                        "url": "https://fsexchanger998477843.files.wordpress.com/2020/01/cropped-mylogo640x640-4.jpg"
                    },
                    {
                        "type": "box",
                        "layout": "horizontal",
                        "contents": [{
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                        "type": "text",
                                        "text": "เข้าสู่เว็บไซต์",
                                        "size": "xl",
                                        "color": "#ffffff",
                                        "align": "center",
                                        "weight": "regular"
                                    }],
                                    "offsetTop": "132px"
                                },
                                {
                                    "type": "box",
                                    "layout": "horizontal",
                                    "contents": [{
                                        "type": "box",
                                        "layout": "vertical",
                                        "contents": [{
                                            "type": "text",
                                            "text": "www.fs-exchanger.com",
                                            "color": "#e6e6e6",
                                            "size": "md",
                                            "align": "center"
                                        }],
                                        "spacing": "lg",
                                        "offsetBottom": "0px"
                                    }],
                                    "offsetBottom": "-212px"
                                }
                            ],
                            "spacing": "xs"
                        }],
                        "position": "absolute",
                        "offsetBottom": "0px",
                        "offsetStart": "0px",
                        "offsetEnd": "0px",
                        "paddingAll": "20px",
                        "offsetTop": "0px"
                    }
                ],
                "paddingAll": "0px",
                "action": {
                    "type": "uri",
                    "label": "open url'",
                    "uri": "line://app/1654168555-kVyx8BAA",
                    "altUri": {
                        "desktop": "https://liff.line.me/1654168555-kVyx8BAA"
                    }
                }
            }
        }

    ])
};