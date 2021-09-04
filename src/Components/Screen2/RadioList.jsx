import React from 'react';
import { connect } from 'react-redux';
import { Text, Radio, RadioGroup, Stack } from '@chakra-ui/react';

const RadioList = ({ methods, selectedMethod, setSelectedMethod }) => {
	return (
		<RadioGroup onChange={(value) => setSelectedMethod(value)} value={selectedMethod}>
			<Stack direction="row" justifyContent="center">
				<Text>Method type:</Text>
				{methods.map((method) => (
					<Radio key={method} colorScheme="green" value={method}>
						{method}
					</Radio>
				))}
			</Stack>
		</RadioGroup>
	);
};

const mapStateToProps = ({ initState: { methods, selectedMethod } }) => ({
	methods,
	selectedMethod
});

const mapDispatch = ({ initState: { setSelectedMethodAction } }) => ({
	setSelectedMethod: setSelectedMethodAction
});

export default connect(mapStateToProps, mapDispatch)(RadioList);
