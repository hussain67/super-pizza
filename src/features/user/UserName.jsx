import { useSelector } from "react-redux";

function UserName() {
	const username = useSelector(state => state.user.userName);
	if (!username) return null;
	return <div className="text-sm hidden md:block">{username}</div>;
}

export default UserName;
