const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || "https://github.com/SuhailTechInfo/suhailmd-2.0"     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg"   "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_49_11_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4LFxuICAgICAgICA3OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA2LFxuICAgICAgICA3MCxcbiAgICAgICAgNixcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgODcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTksXG4gICAgICAgIDEwMixcbiAgICAgICAgOTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICA3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyLFxuICAgICAgICA2NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDMzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkwLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDgwLFxuICAgICAgICA3NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA3NixcbiAgICAgICAgNjksXG4gICAgICAgIDY4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY4LFxuICAgICAgICA5MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDk5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDQwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxODEsXG4gICAgICAgIDU4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MSxcbiAgICAgICAgNDksXG4gICAgICAgIDExLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDYxLFxuICAgICAgICA1NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4NixcbiAgICAgICAgMTA2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NixcbiAgICAgICAgMTAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM3LFxuICAgICAgICAxMixcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ0OHNzQkZnUG55SldPWUE3T0lpbXR3N2tjbStvcFhmTnNSYWJaTFBmSjZFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwNjY1MDY4OTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU1NUVEOEFCMkE5RkI5M0U3NDJEM0RBMURCNDg3OTMwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDcyODE1MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJMOHRzMkRCWVN3cWtLeHFNeTMzaWRBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgxODA5YjQ3LWQ2NjgtNGNlNi04ZWI5LTk3MWRiOTg4ZDgzNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjUsXG4gICAgICAyNDcsXG4gICAgICAyMDQsXG4gICAgICA2NCxcbiAgICAgIDQ0LFxuICAgICAgOTksXG4gICAgICAxMDcsXG4gICAgICAzNCxcbiAgICAgIDExMixcbiAgICAgIDE0MixcbiAgICAgIDEzNixcbiAgICAgIDM2LFxuICAgICAgMTAwLFxuICAgICAgMTIwLFxuICAgICAgMTg5LFxuICAgICAgMTEzLFxuICAgICAgOTksXG4gICAgICAyNDgsXG4gICAgICAxNzgsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE3LFxuICAgICAgMjMwLFxuICAgICAgMjUxLFxuICAgICAgMTI0LFxuICAgICAgNzYsXG4gICAgICA2MCxcbiAgICAgIDE3NSxcbiAgICAgIDYxLFxuICAgICAgOSxcbiAgICAgIDI0MixcbiAgICAgIDI3LFxuICAgICAgNjYsXG4gICAgICAyMzMsXG4gICAgICAxMjYsXG4gICAgICAxMDEsXG4gICAgICAxMTMsXG4gICAgICAxMTMsXG4gICAgICA5NyxcbiAgICAgIDU3LFxuICAgICAgMTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWVBSVFMxNFNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwNjY1MDY4OTk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIjI0Lzcgw4XEjMWkw45WxJYgw4XEjk3DjuG5hFwiLFxuICAgIFwibGlkXCI6IFwiMTQzNDgyNTQyOTE1NjA0OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTno3ayt3QkVNdWhvN2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWQ0xZSUFIMStrNWsrVDFBNmVhRUNnUjVoS1A1Qnh1VHRKNjRoVVJ0b1c4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNWZkZ2WmRYUmQ0UjI3NHM2eXZpVERpRk9oUU00c0NpdlVvRTJndkpDc2hneVBDMkV4Q3ZJdkRhd1hTZUtCV2l4R1VDUnBQM2NFN2FiUjE2N3lhZkNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIng0b1lpNnE1WUREMUV6d1ZWemVtS2xURVF6eEVCUTdJempRR2lMQ0lEbS9GWmlxdGErN1NjSmhhY09TSjh0ZXRhbVZNdVp2MTU5cUZmOFNkZEFnYUR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwNjY1MDY4OTk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDcyODE0M1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "ÅĈŤÎVĚ ĂĎMÎŇ",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "https://,chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
