import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { ScanProgress } from './components/ScanProgress';
import { CouponCard } from './components/CouponCard';
import { FilterBar } from './components/FilterBar';
import { useCouponScanner } from './hooks/useCouponScanner';
import { Search, Sparkles, Award } from 'lucide-react';

function App() {
  const { isScanning, progress, coupons, scanComplete, startScan } = useCouponScanner();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredCoupons = useMemo(() => {
    return coupons
      .filter(coupon => {
        const matchesSearch = coupon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            coupon.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            coupon.code.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPlatform = !selectedPlatform || coupon.platform === selectedPlatform;
        const matchesCategory = !selectedCategory || coupon.category === selectedCategory;
        
        return matchesSearch && matchesPlatform && matchesCategory;
      })
      .sort((a, b) => b.successRate - a.successRate)
      .slice(0, 5);
  }, [coupons, searchTerm, selectedPlatform, selectedCategory]);

  const hasStarted = isScanning || scanComplete;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {!hasStarted && (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl shadow-xl p-12 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                AI-Powered Coupon Discovery
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Let our intelligent agent scan across multiple travel platforms to find the best working coupon codes for domestic and international flights. 
                We'll validate each code and present the top 5 offers ranked by success rate.
              </p>
              <button
                onClick={startScan}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-3 mx-auto"
              >
                <Search className="h-6 w-6" />
                <span>Start AI Coupon Scan</span>
              </button>
            </div>
          </div>
        )}

        {isScanning && (
          <ScanProgress progress={progress} />
        )}

        {scanComplete && (
          <>
            <FilterBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedPlatform={selectedPlatform}
              setSelectedPlatform={setSelectedPlatform}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="h-6 w-6 text-yellow-500" />
                <h2 className="text-2xl font-bold text-gray-800">
                  Top {filteredCoupons.length} Working Coupons
                </h2>
              </div>
              <p className="text-gray-600">
                Our AI has validated these coupons and ranked them by success rate and popularity.
              </p>
            </div>

            {filteredCoupons.length > 0 ? (
              <div className="space-y-6">
                {filteredCoupons.map((coupon, index) => (
                  <CouponCard
                    key={coupon.id}
                    coupon={coupon}
                    rank={index + 1}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <div className="text-gray-400 mb-4">
                  <Search className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No coupons found</h3>
                <p className="text-gray-500">Try adjusting your filters or search terms.</p>
              </div>
            )}

            <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-3">Want to scan again?</h3>
              <p className="mb-6 text-blue-100">
                Our AI continuously finds new coupons. Run another scan to discover the latest offers!
              </p>
              <button
                onClick={startScan}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Run New Scan
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;