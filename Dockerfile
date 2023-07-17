# 참고 https://velog.io/@oneook/Docker%EB%A1%9C-React-%EA%B0%9C%EB%B0%9C-%EB%B0%8F-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0
# 1. 가져올 이미지
FROM node
# (+) yarn install

# 2. 경로 설정
WORKDIR /app
# 3. 의존성 설치
COPY package.json ./
RUN yarn
# 4. 소스 추가
COPY . .
# 6. 포트 매핑
EXPOSE 8080
# 7. yarn start 스크립트 실행
CMD [ "yarn", "dev" ]

# 8. 도커파일로 도커 이미지를 빌드한다.
# $ docker build .
# $ docker run -d --name <container-name> <image-name>