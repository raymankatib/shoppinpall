import { useState, useRef } from 'react';
import { Box, Input, SimpleGrid } from '@chakra-ui/react';

import Card from './Card';
import { mobilesListData, laptopsListData, watchesListData } from './../data';

export default function SearchBoxScreen() {
	const userInputRef = useRef();

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

	function renderList(list) {
		return (
			<Box d="flex" flexDir="column" alignItems="center">
				<Card title={'Mobiles'} bg="teal" />
				{list.map(({ title, url }) => (
					<Card title={title} url={url} />
				))}
			</Box>
		);
	}

	return (
		<Box>
			<Input ref={userInputRef} placeholder="Search" w="50%" onChange={handleChangeInput} />
			<SimpleGrid h="100%" p="10px" columns={3} spacingX="40px" spacingY="20px">
				{renderList(mobilesList)}
				{renderList(laptopsList)}
				{renderList(watchesList)}
			</SimpleGrid>
		</Box>
	);
}
