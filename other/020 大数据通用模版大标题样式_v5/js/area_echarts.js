
function echarts_map() {
    var myChart = echarts.init(document.getElementById('map_1'));
    var guangdong = "https://img.shixijob.net/dev/ka/xiamen_area.json";

    $.get(guangdong, function (tjJson) {
        echarts.registerMap('guangdong', tjJson);
        myChart.setOption({
            series: [{
                type: 'map',
                map: 'guangdong'
            }]
        });

        var geoCoordMap = {
            '思明区': [118.087828, 24.462059]
            , '广州市': [113.480637, 23.125178]
            , '湛江市': [110.264977, 21.274898]
            , '茂名市': [110.919229, 21.659751]
            , '阳江市': [111.825107, 21.859222]
            , '云浮市': [112.044439, 22.629801]
            , '肇庆市': [112.472529, 23.051546]
            , '江门市': [112.894942, 22.090431]
            , '中山市': [113.382391, 22.321113]
            , '佛山市': [113.022717, 22.828762]
            , '清远市': [113.051227, 23.685022]
            , '韶关市': [113.601224, 24.820603]
            , '河源市': [114.897802, 23.746266]
            , '梅州市': [116.117582, 24.099112]
            , '潮州市': [116.692301, 23.661701]
            , '揭阳市': [116.255733, 23.143778]
            , '汕头市': [116.708463, 22.87102]
            , '汕尾市': [115.364238, 22.774485]
            , '深圳市': [114.085947, 22.347]
            , '东莞市': [113.746262, 22.746237]
            , '惠州市': [114.412599, 23.079404]
        };
        var goData = [{
            name: '思明区',
            value: 132
        }, {
            name: '湛江市',
            value: 24
        }, {
            name: '韶关市',
            value: 20
        }, {
            name: '汕尾市',
            value: 18
        }, {
            name: '揭阳市',
            value: 18
        }
        ];
        var goTotal = 0;//计算总人数
        goData.forEach(function (item, i) {
            goTotal += item.value;
        })

        var planePath = 'arrow';

        var convertData = function (name, data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var fromCoord = geoCoordMap[name];
                var toCoord = geoCoordMap[data[i].name];
                if (fromCoord && toCoord) {
                    res.push({
                        //对换即可调整方向
                        coords: [fromCoord, toCoord]
                    });
                }
            }
            return res;
        };
        var series = [];
        [
            ['广州市', goData],
            // ['徐州', backData],

        ].forEach(function (item, i) {
            series.push({
                name: item[0],
                type: 'lines',
                zlevel: 2,
                //线特效配置
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.1,
                    symbol: planePath, //标记类型
                    symbolSize: 10
                },
                lineStyle: {
                    normal: {
                        width: 1,
                        opacity: 0.4,
                        curveness: 0.2, //弧线角度
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                // data: convertData(item[0], item[1])
            }, {  //终点
                name: item[0],
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                label: {
                    normal: {
                        show: true,
                        color: 'rgba(255,255,255,.5)',
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbol: 'circle',
                //圆点大小
                symbolSize: function (val) {
                    return val[2] * 50 / goTotal;
                },
                itemStyle: {
                    normal: {
                        show: true
                    }
                },
                data: item[1].map(function (dataItem) {
                    console.log(dataItem)
                    return {
                        name: dataItem.name,
                        value: geoCoordMap[dataItem.name].concat([dataItem.value])
                    };
                })

            }, {//起点
                name: 'item[0]',
                type: 'scatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return 15;
                },
                symbol: 'circle',

                itemStyle: {
                    normal: {
                        show: true
                    }
                },
                data: [{
                    name: item[0],
                    value: geoCoordMap[item[0]].concat([100])
                }]

            })

        });


        option = {
            //  backgroundColor: '#FDF7F2',
            title: {
                text: '工业互联平台厦门站',
                //    subtext: '更多模板关注公众号”DreamCoders“',
                left: 'center',
                top: '0',
                textStyle: {
                    color: '#fff',
                    fontSize: 24,
                }
            },

            tooltip: {
                trigger: 'item',
                formatter: "{b}"
            },
            //线颜色及飞行轨道颜色
            visualMap: {
                show: false,
                min: 0,
                max: 100,
                color: ['#fff']
            },
            //地图相关设置
            geo: {
                map: 'guangdong',
                //视角缩放比例
                zoom: 1,
                //显示文本样式
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            color: 'rgba(255,255,255,.3)'
                        }
                    },
                    emphasis: {
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                //鼠标缩放和平移
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: '#4256ff',
                        borderColor: '#404a59'
                    },
                    emphasis: {
                        areaColor: '#2539f5'
                    }
                }
            },
            series: series
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    })


    // 使用刚指定的配置项和数据显示图表。

}

function map_v2() {

    // var myChart = echarts.init(document.getElementById('map_1'));
    var xiamen = "https://img.shixijob.net/dev/ka/xiamen_area.json";
    var china = "https://img.shixijob.net/dev/ka/china_map.json";

    $.get(xiamen, function (tjJson) {
        echarts.registerMap('mapData', tjJson);

        var myChart = echarts.init(document.getElementById('map_1'));
        let iconRQ = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRkRBMEJBQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRkRBMEJCQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JGREEwQjhDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JGREEwQjlDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mT42iAAABQ0lEQVR42mL8LabOQCQIBOL1xChkItJAkLp+IBajpqFWQCwPxJ7UNDQCSgdQy1BmIA6Bsl2AmJMahjoAsTiUzQPETtQwNAKN709IAwvUayZQ/hcg/o0k/x6Ig9D0+ABxKJT9HYh/oMm/BBm6GYitgTgfiBmJcLkkEK/CIXcGiGNB3v8JxIVQF31gIA/8AeIWaNK7gRymG4BYH4hPkGjgXSC2A+JaWNChR9QjqIJeIP5PhIGzgdgAiI8Tin2QbSVAvIOAgROBOA0auUQlKV4gtidgqBGp6RSUFrmIKA/ESDEUPcGfBOIUIH6Lln29iTVUCIjdkJJKExDbAPFcqJdPEMpd2AwF5TBWaFKxBeJ6qOHIqaMbmjrcsBUw2AwNh7rKAEeaBaWOMiD2BeJvQOxOyFBuaFJJwZZU0MBWaHCIo0sABBgAetA4Jx5t/ToAAAAASUVORK5CYII="

        let data = [{
            name: "思明区",
            value: [118.127828, 24.462059, 100]
        },
        {
            name: "海沧区",
            value: [118.006364, 24.492512]
        },

        {
            name: "湖里区",
            value: [118.12943, 24.522764]
        },
        {
            name: "集美区",
            value: [118.050869, 24.602874]
        },
        {
            name: "同安区",
            value: [118.150455, 24.729333]
        },
        {
            name: "翔安区",
            value: [118.262811, 24.607479]
        },

        ]
        let LableData = [
            {
                name: "思明区",
                coords: [
                    [118.127828, 24.462059, 100],
                    [118.307828, 24.442059, 100]
                ], // 线条位置[开始位置，结束位置]
                value: [41020,4827]
            },
            {
                name: "海沧区",
                coords: [
                    [118.006364, 24.492512],
                    [117.806364, 24.652512]
                ], // 线条位置[开始位置，结束位置]
                value: [18797, 3375]
            },
            {
                name: "湖里区",
                coords: [
                    [118.12943, 24.522764],
                    [118.22943, 24.542764]
                ], // 线条位置[开始位置，结束位置]
                value: [13447, 3988]
            },
            {
                name: "集美区",
                coords: [
                    [118.050869, 24.602874],
                    [117.930869, 24.742874]
                ], // 线条位置[开始位置，结束位置]
                value: [23577, 5774]
            },
            {
                name: "同安区",
                coords: [
                    [118.150455, 24.729333],
                    [118.050455, 24.859333]
                ], // 线条位置[开始位置，结束位置]
                value: [36697, 1577]
            },
            {
                name: "翔安区",
                coords: [
                    [118.262811, 24.607479],
                    [118.292811, 24.657479]
                ], // 线条位置[开始位置，结束位置]
                value: [33668, 2268]
            }
        ];

        option = {
            /*backgroundColor: '#000f1e',*/
            geo: {
                map: 'mapData',
                aspectScale: 0.85,
                layoutCenter: ["50%", "50%"], //地图位置
                layoutSize: '80%',
                itemStyle: {
                    normal: {
                        shadowColor: '#276fce',
                        shadowOffsetX: -3,
                        shadowOffsetY: 10,
                        opacity: 0.5,
                    },
                    emphasis: {
                        areaColor: '#276fce',

                    }
                },
                regions: [{
                    name: '南海诸岛',
                    itemStyle: {
                        areaColor: 'rgba(0, 10, 52, 1)',

                        borderColor: 'rgba(0, 10, 52, 1)',
                        normal: {
                            opacity: 0,
                            label: {
                                show: false,
                                color: "#009cc9",
                            }
                        },


                    },
                    label: {
                        show: false,
                        color: '#FFFFFF',
                        fontSize: 12,
                    },


                }],

            },
            series: [
                // 常规地图
                {
                    type: 'map',
                    mapType: 'mapData',
                    aspectScale: 0.85,
                    layoutCenter: ["50%", "50%"], //地图位置
                    layoutSize: '80%',
                    zoom: 1, //当前视角的缩放比例
                    // roam: true, //是否开启平游或缩放
                    scaleLimit: { //滚轮缩放的极限控制
                        min: 1,
                        max: 2
                    },
                    itemStyle: {
                        normal: {
                            areaColor: '#0c274b',
                            borderColor: '#1cccff',
                            areaColor: '#4256ff',
                            borderColor: '#404a59',
                            borderWidth: 1.5


                        },
                        emphasis: {
                            areaColor: '#02102b',
                            label: {
                                color: "#fff"
                            }

                        }
                    },


                },
                { //首都星图标
                    name: '首都',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: [{
                        name: '首都',
                        value: [116.24, 41.55, 100],

                    },],
                    symbol: iconRQ,
                    symbolSize: 20,
                    label: {
                        normal: {
                            show: false,

                        },
                        emphasis: {
                            show: false
                        }
                    },

                },
                // 区域散点图
                {
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    symbolSize: 10,
                    rippleEffect: { //坐标点动画
                        period: 3,
                        scale: 5,
                        brushType: 'fill'
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right',
                            formatter: '{b}',
                            color: '#b3e2f2',
                            fontWeight: "bold",
                            fontSize: 16
                        }
                    },

                    data: data,
                    itemStyle: { //坐标点颜色
                        normal: {
                            show: true,
                            color: '#ff8003',
                            shadowBlur: 20,
                            shadowColor: '#fff'
                        },
                        emphasis: {
                            areaColor: '#f00'
                        }
                    },

                },


                /*{
                   name: 'lable',
                   type: 'scatter',
                   coordinateSystem: 'geo',
                   symbol: 'pin',
                   symbolSize: [50,50],
                   label: {
                       normal: {
                           show: true,
                           textStyle: {
                               color: '#fff',
                               fontSize: 9,
                           },
                           formatter (value){
                               return value.data.value[1]
                           }
                       }
                   },
                   itemStyle: {
                       normal: {
                           color: '#D8BC37', //标志颜色
                       }
                   },
                   data: data,
                   showEffectOn: 'render',
                   rippleEffect: {
                       brushType: 'stroke'
                   },
                   hoverAnimation: true,
                   zlevel: 1
               },*/
                {

                    type: 'lines',
                    zlevel: 3,
                    symbol: 'circle',
                    symbolSize: [5, 5],
                    color: '#ff8003',
                    opacity: 1,
                    label: {
                        show: true,
                        padding: [10, 20],
                        color: '#fff',
                        backgroundColor: "#1a3961",
                        borderColor: '#aee9fb',
                        borderWidth: 1,
                        borderRadius: 6,
                        formatter(params) {

                            let arr = [params.name, "企业数：" + params.value[1] + "", "职位数：" + params.value[0] + ""];
                            return arr.join("\n")
                        },
                        textStyle: {
                            align: 'left',
                            lineHeight: 20,
                        }
                        /* normal: {

                             textStyle: {
                                 color: '#fff',
                                 fontSize: 9,
                             },
                             formatter (value){
                                 return value.data.value[2]
                             },

                         }*/
                    },
                    lineStyle: {
                        type: 'solid',
                        color: '#fff',
                        width: 0.5,
                        opacity: 1,

                    },
                    data: LableData,


                },
            ]
        };

        // myChart.on('click', function (params) {
        //     console.log(params);
        // });
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });

    })

}



$(window).load(function () {
    // echarts_map()
    map_v2()
})
// })


