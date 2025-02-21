// app/components/ui/badge.tsx
import React from 'react';

interface BadgeProps {
  text: string;
  color?: string;
}

export const Badge: React.FC<BadgeProps> = ({ text, color = 'blue' }) => {
  const badgeStyles = {
    padding: '5px 10px',
    borderRadius: '12px',
    backgroundColor: color,
    color: 'white',
    fontWeight: 'bold',
  };

  return <span style={badgeStyles}>{text}</span>;
};
