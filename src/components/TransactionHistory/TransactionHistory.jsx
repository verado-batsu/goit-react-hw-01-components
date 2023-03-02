import PropTypes from 'prop-types';
import { TransactionTable, TransactionInfo } from 'components/TransactionHistory/TransactionHistory.styled';

function TransactionHistory({ items }) {
	return (
		<TransactionTable>
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{
					items.map(({amount, currency, id, type}) => {
						return (
							<TransactionInfo key={id}>
								<td>{type}</td>
								<td>{amount}</td>
								<td>{currency}</td>
							</TransactionInfo>
						)
					})
				}
			</tbody>
		</TransactionTable>
	);

}

export default TransactionHistory;

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}