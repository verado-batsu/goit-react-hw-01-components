import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css'

function TransactionHistory({ items }) {
	return (
		<table className={css.transactionHistory}>
			<thead>
				<tr className={css.trHead}>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{
					items.map(({amount, currency, id, type}) => {
						return (
							<tr className={css.trTransaction} key={id}>
								<td>{type}</td>
								<td>{amount}</td>
								<td>{currency}</td>
							</tr>
						)
					})
				}
			</tbody>
		</table>
	);

}

export default TransactionHistory;

TransactionHistory.propTypes = {
	items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}