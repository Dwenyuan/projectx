// 
export default {
	isCaps : 1,//是否每秒并发caps模型，还是每秒限定用户数模型 
	modelType : 0,//选择什么类型的索引值
	totalUsers : "2",//总用户数
	caps : "1",//initial（递增或递减）或者caps（平稳），或者是min（浪涌、震荡）
	limit : "1",//者max或者min（递增或递减），max（浪涌、震荡）
	keepTime : "1",//保持时间（Alter Frequency）
	step : "1",//Increase Value递增步值或decrease Value递减步值，或者wave and peak 的极值
	chooseType : 0,//递增或递减类型索引，或者是wave and peak类型索引
}