

var list=document.getElementById('list');
var item=document.getElementById('todo_item');

var adBtn=document.querySelector('#add-btn').addEventListener('click',function(){
    
   if (item.value == '') {
      alert('please fill out input field...');
   }

   else{

    addtodo();

   }

});

function addtodo() {
	
	var li=document.createElement('li');
	var li_text=document.createTextNode(item.value);
	li.appendChild(li_text);
	list.appendChild(li);
	item.value="";

	//create delete button 

	var dltbtn=document.createElement('button');
	var txt_btn_del=document.createTextNode('DELETE');
	dltbtn.appendChild(txt_btn_del);

	dltbtn.setAttribute('onclick','delete_item(this)');
	dltbtn.setAttribute('class','dlt_btn');

    //create delete button

	var edit_btn=document.createElement('button');
	var edit_btn_txt=document.createTextNode("EDIT");
	edit_btn.appendChild(edit_btn_txt);

	edit_btn.setAttribute('onclick','edit_item(this)');
	edit_btn.setAttribute('class','edit_btn');
	

	li.appendChild(edit_btn);
	li.appendChild(dltbtn);

	





	console.log(li);

}


function delete_item(e){
   e.parentNode.remove();
}

function dlt_all(){
	list.innerHTML="";
}


function edit_item(e){
   
   var li_edit_txt=e.parentNode.firstChild.nodeValue;
   var newValue=prompt("Edit Your TODO you want to edit...",li_edit_txt);
   e.parentNode.firstChild.nodeValue=newValue;
   console.log(newValue);
   // var new_li_txt=
}