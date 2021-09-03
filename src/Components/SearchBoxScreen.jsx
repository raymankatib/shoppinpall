import { useState, useRef } from 'react';
import { Box, Input, SimpleGrid } from '@chakra-ui/react';

import Card from './Card';

export default function SearchBoxScreen() {
	const userInputRef = useRef();
	const mobilesListData = [
		{ title: 'Apple', url: 'https://image.flaticon.com/icons/png/512/731/731985.png' },
		{ title: 'Samsung', url: 'https://image.flaticon.com/icons/png/512/882/882849.png' },
		{ title: 'Xiaomi', url: 'https://image.flaticon.com/icons/png/512/732/732148.png' },
		{
			title: 'OnePlus',
			url: 'https://forums-images.oneplus.net/attachments/246/246971-b252c7ad6eca745c3ad9b8c91f7eb757.jpg'
		},
		{ title: 'Vivo', url: 'https://image.flaticon.com/icons/png/512/882/882813.png' }
	];

	const laptopsListData = [
		{ title: 'HP', url: 'https://image.flaticon.com/icons/png/512/882/882851.png' },
		{ title: 'Lenovo', url: 'https://image.flaticon.com/icons/png/512/882/882819.png' },
		{ title: 'Dell', url: 'https://image.flaticon.com/icons/png/512/882/882828.png' },
		{ title: 'Redmi', url: 'https://image.flaticon.com/icons/png/512/732/732148.png' },
		{ title: 'Apple', url: 'https://image.flaticon.com/icons/png/512/731/731985.png' }
	];
	const watchesListData = [
		{ title: 'Noise', url: 'https://cdn.shopper.com/images/store-logos/Gonoisecouponcode-1596637154688.png' },
		{ title: 'Pebble', url: 'https://iconape.com/wp-content/png_logo_vector/pebble-io.png' },
		{ title: 'Apple', url: 'https://image.flaticon.com/icons/png/512/731/731985.png' }
	];

	const [mobilesList, setMobilesList] = useState(mobilesListData);
	const [laptopsList, setLaptopsList] = useState(laptopsListData);
	const [watchesList, setWatchesList] = useState(watchesListData);

	function handleChangeInput() {
		const userInput = userInputRef.current.value.toUpperCase();
		const newFilteredMobList = mobilesListData.filter((creator) =>
			creator.title.toUpperCase().match(new RegExp(userInput, 'i'))
		);
		const newFilteredLabtopsList = laptopsListData.filter((creator) =>
			creator.title.toUpperCase().match(new RegExp(userInput, 'i'))
		);
		const newFilteredWatchesList = watchesListData.filter((creator) =>
			creator.title.toUpperCase().match(new RegExp(userInput, 'i'))
		);
		setMobilesList(newFilteredMobList);
		setLaptopsList(newFilteredLabtopsList);
		setWatchesList(newFilteredWatchesList);
	}

	return (
		<Box>
			<Input ref={userInputRef} placeholder="Search" w="50%" onChange={handleChangeInput} />
			<SimpleGrid h="100%" p="10px" columns={3} spacingX="40px" spacingY="20px">
				<Box d="flex" flexDir="column" alignItems="center">
					<Card title={'Mobiles'} bg="teal" />
					{mobilesList.map(({ title, url }) => (
						<Card title={title} url={url} />
					))}
				</Box>
				<Box d="flex" flexDir="column" alignItems="center">
					<Card title={'Laptops'} bg="teal" />
					{laptopsList.map(({ title, url }) => (
						<Card title={title} url={url} />
					))}
				</Box>
				<Box d="flex" flexDir="column" alignItems="center">
					<Card title={'Watches'} bg="teal" />
					{watchesList.map(({ title, url }) => (
						<Card title={title} url={url} />
					))}
				</Box>
			</SimpleGrid>
		</Box>
	);
}
