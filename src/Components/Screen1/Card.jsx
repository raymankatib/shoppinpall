import { Box, Avatar, Text } from '@chakra-ui/react';

export default function Card({ title, url, bg }) {
	const propsValue = {
		p: '10px',
		d: 'flex',
		m: '5px',
		w: '75%',
		maxW: '230px',
		borderRadius: '10px',
		cursor: 'pointer',
		color: 'white'
		// ,
	};
	return (
		<Box
			key={title}
			bg={bg || 'teal.400'}
			{...propsValue}
			_hover={{ boxShadow: '4px 6px lightgray', color: 'lightgray' }}
		>
			{url && <Avatar bg={bg || 'teal.400'} src={url} size="md" />}
			<Text m="auto" fontSize="xl">
				{title}
			</Text>
		</Box>
	);
}
