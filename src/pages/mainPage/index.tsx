import React from "react";

interface Props {
	flag: boolean;
}

const MainPage: React.FC<Props> = ({ flag }) => {
	return <div>mainPage!{flag}</div>;
};

export default MainPage;
