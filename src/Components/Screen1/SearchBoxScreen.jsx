import { useState, useRef, lazy, Suspense } from 'react';
import { Box, Input, SimpleGrid } from '@chakra-ui/react';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';

import { mobilesListData, laptopsListData, watchesListData } from '../../data';

const override = css`
	display: block;
	margin: auto;
	border-color: teal;
`;

// import Card from './Card';
const Card = lazy(() => import('./Card'));

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
			<Box>
				{list.map(({ title, url }, i) => (
					<Card key={i} title={title} url={url} />
				))}
			</Box>
		);
	}

	return (
		<Box>
			<Input ref={userInputRef} placeholder="Search" w="50%" onChange={handleChangeInput} />
			<Suspense fallback={<ClipLoader css={override} />}>
				<SimpleGrid h="100%" p="10px" columns={3} spacingX="40px" spacingY="20px">
					<Box d="flex" flexDir="column">
						<Card title={'Mobiels'} bg="teal" />
						{renderList(mobilesList)}
					</Box>
					<Box d="flex" flexDir="column">
						<Card title={'Labtops'} bg="teal" />
						{renderList(laptopsList)}
					</Box>
					<Box d="flex" flexDir="column">
						<Card title={'Watches'} bg="teal" />
						{renderList(watchesList)}
					</Box>
				</SimpleGrid>
			</Suspense>
		</Box>
	);
}
