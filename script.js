// --- Individual Video File Registry ---
const moduleVideoSources = {
  earthquake: "Earthquake video.mp4",
  flood: "Flood video.mp4",
  fire: "Fire video.mp4",
  pandemic: "pandemic video.mp4",
  heatwave: "heatwave video.mp4",
  landslide: "landslide video.mp4",
  cyclone: "cyclone video.mp4"
};

// --- Comprehensive All-India Disaster Prone Data Registry ---
const allIndiaDisasterZones = [
  { id: "eq_kashmir", type: "earthquake", lat: 34.0837, lng: 74.7973, symbol: "🌍", color: "pin-earthquake" },
  { id: "eq_kangra", type: "earthquake", lat: 32.0998, lng: 76.2691, symbol: "🌍", color: "pin-earthquake" },
  { id: "eq_uttarkashi", type: "earthquake", lat: 30.7268, lng: 78.4354, symbol: "🌍", color: "pin-earthquake" },
  { id: "eq_delhi", type: "earthquake", lat: 28.7041, lng: 77.1025, symbol: "🌍", color: "pin-earthquake" },
  { id: "eq_bhuj", type: "earthquake", lat: 23.2420, lng: 69.6669, symbol: "🌍", color: "pin-earthquake" },
  { id: "eq_bihar_north", type: "earthquake", lat: 26.5434, lng: 85.3812, symbol: "🌍", color: "pin-earthquake" },
  { id: "eq_sikkim", type: "earthquake", lat: 27.5330, lng: 88.5122, symbol: "🌍", color: "pin-earthquake" },
  { id: "eq_guwahati", type: "earthquake", lat: 26.1445, lng: 91.7362, symbol: "🌍", color: "pin-earthquake" },
  { id: "eq_andaman", type: "earthquake", lat: 11.6234, lng: 92.7265, symbol: "🌍", color: "pin-earthquake" },
  { id: "eq_koyna", type: "earthquake", lat: 17.3992, lng: 73.7505, symbol: "🌍", color: "pin-earthquake" },

  { id: "fl_brahmaputra", type: "flood", lat: 26.7509, lng: 94.2037, symbol: "🌊", color: "pin-flood" },
  { id: "fl_kosi", type: "flood", lat: 25.5647, lng: 86.9842, symbol: "🌊", color: "pin-flood" },
  { id: "fl_gorakhpur", type: "flood", lat: 26.7606, lng: 83.3732, symbol: "🌊", color: "pin-flood" },
  { id: "fl_kolkata", type: "flood", lat: 22.5726, lng: 88.3639, symbol: "🌊", color: "pin-flood" },
  { id: "fl_mahanadi", type: "flood", lat: 20.4625, lng: 85.8828, symbol: "🌊", color: "pin-flood" },
  { id: "fl_godavari", type: "flood", lat: 16.9891, lng: 81.7840, symbol: "🌊", color: "pin-flood" },
  { id: "fl_mumbai", type: "flood", lat: 19.0760, lng: 72.8777, symbol: "🌊", color: "pin-flood" },
  { id: "fl_kuttanad", type: "flood", lat: 9.4981, lng: 76.4312, symbol: "🌊", color: "pin-flood" },
  { id: "fl_chennai", type: "flood", lat: 13.0827, lng: 80.2707, symbol: "🌊", color: "pin-flood" },
  { id: "fl_patna", type: "flood", lat: 25.5941, lng: 85.1376, symbol: "🌊", color: "pin-flood" },

  { id: "cy_paradip", type: "cyclone", lat: 20.2644, lng: 86.6663, symbol: "🌀", color: "pin-cyclone" },
  { id: "cy_sunderbans", type: "cyclone", lat: 21.9497, lng: 88.8998, symbol: "🌀", color: "pin-cyclone" },
  { id: "cy_visakhapatnam", type: "cyclone", lat: 17.6868, lng: 83.2185, symbol: "🌀", color: "pin-cyclone" },
  { id: "cy_nagapattinam", type: "cyclone", lat: 10.7656, lng: 79.8424, symbol: "🌀", color: "pin-cyclone" },
  { id: "cy_kakinada", type: "cyclone", lat: 16.9890, lng: 82.2475, symbol: "🌀", color: "pin-cyclone" },
  { id: "cy_puri", type: "cyclone", lat: 19.8135, lng: 85.8312, symbol: "🌀", color: "pin-cyclone" },
  { id: "cy_veraval", type: "cyclone", lat: 20.9077, lng: 70.3677, symbol: "🌀", color: "pin-cyclone" },
  { id: "cy_digha", type: "cyclone", lat: 21.6266, lng: 87.5074, symbol: "🌀", color: "pin-cyclone" },

  { id: "ls_wayanad", type: "landslide", lat: 11.6854, lng: 76.1320, symbol: "🏔️", color: "pin-landslide" },
  { id: "ls_chamoli", type: "landslide", lat: 30.4239, lng: 79.3298, symbol: "🏔️", color: "pin-landslide" },
  { id: "ls_shimla", type: "landslide", lat: 31.1048, lng: 77.1734, symbol: "🏔️", color: "pin-landslide" },
  { id: "ls_darjeeling", type: "landslide", lat: 27.0410, lng: 88.2663, symbol: "🏔️", color: "pin-landslide" },
  { id: "ls_munnar", type: "landslide", lat: 10.0889, lng: 77.0595, symbol: "🏔️", color: "pin-landslide" },
  { id: "ls_mahabaleshwar", type: "landslide", lat: 17.9307, lng: 73.6477, symbol: "🏔️", color: "pin-landslide" },
  { id: "ls_aizawl", type: "landslide", lat: 23.7271, lng: 92.7176, symbol: "🏔️", color: "pin-landslide" },

  { id: "hw_nagpur", type: "heatwave", lat: 21.1458, lng: 79.0882, symbol: "☀️", color: "pin-heatwave" },
  { id: "hw_churu", type: "heatwave", lat: 28.2900, lng: 74.9600, symbol: "☀️", color: "pin-heatwave" },
  { id: "hw_jharsuguda", type: "heatwave", lat: 21.8554, lng: 84.0062, symbol: "☀️", color: "pin-heatwave" },
  { id: "hw_ahmedabad", type: "heatwave", lat: 23.0225, lng: 72.5714, symbol: "☀️", color: "pin-heatwave" },
  { id: "hw_ramagundam", type: "heatwave", lat: 18.7557, lng: 79.5126, symbol: "☀️", color: "pin-heatwave" }
];

// --- Number Localization Converter ---
function localizeDigits(numStr, lang) {
  if (numStr === null || numStr === undefined) return '';
  const str = String(numStr);
  if (lang === 'hi') {
    const hiDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    return str.replace(/[0-9]/g, w => hiDigits[+w]);
  } else if (lang === 'bn') {
    const bnDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
    return str.replace(/[0-9]/g, w => bnDigits[+w]);
  }
  return str;
}

// --- Comprehensive Multilingual Translations Dictionary ---
const translations = {
  en: {
    title: "SafeEdu : Empowering Disaster Preparedness",
    subtitle: "Interactive Learning Modules for Schools, Colleges and Communities",
    languageLabel: "Language:",
    themeLabel: "Theme:",
    optThemeLight: "Light Mode",
    optThemeDark: "Dark Mode",
    
    beaconTitle: "🛰️ Live Geo-Fenced Alert Beacon",
    beaconSubtext: "Automated real-time proximity detection to India's high-risk geological hotspots",
    beaconLocating: "Acquiring live GPS coordinates to calculate regional threat index...",
    beaconSafe: "✅ Threat Level Low: Nearest high-risk disaster hotspot is {DIST} km away.",
    beaconWarning: "⚠️ Threat Level Moderate: You are within {DIST} km of {ZONE} ({TYPE}).",
    beaconDanger: "🚨 Threat Level High: Proximity alert! High vulnerability zone active ({ZONE}).",
    riskMeterLabel: "Threat Probability Level",
    riskCritical: "CRITICAL (92%)",
    riskModerate: "MODERATE (58%)",
    riskSafe: "SAFE (22%)",
    gpsLockText: "📍 GPS Lock: <strong>{LAT}° N, {LON}° E</strong> | Active Monitoring Matrix: <strong>{COUNT} India-wide Sensor Stations</strong>.",
    
    searchPlaceholder: "Search disaster preparedness modules...",
    selectModule: "📚 Select a Disaster Module",
    modulesSubtext: "Interactive training simulations, drill protocols, and helpline quick-access",
    backBtn: "⬅ Back to Modules",
    
    tag_earthquake: "Seismic",
    tag_flood: "Hydrological",
    tag_fire: "Thermal",
    tag_pandemic: "Biological",
    tag_heatwave: "Climatic",
    tag_landslide: "Geological",
    tag_cyclone: "Atmospheric",
    
    earthquakeAlt: "Earthquake",
    floodAlt: "Flood",
    fireAlt: "Fire",
    pandemicAlt: "Pandemic",
    heatwaveAlt: "Heatwave",
    landslideAlt: "Landslide",
    cycloneAlt: "Cyclone",

    earthquakeTitle: "🌍 Earthquake Safety",
    earthquakeDesc: "Drop, Cover, Hold – Stay Safe from Shakes.",
    earthquakeTicker: "Update: Drop, Cover, and Hold during shaking.|Reminder: Stay indoors until shaking stops.|Tip: Identify safe spots under tables.",
    floodTitle: "🌊 Flood Safety",
    floodDesc: "Move to Higher Ground, Protect Your Life.",
    floodTicker: "Update: Move to higher ground immediately.|Warning: Never walk or drive through floodwaters.|Tip: Listen to official weather alerts.",
    fireTitle: "🔥 Fire Safety",
    fireDesc: "Stay Low, Stay Calm, Stop the Flames.",
    fireTicker: "Alert: Call fire services immediately.|Reminder: Use stairs, never elevators.|Tip: Stop, Drop & Roll if clothes catch fire.",
    pandemicTitle: "🦠 Pandemic Preparedness",
    pandemicDesc: "Be prepared during pandemics.",
    pandemicTicker: "Update: Wash your hands regularly.|Reminder: Wear a mask in crowded areas.|Tip: Avoid large gatherings.",
    heatwaveTitle: "☀️ Heatwave Safety",
    heatwaveDesc: "Stay hydrated and avoid peak afternoon heat.",
    heatwaveTicker: "Update: Drink plenty of water.|Reminder: Avoid 12 PM - 3 PM direct sun.|Tip: Wear light cotton clothes.",
    landslideTitle: "🏔️ Landslide Safety",
    landslideDesc: "Stay away from steep slopes during heavy rains.",
    landslideTicker: "Update: Avoid hillside travel during rain.|Reminder: Listen for cracking sounds.|Tip: Move to stable ground immediately.",
    cycloneTitle: "🌀 Cyclone Safety",
    cycloneDesc: "Stay indoors and follow official alerts.",
    cycloneTicker: "Update: Keep emergency kits ready.|Reminder: Stay away from glass windows.|Tip: Evacuate if advised.",
    
    simTitle: "🎮 Timed Survival Decision Simulator",
    simDesc: "Test your live instincts under real disaster conditions with active timer pressure.",
    simScoreLabel: "Survival Index:",
    simScenarioFinished: "🎉 <strong>Simulation Finished!</strong> Your Final Survival Readiness Score is: <strong>{SCORE}%</strong>.",
    simTimerCompleted: "⏱️ Completed",
    simTimerSecSuffix: "s",
    simTimeOutMsg: "⏰ Time Ran Out! Under real disasters, indecision leads to critical exposure (-25% Survival).",
    simRestartBtn: "🔄 Restart Scenario",
    optPrefix: "Option",
    optOptionLetters: ["A", "B", "C", "D"],
    optCorrectFeedback: "✅ <strong>Optimal Choice!</strong>",
    optIncorrectFeedback: "❌ <strong>Hazardous Action!</strong>",
    
    coordTitle: "🤝 Community Emergency Coordination & SOS",
    coordDesc: "Instant offline-ready SOS broadcasting and verified nearby shelter routing.",
    sosCardTitle: "One-Tap \"I Am Safe\" / SOS Broadcast",
    sosCardDesc: "Generates quick formatted status with exact GPS link for WhatsApp / SMS pings.",
    btnSendSafe: "✅ Send \"I Am Safe\"",
    btnSendDanger: "🆘 Send Urgent SOS",
    genBroadcastLabel: "Generated Broadcast Message:",
    btnWhatsApp: "💬 Send via WhatsApp",
    btnSMS: "📱 Send via SMS",
    sosSafeText: "[SAFEEDU ALERT]: I am SAFE during the current disaster situation. Current Location: {MAPS} (Lat: {LAT}, Lon: {LON}). Sent via SafeEdu Emergency Network.",
    sosDangerText: "[EMERGENCY SOS]: I NEED IMMEDIATE RESCUE/MEDICAL AID. My GPS Location: {MAPS} (Lat: {LAT}, Lon: {LON}). Please alert NDRF / Local authorities!",
    
    radarTitle: "Crowdsourced Incident Radar",
    radarDesc: "Pin an active local danger (waterlogging, fallen wires, blocked bridge) on the map.",
    hazardPlaceholder: "Hazard detail (e.g. Broken live electric wire)",
    opt_waterlogging: "🌊 Deep Waterlogging",
    opt_structural: "🏚️ Collapsed Structure / Obstruction",
    opt_fire: "🔥 Live Fire / Sparking",
    opt_landslide: "⛰️ Blocked Roadway / Landslide",
    btnMarkHazard: "📌 Mark Hazard on Map",
    hazardReportSuccess: "✅ Hazard report logged successfully! Verified markers are broadcasting live to local radar.",
    hazardReportedJustNow: "Reported Just Now via SafeEdu Radar",
    userReportedHazard: "🚨 User-Reported Hazard:",
    
    shelterTitle: "Active Relief Camp & Shelter Directory",
    shelterSubtext: "Real-time distance calculation from your verified geolocation",
    shelterVerifiedBadge: "Verified Safe Haven",
    sectorLabel: "Sector:",
    distanceLabel: "Distance:",
    capacityLabel: "Capacity:",
    provisionsLabel: "Provisions:",
    kmAwayText: "km away",
    activeReliefHubText: "Active Relief Hub",
    
    shelter_ndrf_name: "National Disaster Response Force (NDRF) Base Camp",
    shelter_ndrf_sector: "Regional Center",
    shelter_ndrf_cap: "1,500 Persons",
    shelter_ndrf_supplies: "Medical, Food, Potable Water",

    shelter_redcross_name: "Red Cross Emergency Relief Shelter",
    shelter_redcross_sector: "Eastern Command",
    shelter_redcross_cap: "800 Persons",
    shelter_redcross_supplies: "First-Aid, Tents, Blankets",

    shelter_cyclone_name: "State Coastal Cyclone Multi-Purpose Center",
    shelter_cyclone_sector: "Coastal Sector",
    shelter_cyclone_cap: "2,000 Persons",
    shelter_cyclone_supplies: "Satellite Comms, Power Generators",

    shelter_ddma_name: "District Disaster Management Humanitarian Haven",
    shelter_ddma_sector: "Southern Hub",
    shelter_ddma_cap: "1,200 Persons",
    shelter_ddma_supplies: "Trauma Care, Food Rations",

    mapTitle: "🌍 Disaster-Prone Zones Map",
    mapDesc: "This map highlights regions vulnerable to natural disasters across India.",
    legendTitle: "Disaster Zones in India",
    legendEarthquake: "Earthquake (Zone IV & V)",
    legendFlood: "Flood Prone Basins",
    legendCyclone: "Cyclone Prone Coasts",
    legendLandslide: "Landslide Prone Hills",
    legendHeatwave: "Severe Heatwave Zones",
    mapPopupRiskZone: "HIGH-RISK ZONE",
    mapPopupMonitoring: "National Disaster Monitoring Matrix",
    mapYouAreHere: "📍 You are here (Live GPS Lock)",

    chatHeader: "Emergency Assistant 🤖",
    typingIndicator: "Bot is typing...",
    userInputPlaceholder: "Ask about earthquake, flood, fire...",
    chatSend: "Send",
    
    footer: "© 2026 | SafeEdu : Empowering Disaster Preparedness",
    
    quizLabel: "Quiz",
    quizPromptPrefix: "Emergency preparedness check:",
    helplineTitle: "📞 Emergency Helpline",
    startDrill: "▶️ Start Virtual Drill",
    drillNextStep: "Next ▶️",
    drillCompleted: "🎉 Drill Completed! You're now better prepared.",
    printButton: "🖨 Print / Save as PDF",
    videoNotSupported: "Your browser does not support the video tag.",
    
    companyName: "SafeEdu",
    certificateHeader: "CERTIFICATE OF COMPLETION",
    certificatePrompt: "Please enter your name for the certificate:",
    certDescTemplate: "Has successfully completed the <strong>{DISASTER}</strong> virtual preparedness module.",
    certVerifiedBadge: "VERIFIED",
    certOfficialText: "★ ★ ★",

    moduleName_earthquake: "earthquake",
    moduleName_flood: "flood",
    moduleName_fire: "fire",
    moduleName_pandemic: "pandemic",
    moduleName_heatwave: "heatwave",
    moduleName_landslide: "landslide",
    moduleName_cyclone: "cyclone",

    simScenarios: [
      {
        disaster: "Flash Flood & Gas Leak",
        scenario: "Water is rising rapidly outside your room (knee-deep) and entering inside. You notice a faint smell of leaking gas nearby. What is your critical first action?",
        options: [
          { text: "Turn on electric exhaust fans and lights to see clearly.", correct: false, reason: "Electric sparks can ignite leaking gas instantly! Never switch on electricals during a gas leak." },
          { text: "Shut off main electrical breaker, avoid open flames, and move to higher floors.", correct: true, reason: "Correct! Mitigates electrical shock hazards, avoids gas explosion, and secures safe elevation." },
          { text: "Wade outside into the fast-flowing street water immediately.", correct: false, reason: "Just 6 inches of moving water can knock an adult down, and hidden manholes pose drowning risks." },
          { text: "Lock all doors and windows tightly and stay on ground floor.", correct: false, reason: "Trapping yourself at ground level during a flash flood can lead to submergence." }
        ]
      },
      {
        disaster: "Earthquake Tremor in Multi-Story Building",
        scenario: "Violent shaking begins while you are on the 4th floor of a school/college building. Alarms are sounding. What do you do immediately?",
        options: [
          { text: "Rush into the elevator to exit the building as fast as possible.", correct: false, reason: "Elevators often lose power or get jammed in shafts during seismic tremors." },
          { text: "Drop under a sturdy desk, cover your head, and hold on until shaking stops.", correct: true, reason: "Correct! 'Drop, Cover, and Hold On' protects against the #1 cause of injury: falling debris." },
          { text: "Run frantically down the stairs while the floor is actively shaking.", correct: false, reason: "Stairwells can shear and running during shaking leads to fatal falls." },
          { text: "Stand right next to glass windows to signal for rescue.", correct: false, reason: "Shattering glass is a major cause of lacerations and trauma during earthquakes." }
        ]
      }
    ],

    earthquakeModuleTitle: "🌍 Earthquake Safety",
    earthquakeStep1: "Drop, Cover, and Hold On!",
    earthquakeStep2: "Stay indoors until the shaking stops.",
    earthquakeStep3: "Stay away from windows and heavy shelves.",
    earthquakeQuiz: "What is the correct immediate action during an earthquake?",
    earthquakeOption1: "Drop, Cover, Hold",
    earthquakeOption2: "Run outside immediately",
    earthquakeQuizCorrect: "✅ Correct! Great Job.",
    earthquakeQuizIncorrect: "❌ Incorrect! Never run outside during shaking.",
    earthquakeHelp1: "NDMA Helpline: 1078",
    earthquakeHelp2: "Ambulance: 102",
    earthquakeHelp3: "Fire Service: 101",
    earthquakeDrillStep1: "🔔 Alarm rings! An earthquake is detected.",
    earthquakeDrillStep2: "🤸‍♂️ Step 1: DROP to the ground immediately.",
    earthquakeDrillStep3: "📦 Step 2: Take COVER under a desk or table.",
    earthquakeDrillStep4: "🤲 Step 3: HOLD ON until the shaking stops.",
    earthquakeDrillStep5: "✅ Earthquake ends. Evacuate calmly to open ground.",

    floodModuleTitle: "🌊 Flood Safety",
    floodStep1: "Move to higher ground immediately.",
    floodStep2: "Never walk or drive through floodwaters.",
    floodStep3: "Stay informed through official alerts.",
    floodQuiz: "Is it safe to walk in floodwaters?",
    floodOption1: "No, it is unsafe",
    floodOption2: "Yes, if water is low",
    floodQuizCorrect: "✅ Correct! Floodwater may hide hazards.",
    floodQuizIncorrect: "❌ Incorrect!",
    floodHelp1: "Disaster Relief: 108",
    floodHelp2: "National Disaster Helpline: 1070",
    floodHelp3: "Ambulance: 102",
    floodDrillStep1: "⚠️ Alert: Flood warning issued.",
    floodDrillStep2: "⬆️ Step 1: Move to higher ground.",
    floodDrillStep3: "📻 Step 2: Stay tuned to weather alerts.",
    floodDrillStep4: "🚫 Step 3: Avoid walking or driving in floodwater.",
    floodDrillStep5: "✅ Stay indoors until it's declared safe.",

    fireModuleTitle: "🔥 Fire Safety",
    fireStep1: "Stop, Drop, and Roll if clothes catch fire.",
    fireStep2: "Use stairs, not elevators.",
    fireStep3: "Stay low to avoid smoke inhalation.",
    fireQuiz: "What should you do if your clothes catch fire?",
    fireOption1: "Stop, Drop, and Roll",
    fireOption2: "Run for help",
    fireQuizCorrect: "✅ Correct!",
    fireQuizIncorrect: "❌ Incorrect!",
    fireHelp1: "Fire Brigade: 101",
    fireHelp2: "Emergency Services: 112",
    fireHelp3: "Ambulance: 102",
    fireDrillStep1: "🚨 Fire alarm triggered.",
    fireDrillStep2: "😤 Step 1: Stay low to avoid smoke.",
    fireDrillStep3: "🚪 Step 2: Use stairs — avoid elevators.",
    fireDrillStep4: "🔥 Step 3: If clothes catch fire: Stop, Drop, and Roll.",
    fireDrillStep5: "✅ Exit to assembly area and wait for clearance.",

    pandemicModuleTitle: "🦠 Pandemic Preparedness",
    pandemicStep1: "Wash hands regularly with soap and water.",
    pandemicStep2: "Wear protective face masks in crowded places.",
    pandemicStep3: "Maintain social distancing and avoid crowds.",
    pandemicQuiz: "How can you prevent virus transmission?",
    pandemicOption1: "Wash hands and wear masks",
    pandemicOption2: "Ignore preventive measures",
    pandemicQuizCorrect: "✅ Correct! Stay safe.",
    pandemicQuizIncorrect: "❌ Incorrect!",
    pandemicHelp1: "Health Helpline: 1075",
    pandemicHelp2: "Ambulance: 102",
    pandemicHelp3: "National Disaster Helpline: 1070",
    pandemicDrillStep1: "🦠 Pandemic alert issued.",
    pandemicDrillStep2: "🧼 Step 1: Wash hands thoroughly with soap.",
    pandemicDrillStep3: "😷 Step 2: Wear face masks in public areas.",
    pandemicDrillStep4: "👥 Step 3: Maintain distance and avoid gatherings.",
    pandemicDrillStep5: "✅ Follow public health guidelines strictly.",

    heatwaveModuleTitle: "☀️ Heatwave Safety",
    heatwaveStep1: "Stay hydrated — drink plenty of water frequently.",
    heatwaveStep2: "Avoid going outside during peak heat (12 PM - 3 PM).",
    heatwaveStep3: "Wear light-colored, loose cotton clothing.",
    heatwaveQuiz: "What should you do during severe heatwave hours?",
    heatwaveOption1: "Stay indoors and drink water",
    heatwaveOption2: "Do strenuous exercise outdoors",
    heatwaveQuizCorrect: "✅ Correct! Keep hydrated.",
    heatwaveQuizIncorrect: "❌ Incorrect!",
    heatwaveHelp1: "Emergency Ambulance: 108",
    heatwaveHelp2: "Medical Services: 102",
    heatwaveHelp3: "National Emergency Helpline: 112",
    heatwaveDrillStep1: "🌡️ Extreme heatwave alert issued!",
    heatwaveDrillStep2: "💧 Step 1: Stay indoors in a cool or shaded area.",
    heatwaveDrillStep3: "🚰 Step 2: Drink water frequently even if not thirsty.",
    heatwaveDrillStep4: "👕 Step 3: Wear light, loose breathable clothes.",
    heatwaveDrillStep5: "✅ Check on vulnerable neighbors and pets.",

    landslideModuleTitle: "🏔️ Landslide Safety",
    landslideStep1: "Stay away from steep hillsides during heavy continuous rains.",
    landslideStep2: "Listen to weather bulletins and evacuation alerts.",
    landslideStep3: "Move to designated safe zones immediately if cracking is heard.",
    landslideQuiz: "What is the primary action during a landslide warning?",
    landslideOption1: "Evacuate to stable ground immediately",
    landslideOption2: "Stay inside and secure furniture",
    landslideQuizCorrect: "✅ Correct! Immediate evacuation is safest.",
    landslideQuizIncorrect: "❌ Incorrect!",
    landslideHelp1: "Disaster Relief: 108",
    landslideHelp2: "National Disaster Helpline: 1070",
    landslideHelp3: "Ambulance: 102",
    landslideDrillStep1: "⚠️ Landslide warning issued for hillsides!",
    landslideDrillStep2: "👂 Step 1: Listen for unusual sounds like trees cracking.",
    landslideDrillStep3: "🏃 Step 2: Move quickly away from the path of the slide.",
    landslideDrillStep4: "🏘️ Step 3: Help vulnerable individuals evacuate.",
    landslideDrillStep5: "✅ Await official all-clear before returning.",

    cycloneModuleTitle: "🌀 Cyclone Safety",
    cycloneStep1: "Board up windows and secure roofs before storm arrival.",
    cycloneStep2: "Prepare an emergency go-bag with essentials.",
    cycloneStep3: "Stay indoors away from glass windows until the storm passes.",
    cycloneQuiz: "What should you do during severe cyclone landfall?",
    cycloneOption1: "Stay indoors away from windows",
    cycloneOption2: "Go outside to observe the storm",
    cycloneQuizCorrect: "✅ Correct! Always remain inside safe shelter.",
    cycloneQuizIncorrect: "❌ Incorrect!",
    cycloneHelp1: "State Cyclone Helpline: 1077",
    cycloneHelp2: "Disaster Relief: 108",
    cycloneHelp3: "National Disaster Helpline: 1070",
    cycloneDrillStep1: "⚠️ Severe Cyclone warning issued!",
    cycloneDrillStep2: "🔒 Step 1: Secure all doors, windows, and outdoor items.",
    cycloneDrillStep3: "🎒 Step 2: Keep emergency kit with torches and medicines ready.",
    cycloneDrillStep4: "🏠 Step 3: Stay in the strongest, windowless room.",
    cycloneDrillStep5: "✅ Follow all official evacuation and relief updates."
  },
  hi: {
    title: "सेफएडु : आपदा तैयारी को सशक्त बनाना",
    subtitle: "विद्यालयों, महाविद्यालयों और समुदायों के लिए इंटरैक्टिव शिक्षण मॉड्यूल",
    languageLabel: "भाषा:",
    themeLabel: "थीम:",
    optThemeLight: "लाइट मोड",
    optThemeDark: "डार्क मोड",

    beaconTitle: "🛰️ लाइव भू-क्षेत्रीय चेतावनी बीकन",
    beaconSubtext: "भारत के उच्च जोखिम वाले भूगर्भीय संवेदनशील क्षेत्रों की स्वचालित पहचान",
    beaconLocating: "क्षेत्रीय खतरे की गणना हेतु जीपीएस स्थिति प्राप्त की जा रही है...",
    beaconSafe: "✅ खतरा स्तर निम्न: निकटतम उच्च जोखिम क्षेत्र {DIST} किमी दूर है।",
    beaconWarning: "⚠️ खतरा स्तर मध्यम: आप {ZONE} ({TYPE}) के {DIST} किमी दायरे में हैं।",
    beaconDanger: "🚨 खतरा स्तर उच्च: तात्कालिक चेतावनी! सक्रिय उच्च संवेदनशील क्षेत्र ({ZONE})।",
    riskMeterLabel: "खतरा संभावना स्तर",
    riskCritical: "अत्यधिक गंभीर (९२%)",
    riskModerate: "मध्यम जोखिम (५८%)",
    riskSafe: "सुरक्षित (२२%)",
    gpsLockText: "📍 जीपीएस स्थिति: <strong>{LAT}° उत्तर, {LON}° पूर्व</strong> | सक्रिय निगरानी नेटवर्क: <strong>{COUNT} संपूर्ण भारत स्टेशन</strong>।",

    searchPlaceholder: "आपदा तैयारी मॉड्यूल खोजें...",
    selectModule: "📚 एक आपदा मॉड्यूल चुनें",
    modulesSubtext: "इंटरैक्टिव प्रशिक्षण सिमुलेशन, ड्रिल प्रोटोकॉल और हेल्पलाइन त्वरित पहुंच",
    backBtn: "⬅ मॉड्यूल सूची पर वापस जाएं",

    tag_earthquake: "भूकंपीय",
    tag_flood: "जल-विज्ञान",
    tag_fire: "थर्मल/अग्नि",
    tag_pandemic: "जैविक",
    tag_heatwave: "जलवायु",
    tag_landslide: "भूगर्भीय",
    tag_cyclone: "वायुमंडलीय",

    earthquakeAlt: "भूकंप",
    floodAlt: "बाढ़",
    fireAlt: "आग",
    pandemicAlt: "महामारी",
    heatwaveAlt: "लू",
    landslideAlt: "भूस्खलन",
    cycloneAlt: "चक्रवात",

    earthquakeTitle: "🌍 भूकंप सुरक्षा",
    earthquakeDesc: "झुको, ढको और पकड़े रहो – झटकों से सुरक्षित रहें।",
    earthquakeTicker: "अपडेट: झटके आने पर झुको, ढको और पकड़े रहो।|याद रखें: खिड़कियों से दूर रहें।|टिप: झटके रुकने के बाद खुले मैदान में जाएं।",
    floodTitle: "🌊 बाढ़ सुरक्षा",
    floodDesc: "ऊँचाई पर जाएं, अपनी जान की रक्षा करें।",
    floodTicker: "अपडेट: तुरंत ऊँचे स्थान पर जाएँ।|चेतावनी: बाढ़ के पानी में कभी न चलें।|टिप: आधिकारिक अलर्ट का पालन करें।",
    fireTitle: "🔥 आग सुरक्षा",
    fireDesc: "शांत रहें, अग्निशामक का उपयोग करें और सुरक्षित निकलें।",
    fireTicker: "अलर्ट: तुरंत फायर सर्विस को कॉल करें।|याद रखें: लिफ्ट नहीं, सीढ़ियों का उपयोग करें।|टिप: कपड़ों में आग लगने पर रुकें, लेटें और लुढ़कें।",
    pandemicTitle: "🦠 महामारी की तैयारी",
    pandemicDesc: "महामारियों के दौरान तैयार रहें।",
    pandemicTicker: "अपडेट: साबुन से हाथ धोएं।|याद रखें: भीड़भाड़ वाली जगह पर मास्क पहनें।|टिप: सुरक्षित रहने के लिए बड़े जमावड़ों से बचें।",
    heatwaveTitle: "☀️ लू से बचाव",
    heatwaveDesc: "हाइड्रेटेड रहें और दोपहर में बाहर जाने से बचें।",
    heatwaveTicker: "अपडेट: पर्याप्त पानी पिएं।|याद रखें: दोपहर १२ से ३ बजे तक बाहर न जाएं।|टिप: हल्के और ढीले सूती कपड़े पहनें।",
    landslideTitle: "🏔️ भूस्खलन सुरक्षा",
    landslideDesc: "भारी बारिश के दौरान ढलानों से दूर रहें।",
    landslideTicker: "अपडेट: भारी बारिश में यात्रा से बचें।|याद रखें: असामान्य आवाज़ों पर सतर्क रहें।|टिप: संकेत मिलने पर तुरंत सुरक्षित स्थान पर जाएं।",
    cycloneTitle: "🌀 चक्रवात सुरक्षा",
    cycloneDesc: "घर के अंदर रहें और सरकारी चेतावनियों का पालन करें।",
    cycloneTicker: "अपडेट: आपातकालीन किट तैयार रखें।|याद रखें: खिड़कियों से दूर रहें।|टिप: अधिकारियों की सलाह पर तुरंत निकासी करें।",

    simTitle: "🎮 समयबद्ध उत्तरजीविता निर्णय सिम्युलेटर",
    simDesc: "सक्रिय समय दबाव के साथ वास्तविक आपदा स्थितियों में अपनी त्वरित सोच का परीक्षण करें।",
    simScoreLabel: "उत्तरजीविता सूचकांक:",
    simScenarioFinished: "🎉 <strong>सिमुलेशन पूर्ण!</strong> आपका अंतिम उत्तरजीविता स्कोर: <strong>{SCORE}%</strong>।",
    simTimerCompleted: "⏱️ पूर्ण हुआ",
    simTimerSecSuffix: "सेकंड",
    simTimeOutMsg: "⏰ समय समाप्त! वास्तविक आपदा में अनिर्णय की स्थिति घातक हो सकती है (-२५% उत्तरजीविता)।",
    simRestartBtn: "🔄 परिदृश्य पुनः आरंभ करें",
    optPrefix: "विकल्प",
    optOptionLetters: ["क", "ख", "ग", "घ"],
    optCorrectFeedback: "✅ <strong>सर्वोत्तम निर्णय!</strong>",
    optIncorrectFeedback: "❌ <strong>अत्यधिक जोखिम भरा निर्णय!</strong>",

    coordTitle: "🤝 सामुदायिक आपातकालीन समन्वय एवं एसओएस",
    coordDesc: "त्वरित एसओएस प्रसारण एवं निकटतम सत्यापित राहत आश्रय खोजक।",
    sosCardTitle: "एक-टैप 'मैं सुरक्षित हूँ' / एसओएस संदेश",
    sosCardDesc: "सटीक जीपीएस लिंक के साथ व्हाट्सएप/एसएमएस हेतु त्वरित संदेश तैयार करता है।",
    btnSendSafe: "✅ भेजें \"मैं सुरक्षित हूँ\"",
    btnSendDanger: "🆘 तत्काल एसओएस भेजें",
    genBroadcastLabel: "तैयार किया गया प्रसारण संदेश:",
    btnWhatsApp: "💬 व्हाट्सएप द्वारा भेजें",
    btnSMS: "📱 एसएमएस द्वारा भेजें",
    sosSafeText: "[सेफएडु अलर्ट]: मैं वर्तमान आपदा स्थिति के दौरान सुरक्षित हूँ। वर्तमान स्थान: {MAPS} (अक्षांश: {LAT}, देशांतर: {LON})। सेफएडु आपातकालीन नेटवर्क द्वारा प्रेषित।",
    sosDangerText: "[आपातकालीन एसओएस]: मुझे तत्काल बचाव/चिकित्सा सहायता की आवश्यकता है! मेरा जीपीएस स्थान: {MAPS} (अक्षांश: {LAT}, देशांतर: {LON})। कृपया एनडीआरएफ/स्थानीय प्रशासन को सूचित करें!",

    radarTitle: "क्राउडसोर्स्ड खतरा रडार",
    radarDesc: "मानचित्र पर स्थानीय संकट (जलभराव, बिजली तार, भूस्खलन) चिह्नित करें।",
    hazardPlaceholder: "खतरे का विवरण (उदा. टूटा हुआ बिजली का तार)",
    opt_waterlogging: "🌊 गहरा जलभराव",
    opt_structural: "🏚️ मलबे का अवरोध / ढांचा गिरना",
    opt_fire: "🔥 सक्रिय आग / स्पार्किंग",
    opt_landslide: "⛰️ अवरुद्ध सड़क / भूस्खलन",
    btnMarkHazard: "📌 मानचित्र पर खतरा चिह्नित करें",
    hazardReportSuccess: "✅ खतरे की रिपोर्ट दर्ज की गई! सत्यापित मार्कर लाइव रडार पर प्रसारित हो रहे हैं।",
    hazardReportedJustNow: "सेफएडु रडार द्वारा अभी रिपोर्ट किया गया",
    userReportedHazard: "🚨 उपयोगकर्ता द्वारा रिपोर्ट किया गया खतरा:",

    shelterTitle: "सक्रिय राहत शिविर एवं आश्रय निर्देशिका",
    shelterSubtext: "आपके सत्यापित जीपीएस स्थान से वास्तविक समय में दूरी की गणना",
    shelterVerifiedBadge: "सत्यापित सुरक्षित आश्रय",
    sectorLabel: "क्षेत्र:",
    distanceLabel: "दूरी:",
    capacityLabel: "क्षमता:",
    provisionsLabel: "सुविधाएं:",
    kmAwayText: "किमी दूर",
    activeReliefHubText: "सक्रिय राहत केंद्र",

    shelter_ndrf_name: "राष्ट्रीय आपदा प्रतिक्रिया बल (एनडीआरएफ) बेस कैंप",
    shelter_ndrf_sector: "क्षेत्रीय केंद्र",
    shelter_ndrf_cap: "१,५०० व्यक्ति",
    shelter_ndrf_supplies: "चिकित्सा, भोजन, स्वच्छ पेयजल",

    shelter_redcross_name: "रेड क्रॉस आपातकालीन राहत शिविर",
    shelter_redcross_sector: "पूर्वी कमान",
    shelter_redcross_cap: "८०० व्यक्ति",
    shelter_redcross_supplies: "प्राथमिक चिकित्सा, तंबू, कंबल",

    shelter_cyclone_name: "राज्य तटीय चक्रवात बहुउद्देशीय केंद्र",
    shelter_cyclone_sector: "तटीय सेक्टर",
    shelter_cyclone_cap: "२,००० व्यक्ति",
    shelter_cyclone_supplies: "सैटेलाइट संचार, पावर जनरेटर",

    shelter_ddma_name: "जिला आपदा प्रबंधन मानवीय आश्रय",
    shelter_ddma_sector: "दक्षिणी हब",
    shelter_ddma_cap: "१,२०० व्यक्ति",
    shelter_ddma_supplies: "आघात देखभाल, खाद्य सामग्री",

    mapTitle: "🌍 आपदा-प्रवण क्षेत्र मानचित्र",
    mapDesc: "यह मानचित्र भारत भर के प्राकृतिक आपदा संवेदनशील क्षेत्रों को दर्शाता है।",
    legendTitle: "भारत में आपदा क्षेत्र",
    legendEarthquake: "भूकंप क्षेत्र (जोन IV व V)",
    legendFlood: "बाढ़ प्रवण नदी घाटियाँ",
    legendCyclone: "चक्रवात प्रभावित तट",
    legendLandslide: "भूस्खलन प्रवण पहाड़",
    legendHeatwave: "अत्यधिक लू क्षेत्र",
    mapPopupRiskZone: "उच्च जोखिम क्षेत्र",
    mapPopupMonitoring: "राष्ट्रीय आपदा निगरानी मैट्रिक्स",
    mapYouAreHere: "📍 आप यहाँ हैं (लाइव जीपीएस स्थिति)",

    chatHeader: "आपातकालीन सहायक 🤖",
    typingIndicator: "बॉट टाइप कर रहा है...",
    userInputPlaceholder: "भूकंप, बाढ़, आग के बारे में पूछें...",
    chatSend: "भेजें",

    footer: "© २०२६ | सेफएडु : आपदा तैयारी",

    quizLabel: "प्रश्नोत्तरी",
    quizPromptPrefix: "आपदा तत्परता परीक्षण:",
    helplineTitle: "📞 आपातकालीन हेल्पलाइन",
    startDrill: "▶️ वर्चुअल ड्रिल शुरू करें",
    drillNextStep: "अगला ▶️",
    drillCompleted: "🎉 ड्रिल पूर्ण! अब आप आपदा से निपटने के लिए बेहतर तैयार हैं।",
    printButton: "🖨 प्रिंट / पीडीएफ डाउनलोड करें",
    videoNotSupported: "आपका ब्राउज़र वीडियो टैग का समर्थन नहीं करता है।",
    
    companyName: "सेफएडु",
    certificateHeader: "समापन प्रमाण पत्र",
    certificatePrompt: "कृपया प्रमाण पत्र हेतु अपना नाम दर्ज करें:",
    certDescTemplate: "ने <strong>{DISASTER}</strong> वर्चुअल तैयारी मॉड्यूल को सफलतापूर्वक पूरा किया है।",
    certVerifiedBadge: "सत्यापित",
    certOfficialText: "आधिकारिक",

    moduleName_earthquake: "भूकंप सुरक्षा",
    moduleName_flood: "बाढ़ सुरक्षा",
    moduleName_fire: "अग्नि सुरक्षा",
    moduleName_pandemic: "महामारी तैयारी",
    moduleName_heatwave: "लू सुरक्षा",
    moduleName_landslide: "भूस्खलन सुरक्षा",
    moduleName_cyclone: "चक्रवात सुरक्षा",

    simScenarios: [
      {
        disaster: "फ्लैश फ्लड एवं गैस रिसाव",
        scenario: "आपके कमरे के बाहर पानी घुटनों तक भर चुका है और अंदर आ रहा है। आपको पास ही गैस रिसाव की गंध आती है। आपकी पहली कार्रवाई क्या होनी चाहिए?",
        options: [
          { text: "स्पष्ट देखने के लिए बिजली के पंखे और लाइट चालू करें।", correct: false, reason: "बिजली की चिंगारी से गैस में तुरंत आग लग सकती है! गैस रिसाव के समय कभी भी बिजली के स्विच न छुएं।" },
          { text: "मुख्य बिजली का स्विच बंद करें, आग से बचें और ऊपरी मंजिल पर जाएं।", correct: true, reason: "सही! इससे बिजली के झटके और आग का खतरा टलता है तथा सुरक्षित ऊंचाई मिलती है।" },
          { text: "तुरंत बाहर बहते हुए सड़क के पानी में कूद जाएं।", correct: false, reason: "मात्र ६ इंच का तेज बहाव आपको गिरा सकता है और खुले मैनहोल में डूबने का खतरा रहता है।" },
          { text: "सारे दरवाजे-खिड़कियां कसकर बंद करके नीचे ही रुके रहें।", correct: false, reason: "फ्लैश फ्लड में निचले तल पर बंद रहने से जलमग्न होने का खतरा रहता है।" }
        ]
      },
      {
        disaster: "बहुमंजिला इमारत में भूकंप",
        scenario: "जब आप स्कूल/कॉलेज की चौथी मंजिल पर हैं, अचानक तेज भूकंप के झटके आने लगते हैं। आप तुरंत क्या करेंगे?",
        options: [
          { text: "जल्दी बाहर निकलने के लिए लिफ्ट की ओर दौड़ें।", correct: false, reason: "भूकंप के दौरान लिफ्ट बिजली कटने से बीच में अटक सकती है।" },
          { text: "मजबूत मेज के नीचे झुकें, सिर ढँकें और झटके रुकने तक पकड़े रहें।", correct: true, reason: "सही! 'झुको, ढको, पकड़ो' मलबे की चोट से बचने का सबसे प्रभावी उपाय है।" },
          { text: "कंपन के दौरान ही सीढ़ियों से नीचे भागने की कोशिश करें।", correct: false, reason: "कंपन के दौरान सीढ़ियों से गिरने पर गंभीर चोट लग सकती है।" },
          { text: "मदद मांगने के लिए कांच की खिड़कियों के पास जाकर खड़े हों।", correct: false, reason: "कांच टूटने से गंभीर घाव हो सकते हैं।" }
        ]
      }
    ],

    earthquakeModuleTitle: "🌍 भूकंप सुरक्षा",
    earthquakeStep1: "झुको, ढको, और पकड़े रहो!",
    earthquakeStep2: "कंपन बंद होने तक घर के अंदर रहें।",
    earthquakeStep3: "खिड़कियों और भारी अलमारियों से दूर रहें।",
    earthquakeQuiz: "भूकंप के दौरान सही तात्कालिक कार्रवाई क्या है?",
    earthquakeOption1: "झुको, ढको, पकड़ें",
    earthquakeOption2: "तुरंत बाहर दौड़ें",
    earthquakeQuizCorrect: "✅ सही! बहुत अच्छा।",
    earthquakeQuizIncorrect: "❌ गलत! कंपन के दौरान बाहर न दौड़ें।",
    earthquakeHelp1: "NDMA हेल्पलाइन: १०७८",
    earthquakeHelp2: "एम्बुलेंस: १०२",
    earthquakeHelp3: "फायर सर्विस: १०१",
    earthquakeDrillStep1: "🔔 अलार्म बजता है! भूकंप का पता चला।",
    earthquakeDrillStep2: "🤸‍♂️ चरण १: तुरंत जमीन पर झुकें।",
    earthquakeDrillStep3: "📦 चरण २: मजबूत मेज के नीचे कवर लें।",
    earthquakeDrillStep4: "🤲 चरण ३: कंपन रुकने तक पकड़ें।",
    earthquakeDrillStep5: "✅ भूकंप समाप्त। शांति से खुले मैदान में जाएं।",

    floodModuleTitle: "🌊 बाढ़ सुरक्षा",
    floodStep1: "तुरंत ऊँचे स्थान पर जाएँ।",
    floodStep2: "बाढ़ के पानी में कभी न चलें या गाड़ी न चलाएँ।",
    floodStep3: "आधिकारिक अलर्ट का पालन करें।",
    floodQuiz: "क्या बाढ़ के पानी में चलना सुरक्षित है?",
    floodOption1: "नहीं, यह असुरक्षित है",
    floodOption2: "हाँ, अगर पानी कम है",
    floodQuizCorrect: "✅ सही! बाढ़ के पानी में खतरे छिपे हो सकते हैं।",
    floodQuizIncorrect: "❌ गलत!",
    floodHelp1: "आपदा राहत: १०८",
    floodHelp2: "राष्ट्रीय आपदा हेल्पलाइन: १०७०",
    floodHelp3: "एम्बुलेंस: १०२",
    floodDrillStep1: "⚠️ अलर्ट: बाढ़ की चेतावनी जारी।",
    floodDrillStep2: "⬆️ चरण १: तुरंत ऊंचे स्थान पर जाएं।",
    floodDrillStep3: "📻 चरण २: रेडियो और सरकारी अलर्ट सुनें।",
    floodDrillStep4: "🚫 चरण ३: बाढ़ के पानी में चलने या गाड़ी चलाने से बचें।",
    floodDrillStep5: "✅ सुरक्षित घोषित होने तक अंदर रहें।",

    fireModuleTitle: "🔥 आग सुरक्षा",
    fireStep1: "कपड़ों में आग लगे तो रुकें, लेटें और लुढ़कें।",
    fireStep2: "सीढ़ियों का उपयोग करें, लिफ्ट का नहीं।",
    fireStep3: "धुएं से बचने के लिए नीचे झुककर रहें।",
    fireQuiz: "कपड़ों में आग लगने पर क्या करें?",
    fireOption1: "रुकें, लेटें, और लुढ़कें",
    fireOption2: "मदद के लिए भागें",
    fireQuizCorrect: "✅ सही!",
    fireQuizIncorrect: "❌ गलत!",
    fireHelp1: "फायर ब्रिगेड: १०१",
    fireHelp2: "आपातकालीन सेवाएँ: ११२",
    fireHelp3: "एम्बुलेंस: १०२",
    fireDrillStep1: "🚨 आग का अलार्म बजा।",
    fireDrillStep2: "😤 चरण १: धुएं से बचने के लिए नीचे झुकें।",
    fireDrillStep3: "🚪 चरण २: सीढ़ियों का उपयोग करें।",
    fireDrillStep4: "🔥 चरण ३: कपड़ों में आग पर रुकें, लेटें और लुढ़कें।",
    fireDrillStep5: "✅ सुरक्षित असेंबली क्षेत्र में पहुंचे।",

    pandemicModuleTitle: "🦠 महामारी की तैयारी",
    pandemicStep1: "साबुन और पानी से नियमित हाथ धोएं।",
    pandemicStep2: "भीड़भाड़ वाली जगहों पर मास्क पहनें।",
    pandemicStep3: "सामाजिक दूरी बनाए रखें।",
    pandemicQuiz: "संक्रमण के प्रसार को कैसे रोका जा सकता है?",
    pandemicOption1: "हाथ धोएं और मास्क पहनें",
    pandemicOption2: "सुरक्षा नियमों की अनदेखी करें",
    pandemicQuizCorrect: "✅ सही! सुरक्षित रहें।",
    pandemicQuizIncorrect: "❌ गलत!",
    pandemicHelp1: "स्वास्थ्य हेल्पलाइन: १०७५",
    pandemicHelp2: "एम्बुलेंस: १०२",
    pandemicHelp3: "राष्ट्रीय हेल्पलाइन: ११२",
    pandemicDrillStep1: "🦠 महामारी चेतावनी जारी।",
    pandemicDrillStep2: "🧼 चरण १: हाथों को अच्छी तरह साबुन से धोएं।",
    pandemicDrillStep3: "😷 चरण २: मास्क लगाएं।",
    pandemicDrillStep4: "👥 चरण ३: सुरक्षित दूरी बनाएं।",
    pandemicDrillStep5: "✅ स्वास्थ्य नियमों का पूर्ण पालन करें।",

    heatwaveModuleTitle: "☀️ लू से बचाव",
    heatwaveStep1: "खूब पानी पिएं और हाइड्रेटेड रहें।",
    heatwaveStep2: "दोपहर १२ से ३ बजे के बीच धूप में निकलने से बचें।",
    heatwaveStep3: "हल्के और ढीले सूती कपड़े पहनें।",
    heatwaveQuiz: "अत्यधिक लू के समय क्या करना चाहिए?",
    heatwaveOption1: "अंदर रहें और पर्याप्त पानी पिएं",
    heatwaveOption2: "दोपहर में धूप में व्यायाम करें",
    heatwaveQuizCorrect: "✅ सही! पानी पीते रहें।",
    heatwaveQuizIncorrect: "❌ गलत!",
    heatwaveHelp1: "आपातकालीन एम्बुलेंस: १०८",
    heatwaveHelp2: "चिकित्सा सेवा: १०२",
    heatwaveHelp3: "राष्ट्रीय हेल्पलाइन: ११२",
    heatwaveDrillStep1: "🌡️ अत्यधिक लू की चेतावनी जारी!",
    heatwaveDrillStep2: "💧 चरण १: ठंडे और छायादार स्थान पर रहें।",
    heatwaveDrillStep3: "🚰 चरण २: बार-बार पानी पिएं।",
    heatwaveDrillStep4: "👕 चरण ३: हल्के ढीले कपड़े पहनें।",
    heatwaveDrillStep5: "✅ बच्चों और बुजुर्गों की सेहत पर ध्यान दें।",

    landslideModuleTitle: "🏔️ भूस्खलन सुरक्षा",
    landslideStep1: "भारी बारिश के दौरान ढलानों से दूर रहें।",
    landslideStep2: "मौसम अलर्ट और चेतावनी ध्यान से सुनें।",
    landslideStep3: "जमीन धंसने की आवाज आने पर तुरंत सुरक्षित स्थान पर जाएं।",
    landslideQuiz: "भूस्खलन की चेतावनी पर पहला कदम क्या होना चाहिए?",
    landslideOption1: "तुरंत सुरक्षित जमीन पर चले जाएं",
    landslideOption2: "सामान बचाने के लिए घर में रुकें",
    landslideQuizCorrect: "✅ सही! जीवन की सुरक्षा सर्वोपरि है।",
    landslideQuizIncorrect: "❌ गलत!",
    landslideHelp1: "आपदा राहत: १०८",
    landslideHelp2: "राष्ट्रीय आपदा हेल्पलाइन: १०७०",
    landslideHelp3: "एम्बुलेंस: १०२",
    landslideDrillStep1: "⚠️ भूस्खलन का अलर्ट जारी!",
    landslideDrillStep2: "👂 चरण १: पहाड़ों से असामान्य आवाजों पर सतर्क रहें।",
    landslideDrillStep3: "🏃 चरण २: तुरंत ढलान वाले रास्ते से दूर हटें।",
    landslideDrillStep4: "🏘️ चरण ३: दूसरों को सुरक्षित निकलने में सहायता करें।",
    landslideDrillStep5: "✅ अधिकारियों के निर्देश तक सुरक्षित रहें।",

    cycloneModuleTitle: "🌀 चक्रवात सुरक्षा",
    cycloneStep1: "खिड़कियों और दरवाजों को तूफान से पहले सुरक्षित करें।",
    cycloneStep2: "भोजन, पानी और जरूरी दवाओं के साथ इमरजेंसी किट तैयार रखें।",
    cycloneStep3: "चक्रवात के दौरान अंदर रहें और खिड़कियों से दूर रहें।",
    cycloneQuiz: "चक्रवात के दौरान सुरक्षित रहने का सही उपाय क्या है?",
    cycloneOption1: "घर के अंदर खिड़कियों से दूर रहें",
    cycloneOption2: "तूफान देखने बाहर निकलें",
    cycloneQuizCorrect: "✅ सही! घर के अंदर रहना ही सबसे सुरक्षित है।",
    cycloneQuizIncorrect: "❌ गलत!",
    cycloneHelp1: "राज्य चक्रवात हेल्पलाइन: १०७७",
    cycloneHelp2: "आपदा राहत: १०८",
    cycloneHelp3: "राष्ट्रीय हेल्पलाइन: १०७०",
    cycloneDrillStep1: "⚠️ भीषण चक्रवात की चेतावनी जारी!",
    cycloneDrillStep2: "🔒 चरण १: खिड़की और दरवाजों को बंद करें।",
    cycloneDrillStep3: "🎒 चरण २: इमरजेंसी किट तैयार रखें।",
    cycloneDrillStep4: "🏠 चरण ३: खिड़कियों से दूर सुरक्षित कमरे में रहें।",
    cycloneDrillStep5: "✅ आधिकारिक सूचना के बाद ही बाहर निकलें।"
  },
  bn: {
    title: "সেফএডু : দুর্যোগ প্রস্তুতি ও প্রতিক্রিয়া শিক্ষা",
    subtitle: "বিদ্যালয়, কলেজ এবং সম্প্রদায়ের জন্য ইন্টারেক্টিভ লার্নিং মডিউল",
    languageLabel: "ভাষা:",
    themeLabel: "থিম:",
    optThemeLight: "লাইট মোড",
    optThemeDark: "ডার্ক মোড",

    beaconTitle: "🛰️ লাইভ ভূ-আঞ্চলিক সতর্কতা বীকন",
    beaconSubtext: "ভারতের উচ্চ ঝুঁকিপূর্ণ ভূতাত্ত্বিক হটস্পটগুলির স্বয়ংক্রিয় দূরত্ব পর্যবেক্ষণ",
    beaconLocating: "আঞ্চলিক বিপদের মাত্রা গণনার জন্য জিপিএস অবস্থান নেওয়া হচ্ছে...",
    beaconSafe: "✅ বিপদের মাত্রা কম: নিকটতম উচ্চ ঝুঁকিপূর্ণ দুর্যোগ এলাকা {DIST} কিমি দূরে।",
    beaconWarning: "⚠️ বিপদের মাত্রা মাঝারি: আপনি {ZONE} ({TYPE}) এর {DIST} কিমির মধ্যে অবস্থান করছেন।",
    beaconDanger: "🚨 বিপদের মাত্রা তীব্র: সরাসরি ঝুঁকিপূর্ণ অঞ্চলে উপস্থিতি ({ZONE})।",
    riskMeterLabel: "বিপদ সম্ভাবনার মাত্রা",
    riskCritical: "মারাত্মক সংকটজনক (৯২%)",
    riskModerate: "মাঝারি ঝুঁকি (৫৮%)",
    riskSafe: "নিরাপদ অঞ্চল (২২%)",
    gpsLockText: "📍 জিপিএস স্থানাঙ্ক: <strong>{LAT}° উত্তর, {LON}° পূর্ব</strong> | সক্রিয় নজরদারি কেন্দ্র: <strong>{COUNT} সমগ্র ভারত স্টেশন</strong>।",

    searchPlaceholder: "দুর্যোগ প্রস্তুতি মডিউল অনুসন্ধান করুন...",
    selectModule: "📚 একটি দুর্যোগ মডিউল নির্বাচন করুন",
    modulesSubtext: "ইন্টারেক্টিভ প্রশিক্ষণ সিমুলেশন, ড্রিল প্রটোকল এবং জরুরি হেল্পলাইন",
    backBtn: "⬅ মডিউল তালিকায় ফিরে যান",

    tag_earthquake: "সিসমিক/ভূমিকম্প",
    tag_flood: "হাইড্রোলজিক্যাল",
    tag_fire: "তাপীয়/অগ্নি",
    tag_pandemic: "বায়োলজিক্যাল",
    tag_heatwave: "জলবায়ু",
    tag_landslide: "ভূতাত্ত্বিক",
    tag_cyclone: "বায়ুমণ্ডলীয়",

    earthquakeAlt: "ভূমিকম্প",
    floodAlt: "বন্যা",
    fireAlt: "আগুন",
    pandemicAlt: "মহামারী",
    heatwaveAlt: "তাপপ্রবাহ",
    landslideAlt: "ভূমিধস",
    cycloneAlt: "ঘূর্ণিঝড়",

    earthquakeTitle: "🌍 ভূমিকম্প নিরাপত্তা",
    earthquakeDesc: "ঝুঁকুন, ঢেকে রাখুন, ধরে রাখুন – কম্পন থেকে নিরাপদ থাকুন।",
    earthquakeTicker: "আপডেট: ভূমিকম্পের সময় ঝুঁকুন, ঢেকে রাখুন এবং ধরে রাখুন।|স্মরণ: জানালা থেকে দূরে থাকুন।|টিপস: কম্পন বন্ধ হলে খোলা জায়গায় যান।",
    floodTitle: "🌊 বন্যা নিরাপত্তা",
    floodDesc: "উঁচু স্থানে যান, জীবন রক্ষা করুন।",
    floodTicker: "আপডেট: অবিলম্বে উঁচু স্থানে যান।|সতর্কতা: বন্যার পানিতে কখনও হাঁটবেন না।|টিপস: সরকারি সতর্কতায় নজর রাখুন।",
    fireTitle: "🔥 অগ্নি নিরাপত্তা",
    fireDesc: "শান্ত থাকুন, অগ্নিনির্বাপক ব্যবহার করুন এবং নিরাপদে বের হন।",
    fireTicker: "সতর্কতা: অবিলম্বে ফায়ার সার্ভিসকে কল করুন।|স্মরণ: লিফট নয়, সিঁড়ি ব্যবহার করুন।|টিপস: পোশাকে আগুন লাগলে থামুন, শুয়ে পড়ুন ও গড়িয়ে নিন।",
    pandemicTitle: "🦠 মহামারী প্রস্তুতি",
    pandemicDesc: "মহামারীর সময় প্রস্তুত থাকুন।",
    pandemicTicker: "আপডেট: সাবান দিয়ে হাত ধুতে হবে।|স্মরণ: ভিড় জায়গায় মাস্ক পরুন।|টিপস: নিরাপদ থাকতে বড় সমাবেশ এড়িয়ে চলুন।",
    heatwaveTitle: "☀️ তাপপ্রবাহ নিরাপত্তা",
    heatwaveDesc: "পানি পান করুন এবং দুপুরে বাইরে যাওয়া এড়িয়ে চলুন।",
    heatwaveTicker: "আপডেট: প্রচুর পানি পান করুন।|স্মরণ: দুপুর ১২টা থেকে ৩টার মধ্যে বাইরে যাওয়া এড়িয়ে চলুন।|টিপস: হালকা ও ঢিলেঢালা সুতির পোশাক পরুন।",
    landslideTitle: "🏔️ ভূমিধস নিরাপত্তা",
    landslideDesc: "ভারী বৃষ্টির সময় ঢাল থেকে দূরে থাকুন।",
    landslideTicker: "আপডেট: ভারী বৃষ্টির সময় ভ্রমণ এড়িয়ে চলুন।|স্মরণ: অস্বাভাবিক শব্দে সতর্ক থাকুন।|টিপস: লক্ষণ দেখা দিলে দ্রুত নিরাপদ স্থানে যান।",
    cycloneTitle: "🌀 ঘূর্ণিঝড় নিরাপত্তা",
    cycloneDesc: "বাড়ির ভিতরে থাকুন এবং সরকারি নির্দেশ মানুন।",
    cycloneTicker: "আপডেট: জরুরি কিট প্রস্তুত রাখুন।|স্মরণ: জানালা থেকে দূরে থাকুন।|টিপস: কর্তৃপক্ষের নির্দেশে অবিলম্বে সরে যান।",

    simTitle: "🎮 সময়ভিত্তিক দুর্যোগ সিদ্ধান্ত সিমুলেটর",
    simDesc: "সরাসরি টাইমার চাপের মুখে আপনার তাৎক্ষণিক জীবনরক্ষাকারী সিদ্ধান্ত যাচাই করুন।",
    simScoreLabel: "সার্ভাইভাল ইনডেক্স:",
    simScenarioFinished: "🎉 <strong>সিমুলেশন সম্পন্ন!</strong> আপনার চূড়ান্ত প্রস্তুতি স্কোর: <strong>{SCORE}%</strong>।",
    simTimerCompleted: "⏱️ সম্পন্ন",
    simTimerSecSuffix: "সেকেন্ড",
    simTimeOutMsg: "⏰ সময় শেষ! বাস্তব দুর্যোগের সময় সিদ্ধান্তহীনতা মারাত্মক হতে পারে (-২৫% সার্ভাইভাল)।",
    simRestartBtn: "🔄 দৃশ্যপট পুনরায় চালু করুন",
    optPrefix: "বিকল্প",
    optOptionLetters: ["ক", "খ", "গ", "ঘ"],
    optCorrectFeedback: "✅ <strong>সঠিক ও সর্বোত্তম সিদ্ধান্ত!</strong>",
    optIncorrectFeedback: "❌ <strong>অত্যন্ত ঝুঁকিপূর্ণ সিদ্ধান্ত!</strong>",

    coordTitle: "🤝 সামাজিক জরুরি সমন্বয় ও এসওএস",
    coordDesc: "এক ক্লিকে জরুরি এসওএস বার্তা ও নিকটস্থ আশ্রয়ের সন্ধান।",
    sosCardTitle: "এক-ট্যাপ 'আমি নিরাপদে আছি' / এসওএস বার্তা",
    sosCardDesc: "সঠিক জিপিএস লিংক সহ হোয়াটসঅ্যাপ/এসএমএস এর উপযোগী বার্তা তৈরি করে।",
    btnSendSafe: "✅ পাঠান \"আমি নিরাপদে আছি\"",
    btnSendDanger: "🆘 জরুরি এসওএস পাঠান",
    genBroadcastLabel: "তৈরিকৃত সম্প্রচার বার্তা:",
    btnWhatsApp: "💬 হোয়াটসঅ্যাপে পাঠান",
    btnSMS: "📱 এসএমএস এ পাঠান",
    sosSafeText: "[সেফএডু এলার্ট]: আমি বর্তমান দুর্যোগ পরিস্থিতিতে নিরাপদে আছি। বর্তমান অবস্থান: {MAPS} (অক্ষাংশ: {LAT}, দ্রাঘিমাংশ: {LON})। সেফএডু জরুরি নেটওয়ার্ক দ্বারা প্রেরিত।",
    sosDangerText: "[জরুরি এসওএস]: আমার অবিলম্বে উদ্ধার ও চিকিৎসা সহায়তা প্রয়োজন! আমার জিপিএস অবস্থান: {MAPS} (অক্ষাংশ: {LAT}, দ্রাঘিমাংশ: {LON})। দয়া করে এনডিআরএফ/স্থানীয় প্রশাসনকে অবহিত করুন!",

    radarTitle: "ক্রাউড-সোর্সড বিপদ রাডার",
    radarDesc: "মানচিত্রে স্থানীয় বিপদসমূহ (জলমগ্নতা, বৈদ্যুতিক তার, ধস) চিহ্নিত করুন।",
    hazardPlaceholder: "বিপদের বিবরণ (যেমন: ছেঁড়া বৈদ্যুতিক তার)",
    opt_waterlogging: "🌊 গভীর জলমগ্নতা",
    opt_structural: "🏚️ ধ্বংসস্তূপ / রাস্তা অবরোধ",
    opt_fire: "🔥 জীবন্ত আগুন / স্পার্কিং",
    opt_landslide: "⛰️ অবরুদ্ধ সড়ক / ভূমিধস",
    btnMarkHazard: "📌 মানচিত্রে বিপদ চিহ্নিত করুন",
    hazardReportSuccess: "✅ বিপদের তথ্য সফলভাবে নথিভুক্ত হয়েছে! যাচাইকৃত মার্কার লাইভ রাডারে প্রদর্শিত হচ্ছে।",
    hazardReportedJustNow: "সেফএডু রাডারে এইমাত্র রিপোর্ট করা হয়েছে",
    userReportedHazard: "🚨 ব্যবহারকারী কর্তৃক চিহ্নিত বিপদ:",

    shelterTitle: "সক্রিয় ত্রাণ শিবির ও আশ্রয় নির্দেশিকা",
    shelterSubtext: "আপনার যাচাইকৃত জিপিএস অবস্থান থেকে সরাসরি দূরত্বের হিসাব",
    shelterVerifiedBadge: "যাচাইকৃত নিরাপদ আশ্রয়",
    sectorLabel: "সেক্টর:",
    distanceLabel: "দূরত্ব:",
    capacityLabel: "ধারণক্ষমতা:",
    provisionsLabel: "সরবরাহ:",
    kmAwayText: "কিমি দূরে",
    activeReliefHubText: "সক্রিয় ত্রাণ কেন্দ্র",

    shelter_ndrf_name: "জাতীয় দুর্যোগ প্রতিক্রিয়া বাহিনী (এনডিআরএফ) বেস ক্যাম্প",
    shelter_ndrf_sector: "আঞ্চলিক কেন্দ্র",
    shelter_ndrf_cap: "১,৫০০ জন",
    shelter_ndrf_supplies: "চিকিৎসা, খাদ্য, বিশুদ্ধ পানীয় জল",

    shelter_redcross_name: "রেড ক্রস জরুরি ত্রাণ আশ্রয়",
    shelter_redcross_sector: "পূর্ব কমান্ড",
    shelter_redcross_cap: "৮০০ জন",
    shelter_redcross_supplies: "প্রাথমিক চিকিৎসা, তাঁবু, কম্বল",

    shelter_cyclone_name: "উপকূলীয় বহুমুখী ঘূর্ণিঝড় আশ্রয় কেন্দ্র",
    shelter_cyclone_sector: "উপকূলীয় সেক্টর",
    shelter_cyclone_cap: "২,০০০ জন",
    shelter_cyclone_supplies: "স্যাটেলাইট যোগাযোগ, বিদ্যুৎ জেনারেটর",

    shelter_ddma_name: "জেলা দুর্যোগ ব্যবস্থাপনা মানবিক আশ্রয়",
    shelter_ddma_sector: "দক্ষিণ হাব",
    shelter_ddma_cap: "১,২০০ জন",
    shelter_ddma_supplies: "ট্রমা কেয়ার, খাদ্য সামগ্রী",

    mapTitle: "🌍 দুর্যোগ-প্রবণ অঞ্চল মানচিত্র",
    mapDesc: "এই মানচিত্রটি সমগ্র ভারতের দুর্যোগপ্রবণ অঞ্চলগুলি প্রদর্শন করে।",
    legendTitle: "ভারতে দুর্যোগ অঞ্চলসমূহ",
    legendEarthquake: "ভূমিকম্প (জোন IV ও V)",
    legendFlood: "বন্যাপ্রবণ নদী অববাহিকা",
    legendCyclone: "ঘূর্ণিঝড়প্রবণ উপকূল",
    legendLandslide: "ভূমিধসপ্রবণ পাহাড়ি অঞ্চল",
    legendHeatwave: "তীব্র তাপপ্রবাহ অঞ্চল",
    mapPopupRiskZone: "উচ্চ ঝুঁকিপূর্ণ অঞ্চল",
    mapPopupMonitoring: "জাতীয় দুর্যোগ পর্যবেক্ষণ ম্যাট্রিক্স",
    mapYouAreHere: "📍 আপনি এখানে আছেন (লাইভ জিপিএস স্থানাঙ্ক)",

    chatHeader: "জরুরি সহকারী 🤖",
    typingIndicator: "বট লিখছে...",
    userInputPlaceholder: "ভূমিকম্প, বন্যা, আগুন সম্পর্কে জিজ্ঞাসা করুন...",
    chatSend: "পাঠান",

    footer: "© ২০২৬ | সেফএডু : দুর্যোগ প্রস্তুতি",

    quizLabel: "কুইজ",
    quizPromptPrefix: "দুর্যোগ প্রস্তুতি পরীক্ষা:",
    helplineTitle: "📞 জরুরি হেল্পলাইন",
    startDrill: "▶️ ভার্চুয়াল ড্রিল শুরু করুন",
    drillNextStep: "পরবর্তী ▶️",
    drillCompleted: "🎉 ড্রিল সম্পন্ন! এখন আপনি আরও ভালোভাবে প্রস্তুত।",
    printButton: "🖨 প্রিন্ট / পিডিএফ ডাউনলোড",
    videoNotSupported: "আপনার ব্রাউজার ভিডিও ট্যাগ সমর্থন করে না।",
    
    companyName: "সেফএডু",
    certificateHeader: "সমাপন সার্টিফিকেট",
    certificatePrompt: "সার্টিফিকেটের জন্য আপনার নাম লিখুন:",
    certDescTemplate: "সফলভাবে <strong>{DISASTER}</strong> ভার্চুয়াল প্রস্তুতি মডিউল সম্পন্ন করেছে।",
    certVerifiedBadge: "যাচাইকৃত",
    certOfficialText: "অফিসিয়াল",

    moduleName_earthquake: "ভূমিকম্প নিরাপত্তা",
    moduleName_flood: "বন্যা নিরাপত্তা",
    moduleName_fire: "অগ্নি নিরাপত্তা",
    moduleName_pandemic: "মহামারী প্রস্তুতি",
    moduleName_heatwave: "তাপপ্রবাহ নিরাপত্তা",
    moduleName_landslide: "ভূমিধস নিরাপত্তা",
    moduleName_cyclone: "ঘূর্ণিঝড় নিরাপত্তা",

    simScenarios: [
      {
        disaster: "হড়পা বান ও গ্যাস লিকেজ",
        scenario: "ঘরের বাইরে পানি হাঁটু সমান জমে ঘরে ঢুকছে এবং গ্যাস লিকেজের হালকা গন্ধ পাচ্ছেন। এই পরিস্থিতিতে আপনার প্রথম পদক্ষেপ কী হবে?",
        options: [
          { text: "ভালো করে দেখার জন্য ইলেকট্রিক লাইট ও ফ্যান চালু করুন।", correct: false, reason: "ইলেকট্রিক স্পার্ক থেকে গ্যাসে সাথে সাথে আগুন ধরে যেতে পারে! গ্যাস লিকের সময় কখনোই কোনো সুইচ স্পর্শ করবেন না।" },
          { text: "ঘরের মূল মেইন সুইচ বন্ধ করুন, আগুন এড়িয়ে অবিলম্বে উপরের তলায় যান।", correct: true, reason: "সঠিক! এতে বিদ্যুতের শক ও বিস্ফোরণের ঝুঁকি রোধ হয় এবং নিরাপদ উচ্চতা পাওয়া যায়।" },
          { text: "বাইরে রাস্তায় দ্রুত প্রবাহিত বন্যার পানির মধ্যে নেমে পড়ুন।", correct: false, reason: "মাত্র ৬ ইঞ্চি প্রবাহিত পানি একজন পূর্ণবয়স্ক মানুষকে ভাসিয়ে নিতে পারে এবং খোলা ম্যানহোলের মারাত্মক ঝুঁকি থাকে।" },
          { text: "সব দরজা-জানালা শক্ত করে আটকে নিচতলাতেই অবস্থান করুন।", correct: false, reason: "হড়পা বানে নিচতলায় আটকে থাকলে নিমজ্জিত হওয়ার সম্ভাবনা থাকে।" }
        ]
      },
      {
        disaster: "বহুতল ভবনে ভূমিকম্প",
        scenario: "আপনি বিদ্যালয়/কলেজ ভবনের ৪ তলায় থাকাকালীন তীব্র ভূমিকম্প শুরু হলো। অ্যালার্ম বাজছে। আপনি তাৎক্ষণিক কী করবেন?",
        options: [
          { text: "দ্রুত নামার জন্য লিফটের দিকে দৌড়ান।", correct: false, reason: "ভূমিকম্পের সময় বিদ্যুৎ চলে গিয়ে লিফট মাঝপথে আটকে যেতে পারে।" },
          { text: "একটি শক্ত টেবিলের নিচে ঢুকে মাথা ঢেকে ধরুন এবং কম্পন থামা পর্যন্ত অপেক্ষা করুন।", correct: true, reason: "সঠিক! 'ড্রপ, কভার অ্যান্ড হোল্ড' পদ্ধতি ধ্বংসস্তূপের আঘাত থেকে বাঁচায়।" },
          { text: "কম্পন চলাকালীনই সিঁড়ি দিয়ে হুড়োহুড়ি করে নামার চেষ্টা করুন।", correct: false, reason: "ভূমিকম্পের সময় সিঁড়ি ভেঙে পড়তে পারে বা পদদলিত হয়ে প্রাণহানির ঝুঁকি থাকে।" },
          { text: "সাহায্যের জন্য জানালার কাঁচের পাশে গিয়ে চিৎকার করুন।", correct: false, reason: "কাঁচ ভেঙে মারাত্মক জখম হওয়ার ঝুঁকি থাকে।" }
        ]
      }
    ],

    earthquakeModuleTitle: "🌍 ভূমিকম্প নিরাপত্তা",
    earthquakeStep1: "ঝুঁকুন, ঢেকে রাখুন এবং ধরে থাকুন!",
    earthquakeStep2: "কম্পন বন্ধ না হওয়া পর্যন্ত ভিতরে থাকুন।",
    earthquakeStep3: "জানালা এবং তাক থেকে দূরে থাকুন।",
    earthquakeQuiz: "ভূমিকম্পের সময় তাৎক্ষণিক ব্যবস্থা কী?",
    earthquakeOption1: "ঝুঁকুন, ঢেকে রাখুন, ধরে রাখুন",
    earthquakeOption2: "তাৎক্ষণিক বাহিরে দৌড়ান",
    earthquakeQuizCorrect: "✅ সঠিক! দুর্দান্ত!",
    earthquakeQuizIncorrect: "❌ ভুল! কম্পনের সময় কখনোই বাইরে দৌড়াবেন না।",
    earthquakeHelp1: "NDMA হেল্পলাইন: ১০৭৮",
    earthquakeHelp2: "অ্যাম্বুলেন্স: ১০২",
    earthquakeHelp3: "অগ্নি সেবা: ১০১",
    earthquakeDrillStep1: "🔔 সাইরেন বাজছে! ভূমিকম্প অনুভূত হয়েছে।",
    earthquakeDrillStep2: "🤸‍♂️ ধাপ ১: মাটিতে ড্রপ করুন।",
    earthquakeDrillStep3: "📦 ধাপ ২: শক্ত টেবিলের নিচে কভার নিন।",
    earthquakeDrillStep4: "🤲 ধাপ ৩: শক্ত করে ধরে রাখুন।",
    earthquakeDrillStep5: "✅ কম্পন শেষ। শান্তভাবে খোলা মাঠে যান।",

    floodModuleTitle: "🌊 বন্যা নিরাপত্তা",
    floodStep1: "অবিলম্বে উঁচু স্থানে যান।",
    floodStep2: "বন্যার পানিতে কখনও হাঁটবেন বা গাড়ি চালাবেন না।",
    floodStep3: "সরকারি সতর্কতায় নজর রাখুন।",
    floodQuiz: "বন্যার পানিতে হাঁটা কি নিরাপদ?",
    floodOption1: "না, এটি অনিরাপদ",
    floodOption2: "হ্যাঁ, যদি পানি কম হয়",
    floodQuizCorrect: "✅ সঠিক! বন্যার জলে লুকানো বিপদ থাকতে পারে।",
    floodQuizIncorrect: "❌ ভুল!",
    floodHelp1: "দুর্যোগ ত্রাণ: ১০৮",
    floodHelp2: "জাতীয় দুর্যোগ হেল্পলাইন: ১০৭০",
    floodHelp3: "অ্যাম্বুলেন্স: ১০২",
    floodDrillStep1: "⚠️ বন্যা সতর্কতা জারি হয়েছে।",
    floodDrillStep2: "⬆️ ধাপ ১: অবিলম্বে উঁচু স্থানে যান।",
    floodDrillStep3: "📻 ধাপ ২: আবহাওয়া ও সরকারি সতর্কতা শুনুন।",
    floodDrillStep4: "🚫 ধাপ ৩: বন্যার জলে হাঁটা বা গাড়ি চালানো এড়িয়ে চলুন।",
    floodDrillStep5: "✅ নিরাপদ ঘোষণা না হওয়া পর্যন্ত ভিতরে থাকুন।",

    fireModuleTitle: "🔥 অগ্নি নিরাপত্তা",
    fireStep1: "পোশাকে আগুন লাগলে থামুন, শুয়ে পড়ুন এবং গড়িয়ে পড়ুন।",
    fireStep2: "সিঁড়ি ব্যবহার করুন, লিফট নয়।",
    fireStep3: "ধোঁয়া এড়াতে নিচু অবস্থানে থাকুন।",
    fireQuiz: "পোশাকে আগুন লাগলে কী করবেন?",
    fireOption1: "থামুন, শুয়ে পড়ুন, গড়িয়ে পড়ুন",
    fireOption2: "সাহায্যের জন্য দৌড়ান",
    fireQuizCorrect: "✅ সঠিক!",
    fireQuizIncorrect: "❌ ভুল!",
    fireHelp1: "অগ্নি দল: ১০১",
    fireHelp2: "জরুরি সেবা: ১১২",
    fireHelp3: "অ্যাম্বুলেন্স: ১০২",
    fireDrillStep1: "🚨 ফায়ার অ্যালার্ম বেজে উঠেছে।",
    fireDrillStep2: "😤 ধাপ ১: ধোঁয়া এড়াতে নিচু থাকুন।",
    fireDrillStep3: "🚪 ধাপ ২: সিঁড়ি ব্যবহার করুন।",
    fireDrillStep4: "🔥 ধাপ ৩: থামুন, শুয়ে পড়ুন ও গড়ান।",
    fireDrillStep5: "✅ নিরাপদে বাইরে সমবেত হোন।",

    pandemicModuleTitle: "🦠 মহামারী প্রস্তুতি",
    pandemicStep1: "নিয়মিত সাবান দিয়ে হাত ধুয়ে নিন।",
    pandemicStep2: "জনসমাগমে মাস্ক পরিধান করুন।",
    pandemicStep3: "সামাজিক দূরত্ব বজায় রাখুন।",
    pandemicQuiz: "কীভাবে ভাইরাস সংক্রমণ রোধ করা যায়?",
    pandemicOption1: "হাত ধুয়ে নিন এবং মাস্ক পরুন",
    pandemicOption2: "সুরক্ষাবিধি উপেক্ষা করুন",
    pandemicQuizCorrect: "✅ সঠিক! সুরক্ষিত থাকুন।",
    pandemicQuizIncorrect: "❌ ভুল!",
    pandemicHelp1: "স্বাস্থ্য হেল্পলাইন: ১০৭৫",
    pandemicHelp2: "জরুরি সেবা: ১১২",
    pandemicHelp3: "জাতীয় দুর্যোগ হেল্পলাইন: ১০৭০",
    pandemicDrillStep1: "🦠 মহামারী সতর্কতা জারি।",
    pandemicDrillStep2: "🧼 ধাপ ১: সাবান দিয়ে হাত ভালো করে ধুয়ে নিন।",
    pandemicDrillStep3: "😷 ধাপ ২: মাস্ক পরুন।",
    pandemicDrillStep4: "👥 ধাপ ৩: সামাজিক দূরত্ব মেনে চলুন।",
    pandemicDrillStep5: "✅ স্বাস্থ্যবিধি মেনে চলুন।",

    heatwaveModuleTitle: "☀️ তাপপ্রবাহ নিরাপত্তা",
    heatwaveStep1: "পর্যাপ্ত জল পান করুন এবং হাইড্রেটেড থাকুন।",
    heatwaveStep2: "দুপুর ১২টা থেকে ৩টার মধ্যে রোদ এড়িয়ে চলুন।",
    heatwaveStep3: "হালকা ও ঢিলেঢালা সুতির পোশাক পরুন।",
    heatwaveQuiz: "তীব্র তাপপ্রবাহের সময় কী করা উচিত?",
    heatwaveOption1: "ঘরের ভিতরে থাকুন এবং প্রচুর জল পান করুন",
    heatwaveOption2: "দুপুরে রোদে ব্যায়াম করুন",
    heatwaveQuizCorrect: "✅ সঠিক! জল খেতে থাকুন।",
    heatwaveQuizIncorrect: "❌ ভুল!",
    heatwaveHelp1: "অ্যাম্বুলেন্স: ১০৮",
    heatwaveHelp2: "চিকিৎসা সেবা: ১০২",
    heatwaveHelp3: "জাতীয় হেল্পলাইন: ১১২",
    heatwaveDrillStep1: "🌡️ তীব্র তাপপ্রবাহের সতর্কতা!",
    heatwaveDrillStep2: "💧 ধাপ ১: শীতল ছায়ায় অবস্থান করুন।",
    heatwaveDrillStep3: "🚰 ধাপ ২: ঘন ঘন জল পান করুন।",
    heatwaveDrillStep4: "👕 ধাপ ৩: হালকা পোশাক পরিধান করুন।",
    heatwaveDrillStep5: "✅ শিশু ও বয়স্কদের যত্ন নিন।",

    landslideModuleTitle: "🏔️ ভূমিধস নিরাপত্তা",
    landslideStep1: "ভারী বৃষ্টির সময় পাহাড়ের খাড়া ঢাল থেকে দূরে থাকুন।",
    landslideStep2: "আবহাওয়া সতর্কতা মেনে দ্রুত নিরাপদ স্থানে যান।",
    landslideStep3: "অস্বাভাবিক শব্দ শুনলে অবিলম্বে সরে যান।",
    landslideQuiz: "ভূমিধস সতর্কতায় প্রথম কী করা উচিত?",
    landslideOption1: "তৎক্ষণাৎ নিরাপদ স্থানে চলে যান",
    landslideOption2: "জিনিসপত্র গোছাতে ঘরে থাকুন",
    landslideQuizCorrect: "✅ সঠিক! জীবনের নিরাপত্তা সবচেয়ে আগে।",
    landslideQuizIncorrect: "❌ ভুল!",
    landslideHelp1: "দুর্যোগ ত্রাণ: ১০৮",
    landslideHelp2: "জাতীয় দুর্যোগ হেল্পলাইন: ১০৭০",
    landslideHelp3: "অ্যাম্বুলেন্স: ১০২",
    landslideDrillStep1: "⚠️ ভূমিধস সতর্কতা জারি হয়েছে!",
    landslideDrillStep2: "👂 ধাপ ১: অস্বাভাবিক শব্দ বা ফাটল লক্ষ্য করুন।",
    landslideDrillStep3: "🏃 ধাপ ২: দ্রুত ঢাল থেকে নিরাপদ স্থানে চলে যান।",
    landslideDrillStep4: "🏘️ ধাপ ৩: অন্যদের সহায়তা করুন।",
    landslideDrillStep5: "✅ সরকারি নির্দেশ না দেওয়া পর্যন্ত অপেক্ষা করুন।",

    cycloneModuleTitle: "🌀 ঘূর্ণিঝড় নিরাপত্তা",
    cycloneStep1: "ঝড়ের আগে দরজা, জানালা ও ছাদ শক্ত করে বাঁধুন।",
    cycloneStep2: "খাদ্য, জল ও ওষুধসহ জরুরি কিট প্রস্তুত রাখুন।",
    cycloneStep3: "ঘূর্ণিঝড়ের সময় জানালা থেকে দূরে ঘরের ভিতরে থাকুন।",
    cycloneQuiz: "ঘূর্ণিঝড়ের সময় সঠিক পদক্ষেপ কী?",
    cycloneOption1: "ঘরের ভিতরে থাকুন ও জানালা থেকে দূরে থাকুন",
    cycloneOption2: "পরিস্থিতি দেখতে বাইরে যান",
    cycloneQuizCorrect: "✅ সঠিক! ঘরের ভিতর থাকাই সবচেয়ে নিরাপদ।",
    cycloneQuizIncorrect: "❌ ভুল!",
    cycloneHelp1: "রাজ্য ঘূর্ণিঝড় হেল্পলাইন: ১০৭৭",
    cycloneHelp2: "দুর্যোগ ত্রাণ: ১০৮",
    cycloneHelp3: "জাতীয় হেল্পলাইন: ১০৭০",
    cycloneDrillStep1: "⚠️ তীব্র ঘূর্ণিঝড়ের সতর্কতা জারি!",
    cycloneDrillStep2: "🔒 ধাপ ১: সমস্ত দরজা-জানালা শক্ত করে বন্ধ করুন।",
    cycloneDrillStep3: "🎒 ধাপ ২: জরুরি কিট হাতের কাছে রাখুন।",
    cycloneDrillStep4: "🏠 ধাপ ৩: সুরক্ষিত নিরাপদ কক্ষে অবস্থান নিন।",
    cycloneDrillStep5: "✅ সরকারি সতর্কবার্তা অনুসরণ করুন।"
  }
};

// --- Chatbot Multilingual Data ---
const chatbotResponses = {
  en: {
    earthquake: "During an earthquake: Drop, Cover, and Hold On! Stay away from windows.",
    flood: "During a flood: Move to higher ground and avoid walking or driving through floodwaters.",
    fire: "During a fire: Stay low to avoid smoke, use stairs not elevators, and Stop, Drop, and Roll.",
    cyclone: "During a cyclone: Stay indoors, prepare emergency kits, and follow official alerts.",
    pandemic: "During a pandemic: Wash hands, wear a mask, and avoid large gatherings.",
    heatwave: "During a heatwave: Drink plenty of water and avoid going out in peak afternoon hours.",
    landslide: "During a landslide: Stay away from steep slopes and listen for unusual rumbling sounds.",
    default: "🤖 Ask me about earthquake, flood, fire, cyclone, pandemic, heatwave, or landslide."
  },
  hi: {
    earthquake: "भूकंप के दौरान: नीचे झुकें, कवर लें, और पकड़ें! खिड़कियों से दूर रहें।",
    flood: "बाढ़ के दौरान: ऊँचे स्थान पर जाएँ और पानी में चलने से बचें।",
    fire: "आग लगने पर: धुएं से बचने के लिए नीचे रहें और सीढ़ियों का उपयोग करें।",
    cyclone: "चक्रवात के दौरान: घर के अंदर रहें और आधिकारिक अलर्ट का पालन करें।",
    pandemic: "महामारी के दौरान: हाथ धोएं, मास्क पहनें और भीड़ से बचें।",
    heatwave: "लू के दौरान: खूब पानी पिएं और दोपहर में बाहर न जाएं।",
    landslide: "भूस्खलन के दौरान: ढलानों से दूर रहें और मौसम अलर्ट सुनें।",
    default: "🤖 कृपया भूकंप, बाढ़, आग, चक्रवात, महामारी, लू या भूस्खलन के बारे में पूछें।"
  },
  bn: {
    earthquake: "ভূমিকম্পের সময়: নিচে নত হন, ঢেকে রাখুন এবং ধরে থাকুন! জানালা থেকে দূরে থাকুন।",
    flood: "বন্যার সময়: উঁচু স্থানে যান এবং বন্যার জলে হাঁটা এড়িয়ে চলুন।",
    fire: "আগুন লাগলে: ধোঁয়া এড়াতে নিচু থাকুন এবং সিঁড়ি ব্যবহার করুন।",
    cyclone: "ঘূর্ণিঝড়ের সময়: ঘরের ভিতরে থাকুন এবং জরুরি কিট প্রস্তুত রাখুন।",
    pandemic: "মহামারীর সময়: হাত ধুয়ে নিন এবং মাস্ক পরুন।",
    heatwave: "তাপপ্রবাহের সময়: প্রচুর পানি পান করুন এবং দুপুরে বাইরে যাওয়া এড়িয়ে চলুন।",
    landslide: "ভূমিধসের সময়: ঢালু এলাকা থেকে দূরে থাকুন।",
    default: "🤖 ভূমিকম্প, বন্যা, আগুন, ঘূর্ণিঝড়, মহামারী, তাপপ্রবাহ বা ভূমিধস সম্পর্কে জিজ্ঞাসা করুন।"
  }
};

const disasterKeywords = {
  en: {
    earthquake: ["earthquake", "quake", "tremor"],
    flood: ["flood", "flooding", "water"],
    fire: ["fire", "flame", "smoke"],
    cyclone: ["cyclone", "storm", "hurricane"],
    pandemic: ["pandemic", "virus", "covid"],
    heatwave: ["heatwave", "heat", "hot"],
    landslide: ["landslide", "mudslide", "slope"]
  },
  hi: {
    earthquake: ["भूकंप", "कंपन"],
    flood: ["बाढ़", "पानी", "जल"],
    fire: ["आग", "धुआं", "अग्नि"],
    cyclone: ["चक्रवात", "तूफान"],
    pandemic: ["महामारी", "वायरस"],
    heatwave: ["लू", "गर्मी", "ताप"],
    landslide: ["भूस्खलन", "ढलान"]
  },
  bn: {
    earthquake: ["ভূমিকম্প", "কম্পন"],
    flood: ["বন্যা", "জল", "পানি"],
    fire: ["আগুন", "ধোঁয়া", "অগ্নি"],
    cyclone: ["ঘূর্ণিঝড়", "ঝড়"],
    pandemic: ["মহামারী", "ভাইরাস"],
    heatwave: ["তাপপ্রবাহ", "গরম", "তাপ"],
    landslide: ["ভূমিধস", "ঢাল"]
  }
};

// --- Haversine Distance Calculation (km) ---
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

// --- Live Geo-Fenced Alert Beacon Logic ---
let userLocation = null;

function evaluateLiveBeacon(lat, lon) {
  const lang = document.getElementById("language")?.value || 'en';
  const trans = translations[lang] || translations.en;
  const statusEl = document.getElementById("beaconStatus");
  const riskBox = document.getElementById("beaconRiskBox");
  const riskMeter = document.getElementById("riskMeterFill");
  const riskPercent = document.getElementById("riskPercentage");
  const detailsEl = document.getElementById("beaconDetails");

  let minDistance = Infinity;
  let closestZone = null;

  allIndiaDisasterZones.forEach(zone => {
    const dist = calculateDistance(lat, lon, zone.lat, zone.lng);
    if (dist < minDistance) {
      minDistance = dist;
      closestZone = zone;
    }
  });

  riskBox.classList.remove("hidden");

  const localizedZoneType = trans['moduleName_' + closestZone.type] || closestZone.type;
  const localizedDist = localizeDigits(minDistance, lang);

  if (minDistance < 60) {
    statusEl.innerHTML = `<span style="color:var(--danger-red);font-weight:800;">` +
      trans.beaconDanger.replace("{ZONE}", localizedZoneType.toUpperCase()) + `</span>`;
    riskMeter.style.width = "92%";
    riskMeter.style.background = "linear-gradient(90deg, #f43f5e, #e11d48)";
    riskPercent.innerText = trans.riskCritical;
    riskPercent.style.color = "var(--danger-red)";
  } else if (minDistance < 250) {
    statusEl.innerHTML = `<span style="color:var(--accent-color);font-weight:700;">` +
      trans.beaconWarning.replace("{DIST}", localizedDist).replace("{ZONE}", closestZone.id).replace("{TYPE}", localizedZoneType) + `</span>`;
    riskMeter.style.width = "58%";
    riskMeter.style.background = "linear-gradient(90deg, #f59e0b, #d97706)";
    riskPercent.innerText = trans.riskModerate;
    riskPercent.style.color = "var(--accent-color)";
  } else {
    statusEl.innerHTML = `<span style="color:var(--success-green);font-weight:700;">` +
      trans.beaconSafe.replace("{DIST}", localizedDist) + `</span>`;
    riskMeter.style.width = "22%";
    riskMeter.style.background = "linear-gradient(90deg, #10b981, #059669)";
    riskPercent.innerText = trans.riskSafe;
    riskPercent.style.color = "var(--success-green)";
  }

  const localizedLat = localizeDigits(lat.toFixed(4), lang);
  const localizedLon = localizeDigits(lon.toFixed(4), lang);
  const localizedCount = localizeDigits(allIndiaDisasterZones.length, lang);

  detailsEl.innerHTML = trans.gpsLockText
    .replace("{LAT}", localizedLat)
    .replace("{LON}", localizedLon)
    .replace("{COUNT}", localizedCount);

  renderShelters(lat, lon);
}

// --- Render Nearby Shelters ---
function renderShelters(userLat, userLon) {
  const lang = document.getElementById("language")?.value || 'en';
  const trans = translations[lang] || translations.en;
  const container = document.getElementById("shelterList");
  if (!container) return;

  const shelterData = [
    { name: trans.shelter_ndrf_name, sector: trans.shelter_ndrf_sector, cap: trans.shelter_ndrf_cap, supplies: trans.shelter_ndrf_supplies, lat: 28.6139, lng: 77.2090 },
    { name: trans.shelter_redcross_name, sector: trans.shelter_redcross_sector, cap: trans.shelter_redcross_cap, supplies: trans.shelter_redcross_supplies, lat: 22.5726, lng: 88.3639 },
    { name: trans.shelter_cyclone_name, sector: trans.shelter_cyclone_sector, cap: trans.shelter_cyclone_cap, supplies: trans.shelter_cyclone_supplies, lat: 20.2961, lng: 85.8245 },
    { name: trans.shelter_ddma_name, sector: trans.shelter_ddma_sector, cap: trans.shelter_ddma_cap, supplies: trans.shelter_ddma_supplies, lat: 13.0827, lng: 80.2707 }
  ];

  container.innerHTML = shelterData.map(s => {
    const rawDist = calculateDistance(userLat, userLon, s.lat, s.lng);
    const localizedDist = localizeDigits(rawDist, lang);
    const dist = userLat ? `${localizedDist} ${trans.kmAwayText}` : trans.activeReliefHubText;
    return `
      <div class="shelter-item">
        <h4>${s.name}</h4>
        <p><strong>${trans.sectorLabel}</strong> ${s.sector} | <strong>${trans.distanceLabel}</strong> ${dist}</p>
        <p><strong>${trans.capacityLabel}</strong> ${s.cap} | <strong>${trans.provisionsLabel}</strong> ${s.supplies}</p>
        <span class="shelter-badge">${trans.shelterVerifiedBadge}</span>
      </div>
    `;
  }).join("");
}

// --- One-Tap "I Am Safe" & SOS Generator ---
function sendSOSBroadcast(mode) {
  const lang = document.getElementById("language")?.value || 'en';
  const trans = translations[lang] || translations.en;
  const rawLat = userLocation ? userLocation.lat.toFixed(4) : "28.6139";
  const rawLon = userLocation ? userLocation.lon.toFixed(4) : "77.2090";
  const mapsLink = `https://maps.google.com/?q=${rawLat},${rawLon}`;
  const outBox = document.getElementById("sosOutput");
  outBox.classList.remove("hidden");

  const localizedLat = localizeDigits(rawLat, lang);
  const localizedLon = localizeDigits(rawLon, lang);

  let msg = "";
  if (mode === 'safe') {
    msg = trans.sosSafeText.replace("{MAPS}", mapsLink).replace("{LAT}", localizedLat).replace("{LON}", localizedLon);
  } else {
    msg = trans.sosDangerText.replace("{MAPS}", mapsLink).replace("{LAT}", localizedLat).replace("{LON}", localizedLon);
  }

  const encodedMsg = encodeURIComponent(msg);
  outBox.innerHTML = `
    <strong>${trans.genBroadcastLabel}</strong><br>
    <p style="margin:8px 0;line-height:1.5;">${msg}</p>
    <div style="margin-top:10px; display:flex; gap:10px; flex-wrap:wrap;">
      <a href="https://wa.me/?text=${encodedMsg}" target="_blank" class="coord-btn" style="text-decoration:none;background:#25D366;">${trans.btnWhatsApp}</a>
      <a href="sms:?body=${encodedMsg}" class="coord-btn" style="text-decoration:none;background:#334155;">${trans.btnSMS}</a>
    </div>
  `;
}

// --- Crowdsourced Hazard Radar ---
function submitCrowdsourcedHazard(e) {
  e.preventDefault();
  const lang = document.getElementById("language")?.value || 'en';
  const trans = translations[lang] || translations.en;
  const desc = document.getElementById("hazardDescription").value;
  const categorySelect = document.getElementById("hazardCategory");
  const categoryText = categorySelect.options[categorySelect.selectedIndex].text;

  const lat = userLocation ? userLocation.lat + (Math.random() - 0.5) * 0.02 : 28.6139 + (Math.random() - 0.5) * 0.04;
  const lon = userLocation ? userLocation.lon + (Math.random() - 0.5) * 0.02 : 77.2090 + (Math.random() - 0.5) * 0.04;

  if (map) {
    const customIcon = L.divIcon({
      className: 'custom-map-icon',
      html: `<div class="custom-marker-pin pin-hazard">⚠️</div>`,
      iconSize: [34, 34],
      iconAnchor: [17, 17]
    });

    L.marker([lat, lon], { icon: customIcon }).addTo(map)
      .bindPopup(`<b>${trans.userReportedHazard} ${categoryText}</b><br>${desc}<br><small style="color:#a855f7;">${trans.hazardReportedJustNow}</small>`)
      .openPopup();

    map.setView([lat, lon], 12);
  }

  alert(trans.hazardReportSuccess);
  document.getElementById("hazardDescription").value = "";
}

// --- Timed Survival Decision Simulator ---
let currentSimIndex = 0;
let simTimerInterval = null;
let simTimeRemaining = 15;
let survivalScore = 100;

function startSurvivalSimulation() {
  currentSimIndex = 0;
  survivalScore = 100;
  renderSimScenario(currentSimIndex);
}

function renderSimScenario(index) {
  if (simTimerInterval) clearInterval(simTimerInterval);

  const lang = document.getElementById("language")?.value || 'en';
  const trans = translations[lang] || translations.en;
  const scenarios = trans.simScenarios || [];
  const scenarioData = scenarios[index];

  if (!scenarioData) {
    const localizedFinalScore = localizeDigits(survivalScore, lang);
    document.getElementById("simScenarioText").innerHTML = trans.simScenarioFinished.replace("{SCORE}", localizedFinalScore);
    document.getElementById("simOptionsGrid").innerHTML = "";
    document.getElementById("simTimer").innerText = trans.simTimerCompleted;
    document.getElementById("simFeedback").classList.add("hidden");
    document.getElementById("simRestartBtn").classList.remove("hidden");
    return;
  }

  const localizedScore = localizeDigits(survivalScore, lang);
  const localizedScenarioNum = localizeDigits(index + 1, lang);

  document.getElementById("simRestartBtn").classList.add("hidden");
  document.getElementById("simFeedback").classList.add("hidden");
  document.getElementById("simDisasterBadge").innerText = `${trans.optPrefix} ${localizedScenarioNum}: ${scenarioData.disaster}`;
  document.getElementById("simScenarioText").innerText = scenarioData.scenario;
  document.getElementById("simScore").innerText = `${trans.simScoreLabel} ${localizedScore}%`;

  simTimeRemaining = 15;
  document.getElementById("simTimer").innerText = `⏱️ ${localizeDigits(simTimeRemaining, lang)}${trans.simTimerSecSuffix || 's'}`;

  simTimerInterval = setInterval(() => {
    simTimeRemaining--;
    document.getElementById("simTimer").innerText = `⏱️ ${localizeDigits(simTimeRemaining, lang)}${trans.simTimerSecSuffix || 's'}`;
    if (simTimeRemaining <= 0) {
      clearInterval(simTimerInterval);
      handleSimChoice(false, trans.simTimeOutMsg);
    }
  }, 1000);

  const grid = document.getElementById("simOptionsGrid");
  const letterArray = trans.optOptionLetters || ["A", "B", "C", "D"];

  grid.innerHTML = scenarioData.options.map((opt, i) => `
    <button class="sim-choice-btn" onclick="handleSimOptionSelected(${index}, ${i})">
      <strong>${trans.optPrefix} ${letterArray[i] || (i + 1)}:</strong> ${opt.text}
    </button>
  `).join("");
}

function handleSimOptionSelected(scenarioIndex, optIndex) {
  clearInterval(simTimerInterval);
  const lang = document.getElementById("language")?.value || 'en';
  const trans = translations[lang] || translations.en;
  const choice = trans.simScenarios[scenarioIndex].options[optIndex];
  handleSimChoice(choice.correct, choice.reason);
}

function handleSimChoice(isCorrect, reason) {
  const lang = document.getElementById("language")?.value || 'en';
  const trans = translations[lang] || translations.en;
  const fb = document.getElementById("simFeedback");
  fb.classList.remove("hidden");

  if (isCorrect) {
    fb.className = "sim-feedback correct";
    fb.innerHTML = `${trans.optCorrectFeedback} ${reason}`;
  } else {
    survivalScore = Math.max(0, survivalScore - 25);
    const localizedScore = localizeDigits(survivalScore, lang);
    document.getElementById("simScore").innerText = `${trans.simScoreLabel} ${localizedScore}%`;
    fb.className = "sim-feedback incorrect";
    fb.innerHTML = `${trans.optIncorrectFeedback} ${reason}`;
  }

  setTimeout(() => {
    currentSimIndex++;
    renderSimScenario(currentSimIndex);
  }, 3500);
}

// --- Helper to Generate Video HTML ---
function generateVideoHTML(type, lang) {
  const videoSrc = moduleVideoSources[type] || `${type}.mp4`;
  const trans = translations[lang] || translations.en;
  
  return `
    <div class="video-container">
      <video id="moduleVideoPlayer" controls playsinline preload="metadata">
        <source src="${videoSrc}" type="video/mp4" />
        ${trans.videoNotSupported || "Your browser does not support the video tag."}
      </video>
    </div>
  `;
}

// --- Map Initialization & All-India Markers ---
let map;
let mapMarkers = [];

function initMap() {
  map = L.map('map').setView([22.5937, 78.9629], 5);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 }).addTo(map);

  updateMapMarkers('en');
}

function updateMapMarkers(lang) {
  const trans = translations[lang] || translations.en;
  mapMarkers.forEach(m => map.removeLayer(m));
  mapMarkers = [];

  allIndiaDisasterZones.forEach(zone => {
    const customIcon = L.divIcon({
      className: 'custom-map-icon',
      html: `<div class="custom-marker-pin ${zone.color}">${zone.symbol}</div>`,
      iconSize: [34, 34],
      iconAnchor: [17, 17]
    });

    const localizedZoneName = trans['moduleName_' + zone.type] || zone.type;
    const localizedLat = localizeDigits(zone.lat, lang);
    const localizedLng = localizeDigits(zone.lng, lang);

    const marker = L.marker([zone.lat, zone.lng], { icon: customIcon }).addTo(map)
      .bindPopup(`<b>${localizedZoneName.toUpperCase()} ${trans.mapPopupRiskZone}</b><br>${localizedLat}° N, ${localizedLng}° E<br><small>${trans.mapPopupMonitoring}</small>`);
    mapMarkers.push(marker);
  });
}

function updateMapLegend(lang) {
  const oldLegend = document.querySelector('.leaflet-bottom.leaflet-right .legend');
  if (oldLegend) oldLegend.remove();

  if (map) {
    const legendControl = L.control({ position: "bottomright" });
    legendControl.onAdd = function () {
      const div = L.DomUtil.create("div", "legend");
      const trans = translations[lang] || translations.en;
      div.innerHTML = `<h4>${trans.legendTitle}</h4>
        <div><span style="background:#ef4444"></span> ${trans.legendEarthquake}</div>
        <div><span style="background:#0284c7"></span> ${trans.legendFlood}</div>
        <div><span style="background:#10b981"></span> ${trans.legendCyclone}</div>
        <div><span style="background:#f97316"></span> ${trans.legendLandslide}</div>
        <div><span style="background:#f59e0b"></span> ${trans.legendHeatwave}</div>`;
      return div;
    };
    legendControl.addTo(map);
  }
}

// --- Immediate Geolocation Permission Prompt ---
function requestLocationImmediate() {
  if ("geolocation" in navigator) {
    const lang = document.getElementById("language")?.value || 'en';
    const trans = translations[lang] || translations.en;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        userLocation = { lat, lon };

        if (map) {
          L.marker([lat, lon]).addTo(map).bindPopup(trans.mapYouAreHere).openPopup();
          map.setView([lat, lon], 7);
        }
        evaluateLiveBeacon(lat, lon);
      },
      (err) => {
        console.warn("Location permission not granted or unavailable:", err.message);
        evaluateLiveBeacon(28.6139, 77.2090);
      },
      { enableHighAccuracy: true, timeout: 8000 }
    );
  } else {
    evaluateLiveBeacon(28.6139, 77.2090);
  }
}

// --- Continuous Horizontal Alert Tickers ---
function renderContinuousTickers() {
  const lang = document.getElementById("language")?.value || 'en';
  const trans = translations[lang] || translations.en;

  const tickerMap = {
    earthquakeTicker: trans.earthquakeTicker,
    floodTicker: trans.floodTicker,
    fireTicker: trans.fireTicker,
    pandemicTicker: trans.pandemicTicker,
    heatwaveTicker: trans.heatwaveTicker,
    landslideTicker: trans.landslideTicker,
    cycloneTicker: trans.cycloneTicker
  };

  for (let id in tickerMap) {
    const track = document.getElementById(id);
    if (!track) continue;

    const messages = (tickerMap[id] || "").split("|");
    const itemHTML = messages.map(msg => `<span class="ticker-item">${msg}</span>`).join("");
    track.innerHTML = itemHTML + itemHTML;
  }
}

// --- Comprehensive Language Switcher ---
function changeLanguage() {
  const lang = document.getElementById("language").value;
  const trans = translations[lang] || translations.en;

  // 1. Update text elements by ID
  for (let key in trans) {
    let el = document.getElementById(key);
    if (el) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = trans[key];
      } else {
        el.innerText = trans[key];
      }
    }
  }

  // 2. Update Input Placeholders
  const searchEl = document.getElementById("search");
  if (searchEl && trans.searchPlaceholder) {
    searchEl.placeholder = trans.searchPlaceholder;
  }

  const hazardInput = document.getElementById("hazardDescription");
  if (hazardInput && trans.hazardPlaceholder) {
    hazardInput.placeholder = trans.hazardPlaceholder;
  }

  const userIn = document.getElementById("userInput");
  if (userIn && trans.userInputPlaceholder) {
    userIn.placeholder = trans.userInputPlaceholder;
  }

  // 3. Update Image Alt Attributes
  const altMap = {
    earthquakeImg: trans.earthquakeAlt,
    floodImg: trans.floodAlt,
    fireImg: trans.fireAlt,
    pandemicImg: trans.pandemicAlt,
    heatwaveImg: trans.heatwaveAlt,
    landslideImg: trans.landslideAlt,
    cycloneImg: trans.cycloneAlt
  };

  for (let id in altMap) {
    const imgEl = document.getElementById(id);
    if (imgEl && altMap[id]) {
      imgEl.alt = altMap[id];
    }
  }

  // 4. Update Dynamic Buttons & Theme Dropdown Labels
  const optLight = document.getElementById('optThemeLight');
  const optDark = document.getElementById('optThemeDark');
  if (optLight && optDark) {
    optLight.innerText = trans.optThemeLight;
    optDark.innerText = trans.optThemeDark;
  }

  const backBtn = document.getElementById('backBtn');
  if (backBtn) {
    backBtn.innerText = trans.backBtn || "⬅ Back to Modules";
  }

  const restartBtn = document.getElementById('simRestartBtn');
  if (restartBtn) {
    restartBtn.innerText = trans.simRestartBtn;
  }

  // 5. Refresh active module view if currently open
  if (window.currentActiveModule) {
    renderModuleContent(window.currentActiveModule, lang);
  }

  // 6. Refresh Simulation Scenario Text in Active Language
  renderSimScenario(currentSimIndex);

  // 7. Update Continuous Tickers, Maps & Live Beacon
  renderContinuousTickers();
  updateMapMarkers(lang);
  updateMapLegend(lang);
  
  const currentLat = userLocation ? userLocation.lat : 28.6139;
  const currentLon = userLocation ? userLocation.lon : 77.2090;
  evaluateLiveBeacon(currentLat, currentLon);
}

function searchModules() {
  const input = document.getElementById("search").value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(input) ? "flex" : "none";
  });
}

// --- Theme Dropdown Controller ---
function changeTheme() {
  const themeSelect = document.getElementById("themeSelect");
  const theme = themeSelect.value;
  const icon = document.getElementById("themeIcon");

  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    if (icon) icon.innerText = "🌙";
  } else {
    document.body.classList.remove("dark-mode");
    if (icon) icon.innerText = "☀️";
  }
}

// --- Module Presentation ---
function loadModule(type) {
  window.currentActiveModule = type;
  window.currentDrillType = type;
  document.getElementById("modules").style.display = "none";
  document.getElementById("moduleContent").classList.remove("hidden");

  const lang = document.getElementById("language")?.value || 'en';
  renderModuleContent(type, lang);
}

function renderModuleContent(type, lang) {
  const trans = translations[lang] || translations.en;
  const content = document.getElementById("content");
  const videoHTML = generateVideoHTML(type, lang);

  content.innerHTML = `
    <h2>${trans[type + 'ModuleTitle'] || 'Safety Module'}</h2>
    ${videoHTML}
    <ul>
      <li>${trans[type + 'Step1'] || 'Follow instructions.'}</li>
      <li>${trans[type + 'Step2'] || 'Stay calm and alert.'}</li>
      <li>${trans[type + 'Step3'] || 'Seek safety immediately.'}</li>
    </ul>
    <button onclick="startDrill('${type}')">${trans.startDrill}</button>
    <div id="drillSimulation" class="drill hidden"></div>
    <div class="quiz">
      <p style="width:100%; font-weight:700;">${trans[type + 'Quiz'] || trans.quizPromptPrefix}</p>
      <button class="quiz-option" onclick="alert('${trans[type + 'QuizCorrect']}')">${trans[type + 'Option1']}</button>
      <button class="quiz-option" onclick="alert('${trans[type + 'QuizIncorrect']}')">${trans[type + 'Option2']}</button>
    </div>
    <h3>${trans.helplineTitle}</h3>
    <ul class="helpline">
      <li>${trans[type + 'Help1'] || 'Emergency: 112'}</li>
      <li>${trans[type + 'Help2'] || 'Medical: 102'}</li>
      <li>${trans[type + 'Help3'] || 'Disaster Relief: 1070'}</li>
    </ul>
  `;
}

function goBack() {
  document.querySelectorAll("video").forEach(v => { v.pause(); v.currentTime = 0; });
  window.currentActiveModule = null;
  document.getElementById("modules").style.display = "block";
  document.getElementById("moduleContent").classList.add("hidden");
}

function startDrill(type) {
  const lang = document.getElementById("language")?.value || 'en';
  const trans = translations[lang] || translations.en;
  window.currentDrillType = type;
  const drillBox = document.getElementById("drillSimulation");
  drillBox.classList.remove("hidden");

  window.drillSteps = [
    trans[type + 'DrillStep1'] || 'Alert!',
    trans[type + 'DrillStep2'] || 'Take action.',
    trans[type + 'DrillStep3'] || 'Secure location.',
    trans[type + 'DrillStep4'] || 'Wait for clearance.',
    trans[type + 'DrillStep5'] || 'Safe.'
  ];
  window.currentDrillStep = 0;

  drillBox.innerHTML = `
    <p>${window.drillSteps[0]}</p>
    <button onclick="nextDrillStep()">${trans.drillNextStep}</button>
  `;
}

function nextDrillStep() {
  const drillBox = document.getElementById("drillSimulation");
  const lang = document.getElementById("language")?.value || 'en';
  const trans = translations[lang] || translations.en;
  window.currentDrillStep++;

  if (window.currentDrillStep < window.drillSteps.length) {
    drillBox.innerHTML = `
      <p>${window.drillSteps[window.currentDrillStep]}</p>
      <button onclick="nextDrillStep()">${trans.drillNextStep}</button>
    `;
  } else {
    drillBox.innerHTML = `
      <p>${trans.drillCompleted}</p>
      <button onclick="printCertificate()">${trans.printButton}</button>
    `;
  }
}

// --- Fully Multilingual Exact Proforma Certificate ---
function printCertificate() {
  const lang = document.getElementById("language")?.value || 'en';
  const trans = translations[lang] || translations.en;
  const certName = prompt(trans.certificatePrompt || "Please enter your name for the certificate:");
  if (!certName) return;

  const currentType = window.currentDrillType || "flood";
  const localizedDisasterName = trans['moduleName_' + currentType] || currentType;
  
  const localizedDesc = (trans.certDescTemplate || "Has successfully completed the <strong>{DISASTER}</strong> virtual preparedness module.")
    .replace("{DISASTER}", localizedDisasterName);

  let certBox = document.getElementById("certificateBox");
  if (!certBox) {
    certBox = document.createElement("div");
    certBox.id = "certificateBox";
    document.body.appendChild(certBox);
  }

  certBox.innerHTML = `
    <div class="cert-outer-wrapper">
      <div class="cert-frame-proforma">
        <div class="cert-watermark-left"></div>
        <div class="cert-watermark-right"></div>

        <!-- Header Badge -->
        <div class="cert-badge-wrap">
          <div class="cert-ribbon-badge">${trans.companyName}</div>
          <div class="cert-seal-icon">
            <svg viewBox="0 0 24 24">
              <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
            </svg>
          </div>
        </div>

        <!-- Header Title -->
        <div class="cert-title-proforma">${trans.certificateHeader}</div>
        
        <!-- Center Divider Ornament -->
        <svg class="cert-ornament" viewBox="0 0 100 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 7.5 H35 M65 7.5 H100" stroke="#082846" stroke-width="1.2"/>
          <circle cx="50" cy="7.5" r="3.5" fill="#c59b27" stroke="#082846" stroke-width="1"/>
          <path d="M40 7.5 Q45 2 50 7.5 Q55 13 60 7.5" stroke="#c59b27" stroke-width="1.2"/>
        </svg>

        <!-- User Entered Name -->
        <div class="cert-name-proforma">${certName}</div>

        <!-- Description Body -->
        <div class="cert-desc-proforma">
          ${localizedDesc}
        </div>

        <!-- Localized Verified Badge Stamp -->
        <div class="cert-verified-stamp">
          <span class="cert-verified-text-top">★ ★ ★</span>
          <span class="cert-verified-banner">${trans.certVerifiedBadge}</span>
          <span class="cert-verified-text-bot">${trans.certOfficialText}</span>
        </div>
      </div>
    </div>
  `;

  window.print();
  certBox.innerHTML = "";
}

// --- Chatbot Toggle & Chat Logic ---
function toggleChatbot() {
  const chatbot = document.getElementById("chatbot");
  const launcher = document.getElementById("chatbotToggleBtn");
  
  if (chatbot.classList.contains("hidden")) {
    chatbot.classList.remove("hidden");
    launcher.style.display = "none";
    document.getElementById("userInput")?.focus();
  } else {
    chatbot.classList.add("hidden");
    launcher.style.display = "flex";
  }
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim();
  if (!msg) return;

  appendChat(msg, "user-message");
  input.value = "";

  const lang = document.getElementById("language")?.value || 'en';
  const keywords = disasterKeywords[lang] || disasterKeywords.en;
  const responses = chatbotResponses[lang] || chatbotResponses.en;
  let botReply = responses.default;

  for (let disaster in keywords) {
    if (keywords[disaster].some(k => msg.toLowerCase().includes(k))) {
      botReply = responses[disaster];
      break;
    }
  }

  showTyping();
  setTimeout(() => {
    removeTyping();
    appendChat(botReply, "bot-message");
  }, 600);
}

function showTyping() {
  const lang = document.getElementById("language")?.value || 'en';
  const trans = translations[lang] || translations.en;
  const box = document.getElementById("chatMessages");
  const typingDiv = document.createElement("div");
  typingDiv.className = "typing";
  typingDiv.id = "typingIndicator";
  typingDiv.textContent = trans.typingIndicator || "Bot is typing...";
  box.appendChild(typingDiv);
  box.scrollTop = box.scrollHeight;
}

function removeTyping() {
  const el = document.getElementById("typingIndicator");
  if (el) el.remove();
}

function appendChat(text, className) {
  const box = document.getElementById("chatMessages");
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${className}`;
  msgDiv.textContent = text;
  box.appendChild(msgDiv);
  box.scrollTop = box.scrollHeight;
}

document.getElementById("userInput")?.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

// --- Bootstrapping ---
window.onload = function() {
  initMap();
  requestLocationImmediate();
  startSurvivalSimulation();
  changeLanguage();
};