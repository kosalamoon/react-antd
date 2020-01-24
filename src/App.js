import React from 'react';
import './App.css';
import { Layout } from "antd";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";

const App = () => (
   <Layout style={{ minHeight: '100vh' }}>
      <SideBar/>
      <Layout>
         <Header/>
         <Content/>
         <Footer/>
      </Layout>
   </Layout>
);

export default App;
