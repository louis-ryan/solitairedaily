import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/solitaire'); // Replace '/your-target-route' with your desired path.
  }, []);

  return null; // Or a loading spinner if you want to show something briefly
};

export default Home;
