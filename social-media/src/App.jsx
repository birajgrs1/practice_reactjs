import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./Components/HeaderSection";
import Footer from "./Components/FooterSection";
import Sidebar from "./Components/SidebarSection";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";

function App() {
  return (
    <>
      <div className="app-container">
        {/* Sidebar Section */}
        <Sidebar />

        <div className="content">
          {/* Header Section */}
          <Header />

          {/* Applying Form */}
          <CreatePost />

          {/* All Posts */}
          <PostList/>

          {/* Footer Section */}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
