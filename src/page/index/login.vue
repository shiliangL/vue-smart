<template>
    <div id="home">
        <div class="time-bar">
            统计时间： 默认月初--到当前时间
        </div>
        <el-row :gutter="20" id="home-data-row">
            <el-col v-for="(item, index) in rowHead" :key="index" :span="6" class="row-item" :class="'row-' + item.theme">
                <el-row>
                    <el-col :span="5" class="row-left">
                        <i class="icon" :class="item.icon"></i>
                    </el-col>
                    <el-col :span="19" class="row-right">
                        <div class="row-content">
                            <div class="num">{{item.num}}</div>
                            <span class="txt">
                            {{item.txt}}
                        </span>
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <div class="echart-wrap">
            <el-row>
                <el-col class="echart-title" :span="12">
                    <i class="el-icon-picture"></i> 会员增长趋势
                </el-col>
                <el-col class="echart-time" :span="12">
                    <el-date-picker class="pull-right" v-model="chartTime" type="daterange" :picker-options="pickerOptions" @change="chartPickerChange" placeholder="选择时间范围" align="right">
                    </el-date-picker>
                </el-col>
            </el-row>
            <div class="echart" ref="echart" style="width: 100%;height:400px;"></div>
        </div>
    </div>
</template>
<script src="./js/index.js"></script>
<style scoped lang="scss">
@mixin set-row-theme($arr) {
    @each $theme in $arr {
        .row-#{nth($theme, 1)} {
            .row-left {
                background: nth($theme, 2);
            }
            .row-right {
                background: nth($theme, 3);
            }
        }
    }
}

#home {
    padding: 20px;
    background: #e3e6e9;
    .echart-wrap {
        background: #fff;
        margin-top: 20px;
        padding: 20px;
    }
}

.time-bar {
    padding: 10px 0 20px;
}

#home-data-row {
    color: #fff;
    $rowH: 180px;
    .row-item {
        height: $rowH;
        .num {
            font-size: 32px;
            padding: 20px 0;
        }
    }
    .icon {
        font-size: 48px;
        line-height: $rowH;
    }
    .row-left,
    .row-right,
    .el-row {
        height: 100%;
    }
    .row-left {
        text-align: center;
    }
    .row-right {
        padding: 10px 40px;
    }
    $row-arr: (yellow #ff752b #ff7d38) (blue #51a5ff #58a9ff) (cyan #02c6f7 #0fcff5);
    @include set-row-theme($row-arr)
}

.echart-wrap {
    .el-row {
        padding: 20px 10px 0;
    }
    .echart-title {
        font-size: 18px;
    }
}
</style>
