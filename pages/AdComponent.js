import { useEffect } from 'react';

const GoogleAd = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <ins className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1328835903818118"
        data-ad-slot="7802188225"
        data-ad-format="auto"
        data-full-width-responsive="true">
    </ins>
  );
};

export default GoogleAd;

