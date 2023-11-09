import { Platform, StatusBar } from 'react-native';
import { getModel } from 'react-native-device-info';

const IPHONE_WITH_BUTTON_STATUSBAR_HEIGHT = 20;

const IPHONE_DEVICES_MAP: Record<string, number> = {
  'iPhone 15 Pro Max': [430, 932, 54],
  'iPhone 15 Pro': [393, 852, 54],
  'iPhone 15 Plus': [430, 932, 54],
  'iPhone 15': [393, 852, 54],
  'iPhone 14 Pro Max': [430, 932, 54],
  'iPhone 14 Pro': [393, 852, 54],
  'iPhone 14 Plus': [428, 926, 47],
  'iPhone 14': [390, 844, 47],
  'iPhone SE 3rd gen': [375, 667, 20],
  'iPhone 13 Pro Max': [428, 926, 47],
  'iPhone 13 Pro': [390, 844, 47],
  'iPhone 13': [390, 844, 47],
  'iPhone 13 mini': [375, 812, 50],
  'iPhone 12 Pro Max': [428, 926, 47],
  'iPhone 12 Pro': [390, 844, 47],
  'iPhone 12': [390, 844, 47],
  'iPhone 12 mini': [375, 812, 50],
  'iPhone SE 2nd gen': [375, 667, 20],
  'iPhone 11 Pro Max': [414, 896, 44],
  'iPhone 11 Pro': [375, 812, 44],
  'iPhone 11': [414, 896, 48],
  'iPhone XS Max': [414, 896, 44],
  'iPhone XS': [375, 812, 44],
  'iPhone XR': [414, 896, 48],
  'iPhone X': [375, 812, 44],
  'iPhone 8 Plus': [414, 736, 20],
  'iPhone 8': [375, 667, 20],
  'iPhone 7 Plus': [414, 736, 20],
  'iPhone 7': [375, 667, 20],
  'iPhone SE 1st gen': [320, 568, 20],
  'iPhone 6s Plus': [414, 736, 20],
  'iPhone 6s': [375, 667, 20],
  'iPhone 6 Plus': [414, 736, 20],
  'iPhone 6': [375, 667, 20],
};

const getIPhoneStatusBarHeight = (deviceName: string) => IPHONE_DEVICES_MAP[deviceName] || IPHONE_WITH_BUTTON_STATUSBAR_HEIGHT;

export const STATUS_BAR_HEIGHT = Platform.select({
  ios: getIPhoneStatusBarHeight(getModel()),
  android: StatusBar.currentHeight,
  default: 0,
});
