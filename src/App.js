import { useEffect, useState } from "react";
import ProfileGrid from "./components/ProfileGrid";

function App() {
  return (
    <div className="container mx-auto px-4 md:px-4 lg:px-0 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Users Profile</h1>
      </div>
      <ProfileGrid />
    </div>
  );
}

export default App;
