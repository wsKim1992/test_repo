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
    
    