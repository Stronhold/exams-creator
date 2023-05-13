import { Outlet, useNavigate } from "react-router-dom";
const Root = () => {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  return (
    <>
    <h1 className="go-home" onClick={goHome}>Go to home</h1>
      <Outlet />
    </>
  )
};

export default Root;
