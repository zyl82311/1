/*************************************

项目名称：靓机汇
下载地址：https://t.cn/A6NMLjKA
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/guapi\.liangjihui\.com\/front\/user\/memberInfo url script-response-body https://raw.githubusercontent.com/zyl82311/1/main/liangjihui.js

[mitm]
hostname = guapi.liangjihui.com

*************************************/

var 111 = JSON.parse($response.body);

  111.data = {
    "is_pay" : true,
    "mobile" : "13852811157",
    "experience_card" : true,
    "is_member" : true,
    "end_time" : 4092599349
  };

$done({body : JSON.stringify(111)});
