'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function StateAdmin() {
 
    const router = useRouter();
    
      useEffect(() => {
       
        router.replace('/state_admin/dashboard');
      }, [router]);
    
      return null;
  
}
