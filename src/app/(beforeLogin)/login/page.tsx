'use client';

import Main from '@/src/app/(beforeLogin)/_components/Main';
import { useRouter } from 'next/navigation';
function Login() {
  const router =useRouter();
  router.replace('/i/flow/login');
  return (
    <Main />
  )
}

export default Login