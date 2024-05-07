'use client';

// eslint-disable-next-line import/no-extraneous-dependencies
import Spline from '@splinetool/react-spline';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './spline.scss';
import { usePathname } from 'next/navigation';
import Spinner from '@/components/spinner/spinner';

const sceneUrl = 'https://prod.spline.design/wDppaG99uxF-mPel/scene.splinecode';

export default function SplineWrapper() {
  // region [Hooks]

  const pathname = usePathname();
  const [isRender, setIsRender] = useState(false);
  const [isRenderOnPath, setIsRenderOnPath] = useState(false);

  // endregion

  // region [Styles]

  const rootClass = useMemo(() => {
    if (isRenderOnPath) {
      return 'kku_spline__wrapper__render-on';
    }
    return 'kku_spline__wrapper__render-off';
  }, [isRenderOnPath]);

  // endregion

  // region [Events]

  const onRender = useCallback(() => {
    setIsRenderOnPath(true);
  }, []);

  const onLoad = useCallback(() => {
    setIsRender(true);
  }, []);

  // endregion

  // region [Effects]

  useEffect(() => {
    if (pathname === '/') {
      onRender();
    } else if (isRenderOnPath) {
      setIsRenderOnPath(false);
    }
  }, [pathname, onRender, isRenderOnPath]);

  // endregion

  return (
    <div className={`kku_spline__wrapper ${rootClass}`}>
      {!isRender && <Spinner />}
      {(isRenderOnPath || isRender) && <Spline className="kku__spline" scene={sceneUrl} onLoad={onLoad} />}
    </div>
  );
}
