import React from 'react';
import { ScanProgress as ScanProgressType } from '../types/coupon';
import { CheckCircle, Loader, AlertCircle, Globe, Bot } from 'lucide-react';

interface ScanProgressProps {
  progress: ScanProgressType[];
}

export const ScanProgress: React.FC<ScanProgressProps> = ({ progress }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'scanning':
        return <Loader className="h-5 w-5 text-blue-500 animate-spin" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Globe className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'scanning':
        return 'bg-blue-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-xl font-semibold mb-6 flex items-center">
        <Bot className="h-6 w-6 mr-2 text-blue-600" />
        AI Scanning Progress
      </h2>
      
      <div className="space-y-4">
        {progress.map((item) => (
          <div key={item.platform} className="border border-gray-100 rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-3">
                {getStatusIcon(item.status)}
                <span className="font-medium capitalize text-gray-800">
                  {item.platform.replace(/([A-Z])/g, ' $1').trim()}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                {item.codesWorking}/{item.codesFound} working
              </div>
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Progress</span>
                <span>{item.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ease-out ${getStatusColor(item.status)}`}
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};