import axios from 'axios'


function checkAuth(){
   
    axios.get("http://localhost:80/api/login-status")
  .then((data) => {
    if (data.code == 200) {
        return data.data.login;
    } else {
      alert("无法连接到服务器");
    }
  });
}
export default checkAuth;