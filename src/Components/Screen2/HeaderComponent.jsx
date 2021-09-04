import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Input, Checkbox } from '@chakra-ui/react';

const HeaderComponent = ({ userInput, updateUserInput, userHeaders, setUserHeaders }) => {
	const [checked, setChecked] = useState(false);
	const [keyValue, setKeyValue] = useState('');
	const [valueValue, setValueValue] = useState('');

	function handleKeyChange(e) {
		const userKeyInput = e.target.value;

		setKeyValue(userKeyInput);
	}
	function handleValueChange(e) {
		const userValueInput = e.target.value;
		setValueValue(userValueInput);
	}

	function handleCheckChange(e) {
		const userChecked = e.target.checked;

		const payload = {
			key: keyValue,
			value: valueValue
		};
		if (!userChecked && userHeaders) {
			return setUserHeaders(userHeaders.filter((load) => load.key !== keyValue));
		} else if (userChecked && userHeaders) {
			setUserHeaders([...userHeaders, payload]);
		}
	}

	return (
		<Box w="100%">
			<Box width={'50%'} height="40px" d="flex">
				<Checkbox onChange={(e) => handleCheckChange(e)} pr={5} value={checked}></Checkbox>
				<Input variant="flushed" onChange={(e) => handleKeyChange(e)} w="30%" mr={1} key="key" placeholder="Key" />
				<Input variant="flushed" onChange={(e) => handleValueChange(e)} key="value" placeholder="Value" />
			</Box>
		</Box>
	);
};

const mapStateToProps = ({ initState: { userInput, keyValueList, userHeaders } }) => ({
	userInput,
	keyValueList,
	userHeaders
});

const mapDispatch = ({ initState: { updateUserInputAction, setKeyValueListAction, setUserHeadersAction } }) => ({
	updateUserInput: updateUserInputAction,
	setKeyValueList: setKeyValueListAction,
	setUserHeaders: setUserHeadersAction
});

export default connect(mapStateToProps, mapDispatch)(HeaderComponent);
