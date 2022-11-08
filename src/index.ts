import { Platform, StatusBar } from 'react-native';
import { getModel } from 'react-native-device-info';

const IPHONE_WITH_BUTTON_STATUSBAR_HEIGHT = 20;

const IPHONE_DEVICES_MAP: Record<string, number> = {
  'iPhone 14 Pro Max': 430,
  'iPhone 14 Pro': 393,
  'iPhone 14 Plus': 428,
  'iPhone 14': 390,
  'iPhone SE 3rd gen': 375,
  'iPhone 13 Pro Max': 428,
  'iPhone 13 Pro': 390,
  'iPhone 13': 390,
  'iPhone 13 mini': 375,
  'iPhone 12 Pro Max': 428,
  'iPhone 12 Pro': 390,
  'iPhone 12': 390,
  'iPhone 12 mini': 375,
  'iPhone SE 2nd gen': 375,
  'iPhone 11 Pro Max': 414,
  'iPhone 11 Pro': 375,
  'iPhone 11': 414,
  'iPhone XS Max': 414,
  'iPhone XS': 375,
  'iPhone XR': 414,
  'iPhone X': 375,
  'iPhone 8 Plus': 414,
  'iPhone 8': 375,
  'iPhone 7 Plus': 414,
  'iPhone 7': 375,
  'iPhone SE 1st gen': 320,
  'iPhone 6s Plus': 414,
  'iPhone 6s': 375,
  'iPhone 6 Plus': 414,
  'iPhone 6': 375,
};

const getIPhoneStatusBarHeight = (deviceName: string) => IPHONE_DEVICES_MAP[deviceName] || IPHONE_WITH_BUTTON_STATUSBAR_HEIGHT;

export const STATUS_BAR_HEIGHT = Platform.select({
  ios: getIPhoneStatusBarHeight(getModel()),
  android: StatusBar.currentHeight,
  default: 0,
});
