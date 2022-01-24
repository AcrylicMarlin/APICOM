/* eslint-disable @typescript-eslint/no-var-requires */
const { ApiCom } = require('./apiCom');

const token = 'Bearer 32f01f32-ec1e-4be5-8c7d-1e8e0cc56da1';
const username = 'SadLonelyGamer';

let com = new ApiCom(token, username);

com.getStatus().catch(err => { console.log(err.message); });

// com.getSystemShipListings('OE', 'MK-I').catch(err => { console.log(err.message); });
// com.getBuyLocation('EM-MK-I', 'OE').catch(err => { console.log(err.message); });
// com.buyShip('OE-PM-TR', 'EM-MK-I').catch(err => { console.log(err.message); });
// com.getUserShips().catch(err => { console.log(err.message); });
// com.getAccount().catch(err => { console.log(err.message); });
// com.getAvailableShips('MK-I').catch(err => { console.log(err.message); });
// com.getAccount().catch(err => { console.log(err.message); });
// com.getSystemInfo('OE').catch(err => { console.log(err.message); });
// com.getShipInfo('ckyngh01b27970415s6jsksbsze').catch(err => { console.warn(err.message); });
// com.getShips().catch(err => { console.warn(err.message); });
// com.getUserLoans().catch(err => { console.warn(err.message); });
// com.getLoans().catch(err => { console.log(err.message); });
// com.takeLoan('STARTUP').catch(err => { console.log(err.message); });