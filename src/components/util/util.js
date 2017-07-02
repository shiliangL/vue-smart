 export default class Util {  
  constructor() {
    
  }
  
  /**
   * 通用判断，判断字符串是否为null undefined 空格
   * @param obj
   * @returns {*}
   */
   isEmpty(str) {
    if (str == null || str == undefined || str == '') return true;
    if (str.replace(" ", "").length == 0) return true;
    return false;
  }
  
  /**
   * 复制对象或数组
   * @param obj
   * @returns {*}
   */
   copy(obj) {
    var str, newobj = obj.constructor === Array ? [] : {};
    if (typeof obj !== 'object') {
      return;
    } else if (window.JSON) {
      str = JSON.stringify(obj), //序列化对象
        newobj = JSON.parse(str); //还原
      } else {
        for (var i in obj) {
          newobj[i] = typeof obj[i] === 'object' ?
          cloneObj(obj[i]) : obj[i];
        }
      }
      return newobj;
    }
    
  /**
   * 判断一个数组的某个属性是否包含和这个字符串相等的内容
   * @param array 数组
   * @param attr 数组属性
   * @param str 字符串
   */
   arrayIndexOf(array, attr, str) {
    var subStr = [];
    for (var obj in array) {
      subStr.push(array[obj][attr]);
    }
    if (subStr.indexOf(str) >= 0)
      return true;
    return false;
  }
  
  /**
   * 找到数组的某一个属性是和这个传递属性相等并删除
   * @param array 数组
   * @param attr 数组属性
   * @param str 字符串
   */
   arrayRemove(array, attr, str) {
    for (var obj in array) {
      if (array[obj][attr] == str) {
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
   arrayAttrToIndex(array, attr, str) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][attr] == str)
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
   arrayAttrToObj(array, attr, str) {
    for (var i = 0; i < array.length; i++) {
      if (array[i][attr] == str)
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
   containObjVal(obj1, obj2) {
    for (var key in obj2) {
      if (obj2[key] != obj1[key]) {
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
   arraySplit2(array, index) {
    var result = [];
    if (array != null && array.length > 0) {
      var length = array.length;
      if (length <= index) {
        result.push(array);
      } else {
        var obj = [];
        for (var i = 0; i < length; i++) {
          obj.push(array[i]);
          if ((i + 1) % index == 0) {
            result.push(obj);
            obj = [];
          }
        }
        if (obj != null && obj.length > 0)
          result.push(obj);
      }
    }
    return result;
  }
  
  /**
   * 在添加的时候比较现对象是否原有对象一直
   * @param  {[type]} obj1 [对象1]
   * @param  {[type]} obj2 [对象2]
   * @return {[type]}      [boolean]
   */
   compareObj2(obj1, obj2) {
    if (obj1 == obj2 && JSON.stringify(obj1) == JSON.stringify(obj2))
      return true;
    return false;
  }
  
  /**
   * 获取数组某个对象包包含某个字符串的总条数
   * @param  {[type]} array [description]
   * @param  {[type]} attr  [description]
   * @param  {[type]} str   [description]
   * @return {[type]}       [description]
   */
   arrayAttrToLength(array, attr, str, length) {
    var count = 0;
    var attrs = attr.split(".");
    if (attrs.length > 1) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][attrs[0]][attrs[1]] == str) {
          ++count;
          if (count > 0 && count == length) {
            return length;
          }
        }
      }
    } else {
      for (var i = 0; i < array.length; i++) {
        if (array[i][attr] == str) {
          ++count;
          if (count > 0 && count == length) {
            return length;
          }
        }
      }
    }
    return count;
  }
  getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
    " " + date.getHours() + seperator2 + date.getMinutes() +
    seperator2 + date.getSeconds();
    return currentdate;
  }
  
  
}
