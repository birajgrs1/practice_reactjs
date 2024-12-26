import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/HeaderSection";
import Footer from "./Components/FooterSection";
import Sidebar from "./Components/SidebarSection";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";
import PostListProvider from "./Store/Contexts/post-lists";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        {/* Sidebar Section */}
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

        <div className="content">
          {/* Header Section */}
          <Header />

          {selectedTab === "Home" && <PostList />}
          {selectedTab === "Create Post" && <CreatePost />}

          {/* Footer Section */}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
