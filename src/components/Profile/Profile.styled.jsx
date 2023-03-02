import styled from '@emotion/styled';

export const ProfileCard = styled.div`
	width: 300px;
	margin: 0 auto;
	margin-bottom: 20px;
	padding-top: 15px;
	display: flex;
	flex-direction: column;
	align-items: center;

	border: 1px solid #afabab;
	border-radius: 5px;
`;

export const ProfileDescription = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 15px;

	color: #6b6767;
`;

export const ProfileImg = styled.img`
	margin-bottom: 10px;
`;

export const ProfileName = styled.p`
	margin-bottom: 5px;

	font-size: 18px;
	font-weight: 700;
	color: #000;
`;

export const ProfileTag = styled.p`
	margin-bottom: 5px;
`;

export const ProfileLocation = styled.p``;

export const ProfileStats = styled.ul`
	width: 100%;
	display: flex;
	justify-content: space-around;
	gap: 20px;
	padding: 10px 0;

	background-color: #e9e9e9;
`;

export const StatsItem = styled.li`
	width: 75px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const StatsLabel = styled.span`
	margin-bottom: 5px;

	font-weight: 700;
`;

export const StatsQuantity = styled.span``;