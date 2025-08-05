import React from 'react';
import { Bot, Zap } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
              <Bot className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">CouponAI</h1>
              <p className="text-blue-100">Intelligent Coupon Discovery Agent</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
            <Zap className="h-5 w-5 text-yellow-300" />
            <span className="text-sm font-medium">AI Powered</span>
          </div>
        </div>
      </div>
    </header>
  );
};