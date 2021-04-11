import React from 'react';
import styled from 'styled-components';

const BasicButton = styled.button`
	font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Apple SD Gothic Neo',
		'Malgun Gothic', '맑은 고딕', 나눔고딕, 'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR',
		arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
	background: linear-gradient(45deg, #e0c3fe 30%, #8ec5fc 90%);
	color: white;
	border: 1px solid #eaeaea;
	padding: 10px;
`;

function Index(): JSX.Element | JSX.Element[] {
	return <BasicButton>테스트</BasicButton>;
}

export default Index;
