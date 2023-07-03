const baseUrl = process.env.NODE_ENV === 'development' ?
 "https://localhost:8081/v1/api" : "https://www.gzamon.wang/api"

  export function test200(data){
  	 return request.request({
		 url:'/get200',
		 method:'POST',
		 data:data,
		 authtype:'None'
	 }) 
	  }