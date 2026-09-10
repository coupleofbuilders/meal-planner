// Seed data: pantry items + recipes. Edit freely, app reads on load.
// ITEMS: id -> {en, mr, unit(g|ml|pc), cat, n:[kcal,protein,carb,fat]} ; n per 100 g/ml, or per 1 pc
export const ITEMS = {};
function I(id, en, mr, unit, cat, ...n) { ITEMS[id] = { id, en, mr, unit, cat, n }; }

// grains & flours
I('rice','Rice','तांदूळ','g','grain',356,7.9,78,0.5);
I('basmati','Basmati rice','बासमती तांदूळ','g','grain',356,7.9,78,0.5);
I('atta','Wheat flour (atta)','गव्हाचे पीठ','g','grain',341,12,71,1.7);
I('jowar','Jowar flour','ज्वारीचे पीठ','g','grain',334,10,68,1.7);
I('bajra','Bajra flour','बाजरीचे पीठ','g','grain',348,11,61,5.4);
I('riceflour','Rice flour','तांदळाचे पीठ','g','grain',350,7,78,0.5);
I('besan','Besan','बेसन','g','grain',372,22,57,5.6);
I('maida','Maida','मैदा','g','grain',350,10,74,0.9);
I('rava','Rava (sooji)','रवा','g','grain',350,10,73,0.8);
I('poha','Poha','पोहे','g','grain',350,7,77,1.2);
I('sabudana','Sabudana','साबुदाणा','g','grain',351,0.2,87,0.2);
I('vermicelli','Vermicelli','शेवया','g','grain',350,10,73,0.8);
I('oats','Oats','ओट्स','g','grain',375,13,67,7);
I('daliya','Daliya','दलिया','g','grain',340,12,70,1.5);
I('murmura','Murmura','कुरमुरे','g','grain',325,6,74,0.5);
I('bread','Bread (slice)','ब्रेड','pc','grain',78,2.4,15,0.9);
I('pav','Pav','पाव','pc','grain',100,3,19,1);
I('idlibatter','Idli batter','इडली पीठ','g','grain',150,5,30,0.5);
I('dosabatter','Dosa batter','डोसा पीठ','g','grain',150,5,30,0.5);
I('noodles','Noodles (pack)','नूडल्स','pc','grain',245,6.3,42,7);
I('pasta','Pasta','पास्ता','g','grain',371,13,75,1.5);
// dals & legumes
I('toor','Toor dal','तूर डाळ','g','dal',335,22,58,1.7);
I('moongdal','Moong dal (yellow)','मूग डाळ','g','dal',348,24,60,1.2);
I('moong','Whole moong','हिरवे मूग','g','dal',334,24,57,1.3);
I('masoor','Masoor dal','मसूर डाळ','g','dal',343,24,59,1.1);
I('chanadal','Chana dal','चणा डाळ','g','dal',360,21,60,5.6);
I('urad','Urad dal','उडीद डाळ','g','dal',341,24,59,1.6);
I('kabuli','Kabuli chana','काबुली चणे','g','dal',360,19,61,6);
I('kalachana','Kala chana','काळे चणे','g','dal',360,20,60,5);
I('rajma','Rajma','राजमा','g','dal',333,23,60,1.3);
I('matki','Matki','मटकी','g','dal',343,23,61,1);
I('chavli','Chavli','चवळी','g','dal',336,24,60,1.3);
I('vatana','White vatana','पांढरे वाटाणे','g','dal',340,22,60,1);
I('peanut','Peanuts','शेंगदाणे','g','dal',567,26,16,49);
// vegetables
I('potato','Potato','बटाटा','g','veg',77,2,17,0.1);
I('onion','Onion','कांदा','g','veg',40,1.1,9,0.1);
I('tomato','Tomato','टोमॅटो','g','veg',18,0.9,3.9,0.2);
I('garlic','Garlic','लसूण','g','veg',149,6.4,33,0.5);
I('ginger','Ginger','आले','g','veg',80,1.8,18,0.8);
I('gchilli','Green chilli','हिरवी मिरची','g','veg',40,2,9,0.2);
I('coriander','Coriander leaves','कोथिंबीर','g','veg',23,2.1,3.7,0.5);
I('curryleaf','Curry leaves','कढीपत्ता','g','veg',108,6,18,1);
I('mint','Mint','पुदिना','g','veg',44,3.3,8,0.7);
I('spinach','Spinach (palak)','पालक','g','veg',23,2.9,3.6,0.4);
I('methi','Methi leaves','मेथी','g','veg',49,4.4,6,0.9);
I('cabbage','Cabbage','कोबी','g','veg',25,1.3,6,0.1);
I('cauliflower','Cauliflower','फ्लॉवर','g','veg',25,1.9,5,0.3);
I('carrot','Carrot','गाजर','g','veg',41,0.9,10,0.2);
I('beans','French beans','फरसबी','g','veg',31,1.8,7,0.1);
I('peas','Green peas','मटार','g','veg',81,5.4,14,0.4);
I('capsicum','Capsicum','ढोबळी मिरची','g','veg',20,0.9,4.6,0.2);
I('dudhi','Bottle gourd (dudhi)','दुधी','g','veg',14,0.6,3.4,0);
I('dodka','Ridge gourd (dodka)','दोडका','g','veg',20,1.2,4,0.2);
I('karela','Bitter gourd','कारले','g','veg',17,1,3.7,0.2);
I('brinjal','Brinjal','वांगे','g','veg',25,1,6,0.2);
I('bhendi','Okra (bhendi)','भेंडी','g','veg',33,1.9,7,0.2);
I('pumpkin','Pumpkin','भोपळा','g','veg',26,1,6.5,0.1);
I('cucumber','Cucumber','काकडी','g','veg',15,0.7,3.6,0.1);
I('radish','Radish','मुळा','g','veg',16,0.7,3.4,0.1);
I('beetroot','Beetroot','बीट','g','veg',43,1.6,10,0.2);
I('sweetpotato','Sweet potato','रताळे','g','veg',86,1.6,20,0.1);
I('drumstick','Drumstick','शेवगा','g','veg',37,2.1,8.5,0.2);
I('tondli','Tondli','तोंडली','g','veg',18,1.2,3.1,0.1);
I('gavar','Gavar','गवार','g','veg',30,3.2,5,0.4);
I('lemon','Lemon','लिंबू','pc','veg',12,0.4,3.6,0.1);
I('corn','Sweet corn','मका','g','veg',86,3.3,19,1.4);
I('mushroom','Mushroom','मशरूम','g','veg',22,3.1,3.3,0.3);
I('coconut','Fresh coconut','ओले खोबरे','g','veg',354,3.3,15,33);
I('drycoconut','Dry coconut','सुके खोबरे','g','veg',660,7,24,65);
I('banana','Banana','केळी','pc','veg',105,1.3,27,0.4);
I('apple','Apple','सफरचंद','pc','veg',95,0.5,25,0.3);
// dairy & egg
I('milk','Milk','दूध','ml','dairy',61,3.2,4.8,3.3);
I('curd','Curd','दही','g','dairy',60,3.5,4.7,3.3);
I('paneer','Paneer','पनीर','g','dairy',265,18,1.2,21);
I('butter','Butter','लोणी','g','dairy',717,0.9,0.1,81);
I('ghee','Ghee','तूप','g','dairy',900,0,0,100);
I('cheese','Cheese (slice)','चीज','pc','dairy',70,5,0.3,5.4);
I('egg','Eggs','अंडी','pc','dairy',72,6.3,0.4,5);
// spices & masala
I('salt','Salt','मीठ','g','spice',0,0,0,0);
I('turmeric','Turmeric','हळद','g','spice',312,10,65,3);
I('chillipd','Red chilli powder','लाल तिखट','g','spice',282,12,50,14);
I('dhanapd','Coriander powder','धणे पूड','g','spice',298,12,55,18);
I('jeerapd','Cumin powder','जिरे पूड','g','spice',375,18,44,22);
I('garam','Garam masala','गरम मसाला','g','spice',300,12,50,10);
I('goda','Goda masala','गोडा मसाला','g','spice',350,12,50,15);
I('mustard','Mustard seeds','मोहरी','g','spice',508,26,28,36);
I('cumin','Cumin seeds','जिरे','g','spice',375,18,44,22);
I('hing','Asafoetida (hing)','हिंग','g','spice',297,4,68,1);
I('pbmasala','Pav bhaji masala','पावभाजी मसाला','g','spice',300,12,50,10);
I('chaat','Chaat masala','चाट मसाला','g','spice',250,8,40,5);
I('pepper','Black pepper','मिरपूड','g','spice',251,10,64,3);
I('cinnamon','Cinnamon','दालचिनी','g','spice',247,4,81,1.2);
I('clove','Cloves','लवंग','g','spice',274,6,66,13);
I('cardamom','Cardamom','वेलची','g','spice',311,11,68,7);
I('bayleaf','Bay leaf','तमालपत्र','g','spice',313,8,75,8);
I('drychilli','Dry red chilli','सुक्या लाल मिरच्या','g','spice',282,12,50,14);
I('sesame','Sesame','तीळ','g','spice',573,18,23,50);
I('methiseed','Fenugreek seeds','मेथी दाणे','g','spice',323,23,58,6);
I('ajwain','Ajwain','ओवा','g','spice',305,16,43,25);
I('amchur','Amchur','आमचूर','g','spice',300,3,70,1);
I('kasuri','Kasuri methi','कसुरी मेथी','g','spice',300,25,45,6);
I('tamarind','Tamarind','चिंच','g','spice',239,2.8,63,0.6);
I('jaggery','Jaggery','गूळ','g','spice',383,0.4,98,0.1);
I('sugar','Sugar','साखर','g','spice',387,0,100,0);
I('kokum','Kokum','कोकम','g','spice',200,2,45,1);
I('sambarpd','Sambar powder','सांबार मसाला','g','spice',300,12,50,10);
I('cholemasala','Chana masala','छोले मसाला','g','spice',300,12,50,10);
I('soy','Soy sauce','सोया सॉस','ml','spice',53,8,5,0);
I('tea','Tea powder','चहा पावडर','g','spice',0,0,0,0);
I('coffee','Coffee','कॉफी','g','spice',0,0,0,0);
// oils & others
I('oil','Cooking oil','तेल','ml','other',884,0,0,100);
I('papad','Papad','पापड','pc','other',40,2.5,6,0.5);
I('pickle','Pickle','लोणचे','g','other',200,1,10,18);
I('jam','Jam','जॅम','g','other',250,0.3,65,0);
I('honey','Honey','मध','g','other',304,0.3,82,0);
I('cashew','Cashew','काजू','g','other',553,18,30,44);
I('almond','Almonds','बदाम','g','other',579,21,22,50);
I('raisin','Raisins','मनुका','g','other',299,3,79,0.5);
I('dates','Dates','खजूर','g','other',277,1.8,75,0.2);
// leftovers (auto-expire after 2 days)
I('lrice','Cooked rice (leftover)','शिजलेला भात','g','leftover',130,2.7,28,0.3);
I('ldal','Cooked dal (leftover)','शिजलेली डाळ','g','leftover',100,6,14,2);
I('lsabzi','Cooked sabzi (leftover)','उरलेली भाजी','g','leftover',90,2,8,5);
I('lchapati','Chapati (leftover)','उरलेल्या पोळ्या','pc','leftover',104,3,18,2.5);
I('lbhakri','Bhakri (leftover)','उरलेल्या भाकऱ्या','pc','leftover',120,3,25,1);

// RECIPES: {id,en,mr,slots:[b|l|d],role:main|grain|dal|sabzi|meal,egg,ing:{itemId:qtyPerServing},steps:[marathi]}
export const RECIPES = [];
function R(id, en, mr, slots, role, egg, ing, steps) { RECIPES.push({ id, en, mr, slots, role, egg, ing, steps }); }
const F = { mustard:1, turmeric:1, curryleaf:2 }; // common phodni

// ---- breakfast mains ----
R('poha','Kanda Poha','कांदे पोहे',['b'],'main',false,{poha:60,onion:40,peanut:10,oil:8,...F,gchilli:5,lemon:0.25,coriander:5,sugar:2,salt:2},[
'पोहे चाळणीत घेऊन पाण्याने धुवा आणि दहा मिनिटे बाजूला ठेवा. त्यात मीठ आणि साखर मिसळा.',
'कढईत तेल गरम करा. मोहरी, हळद, हिरवी मिरची, कढीपत्ता आणि शेंगदाणे घाला.',
'कांदा घालून मऊ होईपर्यंत परता.',
'पोहे घालून हलक्या हाताने मिसळा. झाकण ठेवून तीन मिनिटे वाफ येऊ द्या.',
'लिंबू पिळा आणि कोथिंबीर घालून वाढा.']);
R('upma','Rava Upma','उपमा',['b'],'main',false,{rava:50,onion:30,oil:8,mustard:1,urad:3,curryleaf:2,gchilli:5,ginger:3,salt:2},[
'कढईत रवा कोरडा भाजून बाजूला ठेवा.',
'तेलात मोहरी, उडीद डाळ, कढीपत्ता, हिरवी मिरची, आले घाला. कांदा परता.',
'दुप्पट पाणी आणि मीठ घालून उकळी आणा.',
'भाजलेला रवा हळूहळू घालत ढवळा. झाकण ठेवून पाच मिनिटे शिजवा.']);
R('sabudana','Sabudana Khichdi','साबुदाणा खिचडी',['b'],'main',false,{sabudana:60,peanut:20,potato:50,ghee:8,cumin:1,gchilli:5,sugar:3,salt:2,lemon:0.25},[
'साबुदाणा धुवून चार तास भिजवा. शेंगदाणे भाजून भरड कूट करा.',
'साबुदाण्यात शेंगदाणा कूट, मीठ आणि साखर मिसळा.',
'तुपात जिरे आणि हिरवी मिरची घाला. बटाट्याचे तुकडे घालून शिजवा.',
'साबुदाणा घालून मंद आचेवर पाच मिनिटे परता. लिंबू पिळून वाढा.']);
R('thalipeeth','Thalipeeth','थालीपीठ',['b'],'main',false,{jowar:30,bajra:20,besan:15,atta:10,onion:30,coriander:5,chillipd:2,turmeric:1,sesame:3,salt:2,oil:8,curd:50},[
'सर्व पिठे, बारीक चिरलेला कांदा, कोथिंबीर, तिखट, हळद, तीळ आणि मीठ एकत्र करा.',
'थोडे पाणी घालून मऊ पीठ मळा.',
'प्लास्टिकवर तेल लावून पिठाचा गोळा हाताने थापा. मध्ये भोक पाडा.',
'तव्यावर तेल सोडून दोन्ही बाजूंनी खरपूस भाजा. दह्यासोबत वाढा.']);
R('bhurji','Egg Bhurji + Bread','अंडा भुर्जी आणि ब्रेड',['b'],'main',true,{egg:2,onion:40,tomato:40,gchilli:5,oil:8,turmeric:1,chillipd:1,salt:2,bread:2,coriander:5},[
'तेलात हिरवी मिरची आणि कांदा परता.',
'टोमॅटो, हळद, तिखट आणि मीठ घालून शिजवा.',
'अंडी फोडून घाला आणि सतत ढवळत शिजवा.',
'कोथिंबीर घाला. ब्रेड भाजून सोबत वाढा.']);
R('omelette','Masala Omelette + Bread','मसाला ऑम्लेट आणि ब्रेड',['b'],'main',true,{egg:2,onion:30,gchilli:5,coriander:5,oil:6,salt:2,bread:2},[
'अंडी फोडून त्यात कांदा, हिरवी मिरची, कोथिंबीर आणि मीठ घालून फेटा.',
'तव्यावर तेल गरम करून मिश्रण ओता.',
'दोन्ही बाजूंनी भाजा. ब्रेडसोबत वाढा.']);
R('boiledegg','Boiled Eggs + Toast','उकडलेली अंडी आणि टोस्ट',['b'],'main',true,{egg:2,bread:2,butter:5,pepper:0.5,salt:1},[
'अंडी पाण्यात दहा मिनिटे उकडा. सोलून काप करा.',
'ब्रेड भाजून लोणी लावा. वर अंड्याचे काप, मीठ, मिरपूड.']);
R('sandwich','Vegetable Sandwich','व्हेज सँडविच',['b'],'main',false,{bread:3,potato:50,cucumber:30,tomato:30,onion:20,butter:8,chaat:1,gchilli:3,coriander:5,salt:1},[
'बटाटा उकडून सोलून काप करा. काकडी, टोमॅटो, कांदा पातळ चिरा.',
'कोथिंबीर, हिरवी मिरची आणि मीठ वाटून चटणी करा.',
'ब्रेडला लोणी आणि चटणी लावा. भाज्यांचे काप ठेवा, चाट मसाला भुरभुरा.',
'दुसरा ब्रेड ठेवून तव्यावर दोन्ही बाजूंनी भाजा.']);
R('idli','Idli Sambar','इडली सांबार',['b'],'main',false,{idlibatter:150,toor:30,onion:20,tomato:30,dudhi:30,sambarpd:5,tamarind:3,oil:5,mustard:1,curryleaf:2,salt:2},[
'इडली पात्राला तेल लावून पीठ ओता. बारा मिनिटे वाफवा.',
'तूर डाळ हळद घालून शिजवा. दुधी, कांदा, टोमॅटो घालून शिजवा.',
'सांबार मसाला, चिंचेचा कोळ आणि मीठ घालून उकळा.',
'तेलात मोहरी, कढीपत्ता तडतडवून सांबारवर ओता. इडलीसोबत वाढा.']);
R('dosa','Dosa + Coconut Chutney','डोसा आणि खोबऱ्याची चटणी',['b'],'main',false,{dosabatter:150,coconut:25,gchilli:5,ginger:2,oil:8,salt:2,mustard:1,urad:2,curryleaf:2},[
'ओले खोबरे, हिरवी मिरची, आले आणि मीठ वाटून चटणी करा. मोहरी, उडीद डाळ, कढीपत्त्याची फोडणी द्या.',
'तवा तापवून थोडे तेल लावा. डोसा पीठ पातळ पसरवा.',
'कडा सोनेरी झाल्यावर उलटा. चटणीसोबत वाढा.']);
R('methiparatha','Methi Paratha','मेथी पराठा',['b'],'main',false,{atta:60,methi:40,besan:10,chillipd:2,turmeric:1,ajwain:1,oil:10,salt:2,curd:50},[
'मेथी निवडून बारीक चिरा. गव्हाचे पीठ, बेसन, मेथी, तिखट, हळद, ओवा, मीठ आणि थोडे तेल एकत्र करा.',
'पाणी घालून पीठ मळा. दहा मिनिटे झाकून ठेवा.',
'गोळे करून पराठे लाटा. तव्यावर तेल सोडून दोन्ही बाजूंनी भाजा. दह्यासोबत वाढा.']);
R('alooparatha','Aloo Paratha','आलू पराठा',['b'],'main',false,{atta:60,potato:80,onion:20,gchilli:5,coriander:5,amchur:1,garam:1,salt:2,ghee:10,curd:50},[
'बटाटे उकडून कुस्करा. कांदा, हिरवी मिरची, कोथिंबीर, आमचूर, गरम मसाला, मीठ मिसळा.',
'गव्हाचे पीठ मीठ घालून मळा. गोळा लाटून मध्ये सारण भरा, बंद करून पुन्हा लाटा.',
'तव्यावर तूप सोडून दोन्ही बाजूंनी खरपूस भाजा. दह्यासोबत वाढा.']);
R('vegoats','Vegetable Oats','व्हेज ओट्स',['b'],'main',false,{oats:50,carrot:30,peas:20,onion:20,oil:5,mustard:1,turmeric:1,salt:2},[
'तेलात मोहरी, हळद घाला. कांदा, गाजर, मटार घालून परता.',
'दुप्पट पाणी आणि मीठ घालून उकळा.',
'ओट्स घालून ढवळत तीन मिनिटे शिजवा.']);
R('misal','Misal Pav','मिसळ पाव',['b'],'main',false,{matki:50,onion:40,tomato:30,goda:5,chillipd:3,turmeric:1,garlic:5,ginger:3,oil:12,pav:2,coriander:5,lemon:0.25,salt:3},[
'मटकी आदल्या दिवशी भिजवून मोड आणा. हळद, मीठ घालून शिजवा.',
'तेलात कांदा, लसूण, आले परता. टोमॅटो, गोडा मसाला, तिखट घालून शिजवा.',
'शिजलेली मटकी आणि पाणी घालून पातळ रस्सा उकळा.',
'वाटीत मटकी, वर कांदा, कोथिंबीर, लिंबू. पाव सोबत वाढा.']);
R('sheera','Sheera','शिरा',['b'],'main',false,{rava:40,sugar:30,ghee:15,milk:100,cardamom:0.5,raisin:5,cashew:5},[
'तुपात रवा मंद आचेवर सोनेरी होईपर्यंत भाजा.',
'दूध आणि साखर एकत्र गरम करून रव्यात ओता. ढवळत राहा.',
'वेलची, मनुका, काजू घाला. झाकण ठेवून दोन मिनिटे वाफ द्या.']);
R('moongchilla','Moong Dal Chilla','मूग डाळ चिला',['b'],'main',false,{moongdal:60,onion:30,gchilli:5,ginger:3,coriander:5,turmeric:1,salt:2,oil:8},[
'मूग डाळ चार तास भिजवून वाटा. कांदा, मिरची, आले, कोथिंबीर, हळद, मीठ मिसळा.',
'तव्यावर तेल लावून पीठ पातळ पसरवा.',
'दोन्ही बाजूंनी सोनेरी भाजा. चटणीसोबत वाढा.']);
R('besanchilla','Besan Chilla','बेसन चिला',['b'],'main',false,{besan:60,onion:30,tomato:20,gchilli:5,coriander:5,turmeric:1,ajwain:0.5,salt:2,oil:8},[
'बेसनात कांदा, टोमॅटो, मिरची, कोथिंबीर, हळद, ओवा, मीठ आणि पाणी घालून पातळ पीठ करा.',
'तव्यावर तेल लावून पीठ पसरवा.',
'दोन्ही बाजूंनी सोनेरी भाजा.']);
R('breadupma','Bread Upma','ब्रेड उपमा',['b'],'main',false,{bread:3,onion:40,tomato:40,gchilli:5,oil:8,...F,salt:2},[
'ब्रेडचे छोटे तुकडे करा.',
'तेलात मोहरी, कढीपत्ता, हिरवी मिरची, हळद घाला. कांदा, टोमॅटो घालून शिजवा.',
'मीठ आणि ब्रेडचे तुकडे घालून दोन मिनिटे परता.']);
R('vermupma','Vermicelli Upma','शेवया उपमा',['b'],'main',false,{vermicelli:50,onion:30,carrot:20,peas:15,oil:8,mustard:1,urad:2,curryleaf:2,gchilli:5,salt:2},[
'शेवया तेलात हलक्या भाजून बाजूला ठेवा.',
'तेलात मोहरी, उडीद डाळ, कढीपत्ता, मिरची घाला. कांदा, गाजर, मटार परता.',
'दुप्पट पाणी आणि मीठ घालून उकळा. शेवया घालून झाकण ठेवून पाच मिनिटे शिजवा.']);
R('daliya','Daliya Khichdi','दलिया खिचडी',['b'],'main',false,{daliya:50,moongdal:20,carrot:20,peas:20,ghee:8,cumin:1,turmeric:1,salt:2,ginger:3},[
'तुपात जिरे आणि आले घाला. गाजर, मटार परता.',
'दलिया आणि मूग डाळ घालून एक मिनिट भाजा.',
'हळद, मीठ आणि तिप्पट पाणी घालून कुकरमध्ये तीन शिट्ट्या करा.']);
R('phodnibhat','Phodnicha Bhat (leftover rice)','फोडणीचा भात',['b','l','d'],'meal',false,{lrice:200,onion:40,oil:8,...F,gchilli:5,peanut:10,salt:2,coriander:5,lemon:0.25},[
'तेलात मोहरी, हळद, हिरवी मिरची, कढीपत्ता, शेंगदाणे घाला.',
'कांदा घालून मऊ होईपर्यंत परता.',
'उरलेला भात आणि मीठ घालून चांगले मिसळा. झाकण ठेवून तीन मिनिटे वाफ द्या.',
'लिंबू आणि कोथिंबीर घालून वाढा.']);
R('phodnipoli','Phodnichi Poli (leftover chapati)','फोडणीची पोळी',['b'],'main',false,{lchapati:3,onion:30,oil:8,...F,chillipd:1,salt:1,coriander:5,sugar:2},[
'उरलेल्या पोळ्यांचे छोटे तुकडे करा.',
'तेलात मोहरी, हळद, कढीपत्ता, कांदा परता. तिखट, मीठ, साखर घाला.',
'पोळीचे तुकडे घालून मिसळा. थोडे पाणी शिंपडून झाकण ठेवा, दोन मिनिटे वाफ द्या.']);
R('sabziparatha','Sabzi Paratha (leftover sabzi)','भाजीचा पराठा',['b'],'main',false,{lsabzi:100,atta:60,oil:8,salt:1,curd:50},[
'उरलेली भाजी कुस्करा. गव्हाचे पीठ, मीठ, तेल घालून एकत्र मळा.',
'गोळे करून पराठे लाटा.',
'तव्यावर तेल सोडून दोन्ही बाजूंनी भाजा. दह्यासोबत वाढा.']);

// ---- grains ----
R('rice_st','Steamed Rice','भात',['l','d'],'grain',false,{rice:70},[
'तांदूळ धुवून दुप्पट पाणी घाला.',
'कुकरमध्ये दोन शिट्ट्या करा किंवा झाकण ठेवून पंधरा मिनिटे शिजवा.']);
R('chapati','Chapati (Poli)','पोळी',['l','d'],'grain',false,{atta:60,oil:3,salt:1,ghee:5},[
'गव्हाच्या पिठात मीठ, तेल आणि पाणी घालून मऊ मळा. दहा मिनिटे झाकून ठेवा.',
'गोळे करून पातळ पोळ्या लाटा.',
'तव्यावर दोन्ही बाजूंनी भाजा, फुगू द्या. तूप लावा.']);
R('jowarbhakri','Jowar Bhakri','ज्वारीची भाकरी',['l','d'],'grain',false,{jowar:70,salt:1},[
'ज्वारीच्या पिठात मीठ आणि गरम पाणी घालून मळा.',
'पिठाचा गोळा कोरड्या पिठावर हाताने थापून गोल करा.',
'तव्यावर टाका, वर पाणी लावा. उलटून भाजा, मग थेट आचेवर फुगवा.']);
R('bajrabhakri','Bajra Bhakri','बाजरीची भाकरी',['l','d'],'grain',false,{bajra:70,salt:1},[
'बाजरीच्या पिठात मीठ आणि गरम पाणी घालून मळा.',
'पिठाचा गोळा कोरड्या पिठावर हाताने थापून गोल करा.',
'तव्यावर टाका, वर पाणी लावा. उलटून भाजा, मग थेट आचेवर फुगवा.']);
R('jeerarice','Jeera Rice','जिरा राईस',['l','d'],'grain',false,{basmati:70,ghee:5,cumin:1,salt:1},[
'तांदूळ धुवून वीस मिनिटे भिजवा.',
'तुपात जिरे तडतडवा. तांदूळ, मीठ आणि दुप्पट पाणी घाला.',
'झाकण ठेवून मंद आचेवर पंधरा मिनिटे शिजवा.']);

// ---- dal / protein ----
R('varan','Varan','वरण',['l','d'],'dal',false,{toor:40,turmeric:1,hing:0.3,ghee:5,salt:2,jaggery:3,lemon:0.1},[
'तूर डाळ धुवून हळद, हिंग आणि पाणी घालून कुकरमध्ये तीन शिट्ट्या करा.',
'डाळ घोटा. मीठ, गूळ घालून उकळा.',
'वरून तूप आणि लिंबू घालून भातासोबत वाढा.']);
R('daltadka','Dal Tadka','दाल तडका',['l','d'],'dal',false,{toor:40,onion:30,tomato:40,garlic:5,cumin:1,oil:8,turmeric:1,chillipd:2,coriander:5,salt:2,ghee:3},[
'तूर डाळ हळद घालून कुकरमध्ये शिजवा आणि घोटा.',
'तेलात जिरे, लसूण, कांदा परता. टोमॅटो, तिखट, मीठ घालून शिजवा.',
'शिजलेली डाळ घालून उकळा. तूप आणि कोथिंबीर घालून वाढा.']);
R('moongdalfry','Moong Dal','मूग डाळ',['l','d'],'dal',false,{moongdal:40,ginger:3,garlic:3,tomato:30,oil:6,cumin:1,turmeric:1,hing:0.3,salt:2,coriander:5},[
'मूग डाळ हळद घालून शिजवा.',
'तेलात जिरे, हिंग, आले, लसूण, टोमॅटो परता.',
'डाळ आणि मीठ घालून उकळा. कोथिंबीर घाला.']);
R('masoordal','Masoor Dal','मसूर डाळ',['l','d'],'dal',false,{masoor:40,onion:30,tomato:30,garlic:5,oil:6,cumin:1,turmeric:1,chillipd:1,garam:1,salt:2},[
'मसूर डाळ हळद घालून शिजवा.',
'तेलात जिरे, लसूण, कांदा परता. टोमॅटो, तिखट, मीठ घालून शिजवा.',
'डाळ घालून उकळा. गरम मसाला घाला.']);
R('amti','Amti','आमटी',['l','d'],'dal',false,{toor:40,goda:4,tamarind:3,jaggery:5,mustard:1,cumin:1,hing:0.3,turmeric:1,curryleaf:2,oil:6,coconut:10,chillipd:1,salt:2},[
'तूर डाळ हळद घालून शिजवून घोटा.',
'तेलात मोहरी, जिरे, हिंग, हळद, कढीपत्ता घाला.',
'डाळ, गोडा मसाला, तिखट, चिंचेचा कोळ, गूळ, खोबरे, मीठ घालून दहा मिनिटे उकळा.']);
R('chole','Chana Masala','छोले',['l','d'],'dal',false,{kabuli:50,onion:50,tomato:60,ginger:3,garlic:5,oil:10,cholemasala:5,cumin:1,turmeric:1,chillipd:1,coriander:5,salt:2,lemon:0.25},[
'काबुली चणे रात्रभर भिजवून कुकरमध्ये मीठ घालून शिजवा.',
'तेलात जिरे, कांदा, आले, लसूण परता. टोमॅटो, छोले मसाला, हळद, तिखट घालून तेल सुटेपर्यंत शिजवा.',
'चणे आणि पाणी घालून पंधरा मिनिटे उकळा. लिंबू, कोथिंबीर घाला.']);
R('rajma','Rajma','राजमा',['l','d'],'dal',false,{rajma:50,onion:50,tomato:60,ginger:3,garlic:5,oil:10,cumin:1,turmeric:1,chillipd:2,dhanapd:2,garam:1,salt:2},[
'राजमा रात्रभर भिजवून कुकरमध्ये मीठ घालून पाच शिट्ट्या करा.',
'तेलात जिरे, कांदा, आले, लसूण परता. टोमॅटो आणि सर्व मसाले घालून शिजवा.',
'राजमा आणि पाणी घालून वीस मिनिटे मंद आचेवर उकळा.']);
R('matkiusal','Matki Usal','मटकीची उसळ',['l','d'],'dal',false,{matki:50,onion:40,tomato:30,goda:4,chillipd:2,turmeric:1,garlic:5,oil:8,mustard:1,curryleaf:2,coconut:10,coriander:5,jaggery:3,salt:2},[
'मोड आलेली मटकी हळद, मीठ घालून शिजवा.',
'तेलात मोहरी, कढीपत्ता, लसूण, कांदा परता. टोमॅटो, गोडा मसाला, तिखट घाला.',
'मटकी, खोबरे, गूळ घालून दहा मिनिटे शिजवा. कोथिंबीर घाला.']);
R('chavliusal','Chavli Usal','चवळीची उसळ',['l','d'],'dal',false,{chavli:50,onion:40,tomato:30,goda:3,chillipd:2,turmeric:1,garlic:5,oil:8,mustard:1,coriander:5,salt:2},[
'चवळी भिजवून मीठ, हळद घालून शिजवा.',
'तेलात मोहरी, लसूण, कांदा परता. टोमॅटो, गोडा मसाला, तिखट घाला.',
'चवळी घालून दहा मिनिटे शिजवा. कोथिंबीर घाला.']);
R('kalachana','Kala Chana Usal','काळ्या चण्याची उसळ',['l','d'],'dal',false,{kalachana:50,onion:40,tomato:30,goda:4,chillipd:2,turmeric:1,garlic:5,ginger:3,oil:8,coconut:10,coriander:5,salt:2},[
'काळे चणे रात्रभर भिजवून कुकरमध्ये शिजवा.',
'तेलात कांदा, आले, लसूण परता. टोमॅटो, गोडा मसाला, तिखट, हळद, खोबरे घालून शिजवा.',
'चणे घालून दहा मिनिटे उकळा. कोथिंबीर घाला.']);
R('eggcurry','Egg Curry','अंडा करी',['l','d'],'dal',true,{egg:2,onion:60,tomato:50,ginger:3,garlic:5,oil:12,turmeric:1,chillipd:2,dhanapd:2,garam:1,coconut:10,coriander:5,salt:2},[
'अंडी उकडून सोला.',
'तेलात कांदा सोनेरी परता. आले, लसूण, टोमॅटो, हळद, तिखट, धणे पूड, खोबरे घालून तेल सुटेपर्यंत शिजवा.',
'पाणी, मीठ घालून उकळा. अंडी घालून गरम मसाला, कोथिंबीर घालून पाच मिनिटे शिजवा.']);
R('kadhi','Kadhi','कढी',['l','d'],'dal',false,{curd:100,besan:15,turmeric:1,ginger:3,gchilli:5,mustard:1,cumin:1,curryleaf:2,hing:0.3,oil:6,sugar:3,salt:2},[
'दह्यात बेसन, हळद, मीठ, साखर आणि पाणी घालून गुठळी न ठेवता फेटा.',
'तेलात मोहरी, जिरे, हिंग, आले, मिरची, कढीपत्ता घाला.',
'दह्याचे मिश्रण घालून सतत ढवळत उकळी आणा. मंद आचेवर दहा मिनिटे शिजवा.']);
R('paneerbhurji','Paneer Bhurji','पनीर भुर्जी',['l','d'],'dal',false,{paneer:80,onion:40,tomato:40,capsicum:20,gchilli:5,oil:8,turmeric:1,chillipd:1,garam:1,coriander:5,salt:2},[
'तेलात मिरची, कांदा परता. ढोबळी मिरची, टोमॅटो घालून शिजवा.',
'हळद, तिखट, मीठ घाला.',
'पनीर कुस्करून घाला. गरम मसाला, कोथिंबीर घालून दोन मिनिटे परता.']);
R('palakpaneer','Palak Paneer','पालक पनीर',['l','d'],'dal',false,{paneer:80,spinach:120,onion:40,tomato:30,garlic:5,ginger:3,oil:8,cumin:1,garam:1,salt:2},[
'पालक उकळत्या पाण्यात दोन मिनिटे ठेवून वाटा.',
'तेलात जिरे, कांदा, आले, लसूण परता. टोमॅटो घालून शिजवा.',
'पालक पेस्ट, मीठ घालून उकळा. पनीरचे तुकडे आणि गरम मसाला घालून पाच मिनिटे शिजवा.']);
R('dalpalak','Dal Palak','दाल पालक',['l','d'],'dal',false,{toor:30,moongdal:10,spinach:60,garlic:5,tomato:30,oil:6,cumin:1,turmeric:1,chillipd:1,salt:2},[
'तूर आणि मूग डाळ हळद घालून शिजवा.',
'तेलात जिरे, लसूण, टोमॅटो परता. चिरलेला पालक घालून शिजवा.',
'डाळ, तिखट, मीठ घालून उकळा.']);
R('leftoverdal','Dal Tadka (leftover dal)','उरलेल्या डाळीचा तडका',['l','d'],'dal',false,{ldal:200,onion:30,garlic:5,ghee:6,cumin:1,chillipd:1,coriander:5},[
'तुपात जिरे, लसूण, कांदा परता. तिखट घाला.',
'उरलेली डाळ आणि थोडे पाणी घालून उकळा. कोथिंबीर घाला.']);

// ---- sabzi ----
R('batatabhaji','Batata Bhaji','बटाट्याची भाजी',['l','d'],'sabzi',false,{potato:120,oil:8,...F,gchilli:5,hing:0.3,coriander:5,lemon:0.1,salt:2},[
'बटाटे उकडून सोलून तुकडे करा.',
'तेलात मोहरी, हिंग, हळद, मिरची, कढीपत्ता घाला.',
'बटाटे, मीठ घालून परता. लिंबू आणि कोथिंबीर घाला.']);
R('bhendi','Bhendi Fry','भेंडीची भाजी',['l','d'],'sabzi',false,{bhendi:120,onion:30,oil:10,mustard:1,turmeric:1,chillipd:2,dhanapd:2,amchur:1,salt:2},[
'भेंडी धुवून कोरडी पुसा, तुकडे करा.',
'तेलात मोहरी, कांदा परता. भेंडी घालून झाकण न ठेवता परता.',
'हळद, तिखट, धणे पूड, आमचूर, मीठ घालून चिकटपणा जाईपर्यंत परता.']);
R('gobimatar','Gobi Matar','गोबी मटार',['l','d'],'sabzi',false,{cauliflower:100,peas:30,onion:30,tomato:30,ginger:3,oil:8,cumin:1,turmeric:1,chillipd:1,dhanapd:2,garam:1,salt:2},[
'तेलात जिरे, आले, कांदा परता. टोमॅटो घालून शिजवा.',
'हळद, तिखट, धणे पूड, मीठ घाला.',
'फ्लॉवर आणि मटार घालून झाकण ठेवून मंद आचेवर शिजवा. गरम मसाला घाला.']);
R('kobi','Cabbage Bhaji','कोबीची भाजी',['l','d'],'sabzi',false,{cabbage:120,chanadal:10,oil:8,...F,gchilli:5,coconut:10,coriander:5,salt:2},[
'चणा डाळ अर्धा तास भिजवा. कोबी बारीक चिरा.',
'तेलात मोहरी, हळद, मिरची, कढीपत्ता घाला. चणा डाळ परता.',
'कोबी, मीठ घालून झाकण ठेवून शिजवा. खोबरे, कोथिंबीर घाला.']);
R('dudhi','Dudhi Bhaji','दुधीची भाजी',['l','d'],'sabzi',false,{dudhi:120,moongdal:10,oil:6,mustard:1,cumin:1,turmeric:1,gchilli:5,coriander:5,salt:2},[
'मूग डाळ भिजवा. दुधी सोलून तुकडे करा.',
'तेलात मोहरी, जिरे, हळद, मिरची घाला.',
'दुधी, मूग डाळ, मीठ आणि थोडे पाणी घालून झाकण ठेवून शिजवा. कोथिंबीर घाला.']);
R('bharit','Vangyache Bharit','वांग्याचे भरीत',['l','d'],'sabzi',false,{brinjal:150,onion:40,tomato:30,garlic:5,gchilli:5,oil:8,mustard:1,coriander:5,salt:2},[
'वांगे तेल लावून आचेवर भाजा. सोलून कुस्करा.',
'तेलात मोहरी, लसूण, मिरची, कांदा परता. टोमॅटो घालून शिजवा.',
'भाजलेले वांगे, मीठ घालून मिसळा. कोथिंबीर घाला.']);
R('dodka','Dodka Bhaji','दोडक्याची भाजी',['l','d'],'sabzi',false,{dodka:120,onion:30,oil:6,mustard:1,turmeric:1,chillipd:1,peanut:10,coriander:5,salt:2},[
'दोडका सोलून तुकडे करा. शेंगदाणे भाजून कूट करा.',
'तेलात मोहरी, हळद, कांदा परता.',
'दोडका, तिखट, मीठ घालून झाकण ठेवून शिजवा. शेंगदाणा कूट, कोथिंबीर घाला.']);
R('aloogobi','Aloo Gobi','आलू गोबी',['l','d'],'sabzi',false,{potato:60,cauliflower:80,onion:30,tomato:30,oil:8,cumin:1,turmeric:1,chillipd:1,dhanapd:2,garam:1,ginger:3,salt:2},[
'तेलात जिरे, आले, कांदा परता. टोमॅटो, हळद, तिखट, धणे पूड, मीठ घाला.',
'बटाटा, फ्लॉवर घालून मिसळा.',
'झाकण ठेवून मंद आचेवर शिजवा. गरम मसाला घाला.']);
R('methibatata','Methi Batata','मेथी बटाटा',['l','d'],'sabzi',false,{methi:60,potato:80,garlic:5,gchilli:5,oil:8,cumin:1,turmeric:1,salt:2},[
'मेथी निवडून चिरा. बटाट्याचे तुकडे करा.',
'तेलात जिरे, लसूण, मिरची, हळद घाला. बटाटे घालून झाकण ठेवून शिजवा.',
'मेथी, मीठ घालून पाच मिनिटे परता.']);
R('karela','Karela Fry','कारल्याची भाजी',['l','d'],'sabzi',false,{karela:100,onion:40,oil:10,turmeric:1,chillipd:2,dhanapd:2,amchur:1,jaggery:3,salt:2},[
'कारले चिरून मीठ लावून अर्धा तास ठेवा, पिळून घ्या.',
'तेलात कांदा परता. कारले घालून खरपूस परता.',
'हळद, तिखट, धणे पूड, आमचूर, गूळ, मीठ घालून परता.']);
R('aloomatar','Aloo Matar','आलू मटार',['l','d'],'sabzi',false,{potato:80,peas:40,onion:30,tomato:40,oil:8,cumin:1,turmeric:1,chillipd:1,garam:1,coriander:5,salt:2},[
'तेलात जिरे, कांदा परता. टोमॅटो, हळद, तिखट, मीठ घालून शिजवा.',
'बटाटा, मटार आणि पाणी घालून झाकण ठेवून शिजवा.',
'गरम मसाला, कोथिंबीर घाला.']);
R('farasbi','Farasbi Bhaji','फरसबीची भाजी',['l','d'],'sabzi',false,{beans:120,oil:6,mustard:1,turmeric:1,gchilli:5,coconut:10,salt:2},[
'फरसबी बारीक चिरा.',
'तेलात मोहरी, हळद, मिरची घाला.',
'फरसबी, मीठ घालून झाकण ठेवून शिजवा. खोबरे घाला.']);
R('capsicumbesan','Capsicum Besan Bhaji','ढोबळी मिरची बेसन भाजी',['l','d'],'sabzi',false,{capsicum:100,besan:15,oil:8,mustard:1,turmeric:1,chillipd:1,dhanapd:1,peanut:8,salt:2},[
'ढोबळी मिरची तुकडे करा. बेसन कोरडे भाजा.',
'तेलात मोहरी, हळद घाला. मिरची घालून परता.',
'भाजलेले बेसन, शेंगदाणा कूट, तिखट, धणे पूड, मीठ घालून परता.']);
R('tondli','Tondli Bhaji','तोंडलीची भाजी',['l','d'],'sabzi',false,{tondli:120,oil:8,mustard:1,turmeric:1,chillipd:1,coconut:10,coriander:5,salt:2},[
'तोंडली उभी चिरा.',
'तेलात मोहरी, हळद घाला. तोंडली, तिखट, मीठ घालून झाकण ठेवून शिजवा.',
'खोबरे, कोथिंबीर घाला.']);
R('gavar','Gavar Bhaji','गवारीची भाजी',['l','d'],'sabzi',false,{gavar:120,onion:30,oil:6,mustard:1,turmeric:1,goda:2,chillipd:1,jaggery:2,peanut:8,salt:2},[
'गवार निवडून तुकडे करा.',
'तेलात मोहरी, हळद, कांदा परता. गवार घालून पाणी शिंपडून झाकण ठेवा.',
'गोडा मसाला, तिखट, गूळ, शेंगदाणा कूट, मीठ घालून शिजवा.']);
R('bhopla','Bhopla Bhaji','भोपळ्याची भाजी',['l','d'],'sabzi',false,{pumpkin:120,oil:6,mustard:1,methiseed:0.5,turmeric:1,chillipd:1,jaggery:3,coconut:10,salt:2},[
'भोपळा सोलून तुकडे करा.',
'तेलात मोहरी, मेथी दाणे, हळद घाला. भोपळा घालून झाकण ठेवून शिजवा.',
'तिखट, गूळ, खोबरे, मीठ घाला.']);
R('mushroom','Mushroom Masala','मशरूम मसाला',['l','d'],'sabzi',false,{mushroom:100,onion:40,tomato:40,garlic:5,oil:8,cumin:1,turmeric:1,chillipd:1,garam:1,salt:2},[
'मशरूम धुवून काप करा.',
'तेलात जिरे, लसूण, कांदा परता. टोमॅटो, हळद, तिखट घालून शिजवा.',
'मशरूम, मीठ घालून पाणी सुटून आटेपर्यंत शिजवा. गरम मसाला घाला.']);
R('palakbhaji','Palak Bhaji','पालकाची भाजी',['l','d'],'sabzi',false,{spinach:120,garlic:5,onion:30,oil:6,cumin:1,gchilli:5,salt:2},[
'पालक धुवून चिरा.',
'तेलात जिरे, लसूण, मिरची, कांदा परता.',
'पालक, मीठ घालून पाणी आटेपर्यंत शिजवा.']);

// ---- one-pot meals ----
R('khichdi','Moong Dal Khichdi','मूग डाळ खिचडी',['l','d'],'meal',false,{rice:50,moongdal:30,ghee:8,cumin:1,turmeric:1,ginger:3,salt:2,peas:20,curd:50},[
'तांदूळ आणि मूग डाळ धुवा.',
'तुपात जिरे, आले घाला. मटार, तांदूळ, डाळ, हळद, मीठ घालून परता.',
'तिप्पट पाणी घालून कुकरमध्ये तीन शिट्ट्या करा. दह्यासोबत वाढा.']);
R('masalebhat','Masale Bhat','मसाले भात',['l','d'],'meal',false,{rice:70,tondli:40,peas:20,goda:5,oil:8,mustard:1,cumin:1,turmeric:1,chillipd:1,coconut:10,cashew:5,curryleaf:2,salt:2},[
'तांदूळ धुवून भिजवा. तोंडली चिरा.',
'तेलात मोहरी, जिरे, हळद, कढीपत्ता घाला. तोंडली, मटार परता.',
'तांदूळ, गोडा मसाला, तिखट, मीठ, दुप्पट गरम पाणी घालून झाकण ठेवून शिजवा.',
'खोबरे, काजू घालून वाढा.']);
R('pulao','Veg Pulao','व्हेज पुलाव',['l','d'],'meal',false,{basmati:70,carrot:30,beans:20,peas:20,onion:30,ghee:8,cumin:1,cinnamon:0.5,clove:0.3,cardamom:0.3,bayleaf:0.2,salt:2,curd:50},[
'तांदूळ धुवून भिजवा.',
'तुपात जिरे, दालचिनी, लवंग, वेलची, तमालपत्र घाला. कांदा परता.',
'गाजर, फरसबी, मटार, तांदूळ, मीठ, दुप्पट पाणी घालून झाकण ठेवून शिजवा. दह्यासोबत वाढा.']);
R('eggfriedrice','Egg Fried Rice (leftover rice)','अंडा फ्राईड राईस',['l','d'],'meal',true,{lrice:200,egg:1,onion:30,capsicum:30,carrot:20,garlic:5,oil:10,pepper:1,salt:2,soy:5},[
'तेलात अंडी फोडून भुर्जी करून बाजूला काढा.',
'तेलात लसूण, कांदा, गाजर, ढोबळी मिरची मोठ्या आचेवर परता.',
'उरलेला भात, सोया सॉस, मिरपूड, मीठ, अंडी घालून दोन मिनिटे परता.']);
R('pavbhaji','Pav Bhaji','पावभाजी',['l','d'],'meal',false,{potato:100,cauliflower:40,peas:30,capsicum:30,onion:50,tomato:80,butter:15,pbmasala:6,chillipd:1,garlic:5,lemon:0.25,coriander:5,pav:2,salt:2},[
'बटाटा, फ्लॉवर, मटार उकडून कुस्करा.',
'लोण्यात कांदा, लसूण, ढोबळी मिरची परता. टोमॅटो, पावभाजी मसाला, तिखट घालून शिजवा.',
'कुस्करलेल्या भाज्या, पाणी, मीठ घालून घोटत दहा मिनिटे शिजवा.',
'पाव लोण्यावर भाजा. लिंबू, कांदा, कोथिंबीर सोबत वाढा.']);
R('vegnoodles','Veg Noodles','व्हेज नूडल्स',['d'],'meal',false,{noodles:1,cabbage:30,carrot:20,capsicum:20,onion:20,garlic:5,oil:8,soy:5,pepper:0.5,salt:1},[
'नूडल्स उकळून पाणी काढा.',
'तेलात लसूण, कांदा, कोबी, गाजर, ढोबळी मिरची मोठ्या आचेवर परता.',
'नूडल्स, सोया सॉस, मिरपूड, मीठ घालून मिसळा.']);
R('pithla','Pithla Bhakri','पिठलं भाकरी',['l','d'],'meal',false,{besan:40,onion:40,garlic:5,gchilli:5,oil:8,mustard:1,cumin:1,turmeric:1,hing:0.3,curryleaf:2,coriander:5,salt:2,jowar:70},[
'बेसन पाण्यात गुठळी न ठेवता कालवा.',
'तेलात मोहरी, जिरे, हिंग, हळद, लसूण, मिरची, कढीपत्ता घाला. कांदा परता.',
'बेसनाचे मिश्रण, मीठ घालून सतत ढवळत घट्ट होईपर्यंत शिजवा. कोथिंबीर घाला.',
'ज्वारीची भाकरी करून सोबत वाढा.']);
R('pasta','Veg Pasta','व्हेज पास्ता',['d'],'meal',false,{pasta:70,tomato:80,onion:30,garlic:5,capsicum:30,oil:8,pepper:0.5,cheese:1,salt:2},[
'पास्ता मीठ घालून उकळा, पाणी काढा.',
'तेलात लसूण, कांदा, ढोबळी मिरची परता. टोमॅटो घालून मऊ शिजवा.',
'पास्ता, मीठ, मिरपूड घालून मिसळा. वर चीज किसा.']);
R('dahibhat','Dahi Bhat (leftover rice)','दही भात',['l','d'],'meal',false,{lrice:180,curd:120,mustard:1,oil:4,curryleaf:2,gchilli:5,ginger:3,salt:2},[
'भात थोडा कुस्करा, दही आणि मीठ मिसळा.',
'तेलात मोहरी, कढीपत्ता, मिरची, आले तडतडवून भातावर ओता. मिसळून वाढा.']);
