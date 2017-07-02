/**
 * Created by super on 2017/3/25.
 */


export default class Util{

  constructor () {

  }

  /**
   * 通用判断，判断字符串或对象或数组是否为空
   * @param obj
   * @returns {*}
   */
  isEmpty(obj){
    // 本身为空直接返回true
    if (obj == null) return true;
    if (obj == '' || obj.trim() == '') return true;
    // 然后可以根据长度判断，在低版本的ie浏览器中无法这样判断。
    if (obj.length == 0)  return true;
    if (obj.length > 0)   return false;

    return false;
  }

  /**
   * 复制对象或数组
   * @param obj
   * @returns {*}
   */
  copy(obj) {
    if(obj instanceof Array)
      return Object.assign([], obj);
    if(obj instanceof  Object)
      return Object.assign({}, obj);
    return null;
  }

  /**
   * 判断一个数组的某个属性是否包含和这个字符串相等的内容
   * @param array 数组
   * @param attr 数组属性
   * @param str 字符串
   */
  arrayIndexOf(array, attr, str){
    var subStr = [];
    for(var obj in array){
      subStr.push(array[obj][attr]);
    }
    if(subStr.indexOf(str) >= 0)
      return true;
    return false;
  }

  /**
   * 找到数组的某一个属性是和这个传递属性相等并删除
   * @param array 数组
   * @param attr 数组属性
   * @param str 字符串
   */
  arrayRemove(array, attr, str){
    for(var obj in array){
      if(array[obj][attr] == str){
        return array.splice(obj, 1);
      }
    }
    return [];
  }

  /**
   * 获取数组某个对象包含字段值的下标
   * @param  {[type]} array [数组]
   * @param  {[type]} attr  [字段名]
   * @param  {[type]} str   [值]
   * @return {[type]}       [下标]
   */
  arrayAttrToIndex(array, attr, str){
    for(var i = 0; i < array.length; i ++){
      if(array[i][attr] == str)
        return i;
    }
    return -1;
  }

  /**
   * 获取数组某个对象包包含某个字符串的对象
   * @param  {[type]} array [description]
   * @param  {[type]} attr  [description]
   * @param  {[type]} str   [description]
   * @return {[type]}       [description]
   */
  arrayAttrToObj(array, attr, str){
    for(var i = 0; i < array.length; i ++){
      if(array[i][attr] == str)
        return array[i];
    }
    return null;
  }

  /**
   * 判断对象2的字段是否和对象1的字段相等
   * @param obj1
   * @param obj2
   * @returns {boolean}
   */
  containObjVal(obj1, obj2){
    for(var key in obj2){
      if(obj2[key] != obj1[key]) {
        return false;
      }
    }
    return true;
  }

  /**
   * 把一维数组按整除的方式拆分成二维数组
   * @param array 需要拆分的数组
   * @param index 整除数
   * @returns {array}
   */
  arraySplit2(array, index){
    var result = [];
    if(array != null && array.length > 0){
      var length = array.length;
      if(length <= index){
        result.push(array);
      }else{
        var obj = [];
        for(var i = 0; i < length; i ++){
          obj.push(array[i]);
          if((i + 1) % index == 0){
            result.push(obj);
            obj = [];
          }
        }
        if(obj != null && obj.length > 0)
          result.push(obj);
      }
    }
    return result;
  }



  print(json){
    console.log(JSON.stringify(json));
  }

  /**
   * 格式化时间戳
   * @param val 时间戳(long)
   * @param pattern 格式化(yyyy-MM-dd|yyyy-MM-dd HH:mm:ss) 非必填
   * @returns object
   */
  formatDate(val, pattern) {
    var dateObj = {};
    var date = new Date(val);
    var Y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        H = date.getHours(),
        i = date.getMinutes(),
        s = date.getSeconds();
    dateObj.year = Y;
    dateObj.month = m;
    dateObj.date = d;
    dateObj.hour = H;
    dateObj.minute = i;
    dateObj.second = s;

    if(pattern && pattern == 'yyyy-MM-dd'){
      dateObj.YTD = Y + '-' + m + '-' + d;
    }else if(pattern && pattern == 'yyyy-MM-dd HH:mm:ss'){
      dateObj.YTDHMS = Y + '-' + m + '-' + d + ' ' +  H + ':' + i + ':' + s;
    }
    return dateObj;
  }

  /**
   * 格式化日期
   * @param date 日期(date)
   * @param fmt 格式化(yyyy-MM-dd|yyyy-MM-dd HH:mm:ss)
   * @returns string
   */
  formatDatePattern(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "H+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  } 

}
