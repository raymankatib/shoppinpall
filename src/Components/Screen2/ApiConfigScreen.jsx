import { useState } from 'react';
import { connect } from 'react-redux';
import { Box, Button } from '@chakra-ui/react';

import Selector from './Selector';
import UrlInput from './UrlInput';
import RadioList from './RadioList';
import HeaderComponent from './HeaderComponent';
import SubmitButton from './SubmitButton';

function ApiConfigScreen({}) {
	const [numbers, setNumbers] = useState([1]);

	function renderHeaders() {
		return numbers.map((n) => <HeaderComponent key={n} number={n} />);
	}

	return (
		<Box w="75%" m="auto">
			<RadioList />
			<Box d="flex" pt={'10px'}>
				<Selector />
				<UrlInput />
			</Box>
			<Box pt={'10px'}>
				<Button m={1} onClick={() => setNumbers([...numbers, numbers.length + 1])}>
					Add header
				</Button>
				{renderHeaders()}
				<SubmitButton />
			</Box>
		</Box>
	);
}

const mapStateToProps = ({ initState: {} }) => ({});

const mapDispatch = ({ initState: {} }) => ({});

export default connect(mapStateToProps, mapDispatch)(ApiConfigScreen);
