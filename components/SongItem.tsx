"use client";

import useLoadImage from '@/hooks/useLoadImage';
import { Song } from '@/types';
import React from 'react'
import Image from 'next/image';
import PlayButton from './PlayButton';

interface SongItemProps {
    data: Song;
    onClick: (id: string) => void;
};

const SongItem: React.FC<SongItemProps> = ({
    data,
    onClick
}) => {
    const imagePath = useLoadImage(data);
    return (
        <div
            onClick={() => onClick(data.id)}
            className='
                relative
                group
                flex
                flex-col
                items-center
                justify-center
                rounded-md
                overflow-hidden
                gap-x-4
                cursor-pointer
                bg-neutral-600/10
                hover:bg-neutral-400/10
                transition
                p-3
            '
        >
            <div
                className='
                    relative
                    aspect-square
                    w-full
                    h-full
                    rounded-md
                    overflow-hidden
                    shadow-lg
                    mb-5
                '
            >
                <Image
                    className='object-cover'
                    src={imagePath || '/images/liked.png'}
                    fill
                    alt="Image"
                />
            </div>
            <div className='flex flex-col items-start w-full gap-y-1'>
                <p className='font-semibold truncate w-full'>
                    {data.title}
                </p>
                <p className='text-neutral-400/60 text-sm truncate w-full'>
                    By {data.author}
                </p>
            </div>
            <div className='
                absolute
                bottom-30
                right-5
            '>
                <PlayButton />
            </div>
        </div>
    )
}

export default SongItem