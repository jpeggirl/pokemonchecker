"use client";

import Image from 'next/image';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import { AnalysisResult } from '@/types';

interface ResultCardProps {
  result: AnalysisResult;
}

export default function ResultCard({ result }: ResultCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const downloadImage = async () => {
    if (cardRef.current) {
      try {
        const canvas = await html2canvas(cardRef.current, {
          backgroundColor: '#ffffff',
          scale: 2,
          useCORS: true,
        });
        
        const link = document.createElement('a');
        link.download = `${result.user.username}-pokemon-match.png`;
        link.href = canvas.toDataURL();
        link.click();
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
  };

  const shareOnTwitter = () => {
    const text = `I'm ${result.pokemon.name}! 🔮 What's your Pokémon? Check yours at`;
    const url = window.location.origin;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className="space-y-6">
      <div 
        ref={cardRef}
        className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 shadow-xl max-w-md mx-auto"
      >
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center space-x-4">
            <Image
              src={result.user.profile_image_url}
              alt={`${result.user.username} profile`}
              width={60}
              height={60}
              className="rounded-full border-4 border-white shadow-lg"
            />
            <div className="text-2xl font-bold">⚡</div>
            <Image
              src={result.pokemon.image}
              alt={result.pokemon.name}
              width={80}
              height={80}
              className="drop-shadow-lg"
            />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">
              @{result.user.username}
            </h2>
            <h3 className="text-3xl font-bold text-purple-600">
              {result.pokemon.name}
            </h3>
            <div className="flex justify-center space-x-2">
              {result.pokemon.types.map((type) => (
                <span
                  key={type}
                  className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-sm font-medium"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/50 rounded-xl p-4 space-y-3">
            <p className="text-sm text-gray-600 leading-relaxed">
              {result.reasoning}
            </p>
            
            {result.suggested_move && (
              <div className="border-t border-white/30 pt-3">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-semibold text-purple-700">
                    ⚡ Signature Move:
                  </span>
                  <span className="px-2 py-1 bg-purple-200 text-purple-800 rounded text-sm font-medium">
                    {result.suggested_move}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {result.move_explanation}
                </p>
              </div>
            )}
          </div>

          <div className="text-xs text-gray-500 space-y-1">
            {result.fun_facts.map((fact, index) => (
              <p key={index}>• {fact}</p>
            ))}
          </div>

          <div className="pt-4 border-t border-white/30">
            <p className="text-sm font-medium text-gray-600">
              What's Your Pokémon? 🔮
            </p>
            <p className="text-xs text-gray-500">
              Discover your Pokémon personality match!
            </p>
          </div>
        </div>
      </div>

      <div className="flex space-x-4 justify-center">
        <button
          onClick={downloadImage}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
        >
          Download Image
        </button>
        <button
          onClick={shareOnTwitter}
          className="px-6 py-3 bg-sky-400 text-white rounded-xl hover:bg-sky-500 transition-colors font-medium"
        >
          Share on Twitter
        </button>
      </div>

      <div className="text-center">
        <button
          onClick={() => window.location.reload()}
          className="text-purple-600 hover:text-purple-700 font-medium"
        >
          Try Another Username
        </button>
      </div>
    </div>
  );
}