function strAdjust(unadjustedBwdCharString){
	var res = unadjustedBwdCharString;
	var strKey;
	var strValue;
	var fresult;
	
	/***********************************/		
	fresult = res.indexOf("Ú"); 
	var i = 0;
	while (fresult >= 0 && i < 10000 ){
		strKey = res[fresult] + res[fresult+1];
		strValue = res[fresult+1] + '্';
		res = res.replaceAll(strKey, strValue);
		fresult = res.indexOf("Ú");
		i++;
	}		
	console.log(i);
	
	/***********************************/		
	fresult = res.indexOf("­"); 
	var i = 0;
	while (fresult >= 0 && i < 10000 ){
		strKey = res[fresult] + res[fresult+1];
		strValue = res[fresult+1] + 'ে';
		res = res.replaceAll(strKey, strValue);
		fresult = res.indexOf("­");
		i++;
	}		
	console.log(i);
	
	/***********************************/		
	fresult = res.indexOf("¢"); 
	i = 0;
	while (fresult >= 0 && i < 10000 ){
		strKey = res[fresult] + res[fresult+1];
		strValue = res[fresult+1] + 'ি';
		res = res.replaceAll(strKey, strValue);
		fresult = res.indexOf("¢");
		i++;
	}		
	console.log(i);
	
	/***********************************/		
	fresult = res.indexOf("Ñ"); 
	i = 0;
	while (fresult >= 0 && i < 10000 ){
		strKey = res[fresult-1] + res[fresult];
		strValue = 'র্' + res[fresult-1];
		if(strKey === 'েÑ'){
			res = res.replaceAll(strKey, 'ের্');
		} else if(strKey === 'িÑ'){
			res = res.replaceAll(strKey, 'ির্');
		} else {
			res = res.replaceAll(strKey, strValue);
		}
		
		fresult = res.indexOf("Ñ");
		i++;
	}		
	console.log(i);
	
	/***********************************/		
	res = res.replaceAll('েÉ', '্যে');
	res = res.replaceAll('িÉ', '্যি');
	/*i = 0;
	while (fresult >= 0 && i < 10000 ){
		strKey = res[fresult-1] + res[fresult];
		//strValue = '্য' + res[fresult-1];
		if(strKey === 'েÉ'){
			res = res.replaceAll(strKey, '্যে');
		} else if(strKey === ''){
			
		} else {
		fresult = res.indexOf("É");
		i++;
	}		
	console.log(i);*/
	
	/***********************************/		

	return res;
	
}
	
function strReplace(source, target){
	var charsToReplace = [];
	var charsFinal = [];
	
	var charMap = setMap.split("\n");
	
	for( i = 0; i < charMap.length; i++){
	   if (charMap[i] !== ""){
		 var temp = charMap[i].split(" ");
		 charsToReplace[i] = temp[0];
		 charsFinal[i] = temp[1];
	   }
	}
	
	var bwdCharStr = document.getElementById(source).value;
	var uniCharStr = strAdjust(bwdCharStr);
	
	for( i = 0; i < charsToReplace.length; i++){
	   uniCharStr = uniCharStr.replaceAll(charsToReplace[i], charsFinal[i]);
	}
	
	document.getElementById(target).value = uniCharStr;
}

var setMap = `
œ² ক্র
ØV স্ট 
fË প্ৰ
OÀ ঘ্ন
š² ক্ত
aÈ ত্ম
‡ গ্ধ
Ú ্
¢ 'ি
­ 'ে
a ত 
h ব 
p স 
L ক
M খ 
R ছ 
b থ 
Û থ 
O ঘ
V ট 
l র 
e ন 
N গ 
Q চ 
g ফ 
m ল 
q হ 
z ।
T ঝ 
c দ 
W ঠ 
f প 
u য় 
C ই 
H এ 
n শ
i ভ 
k য
d ধ
¡ া
B আ 
A অ
r ক্ষ
£ ী
§ ূ
¥ ু
¤ ু
j ম
Ç ম
¨ ূ
s ড়
ü স্ব
Z ণ 
Ñ র্ 
É ্য
È ম
¾ ন্
J ও
o ষ
E উ
Ë ্র
Ê ্র
¿ ন্
œ ত্র
w ং
v ৎ
± ৗ
y ঁ
ö শু
ñ ম্ভ
Ä ব
S জ
ë ব্দ
« ৃ
Ô ল
ø ষ্ট
Ø স্
¹ ত
ç প্ত
Ù স্
Õ শ্
‰ ঙ্গ
ª ৃ
¦ উ
å ন্ধ
æ ন্ন
X ড
I ঐ
š ত্ত 
ð ম্ব
Ü দ্ধ
… গু
À ন
Ò ল্
° ৈ
ã ন্ঠ
à দ্ব 
x ঃ
ú স্ক
ï ভ্ৰ
» ত্র
ä ন্ড
K ঔ
ù ষ্ঠ
é ফ্র
G ঋ
â দ্র
è প্প
P ঙ
ˆ ঙ্ক
ý হু
`;