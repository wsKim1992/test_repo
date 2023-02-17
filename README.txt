eslint & prettier 주요 설정 :
    - "no-var" : "error" 변수 선언할 때 var 사용 error 
    
    - "react/jsx-boolean-value": "error" jsx 컴포넌트에 boolean 값이 true 일 때, 
        ex ) <MainPage flag={true} /> 이런식으로 지정하면 error
    
    - "react/self-closing-comp" : "error" 하위 컴포넌트가 존재하지 않는 jsx element 는 self close 하면 error 발생!
        ex ) <div></div> → 이런식이면 error
    
    - "no-unused-vars" : "error" 사용하지 않는 변수가 있으면 error 발생
    
    - import/unresolved : "error" path alias 사용 가능하게 하기 위한 설정
    
    - "react/react-in-jsx-scope": "off" react 모듈 import 안했을 때 eslint 오류 발생을 방지하기 위한 설정
    
    - "react/function-component-definition": [
			"error",
			{ "namedComponents": "arrow-function" }
		] 

        react 컴포넌트를 선언 할 때, arrow-function 형태로 선언

    - "react/require-default-props" : "error"
        컴포넌트의 prop 들 중 type이 "type명? : type 값" 인 형태로 지정된 prop들에
        default 값 설정을 해주지 않았을 때 error 발생.

        - ex) 
            import React from "react";

            interface Props {
                flag: boolean;
                name?: string;//이런 prop인 경우
            }

            const MainPage: React.FC<Props> = ({ flag, name }) => {
                console.log(name);
                return <div>mainPage!{flag}</div>;
            };

            /**
            * "react/require-default-props": "error" 으로 설정 했을 때,
            * 컴포넌트명.defaultProps 에 defaultValue 지정
            * 여기에서는 name 값이 설정 되어지지 않은 상태로 넘어 올 수 있기 때문에
            * default 값을 아래와 같은 방법으로 지정해 줘야 eslint(react/require-default-props)
            * error 가 발생하지 않는다
            */
            MainPage.defaultProps = {
                name: "Kim Woo Seok",
            };

            export default MainPage;
    
    - "react/destructuring-assignment": "error"
        - 컴포넌트에 parameter 로 바인드된 prop들을 props.[prop명] 이런식으로 
        hook 내부에서 사용할 때 error 발생.
        - ex) error 발생 케이스
            const MyComponent = (props) => {
                return (<div id={props.id} />)
            };
        - ex) error 없는 케이스
            const MyComponent = ({id}) => {
                return (<div id={id} />)
            };
            const MyComponent = (props, context) => {
                const { id } = props;
                return (<div id={id} />)
            }; 

    - "react/jsx-filename-extension": [
			"error",
			{ "extensions": ["jsx", "tsx"] }
		],
        - jsx 파일의 확장자는 오직 ".jsx" 파일만 허용하는 옵션
        - 설정 값을 위와 같이 하면 확장자 명이 .jsx와 .tsx 인 파일도 허용하게 됨.
            - .jsx 와 .tsx 확장명을 제외한 다른 확장명을 가진 jsx 파일을 허용하지 않는다는 의미.

    - "import/prefer-default-export": "off",
        - export default 모듈명 형태만 허용하는 옵션
        - "off" 로 설정 시 해제됨.

	- "import/extensions": ["error", "never", { "json": "always" }]
        - 파일을 import 할 때 확장자 관련 옵션
        - 위와 같이 설정하면 import 할 때 확장자를 절대로 명시하지 않는다.(.json 파일 제외)
            - .json 파일 외에 다른 파일을 import 할 때 확장자를 명시하면 error 발생됨.