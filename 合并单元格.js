function getData(data, list) {
    var b = [];
    for (let i = 0; i < data.length; i++) {
      let arr = [],
        nowi = data[i],
        prei = data[i - 1];
      for (let j = 0; j < list.length; j++) {
        let nowkey = list[j],prekey = list[j - 1];
        //1，判断上一个item 前面的list[key]是否相等
        //2，相等才判断自己key，上面item来判断,是否显示，row个数
        //和上一个相等，则删除，下面有几个相等,则添加row个数
        let count = prevEq(data, i, list, j);
        if (!parantEq(nowi, prei, list, j)) {
          arr.push({
            label: nowi[nowkey],
            props: list[j],
            row: count
          });
        }
      }
      b.push(arr);
    }
    return b;
    //上一个行的list前面值是否相等
    function parantEq(nowi, prei, list, index) {
      if (!prei) return false;
      for (var i = 0; i <= index; i++) {
        let key = list[i];
        if (nowi[key] !== prei[key]) return false;
      }
      return true;
    }
    //当上一个行相等时，判断行相等的个数
    function prevEq(data, i, list, j) {
      //下面相等个数(必须list之上全部相等)
      let k = j;
      let row = 1;
      let nowi = data[i];
      for (i = i + 1; i < data.length; i++) {
        for (j=k; j >= 0; j--) {
          let key = list[j];
          if (nowi[key] !== data[i][key]) {
            return row;
          }
        }
        row++;
      }
      return row;
    }
  }

var data=[{
    date: '12016-05-01',
    name: '1王小虎1',
    province: '1上海1',
    city: '1普陀区1',
    address: '1上海市普陀区金沙江路 1518 弄1',
    zip: 12003331
  },
  {
    date: '2016-05-01',
    name: '王小虎1',
    province: '上海2',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  },
  {
    date: '2016-05-01',
    name: '王小虎1',
    province: '上海3',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  },
  {
    date: '2016-05-0n',
    name: '王小虎n',
    province: '上海n',
    city: '普陀区n',
    address: 'n上海市普陀区金沙江路 1518 弄n',
    zip: '200333n'
  }
  ]

  var list = ['date','name','province','city','address','zip']

  getData(data, list)