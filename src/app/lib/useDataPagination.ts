import { useState, useEffect } from 'react';
import type { ApiResponse, ItemsRemaped,  } from './data-types';

export default function usePaginatedData (serverItems: ItemsRemaped[]) {
  
  const [hasNextPage, setHasNextPage] = useState({});
  const [items, setItems] = useState(serverItems);
  const [currentPage, setCurrentPage] = useState(2);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const url = process.env.VERCEL_BRANCH_URL ?? process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${url}/api/news?page=${currentPage}`);
        if (!response.ok) throw new Error(`Error: ${response.statusText}`);
        const { data }: { data:ApiResponse } = await response.json();
        
        setHasNextPage(data.pager.hasNextPage);
        
        setItems((prevItems) => [
          ...prevItems,
          ...data.items.map((item) => ({
            id: item.id,
            title: item.titel,
            label: item.labelValue,
            url: item.urlAlias,
            image: item.afbeelding?.afbeelding,
            description: item.lead,
          })),
        ]);
      } catch (err) {
        console.error('Error fetching data from api', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return {
    hasNextPage,
    items,
    loading,
    goToNextPage,
  };
};
