"use client"
import { useEffect, useState } from "react";
import LoadingScreen from "./LoadingScreen";
import PageContainer from "./components/PageContainer"
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an asynchronous operation (e.g., data fetching)
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when the data is loaded
    }, 700); // Simulating a 2-second loading time
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <PageContainer />
      )}
    </>
  )
}