import { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Input } from '@chakra-ui/react';
const UrlInput = ({ userInput, updateUserInput }) => {
	const inputRef = useRef();

	function handleInputChange() {
		const userInput = inputRef.current.value;
		updateUserInput(userInput);
	}

	return (
		<Input
			ref={inputRef}
			value={userInput || ''}
			onChange={(e) => handleInputChange(e)}
			placeholder="ex: https://www.url.com"
		/>
	);
};
const mapStateToProps = ({ initState: { userInput, keyValueList } }) => ({
	userInput,
	keyValueList
});

const mapDispatch = ({ initState: { updateUserInputAction } }) => ({
	updateUserInput: updateUserInputAction
});

export default connect(mapStateToProps, mapDispatch)(UrlInput);
