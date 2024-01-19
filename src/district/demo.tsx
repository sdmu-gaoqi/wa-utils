import React from 'react';
import District from './district';

const district = new District();

export default () => <div>{JSON.stringify(district)}</div>;
