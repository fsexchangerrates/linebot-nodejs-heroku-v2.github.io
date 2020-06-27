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
            Line.createFlex('perfectmoney', )
        ]);

    } else if (data === 'neteller') {

        return client.reply(replyToken, [
            Line.createFlex('neteller', )
        ]);

    } else if (data === 'skrill') {

        return client.reply(replyToken, [
            Line.createFlex('skrill', )
        ]);

    } else if (data === 'greeting') {

        return client.reply(replyToken, [
            Line.createFlex('greeting', )
        ]);

    } else if (data === 'nextmenu') {

        return client.linkRichMenu(userId, richMenuId2);

    } else if (data === 'previous') {

        return client.linkRichMenu(userId, richMenuId1);

    } else {
        return console.log(`Got postback data ${data}`);
    }
};