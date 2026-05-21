export default function handler(request, response) {
  // CORS 에러 방지를 위해 헤더 설정 (필요시)
  response.setHeader('Access-Control-Allow-Origin', '*');
  
  // JSON 형태로 hello test 데이터를 응답
  response.status(200).json({ 
    message: "hello test" 
  });
}