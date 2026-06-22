// All 22 modules extracted from index.html
module.exports = [
  {
    module_id: 0,
    icon: '💰',
    title: 'Instant Loan Scam',
    desc: 'Approve ₹5 lakh loan without verification — just pay processing fee',
    diff: 'high',
    tag: 'Financial Fraud',
    url: 'fastloan-india.co.in',
    badge: 'Loan Approved!',
    amount: '₹5,00,000',
    amountLabel: 'Personal Loan Approved',
    fee: 'Processing Fee: ₹2,000',
    feeNote: 'Pay fee to release funds',
    fields: [
      { n: 'name', p: 'Full Name', t: 'text' },
      { n: 'mobile', p: 'Mobile Number', t: 'tel' },
      { n: 'aadhaar', p: 'Aadhaar Number', t: 'text' },
      { n: 'fee', p: 'Card No. for Fee Payment', t: 'text' }
    ],
    exposed: ['Full Name', 'Mobile Number', 'Aadhaar Number', 'Card Details'],
    reveal: 'You just applied for a fake loan. Real lenders NEVER approve loans before KYC verification or charge upfront fees.',
    flags: [
      'No registered NBFC license shown',
      'Loan approved in 30 seconds without verification',
      'Upfront fee demanded before disbursement',
      'No RBI registration number'
    ],
    tips: [
      'Legitimate lenders verify income, CIBIL score, and documents before approval',
      'Processing fees are deducted from disbursed amount — never paid upfront',
      'Always check RBI NBFC registry at rbi.org.in',
      'Report at cybercrime.gov.in or 1930'
    ],
    quiz: [
      { q: 'What is the first red flag of a loan scam?', opts: ['Low interest rate', 'Loan approved without any verification', 'Long repayment period', 'Friendly customer service'], ans: 1, exp: 'Legitimate loans require extensive KYC and credit checks. Instant approval is always a scam signal.' },
      { q: 'Where should you verify an NBFC lender?', opts: ['Google search', 'RBI NBFC registry at rbi.org.in', 'Their website', 'Social media'], ans: 1, exp: 'RBI maintains an official list of registered NBFCs. Always verify.' },
      { q: 'How are legitimate processing fees charged?', opts: ['Paid via UPI before disbursement', 'Collected as cash', 'Deducted from the disbursed loan amount', 'Paid via gift cards'], ans: 2, exp: 'Real lenders deduct fees from the loan — they never ask for upfront payments.' }
    ],
    active: true,
    order: 0
  },
  {
    module_id: 1,
    icon: '💼',
    title: 'Fake Interview Fee Scam',
    desc: 'Cyber Analyst job ₹12 LPA — submit documents and pay ₹200 registration',
    diff: 'med',
    tag: 'Job Fraud',
    url: 'hiring-cyberjobs.in',
    badge: "You're Selected!",
    amount: '₹12 LPA',
    amountLabel: 'Cyber Security Analyst',
    fee: 'Registration Fee: ₹200',
    feeNote: 'Secure your slot before it expires',
    fields: [
      { n: 'name', p: 'Full Name', t: 'text' },
      { n: 'resume', p: 'Upload Resume (Link)', t: 'text' },
      { n: 'aadhaar', p: 'Aadhaar Number', t: 'text' },
      { n: 'pan', p: 'PAN Card Number', t: 'text' },
      { n: 'fee', p: 'Pay ₹200 Registration Fee (UPI)', t: 'text' }
    ],
    exposed: ['Name', 'Resume (Work History)', 'Aadhaar Number', 'PAN Number', 'Payment Details'],
    reveal: 'You handed over PAN + Aadhaar — enough for identity theft, fraudulent loan applications, and SIM swaps.',
    flags: [
      'No official company website or verified email domain',
      'Fee charged before interview happens',
      'Requests Aadhaar + PAN together — perfect for identity theft',
      'No HR contact name or office address'
    ],
    tips: [
      'Legitimate companies never charge registration or interview fees',
      'Verify the company on MCA21',
      'Check company reviews on Glassdoor or LinkedIn',
      'Never share Aadhaar + PAN in the same form'
    ],
    quiz: [
      { q: 'Which document combination is most dangerous to share with fake recruiters?', opts: ['Resume + Photo', 'Aadhaar + PAN together', 'Degree certificates', 'LinkedIn profile'], ans: 1, exp: 'Aadhaar + PAN together enables identity theft, fraudulent loans, and SIM swap attacks.' },
      { q: 'What should you do before submitting to a job portal?', opts: ['Pay the fee quickly', 'Verify company on MCA21 or LinkedIn', 'Trust Google reviews', 'Accept the offer immediately'], ans: 1, exp: 'MCA21 shows registered companies in India. Fake companies won\'t appear there.' },
      { q: 'Legitimate companies charge interview fees:', opts: ['Only for senior roles', 'For government jobs', 'Never', 'Always for tech jobs'], ans: 2, exp: 'No legitimate employer ever charges candidates for interviews or registration.' }
    ],
    active: true,
    order: 1
  },
  {
    module_id: 2,
    icon: '📱',
    title: 'Too-Good-To-Be-True Phone Deal',
    desc: 'iPhone 16 Pro for ₹2,999 — today only! Enter address + card.',
    diff: 'high',
    tag: 'E-Commerce Fraud',
    url: 'apple-deals-india.shop',
    badge: 'Flash Sale Live!',
    amount: '₹2,999',
    amountLabel: 'iPhone 16 Pro (Was ₹1,39,900)',
    fee: 'Pay Now to Reserve',
    feeNote: 'Only 3 units left!',
    fields: [
      { n: 'name', p: 'Full Name', t: 'text' },
      { n: 'address', p: 'Delivery Address', t: 'text' },
      { n: 'card', p: 'Card Number', t: 'text' },
      { n: 'expiry', p: 'Card Expiry (MM/YY)', t: 'text' },
      { n: 'cvv', p: 'CVV', t: 'text' }
    ],
    exposed: ['Full Card Number', 'Expiry Date', 'CVV', 'Home Address'],
    reveal: 'You just handed over complete card details. This enables full card cloning and fraudulent purchases.',
    flags: [
      'URL ends in .shop — not apple.com',
      'Price 98% below MRP is impossible',
      'Urgency: "Only 3 units left"',
      'No seller details, return policy, or GST number'
    ],
    tips: [
      'Apple sells officially only at apple.com/in or authorised resellers',
      'Prices 90%+ below MRP are always scams',
      'CVV should NEVER be entered on unknown sites',
      'Use virtual cards for online shopping'
    ],
    quiz: [
      { q: 'What is the safest way to buy Apple products in India?', opts: ['Facebook Marketplace', 'Telegram groups', 'apple.com/in or authorised resellers', 'WhatsApp deals'], ans: 2, exp: 'Apple has an official India store and authorized retail partners. Never buy from unverified sites.' },
      { q: 'A product priced 95% below MRP is:', opts: ['A genuine clearance sale', 'A scam', 'A manufacturer defect', 'A beta product'], ans: 1, exp: 'No legitimate seller can price genuine Apple products 95% below MRP — it\'s always fraud.' },
      { q: 'Which detail should you NEVER share online?', opts: ['Email address', 'Phone number', 'CVV of your credit card', 'Name'], ans: 2, exp: 'CVV is a security code that should only be used on secure, verified checkout pages.' }
    ],
    active: true,
    order: 2
  },
  {
    module_id: 3,
    icon: '🥇',
    title: 'Fake Gold Coin Investment',
    desc: '24K gold coin market value ₹75,000 — get it for ₹4,999.',
    diff: 'med',
    tag: 'Investment Fraud',
    url: 'goldcoin-offer24k.com',
    badge: 'Certified 24K Gold',
    amount: '₹4,999',
    amountLabel: '24K Gold Coin (Market ₹75,000)',
    fee: 'Order Now — Offer Ends Soon',
    feeNote: 'BIS Hallmarked (claimed)',
    fields: [
      { n: 'name', p: 'Full Name', t: 'text' },
      { n: 'address', p: 'Delivery Address', t: 'text' },
      { n: 'upi', p: 'UPI ID for Refund if Unavailable', t: 'text' }
    ],
    exposed: ['Name', 'Home Address', 'UPI ID'],
    reveal: 'You ordered fake gold. The "coin" is brass-plated. Your UPI ID can be used to initiate payment requests.',
    flags: [
      'No BIS hallmark certificate shown',
      'Price is 93% below market rate',
      'No seller GST number or return policy',
      '"Limited stock" creates artificial urgency'
    ],
    tips: [
      'Buy gold only from RBI-authorised dealers or bank gold schemes',
      'Always verify BIS hallmark at bis.gov.in',
      'Sovereign Gold Bonds are the safest gold investment',
      'Never share UPI ID as refund destination — it can be misused'
    ],
    quiz: [
      { q: 'Where should you buy certified gold in India?', opts: ['WhatsApp groups', 'Facebook Marketplace', 'Banks or BIS-hallmarked jewellers', 'Telegram channels'], ans: 2, exp: 'RBI-authorised dealers and banks are the only safe sources for gold purchases in India.' },
      { q: 'BIS hallmark can be verified at:', opts: ['The seller\'s website', 'bis.gov.in', 'Google', 'Social media'], ans: 1, exp: 'BIS (Bureau of Indian Standards) maintains an official registry of hallmarked products.' },
      { q: 'What can fraudsters do with your UPI ID?', opts: ['Nothing — it\'s only for receiving', 'Send you money only', 'Initiate collect requests to trick you', 'Block your account'], ans: 2, exp: 'Fraudsters use collect/request features to trick victims into entering PIN and approving payments.' }
    ],
    active: true,
    order: 3
  },
  {
    module_id: 4,
    icon: '🎰',
    title: 'Lucky Draw Entry Fee',
    desc: 'Win BMW, iPhone, or ₹10 Lakhs cash. Entry fee just ₹50.',
    diff: 'low',
    tag: 'Lottery Fraud',
    url: 'india-lucky-draw2025.in',
    badge: 'YOU HAVE BEEN SELECTED!',
    amount: '₹10,00,000',
    amountLabel: 'Grand Prize Pool',
    fee: 'Entry Fee: ₹50',
    feeNote: 'Only 2 entries left at this price!',
    fields: [
      { n: 'name', p: 'Full Name', t: 'text' },
      { n: 'mobile', p: 'Mobile Number', t: 'text' },
      { n: 'upi', p: 'UPI ID to Receive Winnings', t: 'text' }
    ],
    exposed: ['Name', 'Mobile Number', 'UPI ID'],
    reveal: 'There is no draw. Once you pay ₹50, you get "You almost won — try again for ₹200." The cycle never ends.',
    flags: [
      'You "won" without entering any contest',
      'Pressure: "only 2 entries left"',
      'No organiser name or registration',
      'RBI and Govt of India prohibit paid lottery schemes except state lotteries'
    ],
    tips: [
      'Online lotteries requiring upfront payment are illegal in India (except state lotteries)',
      'No one "wins" a contest they never entered',
      'Report at 1930 (National Cyber Helpline)',
      'The prize amount always grows with each refusal'
    ],
    quiz: [
      { q: 'What happens after you pay the initial ₹50 entry fee?', opts: ['You receive your winnings', 'You get asked to pay more fees repeatedly', 'A courier arrives with your prize', 'The organiser contacts you via email'], ans: 1, exp: 'This is advance fee fraud. After the first payment, requests escalate to ₹200, ₹500, ₹2000 etc.' },
      { q: 'Online lottery schemes requiring upfront payment are:', opts: ['Legal if registered', 'Illegal in India except state lotteries', 'Only legal if over ₹100 entry fee', 'Legal if prize is physical'], ans: 1, exp: 'The Prize Chits and Money Circulation Schemes (Banning) Act 1978 prohibits such schemes.' },
      { q: 'If you "won" a prize you never entered, it is:', opts: ['Your lucky day', 'A scam — always', 'A marketing promotion', 'A government scheme'], ans: 1, exp: 'You cannot win contests you never participated in. Unsolicited "wins" are always scams.' }
    ],
    active: true,
    order: 4
  },
  {
    module_id: 5,
    icon: '💳',
    title: 'Credit Card Discount Scam',
    desc: '90% OFF sale — verify your card to unlock exclusive discounts.',
    diff: 'high',
    tag: 'Card Fraud',
    url: 'hdfc-exclusive-offers.net',
    badge: 'Exclusive Offer for You!',
    amount: '90% OFF',
    amountLabel: 'All Products — Limited Time',
    fee: 'Verify Card to Activate',
    feeNote: 'Enter card details to confirm identity',
    fields: [
      { n: 'name', p: 'Cardholder Name', t: 'text' },
      { n: 'card', p: 'Card Number (16 digits)', t: 'text' },
      { n: 'expiry', p: 'Expiry Date', t: 'text' },
      { n: 'cvv', p: 'CVV', t: 'text' },
      { n: 'otp', p: 'OTP sent to your mobile', t: 'text' }
    ],
    exposed: ['Cardholder Name', 'Full Card Number', 'Expiry Date', 'CVV', 'OTP'],
    reveal: 'You gave them everything including OTP — complete card compromise. Fraudsters can now make unlimited transactions.',
    flags: [
      'Domain is hdfc-offers.net NOT hdfc.com',
      'Banks NEVER ask for CVV or OTP through websites',
      '90% discount is impossible for a real bank offer',
      'No HTTPS padlock or company registration'
    ],
    tips: [
      'Banks NEVER ask for OTP, CVV, or full card number',
      'Always access banking at the official domain',
      'Report card fraud immediately by calling the number on your card',
      'Enable transaction alerts and set spending limits'
    ],
    quiz: [
      { q: 'Your bank will NEVER ask for:', opts: ['Your account number', 'Your registered mobile', 'Your CVV and OTP together', 'Your name'], ans: 2, exp: 'Banks never ask for CVV, PIN, or OTP via any channel. Anyone asking is a fraudster.' },
      { q: 'How do you identify the real bank website?', opts: ['Google the bank name', 'Check the URL exactly matches the official domain', 'Look for a nice logo', 'Check if it has HTTPS'], ans: 1, exp: 'Always manually type the official URL. Phishing sites mimic logos and even use HTTPS certificates.' },
      { q: 'You receive an OTP you did not request. You should:', opts: ['Enter it on the site that asked', 'Call your bank immediately', 'Wait to see what happens', 'Share it with the caller'], ans: 1, exp: 'An unrequested OTP means someone is trying to use your card. Call your bank immediately.' }
    ],
    active: true,
    order: 5
  },
  {
    module_id: 6,
    icon: '🎁',
    title: 'Free Gift Delivery Scam',
    desc: "You've won a Mixer Grinder! Pay ₹99 delivery charge to receive it.",
    diff: 'low',
    tag: 'Delivery Fraud',
    url: 'giftsdelivery-india.in',
    badge: 'Congratulations!',
    amount: 'Free Gift',
    amountLabel: 'Bajaj Mixer Grinder',
    fee: 'Delivery Fee: ₹99',
    feeNote: 'Pay to confirm your address',
    fields: [
      { n: 'name', p: 'Full Name', t: 'text' },
      { n: 'address', p: 'Complete Delivery Address', t: 'text' },
      { n: 'card', p: 'Card Details for ₹99', t: 'text' }
    ],
    exposed: ['Full Name', 'Home Address', 'Card Details'],
    reveal: 'No gift is coming. The ₹99 is just the start — they now have your card details for larger charges.',
    flags: [
      'You won a gift you never registered for',
      'Real companies never charge delivery for prizes',
      'Card details for ₹99 enables any amount to be charged',
      'No prize organizer name, location, or registration'
    ],
    tips: [
      'Legitimate prizes from companies have official communication on company letterhead',
      'Winners of real contests are verified through official channels',
      'Never pay to "claim" a prize',
      'Your card details entered once can be charged repeatedly'
    ],
    quiz: [
      { q: 'Why do scammers charge ₹99 instead of a large amount?', opts: ['Because the gift costs that much to deliver', 'Small amounts feel harmless and lower suspicion', 'It\'s a government tax', 'To cover packaging'], ans: 1, exp: 'Small charges reduce suspicion while capturing card details. They then attempt larger charges.' },
      { q: 'A genuine company prize requires you to:', opts: ['Pay delivery charges', 'Verify via official channels only', 'Share card details', 'Pay registration'], ans: 1, exp: 'Real prizes are verified through official company communications — never through random websites.' },
      { q: 'After entering card details for ₹99, the fraudster can:', opts: ['Only charge ₹99', 'Charge any amount at any time', 'Only do 1 transaction', 'Nothing'], ans: 1, exp: 'Once card details are stored by fraudsters, they can attempt charges at any time and amount.' }
    ],
    active: true,
    order: 6
  },
  {
    module_id: 7,
    icon: '⭐',
    title: 'Reward Points Expiry Scam',
    desc: 'Your reward points worth ₹5,000 expire today. Redeem via our app.',
    diff: 'med',
    tag: 'Malware/App Fraud',
    url: 'rewardpoints-redeem.app',
    badge: 'Your Points Expire TODAY',
    amount: '₹5,000',
    amountLabel: 'Reward Points — Use Before Midnight',
    fee: 'Install App to Redeem',
    feeNote: 'Available on direct download only',
    fields: [
      { n: 'mobile', p: 'Registered Mobile Number', t: 'tel' },
      { n: 'bank', p: 'Bank Name', t: 'text' },
      { n: 'app', p: 'App Install Confirmation Code', t: 'text' }
    ],
    exposed: ['Mobile Number', 'Bank Name', 'Device Access (via App)'],
    reveal: 'The app is malware. Once installed, it reads your SMS (OTPs), monitors banking apps, and can take screenshots.',
    flags: [
      'Real bank apps are ONLY on Play Store/App Store — never side-loaded',
      'Urgency: "expire tonight" forces hasty action',
      'Official bank apps never send APK download links',
      'Sideloaded apps bypass Google Play Protect'
    ],
    tips: [
      'ONLY install banking apps from Google Play Store or Apple App Store',
      'Banks never send APK download links via SMS/WhatsApp',
      'Revoke permissions of suspicious apps immediately in Settings',
      'Report malware apps to cert-in.org.in'
    ],
    quiz: [
      { q: 'Where should you ONLY download banking apps from?', opts: ['SMS links', 'WhatsApp links', 'Official Play Store or App Store', 'Bank website APK'], ans: 2, exp: 'Only Google Play Store and Apple App Store verify app safety. Sideloaded apps bypass all security.' },
      { q: 'A sideloaded malicious banking app can:', opts: ['Only show ads', 'Read your OTPs and banking credentials', 'Just track location', 'Only access contacts'], ans: 1, exp: 'Malicious apps can read SMS (OTPs), log keystrokes, take screenshots, and drain accounts.' },
      { q: 'Real bank reward points are redeemed:', opts: ['In 24 hours only', 'Through the official bank app only', 'Via separate download', 'By calling customer care'], ans: 1, exp: 'Banks provide redemption only through their official, verified apps — never through third-party downloads.' }
    ],
    active: true,
    order: 7
  },
  {
    module_id: 8,
    icon: '🏠',
    title: 'Work From Home Scam',
    desc: 'Earn ₹5,000 daily doing simple data entry. No experience needed.',
    diff: 'med',
    tag: 'Job Fraud',
    url: 'wfh-earnindia.com',
    badge: 'Hiring Now!',
    amount: '₹5,000/day',
    amountLabel: 'Data Entry — Work From Home',
    fee: 'Registration Fee: ₹500',
    feeNote: 'Refundable after first task completion',
    fields: [
      { n: 'name', p: 'Full Name', t: 'text' },
      { n: 'mobile', p: 'WhatsApp Number', t: 'tel' },
      { n: 'bank', p: 'Bank Account for Payments', t: 'text' },
      { n: 'fee', p: 'Registration Fee ₹500 (UPI)', t: 'text' }
    ],
    exposed: ['Name', 'WhatsApp Number', 'Bank Account Details', 'Payment'],
    reveal: 'After paying ₹500, you get a "task" that requires buying more products or paying "insurance". The refund never comes.',
    flags: [
      'No company name, PAN, or GST number',
      '₹5,000/day for "data entry" is not a real market rate',
      'Refundable fee is a classic bait-and-switch',
      'WhatsApp-only communication avoids paper trail'
    ],
    tips: [
      'Market rate for data entry is ₹200–800/day — ₹5,000 is impossible',
      'Legitimate employers do not charge registration fees',
      'Always get a written offer letter with company details',
      'Verify on Glassdoor, LinkedIn, or MCA21'
    ],
    quiz: [
      { q: 'What is the realistic daily rate for data entry work in India?', opts: ['₹5,000–10,000', '₹200–800', '₹50,000', '₹2,000–5,000'], ans: 1, exp: 'Market rate for data entry is ₹200–800/day. Anything claiming ₹5,000+ for simple tasks is a scam.' },
      { q: 'A "refundable registration fee" for a job is:', opts: ['Standard practice', 'A scam signal — legitimate jobs never charge fees', 'Only for government jobs', 'Required by law'], ans: 1, exp: 'No legitimate employer charges registration, training, or deposit fees. This is always a scam.' },
      { q: 'WFH scam operators prefer WhatsApp because:', opts: ['It\'s more professional', 'It avoids creating a paper trail', 'It\'s faster', 'You can send files'], ans: 1, exp: 'WhatsApp messages are harder to trace and disappear — unlike official email or documents.' }
    ],
    active: true,
    order: 8
  },
  {
    module_id: 9,
    icon: '📈',
    title: 'Fake Investment Scheme',
    desc: 'Invest ₹10,000 — guaranteed ₹20,000 back in 7 days.',
    diff: 'high',
    tag: 'Ponzi Scheme',
    url: 'doublemoney-invest.in',
    badge: '100% Guaranteed Returns',
    amount: '2X in 7 Days',
    amountLabel: 'Invest ₹10,000 → Get ₹20,000',
    fee: 'Minimum Investment: ₹10,000',
    feeNote: 'Returns paid daily. Withdraw anytime.',
    fields: [
      { n: 'name', p: 'Full Name', t: 'text' },
      { n: 'mobile', p: 'Mobile Number', t: 'tel' },
      { n: 'amount', p: 'Investment Amount (Min ₹10,000)', t: 'number' },
      { n: 'upi', p: 'UPI ID for Returns', t: 'text' }
    ],
    exposed: ['Full Name', 'Mobile Number', 'UPI ID', 'Investment Money'],
    reveal: 'This is a Ponzi scheme. Early investors are paid using new investor money. When recruitment stops, everyone loses.',
    flags: [
      '100% guaranteed returns are impossible in any legal investment',
      '7-day doubling = 5,200% annual return — physically impossible',
      'No SEBI registration number shown',
      'No explanation of how returns are generated'
    ],
    tips: [
      'SEBI-regulated investments cap realistic returns at 10-15% annually',
      'Verify investment companies at sebi.gov.in',
      '"Guaranteed returns" are illegal to promise under SEBI regulations',
      'Report Ponzi schemes to sebi.gov.in'
    ],
    quiz: [
      { q: 'What annual return does "double in 7 days" translate to?', opts: ['200%', '1,000%', 'Over 5,000%', '100%'], ans: 2, exp: 'Doubling in 7 days = ~5,200% annual return. The entire global stock market averages 10% per year.' },
      { q: 'Where do you verify a legitimate investment firm in India?', opts: ['Google', 'Their website', 'SEBI registry at sebi.gov.in', 'Social media'], ans: 2, exp: 'SEBI (Securities and Exchange Board of India) maintains the official registry of regulated investment firms.' },
      { q: 'In a Ponzi scheme, early investors are paid using:', opts: ['Genuine investment profits', 'New investors\' money', 'Bank loans', 'Government funds'], ans: 1, exp: 'Ponzi schemes have no real investment. Early investors are paid with money from new recruits until collapse.' }
    ],
    active: true,
    order: 9
  }
    ,
  {
    module_id: 10,
    icon: '👮',
    title: 'Digital Arrest Scam',
    desc: 'CBI/Narcotics Bureau: Your number linked to illegal activity. Pay fine to avoid arrest.',
    diff: 'high',
    tag: 'Impersonation Fraud',
    url: 'cbinarcoticsunit.gov.fake',
    badge: 'OFFICIAL NOTICE',
    amount: 'Warrant Issued',
    amountLabel: 'Cybercrime Investigation Unit',
    fee: 'Pay Fine to Avoid Arrest: ₹25,000',
    feeNote: 'Failure to comply = immediate physical arrest',
    fields: [
      { n: 'name', p: 'Full Name', t: 'text' },
      { n: 'aadhaar', p: 'Aadhaar Number (for verification)', t: 'text' },
      { n: 'amount', p: 'Fine Amount ₹25,000 (UPI)', t: 'text' }
    ],
    exposed: ['Full Name', 'Aadhaar Number', 'Money'],
    reveal: '"Digital arrest" does not exist in Indian law. Police NEVER demand money via UPI. This is impersonation fraud.',
    flags: [
      '"Digital arrest" is not a legal concept in India',
      'Real law enforcement cannot arrest you over a video call',
      'Official FIRs are served physically — never via WhatsApp',
      'No government agency accepts UPI payments for fines'
    ],
    tips: [
      'Indian law has no provision for "digital arrest"',
      'Real police contact happens in person or through official court summons',
      'PM Modi warned the nation about digital arrest scams in October 2024',
      'Hang up immediately and call 1930 to report'
    ],
    quiz: [
      { q: '"Digital arrest" in India is:', opts: ['A new cyber law', 'Not a legal concept — it does not exist', 'Only for cybercriminals', 'A Supreme Court ruling'], ans: 1, exp: 'Digital arrest has no legal basis in India. PM Modi specifically warned citizens about this in October 2024.' },
      { q: 'Real Indian law enforcement fines are paid:', opts: ['Via UPI on video calls', 'In Bitcoin', 'Through official court/challan systems only', 'Via WhatsApp Pay'], ans: 2, exp: 'All official government payments go through court-mandated channels, challans, or NEFT — never personal UPI.' },
      { q: 'If you receive a "digital arrest" video call, you should:', opts: ['Pay the fine immediately', 'Stay on the call to explain yourself', 'Hang up and call 1930 to report', 'Ask for more time'], ans: 1, exp: 'Hang up immediately. The more you engage, the more psychological pressure they apply. Call 1930.' }
    ],
    active: true,
    order: 10
  },
  {
    module_id: 11,
    icon: '🤖',
    title: 'Deepfake Family Emergency',
    desc: 'Urgent: Your son/daughter has been in an accident. Send ₹15,000 immediately.',
    diff: 'high',
    tag: 'Deepfake/AI Fraud',
    url: 'whatsapp-voice-message.fake',
    badge: 'URGENT Voice Message',
    amount: '₹15,000 Needed',
    amountLabel: 'Family Emergency — Act Now',
    fee: 'Send via UPI Immediately',
    feeNote: 'They are at the hospital right now',
    fields: [
      { n: 'name', p: 'Your Name', t: 'text' },
      { n: 'relation', p: 'Relation (Son/Daughter/Parent)', t: 'text' },
      { n: 'upi', p: 'UPI to Send ₹15,000', t: 'text' }
    ],
    exposed: ['Name', 'Family Details', 'Money'],
    reveal: "AI voice cloning can replicate anyone's voice from just 3 seconds of audio. The \"emergency\" is fabricated.",
    flags: [
      'Extreme urgency prevents rational thinking',
      'Caller asks you NOT to call the person back directly',
      'Voice may sound slightly robotic or have audio artifacts',
      'Always demands immediate transfer — will not wait'
    ],
    tips: [
      'Always hang up and call the family member directly on their known number',
      'Establish a family "safe word" for emergency verification',
      '3-second audio sample is enough for modern AI voice cloning',
      'Slow down — scammers rely on panic. Take 60 seconds to verify.'
    ],
    quiz: [
      { q: 'AI voice cloning requires approximately how much audio?', opts: ['1 hour of audio', '30 minutes', 'As little as 3–5 seconds', 'At least a day of samples'], ans: 2, exp: 'Modern AI voice cloning tools can clone a voice from just 3-5 seconds of audio from social media videos.' },
      { q: 'When you receive an emergency call, the FIRST thing to do is:', opts: ['Send money immediately', 'Hang up and call the person on their known number', 'Stay on call for more details', 'Call 100'], ans: 1, exp: 'Always verify by directly calling the person supposedly in distress on their saved number.' },
      { q: 'The best protection against voice cloning scams is:', opts: ['Keeping your phone private', 'A family safe word for verification', 'Only answering known numbers', 'Installing antivirus'], ans: 1, exp: 'A pre-agreed family code word (unrelated to emergency context) cannot be guessed by an AI caller.' }
    ],
    active: true,
    order: 11
  },
  {
    module_id: 12,
    icon: '🏦',
    title: 'Bank KYC Verification Scam',
    desc: 'Your bank account will be blocked today unless you complete KYC verification immediately.',
    diff: 'med',
    tag: 'Banking Fraud',
    url: 'secure-kyc-update.bankverify.com',
    badge: 'Account Suspension Alert',
    amount: 'Account at Risk',
    amountLabel: 'Verify KYC Within 30 Minutes',
    fee: 'Update PAN & Aadhaar Details',
    feeNote: 'Failure may result in account freeze',
    fields: [
      { n: 'fullname', p: 'Full Name', t: 'text' },
      { n: 'account', p: 'Bank Account Number', t: 'text' },
      { n: 'otp', p: 'OTP Received', t: 'text' }
    ],
    exposed: ['Bank Details', 'OTP', 'Identity Information'],
    reveal: 'Banks never ask customers to share OTPs or complete KYC through random links sent via SMS or WhatsApp.',
    flags: [
      'Creates panic by threatening account closure',
      'Requests OTP or login credentials',
      'Link does not belong to official bank domain',
      'Urgent deadlines pressure users'
    ],
    tips: [
      'Always visit the official bank website manually',
      'Never share OTPs with anyone',
      'Contact your bank directly for verification',
      'Check sender information carefully'
    ],
    quiz: [
      { q: 'What should you do if you receive a KYC update message?', opts: ['Click immediately', 'Verify through official bank channels', 'Share OTP for verification', 'Ignore all banking messages'], ans: 1, exp: 'Always verify directly with your bank using official contact methods.' },
      { q: 'Who should know your OTP?', opts: ['Bank employee', 'Customer support', 'Only you', 'Relationship manager'], ans: 2, exp: 'OTP is confidential and should never be shared.' },
      { q: 'Why do scammers create urgency?', opts: ['To save time', 'To prevent verification', 'To make victims act without thinking', 'To improve service'], ans: 2, exp: 'Urgency reduces critical thinking and increases compliance.' }
    ],
    active: true,
    order: 12
  },
  {
    module_id: 13,
    icon: '📸',
    title: 'Instagram Account Verification Scam',
    desc: 'Your Instagram account is at risk of suspension. Verify your identity now to keep your blue tick and followers.',
    diff: 'med',
    tag: 'Social Media Phishing',
    url: 'instagram-security-verify.com',
    badge: 'Account Suspension Warning',
    amount: 'Account Restricted',
    amountLabel: 'Verify Within 12 Hours',
    fee: 'Login Required',
    feeNote: 'Failure may result in account deletion',
    fields: [
      { n: 'username', p: 'Instagram Username', t: 'text' },
      { n: 'email', p: 'Recovery Email', t: 'email' },
      { n: 'password', p: 'Instagram Password', t: 'password' }
    ],
    exposed: ['Username', 'Password', 'Email Access'],
    reveal: 'Attackers steal Instagram credentials and take over accounts to scam followers or sell access.',
    flags: [
      'Threatens account suspension',
      'Requests your password directly',
      'Domain is not instagram.com',
      'Creates urgency to bypass thinking'
    ],
    tips: [
      'Instagram never asks for passwords through external links',
      'Check the website domain carefully',
      'Enable two-factor authentication',
      'Use a password manager'
    ],
    quiz: [
      { q: 'Which website should you trust for Instagram login?', opts: ['instagram-security-verify.com', 'instagram-help-login.net', 'instagram.com', 'secure-meta-verify.com'], ans: 2, exp: 'Only official Instagram domains should be trusted.' },
      { q: 'What is the biggest risk?', opts: ['Losing followers', 'Account takeover', 'Slow internet', 'App update'], ans: 1, exp: 'Stolen credentials allow complete account takeover.' },
      { q: 'What helps protect accounts?', opts: ['Strong passwords only', '2FA', 'Private account', 'More followers'], ans: 1, exp: 'Two-factor authentication greatly reduces account compromise risk.' }
    ],
    active: true,
    order: 13
  },
  {
    module_id: 14,
    icon: '⚡',
    title: 'Electricity Bill Disconnection Scam',
    desc: 'Your electricity service will be disconnected today due to an unpaid bill. Pay immediately.',
    diff: 'med',
    tag: 'Utility Fraud',
    url: 'power-bill-payment.in',
    badge: 'FINAL DISCONNECTION NOTICE',
    amount: '₹2,485 Due',
    amountLabel: 'Service Termination Today',
    fee: 'Pay Outstanding Bill',
    feeNote: 'Power supply will be disconnected within 30 minutes',
    fields: [
      { n: 'name', p: 'Consumer Name', t: 'text' },
      { n: 'mobile', p: 'Registered Mobile Number', t: 'text' },
      { n: 'upi', p: 'UPI ID For Payment', t: 'text' }
    ],
    exposed: ['Personal Details', 'UPI Information', 'Money'],
    reveal: 'Scammers impersonate electricity providers and pressure victims into making immediate payments.',
    flags: [
      'Threatens immediate disconnection',
      'Uses fear and urgency',
      'Demands payment through personal accounts',
      'Message often arrives outside normal billing cycles'
    ],
    tips: [
      'Verify bills through official utility portals',
      'Call customer service directly',
      'Never trust payment links from SMS',
      'Check your actual bill status first'
    ],
    quiz: [
      { q: 'What is the first step after receiving such a message?', opts: ['Pay immediately', 'Verify with utility provider', 'Ignore forever', 'Share with friends'], ans: 1, exp: 'Always verify directly with the utility provider.' },
      { q: 'Why do scammers use disconnection threats?', opts: ['To improve service', 'To create panic', 'To save time', 'To help customers'], ans: 1, exp: 'Fear causes people to act quickly without verification.' },
      { q: 'Where should bills be verified?', opts: ['SMS links', 'WhatsApp forwards', 'Official provider website/app', 'Social media comments'], ans: 2, exp: 'Official channels are safest.' }
    ],
    active: true,
    order: 14
  },
  {
    module_id: 15,
    icon: '💰',
    title: 'Income Tax Refund Scam',
    desc: 'You are eligible for a tax refund of ₹48,500. Submit your bank details to receive payment.',
    diff: 'high',
    tag: 'Identity Theft',
    url: 'incometax-refund-gov.co.in',
    badge: 'Tax Refund Approved',
    amount: '₹48,500 Refund',
    amountLabel: 'Claim Within 24 Hours',
    fee: 'Bank Verification Required',
    feeNote: 'Refund will expire if not claimed',
    fields: [
      { n: 'pan', p: 'PAN Number', t: 'text' },
      { n: 'account', p: 'Bank Account Number', t: 'text' },
      { n: 'ifsc', p: 'IFSC Code', t: 'text' }
    ],
    exposed: ['PAN', 'Bank Details', 'Identity Information'],
    reveal: 'Scammers use fake refund notices to steal financial and identity information.',
    flags: [
      'Unexpected refund notification',
      'Non-government website',
      'Demands banking details',
      'Short deadlines'
    ],
    tips: [
      'Check refunds only through official government portals',
      'Never share banking details through email links',
      'Verify sender addresses carefully',
      'Enable account alerts'
    ],
    quiz: [
      { q: 'What should you verify first?', opts: ['Refund amount', 'Website domain', 'Bank balance', 'PAN number'], ans: 1, exp: 'Always verify the website before entering data.' },
      { q: 'Which information is especially sensitive?', opts: ['PAN and bank account details', 'Mobile wallpaper', 'Browser history', 'WiFi name'], ans: 0, exp: 'Identity and banking information can be abused.' },
      { q: 'Government refund notices should be checked via?', opts: ['WhatsApp', 'Official tax portal', 'SMS links', 'Facebook'], ans: 1, exp: 'Always use official government portals.' }
    ],
    active: true,
    order: 15
  }  ,
  {
    module_id: 16,
    icon: '🏢',
    title: 'Corporate Password Reset Scam',
    desc: 'Your Microsoft 365 account password expires today. Reset it immediately to avoid losing email access.',
    diff: 'high',
    tag: 'Corporate Phishing',
    url: 'microsoft365-password-reset.net',
    badge: 'Password Expiration Notice',
    amount: 'Corporate Account Alert',
    amountLabel: 'Reset Required Today',
    fee: 'Security Verification',
    feeNote: 'Access may be suspended',
    fields: [
      { n: 'employeeid', p: 'Employee ID', t: 'text' },
      { n: 'email', p: 'Work Email', t: 'email' },
      { n: 'password', p: 'Current Password', t: 'password' }
    ],
    exposed: ['Corporate Credentials', 'Employee Information', 'Email Access'],
    reveal: 'Corporate phishing attacks target employee accounts to gain access to company systems and sensitive data.',
    flags: [
      'Requests current password',
      'External website',
      'Urgent expiration warning',
      'Impersonates IT department'
    ],
    tips: [
      'Verify with internal IT teams',
      'Check sender domain carefully',
      'Use MFA wherever possible',
      'Report suspicious emails immediately'
    ],
    quiz: [
      { q: 'Who should verify password reset requests?', opts: ['Random email links', 'Coworkers', 'IT department', 'Social media'], ans: 2, exp: 'Always confirm with official IT channels.' },
      { q: 'Why are employees targeted?', opts: ['Entertainment', 'Access to company systems', 'Free software', 'Internet speed'], ans: 1, exp: 'Corporate accounts often provide access to valuable resources.' },
      { q: 'Best defense against credential theft?', opts: ['Ignoring emails', 'Multi-factor authentication', 'Using public WiFi', 'Sharing passwords'], ans: 1, exp: 'MFA significantly reduces compromise risk.' }
    ],
    active: true,
    order: 16
  },
  {
    module_id: 17,
    icon: '📶',
    title: 'SIM Upgrade Scam',
    desc: 'Your SIM must be upgraded to support 5G services. Verify your number and OTP now.',
    diff: 'high',
    tag: 'Telecom Fraud',
    url: '5g-network-upgrade.com',
    badge: 'SIM Upgrade Required',
    amount: 'Free 5G Upgrade',
    amountLabel: 'Activate Today',
    fee: 'Verification Required',
    feeNote: 'Your number may stop working',
    fields: [
      { n: 'mobile', p: 'Mobile Number', t: 'text' },
      { n: 'aadhaar', p: 'Aadhaar Number', t: 'text' },
      { n: 'otp', p: 'OTP Received', t: 'text' }
    ],
    exposed: ['Mobile Number', 'OTP', 'Identity Information'],
    reveal: 'Scammers use OTPs to transfer your number to a SIM card they control, allowing them to intercept banking and authentication messages.',
    flags: [
      'Unexpected upgrade request',
      'Asks for OTP',
      'Threatens service disruption',
      'Requests identity documents'
    ],
    tips: [
      'Telecom companies never ask for OTPs over calls or messages',
      'Contact your provider directly',
      'Enable SIM lock where available',
      'Monitor sudden loss of network signal'
    ],
    quiz: [
      { q: 'What can happen after a successful SIM swap?', opts: ['Faster internet', 'Number transferred to attacker', 'Free upgrade', 'Better signal'], ans: 1, exp: 'The attacker gains control of your phone number.' },
      { q: 'Why is OTP theft dangerous?', opts: ['It changes wallpaper', 'It enables account takeover', 'It updates SIM', 'It improves security'], ans: 1, exp: 'Many services use OTPs for authentication.' },
      { q: 'What should you do if your phone suddenly loses network service?', opts: ['Ignore it', 'Contact your telecom provider immediately', 'Restart later', 'Buy a new phone'], ans: 1, exp: 'Unexpected loss of service may indicate SIM swap activity.' }
    ],
    active: true,
    order: 17
  },
  {
    module_id: 18,
    icon: '🎓',
    title: 'Government Scholarship Scam',
    desc: 'Congratulations! You have been selected for a government scholarship worth ₹50,000.',
    diff: 'med',
    tag: 'Education Fraud',
    url: 'national-scholarship-benefits.in',
    badge: 'Scholarship Approved',
    amount: '₹50,000 Award',
    amountLabel: 'Claim Before Deadline',
    fee: 'Bank Verification Required',
    feeNote: 'Scholarship expires in 24 hours',
    fields: [
      { n: 'name', p: 'Student Name', t: 'text' },
      { n: 'aadhaar', p: 'Aadhaar Number', t: 'text' },
      { n: 'account', p: 'Bank Account Number', t: 'text' }
    ],
    exposed: ['Identity Information', 'Bank Details'],
    reveal: 'Scammers target students by promising scholarships and collecting identity and banking information.',
    flags: [
      'Unexpected scholarship approval',
      'Requests Aadhaar and bank details',
      'Creates urgency',
      'Uses unofficial website'
    ],
    tips: [
      'Verify scholarships through official portals',
      'Never share personal documents via random links',
      'Check eligibility criteria carefully',
      'Confirm with your institution'
    ],
    quiz: [
      { q: 'What should you verify first?', opts: ['Amount offered', 'Official scholarship website', 'Bank account', 'Aadhaar'], ans: 1, exp: 'Always verify through official government or institution portals.' },
      { q: 'Why do scammers target students?', opts: ['Students have more money', 'Students may be less familiar with fraud', 'Scholarships are illegal', 'Banks require it'], ans: 1, exp: 'Students are often targeted because they are actively seeking opportunities.' },
      { q: 'Which information is sensitive?', opts: ['Aadhaar number', 'Favorite subject', 'College name', 'Age'], ans: 0, exp: 'Identity documents can be misused for fraud.' }
    ],
    active: true,
    order: 18
  },
  {
    module_id: 19,
    icon: '📢',
    title: 'Copyright Violation Account Suspension',
    desc: 'Your Facebook/Instagram page violated copyright policies. Appeal now to avoid deletion.',
    diff: 'high',
    tag: 'Social Engineering',
    url: 'meta-copyright-review.com',
    badge: 'Page Removal Warning',
    amount: 'Account Restricted',
    amountLabel: 'Appeal Required',
    fee: 'Identity Verification',
    feeNote: 'Page may be deleted within 12 hours',
    fields: [
      { n: 'username', p: 'Page Username', t: 'text' },
      { n: 'email', p: 'Business Email', t: 'email' },
      { n: 'password', p: 'Account Password', t: 'password' }
    ],
    exposed: ['Social Media Credentials', 'Email Access'],
    reveal: 'Attackers impersonate Meta and steal login credentials to hijack social media accounts.',
    flags: [
      'Threatens immediate page deletion',
      'Requests password directly',
      'Uses unofficial domain',
      'Creates panic'
    ],
    tips: [
      'Check notification center inside the app',
      'Never enter passwords on external sites',
      'Enable 2FA',
      'Verify domain names carefully'
    ],
    quiz: [
      { q: 'Where should policy violations appear?', opts: ['Random websites', 'Official platform notifications', 'WhatsApp', 'SMS only'], ans: 1, exp: 'Legitimate violations appear inside the platform.' },
      { q: 'What is the scammer after?', opts: ['Likes', 'Credentials', 'Followers', 'Photos'], ans: 1, exp: 'The goal is account takeover.' },
      { q: 'What helps protect accounts?', opts: ['2FA', 'More posts', 'Private profile', 'Faster internet'], ans: 0, exp: 'Two-factor authentication adds extra security.' }
    ],
    active: true,
    order: 19
  }  ,
  {
    module_id: 20,
    icon: '✈️',
    title: 'International Parcel Customs Fee Scam',
    desc: 'Your international parcel is held at customs. Pay clearance charges immediately.',
    diff: 'med',
    tag: 'Delivery Fraud',
    url: 'customs-clearance-india.com',
    badge: 'Parcel Held At Customs',
    amount: '₹1,950 Clearance Fee',
    amountLabel: 'Release Package Today',
    fee: 'Customs Processing Charge',
    feeNote: 'Parcel will be returned if unpaid',
    fields: [
      { n: 'name', p: 'Recipient Name', t: 'text' },
      { n: 'address', p: 'Delivery Address', t: 'text' },
      { n: 'card', p: 'Card Number', t: 'text' }
    ],
    exposed: ['Card Information', 'Address', 'Personal Data'],
    reveal: 'Victims are tricked into paying fake customs fees and revealing payment details.',
    flags: [
      'Unexpected international shipment',
      'Small fee requests',
      'Urgency',
      'Unofficial customs website'
    ],
    tips: [
      'Verify tracking with official courier websites',
      'Confirm whether you actually ordered something',
      'Never trust customs requests via SMS links',
      'Use official tracking numbers'
    ],
    quiz: [
      { q: 'What should you check first?', opts: ['Payment amount', 'Whether you ordered the package', 'Card limit', 'Address'], ans: 1, exp: 'Many victims never ordered any package.' },
      { q: 'What do scammers want?', opts: ['Customs data', 'Card details and money', 'Delivery confirmation', 'Phone updates'], ans: 1, exp: 'The primary goal is financial theft.' },
      { q: 'Where should tracking be verified?', opts: ['SMS link', 'Official courier site', 'WhatsApp', 'Facebook'], ans: 1, exp: 'Always use official courier services.' }
    ],
    active: true,
    order: 20
  },
  {
    module_id: 21,
    icon: '❤️',
    title: 'Disaster Relief Donation Scam',
    desc: 'Help flood victims immediately. Donate now to save lives.',
    diff: 'med',
    tag: 'Charity Fraud',
    url: 'emergency-relief-fund-help.org',
    badge: 'Emergency Appeal',
    amount: 'Donate Any Amount',
    amountLabel: 'Lives Depend On You',
    fee: 'Instant UPI Donation',
    feeNote: 'Campaign ending tonight',
    fields: [
      { n: 'name', p: 'Full Name', t: 'text' },
      { n: 'mobile', p: 'Mobile Number', t: 'text' },
      { n: 'upi', p: 'UPI ID', t: 'text' }
    ],
    exposed: ['Personal Details', 'Financial Information'],
    reveal: 'Scammers exploit emotions during disasters to collect donations for fake causes.',
    flags: [
      'Heavy emotional pressure',
      'Little transparency',
      'Urgent donation requests',
      'No verified charity registration'
    ],
    tips: [
      'Donate through verified organizations',
      'Research charities before donating',
      'Check registration details',
      'Avoid donating via forwarded messages'
    ],
    quiz: [
      { q: 'What should you verify before donating?', opts: ['Logo color', 'Organization legitimacy', 'Donation amount', 'Website design'], ans: 1, exp: 'Always verify the charity is genuine.' },
      { q: 'Why do these scams work?', opts: ['People are emotional', 'Internet is slow', 'Banks require donations', 'Government support'], ans: 0, exp: 'Scammers exploit empathy and urgency.' },
      { q: 'Best place to donate?', opts: ['Random UPI IDs', 'Verified charities', 'Social media DMs', 'Unknown links'], ans: 1, exp: 'Verified organizations are safest.' }
    ],
    active: true,
    order: 21
  }  ,
  {
    module_id: 22,
    icon: '📶',
    title: 'Free Public Wi-Fi Login Scam',
    desc: 'Connect to free Wi-Fi by signing in with your email account.',
    diff: 'high',
    tag: 'Credential Theft',
    url: 'free-airport-wifi-login.com',
    badge: 'Free Wi-Fi Access',
    amount: 'Unlimited Internet',
    amountLabel: 'Login To Continue',
    fee: 'Account Verification',
    feeNote: 'Access expires in 5 minutes',
    fields: [
      { n: 'email', p: 'Email Address', t: 'email' },
      { n: 'password', p: 'Password', t: 'password' }
    ],
    exposed: ['Email Credentials', 'Personal Data'],
    reveal: 'Fake captive portals steal email credentials and can lead to account compromise.',
    flags: ['Requests full email password', 'Suspicious Wi-Fi network', 'Poor website design', 'Unexpected login requirements'],
    tips: ['Use trusted networks only', 'Avoid entering passwords on public Wi-Fi portals', 'Use VPNs when possible', 'Enable MFA on important accounts'],
    quiz: [
      { q: 'What is the main goal of fake Wi-Fi portals?', opts: ['Improve internet speed', 'Steal credentials', 'Show ads', 'Collect surveys'], ans: 1, exp: 'Credential theft is the primary objective.' },
      { q: 'Which account is commonly targeted?', opts: ['Gaming account', 'Email account', 'Calculator app', 'Gallery app'], ans: 1, exp: 'Email access often leads to other account compromises.' },
      { q: 'What helps secure public Wi-Fi usage?', opts: ['VPN', 'More tabs open', 'Bluetooth', 'Airplane mode'], ans: 0, exp: 'VPNs help protect traffic on untrusted networks.' }
    ],
    active: true,
    order: 22
  }
];



