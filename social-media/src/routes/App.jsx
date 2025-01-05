import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; 
import Header from "../Components/HeaderSection";
import Footer from "../Components/FooterSection";
import Sidebar from "../Components/SidebarSection";
import PostListProvider from "../Store/Contexts/post-lists"; 
import { Outlet } from "react-router-dom";

function App() {
  // const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        {/* Sidebar Section */}
        <Sidebar
          // selectedTab={selectedTab}
          // setSelectedTab={setSelectedTab}
        />

        <div className="content">
          {/* Header Section */}
          <Header />
          <Outlet/>

          {/* 
          {selectedTab === "Home" && <PostList />}
          {selectedTab === "Create Post" && <CreatePost />} 
          */}

          {/* Footer Section */}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
