/* eslint-disable no-console */
(function () {
  document.addEventListener('DOMContentLoaded', () => {


    /* Login Modal */
    const login = {
      modalShow: false,
      dom: {
        navLink: document.querySelector('.siteNavItem[data-link="login"]'),
        modal: document.querySelector('.loginForm'),
        exist: document.querySelector('.existIcon[data-exist="login"]'),
      },
      init() {
        login.dom.navLink.addEventListener('click', login.showModal)
        login.dom.exist.addEventListener('click', login.closeModal)
      },
      showModal(e) {
        e.preventDefault()
        const { modal } = login.dom
        if (login.modalShow) {
          login.modalShow = false
          modal.style.visibility = 'hidden'
        } else {
          login.modalShow = true
          modal.style.visibility = 'visible'
        }
        console.log(login.modalShow)
        // modal.classList.add('animation')
        // modal.classList.add('fadeIn')
      },
      closeModal() {
        const { modal } = login.dom
        login.modalShow = false
        modal.style.visibility = 'hidden'
      },
    }
    login.init()

    /* 空氣汙染 API 串接 */
    const aqi = {
      dom: {
        selectCity: document.querySelector('.b-aqi__select--city'),
        selectDist: document.querySelector('.b-aqi__select--dist'),
        resultDom: document.querySelector('.b-aqi__table--result'),
        score: document.querySelector('.b-aqi__score'),
        pubTime: document.querySelector('.b-aqi__pubTime'),
        status: document.querySelector('.b-aqi__status'),
      },
      // init() 改好把這裡刪掉
      raw: [
        {
          SiteName: '二林', County: '彰化縣', AQI: '55', Pollutant: '細懸浮微粒', Status: '普通', SO2: '4.3', CO: '0.3', CO_8hr: '0.2', O3: '2.3', O3_8hr: '11', PM10: '42', 'PM2.5': '28', NO2: '13', NOx: '20', NO: '7.1', WindSpeed: '1.8', WindDirec: '179', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '17', PM10_AVG: '37', SO2_AVG: '3', Longitude: '120.409653', Latitude: '23.925175', 
        }, { 
          SiteName: '三重', County: '新北市', AQI: '49', Pollutant: '', Status: '良好', SO2: '4.8', CO: '1.73', CO_8hr: '1.9', O3: '-', O3_8hr: '', PM10: '29', 'PM2.5': '12', NO2: '23', NOx: '107', NO: '84', WindSpeed: '', WindDirec: '', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '15', PM10_AVG: '34', SO2_AVG: '4', Longitude: '121.493806', Latitude: '25.072611', 
        }, {
          SiteName: '三義', County: '苗栗縣', AQI: '28', Pollutant: '', Status: '良好', SO2: '6.9', CO: '0.21', CO_8hr: '0.2', O3: '10', O3_8hr: '20', PM10: '19', 'PM2.5': '6', NO2: '13', NOx: '15', NO: '1.9', WindSpeed: '3.1', WindDirec: '198', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '9', PM10_AVG: '16', SO2_AVG: '4', Longitude: '120.758833', Latitude: '24.382942', 
        }, { 
          SiteName: '土城', County: '新北市', AQI: '47', Pollutant: '', Status: '良好', SO2: '2.9', CO: '0.42', CO_8hr: '0.5', O3: '2.9', O3_8hr: '17', PM10: '27', 'PM2.5': '12', NO2: '16', NOx: '25', NO: '8.8', WindSpeed: '1.1', WindDirec: '151', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '15', PM10_AVG: '33', SO2_AVG: '3', Longitude: '121.451861', Latitude: '24.982528', 
        }, {
          SiteName: '士林', County: '臺北市', AQI: '67', Pollutant: '細懸浮微粒', Status: '普通', SO2: '1.2', CO: '0.38', CO_8hr: '0.4', O3: '4.9', O3_8hr: '12', PM10: '24', 'PM2.5': '24', NO2: '16', NOx: '19', NO: '3.9', WindSpeed: '0.4', WindDirec: '139', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '22', PM10_AVG: '28', SO2_AVG: '1', Longitude: '121.515389', Latitude: '25.105417', 
        }, { 
          SiteName: '大同', County: '臺北市', AQI: '54', Pollutant: '細懸浮微粒', Status: '普通', SO2: '3.1', CO: '1.31', CO_8hr: '1.5', O3: '-', O3_8hr: '', PM10: '18', 'PM2.5': '13', NO2: '22', NOx: '57', NO: '35', WindSpeed: '', WindDirec: '', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '17', PM10_AVG: '25', SO2_AVG: '2', Longitude: '121.513311', Latitude: '25.0632',
        }, {
          SiteName: '大里', County: '臺中市', AQI: '55', Pollutant: '細懸浮微粒', Status: '普通', SO2: '3', CO: '0.49', CO_8hr: '0.5', O3: '0.4', O3_8hr: '11', PM10: '33', 'PM2.5': '14', NO2: '16', NOx: '21', NO: '4.6', WindSpeed: '1', WindDirec: '347', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '17', PM10_AVG: '32', SO2_AVG: '3', Longitude: '120.677689', Latitude: '24.099611', 
        }, { 
          SiteName: '大園', County: '桃園市', AQI: '37', Pollutant: '', Status: '良好', SO2: '2.2', CO: '0.18', CO_8hr: '0.1', O3: '12', O3_8hr: '16', PM10: '23', 'PM2.5': '8', NO2: '', NOx: '', NO: '', WindSpeed: '3.1', WindDirec: '175', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '11', PM10_AVG: '21', SO2_AVG: '3', Longitude: '121.201811', Latitude: '25.060344', 
        }, {
          SiteName: '大寮', County: '高雄市', AQI: '52', Pollutant: '細懸浮微粒', Status: '普通', SO2: '2.5', CO: '0.2', CO_8hr: '0.2', O3: '3.8', O3_8hr: '13', PM10: '26', 'PM2.5': '21', NO2: '18', NOx: '19', NO: '1.5', WindSpeed: '1.3', WindDirec: '122', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '16', PM10_AVG: '22', SO2_AVG: '4', Longitude: '120.425081', Latitude: '22.565747', 
        }, { 
          SiteName: '小港', County: '高雄市', AQI: '20', Pollutant: '', Status: '良好', SO2: '3.5', CO: '0.12', CO_8hr: '0.1', O3: '6.8', O3_8hr: '10', PM10: '15', 'PM2.5': '10', NO2: '18', NOx: '24', NO: '5.9', WindSpeed: '1.4', WindDirec: '272', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '6', PM10_AVG: '20', SO2_AVG: '3', Longitude: '120.337736', Latitude: '22.565833', 
        }, {
          SiteName: '中山', County: '臺北市', AQI: '45', Pollutant: '', Status: '良好', SO2: '5', CO: '1.01', CO_8hr: '1.0', O3: '1.2', O3_8hr: '8', PM10: '19', 'PM2.5': '7', NO2: '22', NOx: '51', NO: '29', WindSpeed: '0.8', WindDirec: '17', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '14', PM10_AVG: '30', SO2_AVG: '3', Longitude: '121.526528', Latitude: '25.062361', 
        }, { 
          SiteName: '中壢', County: '桃園市', AQI: '45', Pollutant: '', Status: '良好', SO2: '2.7', CO: '1.25', CO_8hr: '1.3', O3: '3.5', O3_8hr: '7', PM10: '23', 'PM2.5': '18', NO2: '17', NOx: '47', NO: '30', WindSpeed: '1.3', WindDirec: '195', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '14', PM10_AVG: '24', SO2_AVG: '3', Longitude: '121.221667', Latitude: '24.953278', 
        }, { 
          SiteName: '仁武', County: '高雄市', AQI: '27', Pollutant: '', Status: '良好', SO2: '1.5', CO: '0.17', CO_8hr: '0.1', O3: '14', O3_8hr: '17', PM10: '16', 'PM2.5': '6', NO2: '9.4', NOx: '10', NO: '1', WindSpeed: '0.7', WindDirec: '316', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '8', PM10_AVG: '13', SO2_AVG: '2', Longitude: '120.332631', Latitude: '22.689056',
        }, {
          SiteName: '斗六', County: '雲林縣', AQI: '53', Pollutant: '細懸浮微粒', Status: '普通', SO2: '1.9', CO: '0.42', CO_8hr: '0.3', O3: '3.5', O3_8hr: '13', PM10: '', 'PM2.5': '27', NO2: '15', NOx: '21', NO: '5.8', WindSpeed: '0.8', WindDirec: '44', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '16', PM10_AVG: '18', SO2_AVG: '2', Longitude: '120.544994', Latitude: '23.711853',
        }, { 
          SiteName: '冬山', County: '宜蘭縣', AQI: '28', Pollutant: '', Status: '良好', SO2: '1.8', CO: '0.23', CO_8hr: '0.2', O3: '11', O3_8hr: '23', PM10: '41', 'PM2.5': '6', NO2: '10', NOx: '13', NO: '3', WindSpeed: '0.8', WindDirec: '246', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '8', PM10_AVG: '30', SO2_AVG: '2', Longitude: '121.792928', Latitude: '24.632203',
        }, {
          SiteName: '古亭', County: '臺北市', AQI: '45', Pollutant: '', Status: '良好', SO2: '4', CO: '0.54', CO_8hr: '0.6', O3: '3.5', O3_8hr: '16', PM10: '19', 'PM2.5': '9', NO2: '22', NOx: '30', NO: '8.3', WindSpeed: '0.6', WindDirec: '271', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '14', PM10_AVG: '21', SO2_AVG: '2', Longitude: '121.529556', Latitude: '25.020608', 
        }, {
          SiteName: '左營', County: '高雄市', AQI: '33', Pollutant: '', Status: '良好', SO2: '1.9', CO: '0.16', CO_8hr: '0.1', O3: '16', O3_8hr: '21', PM10: '17', 'PM2.5': '11', NO2: '6', NOx: '7', NO: '1', WindSpeed: '1.6', WindDirec: '212', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '10', PM10_AVG: '14', SO2_AVG: '2', Longitude: '120.292917', Latitude: '22.674861',
        }, { 
          SiteName: '平鎮', County: '桃園市', AQI: '23', Pollutant: '', Status: '良好', SO2: '2.4', CO: '0.2', CO_8hr: '0.2', O3: '9.6', O3_8hr: '14', PM10: '20', 'PM2.5': 'ND', NO2: '11', NOx: '14', NO: '3.5', WindSpeed: '1.1', WindDirec: '185', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '6', PM10_AVG: '25', SO2_AVG: '3', Longitude: '121.203986', Latitude: '24.952786',
        }, { 
          SiteName: '永和', County: '新北市', AQI: '51', Pollutant: '細懸浮微粒', Status: '普通', SO2: '4.9', CO: '0.98', CO_8hr: '1.1', O3: '3.6', O3_8hr: '13', PM10: '25', 'PM2.5': '13', NO2: '21', NOx: '42', NO: '21', WindSpeed: '0.6', WindDirec: '274', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '16', PM10_AVG: '29', SO2_AVG: '3', Longitude: '121.516306', Latitude: '25.017',
        }, { 
          SiteName: '安南', County: '臺南市', AQI: '28', Pollutant: '', Status: '良好', SO2: '1.5', CO: '0.17', CO_8hr: '0.2', O3: '17', O3_8hr: '20', PM10: '26', 'PM2.5': '15', NO2: '6', NOx: '6.1', NO: '0.1', WindSpeed: '1.6', WindDirec: '233', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '9', PM10_AVG: '24', SO2_AVG: '2', Longitude: '120.2175', Latitude: '23.048197', 
        }, { 
          SiteName: '朴子', County: '嘉義縣', AQI: '25', Pollutant: '', Status: '良好', SO2: '1.6', CO: '0.3', CO_8hr: '0.3', O3: '9.8', O3_8hr: '13', PM10: '18', 'PM2.5': '2', NO2: '7.2', NOx: '9.9', NO: '2.7', WindSpeed: '1', WindDirec: '185', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '8', PM10_AVG: '18', SO2_AVG: '2', Longitude: '120.24781', Latitude: '23.467123', 
        }, {
          SiteName: '汐止', County: '新北市', AQI: '41', Pollutant: '', Status: '良好', SO2: '3.5', CO: '0.88', CO_8hr: '0.7', O3: '3.2', O3_8hr: '13', PM10: '27', 'PM2.5': '13', NO2: '20', NOx: '50', NO: '30', WindSpeed: '1', WindDirec: '179', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '13', PM10_AVG: '32', SO2_AVG: '2', Longitude: '121.6423', Latitude: '25.067131',
        }, {
          SiteName: '竹山', County: '南投縣', AQI: '26', Pollutant: '', Status: '良好', SO2: '2.1', CO: '0.26', CO_8hr: '0.2', O3: '7.2', O3_8hr: '16', PM10: '18', 'PM2.5': '7', NO2: '9.4', NOx: '10', NO: '0.8', WindSpeed: '0.5', WindDirec: '307', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '8', PM10_AVG: '20', SO2_AVG: '2', Longitude: '120.677306', Latitude: '23.756389',
        }, { 
          SiteName: '竹東', County: '新竹縣', AQI: '21', Pollutant: '', Status: '良好', SO2: '2.3', CO: '0.28', CO_8hr: '0.2', O3: '5.3', O3_8hr: '20', PM10: '28', 'PM2.5': '2', NO2: '11', NOx: '13', NO: '2.2', WindSpeed: '1.9', WindDirec: '139', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '3', PM10_AVG: '23', SO2_AVG: '2', Longitude: '121.088903', Latitude: '24.740644',
        }, { 
          SiteName: '西屯', County: '臺中市', AQI: '55', Pollutant: '細懸浮微粒', Status: '普通', SO2: '3.3', CO: '0.48', CO_8hr: '0.3', O3: '3', O3_8hr: '12', PM10: '31', 'PM2.5': '22', NO2: '21', NOx: '35', NO: '15', WindSpeed: '2.2', WindDirec: '189', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '17', PM10_AVG: '28', SO2_AVG: '2', Longitude: '120.616917', Latitude: '24.162197',
        }, {
          SiteName: '沙鹿', County: '臺中市', AQI: '35', Pollutant: '', Status: '良好', SO2: '4.1', CO: '0.43', CO_8hr: '0.3', O3: '5.9', O3_8hr: '11', PM10: '10', 'PM2.5': '12', NO2: '18', NOx: '21', NO: '2.6', WindSpeed: '2.3', WindDirec: '170', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '11', PM10_AVG: '14', SO2_AVG: '3', Longitude: '120.568794', Latitude: '24.225628',
        }, { 
          SiteName: '宜蘭', County: '宜蘭縣', AQI: '42', Pollutant: '', Status: '良好', SO2: '5.9', CO: '0.29', CO_8hr: '0.3', O3: '16', O3_8hr: '30', PM10: '26', 'PM2.5': '15', NO2: '9.7', NOx: '11', NO: '0.9', WindSpeed: '0.7', WindDirec: '319', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '13', PM10_AVG: '24', SO2_AVG: '3', Longitude: '121.746394', Latitude: '24.747917',
        }, { 
          SiteName: '忠明', County: '臺中市', AQI: '56', Pollutant: '細懸浮微粒', Status: '普通', SO2: '3.8', CO: '0.57', CO_8hr: '0.4', O3: '3.2', O3_8hr: '10', PM10: '', 'PM2.5': '25', NO2: '18', NOx: '26', NO: '7.8', WindSpeed: '1.3', WindDirec: '184', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '17', PM10_AVG: '15', SO2_AVG: '3', Longitude: '120.641092', Latitude: '24.151958', 
        }, { 
          SiteName: '松山', County: '臺北市', AQI: '56', Pollutant: '細懸浮微粒', Status: '普通', SO2: '4.2', CO: '0.53', CO_8hr: '0.7', O3: '3.1', O3_8hr: '13', PM10: '24', 'PM2.5': '10', NO2: '20', NOx: '29', NO: '9.1', WindSpeed: '0.7', WindDirec: '317', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '17', PM10_AVG: '29', SO2_AVG: '3', Longitude: '121.578611', Latitude: '25.05', 
        }, {
          SiteName: '板橋', County: '新北市', AQI: '51', Pollutant: '細懸浮微粒', Status: '普通', SO2: '6', CO: '0.53', CO_8hr: '0.6', O3: '3.4', O3_8hr: '14', PM10: '31', 'PM2.5': '15', NO2: '20', NOx: '26', NO: '6.1', WindSpeed: '1.1', WindDirec: '256', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '16', PM10_AVG: '32', SO2_AVG: '3', Longitude: '121.458667', Latitude: '25.012972',
        }, {
          SiteName: '林口', County: '新北市', AQI: '19', Pollutant: '', Status: '良好', SO2: '2.5', CO: '0.23', CO_8hr: '0.2', O3: '7.9', O3_8hr: '17', PM10: '17', 'PM2.5': '2', NO2: '14', NOx: '18', NO: '4.4', WindSpeed: '2.4', WindDirec: '169', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '4', PM10_AVG: '21', SO2_AVG: '2', Longitude: '121.376869', Latitude: '25.077197', 
        }, {
          SiteName: '林園', County: '高雄市', AQI: '27', Pollutant: '', Status: '良好', SO2: '1.9', CO: '0.08', CO_8hr: '0.1', O3: '23', O3_8hr: '23', PM10: '21', 'PM2.5': '5', NO2: '3', NOx: '3.1', NO: '0.1', WindSpeed: '1.8', WindDirec: '251', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '8', PM10_AVG: '19', SO2_AVG: '3', Longitude: '120.41175', Latitude: '22.4795',
        }, { 
          SiteName: '花蓮', County: '花蓮縣', AQI: '28', Pollutant: '', Status: '良好', SO2: '1.6', CO: '0.43', CO_8hr: '0.3', O3: '16', O3_8hr: '30', PM10: '24', 'PM2.5': '7', NO2: '15', NOx: '15', NO: '0.6', WindSpeed: '1.1', WindDirec: '295', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '9', PM10_AVG: '25', SO2_AVG: '2', Longitude: '121.599769', Latitude: '23.971306', 
        }, { 
          SiteName: '金門', County: '金門縣', AQI: '26', Pollutant: '', Status: '良好', SO2: '2.6', CO: '0.13', CO_8hr: '0.2', O3: '21', O3_8hr: '28', PM10: '17', 'PM2.5': '4', NO2: '12', NOx: '12', NO: '0.5', WindSpeed: '3.3', WindDirec: '202', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '7', PM10_AVG: '21', SO2_AVG: '3', Longitude: '118.312256', Latitude: '24.432133',
        }, { 
          SiteName: '前金', County: '高雄市', AQI: '21', Pollutant: '', Status: '良好', SO2: '2.1', CO: '0.17', CO_8hr: '0.2', O3: '17', O3_8hr: '17', PM10: '25', 'PM2.5': '4', NO2: '6.7', NOx: '8.4', NO: '1.7', WindSpeed: '1.2', WindDirec: '225', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '7', PM10_AVG: '13', SO2_AVG: '2', Longitude: '120.288086', Latitude: '22.632567', 
        }, {
          SiteName: '前鎮', County: '高雄市', AQI: '17', Pollutant: '', Status: '良好', SO2: '2.8', CO: '0.25', CO_8hr: '0.3', O3: '8.8', O3_8hr: '11', PM10: '17', 'PM2.5': '4', NO2: '15', NOx: '18', NO: '3.4', WindSpeed: '1', WindDirec: '296', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '4', PM10_AVG: '18', SO2_AVG: '2', Longitude: '120.307564', Latitude: '22.605386', 
        }, { 
          SiteName: '南投', County: '南投縣', AQI: '26', Pollutant: '', Status: '良好', SO2: '4.4', CO: '0.43', CO_8hr: '0.3', O3: '2.9', O3_8hr: '11', PM10: '27', 'PM2.5': '10', NO2: '16', NOx: '20', NO: '4.5', WindSpeed: '1.9', WindDirec: '155', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '8', PM10_AVG: '23', SO2_AVG: '3', Longitude: '120.685306', Latitude: '23.913', 
        }, { 
          SiteName: '屏東', County: '屏東縣', AQI: '32', Pollutant: '', Status: '良好', SO2: '2.5', CO: '0.28', CO_8hr: '0.3', O3: '12', O3_8hr: '24', PM10: '18', 'PM2.5': '3', NO2: '10', NOx: '11', NO: '0.6', WindSpeed: '0.9', WindDirec: '264', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '10', PM10_AVG: '18', SO2_AVG: '2', Longitude: '120.488033', Latitude: '22.673081', 
        }, {
          SiteName: '屏東(琉球)', County: '屏東縣', AQI: '31', Pollutant: '', Status: '良好', SO2: '1.8', CO: '0.12', CO_8hr: '0.1', O3: '17', O3_8hr: '19', PM10: '14', 'PM2.5': '9', NO2: '3.2', NOx: '4.1', NO: '0.8', WindSpeed: '1.1', WindDirec: '343', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '9', PM10_AVG: '12', SO2_AVG: '2', Longitude: '120.377222', Latitude: '22.352222', 
        }, {
          SiteName: '恆春', County: '屏東縣', AQI: '32', Pollutant: '', Status: '良好', SO2: '1.1', CO: '0.08', CO_8hr: '0.1', O3: '19', O3_8hr: '22', PM10: '13', 'PM2.5': '8', NO2: '1.4', NOx: '1.8', NO: '0.4', WindSpeed: '1.2', WindDirec: '288', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '10', PM10_AVG: '12', SO2_AVG: '1', Longitude: '120.788928', Latitude: '21.958069',
        }, {
          SiteName: '美濃', County: '高雄市', AQI: '26', Pollutant: '', Status: '良好', SO2: '1.5', CO: '0.17', CO_8hr: '0.2', O3: '16', O3_8hr: '28', PM10: '26', 'PM2.5': '3', NO2: '4.5', NOx: '5.8', NO: '1.3', WindSpeed: '0.5', WindDirec: '13', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '5', PM10_AVG: '27', SO2_AVG: '2', Longitude: '120.530542', Latitude: '22.883583', 
        }, {
          SiteName: '苗栗', County: '苗栗縣', AQI: '45', Pollutant: '', Status: '良好', SO2: '3.1', CO: '0.33', CO_8hr: '0.3', O3: '4.7', O3_8hr: '12', PM10: '17', 'PM2.5': '18', NO2: '15', NOx: '17', NO: '1.9', WindSpeed: '2.3', WindDirec: '187', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '14', PM10_AVG: '19', SO2_AVG: '3', Longitude: '120.8202', Latitude: '24.565269',
        }, {
          SiteName: '苗栗(後龍)', County: '苗栗縣', AQI: '63', Pollutant: '細懸浮微粒', Status: '普通', SO2: '1.2', CO: '0.12', CO_8hr: '0.1', O3: '14', O3_8hr: '16', PM10: '11', 'PM2.5': '15', NO2: '5.1', NOx: '7.4', NO: '2.3', WindSpeed: '2.2', WindDirec: '199', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '20', PM10_AVG: '17', SO2_AVG: '2', Longitude: '120.786028', Latitude: '24.616369',
        }, {
          SiteName: '埔里', County: '南投縣', AQI: '31', Pollutant: '', Status: '良好', SO2: '1.5', CO: '0.28', CO_8hr: '0.2', O3: '13', O3_8hr: '28', PM10: '32', 'PM2.5': '9', NO2: '10', NOx: '14', NO: '3.1', WindSpeed: '0.5', WindDirec: '128', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '10', PM10_AVG: '29', SO2_AVG: '2', Longitude: '120.967903', Latitude: '23.968842', 
        }, {
          SiteName: '桃園', County: '桃園市', AQI: '51', Pollutant: '細懸浮微粒', Status: '普通', SO2: '3.7', CO: '0.31', CO_8hr: '0.3', O3: '7.6', O3_8hr: '13', PM10: '23', 'PM2.5': '16', NO2: '13', NOx: '16', NO: '2.1', WindSpeed: '0.7', WindDirec: '241', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '16', PM10_AVG: '18', SO2_AVG: '6', Longitude: '121.304383', Latitude: '24.995368',
        }, {
          SiteName: '馬公', County: '澎湖縣', AQI: '21', Pollutant: '', Status: '良好', SO2: '2.4', CO: '0.25', CO_8hr: '0.3', O3: '12', O3_8hr: '11', PM10: '22', 'PM2.5': '7', NO2: '8.1', NOx: '15', NO: '6.8', WindSpeed: '3.7', WindDirec: '169', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '7', PM10_AVG: '19', SO2_AVG: '2', Longitude: '119.566158', Latitude: '23.569031',
        }, { 
          SiteName: '馬祖', County: '連江縣', AQI: '37', Pollutant: '', Status: '良好', SO2: '3.7', CO: '0.11', CO_8hr: '0.2', O3: '23', O3_8hr: '40', PM10: '29', 'PM2.5': '8', NO2: '6', NOx: '6.5', NO: '0.5', WindSpeed: '1.1', WindDirec: '196', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '9', PM10_AVG: '25', SO2_AVG: '3', Longitude: '119.949875', Latitude: '26.160469',
        }, {
          SiteName: '基隆', County: '基隆市', AQI: '36', Pollutant: '', Status: '良好', SO2: '1.9', CO: '0.45', CO_8hr: '0.4', O3: '0.5', O3_8hr: '9', PM10: '29', 'PM2.5': '10', NO2: '14', NOx: '26', NO: '11', WindSpeed: '0.7', WindDirec: '278', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '11', PM10_AVG: '30', SO2_AVG: '2', Longitude: '121.760056', Latitude: '25.129167', 
        }, {
          SiteName: '崙背', County: '雲林縣', AQI: '27', Pollutant: '', Status: '良好', SO2: '2.1', CO: '0.24', CO_8hr: '0.2', O3: '5.7', O3_8hr: '14', PM10: '34', 'PM2.5': '17', NO2: '11', NOx: '12', NO: '1', WindSpeed: '0.4', WindDirec: '184', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '8', PM10_AVG: '22', SO2_AVG: '2', Longitude: '120.348742', Latitude: '23.757547', 
        }, { 
          SiteName: '淡水', County: '新北市', AQI: '21', Pollutant: '', Status: '良好', SO2: '2.1', CO: '0.24', CO_8hr: '0.2', O3: '10', O3_8hr: '16', PM10: '5', 'PM2.5': '2', NO2: '8.7', NOx: '12', NO: '3.4', WindSpeed: '', WindDirec: '', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '6', PM10_AVG: '10', SO2_AVG: '2', Longitude: '121.449239', Latitude: '25.1645', 
        }, {
          SiteName: '麥寮', County: '雲林縣', AQI: '27', Pollutant: '', Status: '良好', SO2: '1', CO: '0.12', CO_8hr: '0.2', O3: '14', O3_8hr: '14', PM10: '28', 'PM2.5': '8', NO2: '4.4', NOx: '7.9', NO: '3.5', WindSpeed: '1', WindDirec: '274', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '8', PM10_AVG: '29', SO2_AVG: '1', Longitude: '120.251825', Latitude: '23.753506',
        }, { 
          SiteName: '善化', County: '臺南市', AQI: '30', Pollutant: '', Status: '良好', SO2: '2.1', CO: '0.3', CO_8hr: '0.2', O3: '2.8', O3_8hr: '13', PM10: '33', 'PM2.5': 'ND', NO2: '15', NOx: '19', NO: '4.7', WindSpeed: '0.5', WindDirec: '174', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '9', PM10_AVG: '28', SO2_AVG: '2', Longitude: '120.297142', Latitude: '23.115097',
        }, {
          SiteName: '富貴角', County: '新北市', AQI: '29', Pollutant: '', Status: '良好', SO2: '1.5', CO: '0.12', CO_8hr: '0.1', O3: '15', O3_8hr: '17', PM10: '23', 'PM2.5': '4', NO2: '4.6', NOx: '4.7', NO: '0.1', WindSpeed: '3.8', WindDirec: '212', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '9', PM10_AVG: '29', SO2_AVG: '1', Longitude: '121.536763', Latitude: '25.298562', 
        }, {
          SiteName: '復興', County: '高雄市', AQI: '30', Pollutant: '', Status: '良好', SO2: '6.3', CO: '0.78', CO_8hr: '0.7', O3: '5.2', O3_8hr: '10', PM10: '22', 'PM2.5': '13', NO2: '', NOx: '', NO: '', WindSpeed: '0.7', WindDirec: '179', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '9', PM10_AVG: '22', SO2_AVG: '3', Longitude: '120.312017', Latitude: '22.608711',
        }, { 
          SiteName: '湖口', County: '新竹縣', AQI: '42', Pollutant: '', Status: '良好', SO2: '2.3', CO: '0.16', CO_8hr: '0.1', O3: '10', O3_8hr: '14', PM10: '26', 'PM2.5': '6', NO2: '5.5', NOx: '6.5', NO: '1', WindSpeed: '2.4', WindDirec: '202', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '13', PM10_AVG: '27', SO2_AVG: '2', Longitude: '121.038653', Latitude: '24.900142',
        }, {
          SiteName: '菜寮', County: '新北市', AQI: '31', Pollutant: '', Status: '良好', SO2: '3.2', CO: '0.49', CO_8hr: '0.5', O3: '3.1', O3_8hr: '11', PM10: '21', 'PM2.5': '8', NO2: '18', NOx: '28', NO: '10', WindSpeed: '0.8', WindDirec: '26', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '10', PM10_AVG: '26', SO2_AVG: '3', Longitude: '121.481028', Latitude: '25.06895',
        }, { 
          SiteName: '陽明', County: '臺北市', AQI: '24', Pollutant: '', Status: '良好', SO2: '3.1', CO: '0.19', CO_8hr: '0.1', O3: '12', O3_8hr: '18', PM10: '13', 'PM2.5': '16', NO2: '5.5', NOx: '6', NO: '0.4', WindSpeed: '', WindDirec: '', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '7', PM10_AVG: '16', SO2_AVG: '2', Longitude: '121.529583', Latitude: '25.182722', 
        }, {
          SiteName: '新竹', County: '新竹市', AQI: '30', Pollutant: '', Status: '良好', SO2: '2.5', CO: '0.32', CO_8hr: '0.3', O3: '8.1', O3_8hr: '12', PM10: '29', 'PM2.5': '8', NO2: '11', NOx: '14', NO: '2.7', WindSpeed: '1.8', WindDirec: '172', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '8', PM10_AVG: '32', SO2_AVG: '2', Longitude: '120.972075', Latitude: '24.805619', 
        }, {
          SiteName: '新店', County: '新北市', AQI: '38', Pollutant: '', Status: '良好', SO2: '2.8', CO: '0.51', CO_8hr: '0.4', O3: '1.6', O3_8hr: '19', PM10: '27', 'PM2.5': '13', NO2: '20', NOx: '26', NO: '6.8', WindSpeed: '1.6', WindDirec: '171', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '12', PM10_AVG: '24', SO2_AVG: '2', Longitude: '121.537778', Latitude: '24.977222',
        }, { 
          SiteName: '新莊', County: '新北市', AQI: '37', Pollutant: '', Status: '良好', SO2: '4.5', CO: '0.36', CO_8hr: '0.4', O3: '7.5', O3_8hr: '16', PM10: '28', 'PM2.5': '11', NO2: '14', NOx: '17', NO: '3', WindSpeed: '0.8', WindDirec: '179', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '11', PM10_AVG: '27', SO2_AVG: '3', Longitude: '121.4325', Latitude: '25.037972', 
        }, {
          SiteName: '新港', County: '嘉義縣', AQI: '44', Pollutant: '', Status: '良好', SO2: '2.8', CO: '0.2', CO_8hr: '0.1', O3: '7.1', O3_8hr: '13', PM10: '21', 'PM2.5': '17', NO2: '8', NOx: '9.4', NO: '1.4', WindSpeed: '1.1', WindDirec: '180', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '14', PM10_AVG: '28', SO2_AVG: '3', Longitude: '120.345531', Latitude: '23.554839', 
        }, { 
          SiteName: '新營', County: '臺南市', AQI: '46', Pollutant: '', Status: '良好', SO2: '2.7', CO: '0.32', CO_8hr: '0.2', O3: '4.3', O3_8hr: '14', PM10: '38', 'PM2.5': '19', NO2: '14', NOx: '17', NO: '2.6', WindSpeed: '0.6', WindDirec: '225', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '14', PM10_AVG: '24', SO2_AVG: '3', Longitude: '120.31725', Latitude: '23.305633', 
        }, { 
          SiteName: '楠梓', County: '高雄市', AQI: '35', Pollutant: '', Status: '良好', SO2: '1.3', CO: '0.24', CO_8hr: '0.2', O3: '16', O3_8hr: '17', PM10: '11', 'PM2.5': '10', NO2: '6.3', NOx: '7.5', NO: '1.3', WindSpeed: '1.2', WindDirec: '295', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '11', PM10_AVG: '13', SO2_AVG: '2', Longitude: '120.328289', Latitude: '22.733667',
        }, {
          SiteName: '萬里', County: '新北市', AQI: '24', Pollutant: '', Status: '良好', SO2: '0.8', CO: '0.24', CO_8hr: '0.2', O3: '4.5', O3_8hr: '22', PM10: '27', 'PM2.5': '4', NO2: '7.9', NOx: '11', NO: '3.6', WindSpeed: '1.4', WindDirec: '200', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '7', PM10_AVG: '26', SO2_AVG: '2', Longitude: '121.689881', Latitude: '25.179667', 
        }, { 
          SiteName: '萬華', County: '臺北市', AQI: '43', Pollutant: '', Status: '良好', SO2: '3.3', CO: '0.67', CO_8hr: '0.7', O3: '0.3', O3_8hr: '9', PM10: '25', 'PM2.5': '4', NO2: '19', NOx: '33', NO: '14', WindSpeed: '0.5', WindDirec: '4.2', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '13', PM10_AVG: '28', SO2_AVG: '2', Longitude: '121.507972', Latitude: '25.046503',
        }, {
          SiteName: '嘉義', County: '嘉義市', AQI: '16', Pollutant: '', Status: '良好', SO2: '1.3', CO: '0.39', CO_8hr: '0.3', O3: '7', O3_8hr: '14', PM10: '22', 'PM2.5': '2', NO2: '16', NOx: '18', NO: '1.9', WindSpeed: '1.5', WindDirec: '121', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '4', PM10_AVG: '17', SO2_AVG: '1', Longitude: '120.440833', Latitude: '23.462778',
        }, { 
          SiteName: '彰化', County: '彰化縣', AQI: '29', Pollutant: '', Status: '良好', SO2: '14', CO: '0.44', CO_8hr: '0.3', O3: '4.8', O3_8hr: '12', PM10: '21', 'PM2.5': '12', NO2: '15', NOx: '17', NO: '1.6', WindSpeed: '1.9', WindDirec: '184', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '9', PM10_AVG: '21', SO2_AVG: '4', Longitude: '120.541519', Latitude: '24.066',
        }, {
          SiteName: '彰化(大城)', County: '彰化縣', AQI: '36', Pollutant: '', Status: '良好', SO2: '2.2', CO: '0.22', CO_8hr: '0.2', O3: '21', O3_8hr: '18', PM10: '13', 'PM2.5': '13', NO2: '3', NOx: '4.4', NO: '1.5', WindSpeed: '0.3', WindDirec: '199', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '11', PM10_AVG: '16', SO2_AVG: '2', Longitude: '120.273117', Latitude: '23.843139', 
        }, {
          SiteName: '臺西', County: '雲林縣', AQI: '29', Pollutant: '', Status: '良好', SO2: '1.5', CO: '0.08', CO_8hr: '0.1', O3: '20', O3_8hr: '18', PM10: '16', 'PM2.5': '5', NO2: '3', NOx: '2.7', NO: '-0.3', WindSpeed: '1.6', WindDirec: '252', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '9', PM10_AVG: '15', SO2_AVG: '2', Longitude: '120.202842', Latitude: '23.717533',
        }, { 
          SiteName: '臺東', County: '臺東縣', AQI: '27', Pollutant: '', Status: '良好', SO2: '1.4', CO: '0.31', CO_8hr: '0.3', O3: '16', O3_8hr: '22', PM10: '21', 'PM2.5': '10', NO2: '6.7', NOx: '9.3', NO: '2.6', WindSpeed: '1', WindDirec: '322', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '8', PM10_AVG: '20', SO2_AVG: '1', Longitude: '121.15045', Latitude: '22.755358', 
        }, {
          SiteName: '臺南', County: '臺南市', AQI: '31', Pollutant: '', Status: '良好', SO2: '1.5', CO: '0.24', CO_8hr: '0.2', O3: '14', O3_8hr: '17', PM10: '16', 'PM2.5': '12', NO2: '8.4', NOx: '9', NO: '0.6', WindSpeed: '1.6', WindDirec: '222', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '10', PM10_AVG: '14', SO2_AVG: '2', Longitude: '120.202617', Latitude: '22.984581',
        }, { 
          SiteName: '臺南(北門)', County: '臺南市', AQI: '19', Pollutant: '', Status: '良好', SO2: '1.1', CO: '0.02', CO_8hr: '0.1', O3: '22', O3_8hr: '21', PM10: '10', 'PM2.5': '2', NO2: '2.4', NOx: '2.5', NO: '0.2', WindSpeed: '2.1', WindDirec: '229', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '4', PM10_AVG: '11', SO2_AVG: '1', Longitude: '120.124444', Latitude: '23.264722', 
        }, {
          SiteName: '鳳山', County: '高雄市', AQI: '55', Pollutant: '細懸浮微粒', Status: '普通', SO2: '1.7', CO: '0.49', CO_8hr: '0.4', O3: '7.2', O3_8hr: '14', PM10: '19', 'PM2.5': '21', NO2: '17', NOx: '19', NO: '1.9', WindSpeed: '2', WindDirec: '236', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '17', PM10_AVG: '17', SO2_AVG: '1', Longitude: '120.358083', Latitude: '22.627392',
        }, {
          SiteName: '潮州', County: '屏東縣', AQI: '38', Pollutant: '', Status: '良好', SO2: '1', CO: '0.27', CO_8hr: '0.2', O3: '10', O3_8hr: '22', PM10: '29', 'PM2.5': '15', NO2: '12', NOx: '14', NO: '2.3', WindSpeed: '1.9', WindDirec: '128', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '12', PM10_AVG: '23', SO2_AVG: '2', Longitude: '120.561175', Latitude: '22.523108',
        }, {
          SiteName: '線西', County: '彰化縣', AQI: '48', Pollutant: '', Status: '良好', SO2: '1.4', CO: '0.47', CO_8hr: '0.3', O3: '2.6', O3_8hr: '11', PM10: '38', 'PM2.5': '23', NO2: '18', NOx: '23', NO: '4.9', WindSpeed: '2.2', WindDirec: '196', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '15', PM10_AVG: '26', SO2_AVG: '2', Longitude: '120.469061', Latitude: '24.131672',
        }, {
          SiteName: '橋頭', County: '高雄市', AQI: '44', Pollutant: '', Status: '良好', SO2: '2', CO: '0.25', CO_8hr: '0.3', O3: '17', O3_8hr: '18', PM10: '28', 'PM2.5': '19', NO2: '7.6', NOx: '8.3', NO: '0.8', WindSpeed: '1.1', WindDirec: '223', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '14', PM10_AVG: '19', SO2_AVG: '3', Longitude: '120.305689', Latitude: '22.757506', 
        }, {
          SiteName: '頭份', County: '苗栗縣', AQI: '20', Pollutant: '', Status: '良好', SO2: '1.6', CO: '0.19', CO_8hr: '0.2', O3: '9.4', O3_8hr: '15', PM10: '22', 'PM2.5': '7', NO2: '13', NOx: '15', NO: '1.8', WindSpeed: '1.4', WindDirec: '187', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '6', PM10_AVG: '20', SO2_AVG: '2', Longitude: '120.898572', Latitude: '24.696969', 
        }, {
          SiteName: '龍潭', County: '桃園市', AQI: '34', Pollutant: '', Status: '良好', SO2: '3', CO: '0.23', CO_8hr: '0.2', O3: '10', O3_8hr: '21', PM10: '27', 'PM2.5': '2', NO2: '11', NOx: '13', NO: '2', WindSpeed: '2', WindDirec: '188', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '11', PM10_AVG: '26', SO2_AVG: '3', Longitude: '121.21635', Latitude: '24.863869',
        }, { 
          SiteName: '豐原', County: '臺中市', AQI: '40', Pollutant: '', Status: '良好', SO2: '1.4', CO: '0.21', CO_8hr: '0.2', O3: '20', O3_8hr: '19', PM10: '17', 'PM2.5': '9', NO2: '6.7', NOx: '8.6', NO: '1.9', WindSpeed: '1.9', WindDirec: '176', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '12', PM10_AVG: '23', SO2_AVG: '2', Longitude: '120.741711', Latitude: '24.256586', 
        }, {
          SiteName: '關山', County: '臺東縣', AQI: '34', Pollutant: '', Status: '良好', SO2: '', CO: '-', CO_8hr: '', O3: '20', O3_8hr: '22', PM10: '23', 'PM2.5': '12', NO2: '3.3', NOx: '4.1', NO: '0.7', WindSpeed: '0.6', WindDirec: '38', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '11', PM10_AVG: '19', SO2_AVG: '', Longitude: '121.161933', Latitude: '23.045083',
        }, { 
          SiteName: '觀音', County: '桃園市', AQI: '24', Pollutant: '', Status: '良好', SO2: '1.5', CO: '0.1', CO_8hr: '0.1', O3: '18', O3_8hr: '20', PM10: '13', 'PM2.5': '5', NO2: '1.5', NOx: '3.5', NO: '2', WindSpeed: '2.6', WindDirec: '220', PublishTime: '2019-06-03 22:00', 'PM2.5_AVG': '8', PM10_AVG: '24', SO2_AVG: '2', Longitude: '121.082761', Latitude: '25.035503', 
        },
      ],
      currentCity: '',
      currentDist: '',
      init() {
        // Promise 改寫 setRawData & renderCitySelect
        aqi.setRawData()
        aqi.renderCitySelect()
        
        aqi.dom.selectCity.addEventListener('change', aqi.renderDistSelect)
        aqi.dom.selectDist.addEventListener('change', aqi.renderData)
      },
      setRawData() {
        // 用於控制 select 聯動用的變數
        // fetch result = aqi.raw
        return new Promise((resolve, reject) => {
          resolve('OK')
          // reject(new Error('Error'))
        })
      },
      // 初始渲染 城市Select
      renderCitySelect() {
        let tpl = '<option hidden disabled selected value>選擇城市</option>'
        const cityArr = aqi.raw.map(el => el.County)
        cityArr.forEach((elem) => {
          tpl += `<option value="${elem}">${elem}</option>`
        })
        this.dom.selectCity.innerHTML = tpl
      },
      // 改變 城市Select 觸發渲染 地區Select
      renderDistSelect(e) {
        // 解開 地區 Select
        aqi.dom.selectDist.disabled = false

        const city = e.target.value
        // 暫存 City變數 作為選擇完 City & Site 後結果輸出會用到
        aqi.currentCity = e.target.value
        console.dir(e.target.value)

        // Render 地區 Select
        let tpl = '<option hidden disabled selected>選擇地區</option>'
        const siteArr = aqi.raw.filter(el => el.County === city).map(el => el.SiteName)
        siteArr.forEach((elem) => {
          tpl += `<option value="${elem}">${elem}</option>`
        })
        aqi.dom.selectDist.innerHTML = tpl
      },
      renderData(e) {
        // 變數放入暫存
        const site = e.target.value
        aqi.currentDist = site
        const country = aqi.currentCity

        // 尋找符合 城市&地區的目標
        const target = aqi.raw.filter(el => el.County === country && el.SiteName === site)[0]

        // Object order不可靠 改成陣列
        const dataResult = [
          target.County,
          target.SiteName,
          target.PM10,
          target['PM2.5'],
          target.O3,
          target.CO,
          target.SO2,
          target.NO2,
        ]
        
        // Render 結果表格
        let tpl = ''
        dataResult.forEach((elem) => { tpl += `<td>${elem}</td>` })
        aqi.dom.resultDom.innerHTML = tpl
        
        // Render 分數 & PubTime & 狀況
        aqi.dom.score.innerHTML = target.AQI
        aqi.dom.pubTime.innerHTML = `${target.PublishTime}更新`
        aqi.dom.status.innerHTML = target.Status

        // 根據 分數 給與不同背景顏色
        const scoreBgc = aqi.getColor(target.AQI)
        aqi.dom.score.style.backgroundColor = scoreBgc
        aqi.dom.status.style.backgroundColor = scoreBgc
        aqi.dom.score.style.color = '#000'
        aqi.dom.status.style.color = '#000'

        //* Render 風向 target.WindSpeed / target.WindDirec
      },
      // 根據AQI分數 給與不同顏色
      getColor(aqiScore) {
        let color = ''
        const score = aqiScore * 1
        if (score < 50 && score > 0) {
          color = '#95F084'
        } else if (score < 100 && score > 50) {
          color = '#FFE695'
        } else if (score < 150 && score > 150) {
          color = '#FFAF6A'
        } else if (score < 200 && score > 200) {
          color = '#FF5757'
        } else if (score < 300 && score > 300) {
          color = '#9777FF'
        } else if (score < 400 && score > 300) {
          color = '#AD1774'
        } else {
          color = '傳入值不符合'
        }
        return color
      },
    }

    /* Day1 DrumKit */
    // window.addEventListener('keydown', keyBoxEvent)
    const drum = {
      dom: {
        audios: document.querySelector('.b-drum__audios'),
      },
      init() {
        window.addEventListener('keydown', drum.keyPressed)
      },
      keyPressed(e) {
        const pressedKey = e.keyCode
        let target = document.querySelector(`.b-key[data-key="${pressedKey}"]`)
        // 播放音效
        drum.playSound(pressedKey)
        // 控制動畫
        if (target) {
          if (target.classList.contains('animated')) {
            target.classList.remove('heartBeat')
          }
          setTimeout(() => {
            target.classList.add('heartBeat')
            target.classList.add('animated')
          }, 200)
        }
      },
      playSound(key) {
        // 改寫後
        const targetAudio = document.querySelector(`audio[data-key="${key}"]`)
        if (targetAudio) {
          targetAudio.currentTime = 0
          targetAudio.play()
        }

        // 最初的寫法
        // const audioArr = [...drum.dom.audios.children]
        // el.dataset.key 回傳為字串.. 被捅了一刀
        // const targetAudioArr = audioArr.filter(el => +(el.dataset.key) === key)
        // if (targetAudioArr.length !== 0) {
        // targetAudioArr[0].currentTime = 0
        // targetAudioArr[0].play()
        // }
      },
    }

    /* Day2 JS & CSS Clock */
    /* Day29 Countdown Timer */
    // Clock先不刻，先能做個電子鐘就行
    const clock = {
      dom: {
        // 設定時間的Form
        timeSetForm: document.querySelector('#b-clock__form'),
        // 倒數時間展示
        displayTimeText: document.querySelector('.b-clock__display--text'),
        // 設定倒數時間DOM
        setHourInput: document.querySelector(
          '#b-clock__form input[name="hour"]',
        ),
        setMinInput: document.querySelector('#b-clock__form input[name="min"]'),
        setSecInput: document.querySelector('#b-clock__form input[name="sec"]'),
        // 倒數控制DOM
        startCountDownBtn: document.querySelector('.b-clock__display--start'),
        stopCountDownBtn: document.querySelector('.b-clock__display--stop'),
      },
      init() {
        // 倒數計時設定Form
        clock.dom.timeSetForm.addEventListener('submit', clock.setTime)
        // 倒數計時 開始和暫停按鈕
        clock.dom.stopCountDownBtn.addEventListener(
          'click',
          clock.stopCountDown,
        )
        clock.dom.startCountDownBtn.addEventListener(
          'click',
          clock.startCountDown,
        )
      },
      // 紀錄當前倒數時間
      tmpTime: 0,
      pauseClock: false,
      // 設置倒數時間
      setTime(e) {
        clock.pauseClock = true
        e.preventDefault()
        clock.renderClock(clock.getSetTime().tplStr)
      },
      // 取得設置的倒數時間
      getSetTime() {
        // 轉換前 加總在重新輸出
        const hour = this.dom.setHourInput.value
        const min = this.dom.setMinInput.value
        const sec = this.dom.setSecInput.value
        const addUpTime = +hour * 3600 + +min * 60 + +sec
        // 轉換後
        let convertedTime = this.convertTime(addUpTime)
        clock.tmpTime = addUpTime
        return {
          h: convertedTime.h,
          m: convertedTime.m,
          s: convertedTime.s,
          tplStr: convertedTime.tplStr,
          addUpTime,
        }
      },
      // 渲染時鐘
      renderClock(data) {
        this.dom.displayTimeText.textContent = data
      },
      // 把秒轉換成 h m s
      convertTime(time) {
        let h = Math.floor(time / 3600)
        let m = Math.floor((time % 3600) / 60)
        let s = Math.floor((time % 3600) % 60)
        let tplStr = `${h}小時${m}分鐘${s}秒`
        return {
          h,
          m,
          s,
          tplStr: tplStr.trim(),
        }
      },
      // 開始倒數 setInterVal
      startCountDown() {
        clock.pauseClock = false

        // 取得設置的時間
        // clock.tmpTime = +(clock.getSetTime().addUpTime)

        let timer = setInterval(() => {
          clock.tmpTime -= 1
          //* 可以從內部呼叫 clearInterval
          if (clock.tmpTime === 0) clearInterval(timer)
          if (clock.pauseClock) clearInterval(timer)
          console.log(clock.tmpTime)

          let convertedTime = clock.convertTime(clock.tmpTime)
          clock.renderClock(convertedTime.tplStr)
        }, 1000)
        // setInterval(clock.renderClock(time - 1), 1000)
      },
      // 暫停倒數 setInterVal
      stopCountDown() {
        clock.pauseClock = true
        console.log(clock.tmpTime)
        // clearInterval(clock.startCountDown())
      },
    }

    /* Day4 & Day7 Array Cardio */
    /* Day6 TypeAhead 購物車搜尋欄*/
    const arrayCardio = {
      dom: {
        originDataDOM: document.querySelector('#b-array__table--origin'),
        processedDataDOM: document.querySelector('#b-array__table--processed'),
        btnParent: document.querySelector('.b-array__btns'),
        someInput: document.querySelector('#b-array__input--some'),
        someAns: document.querySelector('#b-array__ans--some'),
        everyInput: document.querySelector('#b-array__input--every'),
        everyAns: document.querySelector('#b-array__ans--every'),
        everyVal: document.querySelector('#b-array__range--value'),
        findIndexInput: document.querySelector('#b-array__input--findIndex'),
        findIndexAns: document.querySelector('#b-array__ans--findIndex'),
      },
      describe: {
        filter: "篩選出誰生於1500's",
        sortAge: '以年齡排序 高到低',
        sortAlpha: '依據 first 做英文字母排序 Z-A',
        find: '找出第一個叫Albert的人',
      },
      originData: [
        {
          first: 'Albert',
          last: 'EinsteinA',
          birth: 1879,
          passed: 1955,
        },
        {
          first: 'Albert',
          last: 'EinsteinB',
          birth: 1879,
          passed: 1955,
        },
        {
          first: 'Isaac',
          last: 'Newton',
          birth: 1643,
          passed: 1727,
        },
        {
          first: 'Galileo',
          last: 'Galilei',
          birth: 1564,
          passed: 1642,
        },
        {
          first: 'Marie',
          last: 'Curie',
          birth: 1867,
          passed: 1934,
        },
      ],
      // 掛載監聽 & Render 原始資料
      init() {
        // 事件代理
        this.dom.btnParent.addEventListener('click', this.createTable)

        // some掛載事件
        this.dom.someInput.addEventListener('change', this.someInputFunc)
        this.dom.someInput.addEventListener('keyup', this.someInputFunc)
        // every掛載事件
        this.dom.everyInput.addEventListener('change', this.everyInputFunc)
        this.dom.everyInput.addEventListener('input', this.everyInputFunc)
        // findIndex掛載事件
        this.dom.findIndexInput.addEventListener(
          'change',
          this.findIndexInputFunc,
        )
        this.dom.findIndexInput.addEventListener(
          'input',
          this.findIndexInputFunc,
        )

        // 渲染原始表單
        this.renderData(
          arrayCardio.dom.originDataDOM,
          'origin',
          arrayCardio.processedData(),
        )
      },
      // 已map後資料
      processedData() {
        return this.originData.map(el => ({
          first: el.first,
          last: el.last,
          birth: el.birth,
          passed: el.passed,
          age: el.passed - el.birth,
        }))
      },
      // array處理過程
      processFunc(title) {
        let result = []
        // Map 使用
        let data = arrayCardio.processedData()

        switch (title) {
          case 'filter':
            result = data.filter(el => el.birth >= 1500 && el.birth < 1600)
            break
          case 'sortAge':
            result = data.sort((elA, elB) => {
              let livedA = elA.passed - elA.birth
              let livedB = elB.passed - elB.birth
              return livedA < livedB ? 1 : -1
            })
            break
          case 'sortAlpha':
            result = data.sort((elA, elB) => {
              let nameA = elA.first.toLowerCase()
              let nameB = elB.first.toLowerCase()
              return nameA < nameB ? 1 : -1
            })
            break
          case 'find':
            result = (function () {
              let tmpArr = []
              let target = data.find(elem => elem.first === 'Albert')
              tmpArr.push(target)
              return tmpArr
            }())
            break
          default:
            break
        }

        return result
      },
      // 產生結果陣列
      createTable(e) {
        const tagName = e.target.tagName.toLowerCase()
        if (tagName === 'button') {
          let { func } = e.target.dataset
          arrayCardio.renderData(
            arrayCardio.dom.processedDataDOM,
            func,
            arrayCardio.processFunc(func),
          )
        }
      },
      renderData(target, title, data) {
        // console.table(title, data)
        // 處理describe說明文字
        let describeText = ''
        switch (title) {
          case 'filter':
            describeText = this.describe.filter
            break
          case 'sortAge':
            describeText = this.describe.sortAge
            break

          case 'sortAlpha':
            describeText = this.describe.sortAlpha
            break

          case 'find':
            describeText = this.describe.find
            break

          default:
            break
        }
        // dataMarkUp 為陣列資料處理
        // markUP 為整個Table渲染
        let dataMarkUp = data.reduce((sum, el) => {
          let tempStr = `
            <tr>
              <th scope="row">1</th>
              <td>${el.first}</td>
              <td>${el.last}</td>
              <td>${el.birth}</td>
              <td>${el.passed}</td>
              <td>${el.age}</td>
            </tr>
          `
          return sum + tempStr
        }, '')

        // console.log(dataMarkUp)

        let markup = `
          ${describeText}
          <table class="b-array__table table table-dark table-bordered table-hover table-sm">
            <thead class="thead-dark">
              <tr>
                <th style="width: 10%" scope="row">${title}</th>
                <th scope="row">first</th>
                <th scope="row">last</th>
                <th scope="row">birth</th>
                <th scope="row">passed</th>
                <th scope="row">age</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                ${dataMarkUp}
              </tr>
            </tbody>
          </table>
        `
        target.innerHTML = markup
      },
      someInputFunc(e) {
        let inputAge = e.target.value
        let someTest = function (elem) {
          let age = elem.passed - elem.birth
          return age >= inputAge
        }

        let result = arrayCardio.processedData().some(someTest)
        arrayCardio.dom.someAns.textContent = result
      },
      everyInputFunc(e) {
        let val = e.target.value
        arrayCardio.dom.everyVal.textContent = val
        let result = arrayCardio.processedData().every((elem) => {
          let age = elem.passed - elem.birth
          return age >= val
        })
        arrayCardio.dom.everyAns.textContent = result
      },
      findIndexInputFunc(e) {
        let name = e.target.value
        if (!name) {
          arrayCardio.dom.findIndexAns.textContent = '不可為空'
        } else {
          let result = arrayCardio
            .processedData()
            .findIndex(elem => elem.last === name)
          if (result < 0) {
            arrayCardio.dom.findIndexAns.textContent = '查無此人'
          } else {
            arrayCardio.dom.findIndexAns.textContent = result
          }
        }
      },
    }
    /* Day9 DevToolsDomination */
    const myConsole = {
      consoleGenBtn: document.querySelector('.b-console__btn--generate'),
      consoleClearBtn: document.querySelector('.b-console__btn--clear'),
      init() {
        myConsole.consoleGenBtn.addEventListener(
          'click',
          myConsole.generateConsole,
        )
        myConsole.consoleClearBtn.addEventListener('click', () => {
          console.clear()
        })
      },
      generateConsole() {
        // 帶樣式
        console.log(
          '%c JS30 Day9 Console 練習',
          'font-size:25px; background: #212529; color: #fff;',
        )

        // 一般常見
        console.log('log', 'Day9 Console')
        console.info('info', 'Style Work On FireFox')
        console.warn('warn', 'Day9 Console')
        console.error('error', 'Day9 Console ')

        // Interpolated  插入變數
        // %s 表 string, %d或%i 表整數 %f表浮點數
        console.log('Interpolated a %s string!', '💩')

        // Testing 用
        // 判斷地一個參數是否為true, false則噴錯
        // console.assert((1 > 2), '錯誤訊息: 1並非大於2')

        // console.dir 把物件展開
        const consoleDemoObj = {
          title: 'JS30 Day9 Console',
        }
        console.dir(consoleDemoObj)

        // console.table 可作欄位篩選
        // Array 用 Table 形式呈現
        const consoleDemoArray = [
          { name: 'Snickers', age: 2 },
          { name: 'hugo', age: 8 },
        ]
        console.table(consoleDemoArray, 'name')

        // timing 回傳
        console.time('fetching data')
        fetch('https://api.github.com/users/wesbos')
          .then(data => data.json())
          .then((data) => {
            console.log(data)
            console.timeEnd('fetching data')
          })
      },
    }

    /* Day12 Key Sequence Detection */
    // 這個不難可以先做

    /* Day13 Slide in on Scroll & Smooth Scrolling*/
    const smScroll = {
      navHeight: 0,
      dom: {
        nav: document.querySelector('#siteTop'),
        scrollTopDom: document.querySelector('.scrolling'),
        serviceArea: document.querySelector(
          '.scrolling[data-scroll="service"]',
        ),
        conceptArea: document.querySelector(
          '.scrolling[data-scroll="concept"]',
        ),
        reviewArea: document.querySelector('.scrolling[data-scroll="review"]'),
        scrollLinks: document.querySelector('.smoothScrollingMenu'),
      },
      init() {
        // 取得Nav DOM高
        smScroll.navHeight = smScroll.getNavH()
        // 掛載滾動事件 顯示按鈕 & 區域動畫
        window.addEventListener('scroll', smScroll.showBTopBtn)
        window.addEventListener('scroll', smScroll.startAnimation)
        // 點擊按鈕
        smScroll.dom.scrollLinks.addEventListener('click', smScroll.scrollTo)
      },
      getNavH() {
        return this.dom.nav.getBoundingClientRect().height
      },
      getDomY(dom) {
        return (
          window.scrollY + dom.getBoundingClientRect().top - smScroll.navHeight
        )
      },
      scrollTo(e) {
        const areaName = e.target.dataset.scroll
        if (areaName === 'top') {
          window.scrollTo(0, 0)
        } else {
          window.scrollTo(0, smScroll.getDomY(smScroll.dom[`${areaName}Area`]))
        }
      },
      // 根據當前Y顯示本頁的Nav
      showBTopBtn() {
        if (window.scrollY > 150) {
          smScroll.dom.scrollLinks.style.visibility = 'visible'
        } else {
          smScroll.dom.scrollLinks.style.visibility = 'hidden'
        }
      },
    }

    /* Day15 LocalStorage */
    const myLocalStorage = {
      dom: {
        itemList: document.querySelector('#b-locals__item__list'),
        form: document.querySelector('#b-locals__form'),
        id: document.querySelector('.b-locals__input[name="id"]'),
        title: document.querySelector('.b-locals__input[name="title"]'),
        tag: document.querySelector('#b-locals__select'),
        price: document.querySelector('.b-locals__input[name="price"]'),
        describe: document.querySelector('.b-locals__textarea'),
        url: document.querySelector('.b-locals__input[name="url"]'),
        searchBar: document.querySelector('#b-locals__search'),
        searchBtn: document.querySelector('#b-locals__search--send'),
        listTab: document.querySelector('.b-locals__tab__list'),
      },
      testData: [
        {
          id: 1,
          title: '京都清水寺一日遊 A',
          tag: '關西',
          price: '1200',
          describe: '清水寺是京都最古老的寺。',
          url: 'https://bit.ly/2KcGi2D',
        },
        {
          id: 2,
          title: '京都清水寺一日遊 B',
          tag: '關西',
          price: '1200',
          describe: '清水寺是京都最古老的寺。',
          url: 'https://bit.ly/2KcGi2D',
        },
        {
          id: 3,
          title: '東京晴空塔夜遊 A',
          tag: '關東',
          price: '2800',
          describe: '東京晴空塔，又譯稱東京天空樹、新東京鐵塔。',
          url: 'https://bit.ly/2VZ2HTo',
        },
        {
          id: 4,
          title: '東京晴空塔夜遊 B',
          tag: '關東',
          price: '2800',
          describe: '東京晴空塔，又譯稱東京天空樹、新東京鐵塔。',
          url: 'https://bit.ly/2VZ2HTo',
        },
      ],
      newData: [
        {
          id: 1,
          title: '京都清水寺一日遊 A',
          tag: '關西',
          price: '1200',
          describe: '清水寺是京都最古老的寺。',
          url: 'https://bit.ly/2KcGi2D',
        },
        {
          id: 2,
          title: '京都清水寺一日遊 B',
          tag: '關西',
          price: '1200',
          describe: '清水寺是京都最古老的寺。',
          url: 'https://bit.ly/2KcGi2D',
        },
        {
          id: 3,
          title: '東京晴空塔夜遊 A',
          tag: '關東',
          price: '2800',
          describe: '東京晴空塔，又譯稱東京天空樹、新東京鐵塔。',
          url: 'https://bit.ly/2VZ2HTo',
        },
        {
          id: 4,
          title: '東京晴空塔夜遊 B',
          tag: '關東',
          price: '2800',
          describe: '東京晴空塔，又譯稱東京天空樹、新東京鐵塔。',
          url: 'https://bit.ly/2VZ2HTo',
        },
      ],
      init() {
        // 資料加入 localStorage & 渲染原始資料/Tab
        this.addOriginData()
        this.renderDataList(this.currentData())
        this.renderListTab()

        // 掛載新增購物清單DOM
        this.dom.form.addEventListener('submit', this.submitData)

        // 搜尋欄
        this.dom.searchBar.addEventListener('keyup', this.renderNewData)
        this.dom.searchBtn.addEventListener('click', this.renderNewData)

        // 側邊欄Tab
        this.dom.listTab.addEventListener('click', this.tabSwitchDataListener)
      },
      // 渲染 ListTab
      renderListTab() {
        let parent = this.dom.listTab
        // let tagType = e.target.children[0].dataset.area
        let westCount = myLocalStorage
          .currentData()
          .filter(el => el.tag === '關西').length
        let eastCount = myLocalStorage
          .currentData()
          .filter(el => el.tag === '關東').length
        // console.log('西', westCount, '東', eastCount, 'all', westCount + eastCount)

        // all Tab 更改文字內容
        parent.children[1].children[0].textContent = westCount + eastCount
        // 關東 Tab 更改文字內容
        parent.children[2].children[0].textContent = eastCount
        // 關西 Tab 更改文字內容
        parent.children[3].children[0].textContent = westCount
      },
      // Tab 更換清單內容的監聽
      tabSwitchDataListener(e) {
        const tagName = e.target.tagName.toLowerCase()
        const dataType = e.target.children[0].dataset.area
        if (tagName === 'li') {
          myLocalStorage.filterItem(dataType)
        }
        myLocalStorage.dom.searchBar.value = ''
      },
      // 更換清單內容
      filterItem(str) {
        switch (str) {
          case 'all':
            this.renderDataList(this.currentData())
            break
          case '關西':
          case '關東':
            this.renderDataList(this.currentData().filter(el => el.tag === str))
            break
          case '':
            this.renderDataList(this.currentData())
            break
          default:
            this.renderDataList(
              this.currentData().filter(el => el.title.includes(str)),
            )
            break
        }
      },
      renderNewData() {
        const inputVal = myLocalStorage.dom.searchBar.value.trim()
        console.log(inputVal)
        myLocalStorage.filterItem(inputVal)
      },
      // 代入資料 渲染購物清單
      renderDataList(data) {
        let result = ''
        if (data.length === 0) {
          result = `
            <h4 class="d-block ml-3">查無關鍵字<h4/>
          `
        } else {
          data.forEach((el) => {
            let tpl = `
              <div data-itemId="${el.id}" class="col-12 col-sm-6 col-md-4 product mb-3">
                <img class="card-img-top" src="${el.url}" alt="productImg">
                <span class="productTag east">${el.tag}</span>
                <div class="productBody card-body">
                  <h5 class="card-title">${el.title}</h5>
                  <p>${el.describe}</p>
                  <hr>
                  <span class="productPrice mb-3">$${el.price}</span>
                  <button class="productBtn btn">
                    <i class="fas fa-shopping-cart"></i>
                    加入購物車
                  </button>
                </div>
              </div>
            `
            result += tpl
          })
        }
        myLocalStorage.dom.itemList.innerHTML = result
      },
      addOriginData() {
        localStorage.setItem('cartData', JSON.stringify(this.testData))
      },
      currentData() {
        if (!localStorage.getItem('cartData')) {
          localStorage.setItem('cartData', JSON.stringify(this.testData))
        }
        return JSON.parse(localStorage.getItem('cartData'))
      },
      getFormData() {
        return {
          id: this.testData.length + 1,
          title: this.dom.title.value,
          tag: this.dom.tag.value,
          price: this.dom.price.value,
          describe: this.dom.describe.value,
          url: this.dom.url.value,
        }
      },
      // submit事件
      submitData(e) {
        e.preventDefault()
        myLocalStorage.newData.push(myLocalStorage.getFormData())
        localStorage.setItem('cartData', JSON.stringify(myLocalStorage.newData))
        myLocalStorage.renderList()
        // console.table(myLocalStorage.currentData())
        myLocalStorage.renderListTab()
      },
      // 渲染表單
      renderList() {
        let el = myLocalStorage.getFormData()
        let tplStr = `
            <div data-itemId="${el.id}" class="col-12 col-sm-6 col-md-4 product mb-3">
              <img class="card-img-top" src="${el.url}" alt="productImg">
              <span class="productTag east">${el.tag}</span>
              <div class="productBody card-body">
                <h5 class="card-title">${el.title}</h5>
                <p>${el.describe}</p>
                <hr>
                <span class="productPrice mb-3">$${el.price}</span>
                <button class="productBtn btn">
                  <i class="fas fa-shopping-cart"></i>
                  加入購物車
                </button>
              </div>
            </div>
          `
        myLocalStorage.dom.itemList.innerHTML += tplStr
      },
      // 清除localStorage
      resetCartData() {
        localStorage.removeItem('cartData')
        // clear() 則是刪除整個localStorage資料
        // localStorage.clear()
      },
    }

    /* 偵測當前分頁 啟動相應JS */
    const runDetect = function () {
      const currentPage = window.location.href
      if (currentPage.includes('cart')) {
        // cart頁才啟動
        myLocalStorage.init()
      } else if (currentPage.includes('js30')) {
        // JS30 頁才啟動
        aqi.init()  
        clock.init()
        drum.init()
        arrayCardio.init()
        myConsole.init()
      } else {
        // Index 頁才啟動
        smScroll.init()
      }
    }
    runDetect()
  })
}())

