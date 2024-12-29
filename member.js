function skillsMember(){
	var member = document.getElementById('member');
	var memberVal = member.options[member.selectedIndex].value;

	if(memberVal == 0){
		document.getElementById('skills').innerHTML = " ";
	}
	else if(memberVal == 1){
		document.getElementById('skills').innerHTML = "HTML, CSS, JavaScript";
	}
	else if(memberVal == 2){
		document.getElementById('skills').innerHTML = "PHP, MySQL";
	}
	else if(memberVal == 3){
		document.getElementById('skills').innerHTML = "C, C++, Java";
	}
	else if(memberVal == 4){
		document.getElementById('skills').innerHTML = "Python, Ruby";
	}
	else if(memberVal == 5){
		document.getElementById('skills').innerHTML = "Photoshop, Illustrator";
	}
	else if(memberVal == 6){
		document.getElementById('skills').innerHTML = "SEO, Marketing";
	}
	else if(memberVal == 7){
		document.getElementById('skills').innerHTML = "Writing, Translation";
	}
	else if(memberVal == 8){
		document.getElementById('skills').innerHTML = "Legal, Financial";
	}
	else if(memberVal == 9){
		document.getElementById('skills').innerHTML = "Other";
	}


    
}
