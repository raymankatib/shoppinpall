import { connect } from 'react-redux';
import { Select } from '@chakra-ui/react';

const Selector = ({ methods, selectedMethod, setSelectedMethod }) => {
	return (
		<Select w={120} onChange={(e) => setSelectedMethod(e.target.value)} value={selectedMethod}>
			{methods.map((method) => (
				<option key={method} value={method}>
					{method}
				</option>
			))}
		</Select>
	);
};

const mapStateToProps = ({ initState: { methods, selectedMethod } }) => ({
	methods,
	selectedMethod
});

const mapDispatch = ({ initState: { setSelectedMethodAction } }) => ({
	setSelectedMethod: setSelectedMethodAction
});

export default connect(mapStateToProps, mapDispatch)(Selector);
