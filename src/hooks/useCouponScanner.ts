import { useState, useEffect } from 'react';
import { Coupon, ScanProgress } from '../types/coupon';
import { mockCoupons } from '../data/mockCoupons';

const platforms = ['makemytrip', 'appy', 'goibibo', 'yatra', 'cleartrip'];

export const useCouponScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState<ScanProgress[]>([]);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [scanComplete, setScanComplete] = useState(false);

  const initializeProgress = () => {
    return platforms.map(platform => ({
      platform,
      progress: 0,
      status: 'pending' as const,
      codesFound: 0,
      codesWorking: 0,
    }));
  };

  const startScan = () => {
    setIsScanning(true);
    setScanComplete(false);
    setCoupons([]);
    setProgress(initializeProgress());

    // Simulate scanning process
    platforms.forEach((platform, index) => {
      setTimeout(() => {
        // Start scanning this platform
        setProgress(prev => prev.map(p => 
          p.platform === platform 
            ? { ...p, status: 'scanning' as const }
            : p
        ));

        // Simulate progress updates
        const progressInterval = setInterval(() => {
          setProgress(prev => {
            const currentPlatform = prev.find(p => p.platform === platform);
            if (!currentPlatform || currentPlatform.progress >= 100) {
              clearInterval(progressInterval);
              return prev;
            }

            const newProgress = Math.min(currentPlatform.progress + Math.random() * 20, 100);
            const codesFound = Math.floor((newProgress / 100) * (Math.random() * 50 + 10));
            const codesWorking = Math.floor(codesFound * (0.7 + Math.random() * 0.25));

            return prev.map(p =>
              p.platform === platform
                ? {
                    ...p,
                    progress: newProgress,
                    codesFound,
                    codesWorking,
                    status: newProgress >= 100 ? 'completed' as const : 'scanning' as const,
                  }
                : p
            );
          });
        }, 200);

        // Complete scanning for this platform
        setTimeout(() => {
          clearInterval(progressInterval);
          setProgress(prev => prev.map(p =>
            p.platform === platform
              ? { ...p, progress: 100, status: 'completed' as const }
              : p
          ));

          // Add mock coupons for this platform
          const platformCoupons = mockCoupons.filter(c => c.platform === platform);
          setCoupons(prev => [...prev, ...platformCoupons]);

          // Check if all platforms are complete
          setTimeout(() => {
            setProgress(current => {
              const allComplete = current.every(p => p.status === 'completed');
              if (allComplete) {
                setIsScanning(false);
                setScanComplete(true);
              }
              return current;
            });
          }, 100);
        }, 2000 + Math.random() * 3000);
      }, index * 500);
    });
  };

  return {
    isScanning,
    progress,
    coupons,
    scanComplete,
    startScan,
  };
};