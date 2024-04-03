import React, { useEffect, useRef } from 'react';
import { ScrollIntersection } from 'wa-utils';

const Demo = () => {
  const scrollIntersection = new ScrollIntersection();
  const ref = useRef(null);
  const colors = ['blue', 'red', 'yellow', 'green'];

  useEffect(() => {
    scrollIntersection.init(ref.current!, {
      notice: (index) => {
        console.log(`当前元素视图`, colors[index]);
      },
    });

    return () => {
      // 结束监听
      scrollIntersection.remove();
    };
  }, []);

  return (
    <div ref={ref} style={{ height: '200px', overflow: 'auto' }}>
      {colors.map((item) => (
        <div
          key={item}
          style={{ height: '150px', background: item, marginBottom: '10px' }}
        ></div>
      ))}
    </div>
  );
};

export default Demo;
