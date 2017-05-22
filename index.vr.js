import React, { Component } from 'react';
import {
	AppRegistry,
	asset,
	Model,
	Plane,
	Pano,
	Text,
	View
} from 'react-vr';

import seedrandom from 'seedrandom';

const Background = () => (
  <Pano source={asset('chess-world.jpg')} />
);

const eyeHeight = 1.5;

const Tree = ({ x, z }) => (
  <Model
    source={{
      obj: asset('tree.obj'),
      mtl: asset('tree.mtl'),
    }}
    style={{
      transform: [
        { translate: [x, -eyeHeight, z] },
      ]
    }}
  />
);

const TreeField = ({ count=5, side=10, seed }) => {
  const rng = !!seed ? seedrandom(seed) : Math.random;
  const d = () => side * (rng() - 0.5);
  const list = Array.from(Array(count).keys());
  return (
    <View>
      {list.map((_, i) => (
        <Tree key={i} x={d()} z={d()} />
      ))}
    </View>
  );
};

const HelloText = () => (
  <Text
    style={{
      backgroundColor: '#777879',
      fontSize: 0.8,
      fontWeight: '400',
      layoutOrigin: [0.5, 0.5],
      paddingLeft: 0.2,
      paddingRight: 0.2,
      textAlign: 'center',
      textAlignVertical: 'center',
      transform: [
        {translate: [0, 0, -3]}
      ],
    }}>
    hello
  </Text>
);

const Ground = () => (
	<Plane
	  dimWidth={100}
	  dimHeight={100}
	  style={{
		  transform: [
			  { translate: [0, -eyeHeight, -5]},
			  { rotateX: -90 },
		  ],
		  color: 'white',
	  }}
	/>
);

const WelcomeToVR = () => (
  <View>
    <TreeField seed={'blah'} />
    <Ground />
  </View>
);


AppRegistry.registerComponent('snow_forest', () => WelcomeToVR);

export default WelcomeToVR;
