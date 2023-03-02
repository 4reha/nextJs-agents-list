import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function NotFound() {
  const router = useRouter();
  const [count, setCount] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      setCount(count - 1);
      if (count === 0)
        router.push('/');
    }, 1000);
  }, [count]);

  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>
        Going back to the <Link href="/">Homepage</Link> is {count} seconds...
      </p>
    </div>
  );
};

