import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@chakra-ui/react';
import axios from 'axios';
const SubmitButton = ({ selectedMethod, userInput, userHeaders }) => {
	async function handleSubmit(e) {
		e.preventDefault();
		//convert headers array to object
		let headersList = userHeaders.reduce((acc, cur) => {
			let { key } = cur;
			return { ...acc, [key]: cur.value };
		}, {});

		const instance = axios.create({
			headers: { ...headersList }
		});

		const res = await instance({
			method: selectedMethod.toLowerCase(),
			url: userInput.toLowerCase()
		});
		console.log(res);
	}

	return (
		<Button p={'20px'} mt="30px" w="20%" colorScheme="teal" size="xs" onClick={(e) => handleSubmit(e)}>
			Submit
		</Button>
	);
};

const mapStateToProps = ({ initState: { userInput, userHeaders, selectedMethod } }) => ({
	selectedMethod,
	userInput,
	userHeaders
});

const mapDispatch = ({ initState: { updateUserInputAction } }) => ({});

export default connect(mapStateToProps, mapDispatch)(SubmitButton);
