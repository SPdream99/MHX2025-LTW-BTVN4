function changeText(){
	document.getElementById("greeting").textContent = "Chào mừng bạn đến với bài tập DOM!";
}

document.getElementsByTagName("button")[1].addEventListener("click",function(){document.getElementById("box").style.backgroundColor="orange"});

let arrList = document.getElementById("todoList").children;

for(i = 0; i<arrList.length; i++){
  let a = arrList[i];
  a.getElementsByTagName("button")[0].addEventListener("click", function(){removeTodo(a);});
}

function addLi(){
	let t = document.getElementById("todoInput").value;
	if (t!=""){
		let a = document.createElement("li");
		a.innerHTML = `<span>${t}</span> <button>Xóa</button></li>`;
		a.getElementsByTagName("button")[0].addEventListener("click", function(){removeTodo(a);});
		document.getElementById("todoList").appendChild(a);
	}
}

document.getElementsByTagName("button")[2].addEventListener("click", addLi);

function removeTodo(buttonElement){
	buttonElement.remove();
}

function changeImage(){
	document.getElementById("myImage").src = 'https://www.svgrepo.com/show/452030/avatar-default.svg';
}

function toggleHighlight(){
	let cList = document.getElementById("toggleClassText").classList;
	if(cList.contains("highlight")){
		cList.remove("highlight");
	}
	else{
		cList.add("highlight");
	}
}