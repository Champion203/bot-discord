const { Client, GatewayIntentBits, Message } = require ("discord.js")
require ("dotenv").config()
const client = new Client({
	intents : [
		GatewayIntentBits.GuildMembers,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.Guilds,
		GatewayIntentBits.MessageContent
	]
})

const random_num = () =>{
	return Math.floor(Math.random() * 10);
}

client.login(process.env.token);

	client.on("ready", () => {
		console.log(`Logged in as ${client.user.username}!`)
	})
client.on("messageCreate", async(Message) => {
	console.log(Message)
})
client.on("messageCreate", msg =>{
	if (msg.content == 'สวัสดี'){
		msg.reply('สวัสดีจ้าา')
	}
	if (msg.content == 'มอนิ่ง' || msg.content =='GM ครับ' || msg.content =='GM ค้า' || msg.content =='มอนิ่งครับ'){
		msg.reply('มอนิ่งจ้าา')
	}
	if (msg.content == 'ชื่ออะไร'){
		msg.reply('ผมชื่ออับดุลครับ')
	}
	if (msg.content == 'ชื่อในเกม'){
		msg.reply('แชมป์ = Super Saiya #GOKU \n แก้ว = KuKuyyy #9922')
	}
	let foods = ['ผัดกระเพรา','ข้าวมันไก่','ก๋วยเตี๋ยว','ไข่เจียว','ข้าวผัด','ยำมาม่า','ข้าวขาหมู','ส้มตำ','ไก่ย่าง','ตี๋น้อย','ย่างเนย']
	if (msg.content == 'กินอะไรดี'){
		msg.reply (foods[random_num()])
	}
	if (msg.content == 'อับดุลเอ้ย'){
		msg.reply('เอ้ย!!')
	}
	if (msg.content == 'ถามอะไรตอบได้'){
		msg.reply('ได้!!')
	}
	let musics = ['โต๊ะริม (Melt) - นนท์ ธนนท์',' เอาปากกามาวง - เบล วริศรา','ลืมเขาได้ยัง - Serious Bacon','ดวงตา (Eyes) - แพทริค อนันดา','กลับก่อนนะ (GOODBYE) - อิ้งค์ วรันธร',
	'วันครบเลิก (UNNIVERSARY) – นนท์ ​ธนนท์','รักที่ดีคือรักตัวเอง - PEET MODEL, Guitar G','Shelter (Ost. You are my missing piece เธอซึมเศร้า แต่เขา OCD) - แพทริค อนันดา','แพ้ก็แค่พอ (Just Give Up) – Mean ft. PUN',
	'ฉลามชอบงับคุณ - บอนซ์ ณดล Feat.IIVY B','คนหรือไมโครเวฟ (microwave) - เบล วริศรา','วันนั้นฝนก็ตกแบบนี้แหละ (Rainy Day) – Mean Feat. Fongbeer','เส้นบางๆ - Indigo','เจ็บจนพอ - แว่นใหญ่',
	,'ทุกนาทีที่สวยงาม (Always With Me)- นนท์ ธนนท์','แค่ผ่านมาให้จำ - Indigo','ได้อยู่ - โอ๊ต ปราโมทย์ feat. MILLI','Luxury - D Gerrard','ไม่พิเศษ - Serious Bacon','ขอบคุณ (Thankful) - แว่นใหญ่',' อาจจะฟังดูใจร้าย (PAUSE) - Nan Thanchanok',
	'Heartbeat  - แอลลี่ อชิรญา','นับหนึ่งถึงตลอดไป - เอิ๊ต ภัทรวี','คิดตรงกัน (เหมือนฉันรึเปล่า) [Unsure] - Ringpopz, XOXOCITY','บอกเขาก่อน - ดา เอ็นโดรฟิน','ยอมแล้ว (Give up) - แว่นใหญ่','ຕື່ນຈາກຝັນ ( ตื่นจากฝัน )',
	'แฟนใหม่หน้าคุ้น','แดงกับเขียว','รองช้ำ','ถ้าเธอรักฉันจริง','อ้ายจัสวอนน่าเป็นแฟนยูได้บ่','ฝันถึงแฟนเก่า','ท้องฟ้า','เกิดมาเพื่ออกหัก','รางวัลปลอบใจ','ไม่นานก็ชิน','ครั้งสุดท้าย (feat. Gavin D, Nino)','ลม (Remaster)',
	'กราบขอร้อง','ฝนตกไหม','หลอก','เก็บซ่อน','พัง','เพื่อนเล่น ไม่เล่นเพื่อน (Just Being Friendly) Feat. MILLI (Original)','ไฟเย็น','ดวงเดือน','ไวน์','ทน (Explicit)','หมายความว่าอะไร'
	,'จำเลยรัก (Defendant Of Love)','Undo [JOOX Original]','สองใจ (เพลงประกอบละคร วันทอง)','ตามตะวัน','ลืมไป (feat. ปู่จ๋าน ลองไมค์)','ช่วยไม่ได้','คิด(แต่ไม่)ถึง (Same Page?)','ลบ (Delete) (Acoustic Version) Feat.Diamond',
	'อยากเจอ','หนีห่าง (เขียนไขและวานิช)','เก็บทรงไม่อยู่ Feat. DIAMOND MQT','ปล่อย','เรื่องจริง (Album Version)','คนละชั้น','รักได้ป่าว','ปล่อยมือฉัน','ปฏิเสธไม่ได้ว่ารักเธอ Feat.Kal','24พฤษภา [24MAY]'
	,'Morning','ใครคนนั้น','กอดไม่ได้ (2016 Remastered)','Sorry','คำหวาน (ที่เธอไม่เอา)','ไม่เหมือนใคร']
	if (msg.content == 'ฟังเพลงอะไรดี'){
		msg.reply('เพลงนี้เลยแนะนำ ' + musics[random_num()])
	}
	if (msg.content == 'อย่างสีเหลือง' || msg.content == 'สีเหลือง'){
		msg.reply('เยลโล่!!')
	}
	if (msg.content == 'มีด'){
		msg.reply('อีโต้!!')
	}
	if (msg.content == 'ภาษาอังกฤษพูดได้ไหม' || msg.content == 'พูดภาษาอังกฤษได้ไหม'){
		msg.reply('พูดได้!!')
	}
	if (msg.content == 'มะม่วง'){
		msg.reply('แมงโก้!!')
	}
	if (msg.content == 'ชุดชั้นใน'){
		msg.reply('วาโก้!!')
	}
	if (msg.content == 'ผ่าม'){
		msg.reply('ผ่าม!!')
	}
})