import styled from '@emotion/styled';


export const FriendListCards = styled.ul`
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const FriendItem = styled.li`
	display: flex;
	width: 100%;
	align-items: center;
	gap: 10px;
	padding: 5px 10px;
	margin-bottom: 5px;

	border: 1px solid #dbdbdb;
`;

export const FriendStatus = styled.span`
	width: 15px;
	height: 15px;
	border-radius: 50%;

	background-color: ${props => {
			switch (props.stats) {
				case true:
					return "#08e600";
				case false:
					return "#e60f00";
				default:
					return "#000";
			}
		}
	}
`;

export const FriendAvatar = styled.img``;

export const FriendName = styled.p`
	font-weight: 700;
`;