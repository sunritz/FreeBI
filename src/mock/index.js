import Mock from 'mockjs'

const Random = Mock.Random;


const chartsData = function(){
  let list =[];
  for(let i=0;i<1;i++){
    let obj = {
        name:Mock.mock('@city'),
        value:Mock.mock('@integer(0, 100)')
    }
    list.push(obj)
  }
  return list;
}

const waterLevelPondData = function(){
  let list =[];
  for(let i=0;i<2;i++){
    let obj = Mock.mock('@float(60, 100, 3, 5)')
    list.push(obj)
  }
  return list;
}

const activeRingChartData = function(){
  let list =[];
  for(let i=0;i<8;i++){
    let obj = {
        name:Mock.mock('@city'),
        value:Mock.mock('@integer(0, 100)')
    }
    list.push(obj)
  }
  return list;
}
const capsuleChartData = function(){
  let list =[];
  for(let i=0;i<7;i++){
    let obj = {
        name:Mock.mock('@city'),
        value:Mock.mock('@integer(0, 1000000)')
    }
    list.push(obj)
  }
  return list;
}
const conicalColumnChartData = function(){
  let list =[];
  for(let i=0;i<7;i++){
    let obj = {
        name:Mock.mock('@city'),
        value:Mock.mock('@integer(0, 1000000)')
    }
    list.push(obj)
  }
  return list;
}

const scrollBoardHeaderServer = function(){
  let list =[];
  for(let i=0;i<5;i++){
    let obj = Mock.mock('@cname()')
    list.push(obj)
  }
  return list;
}

const scrollBoardServer = function(){
  let data =[];
  let list =[];
  for(let i=0;i<5;i++){
    let obj = Mock.mock('@float(60, 100, 3, 5)')
    list.push(obj)
  }
  for(let t=0;t<12;t++){
    data.push(list)
  }
  return data;
}

const scrollRankingBoardData = function(){
  let list =[];
  for(let i=0;i<7;i++){
    let obj = {
        name:Mock.mock('@province'),
        value:Mock.mock('@integer(0, 1000000)')
    }
    list.push(obj)
  }
  return list;
}
Mock.mock('/charts/data', chartsData )

Mock.mock('/waterLevelPond/data', waterLevelPondData )
Mock.mock('/activeRingChart/data', activeRingChartData )
Mock.mock('/capsuleChart/data', capsuleChartData )
Mock.mock('/conicalColumnChart/data', conicalColumnChartData )

Mock.mock('/scrollBoard/header', scrollBoardHeaderServer )
Mock.mock('/scrollBoard/data', scrollBoardServer )

Mock.mock('/scrollRankingBoard/data', scrollRankingBoardData )
