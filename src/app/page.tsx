"use client";

import { useState } from "react";
import ResultCard from "@/components/ResultCard";
import LoadingSpinner from "@/components/LoadingSpinner";
import { AnalysisResult } from "@/types";

export default function Home() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username.replace("@", "") }),
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
      } else {
        const errorData = await response.json();
        alert(`Analysis failed: ${errorData.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            What&apos;s Your Pokémon? 🔮
          </h1>
          <p className="text-gray-600">
            Enter a Twitter handle and discover which Pokémon matches their personality!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="@username"
              className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
              disabled={isLoading}
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !username.trim()}
            className="w-full py-3 px-6 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? "Analyzing..." : "Check Pokémon"}
          </button>
        </form>

        {isLoading && <LoadingSpinner />}
        {result && <ResultCard result={result} />}

        {!result && !isLoading && (
          <div className="text-sm text-gray-500 space-y-2">
            <p>Inspired by personality analysis and Pokémon traits</p>
            <p>Just for fun! 🎉</p>
          </div>
        )}
      </div>
    </div>
  );
}
