import React from 'react';

export default () => {
  const prevScrollY = React.useRef();
  const [isHidden, setIsHidden] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setIsHidden(isHiddenInner => {
        const scrolledDown = window.scrollY > prevScrollY.current;
        if (scrolledDown && !isHiddenInner) {
          return true;
        }
        if (!scrolledDown && isHiddenInner) {
          return false;
        }
        prevScrollY.current = window.scrollY;
        return isHiddenInner;
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return isHidden;
};
