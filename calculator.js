var tds=document.querySelectorAll("#table_id td");
		for(var i=0;i<tds.length;i++){
			tds[i].addEventListener("click",function(){
				var val=this.innerText;
				if(val=="="){
					let res=document.getElementById('result_id').innerText
					document.getElementById('result_id').innerText=eval(res);
				}
				else{
					if(val=='AC'){
						document.getElementById('result_id').innerText='';
					}
					else{
						document.getElementById('result_id').innerText+=val;
					}
				}
			})
		}