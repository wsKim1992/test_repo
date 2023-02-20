import React from 'react';

interface Props {
	flag: boolean;
	name?: string;
}

const MainPage: React.FC<Props> = ({ flag, name }) => {
	console.log(name);
	return <div>mainPage!{flag}</div>;
};
/**
 * "react/require-default-props": "error" 으로 설정 했을 때,
 * 컴포넌트명.defaultProps 에 defaultValue 지정
 * 여기에서는 name 이 지정 하지 않은 상태로 넘어 올 수 있기 때문에
 * default 값을 아래와 같은 방법으로 지정해 줘야 eslint(react/require-default-props)
 * error 가 발생하지 않는다
 */
MainPage.defaultProps = {
	name: 'Kim Woo Seok',
};

export default MainPage;
