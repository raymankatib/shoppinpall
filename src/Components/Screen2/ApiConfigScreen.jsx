import { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { Box, Text, Radio, RadioGroup, Stack, Select, Input } from '@chakra-ui/react';

import Selector from './Selector';
function ApiConfigScreen({ methods, selectedMethod, setSelectedMethod }) {
	const inputRef = useRef();

	function handleInputChange() {
		const userInput = inputRef.current.value;
		console.log(userInput);
	}

	return (
		<Box w="100%" m="auto">
			<RadioGroup onChange={(value) => setSelectedMethod(value)} value={selectedMethod}>
				<Stack direction="row" justifyContent="center" pt="10px">
					<Text>Method type:</Text>
					{methods.map((method) => (
						<Radio key={method} colorScheme="green" value={method}>
							{method}
						</Radio>
					))}
				</Stack>
				<Box d="flex">
					<Selector />
					<Input ref={inputRef} onChange={handleInputChange} placeholder="ex: https://www.url.com" />
				</Box>
			</RadioGroup>
		</Box>
	);
}

const mapStateToProps = ({ initState: { methods, selectedMethod } }) => ({
	methods,
	selectedMethod
});

const mapDispatch = ({ initState: { setSelectedMethodAction } }) => ({
	setSelectedMethod: setSelectedMethodAction
});

export default connect(mapStateToProps, mapDispatch)(ApiConfigScreen);
