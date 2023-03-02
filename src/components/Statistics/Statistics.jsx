import PropTypes from 'prop-types';
import { StatisticsCard, StatisticsTitle, StatList, StatItem, StatLabel, StatPercentage } from 'components/Statistics/Statistics.styled';
import getRandomHexColor from 'utils/randomHexColor';


function Statistics({ title, data }) {
	return (
		<StatisticsCard>
			{title && <StatisticsTitle>{title}</StatisticsTitle>}
			
			<StatList>
				{data.map(({ id, label, percentage }) => {
					return (
						<StatItem key={id} style={{
							backgroundColor: getRandomHexColor(),
						}}>
								<StatLabel>{label}</StatLabel>
								<StatPercentage>{percentage}%</StatPercentage>
							</StatItem>
						)
					})
				}
			</StatList>
		</StatisticsCard>	
	);
}

export default Statistics;

Statistics.propTypes = {
	title: PropTypes.string,
	data: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		percentage: PropTypes.number.isRequired,
	}))
}