const mongoose = require('mongoose');
require('dotenv').config();

const Event = require('./models/Event');

const seedEvents = [
  {
    "date": "2025-06-13",
    "time": "8:00 PM",
    "city": "Atlanta, GA",
    "venue": "FOX THEATRE",
    "ticket_url": "https://foxtheatre.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=ALI&linkID=fta&shopperContext=&caller=&appCode="
  },
  {
    "date": "2025-06-14",
    "time": "7:00 PM",
    "city": "Birmingham, AL",
    "venue": "BJCC Concert Hall",
    "ticket_url": "https://www.ticketmaster.com/event/2000613AF5C22B93?irgwc=1&clickid=xFbycmwiKxycU1nVIgRcNy3xUksQ8tWhwX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
   
  },
  {
    "date": "2025-06-20",
    "time": "8:00 PM",
    "city": "Raleigh, NC",
    "venue": "Martin Marietta Center for the Performing Arts",
    "ticket_url": "https://www.ticketmaster.com/event/2D006139C02C4C9A?irgwc=1&clickid=xFbycmwiKxycU1nVIgRcNy3xUksQ8vx1wX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
  {
    "date": "2025-06-21",
    "time": "7:00 PM",
    "city": "Nashville, TN",
    "venue": "Ryman Auditorium",
    "ticket_url": "https://www.axs.com/events/693762/ali-siddiq-tickets?skin=ryman"
  },
   {
    "date": "2025-08-22",
    "time": "9:00 PM",
    "city": "Atlantic City, NJ",
    "venue": "Tropicana Showroom",
    "ticket_url": "https://www.ticketmaster.com/event/020062BC166C7A8C?irgwc=1&clickid=xFbycmwiKxycU1nVIgRcNy3xUksQ8q0ZwX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
 {
    "date": "2025-08-29",
    "time": "7:00 PM",
    "city": "Huntsville, AL",
    "venue": "Von Braun Center",
    "ticket_url": "https://www.ticketmaster.com/event/200062B6C2B3209B?irgwc=1&clickid=xFbycmwiKxycU1nVIgRcNy3xUksQ8q3ZwX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  }, 
   {
    "date": "2025-08-30",
    "time": "7:00 PM",
    "city": "Chattanooga, TN",
    "venue": "Robert Kirk Walker Theatre",
    "ticket_url": "https://www.ticketmaster.com/event/1B0062BB91C01C0C?irgwc=1&clickid=xFbycmwiKxycU1nVIgRcNy3xUksQ8qQ1wX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
  {
    "date": "2025-08-31",
    "time": "7:00 PM",
    "city": "Greenville, SC",
    "venue": "Peace Concert Hall - Peace Center",
    "ticket_url": "https://www.peacecenter.org/events/detail/25-ali-siddiq-in-the-shadows"
  },
  {
    "date": "2025-09-05",
    "time": "7:00 PM",
    "city": "Buffalo, NY",
    "venue": "UB Center for the Arts",
    "ticket_url": "https://www.ticketmaster.com/event/000062BCBC8773F2?irgwc=1&clickid=xFbycmwiKxycU1nVIgRcNy3xUksQ8MWVwX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
  {
    "date": "2025-09-06",
    "time": "7:00 PM",
    "city": "Toronto, ON",
    "venue": "Bluma Appel Theatre",
    "ticket_url": "https://www.ticketmaster.ca/event/100062BC6CA40D16?irgwc=1&clickid=3nT3KawE2xycU1nVIgRcNy3xUksQ53T1wX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
  {
    "date": "2025-09-12",
    "time": "7:00 PM",
    "city": "Lexington, KY",
    "venue": "Lexington Opera House",
    "ticket_url": "https://www.ticketmaster.com/event/160062AFF38A6DCB?irgwc=1&clickid=3nT3KawE2xycU1nVIgRcNy3xUksQ5yxtwX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
  {
    "date": "2025-09-13",
    "time": "7:00 PM",
    "city": "St Louis, MO",
    "venue": "Stifel Theatre",
    "ticket_url": "https://www.ticketmaster.com/event/060062B390D61AEA?irgwc=1&clickid=3nT3KawE2xycU1nVIgRcNy3xUksQ5ySJwX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
   {
    "date": "2025-09-19",
    "time": "7:00 PM",
    "city": "Gulfport, MS",
    "venue": "Immersive Media Performing Arts Center (iMPAC)",
    "ticket_url": "https://www.ticketmaster.com/event/1B0062BEE0F1A4F1?irgwc=1&clickid=3nT3KawE2xycU1nVIgRcNy3xUksQ5U3hwX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
   {
    "date": "2025-09-20",
    "time": "7:00 PM",
    "city": "Dothan, AL",
    "venue": "Dothan Opera House",
    "ticket_url": "https://www.tixr.com/groups/doh/events/ali-siddiq-in-the-shadows-144948"
  },
   {
    "date": "2025-09-26",
    "time": "7:00 PM",
    "city": "San Diego, CA",
    "venue": "Balboa Theatre",
    "ticket_url": "https://www.ticketmaster.com/event/0A0062BBB1F145E7?irgwc=1&clickid=3nT3KawE2xycU1nVIgRcNy3xUksQ5RwtwX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
  {
    "date": "2025-10-03",
    "time": "7:00 PM",
    "city": "Greensboro, NC",
    "venue": "Steven Tanger Center for the Performing Arts",
    "ticket_url": "https://www.ticketmaster.com/event/2D0062B3BA223046?irgwc=1&clickid=3nT3KawE2xycU1nVIgRcNy3xUksQ5RWJwX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
   {
    "date": "2025-10-04",
    "time": "7:00 PM",
    "city": "Columbia, SC",
    "venue": "Township Auditorium",
    "ticket_url": "https://www.ticketmaster.com/event/2D0062B39FE41D37?irgwc=1&clickid=3nT3KawE2xycU1nVIgRcNy3xUksQ5W0BwX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
   {
    "date": "2025-10-10",
    "time": "7:00 PM",
    "city": "Wichita, KS",
    "venue": "TempleLive at Wichita Scottish Rite Center",
    "ticket_url": "https://www.ticketmaster.com/event/060062BE7EE021EF?irgwc=1&clickid=3nT3KawE2xycU1nVIgRcNy3xUksQ5W3ZwX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
   {
    "date": "2025-10-11",
    "time": "7:00 PM",
    "city": "Fayetteville, AR",
    "venue": "Walton Arts Center",
    "ticket_url": "https://tickets.waltonartscenter.org/31918/31919?queueittoken=e_totalsiteprotection~q_798ca256-c531-4f55-b696-92fcba01d171~ts_1749565055~ce_true~rt_safetynet~h_ae5276290632b3837dd09b731dcbf0bdf8cc6f1dcc5b62d02359919c816a5ac2"
  },
  {
    "date": "2025-10-17",
    "time": "7:00 PM",
    "city": "Louisville, KY",
    "venue": "The Kentucky Center for the Performing Arts",
    "ticket_url": "https://tickets.kentuckyperformingarts.org/24680?queueittoken=e_tnewsafetynet~q_3c959a1a-5797-4407-88fc-84583c2cfe67~ts_1749565152~ce_true~rt_safetynet~h_d82d3b8aca8d604ea1ce492f5afd9ce1557df1d4267b4de494d69bd485513275"
  },
  {
    "date": "2025-10-18",
    "time": "7:00 PM",
    "city": "Cincinnati, OH",
    "venue": "Taft Theatre",
    "ticket_url": "https://www.ticketmaster.com/event/160062AF89C9153E?irgwc=1&clickid=3nT3KawE2xycU1nVIgRcNy3xUksQ5TRVwX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
   {
    "date": "2025-10-24",
    "time": "7:00 PM",
    "city": "Rockford, IL",
    "venue": "Coronado Performing Arts Center",
    "ticket_url": "https://www.ticketmaster.com/event/040062AF95971D93?irgwc=1&clickid=3nT3KawE2xycU1nVIgRcNy3xUksQ5SVJwX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
   {
    "date": "2025-10-25",
    "time": "7:00 PM",
    "city": "Flint, MI",
    "venue": "The Capitol Theatre",
    "ticket_url": "https://tickets.thefim.org/alisiddiq"
  },
    {
    "date": "2025-11-01",
    "time": "7:00 PM",
    "city": "Little Rock, AR",
    "venue": "Robinson Center",
    "ticket_url": "https://www.ticketmaster.com/event/1B0062B4A9DDAC87?irgwc=1&clickid=3nT3KawE2xycU1nVIgRcNy3xUksQ5kUBwX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
    {
    "date": "2025-11-07",
    "time": "7:00 PM",
    "city": "La Vista, NE",
    "venue": "The Astro",
    "ticket_url": "https://www.ticketmaster.com/event/200062BB84300E00?irgwc=1&clickid=3nT3KawE2xycU1nVIgRcNy3xUksQ5kXBwX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
  {
    "date": "2025-11-08",
    "time": "7:00 PM",
    "city": "Kansas City, MO",
    "venue": "The Midland Theatre",
    "ticket_url": "https://www.axs.com/events/1004655/ali-siddiq-tickets"
  },
  {
    "date": "2025-11-14",
    "time": "8:00 PM",
    "city": "Orlando, FL",
    "venue": "Walt Disney Amphitheater",
    "ticket_url": "https://www.drphillipscenter.org/events/tickets/2025/ali-siddiq"
  },
  {
    "date": "2025-11-14",
    "time": "7:00 PM",
    "city": "Tampa, FL",
    "venue": "Carol Morsani Hall",
    "ticket_url": "https://strazcenter.org/events/2526-season/comedy/ali-siddiq/"
  },
  {
    "date": "2025-11-21",
    "time": "7:00 PM",
    "city": "Norfolk, VA",
    "venue": "Chrysler Hall",
    "ticket_url": "https://www.ticketmaster.com/event/010062B4C4A34DD8?irgwc=1&clickid=Uh80bvwETxycU1nVIgRcNy3xUksQ5l1hwX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
  {
    "date": "2025-11-22",
    "time": "7:00 PM",
    "city": "Richmond, VA",
    "venue": "Dominion Energy Center",
    "ticket_url": "https://www.etix.com/ticket/p/71685165/?clickref=1011lBkYiXFR"
  },
  {
    "date": "2025-11-28",
    "time": "7:00 PM",
    "city": "Dallas Downtown, TX",
    "venue": "Texas Trust CU Theatre",
    "ticket_url": "https://www.axs.com/events/1006288/ali-siddiq-tickets"
  },
  {
    "date": "2025-12-05",
    "time": "7:00 PM",
    "city": "Portland, OR",
    "venue": "Aladdin Theater",
    "ticket_url": "https://www.bandsintown.com/e/106966409?came_from=267&app_id=7aeb7ef32e3d752aeaaf76df6c0203a2"
  },
  {
    "date": "2025-12-06",
    "time": "7:00 PM",
    "city": "Seattle, WA",
    "venue": "Moore Theatre",
    "ticket_url": "https://www.ticketmaster.com/event/0F0062BCDD2E3E49?irgwc=1&clickid=Uh80bvwETxycU1nVIgRcNy3xUksQ5H2FwX37QM0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate&ircid=4272"
  },
  {
    "date": "2025-12-12",
    "time": "7:00 PM",
    "city": "New Haven, CT",
    "venue": "College Street Music Hall",
    "ticket_url": "https://www.eventbrite.com/e/ali-siddiq-in-the-shadows-tickets-1388233215919?aff=aff0bandsintown&bit_userid=$%7Buser_id%7D&appId=7nro7rs32r3q752nrnns76qs6p0203n2&comeFrom=267&artist_event_id=106966418"
  },
  {
    "date": "2025-12-13",
    "time": "7:00 PM",
    "city": "Brooklyn, NY",
    "venue": "Kings Theatre",
    "ticket_url": "https://www.kingstheatre.com/events/ali-siddiq/tickets/A8ED1DDE-83E1-410C-BD23-B085E8280468"
  },
  {
    "date": "2025-12-19",
    "time": "7:00 PM",
    "city": "Fort Myers, FL",
    "venue": "Barbara B. Mann Performing Arts Hall",
    "ticket_url": "https://bbmann.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=ALIS&linkID=pfm-bbmann&shopperContext=&caller=&appCode="
  },
  {
    "date": "2025-12-20",
    "time": "7:00 PM",
    "city": "West Palm Beach, FL",
    "venue": "Kravis Center",
    "ticket_url": "https://my.kravis.org/28483?queueittoken=e_safetynet181205~q_07021319-6dc4-4f9a-b44f-9881e6339c4c~ts_1749570383~ce_true~rt_safetynet~h_8f1eb729b7b849261cb38f664c0123af5af941b62ddc4ad9d4e9cbc311b1c02a"
  }

   

];


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/tourEventsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('✅ Connected to MongoDB');

  await Event.deleteMany(); // Clear existing data
  console.log('🗑️ Old events removed');

  await Event.insertMany(seedEvents);
  console.log('🌱 Seed data inserted');

  mongoose.disconnect();
}).catch((err) => {
  console.error('❌ Error seeding database:', err);
});
