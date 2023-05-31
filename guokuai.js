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
{
  "msg" : "success",
  "data" : {
"address" : true,
"delivery_mobile" : true,
"nick" : true,
"province" : true,
"city" : true,
"area" : true
  },
  "code" : 200
}


