import { useEffect } from 'react';
import Navbar from '../components/Navbar';

const Header = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://use.typekit.net/foobar.js';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Header;
