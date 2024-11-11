import { useState, useEffect } from 'react';
import { supabase, handleSupabaseError } from '../supabase';
import type { Database } from '../database.types';

type TableName = keyof Database['public']['Tables'];

export function useSupabaseQuery<T extends TableName>(
  tableName: T,
  options: {
    columns?: string;
    filter?: Record<string, unknown>;
    limit?: number;
  } = {}
) {
  const [data, setData] = useState<Database['public']['Tables'][T]['Row'][] | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      let query = supabase.from(tableName).select(options.columns || '*');

      if (options.filter) {
        Object.entries(options.filter).forEach(([key, value]) => {
          query = query.eq(key, value);
        });
      }

      if (options.limit) {
        query = query.limit(options.limit);
      }

      const [result, error] = await handleSupabaseError(query);

      setData(result?.data || null);
      setError(error);
      setLoading(false);
    }

    void fetchData();
  }, [tableName, options.columns, options.limit]);

  return { data, error, loading };
}