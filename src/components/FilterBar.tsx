import React from 'react';
import { Filter, Search } from 'lucide-react';

interface FilterBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedPlatform: string;
  setSelectedPlatform: (platform: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchTerm,
  setSearchTerm,
  selectedPlatform,
  setSelectedPlatform,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="h-5 w-5 text-gray-600" />
        <h2 className="text-lg font-semibold">Filter & Search</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search coupons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <select
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Platforms</option>
          <option value="makemytrip">MakeMyTrip</option>
          <option value="appy">Appy</option>
          <option value="goibibo">Goibibo</option>
          <option value="yatra">Yatra</option>
          <option value="cleartrip">Cleartrip</option>
        </select>
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Categories</option>
          <option value="flights">All Flights</option>
          <option value="hotels">Hotels</option>
          <option value="packages">Packages</option>
          <option value="buses">Buses</option>
          <option value="cabs">Cabs</option>
        </select>
      </div>
    </div>
  );
};