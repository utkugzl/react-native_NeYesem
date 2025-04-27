import {DefaultTheme} from 'react-native-paper';


const palette = {
  primary100: 'rgba(255, 245, 240, 1)', // çok açık
  primary99: 'rgba(255, 239, 233, 1)',
  primary95: 'rgba(255, 224, 213, 1)',
  primary90: 'rgba(255, 207, 190, 1)',
  primary80: 'rgba(255, 178, 146, 1)', // hafif pastel
  primary70: 'rgba(255, 158, 119, 1)', // biraz doygun
  primary60: 'rgba(253, 138, 93, 1)',  // biraz daha primary40'a yakın
  primary50: 'rgba(253, 131, 73, 1)',  // #FD8349
  primary40: 'rgba(220, 100, 50, 1)',  // biraz daha koyu
  primary30: 'rgba(180, 70, 35, 1)',   // daha koyu
  primary20: 'rgba(140, 45, 20, 1)',   // iyice koyu
  primary10: 'rgba(100, 30, 10, 1)',   // çok koyu
  primary0:  'rgba(20, 10, 5, 1)',     // neredeyse siyah
};

export const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: palette.primary50,
    primaryContainer: palette.primary90,
    // secondary: palette.secondary40,
    // secondaryContainer: palette.secondary90,
    // tertiary: palette.tertiary40,
    // tertiaryContainer: palette.tertiary90,
    // surface: palette.neutral99,
    // surfaceVariant: palette.neutralVariant90,
    // surfaceDisabled: color(palette.neutral10)
    //   .alpha(opacity.level2)
    //   .rgb()
    //   .string(),
    // background: palette.neutral99,
    // error: palette.error40,
    // errorContainer: palette.error90,
    onPrimary: palette.primary100,
    onPrimaryContainer: palette.primary10,
    // onSecondary: palette.secondary100,
    // onSecondaryContainer: palette.secondary10,
    // onTertiary: palette.tertiary100,
    // onTertiaryContainer: palette.tertiary10,
    // onSurface: palette.neutral10,
    // onSurfaceVariant: palette.neutralVariant30,
    // onSurfaceDisabled: color(palette.neutral10)
    //   .alpha(opacity.level4)
    //   .rgb()
    //   .string(),
    // onError: palette.error100,
    // onErrorContainer: palette.error10,
    // onBackground: palette.neutral10,
    // outline: palette.neutralVariant50,
    // outlineVariant: palette.neutralVariant80,
    // inverseSurface: palette.neutral20,
    // inverseOnSurface: palette.neutral95,
    inversePrimary: palette.primary80,
    // shadow: palette.neutral0,
    // scrim: palette.neutral0,
    // backdrop: color(MD3Colors.neutralVariant20).alpha(0.4).rgb().string(),
    // elevation: {
    //   level0: 'transparent',
    //   // Note: Color values with transparency cause RN to transfer shadows to children nodes
    //   // instead of View component in Surface. Providing solid background fixes the issue.
    // Opaque color values generated with `palette.primary99` used as background
    //   level1: 'rgb(247, 243, 249)', // palette.primary40, alpha 0.05
    //   level2: 'rgb(243, 237, 246)', // palette.primary40, alpha 0.08
    //   level3: 'rgb(238, 232, 244)', // palette.primary40, alpha 0.11
    //   level4: 'rgb(236, 230, 243)', // palette.primary40, alpha 0.12
    //   level5: 'rgb(233, 227, 241)', // palette.primary40, alpha 0.14
    // },
  },
};
