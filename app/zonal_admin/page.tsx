'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Zones() {
 
    const router = useRouter();
    
      useEffect(() => {
       
        router.replace('/zonal_admin/dashboard');
      }, [router]);
    
      return null;
  
}
