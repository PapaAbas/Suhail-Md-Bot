const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "8149557598";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_14_35_10_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjEyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDg0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgNjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDkyLFxuICAgICAgICA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDU2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNyxcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3NyxcbiAgICAgICAgNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMCxcbiAgICAgICAgNSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMixcbiAgICAgICAgMTYxLFxuICAgICAgICA5NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODcsXG4gICAgICAgIDM2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTksXG4gICAgICAgIDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxODMsXG4gICAgICAgIDc0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzYsXG4gICAgICAgIDAsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDY1LFxuICAgICAgICAxMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzksXG4gICAgICAgIDgyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0ZkcwNnZTR2xodzR3UXRSU2g2b2Y3azF6UE1xV2pjb0l2ZExZSk84bnVBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzX2xFUE5aNlFBRzQzeEdmT3luRzRnXCIsXG4gIFwicGhvbmVJZFwiOiBcImU3Nzk2ZjMwLTQ4YjMtNGZlMy05YjRjLTkwMDA4YTU1MmRhOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDIsXG4gICAgICAyMzAsXG4gICAgICAxNzYsXG4gICAgICAxNzksXG4gICAgICAxNTksXG4gICAgICAwLFxuICAgICAgMTA2LFxuICAgICAgMjEzLFxuICAgICAgMTMsXG4gICAgICAxMDUsXG4gICAgICA2NyxcbiAgICAgIDIyNyxcbiAgICAgIDc0LFxuICAgICAgNzAsXG4gICAgICA0NixcbiAgICAgIDYwLFxuICAgICAgODcsXG4gICAgICA2NSxcbiAgICAgIDY5LFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgwLFxuICAgICAgMTI4LFxuICAgICAgMjM1LFxuICAgICAgMTIxLFxuICAgICAgMTMwLFxuICAgICAgMTY5LFxuICAgICAgMTkwLFxuICAgICAgMTc1LFxuICAgICAgNTQsXG4gICAgICAxNTYsXG4gICAgICAxOTQsXG4gICAgICAyNTMsXG4gICAgICAxODQsXG4gICAgICA2NyxcbiAgICAgIDIyMixcbiAgICAgIDg4LFxuICAgICAgNTQsXG4gICAgICAyNTUsXG4gICAgICAzNyxcbiAgICAgIDIzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOUjI3Nk1WRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE0OTU1NzU5ODoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2OTYzMDI3ODI5MTUxMDoyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lPSzRMQUNFSnpBaXJnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwibU1tM1ErSnFHZS8vbUZrZHlNa25nMStwVFQrZlg4TzhOamRPZ2F0eXRoZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIrUGFsMDIzaEg3ekh5aCs1b3ZVUG9lVWZUSE9iZnZ1VXNKWmIzSFZwRHFkcjhuL0dEWTB1Y2FZWEFjb3oxT2NiMVI5MDNwREZGS3NLVWt6OVlmbHdCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZMFZTWVMxZmQ0UFoxam5xMGVhdDBld0xLYzhTS3VOSUNTMFU1MVptTkE0Y1VKY2xNSVRMeHpDREVFNjFqM2taZVh1MGt0ZVd3U05tOUZ3TStOaFJqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTQ5NTU3NTk4OjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODIyNTMxMlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
