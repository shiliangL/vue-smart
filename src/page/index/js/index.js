import echarts from 'echarts';
export default {
    created() {
            this.$api.get('https://www.easy-mock.com/mock/594a3a808ac26d795f424b06/markingweb_1498036864045/api/menus')
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        mounted() {
            this.initChart();
        },
        data() {
            return {
                urls: {

                },
                options: {

                },
                rowHead: [{
                    num: 150,
                    txt: '新增设备',
                    icon: 'el-icon-upload member-add',
                    theme: 'yellow'
                }, {
                    num: 20,
                    txt: '在线设备',
                    icon: 'el-icon-time member-follow',
                    theme: 'blue'
                }, {
                    num: 1503,
                    txt: '总用户',
                    icon: 'el-icon-setting member-consume',
                    theme: 'cyan'
                },{
                    num: 0,
                    txt: '故障设备数',
                    icon: 'el-icon-setting member-consume',
                    theme: 'cyan'
                }],
                pickerOptions: {
                    shortcuts: [{
                        text: '最近1个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近3个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近6个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 180);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                chartTime: '',
                chartOption: {

                    tooltip: {
                        trigger: 'asix',
                        axisPointer: {
                            lineStyle: {
                                color: '#ddd'
                            }
                        },
                        backgroundColor: 'rgba(255,255,255,1)',
                        padding: [5, 10],
                        textStyle: {
                            color: '#7588E4',
                        },
                        extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
                    },
                    grid: {
                        left: '10px',
                        right: '50px',
                        bottom: '10px',
                        containLabel: true
                    },
                    xAxis: {
                        name: '日期',
                        type: 'category',
                        data: ['2017/05/01', '2017/05/01', '2017/05/01', '2017/05/01', '2017/05/01', '2017/05/01'],
                        boundaryGap: false,

                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#bbb'
                            }
                        },
                        axisLabel: {
                            margin: 10,
                            textStyle: {
                                fontSize: 14
                            }
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '人数',
                        splitLine: {
                            show: true,
                            interval: 'auto',
                            lineStyle: {
                                color: ['#ddd']
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            lineStyle: {
                                color: '#bbb'
                            },
                            show: false
                        },
                        axisLabel: {
                            margin: 10,
                            textStyle: {
                                fontSize: 14
                            }
                        }
                    },
                    series: [{
                        type: 'line',
                        smooth: true,
                        showSymbol: false,
                        symbol: 'circle',
                        symbolSize: 6,
                        data: ['1200', '1400', '808', '811', '626', '488'],
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#f3fbff'
                                }, {
                                    offset: 1,
                                    color: '#fcfeff'
                                }], false)
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#69ccff'
                            }
                        },
                        lineStyle: {
                            normal: {
                                width: 3
                            }
                        }
                    }]
                }
            }
        },
        methods: {
            initChart() {

                let myChart = echarts.init(this.$refs.echart);
                // 指定图表的配置项和数据

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(this.chartOption);
            },
            chartPickerChange(evt) {
                console.log(arguments)
            }
        }
}
