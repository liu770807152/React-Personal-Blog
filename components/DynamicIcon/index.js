import React from 'react';
import {
  HomeOutlined,
  ProfileOutlined,
  SmileOutlined
} from '@ant-design/icons';

export default function DynamicIcon({ type }) {
  switch (type) {
    case 'HomeOutlined':
      return <HomeOutlined style={{ fontSize: '1.2rem' }} />;
    case 'ProfileOutlined':
      return <ProfileOutlined style={{ fontSize: '1.2rem' }} />;
    case 'SmileOutlined':
      return <SmileOutlined style={{ fontSize: '1.2rem' }} />;
    default:
      return null;
  }
}
