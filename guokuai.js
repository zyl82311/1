/*************************************

项目名称：果快
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
# 解锁会员信息
^https?:\/\/gkbjd\.huishoubaojiadan\.com\/front\/(quote\/look.+|user\/memberInfo) url script-response-body https://raw.githubusercontent.com/zyl82311/1/main/guokuai.js

[mitm]
hostname = gkbjd.huishoubaojiadan.com

*************************************/


var zyl = JSON.parse($response.body);

  zyl.data.is_pay = true;
  zyl.data.experience_card = true;
  zyl.data.is_member = true;
  zyl.data.end_time = 4092599349;
  zyl.data.is_see = true;

$done({body : JSON.stringify(zyl)});
