import { Platform, StatusBar } from 'react-native';
import { getModel } from 'react-native-device-info';

const IPHONE_WITH_BUTTON_STATUSBAR_HEIGHT = 20;

const IPHONE_DEVICES_MAP: Record<string, number> = {
  'iPhone 14 Pro Max': 54,
  'iPhone 14 Pro': 54,
  'iPhone 14 Plus': 47,
  'iPhone 14': 47,
  'iPhone SE 3rd gen': 20,
  'iPhone 13 Pro Max': 47,
  'iPhone 13 Pro': 47,
  'iPhone 13': 47,
  'iPhone 13 mini': 50,
  'iPhone 12 Pro Max': 47,
  'iPhone 12 Pro': 47,
  'iPhone 12': 47,
  'iPhone 12 mini': 50,
  'iPhone SE 2nd gen': 20,
  'iPhone 11 Pro Max': 44,
  'iPhone 11 Pro': 44,
  'iPhone 11': 48,
  'iPhone XS Max': 44,
  'iPhone XS': 44,
  'iPhone XR': 48,
  'iPhone X': 44,
  'iPhone 8 Plus': 20,
  'iPhone 8': 20,
  'iPhone 7 Plus': 20,
  'iPhone 7': 20,
  'iPhone SE 1st gen': 20,
  'iPhone 6s Plus': 20,
  'iPhone 6s': 20,
  'iPhone 6 Plus': 20,
  'iPhone 6': 20,
};

const getIPhoneStatusBarHeight = (deviceName: string) => IPHONE_DEVICES_MAP[deviceName] || IPHONE_WITH_BUTTON_STATUSBAR_HEIGHT;

export const STATUS_BAR_HEIGHT = Platform.select({
  ios: getIPhoneStatusBarHeight(getModel()),
  android: StatusBar.currentHeight,
  default: 0,
});
