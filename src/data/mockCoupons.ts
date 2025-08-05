import { Coupon } from '../types/coupon';

export const mockCoupons: Coupon[] = [
  {
    id: '1',
    code: 'TRAVEL2025',
    platform: 'makemytrip',
    title: 'New Year Travel Special',
    description: 'Get flat ₹3000 off on domestic flight bookings',
    discount: '₹3000 OFF',
    category: 'flights',
    validUntil: '2025-02-28',
    minAmount: 8000,
    maxDiscount: 3000,
    isVerified: true,
    successRate: 95,
    usageCount: 1247,
    termsAndConditions: [
      'Valid on domestic flights only',
      'Minimum booking amount ₹8000',
      'Valid till February 28, 2025',
      'Cannot be combined with other offers'
    ]
  },
  {
    id: '6',
    code: 'INTLFLIGHT25',
    platform: 'makemytrip',
    title: 'International Flight Mega Sale',
    description: 'Flat ₹5000 off on international flight bookings',
    discount: '₹5000 OFF',
    category: 'flights',
    validUntil: '2025-03-31',
    minAmount: 15000,
    maxDiscount: 5000,
    isVerified: true,
    successRate: 91,
    usageCount: 2156,
    termsAndConditions: [
      'Valid on international flights only',
      'Minimum booking amount ₹15000',
      'Valid for bookings made 7 days in advance',
      'Excludes peak season dates'
    ]
  },
  {
    id: '7',
    code: 'GLOBALFLY',
    platform: 'appy',
    title: 'Global Flight Explorer',
    description: 'Up to ₹8000 off on international destinations',
    discount: 'Up to ₹8000 OFF',
    category: 'flights',
    validUntil: '2025-04-15',
    minAmount: 25000,
    maxDiscount: 8000,
    isVerified: true,
    successRate: 88,
    usageCount: 1834,
    termsAndConditions: [
      'Valid on international flights to all destinations',
      'Minimum booking amount ₹25000',
      'Maximum discount ₹8000',
      'Valid for round-trip bookings only'
    ]
  },
  {
    id: '8',
    code: 'EUROPEFLY30',
    platform: 'makemytrip',
    title: 'Europe Flight Special',
    description: '30% off on flights to European destinations',
    discount: '30% OFF',
    category: 'flights',
    validUntil: '2025-05-30',
    minAmount: 35000,
    maxDiscount: 12000,
    isVerified: true,
    successRate: 93,
    usageCount: 967,
    termsAndConditions: [
      'Valid on flights to Europe only',
      'Minimum booking amount ₹35000',
      'Maximum discount ₹12000',
      'Valid for travel between March-September 2025'
    ]
  },
  {
    id: '9',
    code: 'USACANADA40',
    platform: 'appy',
    title: 'North America Flight Deal',
    description: 'Flat ₹6000 off on USA & Canada flights',
    discount: '₹6000 OFF',
    category: 'flights',
    validUntil: '2025-06-15',
    minAmount: 40000,
    maxDiscount: 6000,
    isVerified: true,
    successRate: 89,
    usageCount: 1245,
    termsAndConditions: [
      'Valid on flights to USA and Canada only',
      'Minimum booking amount ₹40000',
      'Valid for economy and premium economy classes',
      'Advance booking of 14 days required'
    ]
  },
  {
    id: '10',
    code: 'ASIATRAVEL',
    platform: 'makemytrip',
    title: 'Asia Pacific Explorer',
    description: '25% off on flights to Asian destinations',
    discount: '25% OFF',
    category: 'flights',
    validUntil: '2025-07-31',
    minAmount: 20000,
    maxDiscount: 7000,
    isVerified: true,
    successRate: 94,
    usageCount: 1678,
    termsAndConditions: [
      'Valid on flights to Asian destinations',
      'Minimum booking amount ₹20000',
      'Maximum discount ₹7000',
      'Valid for all cabin classes'
    ]
  },
  {
    id: '2',
    code: 'HOTEL50',
    platform: 'makemytrip',
    title: 'Hotel Booking Bonanza',
    description: 'Save up to 50% on premium hotel bookings',
    discount: 'Up to 50% OFF',
    category: 'hotels',
    validUntil: '2025-03-15',
    minAmount: 2500,
    isVerified: true,
    successRate: 89,
    usageCount: 892,
    termsAndConditions: [
      'Valid on hotel bookings above ₹2500',
      'Maximum discount ₹5000',
      'Valid for weekend bookings',
      'Advance booking required'
    ]
  },
  {
    id: '3',
    code: 'APPYFIRST',
    platform: 'appy',
    title: 'First Time User Discount',
    description: 'Exclusive offer for new users - flat ₹2000 off',
    discount: '₹2000 OFF',
    category: 'packages',
    validUntil: '2025-04-30',
    minAmount: 10000,
    maxDiscount: 2000,
    isVerified: true,
    successRate: 92,
    usageCount: 456,
    termsAndConditions: [
      'Valid for first-time users only',
      'Minimum package value ₹10000',
      'Valid on holiday packages',
      'One-time use per user'
    ]
  },
  {
    id: '4',
    code: 'BUSRIDE20',
    platform: 'makemytrip',
    title: 'Bus Journey Savings',
    description: 'Get 20% off on all bus bookings nationwide',
    discount: '20% OFF',
    category: 'buses',
    validUntil: '2025-01-31',
    minAmount: 500,
    maxDiscount: 200,
    isVerified: true,
    successRate: 87,
    usageCount: 1876,
    termsAndConditions: [
      'Valid on all bus routes',
      'Maximum discount ₹200',
      'Booking window: 7 days in advance',
      'Valid till January 31, 2025'
    ]
  },
  {
    id: '5',
    code: 'CABFREE100',
    platform: 'appy',
    title: 'Free Cab Rides',
    description: 'Get ₹100 off on your next cab booking',
    discount: '₹100 OFF',
    category: 'cabs',
    validUntil: '2025-02-15',
    minAmount: 300,
    maxDiscount: 100,
    isVerified: true,
    successRate: 94,
    usageCount: 2341,
    termsAndConditions: [
      'Valid on cab bookings above ₹300',
      'One use per day per user',
      'Valid in select cities only',
      'Cannot be used with surge pricing'
    ]
  }
];