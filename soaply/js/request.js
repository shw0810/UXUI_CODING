// Request and Response Data Function from Each Methods =====
/* ====== Common Post Request Function ====== */
async function postRequest(url, options) {
  return await fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

/* ====== Common Put Request Function ====== */
async function putRequest(url, options) {
  return await fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

/* ====== Common Delete Request Function ====== */
async function deleteRequest(url, options) {
  return await fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
}

// //???
// function abc(n) {
//   console.log(n);
// }
/* ====== Common GET Request Function ====== */
//있는 데이터를 확인하고 가져오는 것 데이터가 변경 되진 않음. 추상적인 함 수 - 추상적이지 않은 하나하나의 데이터를 써야함(url)
async function getRequest(url) {
  return await fetch(url) //await 불러오는 것 / fatch 결과 데이터를 받아오는것
    .then((response) => {
      if (!response.ok) {
        //!는 문제가 있는것
        throw new Error('Network response was not ok'); //실패
      }
      return response.json(); //성공
    });
}

//  'https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=3'

async function getProducts(qnt) {
  //async는 비동기 함수에 넣는것임
  const url = `https://www.dabipyeung.com/soaply_backend/model/get_products.php?qnt=${qnt}`;

  try {
    //데이터 요청 및 응답 시도 : 성공일 경을 첫번째 코드 블럭 으로 이동
    const data = await getRequest(url);
    console.log(data);
  } catch (error) {
    // 실패할 경우 두번째 코드블럭으로 이동
    console.log('Error: ', error);
  }
}

getProducts(3);
