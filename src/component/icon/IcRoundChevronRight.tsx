import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {size?: number; color?: string};

function IcRoundChevronRight(props: Props) {
  const {size = 24, color = '#000'} = props;
  return (
    <Svg width={size} height={size} color={color} viewBox="0 0 24 24" {...props}>
      <Path
        fill={color}
        d="M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"
      />
    </Svg>
  );
}

export default IcRoundChevronRight;
