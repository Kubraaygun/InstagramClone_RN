import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M5.81038 19.7478C5.83176 19.4539 5.70787 19.1681 5.47873 18.9827C3.2792 17.2037 1.9 14.5525 1.9 11.5868C1.9 6.27627 6.38748 1.9 12.0098 1.9C17.6196 1.9 22.1078 6.27565 22.1078 11.5868C22.1078 16.8966 17.6092 21.2735 11.998 21.2735C11.0656 21.2735 10.1798 21.1544 9.32697 20.9277C9.15685 20.8825 8.97721 20.8882 8.81028 20.944L5.64643 22.0022L5.81038 19.7478Z"
      stroke="black"
      strokeWidth={1.8}
      strokeLinejoin="round"
    />
    <Path
      d="M10.1498 8.79528C10.2222 8.80571 10.2825 8.81614 10.3548 8.82656C11.428 9.05599 12.5252 10.0363 13.3693 10.6202C13.8396 10.954 14.2375 10.9227 14.7078 10.6098C15.7086 9.92154 16.7456 9.26456 17.7705 8.58671C18.0478 8.399 18.3372 8.20086 18.6748 8.45114C19.0486 8.72228 18.8195 9.01428 18.6266 9.28541C17.6137 10.6828 16.6129 12.0802 15.588 13.4672C14.8886 14.4266 13.8999 14.5622 12.8388 13.8843C12.1032 13.4046 11.3436 12.9562 10.6201 12.4556C10.1378 12.1219 9.73984 12.1636 9.28163 12.4765C8.26876 13.1648 7.24382 13.8218 6.21889 14.4996C5.94156 14.6873 5.65216 14.8854 5.31454 14.6247C4.97691 14.3745 5.15778 14.0929 5.33865 13.8322C6.3877 12.3931 7.42469 10.954 8.47374 9.51484C8.82343 9.0247 9.47456 8.73271 10.1498 8.79528Z"
      fill="black"
    />
  </Svg>
);
export default SVGComponent;
