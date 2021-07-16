import Card from "../UI/Card";
import classes from './UserList.module.css'
const UserList = (props) => {
  let content = <p>It seems a little empty down here!</p>
  if(props.users.length > 0){
     content = ( <ul>
        {props.users.map((user) => (
          <li>{user.name} ({user.age} Years)</li>
        ))}
      </ul>);
  }
  return (
    <Card className = {classes.users}>
      {content}
    </Card>
  );
};
export default UserList;
