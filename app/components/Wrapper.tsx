'use client'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Loader from '../../loading';
const Wrapper = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();


  return (
    <div>
      {loading ? <Loader /> : null}
      {/* Your router logic */}
    </div>
  );
};

export default Wrapper;
