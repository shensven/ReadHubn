import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {size?: number; color?: string};

function IcRoundOpenInNew(props: Props) {
  const {size = 24, color = '#000'} = props;
  return (
    <Svg width={size} height={size} color={color} viewBox="0 0 24 24" {...props}>
      <Path
        fill={color}
        d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13a.996.996 0 1 0 1.41 1.41L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1z"
      />
    </Svg>
  );
}

export default IcRoundOpenInNew;
