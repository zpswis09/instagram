import {useSelector} from "react-redux";
import MyPage from "./MyPage/MyPage";

// 로그인한 유저의 아이디 끌고 오기 위한 컴포넌트(새로고침해도 유지됨)
// react-redux를 통해 로그인한 유저의 정보를 받아서 Suggest 폴더에 전달
const MyPageContainer = () => {
    const {user} = useSelector(({user}) => ({user: user.user}));
    return <MyPage user={user} />;
}

export default MyPageContainer;