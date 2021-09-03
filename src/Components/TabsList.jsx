import React from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Divider } from '@chakra-ui/react';
import SearchBoxScreen from './Screen1/SearchBoxScreen';
import ApiConfigScreen from './Screen2/ApiConfigScreen';
import Screen3 from './Screen3';

export default function TabsList() {
	return (
		<Box p={5}>
			<Tabs variant="soft-rounded" colorScheme="teal">
				<TabList d="flex" justifyContent="space-between" w="80%" m="auto">
					<Tab w="30%">Screen 1</Tab>
					<Divider w="100%" pt={5} />
					<Tab w="30%">Screen 2</Tab>
					<Divider w="100%" pt={5} />
					<Tab w="30%">Screen 3</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<SearchBoxScreen />
					</TabPanel>
					<TabPanel>
						<ApiConfigScreen />
					</TabPanel>
					<TabPanel>
						<Screen3 />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
}
