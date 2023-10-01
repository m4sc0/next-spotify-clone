"use client";

import LikeButton from '@/components/LikeButton';
import ListItem from '@/components/ListItem';
import MediaItem from '@/components/MediaItem';
import SongItem from '@/components/SongItem';
import useOnPlay from '@/hooks/useOnPlay';
import { Song } from '@/types';
import React from 'react'

interface SearchContentProps {
    songs: Song[];
};

const SearchContent: React.FC<SearchContentProps> = ({
    songs
}) => {
    const onPlay = useOnPlay(songs);

    if (songs.length === 0) {
        return (
            <div
                className='
                    flex
                    flex-col
                    gap-y-2
                    w-full
                    px-6
                    text-neutral-400
                '
            >
                No songs found
            </div>
        )
    }

    return (
        <div
            className='
                flex
                flex-col
                justify-between
                gap-y-2
                w-full
                px-6
                text-neutral-400
            '
        >
            {songs.map((item) => (
                <div
                    key={item.id}
                    className='flex items-center gap-x-4 w-full'
                >
                    <div className='flex-1 w-full'>
                        <MediaItem
                            onClick={(id: string) => onPlay(id)}
                            data={item}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default SearchContent