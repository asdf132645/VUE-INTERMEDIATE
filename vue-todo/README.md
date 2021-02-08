# vue-todo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### vuex 기술 요소

state: 여러 컴포넌트에 공유되는 데이터 data
전역으로 설정해줬기떄문에 아래같이 사용가능
예)this.$store.state.message

getters : 연산된 state 값을 접근하는 속성 computed
state 값을 접근하는 속성이자 coumputed() 처럼 미리 연산된값을 접근하는 속성
예)this.$store.getters.getNumber

mutations : state 값을 변경하는 이벤트 로직 , 메서드 methods

actions : 비동기 처리 로직을 선언하는 메서드 aysnc methods


헬퍼함수



