import styled from '@emotion/styled';


export const TransactionTable= styled.table`
	width: 100%;
	border-collapse: collapse;

	th {
		padding: 10px;
		border: 1px solid #9b9b9b;
		background-color: rgb(0, 238, 238);
		color: aliceblue;
	}
`;

export const TransactionInfo = styled.tr`
	:nth-child(even) {
		background-color: #e9e7e7;
	}

	td {
		text-align: center;
		padding: 10px;
		border: 1px solid #9b9b9b;
	}
`;