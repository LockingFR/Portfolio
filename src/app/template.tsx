'use client';

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import LoadingDots from './components/LoadingDots'
import { usePathname } from 'next/navigation'

export default function Template({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isHomePage]);

  if (!isHomePage) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LoadingDots />
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-grow pt-16"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
} 