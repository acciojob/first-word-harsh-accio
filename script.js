function firstWord(s) {
  // your code here
	let str='';
	s=s.trim();
	let i=0;
	while(s[i]!=' ' && i<s.length){
		str+=s[i];
		i++;
	}
	return str;   
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
