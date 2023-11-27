45.toString(); // 第一个点为数值中的小数点，报SyntaxError
45..toString(); // 第一个点为数值中的小数点，第二个点为点运算符
4.5.toString();
-4..toString(); // 先执行4..toString(), 再将执行结果转换为数值取负值
