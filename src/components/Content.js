import * as React from "react";
import { Layout } from "antd";
import Login from "./Login";

const Content = () => (
   <Layout.Content style={{ margin: 5, padding: 10, background: '#fff' }}>
      <Login />
   </Layout.Content>
);

export default Content;
