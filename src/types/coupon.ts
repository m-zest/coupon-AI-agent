export interface Coupon {
  id: string;
  code: string;
  platform: 'makemytrip' | 'appy' | 'goibibo' | 'yatra' | 'cleartrip';
  title: string;
  description: string;
  discount: string;
  category: 'flights' | 'hotels' | 'packages' | 'buses' | 'cabs';
  validUntil: string;
  minAmount: number;
  maxDiscount?: number;
  isVerified: boolean;
  successRate: number;
  usageCount: number;
  termsAndConditions: string[];
}

export interface ScanProgress {
  platform: string;
  progress: number;
  status: 'pending' | 'scanning' | 'completed' | 'error';
  codesFound: number;
  codesWorking: number;
}