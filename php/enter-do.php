<?php
	header("Content-type:text/html;charset=utf-8");
	
	$link=mysql_connect("127.0.0.1","root","");
	if(!$link){
		die("链接失败");
	};
	mysql_select_db("qq");
	mysql_query("set names utf8");
	
	if(!empty($_POST)){
		$username=$_POST["account"];
		$password=$_POST["password"];
		$sql="select * from user where account='$username'";
		$re=mysql_query($sql);
		$info=mysql_fetch_assoc($re);
		$sql2="select * from user where account='$username' and password='$password'";
		$re2=mysql_query($sql2);
		$info2=mysql_fetch_assoc($re2);
		if($info2){
			echo "<script>location.href='../html/msg.html'</script>";
		}else if(!$info){
			echo "<script>alert('用户名不存在');location.href='../html/enter-page.html'</script>";
		}else{
			echo "<script>alert('密码有误');location.href='../html/enter-page.html'</script>";
		}
	}

	$sql3="select * from user";
	$re3=mysql_query($sql3);
	while($info3=mysql_fetch_assoc($re3)){
		$arr[]=$info3;
	}
	echo json_encode($arr);

?>