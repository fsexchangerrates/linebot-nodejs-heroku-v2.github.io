const { Line } = require('messaging-api-line');

const richMenuId1 = "hhhhhhhhhhhhhhhhhhhhhhhhhhh";
const richMenuId2 = "gggggggggggggggggggggg";

module.exports = (client, event) => {
    const { replyToken, postback, source } = event;

    const userId = source.userId;
    console.log("userId", userId);

    const data = postback.data;
    if (data === 'currency') {

        return client.reply(replyToken, [
            Line.createFlex('currency', {
                "type": "carousel",
                "contents": [{
                        "type": "bubble",
                        "size": "mega",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "image",
                                    "url": "https://fsexchanger998477843.files.wordpress.com/2020/06/pp720.jpg",
                                    "align": "center",
                                    "gravity": "center",
                                    "size": "full",
                                    "aspectRatio": "1:1",
                                    "aspectMode": "cover"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "text",
                                        "text": "ดูอัตราแลกเปลี่ยน",
                                        "color": "#ffffff",
                                        "size": "xl",
                                        "align": "center",
                                        "gravity": "center"
                                    }],
                                    "position": "absolute",
                                    "width": "100%",
                                    "offsetTop": "10%"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "text",
                                        "text": "Check Rates",
                                        "color": "#ffffff",
                                        "size": "xl",
                                        "align": "center",
                                        "gravity": "center"
                                    }],
                                    "position": "absolute",
                                    "width": "100%",
                                    "offsetBottom": "10%"
                                }
                            ],
                            "paddingAll": "0px",
                            "action": {
                                "type": "postback",
                                "label": "paypal",
                                "data": "paypal",
                                "displayText": "check paypal"
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
                                    "url": "https://fsexchanger998477843.files.wordpress.com/2020/06/pm720.jpg",
                                    "align": "center",
                                    "gravity": "center",
                                    "size": "full",
                                    "aspectRatio": "1:1",
                                    "aspectMode": "cover"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "text",
                                        "text": "ดูอัตราแลกเปลี่ยน",
                                        "color": "#ffffff",
                                        "size": "xl",
                                        "align": "center",
                                        "gravity": "center"
                                    }],
                                    "position": "absolute",
                                    "width": "100%",
                                    "offsetTop": "10%"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "text",
                                        "text": "Check Rates",
                                        "color": "#ffffff",
                                        "size": "xl",
                                        "align": "center",
                                        "gravity": "center"
                                    }],
                                    "position": "absolute",
                                    "width": "100%",
                                    "offsetBottom": "10%"
                                }
                            ],
                            "paddingAll": "0px",
                            "action": {
                                "type": "postback",
                                "label": "perfectmoney",
                                "data": "perfectmoney",
                                "displayText": "perfect money"
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
                                    "url": "https://fsexchanger998477843.files.wordpress.com/2020/06/wm720.jpg",
                                    "align": "center",
                                    "gravity": "center",
                                    "size": "full",
                                    "aspectRatio": "1:1",
                                    "aspectMode": "cover"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "text",
                                        "text": "ดูอัตราแลกเปลี่ยน",
                                        "color": "#ffffff",
                                        "size": "xl",
                                        "align": "center",
                                        "gravity": "center"
                                    }],
                                    "position": "absolute",
                                    "width": "100%",
                                    "offsetTop": "10%"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "text",
                                        "text": "Check Rates",
                                        "color": "#ffffff",
                                        "size": "xl",
                                        "align": "center",
                                        "gravity": "center"
                                    }],
                                    "position": "absolute",
                                    "width": "100%",
                                    "offsetBottom": "10%"
                                }
                            ],
                            "paddingAll": "0px",
                            "action": {
                                "type": "postback",
                                "label": "webmoney",
                                "data": "webmoney",
                                "displayText": "web money"
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
                                    "url": "https://fsexchanger998477843.files.wordpress.com/2020/06/nt720.jpg",
                                    "align": "center",
                                    "gravity": "center",
                                    "size": "full",
                                    "aspectRatio": "1:1",
                                    "aspectMode": "cover"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "text",
                                        "text": "ดูอัตราแลกเปลี่ยน",
                                        "color": "#ffffff",
                                        "size": "xl",
                                        "align": "center",
                                        "gravity": "center"
                                    }],
                                    "position": "absolute",
                                    "width": "100%",
                                    "offsetTop": "10%"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "text",
                                        "text": "Check Rates",
                                        "color": "#ffffff",
                                        "size": "xl",
                                        "align": "center",
                                        "gravity": "center"
                                    }],
                                    "position": "absolute",
                                    "width": "100%",
                                    "offsetBottom": "10%"
                                }
                            ],
                            "paddingAll": "0px",
                            "action": {
                                "type": "postback",
                                "label": "neteller",
                                "data": "neteller",
                                "displayText": "neteller"
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
                                    "url": "https://fsexchanger998477843.files.wordpress.com/2020/06/skr720.jpg",
                                    "align": "center",
                                    "gravity": "center",
                                    "size": "full",
                                    "aspectRatio": "1:1",
                                    "aspectMode": "cover"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "text",
                                        "text": "ดูอัตราแลกเปลี่ยน",
                                        "color": "#ffffff",
                                        "size": "xl",
                                        "align": "center",
                                        "gravity": "center"
                                    }],
                                    "position": "absolute",
                                    "width": "100%",
                                    "offsetTop": "10%"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "text",
                                        "text": "Check Rates",
                                        "color": "#ffffff",
                                        "size": "xl",
                                        "align": "center",
                                        "gravity": "center"
                                    }],
                                    "position": "absolute",
                                    "width": "100%",
                                    "offsetBottom": "10%"
                                }
                            ],
                            "paddingAll": "0px",
                            "action": {
                                "type": "postback",
                                "label": "skrill",
                                "data": "skrill",
                                "displayText": "skrill"
                            }
                        }
                    }
                ]
            })
        ]);

    } else if (data === 'paypal') {

        return client.reply(replyToken, [
            Line.createFlex('paypal', {
                "type": "carousel",
                "contents": [{
                        "type": "bubble",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "image",
                                    "url": "https://fsexchanger.files.wordpress.com/2020/04/unnamed-11.jpg",
                                    "size": "full",
                                    "aspectMode": "cover",
                                    "gravity": "top",
                                    "aspectRatio": "2:3"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "image",
                                        "url": "https://fsexchanger998477843.files.wordpress.com/2020/05/bg00111-e1588698155481.png",
                                        "size": "full",
                                        "aspectMode": "cover",
                                        "aspectRatio": "2:3",
                                        "offsetTop": "0px",
                                        "offsetStart": "0px",
                                        "offsetBottom": "0px",
                                        "offsetEnd": "0px",
                                        "gravity": "top"
                                    }],
                                    "offsetTop": "0px",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "position": "absolute"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                            "type": "spacer",
                                            "size": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                "type": "image",
                                                "url": "https://pngimg.com/uploads/paypal/paypal_PNG24.png",
                                                "size": "md",
                                                "align": "center",
                                                "gravity": "center",
                                                "aspectRatio": "3:1",
                                                "aspectMode": "cover"
                                            }],
                                            "offsetTop": "0px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [{
                                                        "type": "text",
                                                        "text": "ราคาที่รับซื้อ",
                                                        "size": "md",
                                                        "color": "#e6e6e6",
                                                        "weight": "bold",
                                                        "align": "center"
                                                    },
                                                    {
                                                        "type": "spacer",
                                                        "size": "md"
                                                    }
                                                ]
                                            }],
                                            "spacing": "sm",
                                            "margin": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ดอลลาร์สหรัฐฯ",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#03303A",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#03303Acc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ไทยบาท",
                                                        "size": "md",
                                                        "color": "#03303A",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#03303A",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$100 - $500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#03303A",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#03303Acc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 25.00",
                                                        "size": "md",
                                                        "color": "#03303A",
                                                        "weight": "regular",
                                                        "align": "center"
                                                    }],
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#03303A",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px",
                                                    "width": "40%"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$501 - $1,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#03303A",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#03303Acc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 25.50",
                                                        "size": "md",
                                                        "color": "#03303A",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#03303A",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,001 - $1,500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#03303A",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#03303Acc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 26.00",
                                                        "size": "md",
                                                        "color": "#03303A",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#03303A",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,501 - $2,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#03303A",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#03303Acc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 26.50",
                                                        "size": "md",
                                                        "color": "#03303A",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#03303A",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$2,001 - $10,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#03303A",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#03303Acc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 27.50",
                                                        "size": "md",
                                                        "color": "#03303A",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#000000",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "button",
                                                        "action": {
                                                            "type": "uri",
                                                            "label": "แจ้งโอนขายเหรียญ",
                                                            "uri": "line://app/1654395306-v5jawxag",
                                                            "altUri": {
                                                                "desktop": "https://liff.line.me/1654395306-v5jawxag"
                                                            }
                                                        },
                                                        "offsetTop": "0px",
                                                        "offsetBottom": "0px",
                                                        "offsetStart": "0px",
                                                        "offsetEnd": "0px",
                                                        "gravity": "center",
                                                        "style": "link",
                                                        "height": "sm",
                                                        "margin": "none",
                                                        "color": "#ffffff"
                                                    }],
                                                    "borderColor": "#ffffff",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "0px",
                                                    "spacing": "none",
                                                    "margin": "none",
                                                    "borderWidth": "1px",
                                                    "backgroundColor": "#03303Acc"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                            "type": "spacer",
                                                            "size": "xl"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": "สงวนลิขสิทธิ์ พ.ศ.2560 FS-EXCHANGER",
                                                            "size": "xxs",
                                                            "color": "#e6e6e6",
                                                            "align": "center",
                                                            "gravity": "center",
                                                            "weight": "regular",
                                                            "style": "italic"
                                                        }
                                                    ],
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetBottom": "0px",
                                                    "spacing": "none",
                                                    "margin": "none"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "xxl"
                                        }
                                    ],
                                    "position": "absolute",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "backgroundColor": "#03303A99",
                                    "paddingAll": "12px",
                                    "offsetTop": "0px",
                                    "paddingTop": "16px"
                                }
                            ],
                            "paddingAll": "0px"
                        }
                    },
                    {
                        "type": "bubble",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "image",
                                    "url": "https://fsexchanger.files.wordpress.com/2015/08/free-money-course-white.gif",
                                    "size": "full",
                                    "aspectMode": "cover",
                                    "gravity": "top",
                                    "aspectRatio": "2:3"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "image",
                                        "url": "https://fsexchanger998477843.files.wordpress.com/2020/05/bg00133-e1588704618700.png",
                                        "size": "full",
                                        "aspectMode": "cover",
                                        "aspectRatio": "2:3",
                                        "offsetTop": "0px",
                                        "offsetStart": "0px",
                                        "offsetBottom": "0px",
                                        "offsetEnd": "0px",
                                        "gravity": "top"
                                    }],
                                    "offsetTop": "0px",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "position": "absolute"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                            "type": "spacer",
                                            "size": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                "type": "image",
                                                "url": "https://pngimg.com/uploads/paypal/paypal_PNG24.png",
                                                "size": "md",
                                                "align": "center",
                                                "gravity": "center",
                                                "aspectRatio": "3:1",
                                                "aspectMode": "cover"
                                            }],
                                            "offsetTop": "0px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [{
                                                        "type": "text",
                                                        "text": "ราคาขาย",
                                                        "size": "md",
                                                        "color": "#e6e6e6",
                                                        "weight": "bold",
                                                        "align": "center"
                                                    },
                                                    {
                                                        "type": "spacer",
                                                        "size": "md"
                                                    }
                                                ]
                                            }],
                                            "margin": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ดอลลาร์สหรัฐฯ",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#03303A",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#03303Acc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ไทยบาท",
                                                        "size": "md",
                                                        "color": "#03303A",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#03303A",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$100 - $500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#03303A",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#03303Acc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 34.50",
                                                        "size": "md",
                                                        "color": "#03303A",
                                                        "weight": "regular",
                                                        "align": "center"
                                                    }],
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#03303A",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px",
                                                    "width": "40%"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$501 - $1,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#03303A",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#03303Acc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 34.00",
                                                        "size": "md",
                                                        "color": "#03303A",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#03303A",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,001 - $1,500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#03303A",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#03303Acc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 33.75",
                                                        "size": "md",
                                                        "color": "#03303A",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#03303A",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,501 - $2,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#03303A",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#03303Acc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 33.50",
                                                        "size": "md",
                                                        "color": "#03303A",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#03303A",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$2,001 - $10,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#03303A",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#03303Acc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 33.25",
                                                        "size": "md",
                                                        "color": "#03303A",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#000000",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "button",
                                                        "action": {
                                                            "type": "uri",
                                                            "label": "แจ้งโอนซื้อเหรียญ",
                                                            "uri": "line://app/1654395306-JDnq6ZqK",
                                                            "altUri": {
                                                                "desktop": "https://liff.line.me/1654395306-JDnq6ZqK"
                                                            }
                                                        },
                                                        "offsetTop": "0px",
                                                        "offsetBottom": "0px",
                                                        "offsetStart": "0px",
                                                        "offsetEnd": "0px",
                                                        "gravity": "center",
                                                        "style": "link",
                                                        "height": "sm",
                                                        "margin": "none",
                                                        "color": "#ffffff"
                                                    }],
                                                    "borderColor": "#ffffff",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "0px",
                                                    "spacing": "none",
                                                    "margin": "none",
                                                    "borderWidth": "1px",
                                                    "backgroundColor": "#03303Acc"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                            "type": "spacer",
                                                            "size": "xl"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": "สงวนลิขสิทธิ์ พ.ศ.2560 FS-EXCHANGER",
                                                            "size": "xxs",
                                                            "color": "#e6e6e6",
                                                            "align": "center",
                                                            "gravity": "center",
                                                            "weight": "regular",
                                                            "style": "italic"
                                                        }
                                                    ],
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetBottom": "0px",
                                                    "spacing": "none",
                                                    "margin": "none"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "xxl"
                                        }
                                    ],
                                    "position": "absolute",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "backgroundColor": "#03303Aaa",
                                    "paddingAll": "12px",
                                    "offsetTop": "0px",
                                    "paddingTop": "16px"
                                }
                            ],
                            "paddingAll": "0px"
                        }
                    }
                ]
            })
        ]);

    } else if (data === 'webmoney') {

        return client.reply(replyToken, [
            Line.createFlex('webmoney', {
                "type": "carousel",
                "contents": [{
                        "type": "bubble",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "image",
                                    "url": "https://fsexchanger.files.wordpress.com/2020/04/r201.jpg",
                                    "size": "full",
                                    "aspectMode": "cover",
                                    "gravity": "center",
                                    "aspectRatio": "2:3"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "image",
                                        "url": "https://www.tradingpedia.com/wp-content/uploads/Ads/webmoney1.png",
                                        "size": "full",
                                        "aspectMode": "cover",
                                        "aspectRatio": "2:3",
                                        "offsetTop": "0px",
                                        "offsetStart": "0px",
                                        "offsetBottom": "0px",
                                        "offsetEnd": "0px",
                                        "gravity": "center"
                                    }],
                                    "offsetTop": "0px",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "position": "absolute"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                            "type": "spacer",
                                            "size": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                "type": "image",
                                                "url": "https://pngimg.com/uploads/webmoney/webmoney_PNG3.png",
                                                "size": "lg",
                                                "align": "center",
                                                "gravity": "center",
                                                "aspectRatio": "4:1",
                                                "aspectMode": "cover"
                                            }],
                                            "offsetTop": "0px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [{
                                                        "type": "text",
                                                        "text": "ราคาที่รับซื้อ",
                                                        "size": "md",
                                                        "color": "#006699cc",
                                                        "weight": "bold",
                                                        "align": "center"
                                                    },
                                                    {
                                                        "type": "spacer",
                                                        "size": "md"
                                                    }
                                                ]
                                            }],
                                            "spacing": "sm",
                                            "margin": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ดอลลาร์สหรัฐฯ",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#006699",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#006699cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ไทยบาท",
                                                        "size": "md",
                                                        "color": "#006699cc",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#006699cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$100 - $500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#006699",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#006699cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 25.00",
                                                        "size": "md",
                                                        "color": "#006699",
                                                        "weight": "regular",
                                                        "align": "center"
                                                    }],
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#006699cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px",
                                                    "width": "40%"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$501 - $1,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#006699",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#006699cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 25.50",
                                                        "size": "md",
                                                        "color": "#006699cc",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#006699cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,001 - $1,500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#006699",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#006699cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 26.00",
                                                        "size": "md",
                                                        "color": "#006699",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#006699cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,501 - $2,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#006699",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#006699cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 26.50",
                                                        "size": "md",
                                                        "color": "#006699",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#006699cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$2,001 - $10,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#006699",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#006699cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 27.50",
                                                        "size": "md",
                                                        "color": "#006699",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#006699cc",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "button",
                                                        "action": {
                                                            "type": "uri",
                                                            "label": "แจ้งโอนขายเหรียญ",
                                                            "uri": "line://app/1654395306-v5jawxag",
                                                            "altUri": {
                                                                "desktop": "https://liff.line.me/1654395306-v5jawxag"
                                                            }
                                                        },
                                                        "offsetTop": "0px",
                                                        "offsetBottom": "0px",
                                                        "offsetStart": "0px",
                                                        "offsetEnd": "0px",
                                                        "gravity": "center",
                                                        "style": "link",
                                                        "height": "sm",
                                                        "margin": "none",
                                                        "color": "#ffffff"
                                                    }],
                                                    "borderColor": "#ffffff",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "0px",
                                                    "spacing": "none",
                                                    "margin": "none",
                                                    "borderWidth": "1px",
                                                    "backgroundColor": "#006699cc"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                            "type": "spacer",
                                                            "size": "xl"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": "สงวนลิขสิทธิ์ พ.ศ.2560 FS-EXCHANGER",
                                                            "size": "xxs",
                                                            "color": "#006699",
                                                            "align": "center",
                                                            "gravity": "center",
                                                            "weight": "regular",
                                                            "style": "italic"
                                                        }
                                                    ],
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetBottom": "0px",
                                                    "spacing": "none",
                                                    "margin": "none"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "xxl"
                                        }
                                    ],
                                    "position": "absolute",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "backgroundColor": "#e6e6e6aa",
                                    "paddingAll": "12px",
                                    "offsetTop": "0px",
                                    "paddingTop": "16px"
                                }
                            ],
                            "paddingAll": "0px"
                        }
                    },
                    {
                        "type": "bubble",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "image",
                                    "url": "https://fsexchanger.files.wordpress.com/2015/08/free-money-course-white.gif",
                                    "size": "full",
                                    "aspectMode": "cover",
                                    "gravity": "top",
                                    "aspectRatio": "2:3"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "image",
                                        "url": "https://www.tradingpedia.com/wp-content/uploads/Ads/webmoney1.png",
                                        "size": "full",
                                        "aspectMode": "cover",
                                        "aspectRatio": "2:3",
                                        "offsetTop": "0px",
                                        "offsetStart": "0px",
                                        "offsetBottom": "0px",
                                        "offsetEnd": "0px",
                                        "gravity": "center"
                                    }],
                                    "offsetTop": "0px",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "position": "absolute"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                            "type": "spacer",
                                            "size": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                "type": "image",
                                                "url": "https://pngimg.com/uploads/webmoney/webmoney_PNG3.png",
                                                "size": "lg",
                                                "align": "center",
                                                "gravity": "center",
                                                "aspectRatio": "4:1",
                                                "aspectMode": "cover"
                                            }],
                                            "offsetTop": "0px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [{
                                                        "type": "text",
                                                        "text": "ราคาขาย",
                                                        "size": "md",
                                                        "color": "#006699cc",
                                                        "weight": "bold",
                                                        "align": "center"
                                                    },
                                                    {
                                                        "type": "spacer",
                                                        "size": "md"
                                                    }
                                                ]
                                            }],
                                            "margin": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ดอลลาร์สหรัฐฯ",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#006699",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#006699cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ไทยบาท",
                                                        "size": "md",
                                                        "color": "#006699",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#006699cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$100 - $500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#006699",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#006699cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 34.50",
                                                        "size": "md",
                                                        "color": "#006699",
                                                        "weight": "regular",
                                                        "align": "center"
                                                    }],
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#006699cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px",
                                                    "width": "40%"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$501 - $1,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#006699",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#006699cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 34.00",
                                                        "size": "md",
                                                        "color": "#006699",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#006699cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,001 - $1,500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#006699",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#006699cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 33.75",
                                                        "size": "md",
                                                        "color": "#006699",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#006699cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,501 - $2,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#006699",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#006699cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 33.50",
                                                        "size": "md",
                                                        "color": "#006699",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#006699cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$2,001 - $10,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#006699",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#006699cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 33.25",
                                                        "size": "md",
                                                        "color": "#006699",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#006699cc",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "button",
                                                        "action": {
                                                            "type": "uri",
                                                            "label": "แจ้งโอนซื้อเหรียญ",
                                                            "uri": "line://app/1654395306-JDnq6ZqK",
                                                            "altUri": {
                                                                "desktop": "https://liff.line.me/1654395306-JDnq6ZqK"
                                                            }
                                                        },
                                                        "offsetTop": "0px",
                                                        "offsetBottom": "0px",
                                                        "offsetStart": "0px",
                                                        "offsetEnd": "0px",
                                                        "gravity": "center",
                                                        "style": "link",
                                                        "height": "sm",
                                                        "margin": "none",
                                                        "color": "#ffffff"
                                                    }],
                                                    "borderColor": "#ffffff",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "0px",
                                                    "spacing": "none",
                                                    "margin": "none",
                                                    "borderWidth": "1px",
                                                    "backgroundColor": "#006699cc"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                            "type": "spacer",
                                                            "size": "xl"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": "สงวนลิขสิทธิ์ พ.ศ.2560 FS-EXCHANGER",
                                                            "size": "xxs",
                                                            "color": "#006699",
                                                            "align": "center",
                                                            "gravity": "center",
                                                            "weight": "regular",
                                                            "style": "italic"
                                                        }
                                                    ],
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetBottom": "0px",
                                                    "spacing": "none",
                                                    "margin": "none"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "xxl"
                                        }
                                    ],
                                    "position": "absolute",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "backgroundColor": "#e6e6e6aa",
                                    "paddingAll": "12px",
                                    "offsetTop": "0px",
                                    "paddingTop": "16px"
                                }
                            ],
                            "paddingAll": "0px"
                        }
                    }
                ]
            })
        ]);

    } else if (data === 'perfectmoney') {

        return client.reply(replyToken, [
            Line.createFlex('perfectmoney', {
                "type": "carousel",
                "contents": [{
                        "type": "bubble",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "image",
                                    "url": "https://fsexchanger.files.wordpress.com/2020/04/tomswallpapers.com-109478.jpg",
                                    "size": "full",
                                    "aspectMode": "cover",
                                    "gravity": "center",
                                    "aspectRatio": "2:3"
                                },
                                {
                                    "type": "image",
                                    "url": "https://fsexchanger.files.wordpress.com/2020/05/bg0000-1.png",
                                    "position": "absolute",
                                    "align": "center",
                                    "gravity": "center",
                                    "size": "full",
                                    "aspectRatio": "2:3",
                                    "aspectMode": "cover",
                                    "offsetTop": "0px",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                            "type": "spacer",
                                            "size": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                "type": "image",
                                                "url": "https://indiaemoney.com//assets/imgs/perfectmoney.png",
                                                "size": "3xl",
                                                "align": "center",
                                                "gravity": "center",
                                                "aspectRatio": "6:1",
                                                "aspectMode": "fit"
                                            }],
                                            "offsetTop": "0px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [{
                                                        "type": "text",
                                                        "text": "ราคาที่รับซื้อ",
                                                        "size": "md",
                                                        "color": "#cc0000cc",
                                                        "weight": "bold",
                                                        "align": "center"
                                                    },
                                                    {
                                                        "type": "spacer",
                                                        "size": "md"
                                                    }
                                                ]
                                            }],
                                            "spacing": "sm",
                                            "margin": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ดอลลาร์สหรัฐฯ",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#cc0000",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#cc0000aa",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ไทยบาท",
                                                        "size": "md",
                                                        "color": "#cc0000cc",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#cc0000cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$100 - $500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#cc0000",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#cc0000aa",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 25.00",
                                                        "size": "md",
                                                        "color": "#cc0000cc",
                                                        "weight": "regular",
                                                        "align": "center"
                                                    }],
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#cc0000cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px",
                                                    "width": "40%"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$501 - $1,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#cc0000",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#cc0000aa",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 25.50",
                                                        "size": "md",
                                                        "color": "#cc0000cc",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#cc0000cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,001 - $1,500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#cc0000",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#cc0000aa",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 26.00",
                                                        "size": "md",
                                                        "color": "#cc0000cc",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#cc0000cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,501 - $2,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#cc0000",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#cc0000aa",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 26.50",
                                                        "size": "md",
                                                        "color": "#cc0000cc",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#cc0000cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$2,001 - $10,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#cc0000",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#cc0000aa",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 27.50",
                                                        "size": "md",
                                                        "color": "#cc0000cc",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#cc0000cc",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "button",
                                                        "action": {
                                                            "type": "uri",
                                                            "label": "แจ้งโอนขายเหรียญ",
                                                            "uri": "line://app/1654395306-v5jawxag",
                                                            "altUri": {
                                                                "desktop": "https://liff.line.me/1654395306-v5jawxag"
                                                            }
                                                        },
                                                        "offsetTop": "0px",
                                                        "offsetBottom": "0px",
                                                        "offsetStart": "0px",
                                                        "offsetEnd": "0px",
                                                        "gravity": "center",
                                                        "style": "link",
                                                        "height": "sm",
                                                        "margin": "none",
                                                        "color": "#ffffff"
                                                    }],
                                                    "borderColor": "#ffffff",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "0px",
                                                    "spacing": "none",
                                                    "margin": "none",
                                                    "borderWidth": "1px",
                                                    "backgroundColor": "#cc0000aa"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                            "type": "spacer",
                                                            "size": "xl"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": "สงวนลิขสิทธิ์ พ.ศ.2560 FS-EXCHANGER",
                                                            "size": "xxs",
                                                            "color": "#cc0000cc",
                                                            "align": "center",
                                                            "gravity": "center",
                                                            "weight": "regular",
                                                            "style": "italic"
                                                        }
                                                    ],
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetBottom": "0px",
                                                    "spacing": "none",
                                                    "margin": "none"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "xxl"
                                        }
                                    ],
                                    "position": "absolute",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "backgroundColor": "#e6e6e699",
                                    "paddingAll": "12px",
                                    "offsetTop": "0px",
                                    "paddingTop": "16px"
                                }
                            ],
                            "paddingAll": "0px"
                        }
                    },
                    {
                        "type": "bubble",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "image",
                                    "url": "https://fsexchanger.files.wordpress.com/2015/08/free-money-course-white.gif",
                                    "size": "full",
                                    "aspectMode": "cover",
                                    "gravity": "top",
                                    "aspectRatio": "2:3"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "image",
                                        "url": "https://www.tradingpedia.com/wp-content/uploads/Ads/webmoney1.png",
                                        "size": "full",
                                        "aspectMode": "cover",
                                        "aspectRatio": "2:3",
                                        "offsetTop": "0px",
                                        "offsetStart": "0px",
                                        "offsetBottom": "0px",
                                        "offsetEnd": "0px",
                                        "gravity": "center"
                                    }],
                                    "offsetTop": "0px",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "position": "absolute"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                            "type": "spacer",
                                            "size": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                "type": "image",
                                                "url": "https://indiaemoney.com//assets/imgs/perfectmoney.png",
                                                "size": "3xl",
                                                "align": "center",
                                                "gravity": "center",
                                                "aspectRatio": "6:1",
                                                "aspectMode": "cover"
                                            }],
                                            "offsetTop": "0px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [{
                                                        "type": "text",
                                                        "text": "ราคาขาย",
                                                        "size": "md",
                                                        "color": "#cc0000aa",
                                                        "weight": "bold",
                                                        "align": "center"
                                                    },
                                                    {
                                                        "type": "spacer",
                                                        "size": "md"
                                                    }
                                                ]
                                            }],
                                            "margin": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ดอลลาร์สหรัฐฯ",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#cc0000",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#cc0000aa",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ไทยบาท",
                                                        "size": "md",
                                                        "color": "#cc0000cc",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#cc0000cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$100 - $500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#cc0000",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#cc0000aa",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 34.50",
                                                        "size": "md",
                                                        "color": "#cc0000cc",
                                                        "weight": "regular",
                                                        "align": "center"
                                                    }],
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#cc0000cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px",
                                                    "width": "40%"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$501 - $1,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#cc0000",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#cc0000aa",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 34.00",
                                                        "size": "md",
                                                        "color": "#cc0000cc",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#cc0000cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,001 - $1,500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#cc0000",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#cc0000aa",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 33.75",
                                                        "size": "md",
                                                        "color": "#cc0000cc",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#cc0000cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,501 - $2,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#cc0000",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#cc0000aa",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 33.50",
                                                        "size": "md",
                                                        "color": "#cc0000cc",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#cc0000cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$2,001 - $10,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#cc0000",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#cc0000aa",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 33.25",
                                                        "size": "md",
                                                        "color": "#cc0000cc",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#cc0000cc",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "button",
                                                        "action": {
                                                            "type": "uri",
                                                            "label": "แจ้งโอนซื้อเหรียญ",
                                                            "uri": "line://app/1654395306-JDnq6ZqK",
                                                            "altUri": {
                                                                "desktop": "https://liff.line.me/1654395306-JDnq6ZqK"
                                                            }
                                                        },
                                                        "offsetTop": "0px",
                                                        "offsetBottom": "0px",
                                                        "offsetStart": "0px",
                                                        "offsetEnd": "0px",
                                                        "gravity": "center",
                                                        "style": "link",
                                                        "height": "sm",
                                                        "margin": "none",
                                                        "color": "#ffffff"
                                                    }],
                                                    "borderColor": "#ffffff",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "0px",
                                                    "spacing": "none",
                                                    "margin": "none",
                                                    "borderWidth": "1px",
                                                    "backgroundColor": "#cc0000aa"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                            "type": "spacer",
                                                            "size": "xl"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": "สงวนลิขสิทธิ์ พ.ศ.2560 FS-EXCHANGER",
                                                            "size": "xxs",
                                                            "color": "#cc0000cc",
                                                            "align": "center",
                                                            "gravity": "center",
                                                            "weight": "regular",
                                                            "style": "italic"
                                                        }
                                                    ],
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetBottom": "0px",
                                                    "spacing": "none",
                                                    "margin": "none"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "xxl"
                                        }
                                    ],
                                    "position": "absolute",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "backgroundColor": "#e6e6e6aa",
                                    "paddingAll": "12px",
                                    "offsetTop": "0px",
                                    "paddingTop": "16px"
                                }
                            ],
                            "paddingAll": "0px"
                        }
                    }
                ]
            })
        ]);

    } else if (data === 'neteller') {

        return client.reply(replyToken, [
            Line.createFlex('neteller', {
                "type": "carousel",
                "contents": [{
                        "type": "bubble",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "image",
                                    "url": "https://fsexchanger.files.wordpress.com/2020/04/r26-1.jpg",
                                    "size": "full",
                                    "aspectMode": "cover",
                                    "gravity": "top",
                                    "aspectRatio": "2:3"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "image",
                                        "url": "https://fsexchanger.files.wordpress.com/2020/05/bg0000-2.png",
                                        "size": "full",
                                        "aspectMode": "cover",
                                        "aspectRatio": "2:3",
                                        "offsetTop": "0px",
                                        "offsetStart": "0px",
                                        "offsetBottom": "0px",
                                        "offsetEnd": "0px",
                                        "gravity": "center",
                                        "align": "center"
                                    }],
                                    "offsetTop": "0px",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "position": "absolute"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                            "type": "spacer",
                                            "size": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                "type": "image",
                                                "url": "https://wikiwallet.com/dist/images/neteller_header_fx.png",
                                                "size": "xl",
                                                "align": "center",
                                                "gravity": "center",
                                                "aspectRatio": "4:1",
                                                "aspectMode": "cover"
                                            }],
                                            "offsetTop": "0px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [{
                                                        "type": "text",
                                                        "text": "ราคาที่รับซื้อ",
                                                        "size": "md",
                                                        "color": "#e6e6e6",
                                                        "weight": "bold",
                                                        "align": "center"
                                                    },
                                                    {
                                                        "type": "spacer",
                                                        "size": "md"
                                                    }
                                                ]
                                            }],
                                            "spacing": "sm",
                                            "margin": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ดอลลาร์สหรัฐฯ",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#133a13",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#133a13cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ไทยบาท",
                                                        "size": "md",
                                                        "color": "#133a13",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#133a13cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$100 - $500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#133a13",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#133a13cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 25.00",
                                                        "size": "md",
                                                        "color": "#133a13",
                                                        "weight": "regular",
                                                        "align": "center"
                                                    }],
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#133a13cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px",
                                                    "width": "40%"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$501 - $1,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#133a13",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#133a13cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 25.50",
                                                        "size": "md",
                                                        "color": "#133a13",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#133a13cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,001 - $1,500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#133a13",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#133a13cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 26.00",
                                                        "size": "md",
                                                        "color": "#133a13",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#133a13cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,501 - $2,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#133a13",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#133a13cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 26.50",
                                                        "size": "md",
                                                        "color": "#133a13",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#133a13cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$2,001 - $10,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#03303A",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#133a13cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 27.50",
                                                        "size": "md",
                                                        "color": "#133a13",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#133a13cc",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "button",
                                                        "action": {
                                                            "type": "uri",
                                                            "label": "แจ้งโอนขายเหรียญ",
                                                            "uri": "line://app/1654395306-v5jawxag",
                                                            "altUri": {
                                                                "desktop": "https://liff.line.me/1654395306-v5jawxag"
                                                            }
                                                        },
                                                        "offsetTop": "0px",
                                                        "offsetBottom": "0px",
                                                        "offsetStart": "0px",
                                                        "offsetEnd": "0px",
                                                        "gravity": "center",
                                                        "style": "link",
                                                        "height": "sm",
                                                        "margin": "none",
                                                        "color": "#ffffff"
                                                    }],
                                                    "borderColor": "#ffffff",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "0px",
                                                    "spacing": "none",
                                                    "margin": "none",
                                                    "borderWidth": "1px",
                                                    "backgroundColor": "#133a13cc"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                            "type": "spacer",
                                                            "size": "xl"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": "สงวนลิขสิทธิ์ พ.ศ.2560 FS-EXCHANGER",
                                                            "size": "xxs",
                                                            "color": "#e6e6e6",
                                                            "align": "center",
                                                            "gravity": "center",
                                                            "weight": "regular",
                                                            "style": "italic"
                                                        }
                                                    ],
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetBottom": "0px",
                                                    "spacing": "none",
                                                    "margin": "none"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "xxl"
                                        }
                                    ],
                                    "position": "absolute",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "backgroundColor": "#267326aa",
                                    "paddingAll": "12px",
                                    "offsetTop": "0px",
                                    "paddingTop": "16px"
                                }
                            ],
                            "paddingAll": "0px"
                        }
                    },
                    {
                        "type": "bubble",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "image",
                                    "url": "https://fsexchanger.files.wordpress.com/2015/08/free-money-course-white.gif",
                                    "size": "full",
                                    "aspectMode": "cover",
                                    "gravity": "top",
                                    "aspectRatio": "2:3"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "image",
                                        "url": "https://fsexchanger998477843.files.wordpress.com/2020/05/bg00133-e1588704618700.png",
                                        "size": "full",
                                        "aspectMode": "cover",
                                        "aspectRatio": "2:3",
                                        "offsetTop": "0px",
                                        "offsetStart": "0px",
                                        "offsetBottom": "0px",
                                        "offsetEnd": "0px",
                                        "gravity": "top"
                                    }],
                                    "offsetTop": "0px",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "position": "absolute"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                            "type": "spacer",
                                            "size": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                "type": "image",
                                                "url": "https://wikiwallet.com/dist/images/neteller_header_fx.png",
                                                "size": "xl",
                                                "align": "center",
                                                "gravity": "center",
                                                "aspectRatio": "4:1",
                                                "aspectMode": "cover"
                                            }],
                                            "offsetTop": "0px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [{
                                                        "type": "text",
                                                        "text": "ราคาขาย",
                                                        "size": "md",
                                                        "color": "#e6e6e6",
                                                        "weight": "bold",
                                                        "align": "center"
                                                    },
                                                    {
                                                        "type": "spacer",
                                                        "size": "md"
                                                    }
                                                ]
                                            }],
                                            "margin": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ดอลลาร์สหรัฐฯ",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#133a13",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#133a13cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ไทยบาท",
                                                        "size": "md",
                                                        "color": "#133a13",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#133a13cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$100 - $500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#133a13",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#133a13cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 34.50",
                                                        "size": "md",
                                                        "color": "#133a13",
                                                        "weight": "regular",
                                                        "align": "center"
                                                    }],
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#133a13cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px",
                                                    "width": "40%"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$501 - $1,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#133a13",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#133a13cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 34.00",
                                                        "size": "md",
                                                        "color": "#133a13",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#133a13cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,001 - $1,500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#133a13",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#133a13cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 33.75",
                                                        "size": "md",
                                                        "color": "#133a13",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#133a13cc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,501 - $2,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#133a13",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#133a13cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 33.50",
                                                        "size": "md",
                                                        "color": "#133a13",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#133a13",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$2,001 - $10,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#133a13",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#133a13cc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 33.25",
                                                        "size": "md",
                                                        "color": "#133a13",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#133a13cc",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "button",
                                                        "action": {
                                                            "type": "uri",
                                                            "label": "แจ้งโอนซื้อเหรียญ",
                                                            "uri": "line://app/1654395306-JDnq6ZqK",
                                                            "altUri": {
                                                                "desktop": "https://liff.line.me/1654395306-JDnq6ZqK"
                                                            }
                                                        },
                                                        "offsetTop": "0px",
                                                        "offsetBottom": "0px",
                                                        "offsetStart": "0px",
                                                        "offsetEnd": "0px",
                                                        "gravity": "center",
                                                        "style": "link",
                                                        "height": "sm",
                                                        "margin": "none",
                                                        "color": "#ffffff"
                                                    }],
                                                    "borderColor": "#ffffff",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "0px",
                                                    "spacing": "none",
                                                    "margin": "none",
                                                    "borderWidth": "1px",
                                                    "backgroundColor": "#133a13cc"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                            "type": "spacer",
                                                            "size": "xl"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": "สงวนลิขสิทธิ์ พ.ศ.2560 FS-EXCHANGER",
                                                            "size": "xxs",
                                                            "color": "#e6e6e6",
                                                            "align": "center",
                                                            "gravity": "center",
                                                            "weight": "regular",
                                                            "style": "italic"
                                                        }
                                                    ],
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetBottom": "0px",
                                                    "spacing": "none",
                                                    "margin": "none"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "xxl"
                                        }
                                    ],
                                    "position": "absolute",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "backgroundColor": "#267326aa",
                                    "paddingAll": "12px",
                                    "offsetTop": "0px",
                                    "paddingTop": "16px"
                                }
                            ],
                            "paddingAll": "0px"
                        }
                    }
                ]
            })
        ]);

    } else if (data === 'skrill') {

        return client.reply(replyToken, [
            Line.createFlex('skrill', {
                "type": "carousel",
                "contents": [{
                        "type": "bubble",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "image",
                                    "url": "https://fsexchanger.files.wordpress.com/2020/04/unnamed-2.jpg",
                                    "size": "full",
                                    "aspectMode": "cover",
                                    "gravity": "center",
                                    "aspectRatio": "2:3",
                                    "align": "center"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "image",
                                        "url": "https://fsexchanger998477843.files.wordpress.com/2020/05/bg00133-e1588704618700.png",
                                        "size": "full",
                                        "aspectMode": "cover",
                                        "aspectRatio": "2:3",
                                        "offsetTop": "0px",
                                        "offsetStart": "0px",
                                        "offsetBottom": "0px",
                                        "offsetEnd": "0px",
                                        "gravity": "center",
                                        "align": "center"
                                    }],
                                    "offsetTop": "0px",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "position": "absolute"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                            "type": "spacer",
                                            "size": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                "type": "image",
                                                "url": "https://www.casinorunner.com/wp-content/uploads/2018/06/skrill_logo.png",
                                                "size": "sm",
                                                "align": "center",
                                                "gravity": "center",
                                                "aspectRatio": "3:1",
                                                "aspectMode": "cover"
                                            }],
                                            "offsetTop": "0px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [{
                                                        "type": "text",
                                                        "text": "ราคาที่รับซื้อ",
                                                        "size": "md",
                                                        "color": "#e6e6e6",
                                                        "weight": "bold",
                                                        "align": "center"
                                                    },
                                                    {
                                                        "type": "spacer",
                                                        "size": "md"
                                                    }
                                                ]
                                            }],
                                            "spacing": "sm",
                                            "margin": "lg"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ดอลลาร์สหรัฐฯ",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#4d004d",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#4d004dcc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ไทยบาท",
                                                        "size": "md",
                                                        "color": "#4d004d",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#4d004dcc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$100 - $500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#4d004d",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#4d004dcc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 25.00",
                                                        "size": "md",
                                                        "color": "#4d004d",
                                                        "weight": "regular",
                                                        "align": "center"
                                                    }],
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#4d004dcc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px",
                                                    "width": "40%"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$501 - $1,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#4d004d",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#4d004dcc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 25.50",
                                                        "size": "md",
                                                        "color": "#4d004d",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#4d004dcc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,001 - $1,500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#4d004d",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#4d004dcc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 26.00",
                                                        "size": "md",
                                                        "color": "#4d004d",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#4d004dcc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,501 - $2,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#4d004d",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#4d004dcc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 26.50",
                                                        "size": "md",
                                                        "color": "#4d004d",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#4d004dcc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$2,001 - $10,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#4d004d",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#4d004dcc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 27.50",
                                                        "size": "md",
                                                        "color": "#4d004d",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#4d004dcc",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "button",
                                                        "action": {
                                                            "type": "uri",
                                                            "label": "แจ้งโอนขายเหรียญ",
                                                            "uri": "line://app/1654395306-v5jawxag",
                                                            "altUri": {
                                                                "desktop": "https://liff.line.me/1654395306-v5jawxag"
                                                            }
                                                        },
                                                        "offsetTop": "0px",
                                                        "offsetBottom": "0px",
                                                        "offsetStart": "0px",
                                                        "offsetEnd": "0px",
                                                        "gravity": "center",
                                                        "style": "link",
                                                        "height": "sm",
                                                        "margin": "none",
                                                        "color": "#ffffff"
                                                    }],
                                                    "borderColor": "#ffffff",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "0px",
                                                    "spacing": "none",
                                                    "margin": "none",
                                                    "borderWidth": "1px",
                                                    "backgroundColor": "#4d004dcc"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                            "type": "spacer",
                                                            "size": "xl"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": "สงวนลิขสิทธิ์ พ.ศ.2560 FS-EXCHANGER",
                                                            "size": "xxs",
                                                            "color": "#e6e6e6",
                                                            "align": "center",
                                                            "gravity": "center",
                                                            "weight": "regular",
                                                            "style": "italic"
                                                        }
                                                    ],
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetBottom": "0px",
                                                    "spacing": "none",
                                                    "margin": "none"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "xxl"
                                        }
                                    ],
                                    "position": "absolute",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "backgroundColor": "#4d004d77",
                                    "paddingAll": "12px",
                                    "offsetTop": "0px",
                                    "paddingTop": "16px"
                                }
                            ],
                            "paddingAll": "0px"
                        }
                    },
                    {
                        "type": "bubble",
                        "body": {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [{
                                    "type": "image",
                                    "url": "https://fsexchanger.files.wordpress.com/2015/08/free-money-course-white.gif",
                                    "size": "full",
                                    "aspectMode": "cover",
                                    "gravity": "top",
                                    "aspectRatio": "2:3"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                        "type": "image",
                                        "url": "https://fsexchanger998477843.files.wordpress.com/2020/05/bg00133-e1588704618700.png",
                                        "size": "full",
                                        "aspectMode": "cover",
                                        "aspectRatio": "2:3",
                                        "offsetTop": "0px",
                                        "offsetStart": "0px",
                                        "offsetBottom": "0px",
                                        "offsetEnd": "0px",
                                        "gravity": "top"
                                    }],
                                    "offsetTop": "0px",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "position": "absolute"
                                },
                                {
                                    "type": "box",
                                    "layout": "vertical",
                                    "contents": [{
                                            "type": "spacer",
                                            "size": "md"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                "type": "image",
                                                "url": "https://www.casinorunner.com/wp-content/uploads/2018/06/skrill_logo.png",
                                                "size": "sm",
                                                "align": "center",
                                                "gravity": "center",
                                                "aspectRatio": "3:1",
                                                "aspectMode": "cover"
                                            }],
                                            "offsetTop": "0px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                "type": "box",
                                                "layout": "vertical",
                                                "contents": [{
                                                        "type": "text",
                                                        "text": "ราคาขาย",
                                                        "size": "md",
                                                        "color": "#e6e6e6",
                                                        "weight": "bold",
                                                        "align": "center"
                                                    },
                                                    {
                                                        "type": "spacer",
                                                        "size": "md"
                                                    }
                                                ]
                                            }],
                                            "margin": "lg"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ดอลลาร์สหรัฐฯ",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#4d004d",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#4d004dcc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "ไทยบาท",
                                                        "size": "md",
                                                        "color": "#4d004d",
                                                        "weight": "bold",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "40%",
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#4d004dcc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$100 - $500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#4d004d",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#4d004dcc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 35.00",
                                                        "size": "md",
                                                        "color": "#4d004d",
                                                        "weight": "regular",
                                                        "align": "center"
                                                    }],
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#4d004dcc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px",
                                                    "width": "40%"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$501 - $1,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#4d004d",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#4d004dcc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 34.50",
                                                        "size": "md",
                                                        "color": "#4d004d",
                                                        "weight": "regular",
                                                        "align": "center"
                                                    }],
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#4d004dcc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px",
                                                    "width": "40%"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,001 - $1,500",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#4d004d",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#4d004dcc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 34.25",
                                                        "size": "md",
                                                        "color": "#4d004d",
                                                        "weight": "regular",
                                                        "align": "center"
                                                    }],
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#4d004dcc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px",
                                                    "width": "40%"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$1,501 - $2,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#4d004d",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#4d004dcc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 34.00",
                                                        "size": "md",
                                                        "color": "#4d004d",
                                                        "weight": "regular",
                                                        "align": "center"
                                                    }],
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#4d004dcc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px",
                                                    "width": "40%"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "horizontal",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "$2,001 - $10,000",
                                                        "size": "md",
                                                        "color": "#ffffff",
                                                        "weight": "regular",
                                                        "align": "center",
                                                        "gravity": "center"
                                                    }],
                                                    "width": "60%",
                                                    "borderColor": "#4d004d",
                                                    "borderWidth": "1px",
                                                    "cornerRadius": "4px",
                                                    "backgroundColor": "#4d004dcc",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "text",
                                                        "text": "฿ 33.50",
                                                        "size": "md",
                                                        "color": "#4d004d",
                                                        "weight": "regular",
                                                        "align": "center"
                                                    }],
                                                    "backgroundColor": "#ffffff",
                                                    "borderWidth": "1px",
                                                    "borderColor": "#4d004dcc",
                                                    "cornerRadius": "4px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetEnd": "0px",
                                                    "paddingAll": "6px",
                                                    "width": "40%"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "sm",
                                            "paddingEnd": "1px"
                                        },
                                        {
                                            "type": "box",
                                            "layout": "vertical",
                                            "contents": [{
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                        "type": "button",
                                                        "action": {
                                                            "type": "uri",
                                                            "label": "แจ้งโอนซื้อเหรียญ",
                                                            "uri": "line://app/1654395306-JDnq6ZqK",
                                                            "altUri": {
                                                                "desktop": "https://liff.line.me/1654395306-JDnq6ZqK"
                                                            }
                                                        },
                                                        "offsetTop": "0px",
                                                        "offsetBottom": "0px",
                                                        "offsetStart": "0px",
                                                        "offsetEnd": "0px",
                                                        "gravity": "center",
                                                        "style": "link",
                                                        "height": "sm",
                                                        "margin": "none",
                                                        "color": "#ffffff"
                                                    }],
                                                    "borderColor": "#ffffff",
                                                    "cornerRadius": "4px",
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetTop": "0px",
                                                    "offsetBottom": "0px",
                                                    "paddingAll": "0px",
                                                    "spacing": "none",
                                                    "margin": "none",
                                                    "borderWidth": "1px",
                                                    "backgroundColor": "#4d004dcc"
                                                },
                                                {
                                                    "type": "box",
                                                    "layout": "vertical",
                                                    "contents": [{
                                                            "type": "spacer",
                                                            "size": "xl"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "text": "สงวนลิขสิทธิ์ พ.ศ.2560 FS-EXCHANGER",
                                                            "size": "xxs",
                                                            "color": "#e6e6e6",
                                                            "align": "center",
                                                            "gravity": "center",
                                                            "weight": "regular",
                                                            "style": "italic"
                                                        }
                                                    ],
                                                    "offsetEnd": "0px",
                                                    "offsetStart": "0px",
                                                    "offsetBottom": "0px",
                                                    "spacing": "none",
                                                    "margin": "none"
                                                }
                                            ],
                                            "spacing": "xs",
                                            "margin": "xxl"
                                        }
                                    ],
                                    "position": "absolute",
                                    "offsetBottom": "0px",
                                    "offsetStart": "0px",
                                    "offsetEnd": "0px",
                                    "backgroundColor": "#4d004daa",
                                    "paddingAll": "12px",
                                    "offsetTop": "0px",
                                    "paddingTop": "16px"
                                }
                            ],
                            "paddingAll": "0px"
                        }
                    }
                ]
            })
        ]);

    } else if (data === 'greeting') {

        return client.reply(replyToken, [
            Line.createFlex('greeting', {
                "type": "carousel",
                "contents": [{
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
                                                            "uri": "line://app/1654395306-RlYl9el5",
                                                            "altUri": {
                                                                "desktop": "https://liff.line.me/1654395306-RlYl9el5"
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
                                "label": "order",
                                "uri": "line://app/1654395306-AD0boRbW",
                                "altUri": {
                                    "desktop": "https://liff.line.me/1654395306-AD0boRbW"
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
                                "label": "memberArea",
                                "uri": "line://app/1654395306-RZG14d1Y",
                                "altUri": {
                                    "desktop": "https://liff.line.me/1654395306-RZG14d1Y"
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
                                "uri": "line://app/1654395306-9D0VyZVl",
                                "altUri": {
                                    "desktop": "https://liff.line.me/1654395306-9D0VyZVl"
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
                                "uri": "https://lin.ee/g5vsfzJ",
                                "altUri": {
                                    "desktop": "https://liff.line.me/1654395306-4W0eJQez"
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
                                "label": "calculators",
                                "url": "line://app/1654395306-MJnBq3Bg",
                                "altUri": {
                                    "desktop": "https://liff.line.me/1654395306-MJnBq3Bg"
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
                                "label": "visit website'",
                                "uri": "line://app/1654395306-XZBdoedx",
                                "altUri": {
                                    "desktop": "https://liff.line.me/1654395306-XZBdoedx"
                                }
                            }
                        }
                    }
                ]
            })
        ]);

    } else {
        return console.log(`Got postback data ${data}`);
    }
};