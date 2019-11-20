import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

function BorderCorner(props, context) {
  // let borderSvg = require('./noun_border_2662628.svg');
  let borderSvg = require('./noun_border_2662636.svg');
  let size = props.size || 200;
  let height = props.height || size || 200;
  let width = props.width || size || 200;
  let rotation = props.rotation || '0deg';
  return (
    <Image
      source={borderSvg}
      style={{
        height,
        width,
        transform: [{ rotate: rotation }],
      }}
    />
  );
}

export default function App() {
  return (
    <View style={{ flex: 1, display: 'flex', flexDirection: 'column', opacity: 0.47 }}>
      <View style={styles.containerHorizontal}>
        <View style={styles.containerTop}>
          <BorderCorner rotation="270deg" />
          <BorderCorner rotation="0deg" />
        </View>
        <View
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            // backgroundColor: 'red',
          }}>
          <Image
            source={require('./Monogram.png')}
            style={{
              // 900x1000
              width: 180,
              height: 200,
            }}
          />
        </View>
        <View style={styles.containerBottom}>
          <BorderCorner rotation="180deg" />
          <BorderCorner rotation="90deg" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  containerHorizontal: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
  },
  containerBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
