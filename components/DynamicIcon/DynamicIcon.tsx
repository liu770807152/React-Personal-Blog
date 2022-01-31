import React from 'react';
import {
  HomeOutlined,
  ProfileOutlined,
  MailOutlined,
  CalendarOutlined,
  FolderOpenOutlined,
  FireOutlined
} from '@ant-design/icons';

export interface DynamicIconProps {
  type: string,
  fontSize?: string
}

export default function DynamicIcon({ type, fontSize }): React.ReactElement<DynamicIconProps> {
  switch (type) {
    case 'Home':
      return <HomeOutlined style={{fontSize: fontSize && fontSize}} />;
    case 'Blog':
      return <ProfileOutlined style={{fontSize: fontSize && fontSize}} />;
    case 'Contact':
      return <MailOutlined style={{fontSize: fontSize && fontSize}} />;
    case 'Calendar':
      return <CalendarOutlined style={{fontSize: fontSize && fontSize}} />;
    case 'Folder':
      return <FolderOpenOutlined style={{fontSize: fontSize && fontSize}} />;
    case 'Fire':
      return <FireOutlined style={{fontSize: fontSize && fontSize}} />;
    default:
      return null;
  }
}
