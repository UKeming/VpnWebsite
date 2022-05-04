import axios from 'axios'
function checkAuth(){
    axios.get("http://143.198.65.33:9001/user/login-status",{
        withCredentials:true,
    })
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