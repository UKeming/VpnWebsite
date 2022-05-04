function checkAuth(){
    fetch("http://localhost:9001/user/login-status",{method:"POST",credentials:"include"})
  .then((response) => response.json())
  .then((data) => {
    if (data.code == 200) {
        return data.data.login;
    } else {
      alert("无法连接到服务器");
    }
  });
}
export default checkAuth;