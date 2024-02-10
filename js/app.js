const elBody = document.getElementById('body');
const elList = document.getElementById('list');
const movieArr = [ 
    {
        nomi: 'Asalarichi',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari',
        tili: 'Ozbek tili',
        davomiyligi: '1 soat 40 minut',
        chegarasi: '18+',
        rasmi: 'http://images.uzmovi.com/2024-02-01/2ce1d7e13a97b0add146ca198ddf061e.jpg'
    },
    {
        nomi: 'Ziddiyat hayvon',
        davlati: 'undefined',
        sanasi: 2024,
        janr: 'Jangari',
        tili: 'Ozbek tili',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-02-01/5335d90ab369d7402739a6b652cd31a5.jpg'
    },
    {
        nomi: 'Sahro ovchilari badland ovchisi',
        davlati: 'Janubiy Koreya',
        sanasi: 2024,
        janr: 'Jangari va Fantastik',
        tili: 'Ozbek tilida(Tarjima)',
        davomiyligi: '1 soat 47 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-31/c74ee3092bc79421bfd08adf51f48864.jpg'
    },
    {
        nomi: 'Kislota yomgiri',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari va Fantastika',
        tili: 'Ozbek tili',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-31/5ed72609e8ff8e808b0c144420d0c691.jpg'
    },
    {
        nomi: '60 daqiqa',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-31/4ac7532854077cd929d41d7de56427bf.jpg'
    },
    {
        nomi: 'Mafiya olami',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-31/e959a290623859d381e6214f789aa9e4.jpg'
    },
    {
        nomi: 'Akvamen 2 yoqotilgan qirolik',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari va Fantastika',
        tili: 'Ozbek tili',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-31/663447006a23fecf2429803dc7e38a47.jpg'
    },
    {
        nomi: 'Qirollik Taqdir alangasi',
        davlati: 'Xitoy',
        sanasi: 2024,
        janr: 'Jangari va Fantastika',
        tili: 'Ozbek tili',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-24/4a50263f9b36e04feb9e7b7931e8e4da.jpg'
    },
    {
        nomi: 'Gisht teruvchi',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari',
        tili: 'Ozbek tili',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-23/ae6103aaae0ade1bf859bc575eb9645a.jpg'
    },
    {
        nomi: 'Shavfqatsiz',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari',
        tili: 'Ozbek tili(Tarjima)',
        davomiyligi: '1 soat',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-22/b314513f7c66a87dc27c59cab6aab7a8.jpg'
    },
    {
        nomi: 'Yana bir zarba',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari',
        tili: 'Ozbek tili(Tarjima)',
        davomiyligi: '1 soat',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-22/1b4fdbad12b3b761e06705973e756a94.jpg'
    },
    {
        nomi: 'Tahdid',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari',
        tili: 'Ozbek tili(Tarjima)',
        davomiyligi: '1 soat 47 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-22/25c113937bd2e967e5e7f29431b210e5.jpg'
    },
    {
        nomi: 'Sakkiz 8 oyoq Osmoning oyini',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari',
        tili: 'Ozbek tili(Tarjima)',
        davomiyligi: '1 soat 45 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-19/4ad8a36c373871a9bcf7472c04c42ed4.jpg'
    },
    {
        nomi: 'Samodagi ogrilik',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari',
        tili: 'Ozbek tili(Tarjima)',
        davomiyligi: '1 soat 45 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-19/3051bcfa4951b936f35ee5d07a13578d.jpg'
    },
    {
        nomi: 'Mening qotil rafiqam',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari',
        tili: 'Ozbek tili(Tarjima)',
        davomiyligi: '1 soat 45 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-19/1c63100a1aaa5cb1880939577d86d980.jpg'
    },
    {
        nomi: 'Zulmat korlar soqirlar jangi',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari va Serial',
        tili: 'Ozbek tilida (Tarjima Taraqqiyot tv)',
        davomiyligi: '50 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-19/793af778b2bb7d382d280b479e18533c.jpg'
    },
    {
        nomi: 'Uchuvchi',
        davlati: 'Rossiya',
        sanasi: 2024,
        janr: 'Jangari',
        tili: 'Ozbek tili(Tarjima)',
        davomiyligi: '1 soat',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-19/5cdf7fe52f01dbfe5abb03834a55d738.jpg'
    },
    {
        nomi: 'Shijoatli yigitlar',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari',
        tili: 'Ozbek tili(Tarjima)',
        davomiyligi: '1 soat',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-19/dae31b1435a821e755b083abc464945c.jpg'
    },
    {
        nomi: 'Shijoatli yigitlar',
        davlati: 'Hindiston',
        sanasi: 2024,
        janr: 'Hind va Jangari',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-13/77d0fe0ac7a4fc7ed72ed22c3bc1159d.jpg'
    },
    {
        nomi: 'Isyonkor oy Olov Farzandi',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari va Fantastika',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-12/e1812b4eef6e0cac47341422d4f43fbf.jpg'
    },
    {
        nomi: 'Napaleon',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari va Tarixiy',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: '18+',
        rasmi: 'http://images.uzmovi.com/2024-01-09/2632f81392786df27ba083d56302bd97.jpg'
    },
    {
        nomi: 'Vikinglar ozga sayyoraliklarga',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari va Fantastika',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-09/9d69a212836528bba4d0b5d948bda850.jpg'
    },
    {
        nomi: 'Maglublar va Goliblar',
        davlati: 'Xitoy',
        sanasi: 2024,
        janr: 'Jangari',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-08/d1d3593c1ab8152ad57ad608026726a3.jpg'
    },
    {
        nomi: 'Shidatli toqnashuv',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-07/d2af8a7fb076b7085b390f7e9e462564.jpg'
    },
    {
        nomi: 'Ong osti kuchlari',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-05/d43e84bd7a94da3750867b9ee56cff17.jpg'
    },
    {
        nomi: 'Marvellar Kapitan Marvel 2',
        davlati: 'AQSH',
        sanasi: 2024,
        janr: 'Jangari va Fantastika',
        tili: 'Ozbek tilida(Tarjima)',
        davomiyligi: '1 soat 38 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-11-12/c263a88cd1a0dd976e987ea6f8852ee0.jpg'
    },
    {
        nomi: 'Askar Koreya ',
        davlati: 'Janubiy Koreya',
        sanasi: 2024,
        janr: 'Jangari, Tarixiy, Hayotiy va Serial',
        tili: 'Ozbek tilida(Tarjima)',
        davomiyligi: '48 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-02/4e714ffdf51e59401decc3d4ae7b3289.jpg'
    },
    {
        nomi: 'Sarhusht ustoz',
        davlati: 'Xitoy',
        sanasi: 1979,
        janr: 'Jangari va Komediya',
        tili: 'Ozbek tilida(Tarjima)',
        davomiyligi: '1 soat 47 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2024-01-02/e10bfbc055750cbae88e6ee3dd0d951b.jpg'
    },
    {
        nomi: 'Oilaviy reja',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari',
        tili: 'Ozbek tilida(Tarjima)',
        davomiyligi: '1 soat 47 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-31/e0f5e7f9d3a7aafc1797abb51a196aea.jpg'
    },
    {
        nomi: 'Qasos',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari',
        tili: 'Ozbek tilida(Tarjima)',
        davomiyligi: '1 soat 47 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-31/121b5db8077060bb4ebdcb0f552e1664.jpg'
    },
    {
        nomi: 'Yetti 7',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari',
        tili: 'Ozbek tilida(Tarjima)',
        davomiyligi: '1 soat 47 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-31/a6f830de8d4438caf7be78caf807c846.jpg'
    },
    {
        nomi: 'Agarda 2 fasl',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari',
        tili: 'Ozbek tilida(Tarjima)',
        davomiyligi: '25 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-28/cc4dae3ecf55758eee4f70afd825bccd.jpg'
    },
    {
        nomi: 'Hayot mamot oyinlari 5',
        davlati: 'AQSH',
        sanasi: 'undefined',
        janr: 'Jangari',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-24/3df52ab770d1a8c11504437b71ee0c6c.jpg'
    },
    {
        nomi: 'Gullagan Gulli oy qotillari',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-22/4dcce897a3b5ad9cea0b5ed16718491f.jpg'
    },
    {
        nomi: 'Umidsizlik yoli',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-22/556de2328f2e68192d16018ab87939de.jpg'
    },
    {
        nomi: 'Dunyodan uzilgan',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-22/0288c407d44cc51930958dd8a422f415.jpg'
    },
    {
        nomi: 'Mafiya onasi',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari va Komediya',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-22/1a339538c88cb9af9e7b930bb9bbdd55.jpg'
    },
    {
        nomi: 'Ajdar qoqqisdan keladi',
        davlati: 'Xitoy',
        sanasi: 2023,
        janr: 'Jangari va Komediya',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-22/ee33ba63f2e66a4c5e9c63551ec64322.jpg'
    },
    {
        nomi: 'Ogufurushlar',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-21/b6c5e523d569d33c11d7cd4b9cd66b17.jpg'
    },
    {
        nomi: 'Ikki dunyo orasida',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',   
        rasmi: 'http://images.uzmovi.com/2023-12-21/ad187bac2a3fa048ef97df77e56e98ae.jpg'
    },
    {
        nomi: 'Godzilla Monarx mahluqlar merosi',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari, Fantastika va Serial',
        tili: 'Ozbek tilida',
        davomiyligi: '40 minut',
        chegarasi: 'undefined',   
        rasmi: 'http://images.uzmovi.com/2023-12-21/4aa1062996b5d6af3f69bf632c4821dc.jpg'
    },
    {
        nomi: 'Poygachilar',
        davlati: 'AQSH',
        sanasi: 'undefined',
        janr: 'Jangari',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-21/ef10cbcbfff4a1e20f0786d71ce66291.jpg'   
    },
    {
        nomi: 'Mening baxt yulduzim',
        davlati: 'Xitoy',
        sanasi: 'undefined',
        janr: 'Jangari',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-21/082cf5ac49088e686850a86b3f230015.jpg'
    },
    {
        nomi: 'Parijdagi qotillik Sirli qotillik 2',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari va Komediya',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-17/d955e9184b45926657398c86cad51717.jpg'
    },
    {
        nomi: 'Kirish kodi',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 47 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-16/a51bd08ef597fe35ce654d6fae6c96d7.jpg'
    },
    {
        nomi: 'Shrapnel',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari',
        tili: 'Ozbek tilida',
        davomiyligi: '1 soat 47 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-14/8d40e0bbf4652c91cf1858a4bb683f28.jpg'
    },
    {
        nomi: 'Erkin tansoqchi',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari va Sarguzasht',
        tili: 'Ozbek tilida(Tarjima)',
        davomiyligi: '1 soat 47 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-13/04976f012fdf28322ccb77a1121b09cd.jpg'
    },
    {
        nomi: 'Jinoyat jazosiz qolmaydi',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari',
        tili: 'Ozbek tilida(Tarjima)',
        davomiyligi: '1 soat',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-13/37769d47a53e2d7d8574d05fa3c02d70.jpg'
    },
    {
        nomi: 'Nishondagi mergan',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari',
        tili: 'Ozbek tilida(Tarjima)',
        davomiyligi: '1 soat 47 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-13/7eb1afa3380e5a688c4d7729bb6cafb6.jpg'
    },
    {
        nomi: 'Narvik',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari',
        tili: 'Ozbek tilida(Tarjima)',
        davomiyligi: '1 soat 47 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-13/1d3ecd11f3b1aa484cecbe536600e077.jpg'
    },
    {
        nomi: 'YIGIT SOZI: KOCHA BOLASI',
        davlati: 'Rossiya',
        sanasi: 2023,
        janr: 'Jangari, Hayotiy va Serial',
        tili: 'Ozbek tilida(Tarjima)',
        davomiyligi: '55 minut',
        chegarasi: '18+',
        rasmi: 'http://images.uzmovi.com/2023-12-08/1c3ad23e8495ce562e0451db404e9bda.jpg'
    },
    {
        nomi: 'Botqoq qirolining qizi',
        davlati: 'AQSH',
        sanasi: 2023,
        janr: 'Jangari, Hayotiy va Serial',
        tili: 'Ozbek tilida(Tarjima)',
        davomiyligi: '1 soat 40 minut',
        chegarasi: 'undefined',
        rasmi: 'http://images.uzmovi.com/2023-12-08/ccdcbbfd636acd708a0e02483beebab7.jpg'
    }
]


movieArr.forEach((item, index) => {
    const elItem = document.createElement('li');
    const elItemImg = document.createElement('img');
    const elWrap = document.createElement('div');
    const elName = document.createElement('div');
    const elSana = document.createElement('p');
    const elMin = document.createElement('h5');
    
    

    elItemImg.src = item.rasmi
    elSana.textContent = item.sanasi + ' yil'
    elMin.textContent = item.davomiyligi
    elName.textContent = item.nomi.slice(0, 20) + '...'

    elList.append(elItem)
    elItem.append(elItemImg)
    elItem.append(elName)
    elItem.append(elWrap)
    elWrap.append(elSana)
    elWrap.append(elMin)


    elName.style.width = '180px'
    elName.style.padding = '10px 5px 10px 1px'
    elName.style.marginRight = '20px'
    elName.style.borderRadius = '20px'
    elName.style.backgroundColor = 'blue'
    elName.style.textAlign = 'center'
    elName.style.color = 'white'
    elName.style.cursor = 'pointer'


    elSana.style.width = '70px'
    elSana.style.padding = '10px 5px 10px 1px'
    elSana.style.marginRight = '20px'
    elSana.style.borderRadius = '20px'
    elSana.style.backgroundColor = 'red'
    elSana.style.textAlign = 'center'
    elSana.style.color = 'white'
    elSana.style.cursor = 'pointer'


    elMin.style.width = '100px'
    elMin.style.padding = '10px 5px 10px 1px'
    elMin.style.borderRadius = '20px'
    elMin.style.backgroundColor = 'red'
    elMin.style.textAlign = 'center'
    elMin.style.color = 'white'
    elMin.style.cursor = 'pointer'


    elWrap.style.display = 'flex'
    elWrap.style.alignItems = 'center'
    elWrap.style.gap = '0px 1px'
})