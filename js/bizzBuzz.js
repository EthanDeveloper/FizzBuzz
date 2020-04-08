for(let i = 1; i <= 100; i++){
	if(i % 3 == 0 && i % 5 == 0){
		document.write("bizz buzz" + "<br>");
	} else {
		if (i % 3 == 0) {
		document.write("bizz" + "<br>");
	} else if(i % 5 == 0){
		document.write("buzz" + "<br>");
	}else {
		document.write(i + "<br>");
	}
	}

}