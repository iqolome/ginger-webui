//关于富文本的设置
var E = window.wangEditor
var editor = new E('#editor')
editor.customConfig.uploadImgShowBase64 = true // 使用 base64 保存图片
//editor.customConfig.uploadImgServer = '/upload'  // 上传图片到服务器
// 或者 var editor = new E( document.getElementById('editor') )

editor.customConfig.zIndex = 1000
editor.create();

/*添加文件*/
$("#add").click(function() {
	$("#files").click();
});
//显示选择的文件
$("#files").change(function() {
	let files = $("#files").get(0).files;
	let item = "";
	for(let i = 0; i < files.length; i++) {
		item += "<div class=\"item\">" + files[i].name + "</div>";
	}
	$("div.list").html(item);
});

function send() {
	let form = new FormData();
	let files = $("#files").get(0).files;
	if($("#files").val() != "") {
		for(let i = 0; i < files.length; i++) {
			form.append("file[" + i + "]", files[i]);
		}
		form.append("p1", "杨家有女初长成");
		form.append("p2", "养在深闺人未识");
		form.append("sender", $("#sender").val());
		form.append("recipients", $("#recipients").val());
		form.append("subject", $("#subject").val());
		form.append("content", editor.txt.html());+
		$.ajax({
			type:"post",
			url:"",
			contentType:'json',
			data:'form',
			async:true
		});
		
		console.log(form);
	}
}
function contentClear() {
	$("#files").val('');
	$("#recipients").val('');
	$("#subject").val('');
	$("div.list").html('');
	editor.txt.clear();

}