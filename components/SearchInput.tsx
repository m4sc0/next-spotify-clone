"use client";

import useDebounce from '@/hooks/useDebounce';
import { useRouter } from 'next/navigation';
import qs from "query-string";
import React, { useEffect } from 'react'
import Input from './Input';

const SearchInput = () => {
    const router = useRouter();
    const [value, setValue] = React.useState<string>('');
    const debouncedValue = useDebounce(value, 0);

    useEffect(() => {
        const query = {
            title: debouncedValue,
        };

        const url = qs.stringifyUrl({
            url: '/search',
            query: query,
        });

        router.push(url);
    }, [debouncedValue, router]);


    return (
        <Input
            placeholder='Search for a song'
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

export default SearchInput