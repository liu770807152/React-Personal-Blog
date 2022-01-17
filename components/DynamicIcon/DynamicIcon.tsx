import React from 'react';
import {
  HomeOutlined,
  ProfileOutlined,
  ContactsOutlined,
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined
} from '@ant-design/icons';

export interface DynamicIconProps {
  type: string,
  style?: string
}

export default function DynamicIcon({ type, style }): React.ReactElement<DynamicIconProps> {
  switch (type) {
    case 'HomeOutlined':
      return <HomeOutlined className={style && style} />;
    case 'ProfileOutlined':
      return <ProfileOutlined className={style && style} />;
    case 'SmileOutlined':
      return <ContactsOutlined className={style && style} />;
    case 'CalendarOutlined':
      return <CalendarOutlined className={style && style} />;
    case 'FolderOpenOutlined':
      return <FolderOpenOutlined className={style && style} />;
    case 'FireOutlined':
      return <FireOutlined className={style && style} />;
    default:
      return null;
  }
}
