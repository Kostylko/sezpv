export const positionatePoints = (data) => {
  !!data && data.map(item => {
    switch (item.id) {
      case 1: {
        item.top = '530px'
        item.left = '310px'
        break;
      }
      case 2: {
        item.top = '590px'
        item.left = '440px'
        break;
      }
      case 3: {
        item.top = '620px'
        item.left = '995px'
        break;
      }
      case 4: {
        item.top = '925px'
        item.left = '570px'
        break;
      }
      case 5: {
        item.top = '385px'
        item.left = '220px'
        break;
      }
      case 6: {
        item.top = '940px'
        item.left = '1270px'
        break;
      }
      case 7: {
        item.top = '840px'
        item.left = '1160px'
        break;
      }
      case 8: {
        item.top = '855px'
        item.left = '740px'
        break;
      }
      case 9: {
        item.top = '905px'
        item.left = '1300px'
        break;
      }
      case 10: {
        item.top = '790px'
        item.left = '810px'
        break;
      }
      case 11: {
        item.top = '620px'
        item.left = '460px'
        break;
      }
      case 12: {
        item.top = '300px'
        item.left = '310px'
        break;
      }
      case 13: {
        item.top = '480px'
        item.left = '610px'
        break;
      }
      case 14: {
        item.top = '290px'
        item.left = '140px'
        break;
      }
      case 15: {
        item.top = '440px'
        item.left = '540px'
        break;
      }
      case 16: {
        item.top = '800px'
        item.left = '925px'
        break;
      }
      case 17: {
        item.top = '340px'
        item.left = '680px'
        break;
      }
      case 18: {
        item.top = '705px'
        item.left = '735px'
        break;
      }
      case 19: {
        item.top = '675px'
        item.left = '720px'
        break;
      }
      case 20: {
        item.top = '480px'
        item.left = '785px'
        break;
      }
      case 21: {
        item.top = '735px'
        item.left = '755px'
        break;
      }
      case 22: {
        item.top = '1065px'
        item.left = '840px'
        break;
      }
      case 28: {
        item.top = '520px'
        item.left = '645px'
        break;
      }
      case 29: {
        item.top = '540px'
        item.left = '620px'
        break;
      }
      case 24: {
        item.top = '720px'
        item.left = '1050px'
        break;
      }
      case 26: {
        item.top = '800px'
        item.left = '1235px'
        break;
      }
      case 30: {
        item.top = '865px'
        item.left = '1400px'
        break;
      }
      case 31: {
        item.top = '765px'
        item.left = '1285px'
        break;
      }
      case 32: {
        item.top = '675px'
        item.left = '1130px'
        break;
      }
      case 33: {
        item.top = '360px'
        item.left = '405px'
        break;
      }
      case 34: {
        item.top = '580px'
        item.left = '605px'
        break;
      }
      case 35: {
        item.top = '610px'
        item.left = '625px'
        break;
      }
      case 36: {
        item.top = '800px'
        item.left = '1695px'
        break;
      }
      case 201: {
        item.top = '960px'
        item.left = '1000px'
        item.title = 'Таможенный терминал'
        item.product = `• АБК \n
                • досмотровой бокс \n
                • стоянка для спец-авто \n
                • весовая \n
                • навесы для досмотра`
        break;
      }
      case 202: {
        item.top = '80px'
        item.left = '680px'
        item.title = 'КОС'
        item.product = 'Протяженность хозяйственно-питьевого водопровода – 6,1 п.км'
        item.power = `Канализация:\n
                • Протяженность – 12,2 км\n
                • Диаметр – 500, 400, 300 мм\n
                • Мощность – 15300 м3/сутки`
        break;
      }
      case 203: {
        item.top = '950px'
        item.left = '1150px'
        item.title = 'Автодорога'
        item.product = `• Двухполосная, освещение \n
                • Ширина – 7 м. \n
                • Протяженность асфальтированной дороги – 4,6 км`
        break;
      }
      case 204: {
        item.top = '1220px'
        item.left = '865px'
        item.title = 'Электричество'
        item.product = `• Выделяемая мощность: 30 МВт\n
                • Кабельные сети - 35 км \n
                • Эстакада – 6,5 км, РП – 2 шт., КТП - 5 шт.\n
                • ВЛ – 3,1 км`
        break;
      }
      case 205: {
        item.top = '760px'
        item.left = '530px'
        item.title = 'ЖД-пути'
        item.product = `• Протяженность железной дороги – 6,1 км`
        break;
      }
      case 206: {
        item.top = '100px'
        item.left = '135px'
        item.title = 'СОХПВ АО «КАУСТИК»'
        item.product = `Хозяйственно-питьевой водовод \n
                • Диаметр – 300, 315, 160, 110 ммv
                • Мощность 220 м3/ч`
        item.power = `Технический водовод: \n
                • Диаметр – 630 мм, 300 мм \n
                • Мощность – 675 м3/ч`
        break;
      }
      default: {
        item.top = '-9999px'
        item.left = '-9999px'
      }
    }
    return item
  })
  return data
}
