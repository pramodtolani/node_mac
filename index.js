import getMAC, { isMAC } from 'getmac';
 
// Fetch the computer's MAC address
console.log(getMAC())
 
// Fetch the computer's MAC address for a specific interface
console.log(getMAC('eth0'))
