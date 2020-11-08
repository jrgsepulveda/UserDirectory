import axios from "axios";

const UsersList = () =>{
  return axios.get("https://randomuser.me/api/?results=200&nat=US");
}

export default UsersList;