"use client"
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar"
import LoadingScreen from "./LoadingScreen";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an asynchronous operation (e.g., data fetching)
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when the data is loaded
    }, 2000); // Simulating a 2-second loading time
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        // Render your actual content when isLoading is false
        <Navbar />
      )}
    </>
  )
}