"use client";

import Image from 'next/image';
import useLoadImage from '@/hooks/useLoadImage';
import { Song } from '@/types';
import React from 'react'
import LikeButton from './LikeButton';

interface MediaItemProps {
	showLikeButton?: boolean;
	data: Song;
	onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({
	showLikeButton = false,
	data,
	onClick
}) => {
	const imageUrl = useLoadImage(data);
	const handleClick = () => {
		if (onClick) {
			return onClick(data.id);
		}

		// TODO: Default turn on player
	}

	const likeBtn = (
		<LikeButton songId={data.id} className="px-2 transition hidden group-hover:block" />
	)

	return (
		<div
			onClick={handleClick}
			className='
				flex
				items-center
				gap-x-3
				cursor-pointer
				hover:bg-neutral-800/50
				w-full
				p-2
				rounded-md
				justify-between
				group
				transition
			'
		>
			<div
				className='
					relative
					rounded-md
					min-h-[48px]
					min-w-[48px]
					overflow-hidden
				'
			>
				<Image
					fill
					src={imageUrl || '/images/liked.png'}
					alt="Media Item"
					className='object-cover'
				/>
			</div>
			<div
				className='
					w-full
					flex
					flex-col
					gap-y-1
					overflow-hidden
				'
			>
				<p className='text-white font-semibold truncate'>
					{data.title}
				</p>
				<p className='text-neutral-400/90 text-sm truncate'>
					{data.author}
				</p>
			</div>
			{showLikeButton && likeBtn}
		</div>
	)
}

export default MediaItem