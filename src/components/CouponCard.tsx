import React, { useState } from 'react';
import { Coupon } from '../types/coupon';
import { 
  Copy, 
  CheckCircle, 
  Calendar, 
  Users, 
  TrendingUp, 
  ChevronDown, 
  ChevronUp,
  Plane,
  Building,
  Package,
  Bus,
  Car
} from 'lucide-react';

interface CouponCardProps {
  coupon: Coupon;
  rank: number;
}

export const CouponCard: React.FC<CouponCardProps> = ({ coupon, rank }) => {
  const [copied, setCopied] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(coupon.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'flights':
        return <Plane className="h-5 w-5" />;
      case 'hotels':
        return <Building className="h-5 w-5" />;
      case 'packages':
        return <Package className="h-5 w-5" />;
      case 'buses':
        return <Bus className="h-5 w-5" />;
      case 'cabs':
        return <Car className="h-5 w-5" />;
      default:
        return <Package className="h-5 w-5" />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'makemytrip':
        return 'bg-red-500';
      case 'appy':
        return 'bg-blue-500';
      case 'goibibo':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'flights':
        return 'text-sky-600 bg-sky-100';
      case 'hotels':
        return 'text-purple-600 bg-purple-100';
      case 'packages':
        return 'text-green-600 bg-green-100';
      case 'buses':
        return 'text-orange-600 bg-orange-100';
      case 'cabs':
        return 'text-yellow-600 bg-yellow-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
              #{rank}
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <div className={`w-3 h-3 rounded-full ${getPlatformColor(coupon.platform)}`} />
                <span className="text-sm font-medium text-gray-600 capitalize">
                  {coupon.platform.replace(/([A-Z])/g, ' $1').trim()}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{coupon.title}</h3>
            </div>
          </div>
          <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${getCategoryColor(coupon.category)}`}>
            {getCategoryIcon(coupon.category)}
            <span className="capitalize">{coupon.category}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">{coupon.description}</p>

        <div className="flex items-center justify-between mb-4">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg font-bold">
            {coupon.discount}
          </div>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <TrendingUp className="h-4 w-4" />
              <span>{coupon.successRate}% success</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{coupon.usageCount.toLocaleString()} uses</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-sm text-gray-600">Valid till {coupon.validUntil}</span>
          </div>
          <span className="text-sm text-gray-600">Min: ₹{coupon.minAmount.toLocaleString()}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="bg-gray-100 px-4 py-2 rounded-lg flex items-center space-x-2 flex-1 mr-3">
            <code className="font-mono font-bold text-lg text-gray-800">{coupon.code}</code>
          </div>
          <button
            onClick={handleCopy}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200"
          >
            {copied ? (
              <>
                <CheckCircle className="h-4 w-4" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="w-full mt-4 flex items-center justify-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
        >
          <span className="text-sm">Terms & Conditions</span>
          {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {showDetails && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <ul className="space-y-2 text-sm text-gray-600">
              {coupon.termsAndConditions.map((term, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};