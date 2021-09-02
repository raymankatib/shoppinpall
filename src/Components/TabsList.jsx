import React from 'react';
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Divider } from '@chakra-ui/react';

export default function TabsList() {
	return (
		<Box p={5}>
			<Tabs variant="soft-rounded" colorScheme="green">
				<TabList d="flex" justifyContent="space-between" w="80%" m="auto">
					<Tab w="30%">Screen 1</Tab>
					<Divider w="100%" pt={5} />
					<Tab w="30%">Screen 2</Tab>
					<Divider w="100%" pt={5} />
					<Tab w="30%">Screen 3</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<p>one!</p>
					</TabPanel>
					<TabPanel>
						<p>two!</p>
					</TabPanel>
					<TabPanel>
						<p>three!</p>
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
}
