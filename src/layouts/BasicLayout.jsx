import { Link, Outlet, useNavigate } from 'react-router-dom';

function BasicLayout() {

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default BasicLayout;
