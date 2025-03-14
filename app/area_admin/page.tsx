'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AreaAdmin() {
 
    const router = useRouter();
    
      useEffect(() => {
       
        router.replace('/area_admin/dashboard');
      }, [router]);
    
      return null;
  
}
