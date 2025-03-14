'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SystemAdmin() {
 
    const router = useRouter();
    
      useEffect(() => {
       
        router.replace('/system_admin/dashboard');
      }, [router]);
    
      return null;
  
}
