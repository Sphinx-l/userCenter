import React from 'react';
import { history, useModel, Link } from 'umi';
import { Button, Result } from 'antd';
const AdminLayout: React.FC = ({ children }) => {
  const { initialState } = useModel('@@initialState');
  const currentUser = initialState.currentUser;
  if (currentUser && currentUser.userRole == 1) {
    return <div>{children}</div>;
  } else {
    return (
      <Result
        status="403"
        title="403"
        style={{
          background: 'none',
        }}
        subTitle="Sorry, you don't have access to this page."
        extra={
          <Link to="/">
            <Button type="primary">Back to home</Button>
          </Link>
        }
      />
    );
  }
};

export default AdminLayout;
