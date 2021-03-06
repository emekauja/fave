import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import Reanimated, {
  useSharedValue,
  withRepeat,
  withTiming,
  useAnimatedStyle,
  interpolate,
} from 'react-native-reanimated';
import { ILayout, ISkeletonLoaderProps } from '../../types';
import LinearGradient from 'react-native-linear-gradient';

const SPEED = 800;

export const SkeletonLoader: React.FC<ISkeletonLoaderProps> = ({
  children,
  backgroundColor,
  highlightColor,
}) => {
  const [layout, setLayout] = React.useState<ILayout>();
  const shared = useSharedValue(0);

  React.useEffect(() => {
    shared.value = withRepeat(withTiming(1, { duration: SPEED }), Infinity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: interpolate(
          shared.value,
          [0, 1],
          [layout ? -layout.width : 0, layout ? layout.width : 0],
        ),
      },
    ],
  }));

  if (!layout?.width && !layout?.height) {
    return (
      <View onLayout={event => setLayout(event.nativeEvent.layout)}>
        {children}
      </View>
    );
  }

  return (
    <MaskedView
      style={{ height: layout.height, width: layout.width }}
      maskElement={<View>{children}</View>}>
      <View style={[styles.background, { backgroundColor: backgroundColor }]} />
      <Reanimated.View style={[animatedStyles, StyleSheet.absoluteFill]}>
        <MaskedView
          style={StyleSheet.absoluteFill}
          maskElement={
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={StyleSheet.absoluteFill}
              colors={['transparent', 'black', 'transparent']}
            />
          }>
          <View
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: highlightColor },
            ]}
          />
        </MaskedView>
      </Reanimated.View>
    </MaskedView>
  );
};

export const Loader = ({ style }) => {
  return <View style={[style ? style : styles.loaderSize, styles.loader]} />;
};

const styles = StyleSheet.create({
  loader: { backgroundColor: '#fff' },
  loaderSize: { width: 100, height: 100 },
  background: {
    flexGrow: 1,
    overflow: 'hidden',
  },
});
