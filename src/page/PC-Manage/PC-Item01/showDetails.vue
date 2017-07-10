<template>
    <div id="showDetails">
        <table id="contentTable" class="table-list" style="margin-top: -0.5rem;border-top: none;">
            <thead>
                <tr>
                    <th>数据点名称</th>
                    <th>标识名</th>
                    <th>备注</th>
                    <th>是否显示数据点</th>
                    <th>是否显示图表</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>DTU当前版本号</td>
                    <td>DtuVer</td>
                    <td>DTU当前版本号0</td>
                    <td>
                        <input type="checkbox" name="datapoint.isShow" id="isShow0" value="0" checked="checked" onchange="changeIsShow('0','25','1')">
                    </td>
                    <td>
                        <input type="checkbox" name="datapoint.isShowchart" id="isShowchart0" value="1" onchange="changeIsShowChart('0','25','0')">
                    </td>
                </tr>
                <tr>
                    <td>工作状态(0水满 1冲洗 2制水)</td>
                    <td>Status</td>
                    <td>工作状态，0—水满 1—冲洗 2—制水0</td>
                    <td>
                        <input type="checkbox" name="datapoint.isShow" id="isShow1" value="0" checked="checked" onchange="changeIsShow('1','26','1')">
                    </td>
                    <td>
                        <input type="checkbox" name="datapoint.isShowchart" id="isShowchart1" value="0" checked="checked" onchange="changeIsShowChart('1','26','1')">
                    </td>
                </tr>
                <tr>
                    <td>报警状态(0正常 1缺水 2漏水 4滤芯寿命提醒)</td>
                    <td>Alarm</td>
                    <td>报警状态，0—正常 1—缺水 2—漏水 4—滤芯寿命提醒0</td>
                    <td>
                        <input type="checkbox" name="datapoint.isShow" id="isShow2" value="0" checked="checked" onchange="changeIsShow('2','27','1')">
                    </td>
                    <td>
                        <input type="checkbox" name="datapoint.isShowchart" id="isShowchart2" value="0" checked="checked" onchange="changeIsShowChart('2','27','1')">
                    </td>
                </tr>
                <tr>
                    <td>原水TDS值</td>
                    <td>InTDS</td>
                    <td>原水TDS值0</td>
                    <td>
                        <input type="checkbox" name="datapoint.isShow" id="isShow3" value="0" checked="checked" onchange="changeIsShow('3','28','1')">
                    </td>
                    <td>
                        <input type="checkbox" name="datapoint.isShowchart" id="isShowchart3" value="0" checked="checked" onchange="changeIsShowChart('3','28','1')">
                    </td>
                </tr>
                <tr>
                    <td>制水TDS值</td>
                    <td>OutTDS</td>
                    <td>制水TDS值0</td>
                    <td>
                        <input type="checkbox" name="datapoint.isShow" id="isShow4" value="0" checked="checked" onchange="changeIsShow('4','29','1')">
                    </td>
                    <td>
                        <input type="checkbox" name="datapoint.isShowchart" id="isShowchart4" value="0" checked="checked" onchange="changeIsShowChart('4','29','1')">
                    </td>
                </tr>
                <tr>
                    <td>制水量(L)</td>
                    <td>WaterYield</td>
                    <td>制水量，单位为升0</td>
                    <td>
                        <input type="checkbox" name="datapoint.isShow" id="isShow5" value="0" checked="checked" onchange="changeIsShow('5','30','1')">
                    </td>
                    <td>
                        <input type="checkbox" name="datapoint.isShowchart" id="isShowchart5" value="0" checked="checked" onchange="changeIsShowChart('5','30','1')">
                    </td>
                </tr>
                <tr>
                    <td>滤芯上电时间(s)</td>
                    <td>PowerOnTime</td>
                    <td>滤芯上电时间0</td>
                    <td>
                        <input type="checkbox" name="datapoint.isShow" id="isShow6" value="0" checked="checked" onchange="changeIsShow('6','31','1')">
                    </td>
                    <td>
                        <input type="checkbox" name="datapoint.isShowchart" id="isShowchart6" value="0" checked="checked" onchange="changeIsShowChart('6','31','1')">
                    </td>
                </tr>
                <tr>
                    <td>滤芯已使用的流量(L)</td>
                    <td>Waterflow</td>
                    <td>滤芯已使用的流量0</td>
                    <td>
                        <input type="checkbox" name="datapoint.isShow" id="isShow7" value="0" checked="checked" onchange="changeIsShow('7','32','1')">
                    </td>
                    <td>
                        <input type="checkbox" name="datapoint.isShowchart" id="isShowchart7" value="0" checked="checked" onchange="changeIsShowChart('7','32','1')">
                    </td>
                </tr>
                <tr>
                    <td>允许离线时间(h)</td>
                    <td>OfflineTime</td>
                    <td>允许离线时间设置值0</td>
                    <td>
                        <input type="checkbox" name="datapoint.isShow" id="isShow8" value="0" checked="checked" onchange="changeIsShow('8','33','1')">
                    </td>
                    <td>
                        <input type="checkbox" name="datapoint.isShowchart" id="isShowchart8" value="0" checked="checked" onchange="changeIsShowChart('8','33','1')">
                    </td>
                </tr>
                <tr>
                    <td>进水TDS校正设置值</td>
                    <td>InTDSAdj</td>
                    <td>进水TDS校正设置值0</td>
                    <td>
                        <input type="checkbox" name="datapoint.isShow" id="isShow9" value="0" checked="checked" onchange="changeIsShow('9','34','1')">
                    </td>
                    <td>
                        <input type="checkbox" name="datapoint.isShowchart" id="isShowchart9" value="1" onchange="changeIsShowChart('9','34','0')">
                    </td>
                </tr>
                <tr>
                    <td>出水TDS校正设置值</td>
                    <td>OutTDSAdj</td>
                    <td>出水TDS校正设置值0</td>
                    <td>
                        <input type="checkbox" name="datapoint.isShow" id="isShow0" value="0" checked="checked" onchange="changeIsShow('0','35','1')">
                    </td>
                    <td>
                        <input type="checkbox" name="datapoint.isShowchart" id="isShowchart0" value="1" onchange="changeIsShowChart('0','35','0')">
                    </td>
                </tr>
                <tr>
                    <td>水流速度1设置值</td>
                    <td>Speed1</td>
                    <td>水流速度1设置值0</td>
                    <td>
                        <input type="checkbox" name="datapoint.isShow" id="isShow1" value="0" checked="checked" onchange="changeIsShow('1','36','1')">
                    </td>
                    <td>
                        <input type="checkbox" name="datapoint.isShowchart" id="isShowchart1" value="1" onchange="changeIsShowChart('1','36','0')">
                    </td>
                </tr>
                <tr>
                    <td>水流速度2设置值</td>
                    <td>Speed2</td>
                    <td>水流速度2设置值0</td>
                    <td>
                        <input type="checkbox" name="datapoint.isShow" id="isShow2" value="0" checked="checked" onchange="changeIsShow('2','37','1')">
                    </td>
                    <td>
                        <input type="checkbox" name="datapoint.isShowchart" id="isShowchart2" value="1" onchange="changeIsShowChart('2','37','0')">
                    </td>
                </tr>
                <tr>
                    <td>工作模式</td>
                    <td>WorkMode</td>
                    <td>工作模式( 0--禁止工作 1--正常工作 2--调试模式)0</td>
                    <td>
                        <input type="checkbox" name="datapoint.isShow" id="isShow3" value="0" checked="checked" onchange="changeIsShow('3','38','1')">
                    </td>
                    <td>
                        <input type="checkbox" name="datapoint.isShowchart" id="isShowchart3" value="1" onchange="changeIsShowChart('3','38','0')">
                    </td>
                </tr>
                <tr>
                    <td>DTU最新版本号</td>
                    <td>DtuNewVer</td>
                    <td>DTU最新版本号(非0且大于本机版本号时将触发FOTA升级)0</td>
                    <td>
                        <input type="checkbox" name="datapoint.isShow" id="isShow4" value="0" checked="checked" onchange="changeIsShow('4','39','1')">
                    </td>
                    <td>
                        <input type="checkbox" name="datapoint.isShowchart" id="isShowchart4" value="1" onchange="changeIsShowChart('4','39','0')">
                    </td>
                </tr>
                <tr>
                    <td>滤芯上电时间重置值（s）</td>
                    <td>PowerOnTimeReset</td>
                    <td>每个滤芯上电时间重置值0</td>
                    <td>
                        <input type="checkbox" name="datapoint.isShow" id="isShow5" value="0" checked="checked" onchange="changeIsShow('5','40','1')">
                    </td>
                    <td>
                        <input type="checkbox" name="datapoint.isShowchart" id="isShowchart5" value="1" onchange="changeIsShowChart('5','40','0')">
                    </td>
                </tr>
                <tr>
                    <td>滤芯已使用流量重置值(L)</td>
                    <td>WaterflowReset</td>
                    <td>每个滤芯已使用流量重置值0</td>
                    <td>
                        <input type="checkbox" name="datapoint.isShow" id="isShow6" value="0" checked="checked" onchange="changeIsShow('6','41','1')">
                    </td>
                    <td>
                        <input type="checkbox" name="datapoint.isShowchart" id="isShowchart6" value="1" onchange="changeIsShowChart('6','41','0')">
                    </td>
                </tr>
            </tbody>
        </table>
        <div style=" text-align: center;margin-top:20px">
            <el-button @click="closeForm">取消</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </div>
    </div>
</template>
<script>
// import xxx from '../xxx';
export default {
    components: {
        // xxx
    },
    name: '',
    props: {
        bar: {}, // 按字母顺序
        foo: {},
        fooBar: {},
    },
    // 变量
    data() {
        return {

        }
    },
    beforeCreate() {

    },
    created() {

    },
    mounted() {},
    computed: {},
    methods: {
        closeForm() {
            this.$emit('close')
        },
        changeIsShow() {

        },
        changeIsShowChart(){
            
        }
    },
    watch: {},
};
</script>
<style scoped lang="scss">
</style>
